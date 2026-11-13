import argparse
from collections import deque
from fractions import Fraction
import hashlib
import json
from pathlib import Path


def parity(value):
    return value.bit_count() % 2


def exact_character_checks():
    results = []
    for wires in (2, 4, 6, 8):
        dimension = 1 << wires
        even = [label for label in range(1, dimension) if parity(label) == 0]
        for label in range(1, dimension):
            exponent = sum(
                (-1 if parity(label & basis) else 1)
                for basis in (0, dimension - 1)
            )
            assert exponent % 4 == (2 if label in even else 0)
        for basis in range(dimension):
            character_sum = sum(-1 if parity(label & basis) else 1 for label in even)
            circuit_phase_over_pi = Fraction(character_sum, dimension)
            target_phase_over_pi = Fraction(1, 2) if basis in (0, dimension - 1) else 0
            assert circuit_phase_over_pi == target_phase_over_pi - Fraction(1, dimension)
        if wires <= 4:
            for left in range(1, dimension):
                for right in range(1, dimension):
                    if left == right:
                        continue
                    for fiber in (0, 1):
                        signed_count = sum(
                            -1 if parity(left & basis) else 1
                            for basis in range(dimension)
                            if parity(right & basis) == fiber
                        )
                        assert signed_count == 0
        results.append({
            'wires': wires,
            'nonzero_even_labels': len(even),
            'hard_instance_character_exponents_mod_4': '2 for nonzero even; 0 for odd',
            'uniform_rotation_angle_over_pi': str(Fraction(-2, dimension)),
            'global_phase_over_pi': str(Fraction(-1, dimension)),
            'all_basis_phases_exact': True,
            'all_distinct_nonzero_label_fibers_checked': wires <= 4,
        })
    return results


def shortest_network(wires, max_states=2_000_000):
    dimension = 1 << wires
    label_mask = dimension - 1
    matrix_bits = wires * wires
    matrix_mask = (1 << matrix_bits) - 1
    even = [label for label in range(1, dimension) if parity(label) == 0]
    coverage_bit = {label: 1 << index for index, label in enumerate(even)}
    identity = sum((1 << index) << (index * wires) for index in range(wires))
    goal = identity | (((1 << len(even)) - 1) << matrix_bits)
    parents = {identity: None}
    frontier = deque([identity])
    gates = [(target, control) for target in range(wires) for control in range(wires) if target != control]
    popped = 0
    while frontier:
        state = frontier.popleft()
        popped += 1
        if state == goal:
            break
        matrix = state & matrix_mask
        coverage = state >> matrix_bits
        labels = [(matrix >> (index * wires)) & label_mask for index in range(wires)]
        for target, control in gates:
            output = labels[target] ^ labels[control]
            next_matrix = matrix ^ (labels[control] << (target * wires))
            next_coverage = coverage | coverage_bit.get(output, 0)
            next_state = next_matrix | (next_coverage << matrix_bits)
            if next_state in parents:
                continue
            assert len(parents) < max_states, 'Bounded search exhausted its state budget'
            parents[next_state] = (state, target, control)
            frontier.append(next_state)
    else:
        raise AssertionError('No covering identity-return network found')
    path = []
    cursor = goal
    while parents[cursor] is not None:
        previous, target, control = parents[cursor]
        path.append((target, control))
        cursor = previous
    path.reverse()
    labels = [1 << index for index in range(wires)]
    seen = set()
    witness = []
    births = returns = even_outputs = 0
    for target, control in path:
        target_parity, control_parity = parity(labels[target]), parity(labels[control])
        births += target_parity == control_parity == 1
        returns += target_parity == 0 and control_parity == 1
        labels[target] ^= labels[control]
        output = labels[target]
        even_outputs += parity(output) == 0
        rotate = output in coverage_bit and output not in seen
        if rotate:
            seen.add(output)
        witness.append({'target': target, 'control': control, 'output_label': output, 'rotate_here': rotate})
    assert labels == [1 << index for index in range(wires)]
    assert seen == set(even)
    assert births == returns
    assert len(path) == (1 << (wires - 1)) + wires - 2
    assert len(path) in (2, 10)
    return {
        'wires': wires,
        'shortest_cnot_count': len(path),
        'states_discovered': len(parents),
        'states_popped': popped,
        'search': 'Unweighted exhaustive breadth-first search; state is ordered wire labels plus visited nonzero even labels',
        'gate_order': 'physical time order; target and control are zero-based',
        'returned_to_identity': True,
        'births': births,
        'returns': returns,
        'even_outputs': even_outputs,
        'rotation_angle_over_pi': str(Fraction(-2, dimension)),
        'witness': witness,
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--output', required=True, type=Path)
    args = parser.parse_args()
    result = {
        'schema_version': 1,
        'arithmetic': 'integer bit operations and fractions.Fraction only; no floating-point acceptance',
        'character_and_phase_checks': exact_character_checks(),
        'network_checks': [shortest_network(2), shortest_network(4)],
        'scope': 'Finite checks corroborate the general written proof; they do not replace it or execute Lean.',
        'checker_sha256': hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(result, indent=2) + '\n')
    for network in result['network_checks']:
        print(json.dumps({key: network[key] for key in ['wires', 'shortest_cnot_count', 'states_discovered', 'states_popped']}))


if __name__ == '__main__':
    main()

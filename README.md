# Reflection-symmetric diagonal synthesis: resolving a conjecture of Huang, Kosugi, Nishi and Matsushita

**Authors:** Haobo Ma, Wenlin Zhang

Combined with the upper bound of Huang, Kosugi, Nishi and Matsushita [J. Phys. Soc. Jpn. 93, 054002 (2024); arXiv:2310.06676v2], this resolves their Section 6 conjecture that 2^(2n-1)+2n-2 CNOTs are optimal in the worst case for exact ancilla-free CNOT/R_z synthesis of reflection-symmetric diagonal unitaries on 2n qubits. The explicit hard instance has phase pi/2 at the all-zero and all-one strings. Multiplicative characters force every nonzero even parity; birth-span dimension and return conservation give the linear term. The same substitution gives the unrestricted 2dn-wire count, but not depth optimality or radial-potential optimality.

- PDF: [frozen public file](paper.pdf)
- DOI: [https://doi.org/10.5281/zenodo.23885961](https://doi.org/10.5281/zenodo.23885961)
- Concept DOI: [https://doi.org/10.5281/zenodo.23885960](https://doi.org/10.5281/zenodo.23885960)
- License: CC-BY-4.0
- Version: 4
- Mathesis record: [huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound](https://mathesis-omega-research.apps.chrono-ai.fun/papers/huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound?version=4)

## How to cite

Haobo Ma, Wenlin Zhang (2026). Reflection-symmetric diagonal synthesis: resolving a conjecture of Huang, Kosugi, Nishi and Matsushita. Mathesis, version 4. https://doi.org/10.5281/zenodo.23885961

## Statement progress

| Statement | Formalization status | Source | Verification basis |
|---|---|---|---|
| Theorem (s1) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/02c695f8c17e35965f80603427074b1dd434eed9/D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.lean) | No public receipt |
| Lemma (s2) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/02c695f8c17e35965f80603427074b1dd434eed9/D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.lean) | No public receipt |
| Corollary (s3) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/02c695f8c17e35965f80603427074b1dd434eed9/D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.lean) | No public receipt |

## Contributions

Original authors are listed above. Formalization contributors and attribution are retained in `formalization/nodes.json`; repository pull requests do not confer verification or credit. Submit formalization attempts through the Mathesis attempt path described in [CONTRIBUTING.md](CONTRIBUTING.md).

<!-- Mathesis generated repository guide; refresh with paper.py front. -->

## Reading and materials

[Paper site](https://papers.trureturing.org/10.5281-zenodo.23885960/) · [Frozen PDF](paper.pdf) · [Citation](CITATION.cff)

[中文阅读](https://papers.trureturing.org/10.5281-zenodo.23885960/huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound/zh/) · [Read in English](https://papers.trureturing.org/10.5281-zenodo.23885960/huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound/en/)

[Slides](https://papers.trureturing.org/10.5281-zenodo.23885960/huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound/slides/) ([sources](books/huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound/slides/)) · [Videos](https://papers.trureturing.org/10.5281-zenodo.23885960/huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound/films/) ([sources](books/huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound/films/))

These are publication routes; available built materials are inventoried in [mathesis-materials.json](https://papers.trureturing.org/10.5281-zenodo.23885960/mathesis-materials.json).

## Book and formalization

Catalog formalization status above is separate from the statement comparisons below. A nearby declaration does not verify the complete written result.

| Book result | Comparison with formal base | Compared declaration |
|---|---|---|
| `thm-existence` | same | `D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.result` |
| `thm-explicit` | variant | `D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.result` |
| `lem-character` | none | — |
| `cor-optimal` | variant | `D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.result` |

Book stage: **complete**; 0 pending claims. [Statement comparisons](.mathesis/review.json).

## Repository map

| Zone | Location |
|---|---|
| Paper record | `paper.json`, `CITATION.cff`, `paper.pdf`, `manuscript/`, `formalization/nodes.json`, `LICENSES/`, `.mathesis/` |
| Content | `books/huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound/`: Chinese/English text, figures, visualizations, videos, slides, assets |
| Machinery | Upstream and layer managed paths; update with `tbook template update` |
| Repository front | This README, changelog, contribution guide, licence, project/site/pin configuration, `template.d/` |

See [the enforced layout](docs/layer-mathesis/LAYOUT.md). Preparation run records and built outputs stay outside the committed tree.

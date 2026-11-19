# From two XORs to an exact worst-case gate count

Suppose a quantum operation changes the phase of each binary input and treats every input just like its bitwise complement. How many controlled bit flips must a circuit use? Haobo Ma and Wenlin Zhang exhibit a specific difficult target and prove that on $2n$ quantum wires some targets require at least

$$
2^{2n-1}+2n-2
$$

CNOT gates. X. Huang, T. Kosugi, H. Nishi and Y.-i. Matsushita had already given a construction with this count for every target in the class in 2024. Together the results determine the **exact worst-case count**, settling their Section 6 conjecture. The crucial cost is not just producing useful intermediate values: the circuit must also restore the original bit labels.

This reading explains version 4 of the paper. We start with two bits, then follow the proof through forcing labels, creating them, and returning the wires. The next chapter contains the [precise statements and complete argument](statements.md).

## What is a phase, and why build a circuit?

Start with the four ordinary two-bit inputs $00,01,10,11$. A quantum state assigns a complex amplitude to each input. Picture its phase as the direction of an arrow in the plane. Multiplication by $\mathrm i$ turns the arrow through a quarter circle. A diagonal operation does not exchange $01$ and $10$: it multiplies each input's amplitude by a prescribed phase. Relative turns can affect subsequent interference, so these phases matter.

The paper's target is simple: multiply the all-zero and all-one inputs by $\mathrm i$, and every other input by $1$. For two bits its table is

| Input | Phase |
| --- | --- |
| $00$ | $\mathrm i$ |
| $01$ | $1$ |
| $10$ | $1$ |
| $11$ | $\mathrm i$ |

Complementing every bit exchanges $00$ with $11$, and $01$ with $10$, leaving the table unchanged. This is **reflection symmetry** here; it does not refer to rotating an object in space.

We have two tools. A CNOT preserves its control bit $a$ and changes its target bit $b$ to $b\oplus a$. The symbol $\oplus$ means exclusive-or: equal bits give zero and different bits give one. A single-wire rotation $R_z(\varphi)$ multiplies zero by $e^{-\mathrm i\varphi/2}$ and one by $e^{\mathrm i\varphi/2}$. Angles are arbitrary real numbers; the cost counts CNOTs alone.

Implementation must be exact, allowing a common overall phase for all inputs. There are no extra qubits, measurements, approximations or other gates. Any two distinct wires can interact. Changing these rules changes the optimization problem.

## Two bits: compute XOR, use it, and undo it

Use the first bit to control the second, so the second wire holds $a\oplus b$. Apply $R_z(-\pi/2)$ there, then repeat the same CNOT to restore $b$. Equal inputs have XOR zero and receive $e^{\mathrm i\pi/4}$; unequal inputs receive $e^{-\mathrm i\pi/4}$. These are precisely the table's entries multiplied by the common factor $e^{-\mathrm i\pi/4}$. Two CNOTs suffice, and the lower bound is exactly two.

The second CNOT matters. Leaving the XOR on the wire would change the input string, violating the diagonal target. On more wires, restoration still has a cost, but explaining that cost requires more careful counting.

## Each wire carries a label

Write the bit on each wire as the XOR of a subset of the original inputs. For example, label $1100$ means $x_1\oplus x_2$, and $1010$ means $x_1\oplus x_3$. Four wires start with labels $1000,0100,0010,0001$.

A CNOT replaces its target label by the XOR of target and control labels. A rotation changes phase without changing a label. A label is even or odd according to its number of ones. Initially every label is odd. Since CNOT is reversible, the labels always describe an invertible binary linear transformation, so none is zero. A diagonal target forces the final labels back to their original unit labels.

Which labels must appear when a rotation is applied?

## A phase ratio forces every nonzero even label

Fix a nonzero label $v$. Split the input strings by $v\cdot x$, meaning the XOR of the selected bits. Multiply the target phases with XOR zero and divide by the product of phases with XOR one. Call this ratio $\mathcal I_v$.

The ratio detects a chosen label. An overall phase occurs equally often above and below the fraction, so it cancels. A rotation using a different nonzero label $w$ also cancels: pair inputs with the same $w$ parity and opposite $v$ parity. The next chapter proves the [cancellation lemma](statements.md) by constructing this pairing.

For the difficult target and any nonzero even $v$, both the all-zero and all-one strings have $v$ parity zero. They contribute $\mathrm i\,\mathrm i=-1$ to the numerator; every other phase is one. If the circuit never rotates on label $v$, every factor cancels and the ratio must instead be one. Contradiction! Thus **every nonzero even label must occur on a rotated wire**.

We multiply and divide complex numbers directly, without choosing real angles for their phases. Adding whole turns to an angle cannot evade this argument.

## Why is there an extra linear term?

Put $m=2n$. There are $2^{m-1}$ even labels: choose the first $m-1$ bits freely, and the last bit is determined by parity. Removing zero leaves $2^{m-1}-1$ labels. None is present initially, so its first appearance must be a CNOT output. A CNOT creates just one target label. This gives at least that many even-output gates.

Call an odd-target, odd-control update a birth: it produces an even target. Every even label ever produced is an XOR combination of birth outputs. An even-plus-even update stays among these combinations; odd-plus-odd introduces a birth; a mixed update produces an odd label. Why $m-1$ independent directions? For each $j$ with $1\leq j\leq m-1$, flip coordinate $j$ together with the last coordinate. XOR combinations of these even labels produce every even label. Looking at the first $m-1$ coordinates uniquely determines which flips were used. Thus there are $m-1$ independent directions, requiring at least $m-1$ births.

Now count the **even labels currently on wires**. A birth increases the count by one. An even-target, odd-control update decreases it by one; call this a return. The other two types leave it unchanged. The count starts and ends at zero, so returns equal births and number at least $m-1$. Returns have odd outputs, separate from the even-output gates already counted. Hence

$$
\begin{aligned}
K&\geq (2^{m-1}-1)+(m-1)\\
 &=2^{m-1}+m-2.
\end{aligned}
$$

On four wires the six weight-two labels and $1111$ make seven required nonzero even labels. At least three returns bring the total to ten. Counting just the six pairwise relations misses the four-bit label that this target also forces.

The short film connects the phase ratio, label creation and return count.

::: {.film src="001-parity-return"}
Why does visiting every even label leave a further restoration cost? English narration with aligned Chinese and English subtitles.
:::

## What does the answer tell us?

Huang and colleagues supply the upper bound, and the present paper supplies a target meeting it from below. Thus the largest, over targets, of the minimum circuit counts is exactly the formula. Individual targets can be easy: the identity needs zero gates. Optimal depth is a separate question, since disjoint gates may run in parallel.

Replacing $n$ by $dn$ gives the full complement-symmetric class's exact worst-case count on $2dn$ wires. Huang and colleagues' radial interaction-potential family obeys additional restrictions. The difficult target has not been shown to belong to that narrower physical family, so this argument does not establish its matching lower bound.

[Evidence and sources](sources.md) distinguish the existential lower bound stated by the public Lean theorem, the explicit target used inside its proof, and the public interfaces or upper-bound formalization still needed. Small finite searches are also separated from the all-parameter proof.

The academic presentation follows the same argument, with full speaker notes.

::: {.slides src="seminar"}
Aligned Chinese and English Beamer editions: the question, two-bit example, cancellation, births and returns, exact worst-case count, and scope.
:::

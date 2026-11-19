# Precise statements and complete argument

## Objects and allowed circuits

Let $\mathbb F_2=\{0,1\}$ with XOR as addition. Index computational basis states by $x\in\mathbb F_2^m$. Write $\mathbf1$ for the all-one vector and $\bar x=x+\mathbf1$. The dot product $v\cdot x=\sum_jv_jx_j$ is computed in $\mathbb F_2$. Write $\operatorname{wt}(v)$ for the number of ones.

For a real function $\theta:\mathbb F_2^m\to\mathbb R$, set $D_\theta=\operatorname{diag}(e^{\mathrm i\theta(x)})$. Reflection symmetry means $\theta(\bar x)=\theta(x)$. A circuit is a finite sequence on exactly $m$ wires, using CNOTs with distinct target and control, and rotations

$$
\begin{gathered}
R_z(\varphi)=\operatorname{diag}\bigl(e^{-\mathrm i\varphi/2},e^{\mathrm i\varphi/2}\bigr),\\
\varphi\in\mathbb R.
\end{gathered}
$$

Connectivity is unrestricted; ancillary qubits, other gates, measurements and approximation are excluded. Count only CNOTs. Realization means $U=cD_\theta$ for $c\in\mathbb C$. Since $U$ and $D_\theta$ are unitary, this equality automatically forces $|c|=1$, in particular $c\ne0$.

## Two levels of the lower-bound statement

<section hidden="hidden">

```{=typst}
#block(breakable: false)[
```

</section>

::: {.theorem #thm-existence title="Existential lower bound for reflection symmetry" lean="D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.result" mathesis="collected:huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound:4:s1"}
For every integer $n\geq1$, there exists a real function $\theta:\mathbb F_2^{2n}\to\mathbb R$ with $\theta(\bar x)=\theta(x)$ such that, for every allowed circuit and every $c\in\mathbb C$, if $U=cD_\theta$, then its CNOT count is at least $2^{2n-1}+2n-2$.
:::

<section hidden="hidden">

```{=typst}
]
```

</section>

This is the full quantifier structure of the public Lean conclusion. The next statement names the target in the source's Theorem 1. It implies the existential conclusion and is the witness actually used inside the Lean proof, but that public conclusion does not name the witness.

<section hidden="hidden">

```{=typst}
#block(breakable: false)[
```

</section>

::: {.theorem #thm-explicit title="An explicit hard target" status="written-proof" proof="pf-explicit" doi="10.5281/zenodo.23885961" source="Theorem 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/229" mathesis="collected:huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound:4:s1"}
For every integer $n\geq1$, put $m=2n$ and define

$$
\begin{gathered}
\theta_*(x)=\begin{cases}
\pi/2,&x=0\text{ or }x=\mathbf1,\\
0,&\text{otherwise},
\end{cases}\\
D_*=D_{\theta_*}.
\end{gathered}
$$

Then $\theta_*(\bar x)=\theta_*(x)$. For every allowed circuit and every complex $c$, if $U=cD_*$, then its CNOT count is at least

$$
N_m=2^{m-1}+m-2.
$$
:::

<section hidden="hidden">

```{=typst}
]
```

</section>

## Multiplicative cancellation without phase branches

For a nowhere-zero $h:\mathbb F_2^m\to\mathbb C$, define

$$
\mathcal I_v(h)=\prod_{x\in\mathbb F_2^m}h(x)^{(-1)^{v\cdot x}}.
$$

The exponents are integers $+1$ or $-1$; negative powers mean reciprocals. Finite multiplication gives $\mathcal I_v(h_1h_2)=\mathcal I_v(h_1)\mathcal I_v(h_2)$.

<section hidden="hidden">

```{=typst}
#block(breakable: false)[
```

</section>

::: {.lemma #lem-character title="Multiplicative character cancellation" status="written-proof" proof="pf-character" doi="10.5281/zenodo.23885961" source="Lemma 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/230" mathesis="collected:huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound:4:s2"}
For every integer $m\geq0$ and nonzero $v\in\mathbb F_2^m$, each constant $c\ne0$ satisfies $\mathcal I_v(c)=1$. If also $w\ne0$ and $w\ne v$, then every nowhere-zero $g:\mathbb F_2\to\mathbb C$ satisfies

$$
\mathcal I_v\bigl(x\mapsto g(w\cdot x)\bigr)=1.
$$
:::

<section hidden="hidden">

```{=typst}
]
```

</section>

::: {.proof #pf-character}
Source: Lemma 1, Section 2. Since $v\ne0$, choose $u$ with $v\cdot u=1$. Pair $x$ with $x+u$. This is a fixed-point-free involution reversing the exponent, so constant factors cancel.

For the second clause, distinct nonzero $v,w$ are linearly independent over $\mathbb F_2$. Thus $x\mapsto(v\cdot x,w\cdot x)$ maps onto $\mathbb F_2^2$: the two independent linear functionals have rank two. Choose $u$ with $v\cdot u=1$ and $w\cdot u=0$. The same pairing preserves $g(w\cdot x)$ and reverses its exponent, so each pair contributes one. Nonvanishing makes reciprocals well-defined. At $m=0$ there is no nonzero $v$; at $m=1$ there is no pair of distinct nonzero $v,w$. These boundaries agree with the hypotheses.
:::

## Proof for the hard target

::: {.proof #pf-explicit}
We expand the proof of Theorem 1 in source Sections 2–3. Complementation exchanges $0$ and $\mathbf1$ and preserves the remaining inputs, so $\theta_*$ is reflection-symmetric.

**First force restoration.** Label a wire by $w$ when its bit is $w\cdot x$. Initially the labels are $e_j$. A CNOT replaces $w_t$ by $w_t+w_c$; rotations leave labels unchanged. Each update is an invertible row operation, so the label matrix $A$ remains invertible and its rows remain nonzero. Induction over the gates gives the form

$$
\begin{gathered}
|x\rangle\longmapsto f(x)|Ax\rangle,\\
f(x)=\prod_k g_k(w_k\cdot x),
\end{gathered}
$$

where each $g_k$ is the nowhere-zero two-valued factor from one rotation. If $U=cD_*$, the nonzero output for input $x$ can occur only at index $x$. Hence $Ax=x$ for every $x$, so $A=I$. The final labels are $e_j$ again, and $f(x)=ce^{\mathrm i\theta_*(x)}$.

**Force every even label.** Put

$$
H=\{v\in\mathbb F_2^m:v\cdot\mathbf1=0\}.
$$

For any nonzero $v\in H$, both nontrivial phases have exponent $+1$, giving $\mathcal I_v(e^{\mathrm i\theta_*})=\mathrm i^2=-1$. If every rotation label differs from $v$, [@lem-character] and multiplicativity give $\mathcal I_v(f)=1$. But $c\ne0$, and the same lemma gives $\mathcal I_v(f)=\mathcal I_v(c)\mathcal I_v(e^{\mathrm i\theta_*})=-1$, a contradiction. Every nonzero $v\in H$ therefore occurs on a rotated wire.

**Count even outputs.** Total parity is a nonzero linear functional. Its kernel $H$ has dimension $m-1$ and size $2^{m-1}$. Equivalently, freely choose the first $m-1$ coordinates and determine the last by parity. Initial labels are odd, so each required nonzero even label first appears as a CNOT target output. One CNOT produces one target label, forcing at least $2^{m-1}-1$ even-output gates.

**Count additional returns.** Call an odd-target, odd-control update a birth, and let $B$ be their number. Inductively, every even label ever produced lies in the span of the birth outputs produced so far. Initially no label is even. An odd-plus-odd update adds its output as a generator; an even-plus-even update adds two vectors already in the span; mixed updates produce odd labels; unchanged rows preserve the invariant. A label remains in this cumulative span even after disappearing from current wires. Since every nonzero vector of $H$ must appear, the birth outputs span $H$. Thus $B\geq m-1$.

Let $E$ count even labels currently on wires. The four update types are

| Target, control | Output | Change in $E$ |
| --- | --- | --- |
| odd, odd | even | $+1$ |
| even, odd | odd | $-1$ |
| even, even | even | $0$ |
| odd, even | odd | $0$ |

Let $R$ count updates of the second type. Initial and final labels are $e_j$, so $E$ starts and ends at zero. Consequently $R=B\geq m-1$. Returns have odd outputs, disjoint from the even-output gates already counted. Therefore

$$
\begin{aligned}
K&\geq (2^{m-1}-1)+R\\
 &\geq 2^{m-1}+m-2.
\end{aligned}
$$

Births have not been added a second time: they already belong to the even-output count. The additional term counts returns. For $n=1$, $m=2$, one required even label and at least one return give two gates. There is no limiting passage or omitted endpoint.
:::

## Exact optimality using the literature construction

<section hidden="hidden">

```{=typst}
#block(breakable: false)[
```

</section>

::: {.corollary #cor-optimal title="Exact worst-case CNOT count" status="written-proof" proof="pf-optimal" doi="10.5281/zenodo.23885961" source="Corollary 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/231" mathesis="collected:huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound:4:s3"}
For every integer $n\geq1$, in the exact ancilla-free CNOT/$R_z$ model above, the maximum over all reflection-symmetric diagonal targets on $2n$ wires of their minimum CNOT counts is $N_{2n}=2^{2n-1}+2n-2$.
:::

<section hidden="hidden">

```{=typst}
]
```

</section>

::: {.proof #pf-optimal}
Source: Corollary 1. Algorithm 1 of Huang, Kosugi, Nishi and Matsushita (Section 4 and Appendix C) implements every target satisfying their Eq. (1), up to global phase. It has $2^{2n-1}-1$ blocks each containing one CNOT, together with $2n-1$ standalone CNOTs, totaling $N_{2n}$. Their Eq. (1) is precisely invariance under complementing all bits. Thus every target has a minimum count, bounded above by $N_{2n}$. The target in [@thm-explicit] needs at least $N_{2n}$, so its minimum equals that number. The maximum is attained and equals $N_{2n}$. The upper bound comes from the cited construction; it does not follow from the existential lower bound alone.
:::

## A synthesis identity and the finite checks

Put $\chi_v(x)=(-1)^{v\cdot x}$. Source Section 4 gives

$$
\theta_*(x)=\frac{\pi}{2^m}\sum_{v\in H}\chi_v(x).
$$

If $x\in H^\perp=\{0,\mathbf1\}$, every summand is one, giving $2^{m-1}$. Otherwise choose $u\in H$ with $u\cdot x=1$ and pair indices $v,v+u$; their summands cancel. This proves the identity for all inputs.

A rotation with angle $-\pi/2^{m-1}$ at each nonzero even label contributes $\exp(\mathrm i\pi\chi_v(x)/2^m)$. The product is $e^{-\mathrm i\pi/2^m}D_*$, since the omitted zero label contributes the constant character one. The network must still return to identity.

The source reports exact shortest identity-return networks of lengths $2,10$ for $m=2,4$, and checks of phases and character products for $m=2,4,6,8$. These are the source's finite checks. The general proof is the cancellation and birth–return argument above; the finite checks do not establish optimality in a broader model.

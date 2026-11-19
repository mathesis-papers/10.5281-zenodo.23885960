<style>pre:has(> code[class*="typst"]) { display: none; }</style>

# Evidence, sources and participation

## What do the proof and formal evidence cover?

The [public Lean source](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.lean#L65) states that every positive even number of wires admits a reflection-symmetric target forcing every allowed circuit to meet the lower bound. This agrees with the existential theorem in the precise chapter. The [proof](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.lean#L496) actually chooses the target with phase $\mathrm i$ at the all-zero and all-one strings.

The source's explicit-target theorem specifies more than that public conclusion: it names the witness. Both parts of the cancellation lemma also have proofs inside the source. They need directly citable public interfaces, reusing those arguments. Worst-case equality additionally uses Huang and colleagues' universal construction; the cited public lower-bound theorem does not state that upper bound. These distinctions leave the complete written argument in this reading intact.

The source's small searches are finite evidence: shortest networks cover two and four wires; phase and character checks cover two, four, six and eight. The all-$n$ result follows from cancellation, the span of births, and return conservation, rather than extrapolating from those numbers.

## References and the original question

1. Haobo Ma and Wenlin Zhang, *Reflection-symmetric diagonal synthesis: resolving a conjecture of Huang, Kosugi, Nishi and Matsushita*, version 4, 2026. Exact-version DOI: [10.5281/zenodo.23885961](https://doi.org/10.5281/zenodo.23885961), CC BY 4.0. Theorem 1 is in Section 1; Lemma 1 in Section 2; Corollary 1 in Section 3; Section 4 records the finite synthesis checks. Haobo Ma: ChronoAI Pte Ltd, Singapore. Wenlin Zhang: National University of Singapore and ChronoAI Pte Ltd, Singapore.
2. X. Huang, T. Kosugi, H. Nishi and Y.-i. Matsushita, *Optimized Synthesis of Circuits for Diagonal Unitary Matrices with Reflection Symmetry*, J. Phys. Soc. Jpn. **93**, 054002 (2024), DOI: [10.7566/JPSJ.93.054002](https://doi.org/10.7566/JPSJ.93.054002), [arXiv:2310.06676v2](https://arxiv.org/abs/2310.06676v2). Eq. (1) defines the symmetry; Algorithm 1, Section 4 and Appendix C give the upper bound; Section 6 poses worst-case gate-count and depth questions.
3. M. Amy, P. Azimzadeh and M. Mosca, *On the controlled-NOT complexity of controlled-NOT–phase circuits*, Quantum Sci. Technol. **4**, 015002 (2019), DOI: [10.1088/2058-9565/aad8ca](https://doi.org/10.1088/2058-9565/aad8ca), [arXiv:1712.01859v2](https://arxiv.org/abs/1712.01859v2), Section 2: parity networks and their final linear map.
4. Y. Cao, Y. Lu, J. Nie, X. Sun and G. Tian, *Toward Minimum Graphic Parity Networks*, [arXiv:2509.10070v1](https://arxiv.org/abs/2509.10070v1) (2025), Theorem 1.1. For a connected graph the weight-two-label bound is $|E|+|V|-1$. The complete graph on four vertices gives nine, while the present target also forces the weight-four label, giving ten.
5. Trureturing repository contributors: [lower-bound source](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.lean) and [birth–return counting source](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Quantum/Magic/ReflectionDiagonalParityCounting.lean). The paper attributes the lower-bound proof to this existing formalization; this reading retains that attribution.

## Continuing the work

The shared requests track the [explicit hard-target public interface](https://github.com/the-omega-institute/trureturing-requests/issues/229), [multiplicative cancellation public interface](https://github.com/the-omega-institute/trureturing-requests/issues/230), and [universal synthesis upper bound and worst-case equality](https://github.com/the-omega-institute/trureturing-requests/issues/231). The first two reuse existing internal constructions and proofs. The third reuses the public existential lower bound and adds the literature upper bound; it does not require the explicit-witness interface.

Coordinate a focused contribution on the corresponding issue, develop a branch in your own fork, and submit directly to upstream dev under its [contribution rules](https://github.com/the-omega-institute/trureturing/blob/dev/docs/CONTRIBUTING.md). Original mathematical authors, authors of the earlier question, and subsequent formalization contributors retain their distinct attribution. The unresolved depth and radial-potential questions are separate from interface work for already-proved results.

```{=typst}
#pagebreak()
```

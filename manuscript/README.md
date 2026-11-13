# Reflection-symmetric diagonal synthesis

## Authors and license

Haobo Ma (ChronoAI Pte Ltd, Singapore), then Wenlin Zhang (National University
of Singapore; ChronoAI Pte Ltd, Singapore). Dated 1 November 2026.
The note and its metadata are licensed under CC BY 4.0.
The selected upstream Lean sources retain their Apache 2.0 license, included
as `sources/UPSTREAM-LICENSE`.

## Result and attribution

For each integer `n >= 1`, put `m = 2n`. The diagonal unitary with entry `i`
at `0^m` and `1^m` and entry `1` elsewhere needs at least
`2^(m-1) + m - 2` CNOT gates in any finite, exact, ancilla-free CNOT/R_z
circuit, allowing arbitrary real rotation angles and global phase.
The complete proof uses multiplicative characters, birth-span dimension
and return conservation. The note expounds the existing lower-bound proof at:

https://github.com/the-omega-institute/trureturing/blob/02c695f8c17e35965f80603427074b1dd434eed9/D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.lean

Combining this lower bound with Algorithm 1, Section 4 and Appendix C of
Huang, Kosugi, Nishi and Matsushita, *JPSJ* 93(5), 054002 (2024),
DOI `10.7566/JPSJ.93.054002`, arXiv:2310.06676v2, resolves their Section 6
worst-case CNOT conjecture. This equality uses their literature upper bound;
the Lean theorem `result : claim` is the lower-bound statement.

Substitution gives the unrestricted `2dn`-wire count, including the generic
`6n`-wire count discussed in Section 6. It does not establish optimal synthesis
within the more restricted radial-potential family of their Eq. (5), or solve
their depth question. Ancillas, approximation and other gate sets are different
models from the theorem here.

## Rebuild the PDF

The source archive has one main file, `note.tex`, an embedded bibliography,
and no external TeX inputs or figures. Use Tectonic **0.17.0**:

```sh
mkdir -p build
SOURCE_DATE_EPOCH=1793491200 tectonic --untrusted --outdir build note.tex
```

Alternatively, build directly with `pdflatex`:

```sh
mkdir -p build
pdflatex -no-shell-escape -interaction=nonstopmode -halt-on-error -output-directory=build note.tex
pdflatex -no-shell-escape -interaction=nonstopmode -halt-on-error -output-directory=build note.tex
```

The bibliography is embedded, so no BibTeX run is needed. The fixed timestamp
controls build metadata; engine and font differences can change PDF bytes.

## Reproduce the finite checks

With Python 3 and its standard library:

```sh
python3 checks.py --output verification-rebuilt.json
```

The checker uses integer bit operations and exact rational arithmetic. It
verifies all hard-instance characters and every computational-basis phase
for `m = 2, 4, 6, 8`. For `m = 2, 4`, it also exhaustively searches identity-
return parity networks. A state consists of ordered wire labels and the set
of nonzero even labels visited; every distinct target/control CNOT is a
transition. These data determine every future transition, so deduplication
preserves completeness for this finite search. The respective minima are
2 and 10, with 6 and 846783 states discovered. The saved witnesses are replayed.

Run one checker at a time with sufficient memory headroom. The breadth-first
search has a hard cap of two million states. Expected output is
`verification.json`; its checker hash binds the executable source.
These finite checks corroborate the written all-parameter proof, not a
computational enumeration for all `n`.

## Source scope and integrity

`source-manifest.json` records the size and SHA256 of every other archive
member. The selected Lean files, toolchain and dependency manifest are
snapshots, not a complete Lake project. They identify the exact lower-bound
formalization and its companion `count_bound`. The pinned declaration
`ReflectionDiagonalCNOTLowerBound.result` proves the lower bound, and
`ReflectionDiagonalParityCounting.count_bound` supplies its counting component.
Sections 2–3 give the self-contained written proof. Worst-case equality also
uses Algorithm 1, Section 4 and Appendix C of Huang et al. Character and phase
checks cover `m = 2, 4, 6, 8`; shortest-network checks cover `m = 2, 4`.

The archive contains the LaTeX note, scientific metadata, exact finite checker
and its output, pinned Lean source snapshots and their license, and the
member-hash manifest.

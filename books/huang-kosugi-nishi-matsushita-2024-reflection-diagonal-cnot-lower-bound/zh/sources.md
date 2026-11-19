<style>pre:has(> code[class*="typst"]) { display: none; }</style>

# 证据、来源与参与

## 数学证明与形式证据各覆盖什么？

[公开 Lean 源码](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.lean#L65)陈述：每个正偶数线数都有一个反射对称目标，迫使每个允许电路达到该下界。这与精确章的存在性定理一致。源文件的[证明](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.lean#L496)实际选择全零、全一处相位为 $\mathrm i$ 的目标。

源文的明确目标定理比公开结论多指定了见证；消去引理的两个部分在源码内部也已有证明。它们需要可直接引用的公开接口，不需要重新发明论证。最坏情形等号则另外使用 Huang 等人的普适构造；当前所引的公开下界定理没有陈述那个上界。这些差别不改变本书给出的完整书面证明。

源文报告的小规模搜索是有限证据：最短网络只涉及二、四条线；相位与特征检查涉及二、四、六、八条线。对所有 $n$ 的结论依赖消去、出生张成与返回守恒，不能从有限个数字外推。

## 文献与原问题

1. Haobo Ma、Wenlin Zhang，*Reflection-symmetric diagonal synthesis: resolving a conjecture of Huang, Kosugi, Nishi and Matsushita*，第 4 版，2026。精确版本 DOI：[10.5281/zenodo.23885961](https://doi.org/10.5281/zenodo.23885961)，CC BY 4.0。Theorem 1 在第 1 节；Lemma 1 在第 2 节；Corollary 1 在第 3 节；第 4 节记载有限合成检查。Haobo Ma：ChronoAI Pte Ltd, Singapore；Wenlin Zhang：National University of Singapore 与 ChronoAI Pte Ltd, Singapore。
2. X. Huang、T. Kosugi、H. Nishi、Y.-i. Matsushita，*Optimized Synthesis of Circuits for Diagonal Unitary Matrices with Reflection Symmetry*，J. Phys. Soc. Jpn. **93**, 054002 (2024)，DOI：[10.7566/JPSJ.93.054002](https://doi.org/10.7566/JPSJ.93.054002)，[arXiv:2310.06676v2](https://arxiv.org/abs/2310.06676v2)。Eq. (1) 定义对称性，Algorithm 1、第 4 节及附录 C 给出上界，第 6 节提出最坏门数及深度问题。
3. M. Amy、P. Azimzadeh、M. Mosca，*On the controlled-NOT complexity of controlled-NOT–phase circuits*，Quantum Sci. Technol. **4**, 015002 (2019)，DOI：[10.1088/2058-9565/aad8ca](https://doi.org/10.1088/2058-9565/aad8ca)，[arXiv:1712.01859v2](https://arxiv.org/abs/1712.01859v2)，第 2 节的奇偶网络与末态线性映射。
4. Y. Cao、Y. Lu、J. Nie、X. Sun、G. Tian，*Toward Minimum Graphic Parity Networks*，[arXiv:2509.10070v1](https://arxiv.org/abs/2509.10070v1) (2025)，Theorem 1.1。连通图的二位标签下界为 $|E|+|V|-1$；四顶点完全图给出九，而这里还强迫四位标签，得到十。
5. Trureturing 仓库贡献者：[下界源码](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.lean)及[出生—返回计数源码](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Quantum/Magic/ReflectionDiagonalParityCounting.lean)。论文明确将下界证明归于所引的既有形式化，本书保留这一归属。

## 接着做什么？

三个共享问题分别追踪[明确困难目标的公开接口](https://github.com/the-omega-institute/trureturing-requests/issues/229)、[乘法消去的公开接口](https://github.com/the-omega-institute/trureturing-requests/issues/230)及[普适合成上界与最坏情形等号](https://github.com/the-omega-institute/trureturing-requests/issues/231)。前两个复用源码里已有的内部构造与证明；第三个复用已公开的存在性下界，再补上文献上界，不以明确见证接口为前提。

有兴趣参与者可在相应问题协调范围，在自己的 fork 中开发聚焦分支，并依照[上游贡献规则](https://github.com/the-omega-institute/trureturing/blob/dev/docs/CONTRIBUTING.md)直接向上游 dev 提交 PR。书面结果的作者、原问题作者与后续形式化贡献者分别保留署名。尚待研究的深度问题和径向势子类问题，应与这些已证结果的接口工作区分开。

```{=typst}
#pagebreak()
```

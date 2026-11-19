# 精确陈述与完整论证

## 对象与允许的电路

令 $\mathbb F_2=\{0,1\}$，加法为异或。用 $x\in\mathbb F_2^m$ 标记计算基，$\mathbf1$ 为全一向量，$\bar x=x+\mathbf1$。点积 $v\cdot x=\sum_jv_jx_j$ 在 $\mathbb F_2$ 中计算。记 $\operatorname{wt}(v)$ 为一的个数。

对实函数 $\theta:\mathbb F_2^m\to\mathbb R$，令 $D_\theta=\operatorname{diag}(e^{\mathrm i\theta(x)})$。这里反射对称指 $\theta(\bar x)=\theta(x)$。电路是恰好 $m$ 条线上的有限门序列，门只能是不同目标、控制之间的 CNOT 或

$$
\begin{gathered}
R_z(\varphi)=\operatorname{diag}\bigl(e^{-\mathrm i\varphi/2},e^{\mathrm i\varphi/2}\bigr),\\
\varphi\in\mathbb R.
\end{gathered}
$$

允许任意连通性，不允许辅助量子位、其他门、测量或近似；只数 CNOT。实现条件为 $U=cD_\theta$，其中 $c\in\mathbb C$。因为两边的矩阵都是酉矩阵的标量倍，这个等式自动迫使 $|c|=1$，特别是 $c\ne0$。

## 下界的两个陈述层次

<section hidden="hidden">

```{=typst}
#block(breakable: false)[
```

</section>

::: {.theorem #thm-existence title="反射对称目标的存在性下界" lean="D5/S3/Quantum/Magic/ReflectionDiagonalCNOTLowerBound.result" mathesis="collected:huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound:4:s1"}
对每个整数 $n\geq1$，存在实函数 $\theta:\mathbb F_2^{2n}\to\mathbb R$，满足 $\theta(\bar x)=\theta(x)$，使得每个上述电路及每个 $c\in\mathbb C$，若 $U=cD_\theta$，则其 CNOT 数至少为 $2^{2n-1}+2n-2$。
:::

<section hidden="hidden">

```{=typst}
]
```

</section>

这是公开 Lean 结论的完整量词形式。下一个陈述给出源文 Theorem 1 指定的目标；它蕴含存在性结论，且确实是上述 Lean 证明内部所选的目标，但公开结论本身不命名这个目标。

<section hidden="hidden">

```{=typst}
#block(breakable: false)[
```

</section>

::: {.theorem #thm-explicit title="明确的困难目标" status="written-proof" proof="pf-explicit" doi="10.5281/zenodo.23885961" source="Theorem 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/229" mathesis="collected:huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound:4:s1"}
对每个整数 $n\geq1$，令 $m=2n$，定义

$$
\begin{gathered}
\theta_*(x)=\begin{cases}
\pi/2,&x=0\text{ 或 }x=\mathbf1,\\
0,&\text{其他情形},
\end{cases}\\
D_*=D_{\theta_*}.
\end{gathered}
$$

则 $\theta_*(\bar x)=\theta_*(x)$。对每个上述电路及每个复数 $c$，若 $U=cD_*$，其 CNOT 数至少为

$$
N_m=2^{m-1}+m-2.
$$
:::

<section hidden="hidden">

```{=typst}
]
```

</section>

## 乘法消去：不选择相位分支

若 $h:\mathbb F_2^m\to\mathbb C$ 处处非零，定义

$$
\mathcal I_v(h)=\prod_{x\in\mathbb F_2^m}h(x)^{(-1)^{v\cdot x}}.
$$

指数为整数 $+1$ 或 $-1$，负次幂指倒数。有限乘积给出 $\mathcal I_v(h_1h_2)=\mathcal I_v(h_1)\mathcal I_v(h_2)$。

<section hidden="hidden">

```{=typst}
#block(breakable: false)[
```

</section>

::: {.lemma #lem-character title="乘法特征的消去" status="written-proof" proof="pf-character" doi="10.5281/zenodo.23885961" source="Lemma 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/230" mathesis="collected:huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound:4:s2"}
对任意整数 $m\geq0$ 与非零 $v\in\mathbb F_2^m$，每个常数 $c\ne0$ 满足 $\mathcal I_v(c)=1$。若还满足 $w\ne0$、$w\ne v$，则对任意处处非零的 $g:\mathbb F_2\to\mathbb C$，

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
源文 Lemma 1（第 2 节）。因 $v\ne0$，存在 $u$ 使 $v\cdot u=1$。将输入 $x$ 与 $x+u$ 配对；此配对无不动点且是对合，两个指数相反，所以常数项抵消。

第二个结论中，$v,w$ 为 $\mathbb F_2$ 上不同的非零向量，因此线性无关。映射 $x\mapsto(v\cdot x,w\cdot x)$ 满射到 $\mathbb F_2^2$：两个独立的线性泛函有秩二。故可选 $u$ 使 $v\cdot u=1$、$w\cdot u=0$。同一配对保持 $g(w\cdot x)$ 不变，却反转其指数；每对的乘积为一。处处非零保证倒数有定义。当 $m=0$ 时没有非零 $v$；当 $m=1$ 时没有不同的非零 $v,w$，这些边界与假设一致。
:::

## 困难目标的证明

::: {.proof #pf-explicit}
以下展开源文第 2—3 节对 Theorem 1 的证明。补运算交换 $0$ 与 $\mathbf1$，并保持其余输入集合，所以 $\theta_*$ 反射对称。

**先迫使线路还原。** 以向量 $w$ 标记当前线上的比特 $w\cdot x$。初始标签为 $e_j$；CNOT 将 $w_t$ 换成 $w_t+w_c$，旋转不改变标签。每次标签更新都是可逆行变换，因此标签矩阵 $A$ 始终可逆且各行非零。逐门归纳得电路形式

$$
\begin{gathered}
|x\rangle\longmapsto f(x)|Ax\rangle,\\
f(x)=\prod_k g_k(w_k\cdot x),
\end{gathered}
$$

其中每个 $g_k$ 是一次旋转贡献的非零二值函数。若 $U=cD_*$，输入的非零输出只能在原来的基索引 $x$ 上；故 $Ax=x$ 对所有 $x$ 成立，$A=I$。最终标签回到 $e_j$，并且 $f(x)=ce^{\mathrm i\theta_*(x)}$。

**再迫使偶标签出现。** 令

$$
H=\{v\in\mathbb F_2^m:v\cdot\mathbf1=0\}.
$$

取任意非零 $v\in H$。两处非平凡相位都在指数 $+1$ 处，因而 $\mathcal I_v(e^{\mathrm i\theta_*})=\mathrm i^2=-1$。若所有旋转标签均不同于 $v$，由 [@lem-character] 及乘法性可得 $\mathcal I_v(f)=1$。但 $c\ne0$，同一引理又给出 $\mathcal I_v(f)=\mathcal I_v(c)\mathcal I_v(e^{\mathrm i\theta_*})=-1$，矛盾。因此每个非零 $v\in H$ 都出现在旋转线上。

**计算偶输出。** 总奇偶性是一个非零线性泛函，其核 $H$ 的维数为 $m-1$，元素数为 $2^{m-1}$。也可直接自由选择前 $m-1$ 位，再确定最后一位。初始标签都是奇标签，所以每个所需非零偶标签的首次出现都是某个 CNOT 的目标输出。一个 CNOT 只输出一个目标标签，因此偶输出次数至少为 $2^{m-1}-1$。

**计算额外返回。** 将奇目标加奇控制的操作称为出生，出生总数为 $B$。逐门归纳可证：所有曾经产生的偶标签都在截至当时出生标签的线性张成中。开始时没有偶标签。奇加奇新增一个生成元；偶加偶输出两个已在张成中的向量之和；混合更新只产生奇标签；其他线不变。因此即使某个偶标签后来从线上消失，它仍在累计的张成中。既然所有非零 $H$ 向量都必须出现，出生标签张成 $H$，故 $B\geq m-1$。

令 $E$ 为当前偶标签条数。更新情况为：

| 目标与控制 | 输出 | $E$ 的变化 |
| --- | --- | --- |
| 奇、奇 | 偶 | $+1$ |
| 偶、奇 | 奇 | $-1$ |
| 偶、偶 | 偶 | $0$ |
| 奇、偶 | 奇 | $0$ |

令第二行操作的次数为 $R$。初始与最终标签均为 $e_j$，所以 $E$ 从零回到零，得到 $R=B\geq m-1$。返回操作输出奇标签，与已计入的偶输出操作不相交。故

$$
\begin{aligned}
K&\geq (2^{m-1}-1)+R\\
 &\geq 2^{m-1}+m-2.
\end{aligned}
$$

这里没有重复把出生另加一次：出生已经属于偶输出，额外加的是返回。$n=1$ 时 $m=2$，一个非零偶标签与至少一次返回给出二门；没有取极限或忽略端点的步骤。
:::

## 由文献构造得到精确最优值

<section hidden="hidden">

```{=typst}
#block(breakable: false)[
```

</section>

::: {.corollary #cor-optimal title="最坏情形的精确 CNOT 数" status="written-proof" proof="pf-optimal" doi="10.5281/zenodo.23885961" source="Corollary 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/231" mathesis="collected:huang-kosugi-nishi-matsushita-2024-reflection-diagonal-cnot-lower-bound:4:s3"}
对每个整数 $n\geq1$，在上述精确、无辅助量子位的 CNOT/$R_z$ 模型中，所有 $2n$ 线反射对称对角目标的最少 CNOT 数的最大值为 $N_{2n}=2^{2n-1}+2n-2$。
:::

<section hidden="hidden">

```{=typst}
]
```

</section>

::: {.proof #pf-optimal}
源文 Corollary 1。Huang、Kosugi、Nishi 与 Matsushita 的 Algorithm 1（第 4 节与附录 C）对每个满足其 Eq. (1) 的目标给出实现到整体相位的电路。它有 $2^{2n-1}-1$ 个各含一 CNOT 的块，以及 $2n-1$ 个独立 CNOT，总数为 $N_{2n}$；其 Eq. (1) 正是对全部比特取反不变。因此每个目标的最少门数存在且不超过 $N_{2n}$。[@thm-explicit] 给出的目标至少需要 $N_{2n}$，故它恰好达到该数；最大值存在并等于 $N_{2n}$。上界来自上述文献构造，而非仅从存在性下界推出。
:::

## 可直接核对的合成与有限检查

令 $\chi_v(x)=(-1)^{v\cdot x}$。源文第 4 节给出

$$
\theta_*(x)=\frac{\pi}{2^m}\sum_{v\in H}\chi_v(x).
$$

若 $x\in H^\perp=\{0,\mathbf1\}$，每项为一，总和为 $2^{m-1}$。否则存在 $u\in H$ 使 $u\cdot x=1$，将求和指标 $v$ 与 $v+u$ 配对，项两两抵消。该等式因此在所有输入上成立。

在每个非零偶标签上做一次角度 $-\pi/2^{m-1}$ 的旋转，其相位因子为 $\exp(\mathrm i\pi\chi_v(x)/2^m)$。乘积为 $e^{-\mathrm i\pi/2^m}D_*$，因为省略的零标签贡献常数项一；前提仍是网络最终还原为恒等。

源文报告在 $m=2,4$ 时的精确最短还原网络长度为 $2,10$，并在 $m=2,4,6,8$ 检查了相位与特征乘积。这些是有限检查的原文记录；本书的全参数证明是上面的消去与出生—返回论证。它们不证明更一般模型的最优性。

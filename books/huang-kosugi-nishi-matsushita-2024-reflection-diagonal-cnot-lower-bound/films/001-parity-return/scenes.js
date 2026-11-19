'use strict';
// 七个镜头沿用正文的相位比值与出生—返回论证。坐标避开顶部依据条与底部字幕。
function heading(en, zh) {
  txt(en, 960, 220, {size: 46, fam: F.disp, w: 700, align: 'center', c: C.white});
  txt(zh, 960, 274, {size: 29, fam: F.zh, align: 'center', c: C.dim});
}
function arrow(x1,y1,x2,y2,a=1,col=C.cyan) {
  const angle=Math.atan2(y2-y1,x2-x1);
  ctx.save();ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.fillStyle=col;ctx.lineWidth=4;
  ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();
  ctx.beginPath();ctx.moveTo(x2,y2);ctx.lineTo(x2-15*Math.cos(angle-.4),y2-15*Math.sin(angle-.4));ctx.lineTo(x2-15*Math.cos(angle+.4),y2-15*Math.sin(angle+.4));ctx.closePath();ctx.fill();ctx.restore();
}
SCENES.target = S => {
  badgeQ(S, [[0,null,'argued']]);
  heading('A SIMPLE TARGET, AN UNAVOIDABLE COST','简单目标，不可避免的门数');
  panel(260,335,1400,460,1,C.cyan,'TWO-BIT PHASE TABLE');
  ['00','01','10','11'].forEach((s,i)=>{
    const x=445+i*340, marked=i===0||i===3;
    chip(x,470,180,86,s,C.cyan,1,48);
    arrow(x,530,x,605,at(S,0,1));
    txt(marked?'i':'1',x,690,{size:78,fam:F.math,align:'center',c:marked?C.mag:C.white,a:at(S,0,1)});
  });
  txt('00 ↔ 11       01 ↔ 10',960,760,{size:32,fam:F.math,align:'center',c:C.cyan,a:at(S,1,1)});
};
SCENES.xor = S => {
  badgeQ(S, [[0,null,'computed']]);
  heading('COMPUTE → ROTATE → RESTORE','算出异或，旋转，然后恢复');
  const q=at(S,0,1.5), r=at(S,1,2);
  panel(200,340,1520,455,1,C.cyan,'TWO CNOTS');
  const xs=[370,960,1550];
  ['INPUT','PARITY','RESTORED'].forEach((s,i)=>txt(s,xs[i],410,{size:26,fam:F.disp,align:'center',c:C.dim}));
  ['a','a','a'].forEach((s,i)=>chip(xs[i],500,170,70,s,C.cyan,i===0?1:i===1?q:r,40));
  ['b','a ⊕ b','b'].forEach((s,i)=>chip(xs[i],635,270,80,s,i===1?C.now:C.cyan,i===0?1:i===1?q:r,42,F.math));
  arrow(535,570,770,570,q);arrow(1140,570,1370,570,r);
  txt('Rz(−π/2)',960,735,{size:39,fam:F.math,align:'center',c:C.mag,a:r});
  txt('phase = exp(−iπ/4) D*',960,815,{size:36,fam:F.math,align:'center',c:C.white,a:r});
};
SCENES.ratio = S => {
  badgeQ(S, [[0,null,'argued']]);
  heading('A RATIO THAT DETECTS ONE LABEL','一个比值，检测一个标签');
  panel(190,340,720,440,1,C.cyan,'PARITY v · x = 0');
  panel(1010,340,720,440,1,C.mag,'PARITY v · x = 1');
  txt('h(x)',550,490,{size:65,fam:F.math,align:'center',c:C.cyan});
  txt('h(x + u)',1370,490,{size:65,fam:F.math,align:'center',c:C.mag});
  arrow(820,500,1100,500,at(S,2,1));
  txt('same w parity',550,625,{size:35,fam:F.disp,align:'center',c:C.white,a:at(S,2,1)});
  txt('opposite v parity',1370,625,{size:35,fam:F.disp,align:'center',c:C.white,a:at(S,2,1)});
  txt('g(w · x) / g(w · (x + u)) = 1',960,735,{size:37,fam:F.math,align:'center',c:C.white,a:at(S,2,1)});
  txt('Iᵥ(h) = product(parity 0) / product(parity 1)',960,815,{size:31,fam:F.math,align:'center',c:C.cyan,a:at(S,1,1)});
};
SCENES.force = S => {
  badgeQ(S, [[0,null,'argued']]);
  heading('EVERY NONZERO EVEN LABEL IS REQUIRED','每个非零偶标签都不可少');
  panel(270,340,1380,450,1,C.mag,'THE HARD TARGET');
  chip(600,480,360,88,'00…0',C.cyan,1,47,F.math);
  chip(1320,480,360,88,'11…1',C.cyan,1,47,F.math);
  txt('even v: both lie in the numerator',960,580,{size:38,fam:F.disp,align:'center',c:C.white});
  txt('Iᵥ(d*) = i × i = −1',960,675,{size:62,fam:F.math,align:'center',c:C.mag,a:at(S,0,1)});
  txt('missing label  ⇒  Iᵥ(f) = 1',960,755,{size:39,fam:F.math,align:'center',c:C.white,a:at(S,1,1)});
  txt('−1 ≠ 1   →   the label must be rotated',960,815,{size:39,fam:F.math,align:'center',c:C.cyan,a:at(S,1,1)});
};
SCENES.birth = S => {
  badgeQ(S, [[0,null,'argued']]);
  heading('BIRTH OUTPUTS MUST SPAN THE EVEN LABELS','出生输出必须张成所有偶标签');
  panel(200,340,1520,450,1,C.cyan,'FOUR WIRES: SEVEN REQUIRED LABELS');
  const labels=['1100','1010','1001','0110','0101','0011','1111'];
  labels.forEach((v,i)=>chip(390+(i%4)*380,440+Math.floor(i/4)*120,255,75,v,C.cyan,clamp(at(S,0,2)*8-i),38));
  txt('odd + odd → even',960,680,{size:52,fam:F.math,align:'center',c:C.mag,a:at(S,1,1)});
  txt('B ≥ dim(H) = m − 1',960,755,{size:45,fam:F.math,align:'center',c:C.white,a:at(S,2,1)});
  txt('Births are already included among even outputs.',960,815,{size:30,fam:F.disp,align:'center',c:C.dim,a:at(S,2,1)});
};
SCENES.return = S => {
  badgeQ(S, [[0,null,'argued']]);
  heading('CREATION HAS A RESTORATION COST','生成之外，还有恢复代价');
  panel(210,340,700,445,1,C.mag,'BIRTH');panel(1010,340,700,445,1,C.cyan,'RETURN');
  txt('odd + odd → even',560,475,{size:43,fam:F.math,align:'center',c:C.white});
  txt('even + odd → odd',1360,475,{size:43,fam:F.math,align:'center',c:C.white});
  txt('E + 1',560,585,{size:70,fam:F.math,align:'center',c:C.mag});
  txt('E − 1',1360,585,{size:70,fam:F.math,align:'center',c:C.cyan});
  txt('E starts at 0 and ends at 0',960,700,{size:41,fam:F.disp,align:'center',c:C.white,a:at(S,1,1)});
  txt('R = B ≥ m − 1',960,765,{size:48,fam:F.math,align:'center',c:C.white,a:at(S,1,1)});
  txt('m = 4:   K ≥ 7 + 3 = 10',960,815,{size:47,fam:F.math,align:'center',c:C.cyan,a:at(S,2,1)});
};
SCENES.conclusion = S => {
  badgeQ(S, [[0,null,'argued'],[1,'public Lean theorem','lean'],[2,null,'argued']]);
  heading('THE EXACT WORST-CASE GATE COUNT','精确的最坏情形门数');
  panel(230,340,1460,450,1,C.cyan,'m = 2n, n ≥ 1  •  EXACT, ANCILLA-FREE CNOT / Rz');
  txt('Nₘ = 2^(m−1) + m − 2',960,470,{size:62,fam:F.math,align:'center',c:C.white});
  txt('LOWER: a hard symmetric target exists',960,585,{size:37,fam:F.disp,align:'center',c:C.white,a:at(S,1,1)});
  txt('UPPER: Huang · Kosugi · Nishi · Matsushita (2024)',960,675,{size:33,fam:F.disp,align:'center',c:C.cyan,a:at(S,2,1)});
  txt('gate count ≠ depth     •     radial subclass: separate',960,752,{size:29,fam:F.disp,align:'center',c:C.dim,a:at(S,2,1)});
  txt('Haobo Ma · Wenlin Zhang   |   version 4',960,815,{size:26,fam:F.disp,align:'center',c:C.dim});
};
FILM.poster = () => {
  heading('WHY PARITY LABELS MUST RETURN','偶标签为何必须返回');
  panel(230,350,1460,460,1,C.cyan,'FOUR-WIRE EXAMPLE');
  txt('7 required labels',590,495,{size:65,fam:F.disp,align:'center',c:C.cyan});
  txt('+',960,495,{size:70,fam:F.math,align:'center',c:C.white});
  txt('3 returns',1320,495,{size:65,fam:F.disp,align:'center',c:C.mag});
  txt('at least 10 CNOTs',960,620,{size:76,fam:F.disp,align:'center',c:C.white});
  txt('Nₘ = 2^(m−1) + m − 2',960,730,{size:48,fam:F.math,align:'center',c:C.white});
  txt('Haobo Ma · Wenlin Zhang',960,860,{size:30,fam:F.disp,align:'center',c:C.dim});
};

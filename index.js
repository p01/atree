r=function(s, f){
	for((d=c.getContext('2d')).fillStyle=f, i=o%4/-2; i<19; i+=.08)
		d.fillRect(s * (Q=Math.cos)(i) * i * 6 + 150, i * 16, z = s * Q(i-8) + 2, z)
}
setInterval("r(-1,'red',c.height=640),r(1,'#0f6',o++)", o=100)

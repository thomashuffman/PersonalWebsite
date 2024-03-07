"use strict";(self.webpackChunkpersonalwebsite=self.webpackChunkpersonalwebsite||[]).push([[5666],{5666:function(i,n,e){e.r(n),e.d(n,{LinkInstance:function(){return u}});var t=e(4165),a=e(5861),o=e(7762),r=e(5671),s=e(3144),l=e(4709);function c(i,n){var e,t=((e=i.map((function(i){return i.id}))).sort((function(i,n){return i-n})),e.join("_")),a=n.get(t);return void 0===a&&(a=(0,l.sZ)(),n.set(t,a)),a}var u=function(){function i(n){var e=this;(0,r.Z)(this,i),this.container=n,this._drawLinkLine=function(i,n){var t=i.options.links;if(null!==t&&void 0!==t&&t.enable){var a=e.container,o=a.actualOptions,r=n.destination,s=i.getPosition(),c=r.getPosition(),u=n.opacity;a.canvas.draw((function(n){var e,d,f,v,k=null===(e=i.options.twinkle)||void 0===e?void 0:e.lines;if(null!==k&&void 0!==k&&k.enable){var p=k.frequency,y=(0,l.tX)(k.color);(0,l.sZ)()<p&&y&&(v=y,u=(0,l.Gu)(k.opacity))}if(!v){var h=void 0!==t.id?a.particles.linksColors.get(t.id):a.particles.linksColor;v=(0,l.BE)(i,r,h)}if(v){var g=null!==(d=i.retina.linksWidth)&&void 0!==d?d:0,x=null!==(f=i.retina.linksDistance)&&void 0!==f?f:0,w=o.backgroundMask;!function(i){var n=!1,e=i.begin,t=i.end,a=i.maxDistance,o=i.context,r=i.canvasSize,s=i.width,c=i.backgroundMask,u=i.colorLine,d=i.opacity,f=i.links;if((0,l.Sp)(e,t)<=a)(0,l.pS)(o,e,t),n=!0;else if(f.warp){var v,k,p={x:t.x-r.width,y:t.y},y=(0,l.oW)(e,p);if(y.distance<=a){var h=e.y-y.dy/y.dx*e.x;v={x:0,y:h},k={x:r.width,y:h}}else{var g={x:t.x,y:t.y-r.height},x=(0,l.oW)(e,g);if(x.distance<=a){var w=-(e.y-x.dy/x.dx*e.x)/(x.dy/x.dx);v={x:w,y:0},k={x:w,y:r.height}}else{var b={x:t.x-r.width,y:t.y-r.height},_=(0,l.oW)(e,b);if(_.distance<=a){var q=e.y-_.dy/_.dx*e.x;k={x:(v={x:-q/(_.dy/_.dx),y:q}).x+r.width,y:v.y+r.height}}}}v&&k&&((0,l.pS)(o,e,v),(0,l.pS)(o,t,k),n=!0)}if(n){o.lineWidth=s,c.enable&&(o.globalCompositeOperation=c.composite),o.strokeStyle=(0,l.iz)(u,d);var T=f.shadow;if(T.enable){var L=(0,l.tX)(T.color);L&&(o.shadowBlur=T.blur,o.shadowColor=(0,l.iz)(L))}o.stroke()}}({context:n,width:g,begin:s,end:c,maxDistance:x,canvasSize:a.canvas.size,links:t,backgroundMask:w,colorLine:v,opacity:u})}}))}},this._drawLinkTriangle=function(i,n,t){var a,o=i.options.links;if(null!==o&&void 0!==o&&o.enable){var r=o.triangles;if(r.enable){var s=e.container,c=s.actualOptions,u=n.destination,d=t.destination,f=null!==(a=r.opacity)&&void 0!==a?a:.5*(n.opacity+t.opacity);f<=0||s.canvas.draw((function(n){var e,t=i.getPosition(),a=u.getPosition(),v=d.getPosition(),k=null!==(e=i.retina.linksDistance)&&void 0!==e?e:0;if(!((0,l.Sp)(t,a)>k||(0,l.Sp)(v,a)>k||(0,l.Sp)(v,t)>k)){var p=(0,l.tX)(r.color);if(!p){var y=void 0!==o.id?s.particles.linksColors.get(o.id):s.particles.linksColor;p=(0,l.BE)(i,u,y)}p&&function(i){var n=i.context,e=i.pos1,t=i.pos2,a=i.pos3,o=i.backgroundMask,r=i.colorTriangle,s=i.opacityTriangle;!function(i,n,e,t){i.beginPath(),i.moveTo(n.x,n.y),i.lineTo(e.x,e.y),i.lineTo(t.x,t.y),i.closePath()}(n,e,t,a),o.enable&&(n.globalCompositeOperation=o.composite),n.fillStyle=(0,l.iz)(r,s),n.fill()}({context:n,pos1:t,pos2:a,pos3:v,backgroundMask:c.backgroundMask,colorTriangle:p,opacityTriangle:f})}}))}}},this._drawTriangles=function(i,n,t,a){var r,s,l,c=t.destination;if(null!==(r=i.links)&&void 0!==r&&r.triangles.enable&&null!==(s=c.options.links)&&void 0!==s&&s.triangles.enable){var u=null===(l=c.links)||void 0===l?void 0:l.filter((function(i){var n=e._getLinkFrequency(c,i.destination);return c.options.links&&n<=c.options.links.frequency&&a.findIndex((function(n){return n.destination===i.destination}))>=0}));if(null!==u&&void 0!==u&&u.length){var d,f=(0,o.Z)(u);try{for(f.s();!(d=f.n()).done;){var v=d.value,k=v.destination;e._getTriangleFrequency(n,c,k)>i.links.triangles.frequency||e._drawLinkTriangle(n,t,v)}}catch(p){f.e(p)}finally{f.f()}}}},this._getLinkFrequency=function(i,n){return c([i,n],e._freqs.links)},this._getTriangleFrequency=function(i,n,t){return c([i,n,t],e._freqs.triangles)},this._freqs={links:new Map,triangles:new Map}}return(0,s.Z)(i,[{key:"drawParticle",value:function(i,n){var e=this,t=n.links,a=n.options;if(null!==t&&void 0!==t&&t.length){var r,s=t.filter((function(i){return a.links&&(a.links.frequency>=1||e._getLinkFrequency(n,i.destination)<=a.links.frequency)})),l=(0,o.Z)(s);try{for(l.s();!(r=l.n()).done;){var c,u=r.value;this._drawTriangles(a,n,u,s),u.opacity>0&&(null!==(c=n.retina.linksWidth)&&void 0!==c?c:0)>0&&this._drawLinkLine(n,u)}}catch(d){l.e(d)}finally{l.f()}}}},{key:"init",value:function(){var i=(0,a.Z)((0,t.Z)().mark((function i(){return(0,t.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return this._freqs.links=new Map,this._freqs.triangles=new Map,i.next=4,Promise.resolve();case 4:case"end":return i.stop()}}),i,this)})));return function(){return i.apply(this,arguments)}}()},{key:"particleCreated",value:function(i){if(i.links=[],i.options.links){var n=this.container.retina.pixelRatio,e=i.retina,t=i.options.links,a=t.distance,o=t.width;e.linksDistance=a*n,e.linksWidth=o*n}}},{key:"particleDestroyed",value:function(i){i.links=[]}}]),i}()}}]);
//# sourceMappingURL=5666.f2018a4e.chunk.js.map
"use strict";(self.webpackChunkpersonalwebsite=self.webpackChunkpersonalwebsite||[]).push([[5361],{5361:function(t,n,e){e.r(n),e.d(n,{Connector:function(){return d}});var i=e(7762),o=e(5671),a=e(3144),r=e(9340),c=e(2269),s=e(4709),u=e(4452);function l(t,n,e,i){var o=t.actualOptions.interactivity.modes.connect;if(o)return function(t,n,e,i){var o=Math.floor(e.getRadius()/n.getRadius()),a=n.getFillColor(),r=e.getFillColor();if(a&&r){var c=n.getPosition(),u=e.getPosition(),l=(0,s.oc)(a,r,n.getRadius(),e.getRadius()),v=t.createLinearGradient(c.x,c.y,u.x,u.y);return v.addColorStop(0,(0,s.vz)(a,i)),v.addColorStop((0,s.uZ)(o,0,1),(0,s.iz)(l,i)),v.addColorStop(1,(0,s.vz)(r,i)),v}}(n,e,i,o.links.opacity)}function v(t,n,e){t.canvas.draw((function(i){var o,a=l(t,i,n,e);if(a){var r=n.getPosition(),c=e.getPosition();!function(t,n,e,i,o){(0,s.pS)(t,i,o),t.lineWidth=n,t.strokeStyle=e,t.stroke()}(i,null!==(o=n.retina.linksWidth)&&void 0!==o?o:0,a,r,c)}}))}var d=function(t){(0,r.Z)(e,t);var n=(0,c.Z)(e);function e(t){return(0,o.Z)(this,e),n.call(this,t)}return(0,a.Z)(e,[{key:"clear",value:function(){}},{key:"init",value:function(){var t=this.container,n=t.actualOptions.interactivity.modes.connect;n&&(t.retina.connectModeDistance=n.distance*t.retina.pixelRatio,t.retina.connectModeRadius=n.radius*t.retina.pixelRatio)}},{key:"interact",value:function(){var t=this,n=this.container;if(n.actualOptions.interactivity.events.onHover.enable&&"pointermove"===n.interactivity.status){var e=n.interactivity.mouse.position,o=n.retina,a=o.connectModeDistance,r=o.connectModeRadius;if(!a||a<0||!r||r<0||!e)return;var c=Math.abs(r),s=n.particles.quadTree.queryCircle(e,c,(function(n){return t.isEnabled(n)}));s.forEach((function(t,e){var o,r=t.getPosition(),c=(0,i.Z)(s.slice(e+1));try{for(c.s();!(o=c.n()).done;){var u=o.value,l=u.getPosition(),d=Math.abs(a),f=Math.abs(r.x-l.x),y=Math.abs(r.y-l.y);f<d&&y<d&&v(n,t,u)}}catch(p){c.e(p)}finally{c.f()}}))}}},{key:"isEnabled",value:function(t){var n,e=this.container,i=e.interactivity.mouse,o=(null!==(n=null===t||void 0===t?void 0:t.interactivity)&&void 0!==n?n:e.actualOptions.interactivity).events;return!(!o.onHover.enable||!i.position)&&(0,s.dB)("connect",o.onHover.mode)}},{key:"loadModeOptions",value:function(t){t.connect||(t.connect=new u.l);for(var n=arguments.length,e=new Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];for(var o=0,a=e;o<a.length;o++){var r=a[o];t.connect.load(null===r||void 0===r?void 0:r.connect)}}},{key:"reset",value:function(){}}]),e}(s.L8)}}]);
//# sourceMappingURL=5361.6904c074.chunk.js.map
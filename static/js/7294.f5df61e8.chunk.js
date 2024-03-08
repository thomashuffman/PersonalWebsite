"use strict";(self.webpackChunkpersonalwebsite=self.webpackChunkpersonalwebsite||[]).push([[7294],{7294:function(e,i,n){n.r(i),n.d(i,{BaseMover:function(){return r}});var a=n(5671),t=n(3144),o=n(4709);function s(e,i,n,a,t,s){!function(e,i){var n,a=e.options.move.path;if(!a.enable)return;if(e.lastPathTime<=e.pathDelay)return void(e.lastPathTime+=i.value);var t=null===(n=e.pathGenerator)||void 0===n?void 0:n.generate(e,i);t&&e.velocity.addTo(t);a.clamp&&(e.velocity.x=(0,o.uZ)(e.velocity.x,-1,1),e.velocity.y=(0,o.uZ)(e.velocity.y,-1,1));e.lastPathTime-=e.pathDelay}(e,s);var r=e.gravity,l=null!==r&&void 0!==r&&r.enable&&r.inverse?-1:1;t&&n&&(e.velocity.x+=t*s.factor/(60*n)),null!==r&&void 0!==r&&r.enable&&n&&(e.velocity.y+=l*(r.acceleration*s.factor)/(60*n));var c=e.moveDecay;e.velocity.multTo(c);var v=e.velocity.mult(n);null!==r&&void 0!==r&&r.enable&&a>0&&(!r.inverse&&v.y>=0&&v.y>=a||r.inverse&&v.y<=0&&v.y<=-a)&&(v.y=l*a,n&&(e.velocity.y=v.y/n));var p=e.options.zIndex,y=Math.pow(1-e.zIndexFactor,p.velocityRate);v.multTo(y);var u=e.position;u.addTo(v),i.vibrate&&(u.x+=Math.sin(u.x*Math.cos(u.y)),u.y+=Math.cos(u.y*Math.sin(u.x)))}var r=function(){function e(){(0,a.Z)(this,e)}return(0,t.Z)(e,[{key:"init",value:function(e){var i=e.options.move.gravity;e.gravity={enable:i.enable,acceleration:(0,o.Gu)(i.acceleration),inverse:i.inverse},function(e){var i,n=e.container,a=e.options.move.spin;if(a.enable){var t=null!==(i=a.position)&&void 0!==i?i:{x:50,y:50},s={x:.01*t.x*n.canvas.size.width,y:.01*t.y*n.canvas.size.height},r=e.getPosition(),l=(0,o.Sp)(r,s),c=(0,o.Gu)(a.acceleration);e.retina.spinAcceleration=c*n.retina.pixelRatio,e.spin={center:s,direction:e.velocity.x>=0?"clockwise":"counter-clockwise",angle:e.velocity.angle,radius:l,acceleration:e.retina.spinAcceleration}}}(e)}},{key:"isEnabled",value:function(e){return!e.destroyed&&e.options.move.enable}},{key:"move",value:function(e,i){var n,a,t,r,l,c=e.options,v=c.move;if(v.enable){var p=e.container,y=p.retina.pixelRatio;null!==(a=(n=e.retina).moveSpeed)&&void 0!==a||(n.moveSpeed=(0,o.Gu)(v.speed)*y),null!==(r=(t=e.retina).moveDrift)&&void 0!==r||(t.moveDrift=(0,o.Gu)(e.options.move.drift)*y);var u=function(e){return e.slow.inRange?e.slow.factor:1}(e),d=e.retina.moveSpeed*p.retina.reduceFactor,x=e.retina.moveDrift,f=(0,o.KI)(c.size.value)*y,h=d*(v.size?e.getRadius()/f:1)*u*(i.factor||1)/2,m=null!==(l=e.retina.maxSpeed)&&void 0!==l?l:p.retina.maxSpeed;v.spin.enable?function(e,i){var n=e.container;if(e.spin){var a={x:"clockwise"===e.spin.direction?Math.cos:Math.sin,y:"clockwise"===e.spin.direction?Math.sin:Math.cos};e.position.x=e.spin.center.x+e.spin.radius*a.x(e.spin.angle),e.position.y=e.spin.center.y+e.spin.radius*a.y(e.spin.angle),e.spin.radius+=e.spin.acceleration;var t=Math.max(n.canvas.size.width,n.canvas.size.height),o=.5*t;e.spin.radius>o?(e.spin.radius=o,e.spin.acceleration*=-1):e.spin.radius<0&&(e.spin.radius=0,e.spin.acceleration*=-1),e.spin.angle+=.01*i*(1-e.spin.radius/t)}}(e,h):s(e,v,h,m,x,i),function(e){var i,n,a=e.initialPosition,t=(0,o.oW)(a,e.position),s=t.dx,r=t.dy,l=Math.abs(s),c=Math.abs(r),v=e.retina.maxDistance,p=v.horizontal,y=v.vertical;if(p||y){var u=null!==(n=y&&c>=y)&&void 0!==n&&n;if((null!==(i=p&&l>=p)&&void 0!==i&&i||u)&&!e.misplaced)e.misplaced=!!p&&l>p||!!y&&c>y,p&&(e.velocity.x=.5*e.velocity.y-e.velocity.x),y&&(e.velocity.y=.5*e.velocity.x-e.velocity.y);else if((!p||l<p)&&(!y||c<y)&&e.misplaced)e.misplaced=!1;else if(e.misplaced){var d=e.position,x=e.velocity;p&&(d.x<a.x&&x.x<0||d.x>a.x&&x.x>0)&&(x.x*=-(0,o.sZ)()),y&&(d.y<a.y&&x.y<0||d.y>a.y&&x.y>0)&&(x.y*=-(0,o.sZ)())}}}(e)}}}]),e}()}}]);
//# sourceMappingURL=7294.f5df61e8.chunk.js.map
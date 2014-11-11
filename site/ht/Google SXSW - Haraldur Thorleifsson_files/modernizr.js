window.Modernizr=function(n,g,x){function H(a,b){for(var c in a){var d=a[c];if(!~(""+d).indexOf("-")&&p[d]!==x)return"pfx"==b?d:!0}return!1}function q(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),r=(a+" "+I.join(d+" ")+d).split(" ");if("string"===typeof b||"undefined"===typeof b)b=H(r,b);else{r=(a+" "+J.join(d+" ")+d).split(" ");a:{a=r;for(var t in a)if(d=b[a[t]],d!==x){b=!1===c?a[t]:"function"===typeof d?d.bind(c||b):d;break a}b=!1}}return b}var e={},j=g.documentElement,f=g.createElement("modernizr"),
p=f.style,K=" -webkit- -moz- -o- -ms- ".split(" "),I=["Webkit","Moz","O","ms"],J=["webkit","moz","o","ms"],f={},y=[],z=y.slice,h,v=function(a,b,c,d){var r,t,e,f,k=g.createElement("div"),h=g.body,l=h||g.createElement("body");if(parseInt(c,10))for(;c--;)e=g.createElement("div"),e.id=d?d[c]:"modernizr"+(c+1),k.appendChild(e);return r=['&#173;<style id="smodernizr">',a,"</style>"].join(""),k.id="modernizr",(h?k:l).innerHTML+=r,l.appendChild(k),h||(l.style.background="",l.style.overflow="hidden",f=j.style.overflow,
j.style.overflow="hidden",j.appendChild(l)),t=b(k,a),h?k.parentNode.removeChild(k):(l.parentNode.removeChild(l),j.style.overflow=f),!!t},A={}.hasOwnProperty,w;"undefined"!==typeof A&&"undefined"!==typeof A.call?w=function(a,b){return A.call(a,b)}:w=function(a,b){return b in a&&"undefined"===typeof a.constructor.prototype[b]};Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=z.call(arguments,1),d=function(){if(this instanceof
d){var e=function(){};e.prototype=b.prototype;var e=new e,f=b.apply(e,c.concat(z.call(arguments)));return Object(f)===f?f:e}return b.apply(a,c.concat(z.call(arguments)))};return d});f.touch=function(){var a;return"ontouchstart"in n||n.DocumentTouch&&g instanceof DocumentTouch?a=!0:v(["@media (",K.join("touch-enabled),("),"modernizr){#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=9===b.offsetTop}),a};f.history=function(){return!!n.history&&!!history.pushState};f.rgba=function(){p.cssText=
"background-color:rgba(150,255,150,.5)";return!!~(""+p.backgroundColor).indexOf("rgba")};f.multiplebgs=function(){p.cssText="background:url(https://),url(https://),red url(https://)";return/(url\s*\(.*?){3}/.test(p.background)};f.backgroundsize=function(){return q("backgroundSize")};f.cssanimations=function(){return q("animationName")};f.csstransforms=function(){return!!q("transform")};f.csstransforms3d=function(){var a=!!q("perspective");return a&&"webkitPerspective"in j.style&&v("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a};f.csstransitions=function(){return q("transition")};f.svg=function(){return!!g.createElementNS&&!!g.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect};for(var m in f)w(f,m)&&(h=m.toLowerCase(),e[h]=f[m](),y.push((e[h]?"":"no-")+h));e.addTest=function(a,b){if("object"==typeof a)for(var c in a)w(a,c)&&e.addTest(c,a[c]);else{a=a.toLowerCase();if(e[a]!==x)return e;b="function"==typeof b?b():b;j.className+=" "+(b?"":"no-")+a;e[a]=
b}return e};p.cssText="";var f=null,L=function(){var a=u.elements;return"string"==typeof a?a.split(" "):a},C=function(a){var b=M[a[N]];return b||(b={},B++,a[N]=B,M[B]=b),b},O=function(a,b,c){b||(b=g);if(s)return b.createElement(a);c||(c=C(b));var d;return c.cache[a]?d=c.cache[a].cloneNode():P.test(a)?d=(c.cache[a]=c.createElem(a)).cloneNode():d=c.createElem(a),d.canHaveChildren&&!Q.test(a)?c.frag.appendChild(d):d};h=function(a){a||(a=g);var b=C(a);if(u.shivCSS&&!D&&!b.hasCSS){var c,d=a;c=d.createElement("p");
d=d.getElementsByTagName("head")[0]||d.documentElement;c=(c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>",d.insertBefore(c.lastChild,d.firstChild));b.hasCSS=!!c}if(!s){var e=a;b.cache||(b.cache={},b.createElem=e.createElement,b.createFrag=e.createDocumentFragment,b.frag=b.createFrag());e.createElement=function(a){return u.shivMethods?O(a,e,b):b.createElem(a)};e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+
L().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(u,b.frag)}return a};m=this.html5||{};var Q=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,P=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,D,N="_html5shiv",B=0,M={},s;try{var E=g.createElement("a");E.innerHTML="<xyz></xyz>";D="hidden"in E;var F;if(!(F=1==E.childNodes.length)){g.createElement("a");var G=
g.createDocumentFragment();F="undefined"==typeof G.cloneNode||"undefined"==typeof G.createDocumentFragment||"undefined"==typeof G.createElement}s=F}catch(R){s=D=!0}var u={elements:m.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==m.shivCSS,supportsUnknownElements:s,shivMethods:!1!==m.shivMethods,type:"default",shivDocument:h,createElement:O,createDocumentFragment:function(a,
b){a||(a=g);if(s)return a.createDocumentFragment();b=b||C(a);for(var c=b.frag.cloneNode(),d=0,e=L(),f=e.length;d<f;d++)c.createElement(e[d]);return c}};this.html5=u;h(g);return e._version="2.6.2",e._prefixes=K,e._domPrefixes=J,e._cssomPrefixes=I,e.mq=function(a){var b=n.matchMedia||n.msMatchMedia;if(b)return b(a).matches;var c;return v("@media "+a+" { #modernizr { position: absolute; } }",function(a){c="absolute"==(n.getComputedStyle?getComputedStyle(a,null):a.currentStyle).position}),c},e.testProp=
function(a){return H([a])},e.testAllProps=q,e.testStyles=v,j.className=j.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(" js "+y.join(" ")),e}(this,this.document);

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{28045:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a){return(function(a){if(Array.isArray(a))return d(a)})(a)||(function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)})(a)||g(a)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function g(a,b){if(a){if("string"==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(a,b)}}b.default=function(a){var b,c,d=a.src,h=a.sizes,s=a.unoptimized,x=void 0!==s&&s,y=a.priority,z=void 0!==y&&y,A=a.loading,B=a.lazyRoot,C=void 0===B?null:B,D=a.lazyBoundary,E=void 0===D?"200px":D,F=a.className,G=a.quality,H=a.width,I=a.height,J=a.objectFit,K=a.objectPosition,L=a.onLoadingComplete,M=a.loader,N=void 0===M?w:M,O=a.placeholder,P=void 0===O?"empty":O,Q=a.blurDataURL,R=function(a,b){if(null==a)return{};var c,d,e=o(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),S=i.useRef(null),T=i.useContext(m.ImageConfigContext),U=i.useMemo(function(){var a=p||T||k.imageConfigDefault,b=f(a.deviceSizes).concat(f(a.imageSizes)).sort(function(a,b){return a-b}),c=a.deviceSizes.sort(function(a,b){return a-b});return n({},a,{allSizes:b,deviceSizes:c})},[T]),V=R,W=h?"responsive":"intrinsic";"layout"in V&&(V.layout&&(W=V.layout),delete V.layout);var X,Y="";if("object"==typeof(X=d)&&(t(X)|| void 0!==X.src)){var Z=t(d)?d.default:d;if(!Z.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Z)));if(Q=Q||Z.blurDataURL,Y=Z.src,(!W||"fill"!==W)&&(I=I||Z.height,H=H||Z.width,!Z.height||!Z.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Z)))}d="string"==typeof d?d:Y;var $=v(H),_=v(I),aa=v(G),ba=!z&&("lazy"===A|| void 0===A);(d.startsWith("data:")||d.startsWith("blob:"))&&(x=!0,ba=!1),q.has(d)&&(ba=!1);var ca,da,ea=(da=2,function(a){if(Array.isArray(a))return a}(ca=l.useIntersection({rootRef:C,rootMargin:E,disabled:!ba}))||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(ca,da)||g(ca,da)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),fa=ea[0],ga=ea[1],ha=!ba||ga,ia={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ja={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ka=!1,la={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:J,objectPosition:K},ma="blur"===P?{filter:"blur(20px)",backgroundSize:J||"cover",backgroundImage:"url(\"".concat(Q,"\")"),backgroundPosition:K||"0% 0%"}:{};if("fill"===W)ia.display="block",ia.position="absolute",ia.top=0,ia.left=0,ia.bottom=0,ia.right=0;else if(void 0!==$&& void 0!==_){var na=_/$,oa=isNaN(na)?"100%":"".concat(100*na,"%");"responsive"===W?(ia.display="block",ia.position="relative",ka=!0,ja.paddingTop=oa):"intrinsic"===W?(ia.display="inline-block",ia.position="relative",ia.maxWidth="100%",ka=!0,ja.maxWidth="100%",b="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat($,"%27%20height=%27").concat(_,"%27/%3e")):"fixed"===W&&(ia.display="inline-block",ia.position="relative",ia.width=$,ia.height=_)}var pa={src:r,srcSet:void 0,sizes:void 0};ha&&(pa=u({config:U,src:d,unoptimized:x,layout:W,width:$,quality:aa,sizes:h,loader:N}));var qa=d,ra=(e(c={},"imagesrcset",pa.srcSet),e(c,"imagesizes",pa.sizes),c),sa=i.default.useLayoutEffect,ta=i.useRef(L);return i.useEffect(function(){ta.current=L},[L]),sa(function(){fa(S.current)},[fa]),i.useEffect(function(){var a,b,c,d,e;a=S,b=qa,c=P,d=ta,e=function(){var e=a.current;e&&e.src!==r&&("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(a.current&&(q.add(b),"blur"===c&&(e.style.filter="",e.style.backgroundSize="",e.style.backgroundImage="",e.style.backgroundPosition=""),d.current)){var f=e.naturalWidth,g=e.naturalHeight;d.current({naturalWidth:f,naturalHeight:g})}})},a.current&&(a.current.complete?e():a.current.onload=e)},[qa,W,P,ha]),i.default.createElement("span",{style:ia},ka?i.default.createElement("span",{style:ja},b?i.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:b}):null):null,i.default.createElement("img",Object.assign({},V,pa,{decoding:"async","data-nimg":W,className:F,ref:S,style:n({},la,ma)})),ba&&i.default.createElement("noscript",null,i.default.createElement("img",Object.assign({},V,u({config:U,src:d,unoptimized:x,layout:W,width:$,quality:aa,sizes:h,loader:N}),{decoding:"async","data-nimg":W,style:la,className:F,loading:A||"lazy"}))),z?i.default.createElement(j.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+pa.src+pa.srcSet+pa.sizes,rel:"preload",as:"image",href:pa.srcSet?void 0:pa.src},ra))):null)};var h,i=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(67294)),j=(h=c(5443))&&h.__esModule?h:{default:h},k=c(5809),l=c(57190),m=c(59977);function n(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}function o(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var p={deviceSizes:[320,640,1080,1200],imageSizes:[64,128],path:"",loader:"akamai"},q=new Set();new Map();var r="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",s=new Map([["default",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality;return"".concat(b.path,"?url=").concat(encodeURIComponent(c),"&w=").concat(d,"&q=").concat(e||75)}],["imgix",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=new URL("".concat(b.path).concat(x(c))),g=f.searchParams;return g.set("auto",g.get("auto")||"format"),g.set("fit",g.get("fit")||"max"),g.set("w",g.get("w")||d.toString()),e&&g.set("q",e.toString()),f.href}],["cloudinary",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=["f_auto","c_limit","w_"+d,"q_"+(e||"auto")].join(",")+"/";return"".concat(b.path).concat(f).concat(x(c))}],["akamai",function(a){var b=a.config,c=a.src,d=a.width;return"".concat(b.path).concat(x(c),"?imwidth=").concat(d)}],["custom",function(a){var b=a.src;throw new Error("Image with src \"".concat(b,"\" is missing \"loader\" prop.")+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function t(a){return void 0!==a.default}function u(a){var b=a.config,c=a.src,d=a.unoptimized,e=a.layout,g=a.width,h=a.quality,i=a.sizes,j=a.loader;if(d)return{src:c,srcSet:void 0,sizes:void 0};var k=function(a,b,c,d){var e=a.deviceSizes,g=a.allSizes;if(d&&("fill"===c||"responsive"===c)){for(var h=/(^|\s)(1?\d?\d)vw/g,i=[];j=h.exec(d);j)i.push(parseInt(j[2]));if(i.length){var j,k,l=.01*(k=Math).min.apply(k,f(i));return{widths:g.filter(function(a){return a>=e[0]*l}),kind:"w"}}return{widths:g,kind:"w"}}return"number"!=typeof b||"fill"===c||"responsive"===c?{widths:e,kind:"w"}:{widths:f(new Set([b,2*b].map(function(a){return g.find(function(b){return b>=a})||g[g.length-1]}))),kind:"x"}}(b,g,e,i),l=k.widths,m=k.kind,n=l.length-1;return{sizes:i||"w"!==m?i:"100vw",srcSet:l.map(function(a,d){return"".concat(j({config:b,src:c,quality:h,width:a})," ").concat("w"===m?a:d+1).concat(m)}).join(", "),src:j({config:b,src:c,quality:h,width:l[n]})}}function v(a){return"number"==typeof a?a:"string"==typeof a?parseInt(a,10):void 0}function w(a){var b,c=(null===(b=a.config)|| void 0===b?void 0:b.loader)||"default",d=s.get(c);if(d)return d(a);throw new Error("Unknown \"loader\" found in \"next.config.js\". Expected: ".concat(k.VALID_LOADERS.join(", "),". Received: ").concat(c))}function x(a){return"/"===a[0]?a.slice(1):a}},25675:function(a,b,c){a.exports=c(28045)}}])
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{42283:function(a,b,c){c.d(b,{cI:function(){return ya}});var d=c(67294),e=a=>"checkbox"===a.type,f=a=>a instanceof Date,g=a=>null==a;const h=a=>"object"==typeof a;var i=a=>!g(a)&&!Array.isArray(a)&&h(a)&&!f(a),j=a=>a.substring(0,a.search(/.\d/))||a,k=(a,b)=>[...a].some(a=>j(b)===a),l=a=>a.filter(Boolean),m=a=>void 0===a,n=(a,b,c)=>{if(i(a)&&b){const d=l(b.split(/[,[\].]+?/)).reduce((a,b)=>g(a)?a:a[b],a);return m(d)||d===a?m(a[b])?c:a[b]:d}};const o={BLUR:"blur",CHANGE:"change"},p={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},q={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};var r=(a,b)=>{const c=Object.assign({},a);return delete c[b],c};d.createContext(null);var s=(a,b,c,d=!0)=>{function e(e){return()=>{if(e in a)return b[e]!==p.all&&(b[e]=!d||p.all),c&&(c[e]=!0),a[e]}}const f={};for(const g in a)Object.defineProperty(f,g,{get:e(g)});return f},t=a=>i(a)&&!Object.keys(a).length,u=(a,b,c)=>{const d=r(a,"name");return t(d)||Object.keys(d).length>=Object.keys(b).length||Object.keys(d).find(a=>b[a]===(!c||p.all))},v=a=>Array.isArray(a)?a:[a];const w=a=>{a.current&&(a.current.unsubscribe(),a.current=void 0)},x=({_unsubscribe:a,props:b})=>()=>{b.disabled?w(a):a.current||(a.current=b.subject.subscribe({next:b.callback}))};var y=(a,b,c,d,e)=>b?Object.assign(Object.assign({},c[a]),{types:Object.assign(Object.assign({},c[a]&&c[a].types?c[a].types:{}),{[d]:e||!0})}):{},z=a=>/^\w*$/.test(a),A=a=>l(a.replace(/["|']|\]/g,"").split(/\.|\[/));function B(a,b,c){let d=-1;const e=z(b)?[b]:A(b),f=e.length,g=f-1;for(;++d<f;){const h=e[d];let j=c;if(d!==g){const k=a[h];j=i(k)||Array.isArray(k)?k:isNaN(+e[d+1])?{}:[]}a[h]=j,a=a[h]}return a}const C=(a,b,c)=>{for(const d of c||Object.keys(a)){const e=n(a,d);if(e){const f=e._f,g=r(e,"_f");if(f&&b(f.name)){if(f.ref.focus&&m(f.ref.focus()))break;if(f.refs){f.refs[0].focus();break}}else i(g)&&C(g,b)}}};var D=a=>"function"==typeof a;function E(a){let b;const c=Array.isArray(a);if(a instanceof Date)b=new Date(a);else if(a instanceof Set)b=new Set(a);else if(!(c||i(a)))return a;else for(const d in b=c?[]:{},a){if(D(a[d])){b=a;break}b[d]=E(a[d])}return b}var F=a=>g(a)||!h(a);function G(a,b){if(F(a)||F(b))return a===b;if(f(a)&&f(b))return a.getTime()===b.getTime();const c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(const e of c){const g=a[e];if(!d.includes(e))return!1;if("ref"!==e){const h=b[e];if(f(g)&&f(h)||i(g)&&i(h)||Array.isArray(g)&&Array.isArray(h)?!G(g,h):g!==h)return!1}}return!0}var H=a=>({isOnSubmit:!a||a===p.onSubmit,isOnBlur:a===p.onBlur,isOnChange:a===p.onChange,isOnAll:a===p.all,isOnTouch:a===p.onTouched}),I=a=>"boolean"==typeof a,J=a=>a instanceof HTMLElement,K=a=>"select-multiple"===a.type,L=a=>"radio"===a.type,M=a=>L(a)||e(a),N=a=>"string"==typeof a,O="undefined"!=typeof window&& void 0!==window.HTMLElement&&"undefined"!=typeof document,P=a=>J(a)&&document.contains(a);class Q{constructor(){this.tearDowns=[]}add(R){this.tearDowns.push(R)}unsubscribe(){for(const S of this.tearDowns)S();this.tearDowns=[]}}class T{constructor(U,V){this.observer=U,this.closed=!1,V.add(()=>this.closed=!0)}next(W){this.closed||this.observer.next(W)}}class X{constructor(){this.observers=[]}next(Y){for(const Z of this.observers)Z.next(Y)}subscribe($){const _=new Q(),aa=new T($,_);return this.observers.push(aa),_}unsubscribe(){this.observers=[]}}function ba(a,b){const c=z(b)?[b]:A(b),d=1==c.length?a:function(a,b){const c=b.slice(0,-1).length;let d=0;for(;d<c;)a=m(a)?d++:a[b[d++]];return a}(a,c),e=c[c.length-1];let f;d&&delete d[e];for(let g=0;g<c.slice(0,-1).length;g++){let h=-1,j;const k=c.slice(0,-(g+1)),l=k.length-1;for(g>0&&(f=a);++h<k.length;){const n=k[h];j=j?j[n]:a[n],l===h&&(i(j)&&t(j)||Array.isArray(j)&&!j.filter(a=>i(a)&&!t(a)||I(a)).length)&&(f?delete f[n]:delete a[n]),f=j}}return a}var ca=a=>"file"===a.type;const da={value:!1,isValid:!1},ea={value:!0,isValid:!0};var fa=a=>{if(Array.isArray(a)){if(a.length>1){const b=a.filter(a=>a&&a.checked&&!a.disabled).map(a=>a.value);return{value:b,isValid:!!b.length}}return a[0].checked&&!a[0].disabled?a[0].attributes&&!m(a[0].attributes.value)?m(a[0].value)||""===a[0].value?ea:{value:a[0].value,isValid:!0}:ea:da}return da},ga=(a,{valueAsNumber:b,valueAsDate:c,setValueAs:d})=>m(a)?a:b?""===a?NaN:+a:c?new Date(a):d?d(a):a;const ha={isValid:!1,value:null};var ia=a=>Array.isArray(a)?a.reduce((a,b)=>b&&b.checked&&!b.disabled?{isValid:!0,value:b.value}:a,ha):ha;function ja(a){const b=a.ref;return(a.refs?a.refs.every(a=>a.disabled):b.disabled)?void 0:ca(b)?b.files:L(b)?ia(a.refs).value:K(b)?[...b.selectedOptions].map(({value:a})=>a):e(b)?fa(a.refs).value:ga(m(b.value)?a.ref.value:b.value,a)}var ka=(a,b,c,d)=>{const e={};for(const f of a){const g=n(b,f);g&&B(e,f,g._f)}return{criteriaMode:c,names:[...a],fields:e,shouldUseNativeValidation:d}},la=a=>a.mount&&(a.required||a.min||a.max||a.maxLength||a.minLength||a.pattern||a.validate);function ma(a,b){if(F(a)||F(b))return b;for(const c in b){const d=a[c],e=b[c];try{a[c]=i(d)&&i(e)||Array.isArray(d)&&Array.isArray(e)?ma(d,e):e}catch(f){}}return a}function na(a,b,c,d,e){let f=-1;for(;++f<a.length;){for(const h in a[f])Array.isArray(a[f][h])?(c[f]||(c[f]={}),c[f][h]=[],na(a[f][h],n(b[f]||{},h,[]),c[f][h],c[f],h)):!g(b)&&G(n(b[f]||{},h),a[f][h])?B(c[f]||{},h):c[f]=Object.assign(Object.assign({},c[f]),{[h]:!0});d&&!c.length&&delete d[e]}return c}var oa=(a,b,c)=>ma(na(a,b,c.slice(0,a.length)),na(b,a,c.slice(0,a.length))),pa=(a,b,c,d,e)=>!e.isOnAll&&(!c&&e.isOnTouch?!(b||a):(c?d.isOnBlur:e.isOnBlur)?!a:(c?!d.isOnChange:!e.isOnChange)||a),qa=(a,b)=>!l(n(a,b,[])).length&&ba(a,b),ra=a=>N(a)||d.isValidElement(a),sa=a=>a instanceof RegExp;function ta(a,b,c="validate"){if(ra(a)||Array.isArray(a)&&a.every(ra)||I(a)&&!a)return{type:c,message:ra(a)?a:"",ref:b}}var ua=a=>i(a)&&!sa(a)?a:{value:a,message:""},va=async(a,b,c,d)=>{const{ref:f,refs:h,required:j,maxLength:k,minLength:l,min:m,max:n,pattern:o,validate:p,name:r,valueAsNumber:s,mount:u,disabled:v}=a._f;if(!u||v)return{};const w=h?h[0]:f,x=a=>{d&&w.reportValidity&&(w.setCustomValidity(I(a)?"":a||" "),w.reportValidity())},z={},A=L(f),B=e(f),C=(s||ca(f))&&!f.value||""===b||Array.isArray(b)&&!b.length,E=y.bind(null,r,c,z),F=(a,b,c,d=q.maxLength,e=q.minLength)=>{const g=a?b:c;z[r]=Object.assign({type:a?d:e,message:g,ref:f},E(a?d:e,g))};if(j&&(!(A||B)&&(C||g(b))||I(b)&&!b||B&&!fa(h).isValid||A&&!ia(h).isValid)){const{value:G,message:H}=ra(j)?{value:!!j,message:j}:ua(j);if(G&&(z[r]=Object.assign({type:q.required,message:H,ref:w},E(q.required,H)),!c))return x(H),z}if(!C&&(!g(m)||!g(n))){let J,K;const M=ua(n),O=ua(m);if(isNaN(b)){const P=f.valueAsDate||new Date(b);N(M.value)&&(J=P>new Date(M.value)),N(O.value)&&(K=P<new Date(O.value))}else{const Q=f.valueAsNumber||parseFloat(b);g(M.value)||(J=Q>M.value),g(O.value)||(K=Q<O.value)}if((J||K)&&(F(!!J,M.message,O.message,q.max,q.min),!c))return x(z[r].message),z}if((k||l)&&!C&&N(b)){const R=ua(k),S=ua(l),T=!g(R.value)&&b.length>R.value,U=!g(S.value)&&b.length<S.value;if((T||U)&&(F(T,R.message,S.message),!c))return x(z[r].message),z}if(o&&!C&&N(b)){const{value:V,message:W}=ua(o);if(sa(V)&&!b.match(V)&&(z[r]=Object.assign({type:q.pattern,message:W,ref:f},E(q.pattern,W)),!c))return x(W),z}if(p){if(D(p)){const X=await p(b),Y=ta(X,w);if(Y&&(z[r]=Object.assign(Object.assign({},Y),E(q.validate,Y.message)),!c))return x(Y.message),z}else if(i(p)){let Z={};for(const $ in p){if(!t(Z)&&!c)break;const _=ta(await p[$](b),w,$);_&&(Z=Object.assign(Object.assign({},_),E($,_.message)),x(_.message),c&&(z[r]=Z))}if(!t(Z)&&(z[r]=Object.assign({ref:w},Z),!c))return z}}return x(!0),z};const wa={mode:p.onSubmit,reValidateMode:p.onChange,shouldFocusError:!0},xa="undefined"==typeof window;function ya(a={}){const b=d.useRef(),[c,h]=d.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});b.current?b.current.control._options=a:b.current=Object.assign(Object.assign({},function(a={}){let b=Object.assign(Object.assign({},wa),a),c={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},d={},h=b.defaultValues||{},i=b.shouldUnregister?{}:E(h),q={action:!1,mount:!1,watch:!1},s={mount:new Set(),unMount:new Set(),array:new Set(),watch:new Set()},u,w=0,x={};const y={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},z={watch:new X(),control:new X(),array:new X(),state:new X()},A=H(b.mode),L=H(b.reValidateMode),Q=b.criteriaMode===p.all,R=(a,b)=>(...c)=>{clearTimeout(w),w=window.setTimeout(()=>a(...c),b)},S=(a,b)=>!b&&(s.watchAll||s.watch.has(a)||s.watch.has((a.match(/\w+/)||[])[0])),T=async a=>{let e=!1;return y.isValid&&(e=b.resolver?t((await $()).errors):await aa(d,!0),a||e===c.isValid||(c.isValid=e,z.state.next({isValid:e}))),e},U=(a,b)=>(B(c.errors,a,b),z.state.next({errors:c.errors})),V=(a,b,c)=>{const e=n(d,a);if(e){const f=n(i,a,n(h,a));m(f)||c&&c.defaultChecked||b?B(i,a,b?f:ja(e._f)):ea(a,f)}q.mount&&T()},W=(a,b,d,e=!0)=>{let f=!1;const g={name:a},i=n(c.touchedFields,a);if(y.isDirty){const j=c.isDirty;c.isDirty=g.isDirty=ca(),f=j!==g.isDirty}if(y.dirtyFields&&!d){const k=n(c.dirtyFields,a),l=G(n(h,a),b);l?ba(c.dirtyFields,a):B(c.dirtyFields,a,!0),g.dirtyFields=c.dirtyFields,f=f||k!==n(c.dirtyFields,a)}return d&&!i&&(B(c.touchedFields,a,d),g.touchedFields=c.touchedFields,f=f||y.touchedFields&&i!==d),f&&e&&z.state.next(g),f?g:{}},Y=(a,b)=>(B(c.dirtyFields,a,oa(b,n(h,a,[]),n(c.dirtyFields,a,[]))),qa(c.dirtyFields,a)),Z=async(b,d,e,f,g)=>{const h=n(c.errors,d),i=y.isValid&&c.isValid!==e;if(a.delayError&&f?(u=u||R(U,a.delayError))(d,f):(clearTimeout(w),f?B(c.errors,d,f):ba(c.errors,d)),((f?!G(h,f):h)||!t(g)||i)&&!b){const j=Object.assign(Object.assign(Object.assign({},g),i?{isValid:e}:{}),{errors:c.errors,name:d});c=Object.assign(Object.assign({},c),j),z.state.next(j)}x[d]--,y.isValidating&&!x[d]&&(z.state.next({isValidating:!1}),x={})},$=async a=>b.resolver?await b.resolver(Object.assign({},i),b.context,ka(a||s.mount,d,b.criteriaMode,b.shouldUseNativeValidation)):{},_=async a=>{const{errors:b}=await $();if(a)for(const d of a){const e=n(b,d);e?B(c.errors,d,e):ba(c.errors,d)}else c.errors=b;return b},aa=async(a,d,e={valid:!0})=>{for(const f in a){const g=a[f];if(g){const h=g._f,j=r(g,"_f");if(h){const k=await va(g,n(i,h.name),Q,b.shouldUseNativeValidation);if(k[h.name]&&(e.valid=!1,d))break;d||(k[h.name]?B(c.errors,h.name,k[h.name]):ba(c.errors,h.name))}j&&await aa(j,d,e)}}return e.valid},ca=(a,b)=>(a&&b&&B(i,a,b),!G(ma(),h)),da=(a,b,c)=>{const d=Object.assign({},q.mount?i:m(b)?h:N(a)?{[a]:b}:b);if(a){const e=v(a).map(a=>(c&&s.watch.add(a),n(d,a)));return Array.isArray(a)?e:e[0]}return c&&(s.watchAll=!0),d},ea=(a,b,c={},f)=>{const h=n(d,a);let j=b;if(h){const k=h._f;k&&(B(i,a,ga(b,k)),j=O&&J(k.ref)&&g(b)?"":b,K(k.ref)?[...k.ref.options].forEach(a=>a.selected=j.includes(a.value)):k.refs?e(k.ref)?k.refs.length>1?k.refs.forEach(a=>a.checked=Array.isArray(j)?!!j.find(b=>b===a.value):j===a.value):k.refs[0].checked=!!j:k.refs.forEach(a=>a.checked=a.value===j):k.ref.value=j,f&&z.control.next({values:i,name:a}))}(c.shouldDirty||c.shouldTouch)&&W(a,j,c.shouldTouch),c.shouldValidate&&ia(a)},fa=(a,b,c)=>{for(const e in b){const g=b[e],h=`${a}.${e}`,i=n(d,h);!s.array.has(a)&&F(g)&&(!i||i._f)||f(g)?ea(h,g,c,!0):fa(h,g,c)}},ha=async a=>{const f=a.target;let g=f.name;const h=n(d,g);if(h){let k,l;const m=f.type?ja(h._f):f.value,p=a.type===o.BLUR,q=!la(h._f)&&!b.resolver&&!n(c.errors,g)&&!h._f.deps||pa(p,n(c.touchedFields,g),c.isSubmitted,L,A),r=S(g,p);p?h._f.onBlur&&h._f.onBlur(a):h._f.onChange&&h._f.onChange(a),B(i,g,m);const s=W(g,m,p,!1),u=!t(s)||r;if(p||z.watch.next({name:g,type:a.type}),q)return u&&z.state.next(Object.assign({name:g},r?{}:s));if(!p&&r&&z.state.next({}),x[g],x[g]=1,y.isValidating&&z.state.next({isValidating:!0}),b.resolver){const{errors:v}=await $([g]);if(k=n(v,g),e(f)&&!k){const w=j(g),C=n(d,w);if(Array.isArray(C)&&C.every(a=>a._f&&e(a._f.ref))){const D=n(v,w,{});D.type&&(k=D),g=w}}l=t(v)}else k=(await va(h,n(i,g),Q,b.shouldUseNativeValidation))[g],l=await T(!0);h._f.deps&&ia(h._f.deps),Z(!1,g,l,k,s)}},ia=async(a,e={})=>{let f,g;const h=v(a);if(z.state.next({isValidating:!0}),b.resolver){const i=await _(m(a)?a:h);f=t(i),g=a?!h.some(a=>n(i,a)):f}else a?(g=(await Promise.all(h.map(async a=>{const b=n(d,a);return await aa(b&&b._f?{[a]:b}:b)}))).every(Boolean),T()):g=f=await aa(d);return z.state.next(Object.assign(Object.assign({},N(a)&&f===c.isValid?{name:a}:{}),{errors:c.errors,isValid:f,isValidating:!1})),e.shouldFocus&&!g&&C(d,a=>n(c.errors,a),a?h:s.mount),g},ma=a=>{const b=Object.assign(Object.assign({},h),q.mount?i:{});return m(a)?b:N(a)?n(b,a):a.map(a=>n(b,a))},na=(a,e={})=>{for(const f of a?v(a):s.mount)s.mount.delete(f),s.array.delete(f),n(d,f)&&(e.keepValue||(ba(d,f),ba(i,f)),e.keepError||ba(c.errors,f),e.keepDirty||ba(c.dirtyFields,f),e.keepTouched||ba(c.touchedFields,f),b.shouldUnregister||e.keepDefaultValue||ba(h,f));z.watch.next({}),z.state.next(Object.assign(Object.assign({},c),e.keepDirty?{isDirty:ca()}:{})),e.keepIsValid||T()},ra=(a,c={})=>{const e=n(d,a);return B(d,a,{_f:Object.assign(Object.assign(Object.assign({},e&&e._f?e._f:{ref:{name:a}}),{name:a,mount:!0}),c)}),s.mount.add(a),m(c.value)||B(i,a,c.value),e?I(c.disabled)&&B(i,a,c.disabled?void 0:n(i,a,ja(e._f))):V(a,!0),xa?{name:a}:Object.assign(Object.assign({name:a},I(c.disabled)?{disabled:c.disabled}:{}),{onChange:ha,onBlur:ha,ref:e=>{if(e){ra(a,c);let f=n(d,a);const g=m(e.value)&&e.querySelectorAll?e.querySelectorAll("input,select,textarea")[0]||e:e,h=M(g);!(g===f._f.ref||h&&l(f._f.refs||[]).find(a=>a===g))&&(f={_f:h?Object.assign(Object.assign({},f._f),{refs:[...l(f._f.refs||[]).filter(P),g,],ref:{type:g.type,name:a}}):Object.assign(Object.assign({},f._f),{ref:g})},B(d,a,f),c&&c.disabled||V(a,!1,g))}else{const i=n(d,a,{}),j=b.shouldUnregister||c.shouldUnregister;i._f&&(i._f.mount=!1),j&&!(k(s.array,a)&&q.action)&&s.unMount.add(a)}}})};return{control:{register:ra,unregister:na,_getWatch:da,_getDirty:ca,_updateValid:T,_removeUnmounted:()=>{for(const a of s.unMount){const b=n(d,a);b&&(b._f.refs?b._f.refs.every(a=>!P(a)):!P(b._f.ref))&&na(a)}s.unMount=new Set()},_updateFieldArray:(a,b,e,f=[],g=!0,h=!0)=>{if(q.action=!0,h&&n(d,a)){const i=b(n(d,a),e.argA,e.argB);g&&B(d,a,i)}if(Array.isArray(n(c.errors,a))){const j=b(n(c.errors,a),e.argA,e.argB);g&&B(c.errors,a,j),qa(c.errors,a)}if(y.touchedFields&&n(c.touchedFields,a)){const k=b(n(c.touchedFields,a),e.argA,e.argB);g&&B(c.touchedFields,a,k),qa(c.touchedFields,a)}(y.dirtyFields||y.isDirty)&&Y(a,f),z.state.next({isDirty:ca(a,f),dirtyFields:c.dirtyFields,errors:c.errors,isValid:c.isValid})},_getFieldArray:b=>n(q.mount?i:h,b,a.shouldUnregister?n(h,b,[]):[]),_subjects:z,_proxyFormState:y,get _fields(){return d},set _fields(value){d=value},get _formValues(){return i},set _formValues(value){i=value},get _stateFlags(){return q},set _stateFlags(value){q=value},get _defaultValues(){return h},set _defaultValues(value){h=value},get _names(){return s},set _names(value){s=value},get _formState(){return c},set _formState(value){c=value},get _options(){return b},set _options(value){b=Object.assign(Object.assign({},b),value)}},trigger:ia,register:ra,handleSubmit:(a,e)=>async f=>{f&&(f.preventDefault&&f.preventDefault(),f.persist&&f.persist());let g=!0,h=Object.assign({},i);z.state.next({isSubmitting:!0});try{if(b.resolver){const{errors:j,values:k}=await $();c.errors=j,h=k}else await aa(d);t(c.errors)&&Object.keys(c.errors).every(a=>n(h,a))?(z.state.next({errors:{},isSubmitting:!0}),await a(h,f)):(e&&await e(c.errors,f),b.shouldFocusError&&C(d,a=>n(c.errors,a),s.mount))}catch(l){throw g=!1,l}finally{c.isSubmitted=!0,z.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:t(c.errors)&&g,submitCount:c.submitCount+1,errors:c.errors})}},watch:(a,b)=>D(a)?z.watch.subscribe({next:c=>a(da(void 0,b),c)}):da(a,b,!0),setValue:(a,b,e={})=>{const f=n(d,a),h=s.array.has(a);B(i,a,b),h?(z.array.next({name:a,values:i}),(y.isDirty||y.dirtyFields)&&e.shouldDirty&&(Y(a,b),z.state.next({name:a,dirtyFields:c.dirtyFields,isDirty:ca(a,b)}))):!f||f._f||g(b)?ea(a,b,e,!0):fa(a,b,e),S(a)&&z.state.next({}),z.watch.next({name:a})},getValues:ma,reset:(b,e={})=>{const f=!t(b),g=b||h,j=E(g);if(e.keepDefaultValues||(h=g),!e.keepValues){if(O)for(const k of s.mount){const l=n(d,k);if(l&&l._f){const m=Array.isArray(l._f.refs)?l._f.refs[0]:l._f.ref;try{J(m)&&m.closest("form").reset();break}catch(o){}}}i=a.shouldUnregister?e.keepDefaultValues?h:{}:j,d={},z.control.next({values:f?j:h}),z.watch.next({}),z.array.next({values:j})}s={mount:new Set(),unMount:new Set(),array:new Set(),watch:new Set(),watchAll:!1,focus:""},z.state.next({submitCount:e.keepSubmitCount?c.submitCount:0,isDirty:e.keepDirty?c.isDirty:!!e.keepDefaultValues&&!G(b,h),isSubmitted:!!e.keepIsSubmitted&&c.isSubmitted,dirtyFields:e.keepDirty?c.dirtyFields:e.keepDefaultValues&&b?Object.entries(b).reduce((a,[b,c])=>Object.assign(Object.assign({},a),{[b]:c!==n(h,b)}),{}):{},touchedFields:e.keepTouched?c.touchedFields:{},errors:e.keepErrors?c.errors:{},isSubmitting:!1,isSubmitSuccessful:!1}),q.mount=!y.isValid||!!e.keepIsValid,q.watch=!!a.shouldUnregister},clearErrors:a=>{a?v(a).forEach(a=>ba(c.errors,a)):c.errors={},z.state.next({errors:c.errors})},unregister:na,setError:(a,b,e)=>{const f=(n(d,a,{_f:{}})._f||{}).ref;B(c.errors,a,Object.assign(Object.assign({},b),{ref:f})),z.state.next({name:a,errors:c.errors,isValid:!1}),e&&e.shouldFocus&&f&&f.focus&&f.focus()},setFocus:a=>{const b=n(d,a)._f;(b.ref.focus?b.ref:b.refs[0]).focus()}}}(a)),{formState:c});const i=b.current.control;return(function(a){const b=d.useRef(),c=d.useRef(()=>{});c.current=x({_unsubscribe:b,props:a}),a.skipEarlySubscription||c.current(),d.useEffect(()=>(c.current(),()=>w(b)),[])})({subject:i._subjects.state,callback:a=>{u(a,i._proxyFormState,!0)&&(i._formState=Object.assign(Object.assign({},i._formState),a),h(Object.assign({},i._formState)))}}),d.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),b.current.formState=s(c,i._proxyFormState),b.current}}}])
exports.id = 390;
exports.ids = [390];
exports.modules = {

/***/ 9713:
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(7316);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3204:
/***/ ((module) => {

"use strict";


const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 1905:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Welcome to gatsby-plugin-mdx!
 *
 * Start reading in gatsby-node.js
 */const MDXRenderer=__webpack_require__(4914);module.exports={MDXRenderer:MDXRenderer};

/***/ }),

/***/ 4914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _defineProperty=__webpack_require__(9713);var _objectWithoutProperties=__webpack_require__(6479);const _excluded=["scope","children"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}const React=__webpack_require__(8821);const{mdx}=__webpack_require__(3905);const{useMDXScope}=__webpack_require__(7796);module.exports=function MDXRenderer(_ref){let{scope,children}=_ref,props=_objectWithoutProperties(_ref,_excluded);const mdxScope=useMDXScope(scope);// Memoize the compiled component
const End=React.useMemo(()=>{if(!children){return null;}const fullScope=_objectSpread({// React is here just in case the user doesn't pass them in
// in a manual usage of the renderer
React,mdx},mdxScope);const keys=Object.keys(fullScope);const values=keys.map(key=>fullScope[key]);const fn=new Function(`_fn`,...keys,`${children}`);return fn({},...values);},[children,scope]);return React.createElement(End,_objectSpread({},props));};

/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Image)
});

// EXTERNAL MODULE: external "/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/node_modules/preact/compat/dist/compat.js"
var compat_js_ = __webpack_require__(8821);
var compat_js_default = /*#__PURE__*/__webpack_require__.n(compat_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
// EXTERNAL MODULE: ./node_modules/common-tags/es/index.js + 41 modules
var es = __webpack_require__(5863);
// EXTERNAL MODULE: ./node_modules/camelcase/index.js
var camelcase = __webpack_require__(3204);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},s.apply(this,arguments);}function l(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var d,u=(/* unused pure expression or super */ null && ([.25,.5,1,2])),c=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),h=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),g=function(e){return console.warn(e);},p=function(e,t){return e-t;},m=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function f(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function v(e){var t=e.layout,a=void 0===t?"constrained":t,i=e.width,n=e.height,o=e.sourceMetadata,l=e.breakpoints,d=e.aspectRatio,u=e.formats,c=void 0===u?["auto","webp"]:u;return c=c.map(function(e){return e.toLowerCase();}),a=r(a),i&&n?s({},e,{formats:c,layout:a,aspectRatio:i/n}):(o.width&&o.height&&!d&&(d=o.width/o.height),"fullWidth"===a?(i=i||o.width||l[l.length-1],n=n||Math.round(i/(d||1.3333333333333333))):(i||(i=n&&d?n*d:o.width?o.width:n?Math.round(n/1.3333333333333333):800),d&&!n?n=Math.round(i/d):d||(d=i/n)),s({},e,{width:i,height:n,aspectRatio:d,layout:a,formats:c}));}function w(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=v(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function y(e){var t,a=(e=v(e)).pluginName,r=e.sourceMetadata,n=e.generateImageSource,o=e.layout,l=e.fit,h=e.options,p=e.width,w=e.height,y=e.filename,M=e.reporter,S=void 0===M?{warn:g}:M,N=e.backgroundColor,R=e.placeholderURL;if(a||S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof n)throw new Error("generateImageSource must be a function");r&&(r.width||r.height)?r.format||(r.format=f(y)):r={width:p,height:w,format:(null==(t=r)?void 0:t.format)||f(y)||"auto"};var x=new Set(e.formats);(0===x.size||x.has("auto")||x.has(""))&&(x.delete("auto"),x.delete(""),x.add(r.format)),x.has("jpg")&&x.has("png")&&(S.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),x.delete("jpg"===r.format?"png":"jpg"));var I=function(e){var t=e.filename,a=e.layout,r=void 0===a?"constrained":a,n=e.sourceMetadata,o=e.reporter,l=void 0===o?{warn:g}:o,h=e.breakpoints,p=void 0===h?c:h,m=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(m.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+m.map(function(e){return e.join(": ");}).join(", "));return"fixed"===r?function(e){var t=e.filename,a=e.sourceMetadata,r=e.width,n=e.height,o=e.fit,s=void 0===o?"cover":o,l=e.outputPixelDensities,c=e.reporter,h=void 0===c?{warn:g}:c,p=a.width/a.height,m=b(void 0===l?u:l);if(r&&n){var f=k(a,{width:r,height:n,fit:s});r=f.width,n=f.height,p=f.aspectRatio;}r?n||(n=Math.round(r/p)):r=n?Math.round(n*p):800;var v,w,y=r;if(a.width<r||a.height<n){var E=a.width<r?"width":"height";h.warn(i(d||(v=["\n    The requested ",' "','px" for the image '," was larger than the actual image "," of ","px. If possible, replace the current image with a larger one."],w||(w=v.slice(0)),v.raw=w,d=v),E,"width"===E?r:n,t,E,a[E])),"width"===E?(r=a.width,n=Math.round(r/p)):r=(n=a.height)*p;}return{sizes:m.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*r);}).filter(function(e){return e<=a.width;}),aspectRatio:p,presentationWidth:y,presentationHeight:Math.round(y/p),unscaledWidth:r};}(e):"constrained"===r?E(e):"fullWidth"===r?E(s({breakpoints:p},e)):(l.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+r),{sizes:[n.width],presentationWidth:n.width,presentationHeight:n.height,aspectRatio:n.width/n.height,unscaledWidth:n.width});}(s({},e,{sourceMetadata:r})),W={sources:[]},j=e.sizes;j||(j=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}}(I.presentationWidth,o)),x.forEach(function(e){var t=I.sizes.map(function(t){var i=n(y,t,Math.round(t/I.aspectRatio),e,l,h);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;S.warn("["+a+"] The resolver for image "+y+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===I.unscaledWidth;})||t[0];i&&(W.fallback={src:i.src,srcSet:m(t),sizes:j});}else{var r;null==(r=W.sources)||r.push({srcSet:m(t),sizes:j,type:"image/"+e});}});var _={images:W,layout:o,backgroundColor:N};switch(R&&(_.placeholder={fallback:R}),o){case"fixed":_.width=I.presentationWidth,_.height=I.presentationHeight;break;case"fullWidth":_.width=1,_.height=1/I.aspectRatio;break;case"constrained":_.width=e.width||I.presentationWidth||1,_.height=(_.width||1)/I.aspectRatio;}return _;}var b=function(e){return Array.from(new Set([1].concat(e))).sort(p);};function E(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,s=e.outputPixelDensities,l=e.breakpoints,d=e.layout,c=a.width/a.height,h=b(void 0===s?u:s);if(i&&r){var g=k(a,{width:i,height:r,fit:o});i=g.width,r=g.height,c=g.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(800,a.width))/c),i||(i=r*c);var m=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==l?void 0:l.length)>0?(t=l.filter(function(e){return e<=a.width;})).length<l.length&&!t.includes(a.width)&&t.push(a.width):t=(t=h.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==d||t.includes(i)||t.push(i),{sizes:t=t.sort(p),aspectRatio:c,presentationWidth:m,presentationHeight:Math.round(m/c),unscaledWidth:i};}function k(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var M=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),S=(/* unused pure expression or super */ null && (["images","placeholder"]));function N(){return true&&true;}new Set();var R=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},x=function(e){var t,a,i;return null==(t=R(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},I=function(e){var t,a,i;return null==(t=R(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function W(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,n=e.sourceHeight,o=e.pluginName,d=void 0===o?"getImageData":o,u=e.formats,c=void 0===u?["auto"]:u,g=e.breakpoints,p=e.options,m=l(e,M);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=h),y(s({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:c,breakpoints:g,sourceMetadata:{width:r,height:n,format:"auto"}}));}function j(e,t){var a,i,r,n=e.images,o=e.placeholder,d=s({},l(e,S),{images:s({},n,{sources:[]}),placeholder:o&&s({},o,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=d.images.sources).push.apply(a,r.images.sources.map(function(e){return s({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),d.placeholder&&d.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=d.images.sources).push.apply(a,n.sources),null!=o&&o.sources&&(null==(i=d.placeholder)||(r=i.sources).push.apply(r,o.sources)),d;}var _,T=["src","srcSet","loading","alt","shouldLoad","innerRef"],A=["fallback","sources","shouldLoad"],O=function(t){var a=t.src,i=t.srcSet,r=t.loading,n=t.alt,o=void 0===n?"":n,d=t.shouldLoad,u=t.innerRef,c=l(t,T);return/*#__PURE__*/compat_js_default().createElement("img",s({},c,{decoding:"async",loading:r,src:d?a:void 0,"data-src":d?void 0:a,srcSet:d?i:void 0,"data-srcset":d?void 0:i,alt:o,ref:u}));},z=/*#__PURE__*/(0,compat_js_.forwardRef)(function(t,a){var i=t.fallback,r=t.sources,n=void 0===r?[]:r,o=t.shouldLoad,d=void 0===o||o,u=l(t,A),c=u.sizes||(null==i?void 0:i.sizes),h=/*#__PURE__*/compat_js_default().createElement(O,s({},u,i,{sizes:c,shouldLoad:d,innerRef:a}));return n.length?/*#__PURE__*/compat_js_default().createElement("picture",null,n.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/compat_js_default().createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:d?i:void 0,"data-srcset":d?void 0:i,sizes:c});}),h):h;});O.propTypes={src:prop_types.string.isRequired,alt:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string,shouldLoad:prop_types.bool},z.displayName="Picture",z.propTypes={alt:prop_types.string.isRequired,shouldLoad:prop_types.bool,fallback:prop_types.exact({src:prop_types.string.isRequired,srcSet:prop_types.string,sizes:prop_types.string}),sources:prop_types.arrayOf(prop_types.oneOfType([prop_types.exact({media:prop_types.string.isRequired,type:prop_types.string,sizes:prop_types.string,srcSet:prop_types.string.isRequired}),prop_types.exact({media:prop_types.string,type:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string.isRequired})]))};var L=["fallback"],C=function(t){var a=t.fallback,i=l(t,L);return a?/*#__PURE__*/compat_js_default().createElement(z,s({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/compat_js_default().createElement("div",s({},i));};C.displayName="Placeholder",C.propTypes={fallback:prop_types.string,sources:null==(_=z.propTypes)?void 0:_.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var q=/*#__PURE__*/(0,compat_js_.forwardRef)(function(t,a){return/*#__PURE__*/compat_js_default().createElement((compat_js_default()).Fragment,null,/*#__PURE__*/compat_js_default().createElement(z,s({ref:a},t)),/*#__PURE__*/compat_js_default().createElement("noscript",null,/*#__PURE__*/compat_js_default().createElement(z,s({},t,{shouldLoad:!0}))));});q.displayName="MainImage",q.propTypes=z.propTypes;var D=["children"],P=function(){return/*#__PURE__*/compat_js_default().createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1)}}'}});},H=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/compat_js_default().createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/compat_js_default().createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/compat_js_default().createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+i+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},F=function(t){var i=t.children,r=l(t,D);return/*#__PURE__*/compat_js_default().createElement(compat_js_.Fragment,null,/*#__PURE__*/compat_js_default().createElement(H,s({},r)),i,/*#__PURE__*/compat_js_default().createElement(P,null));},B=["as","children"],G=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],V=["style","className"],U=function(e){return e.replace(/\n/g,"");},X=function(t){var a=t.as,i=void 0===a?"div":a,r=t.children,n=l(t,B);return/*#__PURE__*/compat_js_default().createElement(i,s({},n),r);},Y=function(t){var a=t.as,i=t.className,r=t.class,n=t.style,o=t.image,d=t.loading,u=void 0===d?"lazy":d,c=t.imgClassName,h=t.imgStyle,g=t.backgroundColor,p=t.objectFit,m=t.objectPosition,f=l(t,G);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(i=r),h=s({objectFit:p,objectPosition:m,backgroundColor:g},h);var v=o.width,w=o.height,y=o.layout,b=o.images,E=o.placeholder,k=o.backgroundColor,M=function(e,t,a){var i={},r="gatsby-image-wrapper";return N()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(N()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(v,w,y),S=M.style,R=M.className,x=l(M,V),I={fallback:void 0,sources:[]};return b.fallback&&(I.fallback=s({},b.fallback,{srcSet:b.fallback.srcSet?U(b.fallback.srcSet):void 0})),b.sources&&(I.sources=b.sources.map(function(e){return s({},e,{srcSet:U(e.srcSet)});})),/*#__PURE__*/compat_js_default().createElement(X,s({},x,{as:a,style:s({},S,n,{backgroundColor:g}),className:R+(i?" "+i:"")}),/*#__PURE__*/compat_js_default().createElement(F,{layout:y,width:v,height:w},/*#__PURE__*/compat_js_default().createElement(C,s({},function(e,t,a,i,r,n,o,l){var d={};n&&(d.backgroundColor=n,"fixed"===a?(d.width=i,d.height=r,d.backgroundColor=n,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),o&&(d.objectFit=o),l&&(d.objectPosition=l);var u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:1,transition:"opacity 500ms linear"},d)});return N()||(u.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),u;}(E,0,y,v,w,k,p,m))),/*#__PURE__*/compat_js_default().createElement(q,s({"data-gatsby-image-ssr":"",className:c},f,function(e,t,a,i,r,n,o,l){return void 0===l&&(l={}),N()||(l=s({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},l)),s({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:s({},l,{opacity:0}),onLoad:function(e){var t=e.currentTarget,a=new Image();a.src=t.currentSrc,a.decode?a.decode().catch(function(){}).then(function(){r(!0);}):r(!0);},ref:void 0});}("eager"===u,0,I,u,void 0,0,0,h)))));},Z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],J=function(t){return function(a){var i=a.src,r=a.__imageData,n=a.__error,o=l(a,Z);return n&&console.warn(n),r?/*#__PURE__*/compat_js_default().createElement(t,s({image:r},o)):(console.warn("Image not loaded",i),n||"development"!=="production"||0,null);};}(Y),K=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types_default().number.apply((prop_types_default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},Q=new Set(["fixed","fullWidth","constrained"]),$={src:(prop_types_default()).string.isRequired,alt:function(e,t,a){return e.alt||""===e.alt?prop_types_default().string.apply((prop_types_default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:K,height:K,sizes:(prop_types_default()).string,layout:function(e){if(void 0!==e.layout&&!Q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};J.displayName="StaticImage",J.propTypes=$;
;// CONCATENATED MODULE: ./src/components/Image.jsx
const Image_Image=({className,title,filename,withFallback=false})=>{const imageData=R(filename);const data=(0,gatsby_browser_entry.useStaticQuery)("2661285376");if(!imageData){return withFallback?/*#__PURE__*/compat_js_default().createElement("img",{src:data.fallbackImage.publicURL,alt:"Fallback",className:className}):null;}return/*#__PURE__*/compat_js_default().createElement(Y,{className:className,image:imageData,alt:title});};/* harmony default export */ const components_Image = (Image_Image);

/***/ }),

/***/ 5505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8821);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4593);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7533);
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */const Seo=({description,lang,meta,title})=>{var _site$siteMetadata,_site$siteMetadata2,_site$siteMetadata2$s;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_2__.useStaticQuery)("2841359383");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,{htmlAttributes:{lang},title:title,titleTemplate:defaultTitle?`%s | ${defaultTitle}`:null,meta:[{name:`description`,content:metaDescription},{property:`og:title`,content:title},{property:`og:description`,content:metaDescription},{property:`og:type`,content:`website`},{name:`twitter:card`,content:`summary`},{name:`twitter:creator`,content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:(_site$siteMetadata2$s=_site$siteMetadata2.social)===null||_site$siteMetadata2$s===void 0?void 0:_site$siteMetadata2$s.twitter)||``},{name:`twitter:title`,content:title},{name:`twitter:description`,content:metaDescription}].concat(meta)});};Seo.defaultProps={lang:`en`,meta:[],description:``};Seo.propTypes={description:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),lang:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),meta:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 2152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ templates_BlogPost)
});

// EXTERNAL MODULE: external "/Users/andreaseracleous/Documents/Work Environment/Personal/Themes/gatsby-blog-theme-01/node_modules/preact/compat/dist/compat.js"
var compat_js_ = __webpack_require__(8821);
var compat_js_default = /*#__PURE__*/__webpack_require__.n(compat_js_);
// EXTERNAL MODULE: ./src/components/Seo.jsx
var Seo = __webpack_require__(5505);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-mdx/index.js
var gatsby_plugin_mdx = __webpack_require__(1905);
// EXTERNAL MODULE: ./src/components/Image.jsx + 1 modules
var Image = __webpack_require__(162);
;// CONCATENATED MODULE: ./src/components/PostLayout.jsx
const PostLayout=({featuredImage,title,content,date,datetime,previous,next})=>{let previousLink;let nextLink;if(previous&&previous!==null&&previous!==void 0&&previous.slug){previousLink=/*#__PURE__*/compat_js_default().createElement(gatsby_browser_entry.Link,{className:"pagination-prev",to:`/${previous.slug}`},previous.frontmatter.title);}if(next&&next!==null&&next!==void 0&&next.slug){nextLink=/*#__PURE__*/compat_js_default().createElement(gatsby_browser_entry.Link,{className:"pagination-next",to:`/${next.slug}`},next.frontmatter.title);}return/*#__PURE__*/compat_js_default().createElement((compat_js_default()).Fragment,null,/*#__PURE__*/compat_js_default().createElement("article",{className:"text-base"},/*#__PURE__*/compat_js_default().createElement(Image/* default */.Z,{className:"max-w-md rounded-lg ml-10 mb-10 float-right",filename:featuredImage,title:title}),/*#__PURE__*/compat_js_default().createElement("header",{className:"mb-5"},/*#__PURE__*/compat_js_default().createElement("time",{className:"block text-gray mb-2",dateTime:datetime},date),/*#__PURE__*/compat_js_default().createElement("h1",{className:"text-5xl font-semibold capitalize"},title)),/*#__PURE__*/compat_js_default().createElement(gatsby_plugin_mdx.MDXRenderer,null,content)),/*#__PURE__*/compat_js_default().createElement("hr",{className:"my-5"}),/*#__PURE__*/compat_js_default().createElement("div",{className:"flex justify-between"},previousLink,nextLink));};/* harmony default export */ const components_PostLayout = (PostLayout);
;// CONCATENATED MODULE: ./src/templates/BlogPost.jsx
const BlogPost=({data,pageContext})=>{const{id,body,frontmatter:{featuredImage,title,date,datetime}}=data.mdx;return/*#__PURE__*/compat_js_default().createElement((compat_js_default()).Fragment,null,/*#__PURE__*/compat_js_default().createElement(Seo/* default */.Z,{title:title}),/*#__PURE__*/compat_js_default().createElement("hr",{className:"border-gray-light mb-8"}),/*#__PURE__*/compat_js_default().createElement(components_PostLayout,{featuredImage:featuredImage,title:title,content:body,date:date,datetime:datetime,previous:data.previous,next:data.next,key:id}));};/* harmony default export */ const templates_BlogPost = (BlogPost);const query="4164733186";

/***/ })

};
;
//# sourceMappingURL=component---src-templates-blog-post-jsx.js.map
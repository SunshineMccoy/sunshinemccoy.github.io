(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{239:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return f}));var r=a(0),i=a.n(r),n=a(52),o=a(242),s=a(233),l=a(234),d=a(54);var c=a(66).a.section.withConfig({displayName:"pages__Section",componentId:"sc-1nbib7n-0"})(["border-bottom:2px dashed black;max-width:",";margin-left:auto;margin-right:auto;margin-bottom:5vh"],Object(d.a)(24)),u=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:"Homepage"}),i.a.createElement(o.a,null),i.a.createElement(c,null,i.a.createElement("h3",null,"Latest Project"),i.a.createElement("h3",null,i.a.createElement(n.Link,{to:"/calculator",style:{boxShadow:"none"}},"React Calculator")),i.a.createElement("p",null,"This is a calculator project done in React for the freeCodeCamp curriculum. I built it from scratch and recently updated it to fit in with this site.")),i.a.createElement(c,null,i.a.createElement("h3",null,"Recent Blog Posts"),a.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return i.a.createElement("article",{key:t.fields.slug},i.a.createElement("header",null,i.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},i.a.createElement(n.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),i.a.createElement("small",null,t.frontmatter.date)),i.a.createElement("section",null,i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))}))))},r}(i.a.Component);t.default=u;var f="2785444898"},241:function(e,t,a){"use strict";a(243)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},242:function(e,t,a){"use strict";a(241);var r=a(244),i=a(0),n=a.n(i),o=a(245),s=a.n(o),l=a(54),d=a(66),c=d.a.section.withConfig({displayName:"bio__Section",componentId:"dqgn4i-0"})(["border-bottom:2px dashed black;margin-top:5vh"]),u=d.a.div.withConfig({displayName:"bio__Container",componentId:"dqgn4i-1"})(["display:flex;flex-direction:column;align-items:center;@media (min-width:768px){flex-direction:row}"]);t.a=function(){var e=r.data,t=e.site.siteMetadata.author;return n.a.createElement(u,null,n.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{top:"100",marginLeft:"0",marginRight:"5%",marginBottom:0,minWidth:400,borderRadius:"2%",maxWidth:"500px",width:"400px",height:"400px"},imgStyle:{borderRadius:"2%"}}),n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5),flexDirection:"column",justifyContent:"center",alignItems:"center"}},n.a.createElement(c,null,n.a.createElement("h2",null,"Hello World!"),n.a.createElement("h3",null,"Michael McCoy, Full-Stack Web Developer"),n.a.createElement("p",null,"My name is Michael McCoy and I am an aspiring full-stack web developer living in Norfolk, Virginia. I have been learning the MERN stack using the freeCodeCamp curriculum. This website is going to serve as a coding portfolio and homebase to document my coding journey! ")),n.a.createElement(c,null,n.a.createElement("h3",null,"Contact"),n.a.createElement("p",null,"Please send any emails to mccoymichaeljohn@gmail.com and I'll get back to you ASAP! You can also find me at ",n.a.createElement("a",{href:"https://www.linkedin.com/in/mccoymichaelj/"},"LinkedIn"),", ",n.a.createElement("a",{href:"https://twitter.com/mjmcoder"},"twitter"),", and ",n.a.createElement("a",{href:"https://github.com/SunshineMccoy"},"github"),". "))))}},243:function(e,t,a){var r=a(1),i=a(9),n=a(45),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},244:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBQIE/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAB7omEelnkU6BOsCp//8QAGhABAAMBAQEAAAAAAAAAAAAAAgABAxESIf/aAAgBAQABBQLXxRNkm4/u2vKHZbUCt4YZF5f/xAAYEQACAwAAAAAAAAAAAAAAAAAAARARIf/aAAgBAwEBPwFYVP8A/8QAFREBAQAAAAAAAAAAAAAAAAAAEAL/2gAIAQIBAT8BKP/EAB0QAAICAgMBAAAAAAAAAAAAAAABAhEhMRASQVH/2gAIAQEABj8CqWEJdq4hi0Sv3RXw2Ny2KTuz/8QAGxABAQEBAAMBAAAAAAAAAAAAAREAITFBUWH/2gAIAQEAAT8haEp8yEh+mRdTLB7iSarmeNQFfGZO92OhLugJfe//2gAMAwEAAgADAAAAELvXwf/EABcRAQEBAQAAAAAAAAAAAAAAAAARATH/2gAIAQMBAT8Q6TFIuv/EABgRAAMBAQAAAAAAAAAAAAAAAAARMQEQ/9oACAECAQE/EE8vIEf/xAAeEAEAAgICAwEAAAAAAAAAAAABABEhMVGhQXGRsf/aAAgBAQABPxAzmKUzzgjR0oQCvJvmJsvcNnqaFhxHEK0req7gIJAfJBhocViI4Zx3j8jgJbPtU//Z","width":400,"height":400,"src":"/static/7133e9ba201166fc074048298c5e6202/b9fa4/kahiau_photo_cropped.jpg","srcSet":"/static/7133e9ba201166fc074048298c5e6202/b9fa4/kahiau_photo_cropped.jpg 1x,\\n/static/7133e9ba201166fc074048298c5e6202/1eaf9/kahiau_photo_cropped.jpg 1.5x"}}},"site":{"siteMetadata":{"author":"Michael McCoy","social":{"twitter":"mjmcoder"}}}}}')},245:function(e,t,a){"use strict";a(11),a(10),a(4),a(87),a(162),a(241);var r=a(23);t.__esModule=!0,t.default=void 0;var i,n=r(a(86)),o=r(a(85)),s=r(a(160)),l=r(a(161)),d=r(a(0)),c=r(a(46)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),g=function(e){var t=u(e),a=f(t);return A[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,E=new WeakMap;function b(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+d+o+s+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(B,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},B=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));B.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||m&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,g=e.fluid,p=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,I=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:C?1:0,transition:L?"opacity "+h+"ms":"none"},s),N="boolean"==typeof m?"lightgray":m,Q={transitionDelay:h+"ms"},O=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&Q,{},s,{},f),k={title:t,alt:this.state.isVisible?"":a,style:O,className:A};if(g){var M=g,V=M[0];return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),N&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&Q)}),V.base64&&d.default.createElement(R,{src:V.base64,spreadProps:k,imageVariants:M,generateSources:v}),V.tracedSVG&&d.default.createElement(R,{src:V.tracedSVG,spreadProps:k,imageVariants:M,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,b(M),d.default.createElement(B,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:a,title:t,loading:w},V,{imageVariants:M}))}}))}if(p){var T=p,z=T[0],P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete P.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},N&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:N,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},L&&Q)}),z.base64&&d.default.createElement(R,{src:z.base64,spreadProps:k,imageVariants:T,generateSources:v}),z.tracedSVG&&d.default.createElement(R,{src:z.tracedSVG,spreadProps:k,imageVariants:T,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,b(T),d.default.createElement(B,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:a,title:t,loading:w},z,{imageVariants:T}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});C.propTypes={resolutions:L,sizes:x,fixed:c.default.oneOfType([L,c.default.arrayOf(L)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=C;t.default=N}}]);
//# sourceMappingURL=component---src-pages-index-js-193e2f1cebd21d58d3db.js.map
(this["webpackJsonpimage-finder"]=this["webpackJsonpimage-finder"]||[]).push([[0],[,,,,,,,,,function(e,t,r){e.exports={overlay:"Modal_overlay__DwiXk",modal:"Modal_modal__3lNh4","close-icon":"Modal_close-icon__1vcN5"}},function(e,t,r){e.exports={searchbar:"Searchbar_searchbar__I2ciB","search-form":"Searchbar_search-form__3IJRr","search-form-button-label":"Searchbar_search-form-button-label__2oS73","search-form-input":"Searchbar_search-form-input__gstRG"}},,,function(e,t,r){e.exports={"gallery-item":"ImageGalleryItem_gallery-item__FmNi6","gallery-item-image":"ImageGalleryItem_gallery-item-image__2BxWU"}},function(e,t,r){e.exports={"spinner-wrapper":"ImageGalleryPendingView_spinner-wrapper__ZCjJN","icon-spin":"ImageGalleryPendingView_icon-spin__ZMIbL"}},,function(e,t,r){e.exports={"icon-button":"IconButton_icon-button__2JGnE"}},function(e,t,r){e.exports={gallery:"ImageGalleryDataView_gallery__2kNr6"}},function(e,t,r){e.exports={"load-more-button":"LoadMoreButton_load-more-button__3mJng"}},,,,,,,function(e,t,r){},,,function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(6),o=r.n(a),l=(r(25),r(2)),c=r(3),i=r(5),s=r(4),u=r(8),h=r(9),p=r.n(h),d=r(12),m=r(7),f=r(20),b=r(15),j=r.n(b),g=r(16),y=r.n(g),v=r(1),O=["children","onClick","type","extraClassName"],x=function(e){var t=e.children,r=e.onClick,n=e.type,a=e.extraClassName,o=Object(f.a)(e,O);return Object(v.jsx)("button",Object(d.a)(Object(d.a)({type:n,className:j.a.bind(y.a)("icon-button",Object(m.a)({},a,a)),onClick:r},o),{},{children:t}))};x.defaultProps={onClick:function(){return null},children:null,type:"button",extraClassName:null};var w,_=x,k=["title","titleId"];function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C.apply(this,arguments)}function I(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function S(e,t){var r=e.title,a=e.titleId,o=I(e,k);return n.createElement("svg",C({viewBox:"0 0 512 512",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},o),r?n.createElement("title",{id:a},r):null,w||(w=n.createElement("path",{className:"st0",d:"M284.3,245.1l110.9-110.9c7.8-7.8,7.8-20.5,0-28.3s-20.5-7.8-28.3,0L256,216.8L145.1,105.9  c-7.8-7.8-20.5-7.8-28.3,0s-7.8,20.5,0,28.3l110.9,110.9L116.9,355.9c-7.8,7.8-7.8,20.5,0,28.3c3.9,3.9,9,5.9,14.1,5.9  c5.1,0,10.2-2,14.1-5.9L256,273.3l110.9,110.9c3.9,3.9,9,5.9,14.1,5.9s10.2-2,14.1-5.9c7.8-7.8,7.8-20.5,0-28.3L284.3,245.1z"})))}var M,L,N,P,E,B=n.forwardRef(S),q=(r.p,document.getElementById("modalRoot")),A=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(c.a)(r,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.onClose,r=e.modalPhoto,n=r.largeImg,o=r.alt;return Object(a.createPortal)(Object(v.jsx)("div",{className:p.a.overlay,onClick:this.handleBackdropClick,children:Object(v.jsxs)("div",{className:p.a.modal,children:[Object(v.jsx)(_,{onClick:t,"aria-label":"Close",type:"button",extraClassName:p.a["close-icon"],children:Object(v.jsx)(B,{width:"40",height:"40",fill:"#fff"})}),Object(v.jsx)("img",{src:n,alt:o})]})}),q)}}]),r}(n.Component),R=A,D=(r(27),r(10)),F=r.n(D),Q=["title","titleId"];function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},G.apply(this,arguments)}function U(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function z(e,t){var r=e.title,a=e.titleId,o=U(e,Q);return n.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",ref:t,"aria-labelledby":a},o),r?n.createElement("title",{id:a},r):null,M||(M=n.createElement("path",{fill:"#616161",d:"M34.6 28.1H38.6V45.1H34.6z",transform:"rotate(-45.001 36.586 36.587)"})),L||(L=n.createElement("path",{fill:"#616161",d:"M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"})),N||(N=n.createElement("path",{fill:"#37474F",d:"M36.2 32.1H40.2V44.400000000000006H36.2z",transform:"rotate(-45.001 38.24 38.24)"})),P||(P=n.createElement("path",{fill:"#64B5F6",d:"M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"})),E||(E=n.createElement("path",{fill:"#BBDEFB",d:"M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"})))}var J=n.forwardRef(z),V=(r.p,function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={searchQuery:""},e.handleQueryChange=function(t){var r=t.currentTarget.value;e.setState({searchQuery:r.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.searchQuery.trim())return u.b.error("Enter some valid search query please.");e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})},e}return Object(c.a)(r,[{key:"render",value:function(){return Object(v.jsx)("header",{className:F.a.searchbar,children:Object(v.jsxs)("form",{className:F.a["search-form"],onSubmit:this.handleSubmit,children:[Object(v.jsx)(_,{type:"submit","aria-label":"Search",children:Object(v.jsx)(J,{width:"24px",height:"24px"})}),Object(v.jsx)("input",{className:F.a["search-form-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleQueryChange})]})})}}]),r}(n.Component)),H=V,Z=r(17),K=r.n(Z),T=r(13),W=r.n(T),X=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var e=this.props,t=e.smallImg,r=e.largeImg,n=e.onPhotoClick,a=e.alt;return Object(v.jsx)("li",{className:W.a["gallery-item"],children:Object(v.jsx)("img",{className:W.a["gallery-item-image"],src:t,alt:a,onClick:function(){return n({largeImg:r,alt:a})}})})}}]),r}(n.Component),Y=X,$=r(18),ee=r.n($),te=function(e){var t=e.onLoadMore;return Object(v.jsx)("button",{className:ee.a["load-more-button"],type:"button",onClick:t,children:"Load more"})},re=function(e){var t=e.photos,r=e.onPhotoClick,n=e.onLoadMore;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("ul",{className:K.a.gallery,children:t.map((function(e){var t=e.webformatURL,n=e.largeImageURL,a=e.id,o=e.tags;return Object(v.jsx)(Y,{smallImg:t,largeImg:n,onPhotoClick:r,alt:o},a)}))}),t.length&&Object(v.jsx)(te,{onLoadMore:n})]})},ne=r(19),ae=r(14),oe=r.n(ae),le=r.p+"static/media/pending-image.ef91a4ee.gif",ce=document.getElementById("spinnerRoot"),ie=function(e){var t=e.query,r=e.viewsNumber,n=Array.from(Array(r)).map((function(e,r){return{id:r,tags:t,webformatURL:le,largeImageURL:""}}));return Object(v.jsxs)("div",{role:"alert",children:[Object(a.createPortal)(Object(v.jsxs)("div",{className:oe.a["spinner-wrapper"],children:[Object(v.jsx)(ne.a,{size:"48",className:oe.a["icon-spin"]}),Object(v.jsx)("p",{children:"Loading..."})]}),ce),Object(v.jsx)(re,{photos:n,onPhotoClick:function(){}})]})},se=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={photos:null,error:null,status:"idle"},e}return Object(c.a)(r,[{key:"componentDidUpdate",value:function(e,t){var r,n,a=this,o=e.query,l=e.page,c=this.props,i=c.query,s=c.page,u=o===i;u&&l===s||(this.setState({status:"pending"}),(r=i,n=s,fetch("https://pixabay.com/api/?q=".concat(r,"&page=").concat(n,"&key=24568502-5ca9f026ce5836891cf338e0e&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("There are no ".concat(r," images")))}))).then((function(e){var t=e.hits;a.setState((function(e){return{photos:e.photos&&u?e.photos.concat(t):t,status:"resolved"}}))})).catch((function(e){return a.setState({error:e,status:"rejected"})})))}},{key:"render",value:function(){var e=this.props,t=e.onPhotoClick,r=e.query,n=e.onLoadMore,a=this.state,o=a.photos,l=a.error,c=a.status;return"idle"===c?Object(v.jsx)("h1",{children:"Enter some search query."}):"pending"===c?Object(v.jsx)(ie,{query:r,viewsNumber:(null===o||void 0===o?void 0:o.length)||12}):("rejected"===c&&l.message,"resolved"===c?Object(v.jsx)(re,{photos:o,onPhotoClick:t,onLoadMore:n}):void 0)}}]),r}(n.Component),ue=se,he=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showModal:!1,modalPhoto:null,query:"",page:null},e.handleFormSubmit=function(t){e.setState((function(r){return{query:t,page:null===r.page||r.query!==t?1:e.state.page}}))},e.toggleModal=function(t){t&&e.setState({modalPhoto:t}),e.setState((function(e){return{showModal:!e.showModal}}))},e.handleLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(c.a)(r,[{key:"render",value:function(){var e=this.state,t=e.showModal,r=e.modalPhoto,n=e.query,a=e.page;return Object(v.jsxs)("div",{children:[Object(v.jsx)(H,{onSubmit:this.handleFormSubmit}),t&&Object(v.jsx)(R,{onClose:this.toggleModal,modalPhoto:r}),Object(v.jsx)(ue,{onPhotoClick:this.toggleModal,query:n,page:a,onLoadMore:this.handleLoadMore}),Object(v.jsx)(u.a,{})]})}}]),r}(n.Component),pe=he;o.a.render(Object(v.jsx)(pe,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.ce1eb130.chunk.js.map
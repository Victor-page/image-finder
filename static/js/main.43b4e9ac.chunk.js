(this["webpackJsonpimage-finder"]=this["webpackJsonpimage-finder"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={overlay:"Modal_overlay__DwiXk",modal:"Modal_modal__3lNh4","close-icon":"Modal_close-icon__1vcN5"}},function(e,t,n){e.exports={searchbar:"Searchbar_searchbar__I2ciB","search-form":"Searchbar_search-form__3IJRr","search-form-button-label":"Searchbar_search-form-button-label__2oS73","search-form-input":"Searchbar_search-form-input__gstRG"}},,,function(e,t,n){e.exports={"gallery-item":"ImageGalleryItem_gallery-item__FmNi6","gallery-item-image":"ImageGalleryItem_gallery-item-image__2BxWU"}},function(e,t,n){e.exports={"spinner-wrapper":"ImageGalleryPendingView_spinner-wrapper__ZCjJN","icon-spin":"ImageGalleryPendingView_icon-spin__ZMIbL"}},,function(e,t,n){e.exports={"icon-button":"IconButton_icon-button__2JGnE"}},function(e,t,n){e.exports={gallery:"ImageGalleryDataView_gallery__2kNr6"}},function(e,t,n){e.exports={"load-more-button":"LoadMoreButton_load-more-button__3mJng"}},function(e,t,n){e.exports={title:"ImageGallery_title__1-Y8o"}},function(e,t,n){e.exports={app:"App_app__3hcwn"}},,,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),l=(n(24),n(2)),i=n(5),s=n(6),u=n.n(s),m=n(9),b=n(4),f=n(19),j=n(12),p=n.n(j),d=n(13),h=n.n(d),g=n(1),O=["children","onClick","type","extraClassName"],y=function(e){var t=e.children,n=e.onClick,r=e.type,a=e.extraClassName,o=Object(f.a)(e,O);return Object(g.jsx)("button",Object(m.a)(Object(m.a)({type:r,className:p.a.bind(h.a)("icon-button",Object(b.a)({},a,a)),onClick:n},o),{},{children:t}))};y.defaultProps={onClick:function(){return null},children:null,type:"button",extraClassName:null};var x,v=y,_=["title","titleId"];function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function I(e,t){var n=e.title,a=e.titleId,o=C(e,_);return r.createElement("svg",w({viewBox:"0 0 512 512",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},o),n?r.createElement("title",{id:a},n):null,x||(x=r.createElement("path",{className:"st0",d:"M284.3,245.1l110.9-110.9c7.8-7.8,7.8-20.5,0-28.3s-20.5-7.8-28.3,0L256,216.8L145.1,105.9  c-7.8-7.8-20.5-7.8-28.3,0s-7.8,20.5,0,28.3l110.9,110.9L116.9,355.9c-7.8,7.8-7.8,20.5,0,28.3c3.9,3.9,9,5.9,14.1,5.9  c5.1,0,10.2-2,14.1-5.9L256,273.3l110.9,110.9c3.9,3.9,9,5.9,14.1,5.9s10.2-2,14.1-5.9c7.8-7.8,7.8-20.5,0-28.3L284.3,245.1z"})))}var k,E,N,S,L,P=r.forwardRef(I),M=(n.p,document.getElementById("modalRoot")),B=function(e){var t=e.onClose,n=e.modalPhoto,a=n.largeImg,c=n.alt,l=Object(r.useCallback)((function(e){"Escape"===e.code&&t()}),[t]);Object(r.useEffect)((function(){return window.addEventListener("keydown",l),function(){window.removeEventListener("keydown",l)}}),[l]);return Object(o.createPortal)(Object(g.jsx)("div",{className:u.a.overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(g.jsxs)("div",{className:u.a.modal,children:[Object(g.jsx)(v,{onClick:t,"aria-label":"Close",type:"button",extraClassName:u.a["close-icon"],children:Object(g.jsx)(P,{width:"40",height:"40",fill:"#fff"})}),Object(g.jsx)("img",{src:a,alt:c})]})}),M)},R=(n(26),n(7)),G=n.n(R),q=["title","titleId"];function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function F(e,t){var n=e.title,a=e.titleId,o=z(e,q);return r.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",ref:t,"aria-labelledby":a},o),n?r.createElement("title",{id:a},n):null,k||(k=r.createElement("path",{fill:"#616161",d:"M34.6 28.1H38.6V45.1H34.6z",transform:"rotate(-45.001 36.586 36.587)"})),E||(E=r.createElement("path",{fill:"#616161",d:"M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"})),N||(N=r.createElement("path",{fill:"#37474F",d:"M36.2 32.1H40.2V44.400000000000006H36.2z",transform:"rotate(-45.001 38.24 38.24)"})),S||(S=r.createElement("path",{fill:"#64B5F6",d:"M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"})),L||(L=r.createElement("path",{fill:"#BBDEFB",d:"M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"})))}var J=r.forwardRef(F),U=(n.p,function(e){var t=e.onSubmit,n=Object(r.useState)(""),a=Object(l.a)(n,2),o=a[0],c=a[1];return Object(g.jsx)("header",{className:G.a.searchbar,children:Object(g.jsxs)("form",{className:G.a["search-form"],onSubmit:function(e){if(e.preventDefault(),""===o.trim())return i.b.error("Enter some valid search query please.");t(o),c("")},children:[Object(g.jsx)(v,{type:"submit","aria-label":"Search",children:Object(g.jsx)(J,{width:"24px",height:"24px"})}),Object(g.jsx)("input",{className:G.a["search-form-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){var t=e.currentTarget.value;c(t.toLowerCase())}})]})})}),V=n(14),D=n.n(V),H=n(10),Z=n.n(H),T=function(e){var t=e.smallImg,n=e.largeImg,r=e.onPhotoClick,a=e.alt;return Object(g.jsx)("li",{className:Z.a["gallery-item"],children:Object(g.jsx)("img",{className:Z.a["gallery-item-image"],src:t,alt:a,onClick:function(){return r({largeImg:n,alt:a})}})})},X=n(15),W=n.n(X),Y=function(e){var t=e.onLoadMore;return Object(g.jsx)("button",{className:W.a["load-more-button"],type:"button",onClick:t,children:"Load more"})},K=function(e){var t=e.photos,n=e.onPhotoClick,r=e.onLoadMore;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("ul",{className:D.a.gallery,children:t.map((function(e){var t=e.webformatURL,r=e.largeImageURL,a=e.id,o=e.tags;return Object(g.jsx)(T,{smallImg:t,largeImg:r,onPhotoClick:n,alt:o},a)}))}),t.length&&Object(g.jsx)(Y,{onLoadMore:r})]})},Q=n(18),$=n(11),ee=n.n($),te=n.p+"static/media/pending-image.ef91a4ee.gif",ne=document.getElementById("spinnerRoot"),re=function(e){var t=e.query,n=e.viewsNumber,r=Array.from(Array(n)).map((function(e,n){return{id:n,tags:t,webformatURL:te,largeImageURL:""}}));return Object(g.jsxs)("div",{role:"alert",children:[Object(o.createPortal)(Object(g.jsxs)("div",{className:ee.a["spinner-wrapper"],children:[Object(g.jsx)(Q.a,{size:"48",className:ee.a["icon-spin"]}),Object(g.jsx)("p",{children:"Loading..."})]}),ne),Object(g.jsx)(K,{photos:r,onPhotoClick:function(){}})]})},ae=n(16),oe=n.n(ae),ce="idle",le="pending",ie="resolved",se="rejected",ue=function(e){var t=e.query,n=e.page,a=e.onPhotoClick,o=e.onLoadMore,c=Object(r.useState)(null),i=Object(l.a)(c,2),s=i[0],u=i[1],m=Object(r.useState)(null),b=Object(l.a)(m,2),f=b[0],j=b[1],p=Object(r.useState)(ce),d=Object(l.a)(p,2),h=d[0],O=d[1],y=Object(r.useRef)(!0);return Object(r.useEffect)((function(){y.current?y.current=!1:(O(le),function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=24568502-5ca9f026ce5836891cf338e0e&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("There are no ".concat(e," images")))}))}(t,n).then((function(e){var t=e.hits;u((function(e){return e&&n>1?e.concat(t):t})),O(ie)})).catch((function(e){j(e),O(se)})))}),[t,n]),h===ce?Object(g.jsx)("h1",{className:oe.a.title,children:"Enter some search query."}):h===le?Object(g.jsx)(re,{query:t,viewsNumber:(null===s||void 0===s?void 0:s.length)||12}):(h===se&&f.message,h===ie?Object(g.jsx)(K,{photos:s,onPhotoClick:a,onLoadMore:o}):void 0)},me=n(17),be=n.n(me),fe=function(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){t.current=e}),[e]),t.current},je=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(null),c=Object(l.a)(o,2),s=c[0],u=c[1],m=Object(r.useState)(""),b=Object(l.a)(m,2),f=b[0],j=b[1],p=Object(r.useState)(null),d=Object(l.a)(p,2),h=d[0],O=d[1],y=fe(f),x=function(e){e&&u(e),a((function(e){return!e}))};return Object(g.jsxs)("div",{className:be.a.app,children:[Object(g.jsx)(U,{onSubmit:function(e){j(e),O((function(t){return null===t||y!==e?1:h}))}}),n&&Object(g.jsx)(B,{onClose:x,modalPhoto:s}),Object(g.jsx)(ue,{onPhotoClick:x,query:f,page:h,onLoadMore:function(){O((function(e){return e+1}))}}),Object(g.jsx)(i.a,{})]})};c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(je,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.43b4e9ac.chunk.js.map
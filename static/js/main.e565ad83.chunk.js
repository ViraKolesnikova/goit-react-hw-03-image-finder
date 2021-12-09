(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3m6ho",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3k9EH"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3ElvA",Modal:"Modal_Modal__1a87T"}},13:function(e,t,a){e.exports={Container:"LoaderContainer_Container__3IkPm",Loader:"LoaderContainer_Loader__10EMt"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1WigC"}},16:function(e,t,a){e.exports={Button:"Button_Button__ukqOU"}},23:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),s=(a(23),a(14)),l=a(4),i=a(5),u=a(7),m=a(6),h=a(9),d=(a(24),a(18)),p=a(8),g=a.n(p),j=a(1),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.getInputValue=function(t){e.setState({inputValue:t.target.value})},e.searchImages=function(t){t.preventDefault();var a=e.state.inputValue;a.trim()?(e.props.onSubmit(a),e.resetInput()):h.b.warn("Enter word into search line!")},e.resetInput=function(){e.setState({inputValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:g.a.Header,children:Object(j.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.searchImages,children:[Object(j.jsxs)("button",{type:"submit",className:g.a.SearchFormBtn,children:[Object(j.jsx)(d.a,{size:"2em",color:"darkgrey"}),Object(j.jsx)("span",{className:g.a.SearchFormBtnLabel,children:"Search"})]}),Object(j.jsx)("input",{className:g.a.SearchFormInput,type:"text",value:this.state.inputValue,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.getInputValue})]})})}}]),a}(n.Component),f=a(11),O=a.n(f);function v(e){var t=e.item,a=e.onImageClick;return Object(j.jsx)("li",{className:O.a.ImageGalleryItem,onClick:a,children:Object(j.jsx)("img",{className:O.a.ImageGalleryItemImage,src:t.webformatURL,alt:t.tags})})}var y=a(15),I=a.n(y);function _(e){var t=e.data,a=e.onOpenModal;return Object(j.jsx)("ul",{className:I.a.ImageGallery,children:t.map((function(e){return Object(j.jsx)(v,{item:e,onImageClick:a},e.id)}))})}var S=a(12),x=a.n(S),w=document.querySelector("#modal-root"),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onKeyDownClose=function(t){"Escape"===t.code&&e.props.onClose()},e.onOverlayClose=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDownClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDownClose)}},{key:"render",value:function(){return Object(o.createPortal)(Object(j.jsx)("div",{className:x.a.Overlay,onClick:this.onOverlayClose,children:Object(j.jsx)("div",{className:x.a.Modal,children:Object(j.jsx)("img",{src:this.props.image,alt:this.props.name})})}),w)}}]),a}(n.Component),k=a(16),M=a.n(k);function F(e){var t=e.onLoadMoreBtn;return Object(j.jsx)("button",{className:M.a.Button,type:"button",onClick:t,children:"Load more"})}a(26);var L=a(17),V=a.n(L),B=a(13),N=a.n(B);function G(){return Object(j.jsx)("div",{className:N.a.Container,children:Object(j.jsx)(V.a,{className:N.a.Loader,type:"Circles",color:"rgb(91, 202, 124)",height:100,width:100})})}var E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:null,page:1,searchValue:"",loading:!1,total:0,showModal:!1,modalImage:null},e.updateState=function(t){e.state.searchValue!==t&&e.setState({page:1,searchValue:t})},e.makeFetch=function(t){var a=e.state,n=a.page,r=a.searchValue;e.setState({loading:!0}),fetch("https://pixabay.com/api/?key=23945532-d85dbc41bbe7fd0346797d44d&q=".concat(r,"&image_type=photo&page=").concat(n,"&per_page=12")).then((function(e){return e.json()})).then((function(a){0!==a.hits.length?t===r?e.setState((function(e){var t=e.images;return{images:[].concat(Object(s.a)(t),Object(s.a)(a.hits))}})):e.setState({images:a.hits,total:a.total}):h.b.error("Error! Nothing was found.")})).catch(console.error()).finally((function(){return e.setState({loading:!1})}))},e.loadMore=function(t){e.setState((function(e){return{page:e.page+1}}))},e.openModal=function(t){var a=e.state.images;t.preventDefault(),e.setState({showModal:!0});var n=a.find((function(e){return t.target.src===e.webformatURL}));e.setState({modalImage:n})},e.hideModal=function(){e.setState({showModal:!1})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchValue!==this.state.searchValue&&this.makeFetch(t.searchValue),t.page<this.state.page&&this.makeFetch(t.searchValue)}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=e.total,r=e.showModal,o=e.modalImage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{onSubmit:this.updateState}),Object(j.jsx)(h.a,{autoClose:3e3}),a&&Object(j.jsx)(G,{}),t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(_,{data:t,onOpenModal:this.openModal}),t.length<n&&Object(j.jsx)(F,{onLoadMoreBtn:this.loadMore})]}),r&&Object(j.jsx)(C,{image:o.largeImageURL,name:o.tags,onClose:this.hideModal})]})}}]),a}(n.Component),D=E;c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Header:"Searchbar_Header__hPaXd",SearchForm:"Searchbar_SearchForm__FwmV8",SearchFormBtn:"Searchbar_SearchFormBtn__2wY3x",SearchFormBtnLabel:"Searchbar_SearchFormBtnLabel__3hI8Q",SearchFormInput:"Searchbar_SearchFormInput__nTxBG"}}},[[47,1,2]]]);
//# sourceMappingURL=main.e565ad83.chunk.js.map
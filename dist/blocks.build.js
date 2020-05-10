!function(e){function t(n){if(l[n])return l[n].exports;var a=l[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var l={};t.m=e,t.c=l,t.d=function(e,l,n){t.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(l,"a",l),l},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});l(1),l(4),l(7),l(10),l(13),l(16)},function(e,t,l){"use strict";var n=l(2),a=(l.n(n),l(3)),__=(l.n(a),wp.i18n.__),r=wp.blocks.registerBlockType,o=wp.editor,c=o.RichText,m=o.InspectorControls,i=o.ColorPalette,s=o.MediaUpload,u=o.InnerBlocks,p=o.BlockControls,d=o.AlignmentToolbar,g=wp.components,w=g.PanelBody,b=g.IconButton,E=g.RangeControl,f=["core/button","core/paragraph"];r("etterem-blocks/intro",{title:__("Bevezet\u0151"),icon:"admin-page",category:"weart",keywords:[__("etterem"),__("intro"),__("weart")],supports:{align:["full"]},attributes:{align:{type:"string",default:"full"},title:{type:"string",source:"html",selector:"h2"},titleColor:{type:"string",default:"white"},subtitle:{type:"string",source:"html",selector:"h4"},subtitleColor:{type:"string",default:"secondary"},alignment:{type:"string",default:"none"},backgroundImage:{type:"string",default:"https://picsum.photos/seed/picsum/1000/600"},overlayColor:{type:"string",default:"black"},overlayOpacity:{type:"number",default:.6}},edit:function(e){function t(e){k({alignment:e})}function l(e){k({title:e})}function n(e){k({titleColor:e})}function a(e){k({subtitle:e})}function r(e){k({subtitleColor:e})}function o(e){k({backgroundImage:e.sizes.full.url})}function g(e){k({overlayColor:e})}function y(e){k({overlayOpacity:e})}var v=e.attributes,k=e.setAttributes,h=v.title,C=v.titleColor,N=v.subtitle,I=v.subtitleColor,B=v.backgroundImage,z=v.overlayColor,x=v.overlayOpacity,_=v.alignment;return[wp.element.createElement(m,{style:{marginBottom:"40px"}},wp.element.createElement(w,{title:"Betuszinek"},wp.element.createElement("p",null,wp.element.createElement("strong",null,"V\xe1lasssz sz\xednt a C\xedmnek")),wp.element.createElement(i,{value:C,onChange:n}),wp.element.createElement("p",null,wp.element.createElement("strong",null,"V\xe1lasssz sz\xednt az Alc\xedmnek")),wp.element.createElement(i,{value:I,onChange:r})),wp.element.createElement(w,{title:"H\xe1tt\xe9rk\xe9p be\xe1ll\xedt\xe1sok"},wp.element.createElement("p",null,wp.element.createElement("strong",null,"V\xe1lassz h\xe1tt\xe9rk\xe9pet:")),wp.element.createElement(s,{onSelect:o,type:"image",value:B,render:function(e){var t=e.open;return wp.element.createElement(b,{className:"editor-media-placeholder__button is-button is-default is-large",icon:"upload",onClick:t},"H\xe1tt\xe9rk\xe9p")}}),wp.element.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,"\xc1tfed\u0151 sz\xedn:")),wp.element.createElement(i,{value:z,onChange:g})),wp.element.createElement(E,{label:"\xc1tfed\xe9s m\xe9rt\xe9ke:",value:x,onChange:y,min:0,max:1,step:.01}))),wp.element.createElement("div",{className:"weart-blocks weart-intro",style:{backgroundImage:"url( "+B+" )",textAlign:_}},wp.element.createElement(p,null,wp.element.createElement(d,{value:_,onChange:t})),wp.element.createElement("div",{className:"weart-intro-overlay",style:{background:z,opacity:x}}),wp.element.createElement("div",{className:"container"},wp.element.createElement(c,{key:"editable",tagName:"h4",placeholder:"Kis C\xedm Sz\xf6vege",value:N,onChange:a,style:{color:I}}),wp.element.createElement(c,{key:"editable",tagName:"h2",placeholder:"Nagy C\xedm Sz\xf6vege",value:h,onChange:l,style:{color:C}}),wp.element.createElement(u,{allowedBlocks:f})))]},save:function(e){var t=e.attributes,l=t.title,n=t.titleColor,a=t.subtitle,r=t.subtitleColor,o=t.backgroundImage,c=t.overlayColor,m=t.overlayOpacity,i=t.alignment;return wp.element.createElement("div",{className:"weart-blocks weart-intro",style:{backgroundImage:"url( "+o+" )",textAlign:i}},wp.element.createElement("div",{className:"weart-intro-overlay",style:{background:c,opacity:m}}),wp.element.createElement("div",{className:"container"},wp.element.createElement("h4",{style:{color:r}},a),wp.element.createElement("h2",{style:{color:n}},l),wp.element.createElement(u.Content,null)))}})},function(e,t){},function(e,t){},function(e,t,l){"use strict";var n=l(5),a=(l.n(n),l(6)),__=(l.n(a),wp.i18n.__),r=wp.blocks.registerBlockType,o=wp.blockEditor,c=o.RichText,m=o.InspectorControls,i=o.ColorPalette,s=o.MediaUpload,u=o.InnerBlocks,p=wp.components,d=p.PanelBody,g=p.IconButton,w=["core/button"];r("etterem-blocks/rolunk",{title:__("R\xf3lunk"),icon:"admin-page",category:"weart",keywords:[__("etterem"),__("rolunk"),__("weart")],attributes:{sideImage:{type:"string",default:"https://placeimg.com/600/600/people"},sideImageColor:{type:"string",default:"blue"},sideImageColorHeight:{type:"number",default:"100%"},subtitle:{type:"string",source:"html",selector:"h4"},title:{type:"string",source:"html",selector:"h2"},body:{type:"string",source:"html",selector:"p"}},edit:function(e){var t=e.attributes,l=e.setAttributes,n=t.sideImage,a=t.sideImageColor,r=t.subtitle,o=t.title,p=t.body,b=function(e){l({sideImage:e.sizes.full.url})},E=function(e){l({sideImageColor:e})},f=function(e){l({subtitle:e})},y=function(e){l({title:e})},v=function(e){l({body:e})};return[wp.element.createElement(m,null,wp.element.createElement(d,{title:"Be\xe1ll\xedt\xe1sok"},wp.element.createElement("p",null,wp.element.createElement("strong",null,"K\xe9p h\xe1tt\xe9rsz\xedn:")),wp.element.createElement(i,{value:a,onChange:E}))),wp.element.createElement("div",{className:"weart-blocks weart-rolunk"},wp.element.createElement("div",{className:"text"},wp.element.createElement(c,{key:"editable",tagName:"h4",placeholder:"Alc\xedm",value:r,onChange:f}),wp.element.createElement(c,{key:"editable",tagName:"h2",placeholder:"C\xedm",value:o,onChange:y}),wp.element.createElement(c,{key:"editable",tagName:"p",placeholder:"Sz\xf6veg",value:p,onChange:v}),wp.element.createElement(u,{allowedBlocks:w})),wp.element.createElement("div",{className:"image"},wp.element.createElement("img",{src:n,alt:""}),wp.element.createElement(s,{onSelect:b,type:"image",value:n,render:function(e){var t=e.open;return wp.element.createElement(g,{className:"editor-media-placeholder__button is-button is-default is-large",icon:"upload",onClick:t},"K\xe9p felt\xf6lt\xe9se")}}),wp.element.createElement("div",{className:"rolunk-shadow",style:{background:a}})))]},save:function(e){var t=e.attributes,l=t.sideImage,n=t.sideImageColor,a=t.subtitle,r=t.title,o=t.body;return wp.element.createElement("div",{className:"weart-blocks weart-rolunk"},wp.element.createElement("div",{className:"text"},wp.element.createElement("h4",null,a),wp.element.createElement("h2",null,r),wp.element.createElement(c.Content,{tagName:"p",value:o}),wp.element.createElement(u.Content,null)),wp.element.createElement("div",{className:"image"},wp.element.createElement("img",{src:l,alt:""}),wp.element.createElement("div",{className:"rolunk-shadow",style:{background:n}})))}})},function(e,t){},function(e,t){},function(e,t,l){"use strict";var n=l(8),a=(l.n(n),l(9)),__=(l.n(a),wp.i18n.__),r=wp.blocks.registerBlockType,o=wp.blockEditor,c=o.RichText,m=o.InspectorControls,i=o.ColorPalette,s=o.MediaUpload,u=o.InnerBlocks,p=wp.components,d=p.PanelBody,g=p.IconButton,w=["core/button"];r("etterem-blocks/szolgaltatas",{title:__("Szolg\xe1ltat\xe1s"),icon:"admin-page",category:"weart",keywords:[__("etterem"),__("rolunk"),__("weart")],attributes:{image:{type:"string",default:"https://placeimg.com/600/600/people"},bg:{type:"string",default:"#f5f5f5"},edge:{type:"string",default:"#f5f5f5"},border:{type:"string",default:"navy"},title:{type:"string",source:"html",selector:"h3"},body:{type:"string",source:"html",selector:"p"}},edit:function(e){var t=e.attributes,l=e.setAttributes,n=t.image,a=t.bg,r=t.edge,o=t.border,p=t.title,b=t.body,E=function(e){l({image:e.sizes.full.url})},f=function(e){l({bg:e})},y=function(e){l({edge:e})},v=function(e){l({border:e})},k=function(e){l({title:e})},h=function(e){l({body:e})};return[wp.element.createElement(m,null,wp.element.createElement(d,{title:"Sz\xednek"},wp.element.createElement("p",null,wp.element.createElement("strong",null,"H\xe1tt\xe9r:")),wp.element.createElement(i,{value:a,onChange:f}),wp.element.createElement("p",null,wp.element.createElement("strong",null,"H\xe1tt\xe9r sz\xe9le:")),wp.element.createElement(i,{value:r,onChange:y}),wp.element.createElement("p",null,wp.element.createElement("strong",null,"Keret:")),wp.element.createElement(i,{value:o,onChange:v}))),wp.element.createElement("div",{className:"weart-blocks weart-szolgaltatas",style:{borderColor:o}},wp.element.createElement("div",{className:"inner",style:{background:a,borderColor:r}},wp.element.createElement("div",{className:"image"},wp.element.createElement("img",{src:n,alt:""}),wp.element.createElement(s,{onSelect:E,type:"image",value:n,render:function(e){var t=e.open;return wp.element.createElement(g,{className:"editor-media-placeholder__button is-button is-default is-large",icon:"upload",onClick:t},"K\xe9p felt\xf6lt\xe9se")}})),wp.element.createElement("div",{className:"text"},wp.element.createElement(c,{key:"editable",tagName:"h3",placeholder:"C\xedm",value:p,onChange:k}),wp.element.createElement(c,{key:"editable",tagName:"p",placeholder:"Sz\xf6veg",value:b,onChange:h}),wp.element.createElement(u,{allowedBlocks:w}))))]},save:function(e){var t=e.attributes;return wp.element.createElement("div",{className:"weart-blocks weart-szolgaltatas",style:{borderColor:t.border}},wp.element.createElement("div",{className:"inner",style:{background:t.bg,borderColor:t.edge}},wp.element.createElement("div",{className:"image"},wp.element.createElement("img",{src:t.image,alt:""})),wp.element.createElement("div",{className:"text"},wp.element.createElement("h3",null,t.title),wp.element.createElement(c.Content,{tagName:"p",value:t.body}),wp.element.createElement(u.Content,null))))}})},function(e,t){},function(e,t){},function(e,t,l){"use strict";var n=l(11),a=(l.n(n),l(12)),__=(l.n(a),wp.i18n.__),r=wp.blocks.registerBlockType,o=wp.blockEditor,c=o.RichText,m=o.InspectorControls,i=o.MediaUpload,s=o.InnerBlocks,u=wp.components,p=u.PanelBody,d=u.IconButton,g=u.ToggleControl,w=["core/button"];r("etterem-blocks/sef-ajanlata",{title:__("S\xe9f Aj\xe1nlata"),icon:"admin-page",category:"weart",keywords:[__("etterem"),__("sef"),__("ajanlat"),__("szezonalis"),__("weart")],attributes:{image:{type:"string",default:"https://placeimg.com/600/600/"},direction:{type:"boolean",default:!0},subtitle:{type:"string",source:"html",selector:"h4"},title:{type:"string",source:"html",selector:"h3"},body:{type:"string",source:"html",selector:"p"}},edit:function(e){var t=e.attributes,l=e.setAttributes,n=function(e){l({image:e.sizes.full.url})},a=function(e){l({subtitle:e})},r=function(e){l({title:e})},o=function(e){l({body:e})},u="column";return u=t.direction?"column":"column-reverse",[wp.element.createElement(m,null,wp.element.createElement(p,{title:"Be\xe1ll\xedt\xe1sok"},wp.element.createElement(g,{label:"Ir\xe1ny",help:t.direction?"K\xe9p fel\xfcl":"K\xe9p alul",checked:t.direction,onChange:function(e){l({direction:e})}}))),wp.element.createElement("div",{className:"weart-blocks weart-sef-ajanlata",style:{flexDirection:u}},wp.element.createElement("div",{className:"image"},wp.element.createElement("img",{src:t.image,alt:""}),wp.element.createElement(i,{onSelect:n,type:"image",value:t.image,render:function(e){var t=e.open;return wp.element.createElement(d,{className:"editor-media-placeholder__button is-button is-default is-large",icon:"upload",onClick:t},"K\xe9p felt\xf6lt\xe9se")}})),wp.element.createElement("div",{className:"text"},wp.element.createElement(c,{key:"editable",tagName:"h4",placeholder:"Alc\xedm",value:t.subtitle,onChange:a}),wp.element.createElement(c,{key:"editable",tagName:"h3",placeholder:"C\xedm",value:t.title,onChange:r}),wp.element.createElement(c,{key:"editable",tagName:"p",placeholder:"Sz\xf6veg",value:t.body,onChange:o}),wp.element.createElement(s,{allowedBlocks:w})))]},save:function(e){var t=e.attributes,l="column";return l=t.direction?"column":"column-reverse",wp.element.createElement("div",{className:"weart-blocks weart-sef-ajanlata",style:{flexDirection:l}},wp.element.createElement("div",{className:"image"},wp.element.createElement("img",{src:t.image,alt:""})),wp.element.createElement("div",{className:"text"},wp.element.createElement("h4",null,t.subtitle),wp.element.createElement("h3",null,t.title),wp.element.createElement(c.Content,{tagName:"p",value:t.body}),wp.element.createElement(s.Content,null)))}})},function(e,t){},function(e,t){},function(e,t,l){"use strict";var n=l(14),a=(l.n(n),l(15)),__=(l.n(a),wp.i18n.__),r=wp.blocks.registerBlockType,o=wp.editor,c=o.InspectorControls,m=o.MediaUpload,i=o.InnerBlocks,s=wp.components,u=s.PanelBody,p=s.IconButton,d=[["core/heading",{placeholder:"Alc\xedm",level:4}],["core/heading",{placeholder:"C\xedm"}],["core/columns",{}]];r("etterem-blocks/three",{title:__("Szekci\xf3"),icon:"admin-page",category:"weart",keywords:[__("etterem"),__("intro"),__("weart")],supports:{align:["full"]},attributes:{align:{type:"string",default:"full"},backgroundImage:{type:"string",default:""}},edit:function(e){var t=e.attributes,l=e.setAttributes;return[wp.element.createElement(c,{style:{marginBottom:"40px"}},wp.element.createElement(u,{title:"Be\xe1ll\xedt\xe1sok"},wp.element.createElement("p",null,wp.element.createElement("strong",null,"V\xe1lassz h\xe1tt\xe9rk\xe9pet:")),wp.element.createElement(m,{onSelect:function(e){l({backgroundImage:e.sizes.full.url})},type:"image",value:t.backgroundImage,render:function(e){var t=e.open;return wp.element.createElement(p,{className:"editor-media-placeholder__button is-button is-default is-large",icon:"upload",onClick:t},"H\xe1tt\xe9rk\xe9p")}}))),wp.element.createElement("div",{className:"weart-blocks weart-section",style:{backgroundImage:"url( "+t.backgroundImage+" )"}},wp.element.createElement("div",{className:"container"},wp.element.createElement(i,{template:d})))]},save:function(e){var t=e.attributes;return wp.element.createElement("div",{className:"weart-blocks weart-section",style:{backgroundImage:"url( "+t.backgroundImage+" )"}},wp.element.createElement("div",{className:"container"},wp.element.createElement(i.Content,null)))}})},function(e,t){},function(e,t){},function(e,t,l){"use strict";var n=l(17),a=(l.n(n),l(18)),__=(l.n(a),wp.i18n.__),r=wp.blocks.registerBlockType,o=wp.components,c=o.Spinner,m=o.SelectControl,i=o.TextControl,s=o.PanelBody,u=wp.blockEditor,p=(u.RichText,u.InspectorControls);r("etterem-blocks/blog",{title:__("Blog"),icon:"admin-page",category:"weart",keywords:[__("etterem"),__("blog"),__("weart")],attributes:{title:{type:"string"},subtitle:{type:"string"},categories:{type:"object"},selectedCategory:{type:"string"}},edit:function(e){var t=e.attributes,l=e.setAttributes;if(t.categories||wp.apiFetch({url:"/wp-json/wp/v2/categories"}).then(function(e){l({categories:e})}),!t.categories)return wp.element.createElement(c,null);if(t.categories&&0===t.categories.length)return"No categories found. Please add some...";var n=[];return t.categories&&(n.push({value:0,label:"Not selected"}),t.categories.forEach(function(e){n.push({value:e.id,label:e.name})})),[wp.element.createElement(p,null,wp.element.createElement(s,{title:"Be\xe1ll\xedt\xe1sok"},wp.element.createElement(i,{value:t.subtitle,onChange:function(e){l({subtitle:e})}}),wp.element.createElement(i,{value:t.title,onChange:function(e){l({title:e})}}),wp.element.createElement(m,{label:"V\xe1lassz kateg\xf3ri\xe1t",value:t.selectedCategory,onChange:function(e){l({selectedCategory:e})},options:n}))),wp.element.createElement("div",{className:"weart-blog"},wp.element.createElement("h4",null,t.subtitle),wp.element.createElement("h2",null,t.title),wp.element.createElement("div",{className:"grid"},wp.element.createElement("div",{className:"item"},wp.element.createElement("h2",null,"Cikkc\xedm"),wp.element.createElement("p",null,"Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. ")),wp.element.createElement("div",{className:"item"},wp.element.createElement("h2",null,"Cikkc\xedm"),wp.element.createElement("p",null,"Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. ")),wp.element.createElement("div",{className:"item"},wp.element.createElement("h2",null,"Cikkc\xedm"),wp.element.createElement("p",null,"Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "))))]},save:function(){return null}})},function(e,t){},function(e,t){}]);
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4865],{4865:(M,p,r)=>{r.r(p),r.d(p,{GalleryPageModule:()=>C});var m=r(177),y=r(4341),n=r(4488),u=r(4964),d=r(467),P=r(5859),g=r(8555),e=r(4438),h=r(9381);function f(o,i){if(1&o){const l=e.RV6();e.j41(0,"ion-col",8)(1,"ion-card"),e.nrm(2,"ion-img",9),e.j41(3,"ion-card-content")(4,"ion-button",10),e.bIt("click",function(){const a=e.eBV(l).$implicit,s=e.XpG();return e.Njj(s.openProductModal(a))}),e.nrm(5,"ion-icon",11),e.k0s(),e.j41(6,"ion-button",12),e.bIt("click",function(){const a=e.eBV(l).$implicit,s=e.XpG();return e.Njj(s.addToCart(a))}),e.nrm(7,"ion-icon",13),e.k0s()()()()}if(2&o){const l=i.$implicit;e.R7$(2),e.Y8G("src",l.imgUrl)}}const G=[{path:"",component:(()=>{var o;class i{constructor(t){this.modalController=t,this.products=[{id:1,name:"Pastel de Cumplea\xf1os",imgUrl:"assets/img/1.jpg",price:350,description:"Delicioso pastel de chocolate con butter cream."},{id:2,name:"Pastel Tradicional",imgUrl:"assets/img/8.jpg",price:450,description:"Jugoso pastel sabor fresa, decorado con chantilly."},{id:3,name:"Pastel de Choconaranja",imgUrl:"assets/img/3.jpg",price:400,description:"Pastel sabor chocolate con naranja."},{id:4,name:"Pastel de Quincea\xf1os",imgUrl:"assets/img/10.jpg",price:1500,description:"Pastel de chocolate de dos pisos, con hoja dorada y drip blanco."},{id:5,name:"Pastel de Boda",imgUrl:"assets/img/4.jpg",price:2500,description:"Pastel de vainilla de 3 pisos, con toques dorados y plantas verdes."},{id:6,name:"Pastel de Quincea\xf1os",imgUrl:"assets/img/11.jpg",price:200,description:"Pastel de red velvet de 3 pisos con decoraci\xf3n en rosa y toque dorados."},{id:7,name:"Pastel de Cumplea\xf1os",imgUrl:"assets/img/2.jpg",price:500,description:"Pastel de fresa color blanco con perlitas."},{id:8,name:"Pastel de Cumplea\xf1os",imgUrl:"assets/img/5.jpg",price:700,description:"Pastel red velvet de color rojo, decorado con una flor."},{id:9,name:"Pastel de Cumplea\xf1os",imgUrl:"assets/img/6.jpg",price:800,description:"Pastel de vainilla con drip rosa."}],this.cartItems=[]}openProductModal(t){var a=this;return(0,d.A)(function*(){return yield(yield a.modalController.create({component:P.e,componentProps:{product:t}})).present()})()}addToCart(t){var a=this;return(0,d.A)(function*(){const s=yield a.modalController.create({component:g.J,componentProps:{product:t,cartItems:a.cartItems}});return s.onDidDismiss().then(c=>{c&&c.data&&c.data.item&&a.cartItems.push(c.data.item)}),yield s.present()})()}goToCart(){var t=this;return(0,d.A)(function*(){return yield(yield t.modalController.create({component:g.J,componentProps:{cartItems:t.cartItems}})).present()})()}}return(o=i).\u0275fac=function(t){return new(t||o)(e.rXU(n.W3))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-gallery"]],decls:11,vars:3,consts:[["color","primary"],["title","Galer\xeda",3,"showMenu"],["slot","end"],[2,"--ion-margin-end","8px",3,"click"],["slot","icon-only","name","cart"],[3,"fullscreen"],["lines","none"],["size","4",4,"ngFor","ngForOf"],["size","4"],[3,"src"],["expand","block",1,"ion-text-wrap","ion-text-center",2,"max-width","100%","max-height","10%",3,"click"],["name","open-outline"],["expand","block","color","secondary",1,"ion-text-wrap","ion-text-center",3,"click"],["name","cart-outline"]],template:function(t,a){1&t&&(e.j41(0,"ion-header")(1,"ion-toolbar",0),e.nrm(2,"app-header",1),e.j41(3,"ion-buttons",2)(4,"ion-button",3),e.bIt("click",function(){return a.goToCart()}),e.nrm(5,"ion-icon",4),e.k0s()()()(),e.j41(6,"ion-content",5)(7,"ion-card-content")(8,"ion-list",6)(9,"ion-row"),e.DNE(10,f,8,1,"ion-col",7),e.k0s()()()()),2&t&&(e.R7$(2),e.Y8G("showMenu",!0),e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(4),e.Y8G("ngForOf",a.products))},dependencies:[m.Sq,n.Jm,n.QW,n.b_,n.I9,n.hU,n.W9,n.eU,n.iq,n.KW,n.nf,n.ln,n.ai,h.l],styles:['@charset "UTF-8";.cart-button[_ngcontent-%COMP%]{position:absolute;top:0;right:16px}']}),i})()}];let j=(()=>{var o;class i{}return(o=i).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[u.iI.forChild(G),u.iI]}),i})();var v=r(3887);let C=(()=>{var o;class i{}return(o=i).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[m.MD,y.YN,n.bv,j,v.G]}),i})()}}]);
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1141],{1141:(z,c,r)=>{r.r(c),r.d(c,{VisualizarComentariosPageModule:()=>V});var m=r(177),d=r(4341),n=r(4488),l=r(4964),o=r(4438),u=r(6340);let C=(()=>{var e;class a{constructor(t){this.firestore=t}loadComments(){return this.firestore.collection("comments",t=>t.orderBy("timestamp","desc")).valueChanges()}submitComment(t,s){return this.firestore.collection("comments").add({name:t,text:s,timestamp:new Date})}}return(e=a).\u0275fac=function(t){return new(t||e)(o.KVO(u.Qe))},e.\u0275prov=o.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),a})();var f=r(9381);function g(e,a){if(1&e&&(o.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-subtitle"),o.EFF(3),o.k0s(),o.j41(4,"ion-card-title"),o.EFF(5),o.nI1(6,"date"),o.k0s()(),o.j41(7,"ion-card-content")(8,"p"),o.EFF(9),o.k0s()()()),2&e){const i=a.$implicit;o.R7$(3),o.JRh(i.name),o.R7$(2),o.JRh(o.bMT(6,3,i.timestamp)),o.R7$(4),o.JRh(i.text)}}const v=[{path:"",component:(()=>{var e;class a{constructor(t,s){this.firestore=t,this.comentariosService=s,this.comments=[]}ngOnInit(){this.loadComments()}loadComments(){this.firestore.collection("comments",t=>t.orderBy("timestamp","desc")).valueChanges().subscribe(t=>{this.comments=t})}}return(e=a).\u0275fac=function(t){return new(t||e)(o.rXU(u.Qe),o.rXU(C))},e.\u0275cmp=o.VBU({type:e,selectors:[["app-visualizar-comentarios"]],decls:3,vars:2,consts:[["backButton","/main/contacto","title","Inicio"],[3,"fullscreen"],[4,"ngFor","ngForOf"]],template:function(t,s){1&t&&(o.nrm(0,"app-header",0),o.j41(1,"ion-content",1),o.DNE(2,g,10,5,"ion-card",2),o.k0s()),2&t&&(o.R7$(),o.Y8G("fullscreen",!0),o.R7$(),o.Y8G("ngForOf",s.comments))},dependencies:[m.Sq,n.b_,n.I9,n.ME,n.HW,n.tN,n.W9,f.l,m.vh]}),a})()}];let h=(()=>{var e;class a{}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[l.iI.forChild(v),l.iI]}),a})();var p=r(3887);let V=(()=>{var e;class a{}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[m.MD,d.YN,n.bv,h,p.G]}),a})()}}]);
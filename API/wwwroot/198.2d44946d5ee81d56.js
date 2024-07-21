"use strict";(self.webpackChunkClientApp=self.webpackChunkClientApp||[]).push([[198],{2198:(T,c,i)=>{i.r(c),i.d(c,{OrdersModule:()=>f});var d=i(6895),s=i(6949),t=i(1571),a=i(4766),l=i(529);let u=(()=>{class r{constructor(e){this.http=e,this.baseUrl=a.N.apiUrl}getOrdersForUser(){return this.http.get(this.baseUrl+"orders")}getOrderDetailed(e){return this.http.get(this.baseUrl+"orders/"+e)}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(l.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function p(r,o){if(1&r&&(t.TgZ(0,"tr",6)(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA()()),2&r){const e=o.$implicit;t.MGl("routerLink","/orders/",e.id,""),t.xp6(2),t.hij("# ",e.id,""),t.xp6(2),t.Oqu(t.xi3(5,5,e.orderDate,"medium")),t.xp6(3),t.Oqu(t.xi3(8,8,e.total,"GBP")),t.xp6(3),t.Oqu(e.status)}}let g=(()=>{class r{constructor(e){this.ordersService=e}ngOnInit(){this.getOrders()}getOrders(){this.ordersService.getOrdersForUser().subscribe(e=>{this.orders=e},e=>{console.log(e)})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(u))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-orders"]],decls:16,vars:1,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thead-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"table",3)(4,"thead",4)(5,"tr")(6,"th"),t._uU(7,"Order"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Date"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Total"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Status"),t.qZA()()(),t.TgZ(14,"tbody"),t.YNc(15,p,11,11,"tr",5),t.qZA()()()()()),2&e&&(t.xp6(15),t.Q6J("ngForOf",n.orders))},dependencies:[d.sg,s.rH,d.H9,d.uU]}),r})();var m=i(8909);function h(r,o){if(1&r&&(t.TgZ(0,"tr")(1,"th",16)(2,"div",17),t._UZ(3,"img",18),t.TgZ(4,"div",19)(5,"h5",20),t._uU(6),t.qZA()()()(),t.TgZ(7,"td",21)(8,"strong"),t._uU(9),t.ALo(10,"currency"),t.qZA()(),t.TgZ(11,"td",21)(12,"span",22),t._uU(13),t.qZA()(),t.TgZ(14,"td",21)(15,"strong"),t._uU(16),t.ALo(17,"currency"),t.qZA()()()),2&r){const e=o.$implicit;t.xp6(3),t.s9C("src",e.pictureUrl,t.LSH),t.s9C("alt",e.productName),t.xp6(3),t.hij(" ",e.productName," "),t.xp6(3),t.Oqu(t.xi3(10,6,e.price,"GBP")),t.xp6(4),t.Oqu(e.quantity),t.xp6(3),t.Oqu(t.xi3(17,9,e.price*e.quantity,"GBP"))}}function Z(r,o){if(1&r&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div")(3,"div",4)(4,"table",5)(5,"thead")(6,"tr")(7,"th",6)(8,"div",7),t._uU(9,"Product"),t.qZA()(),t.TgZ(10,"th",6)(11,"div",8),t._uU(12,"Price"),t.qZA()(),t.TgZ(13,"th",6)(14,"div",8),t._uU(15,"Quantity"),t.qZA()(),t.TgZ(16,"th",6)(17,"div",8),t._uU(18,"Total"),t.qZA()()()(),t.TgZ(19,"tbody"),t.YNc(20,h,18,12,"tr",9),t.qZA()()()()(),t.TgZ(21,"div",10)(22,"div",11),t._uU(23,"Order summary"),t.qZA(),t.TgZ(24,"div",12)(25,"ul",13)(26,"li",14)(27,"strong",15),t._uU(28,"Order subtotal"),t.qZA(),t.TgZ(29,"strong"),t._uU(30),t.ALo(31,"currency"),t.qZA()(),t.TgZ(32,"li",14)(33,"strong",15),t._uU(34,"Shipping and handling"),t.qZA(),t.TgZ(35,"strong"),t._uU(36),t.ALo(37,"currency"),t.qZA()(),t.TgZ(38,"li",14)(39,"strong",15),t._uU(40,"Total"),t.qZA(),t.TgZ(41,"strong"),t._uU(42),t.ALo(43,"currency"),t.qZA()()()()()()),2&r){const e=t.oxw();t.xp6(20),t.Q6J("ngForOf",e.order.orderItems),t.xp6(10),t.Oqu(t.xi3(31,4,e.order.subtotal,"GBP")),t.xp6(6),t.Oqu(t.xi3(37,7,e.order.shippingPrice,"GBP")),t.xp6(6),t.Oqu(t.xi3(43,10,e.order.total,"GBP"))}}const O=[{path:"",component:g},{path:":id",component:(()=>{class r{constructor(e,n,x){this.orderService=e,this.route=n,this.bcService=x,this.bcService.set("@OrderDetailed"," ")}ngOnInit(){const e=this.route.snapshot.paramMap.get("id");e&&this.orderService.getOrderDetailed(+e).subscribe({next:n=>{this.order=n,this.bcService.set("@OrderDetailed",`Order# ${n.id} - ${n.status}`)}})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(u),t.Y36(s.gz),t.Y36(m.pm))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-order-detailed"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[1,"table-responsive"],[1,"table"],["scope","col",1,"border-0","bg-light"],[1,"p-2","text-uppercase"],[1,"py-2","text-uppercase"],[4,"ngFor","ngForOf"],[1,"col-4"],[1,"bg-light","px-4","py-3","text-uppercase","font-weight-bold"],[1,"p-4"],[1,"list-unstyled","mb-1"],[1,"d-flex","justify-content-between","py-3","border-bottom"],[1,"text-muted"],["scope","row"],[1,"p-2"],[1,"img-fluid",2,"max-height","50px",3,"src","alt"],[1,"ms-3","d-inline-block","align-middle"],[1,"mb-0"],[1,"align-middle"],[1,"font-weight-bold","px-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Z,44,13,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.order))},dependencies:[d.sg,d.O5,d.H9]}),r})(),data:{breadcrumb:{alias:"OrderDetailed"}}}];let v=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[s.Bz.forChild(O),s.Bz]}),r})();var A=i(5349);let f=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[d.ez,v,A.m]}),r})()}}]);
"use strict";(self.webpackChunkClientApp=self.webpackChunkClientApp||[]).push([[535],{4535:(A,m,r)=>{r.r(m),r.d(m,{AccountModule:()=>J});var u=r(6895),l=r(6949),o=r(433),t=r(1571),p=r(3970),c=r(182);let g=(()=>{class e{constructor(n,i,a){this.accountService=n,this.router=i,this.activatedRoute=a}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new o.cw({email:new o.NI("",[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),password:new o.NI("",o.kI.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},n=>{console.log(n)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.B),t.Y36(l.F0),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:10,vars:5,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Login"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",6),t.TgZ(8,"button",7),t._uU(9,"Sign in"),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("formGroup",i.loginForm),t.xp6(4),t.Q6J("label","Email Address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(1),t.Q6J("disabled",i.loginForm.invalid))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,c.t]}),e})();var d=r(5963),f=r(9646),h=r(3900),b=r(4004);function v(e,s){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const n=s.$implicit;t.xp6(1),t.hij(" ",n," ")}}function y(e,s){if(1&e&&(t.TgZ(0,"ul",10),t.YNc(1,v,2,1,"li",11),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.errors)}}const x=[{path:"login",component:g},{path:"register",component:(()=>{class e{constructor(n,i,a){this.fb=n,this.accountService=i,this.router=a}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[o.kI.required]],email:[null,[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,[o.kI.required]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(n=>{this.router.navigateByUrl("/shop")},n=>{console.log(n),this.errors=n.errors})}validateEmailNotTaken(){return n=>(0,d.H)(500).pipe((0,h.w)(()=>n.value?this.accountService.checkEmailExists(n.value).pipe((0,b.U)(i=>i?{emailExists:!0}:null)):(0,f.of)(null)))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(o.qu),t.Y36(p.B),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:12,vars:6,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger list-unstyled",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Register"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",6)(8,"app-text-input",7),t.YNc(9,y,2,1,"ul",8),t.TgZ(10,"button",9),t._uU(11,"Register"),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("formGroup",i.registerForm),t.xp6(4),t.Q6J("label","Display Name"),t.xp6(1),t.Q6J("label","Email Address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(1),t.Q6J("ngIf",i.errors))},dependencies:[u.sg,u.O5,o._Y,o.JJ,o.JL,o.sg,o.u,c.t]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(x),l.Bz]}),e})();var F=r(5349);let J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,C,F.m]}),e})()}}]);
(self.webpackChunknodenet=self.webpackChunknodenet||[]).push([[978],{8978:(t,e,s)=>{"use strict";s.r(e),s.d(e,{MainModule:()=>y});var i=s(1116),n=s(3128),r=s(2693),o=s(1041),c=s(2006),p=s(5366),a=s(2255),g=s(8845),u=s(8903),l=s(5351),h=s(7307),f=s(9624),d=s(2797),_=s(4369);let m=(()=>{class t{constructor(t,e,s,i,n,r){this.matIconRegistry=t,this.domSanitizer=e,this.dataStorageService=s,this.mainService=i,this.router=n,this.authService=r,this.matIconRegistry.addSvgIcon("more_vert",this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/icons/more_vert.svg"))}ngOnInit(){this.userSubscription=this.authService.user.subscribe(t=>{this.user=t,this.user&&(this.serverDir=l.N.IMAGES_PATH,this.postUserImage=""===this.postUser.profilePicture||"assets/defaultProfile.png"===this.postUser.profilePicture?"assets/defaultProfile.png":this.serverDir+this.postUser.profilePicture)})}goToUser(){this.router.navigate(this.user._id===this.post.creator?["/account"]:["user-profile",this.post.creator,"view"])}updatePostLikes(){this.dataStorageService.likePost(this.post._id).subscribe(t=>{this.post.likes=t.likes,this.mainService.updatePost(this.index,this.post)})}ngOnDestroy(){this.userSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(p.Y36(h.jv),p.Y36(f.H7),p.Y36(a.Z),p.Y36(u.J),p.Y36(c.F0),p.Y36(g.e))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-post"]],inputs:{post:"post",postUser:"postUser",index:"index"},decls:23,vars:7,consts:[[1,"post__wrapper"],[1,"post__card"],[1,"postTop"],[1,"postTopLeft"],["mat-flat-button","",2,"background-color","inherit",3,"click"],["alt","",1,"postProfileImg",3,"src"],[1,"postUsername"],[1,"postDate"],[1,"postTopRight"],["mat-icon-button",""],["svgIcon","more_vert"],[1,"postCenter"],[1,"postText"],["alt","",1,"postImg",3,"src"],[1,"postBottom"],[1,"postBottomLeft"],["mat-icon-button","",3,"click"],["src","assets/like.png","alt","",1,"likeIcon"],[1,"postLikeCounter"]],template:function(t,e){1&t&&(p.TgZ(0,"div",0),p.TgZ(1,"mat-card",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"button",4),p.NdJ("click",function(){return e.goToUser()}),p._UZ(5,"img",5),p.TgZ(6,"span",6),p._uU(7),p.qZA(),p.qZA(),p.TgZ(8,"span",7),p._uU(9),p.qZA(),p.qZA(),p.TgZ(10,"div",8),p.TgZ(11,"button",9),p._UZ(12,"mat-icon",10),p.qZA(),p.qZA(),p.qZA(),p.TgZ(13,"div",11),p.TgZ(14,"span",12),p._uU(15),p.qZA(),p._UZ(16,"img",13),p.qZA(),p.TgZ(17,"div",14),p.TgZ(18,"div",15),p.TgZ(19,"button",16),p.NdJ("click",function(){return e.updatePostLikes()}),p._UZ(20,"img",17),p.qZA(),p.TgZ(21,"span",18),p._uU(22),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t&&(p.xp6(5),p.Q6J("src",e.postUserImage,p.LSH),p.xp6(2),p.hij(" ",e.postUser.username," "),p.xp6(2),p.Oqu(e.post.createdAt),p.xp6(6),p.Oqu(e.post.description),p.xp6(1),p.hYB("src","",e.serverDir,"",e.post.imgUrl,"",p.LSH),p.xp6(6),p.hij("",e.post.likes.length," liked"))},directives:[d.a8,_.lW,h.Hw],styles:[".post__wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:600px}.post__card[_ngcontent-%COMP%]{margin-bottom:30px}.postTop[_ngcontent-%COMP%]{justify-content:space-between}.postTop[_ngcontent-%COMP%], .postTopLeft[_ngcontent-%COMP%]{display:flex;align-items:center}.postProfileImg[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;object-fit:cover}.postUsername[_ngcontent-%COMP%]{font-size:15px;font-weight:500;margin:0 10px}.postDate[_ngcontent-%COMP%]{font-size:12px}.postCenter[_ngcontent-%COMP%]{margin:20px 0}.postImg[_ngcontent-%COMP%]{margin-top:20px;max-width:100%;max-height:500px;object-fit:contain}.postBottom[_ngcontent-%COMP%]{justify-content:space-between}.postBottom[_ngcontent-%COMP%], .postBottomLeft[_ngcontent-%COMP%]{display:flex;align-items:center}.likeIcon[_ngcontent-%COMP%]{width:24px;height:24px;cursor:pointer}.postLikeCounter[_ngcontent-%COMP%]{font-size:15px;padding-left:20px}.postCommentText[_ngcontent-%COMP%]{cursor:pointer;border-bottom:1px dashed gray;font-size:15px}"]}),t})();function x(t,e){if(1&t&&p._UZ(0,"app-post",5),2&t){const t=e.$implicit,s=e.index;p.Q6J("post",t.post)("postUser",t.user)("index",s)}}function b(t,e){if(1&t&&(p.TgZ(0,"div",3),p.YNc(1,x,1,3,"app-post",4),p.qZA()),2&t){const t=p.oxw();p.xp6(1),p.Q6J("ngForOf",t.posts)}}let Z=(()=>{class t{constructor(t){this.mainService=t}ngOnInit(){this.subscription=this.mainService.postsChanged.subscribe(t=>{this.posts=t}),this.posts=this.mainService.getPosts()}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(p.Y36(u.J))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-feed"]],decls:3,vars:1,consts:[[1,"feed__wrapper"],[1,"feed__container"],["class","post",4,"ngIf"],[1,"post"],[3,"post","postUser","index",4,"ngFor","ngForOf"],[3,"post","postUser","index"]],template:function(t,e){1&t&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.YNc(2,b,2,1,"div",2),p.qZA(),p.qZA()),2&t&&(p.xp6(2),p.Q6J("ngIf",e.posts))},directives:[i.O5,i.sg,m],styles:[".feed__wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse}.feed__container[_ngcontent-%COMP%]{height:100%;width:100%}@media (max-width:1000px){.feed__wrapper[_ngcontent-%COMP%]{justify-content:center;flex-direction:row;border:none}}.post[_ngcontent-%COMP%]{height:100%;margin:2rem 2rem 4rem}"]}),t})();var v=s(7812);function P(t,e){1&t&&p._UZ(0,"img",15)}function O(t,e){if(1&t&&p._UZ(0,"img",16),2&t){const t=p.oxw().$implicit,e=p.oxw(2);p.hYB("src","",e.serverDir,"",t.profilePicture,"",p.LSH)}}function w(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"div",9),p.TgZ(1,"div",10),p.TgZ(2,"div",11),p.YNc(3,P,1,0,"img",12),p.YNc(4,O,1,2,"img",13),p.TgZ(5,"span",5),p._uU(6),p.qZA(),p.qZA(),p.TgZ(7,"button",14),p.NdJ("click",function(){const e=p.CHM(t).$implicit;return p.oxw(2).onFollow(e._id)}),p._uU(8,"Follow"),p.qZA(),p.qZA(),p.qZA()}if(2&t){const t=e.$implicit;p.xp6(3),p.Q6J("ngIf",""===t.profilePicture),p.xp6(1),p.Q6J("ngIf",""!==t.profilePicture),p.xp6(2),p.hij(" ",t.username," ")}}function C(t,e){if(1&t&&(p.TgZ(0,"div",2),p.TgZ(1,"div",3),p._UZ(2,"img",4),p.TgZ(3,"span",5),p._uU(4),p.qZA(),p.qZA(),p._UZ(5,"hr",6),p.TgZ(6,"span",7),p._uU(7," Some suggestions for you "),p.qZA(),p.YNc(8,w,9,3,"div",8),p.qZA()),2&t){const t=p.oxw();p.xp6(2),p.Q6J("src",t.userImage,p.LSH),p.xp6(2),p.hij(" ",t.user.username," "),p.xp6(4),p.Q6J("ngForOf",t.users)}}let S=(()=>{class t{constructor(t,e){this.authService=t,this.dataStorageService=e}ngOnInit(){this.serverDir=l.N.IMAGES_PATH,this.userSubscription=this.authService.user.subscribe(t=>{this.user=t,this.user&&(this.userImage=""===this.user.profilePicture||"assets/defaultProfile.png"===this.user.profilePicture?"assets/defaultProfile.png":this.serverDir+this.user.profilePicture,this.dataStorageService.fetchUserSuggestion().subscribe(t=>{this.users=t}))})}onFollow(t){const e=localStorage.getItem("token");this.dataStorageService.followUser(t).subscribe(t=>{console.log(t);const s=new v.n(this.user._id,this.user.email,this.user.username,this.user.profilePicture,this.user.phoneNumber,this.user.bio,this.user.followers,t,this.user.posts,this.user.createdAt,this.user.updatedAt,e);this.authService.user.next(s)})}ngOnDestroy(){this.userSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(p.Y36(g.e),p.Y36(a.Z))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-rightbar"]],decls:2,vars:1,consts:[[1,"rightbar__wrapper"],["class","rightbar__container",4,"ngIf"],[1,"rightbar__container"],[1,"user__profile"],["alt","",1,"user__profileImg",3,"src"],[1,"username"],[1,"rightbar__hr"],[1,"suggestions"],["class","rightbar__list",4,"ngFor","ngForOf"],[1,"rightbar__list"],[1,"user__index"],[1,"user__info"],["class","userImg","src","assets/defaultProfile.png","alt","",4,"ngIf"],["class","userImg","alt","",3,"src",4,"ngIf"],["mat-button","",1,"follow__button",3,"click"],["src","assets/defaultProfile.png","alt","",1,"userImg"],["alt","",1,"userImg",3,"src"]],template:function(t,e){1&t&&(p.TgZ(0,"div",0),p.YNc(1,C,9,3,"div",1),p.qZA()),2&t&&(p.xp6(1),p.Q6J("ngIf",e.users))},directives:[i.O5,i.sg,_.lW],styles:[".rightbar__wrapper[_ngcontent-%COMP%]{display:flex;border-left:1px solid #c0bcbc}.rightbar__container[_ngcontent-%COMP%]{height:100%;width:300px;margin:2rem 0 4rem 2rem}.user__profile[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:200px;margin-bottom:20px}.user__profileImg[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:50%;margin-bottom:30px}.username[_ngcontent-%COMP%]{font-size:25px;font-weight:500;margin-bottom:10px}.rightbar__hr[_ngcontent-%COMP%]{border:none;height:2px;background:grey;margin-bottom:20px}.suggestions[_ngcontent-%COMP%]{font-size:18px;font-weight:500}.rightbar__list[_ngcontent-%COMP%]{flex-direction:column}.rightbar__list[_ngcontent-%COMP%], .user__index[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.user__index[_ngcontent-%COMP%]{justify-content:space-between;margin-top:20px}.user__info[_ngcontent-%COMP%]{display:flex;align-items:center}.userImg[_ngcontent-%COMP%]{height:45px;width:45px;border-radius:50%}.user__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:10px;font-size:16px;font-weight:400}.follow__button[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#007fff}"]}),t})();function T(t,e){1&t&&(p.TgZ(0,"div",4),p.TgZ(1,"p"),p._uU(2,"Please create some post and follow some people here."),p.qZA(),p.qZA())}function M(t,e){1&t&&(p.TgZ(0,"div",5),p._UZ(1,"app-feed"),p.qZA())}function I(t,e){1&t&&(p.TgZ(0,"div",6),p._UZ(1,"app-rightbar"),p.qZA())}const A=[{path:"",redirectTo:"home"},{path:"home",component:(()=>{class t{constructor(t,e,s){this.dataStorageService=t,this.authService=e,this.mainService=s,this.intro=!0}ngOnInit(){this.userSubscription=this.authService.user.subscribe(t=>{t&&(this.mainService.userId=t._id)}),this.dataStorageService.fetchTimelines().subscribe(t=>{this.intro=this.mainService.getHomeInfo(),console.log(this.intro)})}ngOnDestroy(){this.userSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(p.Y36(a.Z),p.Y36(g.e),p.Y36(u.J))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-main"]],decls:4,vars:3,consts:[[1,"main__container"],["class","empty__container",4,"ngIf"],["class","feed",4,"ngIf"],["class","rightbar",4,"ngIf"],[1,"empty__container"],[1,"feed"],[1,"rightbar"]],template:function(t,e){1&t&&(p.TgZ(0,"div",0),p.YNc(1,T,3,0,"div",1),p.YNc(2,M,2,0,"div",2),p.YNc(3,I,2,0,"div",3),p.qZA()),2&t&&(p.xp6(1),p.Q6J("ngIf",e.intro),p.xp6(1),p.Q6J("ngIf",!e.intro),p.xp6(1),p.Q6J("ngIf",!e.intro))},directives:[i.O5,Z,S],styles:[".main__container[_ngcontent-%COMP%]{display:flex;width:100%}.feed[_ngcontent-%COMP%]{flex:7.5}.empty__container[_ngcontent-%COMP%]{margin-top:50%;font-size:20px;font-weight:500;margin-right:20px}.rightbar[_ngcontent-%COMP%]{flex:4.5}@media (max-width:1000px){.rightbar[_ngcontent-%COMP%]{display:none}.feed[_ngcontent-%COMP%]{flex:1}}"]}),t})()}];let U=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[c.Bz.forChild(A)],c.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[i.ez,U,n.q,r.JF,o.UX]]}),t})()}}]);
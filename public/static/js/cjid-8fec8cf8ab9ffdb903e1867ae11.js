$(function(){$("head").append('<meta property="wb:webmaster" content="2d06011e0acbd86f" />');var e="e40e7004-4c8a-4963-8564-31271a8337d8";function b(){var h=passport.cookie.lenovoId;for(var j=passport.cookie.lenovoId.length;j<20;j++){h="0"+h}var g="https://i.app.lefile.cn/uc_server/data/avatar/"+h.substring(0,5)+"/"+h.substring(5,10)+"/"+h.substring(10,15)+"/"+h.substring(15,h.length)+"_profilehead.w50.jpg"}function d(){var g=(window.location.href.indexOf("lenovouat")>-1?"//i.lenovouat.com":"//i.lenovo.com.cn");jQuery.ajax({url:"https:"+g+"/mcenter/getUserNameAndUserLevel.jhtml?lenovoId="+passport.cookie.lenovoId+"&sts=e40e7004-4c8a-4963-8564-31271a8337d8",type:"get",dataType:"jsonp",async:false,jsonp:"callback",success:function(h){if(h.ret){$(".LoginUserName").html(h.data.username)}},error:function(h){console.log(h)}})}passport.init({ticket:e,drawUserInfo:function(){$(".hd-login-regist").hide();$(".hd-login-show").show();$(".top_usercenter").show();$(".top_phone").hide();$(".top_phone ul").hide();$(".top_login_ing").html('<span class="LoginUserName"></span>');b();d()},logout:function(){$(".hd-login-show").hide();$(".top_loginbtn").show();$(".hd-login-regist").show();$(".top_usercenter").hide();$(".top_username").hide();$(".top_phone").hide()}});$("body").delegate(".login","click",function(){passport.show()}).delegate(".logout","click",function(){passport.doLogout()}).delegate(".regist","click",function(){passport.hide();regist.init(e)}).delegate(".forgetPwd","click",function(){passport.hide();recover.init(e)}).delegate(".gotomycenter","click",function(){location.href=$GRUNTCONFIG.DEV.customercenter}).delegate(".regist_btn_plat","click",function(){var g=(window.location.href.indexOf("lenovouat")>-1?"//reg.lenovouat.com/auth/v1/regist":"//reg.lenovo.com.cn/auth/v1/regist");location.href=g+"?ru="+window.location.href+"&ticket="+e});$(".hd-login-show").hover(function(){$(".top_phone").stop(true).animate({height:"60px",opacity:"show"})},function(){$(".top_phone").stop(true).animate({height:"0px",opacity:"hide"})});function f(){var g=(window.location.href.indexOf("lenovouat")>-1?"//buy.lenovouat.com/":"//buy.lenovo.com.cn/");$.ajax({url:g+"/getshoppingcartcount.jhtml",dataType:"jsonp",async:false,type:"get",jsonp:"callbackparam",success:function(h){if(h.rc==0){$("#top_cart_count").text(h.count)}},error:function(i,h,j){}})}function a(){var g=(window.location.href.indexOf("lenovouat")>-1?"//i.lenovouat.com":"//i.lenovo.com.cn");if(window.passport&&window.passport.isLogin()&&window.passport.cookie){$.ajax({url:g+"/internal/msg/getUnReadMsg.jhtml?sts=e40e7004-4c8a-4963-8564-31271a8337d8",dataType:"jsonp",type:"get",jsonpCallback:"defaultcallback",success:function(h){if(h.ret){if(h.count&&h.count>0){$("#top_msg_tipdot").show();$("#top_msg_count").html(h.count)}}},error:function(i,h,j){}})}else{return}}a();f();function c(h,i){var g=document.createElement("script");g.type="text/javascript";if(typeof(i)!="undefined"){if(g.readyState){g.onreadystatechange=function(){if(g.readyState=="loaded"||g.readyState=="complete"){g.onreadystatechange=null;i()}}}else{g.onload=function(){i()}}}g.src=h;document.body.appendChild(g)}c("//m2.lefile.cn/lenovo_pc_search_common/js/lenovo_search_header.min.js",function(){})});$(function(){$(".hd-cc-li").hover(function(){$(this).addClass("active");var h=$(this).find(".hd-cn-li");h.eq(0).addClass("active");var i=h.eq(0).find(".cd-item");var j=0;i.each(function(){var k=$(this).find(".item-list").height();if(k>j){j=k}});i.find(".item-list").height(j)},function(){$(this).removeClass("active");$(this).find(".active").removeClass("active")});$(".hd-cn-li").hover(function(){$(this).siblings().removeClass("active");$(this).addClass("active");var h=$(this).find(".cd-item");h.css("width",Math.floor(100/h.length)+"%");var i=0;h.each(function(){var j=$(this).find(".item-list").height();if(j>i){i=j}});h.find(".item-list").height(i)},function(){$(this).siblings().removeClass("active")});var b=$(".hd-cc-li");var a=$(".hd-cc-li-title").addClass("open");var e=null;var g=0;var f=true;var c=$(".hd-right-container");$(".hd-right-search img").click(function(){if(!f){return false}f=false;a.animate({opacity:0},300);if(window.isNeedSuspendedLayer){$(".last-li").fadeOut(300)}$(".searchview-bar").css({marginLeft:60});c.fadeOut(400,function(){a.addClass("close").removeClass("open");f=true;$(".hd-searchview").fadeIn(400);$(".searchview-bar").animate({marginLeft:0},400);$("#searchinput").val("");setTimeout(function(){$("#searchinput")[0].focus()},500);$(".hd-config-container").fadeOut(0)});a.addClass("hd-title-scale")});$(".hd-searchview .search-close img").click(function(){d()});function d(){$(".hd-searchview").fadeOut(200,function(){$(".hd-config-container").show();c.fadeIn(200);if(window.isNeedSuspendedLayer){$(".last-li").fadeIn(200)}e=setInterval(function(){a.eq(g).animate({opacity:1},64,"linear",function(){$(this).addClass("open").removeClass("close")});a.eq(g).removeClass("hd-title-scale");if(++g==a.length){clearInterval(e);f=true;g=0}},32)})}});$(function(){var a="";if(location.host.indexOf("lenovouat")>=0){a="https://reg.lenovouat.com"}if(location.host.indexOf("cn")>=0){a="https://reg.lenovo.com.cn"}if(passport.isLogin()){$("#head_bubble").fadeOut(2000)}else{$("#head_bubble").fadeIn()}$(window).on("scroll",function(){var b=$(window).scrollTop();$(window).scroll(function(){var c=$(window).scrollTop();if(b<c){$("#head_bubble").fadeOut(2000);b=c}if(b>c){b=c}})});setTimeout(function(){$("#head_bubble").fadeOut(2000)},5000)});
$(function(){var d=window.location.href,g="pc",c="latag",e="_",h=["顶部导航","banner","分类","个人和家庭用户","企业用户","推荐热门版块","底部通栏","快捷通道","楼层","闪购","今日秒杀"],i=[];if(window.allLatag===undefined){var b=window.allLatag=[]}try{if(d.indexOf("shop.lenovo.com.cn")!=-1){$("#top-nav ul li a").each(function(o,p){p=$(p);var n=[c,g,h[0],p.text(),o,p.text(),p.attr("href")].join(e);b.push(n);p.attr(c,n)});$("div.nav_box ul li a").each(function(o,p){p=$(p);var n=[c,g,h[0],p.text(),o,p.text(),p.attr("href")].join(e);b.push(n);p.attr(c,n)});$("#ul1 li a").each(function(o,p){p=$(p);var n=[c,g,"轮播图","",o,"",p.attr("href")].join(e);b.push(n);p.attr(c,n)});$(".list_nav ul li").each(function(p,q){var q=$(q);var n=q.find("div.list_name a").eq(0);var o=[c,g,"",h[2],p,n.text(),n.attr("href")].join(e);b.push(o);n.attr(c,o);q.find("div.list_cont list_lta").each(function(r,s){$(s).find("ul li a").each(function(v,t){var u=[c,g,h[2],n.text(),p,$(t).text(),$(t).attr("href")].join(e);b.push(u);$(t).attr(c,u)})})});$("#quick-link ul li").each(function(o,p){p=$(p);var q=p.find("p").eq(0).html();var n=[c,g,h[7],q,o,q,p.attr("href")].join(e);b.push(n);p.attr(c,n)});$("div.nav_floor_item").each(function(u,r){if(u==0){var r=$(r);r.find("div.swiper-wrapper>div.swiper-slide").each(function(w,t){var v=$(t);var n=v.find("div.box_left>div.timestar").html();v.find("div.box_goods").each(function(z,x){var y=[c,g,h[9],h[10],z,n,$(x).find("a").eq(0).attr("href")].join(e);$(x).attr(c,y)})});return true}var q=$(r);var s=q.find("div.floor_title>h3").html();s=s.replace(/\s/g,"");s=s.substring(2);q.find("div.floor_links>a").each(function(w,x){var v=$(x);var n=[c,g,h[8]+(u+1),s,w,v.text(),v.attr("href")].join(e);b.push(n);v.attr(c,n)});var p=q.find(".floor_left>a");var o=[c,g,h[8]+(u+1),s,0,"",p.attr("href")].join(e);b.push(o);p.attr(c,o);q.find("div.floor_right>div.floor_item").each(function(n,w){var v=$(w);var x=v.find("p").eq(0).attr("gcode");var t=v.find("a.pro_name").eq(0).html();v.find("a").each(function(){var z=$(this);var y=[c,g,h[8]+(u+1),s,(n+1),x,t].join(e);b.push(y);z.attr(c,y)})})})}else{if(d.indexOf("www.lenovo.com.cn")!=-1){$("ul.hd-config-container li.hd-cc-li").each(function(t,r){var s=$(r);var o=s.find("span.hd-cc-li-title>a").eq(0);var q=o.find("em").eq(0).text();var p=[c,g,h[0],q,t,o.attr("href"),""].join(e);b.push(p);o.attr(c,p);s.find("div.content-area ul li.hd-cn-li").each(function(v,x){var x=$(x);var y=x.find(">a").eq(0);var w=y.find("span").text();var u=x.find("div.details-area ul>li.cd-item ul>li>a");var n=[c,g,h[0],q,v,w,y.attr("href")].join(e);b.push(n);y.attr(c,n);u.each(function(B,C){var z=$(C);var A=[c,g,h[0]+q,w,B,z.text(),z.attr("href")].join(e);b.push(A);z.attr(c,A)})})});$(".focus-img-div .fi-item a").each(function(o,p){p=$(p);var n=[c,g,"轮播图","",o,"",p.attr("href")].join(e);b.push(n);p.attr(c,n)});var f=$(".tabswitch-customer");var l=f.find(".tabswitch-title-info>p").eq(0).html();l=l.replace("&amp;","&");f.find("ul.tabswitch-list li.tl-li").each(function(q,s){var n=$(s).find("a.tl-title-anchor").eq(0);var p=n.find("span").text();var r=0;var o=[c,g,l,"icon",p,q,n.attr("href")].join(e);b.push(o);n.attr(c,o);$(s).find("div.tl-content ul li a").each(function(v,w){var t=$(w);var u=[c,g,l,p,v,t.attr("href")].join(e);b.push(u);t.attr(c,u);r++});$(s).find("div.left>a,div.right>a").each(function(v,w){var t=$(w);var u=[c,g,l,p,r,"",t.attr("href")].join(e);b.push(u);t.attr(c,u);r++})});var j=$(".tabswitch-business");if(j.size()>1){j.each(function(q,o){o=$(o);var p=o.find(".tabswitch-title-info>p").eq(0).html();o.find("ul.tabswitch-list li.tl-li").each(function(t,u){var n=$(u).find("a.tl-title-anchor").eq(0);var s=n.find("span").text();var r=[c,g,p,"icon",s,t,$(u).attr("href")].join(e);b.push(r);n.attr(c,r);$(u).find("div.tl-content ul li a").each(function(x,y){var v=$(y);var w=[c,g,p,s,x,v.attr("href")].join(e);b.push(w);v.attr(c,w)})})})}else{var l=j.find(".tabswitch-title-info>p").eq(0).html();j.find("ul.tabswitch-list li.tl-li").each(function(q,r){var n=$(r).find("a.tl-title-anchor").eq(0);var p=n.find("span").text();var o=[c,g,l,"icon",p,q,$(r).attr("href")].join(e);b.push(o);n.attr(c,o);$(r).find("div.tl-content ul li a").each(function(u,v){var s=$(v);var t=[c,g,l,p,u,s.attr("href")].join(e);b.push(t);s.attr(c,t)})})}var m=$(".scrollimg");var l=m.find(".tabswitch-title-info>p").eq(0).html();$("ul.show_container li.fl a").each(function(p,q){var n=$(q);var o=[c,g,h[6],l,p,"",n.attr("href")].join(e);b.push(o);n.attr(c,o)})}}var a=document.createElement("div");a.style.display="none";a.id="alllatag";a.innerHTML=b.join("</br>")}catch(k){console.log("info == latag is fail"+k.message)}});
(function(window,document,$,$componentObject){$componentObject.add("platfeom_bottom_swiper",component);function component($element){$(function(){function numMulti(num1,num2){var baseNum=0;try{baseNum+=num1.toString().split(".")[1].length}catch(e){}try{baseNum+=num2.toString().split(".")[1].length}catch(e){}return Number(num1.toString().replace(".",""))*Number(num2.toString().replace(".",""))/Math.pow(10,baseNum)}function numDiv(num1,num2){var baseNum1=0,baseNum2=0;var baseNum3,baseNum4;try{baseNum1=num1.toString().split(".")[1].length}catch(e){baseNum1=0}try{baseNum2=num2.toString().split(".")[1].length}catch(e){baseNum2=0}with(Math){baseNum3=Number(num1.toString().replace(".",""));baseNum4=Number(num2.toString().replace(".",""));return(baseNum3/baseNum4)*pow(10,baseNum2-baseNum1)}}function init(){$(".show_container li").css("width",numDiv($(document.body).width(),4));$(".show_container li").css("height",0.9*$(".show_container li").width());$(".show_container").css("width",numMulti($(".show_container li").outerWidth(),$(".show_container li").length+11));$(".show_container").css("height",$(".show_container li").height());$(".container").css("height",$(".show_container li").height());$(".scrollimg").css("height",$(".show_container li").height()+119);if($(".show_container li").length==5){for(var i=0;i<5;i++){$(".show_container li").eq(i).clone().insertAfter($(".show_container li").eq($(".show_container li").length-1))}}}jQuery.extend(jQuery.easing,{easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else{if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b}else{if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b}}}}});window.onresize=function(){init()};init();var numes=0;function luneventFns(){if($(".show_container li").length>5){$(".show_container").animate({left:-$(".show_container li").outerWidth()+"px"},500,"easeOutExpo",function(){$(".show_container li").eq(0).insertAfter($(".show_container li").eq($(".show_container li").length-1));$(".show_container").css("left",0)});numes++}}var isFinish=true;$(".right_back").off().click(function(){if(!isFinish){return false}isFinish=false;if($(".show_container li").length>4){$(".show_container").animate({left:-$(".show_container li").outerWidth()*1.5+"px"},500,"easeOutExpo",function(){isFinish=true;$(".show_container li").eq(0).insertAfter($(".show_container li").eq($(".show_container li").length-1));$(".show_container").css("left",-$(".show_container li").outerWidth()/2)-30;numes++})}});$(".left_back").off().click(function(){if(!isFinish){return false}isFinish=false;if($(".show_container li").length>4){$(".show_container li").eq($(".show_container li").length-1).insertBefore($(".show_container li").eq(0));$(".show_container").css("left",-$(".show_container li").outerWidth());$(".show_container").animate({left:-$(".show_container li").outerWidth()/2-30},500,"easeOutExpo",function(){isFinish=true});numes--}});$(".shoppc_index_banner_201712011052 .left_back").hover(function(){$(this).find(".left-btn").stop(true,true).animate({opacity:0.5})},function(){$(this).find(".left-btn").animate({opacity:0.3})});$(".shoppc_index_banner_201712011052 .right_back").hover(function(){$(this).find(".right-btn").stop(true,true).animate({opacity:0.5})},function(){$(this).find(".right-btn").animate({opacity:0.3})})})}})(window,document,jQuery,window.$componentObject||{});
(function(d,a,e,c){c.add("lenovo_platfrom_topswiper",b);function b(f){var g=function(l){this.t_fisd=l.template;this.t_items=l.item;this.frame=l.frame;this.clickEvent=l.clickEvent===false?false:true;this.isCreateDot=l.isCreateDot===false?false:true;this.isAutoSlide=l.isAutoSlide===false?false:true;this.mouseOverEvent=l.mouseOverEvent===false?false:true;this.circleBtn;this.nextSpan=null;var n=this;var h=n.t_items.toArray();var i=1920;var j=n.t_items.length;var m=new Array(j);this.curIndex=0;this.sit=null;this.ratio=1920/852;this.itemHeight=i/this.ratio;this.goLeft=function(){if(m.length!=j){return false}m=[];n.t_items.each(function(o){if(n.t_items.eq(o).data("index")==(j-1)){e(this).css("left",-i);e(this).data("index",-1);n.curIndex=e(this).data("index-ori");n.dotChange(n.curIndex)}});n.t_items.each(function(p){var o=parseInt(e(this).css("left"));e(this).animate({left:o+i},function(){m.push(true);var q=e(this).data("index");e(this).data("index",++q)})})};this.goRight=function(){if(m.length!=j){return false}m=[];n.t_items.each(function(){if(e(this).data("index")==0){var p=e(this).data("index-ori");if(p==j-1){p=-1}n.curIndex=p+1;n.dotChange(n.curIndex)}var o=parseInt(e(this).css("left"));e(this).animate({left:o-i},function(){m.push(true);var q=e(this).data("index");if(q==0){e(this).data("index",j-1);e(this).css("left",(j-1)*i)}else{e(this).data("index",--q)}})})};this.dotOver=function(p){if(m.length!=j){this.nextSpan=p;return false}else{this.nextSpan=null}m=[];var q=p.index();n.dotChange(q);if(q>this.curIndex){n.t_items.each(function(){if(e(this).data("index-ori")==q){e(this).css({left:i,zIndex:99})}});n.t_items.each(function(){var r=parseInt(e(this).css("left"));e(this).animate({left:r-i},function(){m.push(true);n.curIndex=q;var s=o(e(this).data("index-ori"));e(this).data("index",s);e(this).css({left:s*i,zIndex:0});if(n.nextSpan){n.dotOver(n.nextSpan)}})})}else{if(q<this.curIndex){n.t_items.each(function(){if(e(this).data("index-ori")==q){e(this).css({left:-i,zIndex:99})}});n.t_items.each(function(){var r=parseInt(e(this).css("left"));e(this).animate({left:r+i},function(){m.push(true);n.curIndex=q;var s=o(e(this).data("index-ori"));e(this).data("index",s);e(this).css({left:s*i,zIndex:0})})})}else{m=new Array(j)}}function o(r){if(r>n.curIndex){return r-n.curIndex}else{if(r<n.curIndex){return j-(n.curIndex-r)}else{return 0}}}};this.sizeInitial=function(){n.t_fisd.width(i);n.t_fisd.height(this.itemHeight);n.frame.width(i);n.frame.height(this.itemHeight);l.arrowDiv.css("top",(n.itemHeight-l.leftBtn.height())/2);n.t_items.each(function(){var o=e(this).data("index");e(this).css({width:i,left:o*i,height:n.itemHeight})})};this.resizeFun=function(){i=e(d).width();n.itemHeight=i/n.ratio;if(i<1200){i=1200;n.itemHeight=i/n.ratio}n.sizeInitial()};this.resizeFun();e(d).resize(this.resizeFun);this.imgInitial=function(){n.t_items.each(function(o){n.t_items.eq(o).data("index",o);n.t_items.eq(o).data("index-ori",o);n.t_items.eq(o).css({left:o*i})})};var k=function(){for(var o=0;o<j;o++){if(o==0){l.circleDiv.append('<span class="selected"><i></i></span>')}else{l.circleDiv.append("<span><i></i></span>")}}return l.circleDiv.children()};this.dotChange=function(o){if(!n.isCreateDot){return false}n.circleBtn.removeClass("selected");n.circleBtn.eq(o).addClass("selected")};this.initial=function(){if(j<2){this.imgInitial();this.sizeInitial()}else{if(l.isCreateDot){this.circleBtn=k();this.circleBtn.mouseover(function(){n.dotOver(e(this))});l.circleDiv.mouseleave(function(){n.nextSpan=null})}this.imgInitial();this.sizeInitial();if(this.isAutoSlide){o()}function o(){n.sit=setInterval(n.goRight,5000)}if(this.clickEvent){l.leftBtn.click(function(){n.goLeft()});l.rightBtn.click(function(){n.goRight()});l.arrowDiv.css("top",(n.itemHeight-l.leftBtn.height())/2)}l.frame.mouseover(function(){clearInterval(n.sit)});l.frame.mouseout(function(){o()})}}};e(function(){var h=new g({template:e(".fi-slide-div"),item:e(".fi-item"),leftBtn:e(".fi-arrow-div .left"),rightBtn:e(".fi-arrow-div .right"),arrowDiv:e(".fi-arrow-div"),frame:e(".focus-img-div"),circleDiv:e(".fi-dot-div"),clickEvent:true,isCreateDot:true,isAutoSlide:true});h.initial()})}})(window,document,jQuery,window.$componentObject||{});

!function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/js/",t(t.s=18)}({18:function(e,t,i){e.exports=i(19)},19:function(e,t,i){"use strict";function n(){var e=$(this).scrollTop(),t=$("header").height();e>0&&0!=$(".devcon-nav").length?($("header").hide(),$(".devcon-nav").css("top","0"),$(".devCon").css("padding-top",t)):0!=$(".devcon-nav").length&&($("header").show(),$(".devcon-nav").css("top",t),$(".devCon").css("padding-top",2*t))}function s(){var e,t=$(this)[0].className;switch(t){case"schedule-btn":e=".agenda__section h1";break;case"instructor-btn":e=".instructors__section h1";break;case"contact-btn":e=".contact__section h1";break;case"signup-btn":e=".signup__section"}var i=0;i=$("header").length&&!$("header").is(":hidden")&&0!=$(".devcon-nav").length?2*$("header").height():$("header").height(),$("html, body").animate({scrollTop:$(e).offset().top-i},1e3)}function c(){var e=$("header").height();$("header").length&&!$("header").is(":hidden")&&0!=$(".devcon-nav").length?($(".devcon-nav").css("top",e),$(".devcon-nav").css("height",e),$(".devCon").css("padding-top",2*e)):($(".devcon-nav").css("top",0),$(".devcon-nav").css("height",e));var t=$(".architecture img").width();if(window.matchMedia("(max-width: 360px)").matches)var i=.47*t,n=.11;else if(window.matchMedia("(max-width: 700px)").matches)var i=.51*t,n=.11;else var i=t/3.17,n=.18;var s=parseInt($(".architecture").css("padding-right")),c=parseInt($(".architecture").css("padding-left")),o=parseInt($(".architecture").css("padding-top"));parseInt($(".architecture").css("padding-bottom"));$(".head-node").css("top",o-$(".head-node").height()-2*parseInt($(".head-node").css("padding-top"))),$(".head-node").css("margin-left",-($(".head-node").width()+2*parseInt($(".head-node").css("padding-left")))/2),$(".developer-group").css("top",i*n*2+o),$(".developer-group").css("margin-left",-($(".developer-group").width()+2*parseInt($(".developer-group").css("padding-left")))/2),$(".pmc").css("top",i*n*2+o),$(".pmc").css("left",c-($(".pmc").width()+parseInt($(".pmc").css("padding-left"))+parseInt($(".pmc").css("padding-right")))/2),$(".committee").css("top",i*n*2+o),$(".committee").css("margin-right",s-($(".committee").width()+parseInt($(".committee").css("padding-left"))+parseInt($(".committee").css("padding-right")))/2),$(".maintainer").css("top",o+i),$(".maintainer").css("margin-left",c-($(".maintainer").width()+parseInt($(".maintainer").css("padding-left"))+parseInt($(".maintainer").css("padding-right")))/2),$(".committer").css("top",o+i),$(".committer").css("margin-left",c+t/3-($(".committer").width()+parseInt($(".committer").css("padding-left"))+parseInt($(".committer").css("padding-right")))/2),$(".contributor").css("top",o+i),$(".contributor").css("margin-right",s+t/3-($(".contributor").width()+parseInt($(".contributor").css("padding-left"))+parseInt($(".contributor").css("padding-right")))/2),$(".member").css("top",o+i),$(".member").css("margin-right",s-($(".member").width()+parseInt($(".member").css("padding-left"))+parseInt($(".member").css("padding-right")))/2)}function o(){"block"==$(".guide-content").css("display")&&($(".subtitle-guide").removeClass("subtitle-selected-bg"),$(".guide-content").hide(),$("#guide-collapse")[0].innerText="+"),"block"==$(".pr-content").css("display")?($(".subtitle-pr").removeClass("subtitle-selected-bg"),$(".pr-content").hide(),$("#pr-collapse")[0].innerText="+"):($(".subtitle-pr").addClass("subtitle-selected-bg"),$(".pr-content").show(),$("#pr-collapse")[0].innerText="-")}function a(){"block"==$(".pr-content").css("display")&&($(".subtitle-pr").removeClass("subtitle-selected-bg"),$(".pr-content").hide(),$("#pr-collapse")[0].innerText="+"),"block"==$(".guide-content").css("display")?($(".subtitle-guide").removeClass("subtitle-selected-bg"),$(".guide-content").hide(),$("#guide-collapse")[0].innerText="+"):($(".subtitle-guide").addClass("subtitle-selected-bg"),$(".guide-content").show(),$("#guide-collapse")[0].innerText="-")}function d(){$(".swiper-slide").each(function(){var e=$(this),t=e.find(".meetup-date")[0];new Date(t.innerText).setHours(0,0,0,0)-18e6<new Date&&"活动回顾"!==e.find(".meetup-register")[0].innerText&&(e.find(".meetup-register").text("报名结束"),e.find(".meetup-register").addClass("unclickable-btn"))})}$(document).ready(function(){var e,t,i=decodeURIComponent(location.hash);if(window.matchMedia("(max-width: 500px)").matches?(e=60,t=60):(e=250,t=60),i&&("#contributor"==i?(console.log("contributor",e),$("html, body").animate({scrollTop:$(".contributor__detail").offset().top-e},1e3)):"#committer"==i?(console.log("committer",e),$("html, body").animate({scrollTop:$(".committer__detail").offset().top-e},1e3)):"#architecture"==i&&(console.log("architecture",t),$("html, body").animate({scrollTop:$(".organization__section .section-title").offset().top-t},1e3))),$(".meetup-landing-page-banner").length&&d(),$("header").length&&0!=$(".devcon-nav").length){var r=$("header").height();$(".devcon-nav").css("top",r),$(".devcon-nav").css("height",r),$(".devCon").css("padding-top",2*r)}$(".detail-block").hide(),c(),$(window).scroll(n),$(window).resize(c),$(".schedule-btn").click(s),$(".instructor-btn").click(s),$(".contact-btn").click(s),$(".signup-btn").click(s),$(".instructor").click(function(){if(window.matchMedia("(max-width: 1024px)").matches){$(".intro").css("opacity","0");$(this).find(".intro").css("opacity","1")}}),$(".team").click(function(){if(window.matchMedia("(max-width: 1024px)").matches){$(".middle-overlay").css("opacity","0"),$(".middle-cover").css("opacity","1"),$(".award-info").css("opacity","1");$(this).find(".middle-overlay").css("opacity","1"),$(this).find(".middle-cover, .award-info").css("opacity",0)}}),$(".project").click(function(){if(window.matchMedia("(max-width: 1024px)").matches){$(".project-desc").css("opacity","0");$(this).find(".project-desc").css("opacity","1")}}),$(".section-burger").click(function(){"block"==$(".dropdown-btns").css("display")?$(".dropdown-btns").css("display","none"):$(".dropdown-btns").css("display","block")});var l;$(".agenda__table .collapsable").click(function(){window.matchMedia("(min-width: 550px)").matches&&(l&&(l.removeClass("selected-bg"),l.children()[3].innerText="+"),$(this).addClass("selected-bg"),"none"==$(this).next()[0].style.display?($(".detail-block").hide(),$(this).next().show(),$(this).children("td")[3].innerText="-"):($(this).next().hide(),$(this).removeClass("selected-bg"),$(this).children("td")[3].innerText="+"),l=$(this))}),$(".subtitle-pr").click(o),$(".subtitle-guide").click(a),$(".committer").click(function(){$("html, body").animate({scrollTop:$(".committer__detail").offset().top-80},1e3)}),$(".contributor").click(function(){$("html, body").animate({scrollTop:$(".contributor__detail").offset().top-70},1e3)})})}});
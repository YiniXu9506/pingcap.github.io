!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/js/",t(t.s=20)}({20:function(e,t,n){e.exports=n(21)},21:function(e,t,n){"use strict";function i(){window.matchMedia("(max-width: 700px)").matches?$(".signable img").attr("src","https://download.pingcap.com/images/community/activities/meetup.svg"):$(".signable img").attr("src","https://download.pingcap.com/images/community/activities/meetup-active-img.jpg")}function a(e,t){$(".cld-days").hide(),$(".cld-labels").hide(),$(".event-list").show();for(var n=0;n<e.length;n++){var i=document.createElement("div");i.className="event",i.innerHTML='<a href="'+t[n]+'">'+e[n]+"</a>",$(".event-list").append(i)}}$(document).ready(function(){var e=[];$(".feature-activity").length&&(console.log("has feature activity"),$(".feature-activity").each(function(){var t=$(this)[0].children[1].innerText,n=new Date(t).getFullYear(),i=new Date(t).getMonth()+1,a=new Date(t).getDate(),c=$(this)[0].children[0].innerText+", "+$(this)[0].children[3].innerText;e.push({Title:c,Date:new Date(n,i,a),Link:$(this)[0].children[2].innerText})}));var t={test:"testme"},n=document.getElementById("calendar");calendar(n,e,t),i(),$(window).resize(i);var c,o=decodeURIComponent(location.hash);window.matchMedia("(max-width: 500px)").matches?(60,c=60):(250,c=60),o&&"#activities"==o&&(console.log("activities",c),$("html, body").animate({scrollTop:$(".activity__section").offset().top-c},1e3)),$(".eventday").click(function(){for(var e=$(this),t=[],n=[],i=1;i<e[0].childNodes.length;i++)t.push(e[0].childNodes[i].innerText),n.push(e[0].childNodes[i].childNodes[0].href);a(t,n)}),$(".close-icon").click(function(){$(".cld-days").show(),$(".cld-labels").show(),$(".event-list").hide(),$(".event").remove()})})}});
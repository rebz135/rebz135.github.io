﻿require=function e(i,t,a){function n(r,u){if(!t[r]){if(!i[r]){var d="function"==typeof require&&require;if(!u&&d)return d(r,!0);if(o)return o(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var l=t[r]={exports:{}};i[r][0].call(l.exports,function(e){var t=i[r][1][e];return n(t?t:e)},l,l.exports,e,i,t,a)}return t[r].exports}for(var o="function"==typeof require&&require,r=0;r<a.length;r++)n(a[r]);return n}({2192:[function(e,i,t){var a=e("../component/layout/default-page-layout.js"),n=e("../component/forgot-password/view"),o=a.extend({ui:{container:".forgetpassword"},onRender:function(){new n({el:this.ui.container}).render()}});new o({el:jQuery(".global-wrapper")}).render()},{"../component/forgot-password/view":835,"../component/layout/default-page-layout.js":1082}],835:[function(e,i,t){var a=(e("underscore"),e("backbone.marionette")),n=e("../ui/validator"),o=e("../ui/util"),r=e("../../../config/host"),u=e("./model");i.exports=ForgetPasswordView=a.ItemView.extend({template:!1,ui:{menuWrapper:".forgetpassword",emailInput:"[data-bind='email']",img:"[data-feedback='img']",voice:"[data-feedback='voice']",item_img:"[data-item='img']"},initialize:function(){var e=this;e.IF_CLICK_AUDIO=!0,e.audio=new Audio},model:new u,onRender:function(){n.bind(this)},events:{"click #send-mail":"sendEmail","keyup .input-box>input":"sendEmailByEnter","click @ui.voice":function(){this.IF_CLICK_AUDIO&&this.autoPlay()},"click @ui.img":function(){var e=r.getURL("api","captcha/image?r="+Math.random());jQuery(".code-bottom .captcha-img").each(function(i,t){jQuery(t).attr("src",e)})}},autoPlay:function(){var e=this;e.IF_CLICK_AUDIO=!1,e.audio.setAttribute("src",r.getURL("api","captcha/voice?r="+Math.random())),e.audio.load(),e.audio.play(),e.audio.oncanplay=function(){e.audio.play()},e.audio.onended=function(){e.IF_CLICK_AUDIO=!0}},sendEmail:function(){var e=this.ui.emailInput.val();this.ui.emailInput.val(jQuery.trim(e));var i=this.trigger("save:form");this.model.isValid(!0)&&o.loading({container:i.el,errortimeout:1e4,promise:i.model.fetch({data:i.model.attributes}).then(function(){jQuery(".sendmail-input").hide(),jQuery(".sentmail").show()})})},sendEmailByEnter:function(e){var i=this,t=this.ui.emailInput.val();32===e.keyCode&&i.ui.emailInput.val(jQuery.trim(t)),13===e.keyCode&&(e.preventDefault(),i.sendEmail())}})},{"../../../config/host":45,"../ui/util":2122,"../ui/validator":2123,"./model":834,"backbone.marionette":6,underscore:42}],834:[function(e,i,t){var a=(e("underscore"),e("backbone")),n=e("../ui/util");i.exports=a.Model.extend({url:n.getURL("api","account/forget-pwd"),defaults:{email:""},validation:{email:{required:!0,pattern:"email"},captcha:{required:!0}}})},{"../ui/util":2122,backbone:8,underscore:42}]},{},[2192]);
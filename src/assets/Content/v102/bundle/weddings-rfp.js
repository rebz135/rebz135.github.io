﻿require=function e(r,n,t){function i(o,d){if(!n[o]){if(!r[o]){var u="function"==typeof require&&require;if(!d&&u)return u(o,!0);if(a)return a(o,!0);var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}var l=n[o]={exports:{}};r[o][0].call(l.exports,function(e){var n=r[o][1][e];return i(n?n:e)},l,l.exports,e,r,n,t)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<t.length;o++)i(t[o]);return i}({2280:[function(e,r,n){var t=e("../component/layout/default-page-layout.js"),i=e("../component/weddings/rfp/view.js"),a=t.extend({ui:{container:".wedding-request-proposal"},onRender:function(){new i({el:this.ui.container}).render()}});!function(e){new a({el:e(".global-wrapper")}).render()}(jQuery)},{"../component/layout/default-page-layout.js":1082,"../component/weddings/rfp/view.js":2155}],2155:[function(e,r,n){var t=e("./weddings-model"),i=e("./mettings-model"),a=e("./base-view");r.exports=a.extend({className:"request-proposal wedding-request-proposal",initialize:function(){var e=this;e.weddingid=e.$el.attr("data-id"),window.isMeeting?e.model=new i({id:e.weddingid}):e.model=new t({id:e.weddingid}),e.onInitialize()}})},{"./base-view":2153,"./mettings-model":2154,"./weddings-model":2156}],2156:[function(e,r,n){var t=(e("underscore"),e("../../../../config/host.js")),i=e("backbone"),a=e("../../ui/validator.js"),o=a.latinRegex3,d=a.latinNumericsSymbols;r.exports=i.Model.extend({url:t.getURL("api","request/proposal"),defaults:{id:"",title:"",first_name:"",last_name:"",email:"",phone:"",number_of_rooms:0,comments:"",signup_special_offers:!1,designation:"",attendees:"",preferred_venue:"",venue_hotel:"",venue_city:"",venue_country:"",captcha:""},validation:{captcha:{required:!0},title:{required:!0},first_name:{required:!0,pattern:o,maxLength:50},last_name:{required:!0,pattern:o,maxLength:50},email:{required:!0,pattern:"email"},phone:{required:!0,pattern:/^\+\d+$/,maxLength:15},attendees:{required:!0},designation:{required:!0},venue_country:{required:!0},venue_hotel:{required:!0},venue_city:{required:!0},comments:{required:!1,pattern:d}}})},{"../../../../config/host.js":45,"../../ui/validator.js":2123,backbone:8,underscore:42}],2154:[function(e,r,n){var t=(e("underscore"),e("../../../../config/host.js")),i=e("backbone"),a=e("../../ui/validator.js"),o=a.latinRegex3;a.latinNumericsSymbols,r.exports=i.Model.extend({url:t.getURL("api","request/proposal"),defaults:{id:"",title:"",first_name:"",last_name:"",email:"",phone:"",number_of_rooms:0,comments:"",signup_special_offers:!1,company_address:"",company_name:"",designation:"",industry:"",attendees:"",eventsetup:"",preferred_venue:"",venue_hotel:"",venue_city:"",venue_country:"",captcha:""},validation:{captcha:{required:!0},venue_country:{required:!0},venue_hotel:{required:!0},venue_city:{required:!0},eventsetup:{required:!0},attendees:{required:!0},industry:{required:!0},company_address:{required:!0},company_name:{required:!0},designation:{required:!0},title:{required:!0},first_name:{required:!0,pattern:o,maxLength:50},last_name:{required:!0,pattern:o,maxLength:50},email:{required:!0,pattern:"email"},phone:{required:!0,pattern:/^\+\d+$/,maxLength:15}}})},{"../../../../config/host.js":45,"../../ui/validator.js":2123,backbone:8,underscore:42}]},{},[2280]);
﻿require=function e(t,i,o){function n(a,s){if(!i[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var c=i[a]={exports:{}};t[a][0].call(c.exports,function(e){var i=t[a][1][e];return n(i?i:e)},c,c.exports,e,t,i,o)}return i[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)n(o[a]);return n}({2250:[function(e,t,i){var o=e("../component/layout/default-page-layout"),n=e("../component/offers-details-2.0/view"),r=e("../component/count-down/count-down"),a=o.extend({ui:{mainWrapper:".main-wrapper .offers2"},onRender:function(){this.onDestroy(),this.ui.mainWrapper.length&&(this._mainView=new n({el:this.ui.mainWrapper.get(0)}).render())},onDestroy:function(){this._mainView&&(this._mainView.destroy(),this._mainView=null)}});new a({el:jQuery(".global-wrapper").get(0)}).render(),window.offerData.id&&jQuery("#count-down").length&&new r({el:"#count-down",params:window.offerData.id,type:"hotel",apiAddress:"offer"}).render()},{"../component/count-down/count-down":768,"../component/layout/default-page-layout":1082,"../component/offers-details-2.0/view":1553}],1553:[function(e,t,i){function o(e){return"hotel"===e.hero.level?a.find(e.data.locations.list,{id:e.hero.locationid}):e.hero}function n(e){var t,i=r(e.data.hotels);return t="hotel"===e.hero.level?a.find(i,{id:e.hero.id}):i[0],{array:i,allah:t,_gbw_hotel_gallery:!0}}function r(e){return a.isArray(e)?a.map(e,function(e){return a.clone(e)}):a.clone(e)}var a=e("underscore"),s=e("backbone"),l=e("backbone.marionette"),d=e("./01-sidebar/view"),c=e("./02-participating-hotels/view"),u=e("./03-featured-offers/view"),h=(e("./04-gallery/view"),e("../booking-2.1/05-loading/view")),f=e("./05-authority/view"),p=e("./04-gallery-millennium-for-business/view"),_=e("../offers-2.0/02-toolbar/01-drop-down-menu/02-nation/waterfall"),g=e("./states");t.exports=l.LayoutView.extend({template:!1,ui:{showmore:".offers2__details-content-graphic + .nk2-tile-show-more button",sidebar:".offers2__details-sidebar",condition:".offers2__details-condition ul",partake:".offers2__partake",feature:".offers2__feature"},events:{"click @ui.showmore":function(e){var t=jQuery(e.currentTarget).closest(".nk2-tile-show-more");t.prev().children().removeClass("nk2-pc-visible-list-item"),t.hide()}},regions:{gallery:".offers2__gallery"},initialize:function(){this.options.rootState=g},onRender:function(){var e=this,t=e.options.rootState;e.onDestroy(),e.listenTo(t,"hyperlinkClick",e.__hyperlinkClick),e.listenTo(t,"mapMarkerClick",e.__mapMarkerClick),e.listenTo(t,"showSidebarView",e.__showSidebarView),e.listenTo(t,"hideGalleryView",e.__hideGalleryView),e.listenTo(t,"showLoadingView",e.__showLoadingView),e.listenTo(t,"hideLoadingView",e.__hideLoadingView),e.listenTo(t,"showAuthorityView",e.__showAuthorityView),e.listenTo(t,"hideAuthorityView",e.__hideAuthorityView),e.ui.sidebar.length&&t.trigger("loadSidebarData"),e.ui.partake.length&&e.__showPartakeView(),e.ui.feature.length&&e.__showFeatureView(),e.ui.condition.length&&e.__showWaterfallTerms()},onDestroy:function(){this._sidebarView&&(this._sidebarView.destroy(),this._sidebarView=null),this._partakeView&&(this._partakeView.destroy(),this._partakeView=null),this._featureView&&(this._featureView.destroy(),this._featureView=null),this.__delWaterfallHandle(),this.__hideLoadingView()},__addWaterfallHandle:function(){var e=this;e.__delWaterfallHandle(),e._waterfallHandle=a.debounce(function(){e.__showWaterfallTerms()},100),jQuery(window).on("resize",e._waterfallHandle)},__delWaterfallHandle:function(){var e=this;e._waterfallHandle&&(jQuery(window).off("resize",e._waterfallHandle),e._waterfallHandle=null)},__showWaterfallTerms:function(){var e=this;new _({container:e.ui.condition.get(0),colCount:2}),e.ui.condition.css("overflow","visible"),e.__addWaterfallHandle()},__hyperlinkClick:function(e){this.__showGalleryView(e,!1)},__mapMarkerClick:function(e){this.__showGalleryView(e,!0)},__hideGalleryView:function(){this.getRegion("gallery").empty()},__showGalleryView:function(e,t){var i=this,r=i.options.rootState,l=n(e),d=null;d=new p({model:new s.Model(l),rootState:r}),d.listenTo(r,"resetQueryParam",function(t){var i=a.find(e.data.hotels,{hotelid:t.code});i&&(r.trigger("changeRedirectParams",{hotel:i}),jQuery(".offers2__details-sidebar-redirect").trigger("click"))}),d.on("destroy",function(){t&&i.options.rootState.trigger("changeSelectedValue",o(e))}),i.getRegion("gallery").show(d)},__showSidebarView:function(e){this._sidebarView=new d({model:new s.Model(e),rootState:this.options.rootState,el:this.ui.sidebar.get(-1)}).render()},__showPartakeView:function(){this._partakeView=new c({preventHyperlink:!0,rootState:this.options.rootState,el:this.ui.partake.get(-1)}).render()},__showFeatureView:function(){this._featureView=new u({rootState:this.options.rootState,el:this.ui.feature.get(-1)}).render()},__showLoadingView:function(){this._loadingView=new h,jQuery("body").append(this._loadingView.render().el)},__hideLoadingView:function(){this._loadingView&&(this._loadingView.destroy(),this._loadingView=null)},__showAuthorityView:function(e){this.__authorityView=new f(e),jQuery("body").append(this.__authorityView.render().el)},__hideAuthorityView:function(){this.__authorityView&&(this.__authorityView.destroy(),this.__authorityView=null)}})},{"../booking-2.1/05-loading/view":335,"../offers-2.0/02-toolbar/01-drop-down-menu/02-nation/waterfall":1502,"./01-sidebar/view":1542,"./02-participating-hotels/view":1544,"./03-featured-offers/view":1545,"./04-gallery-millennium-for-business/view":1547,"./04-gallery/view":1548,"./05-authority/view":1550,"./states":1551,backbone:8,"backbone.marionette":6,underscore:42}],1551:[function(e,t,i){function o(e,t){return String(e).toLowerCase()===t.toLowerCase()}var n=e("underscore"),r=e("backbone"),a=e("./stores"),s={changeViewStyle:function(e){o(e.viewStyle,"tile")?a.getHotels({}).then(function(e){l.trigger("showTileView",e)}):o(e.viewStyle,"list")?a.getHotels({}).then(function(t){o(e.listStyle,"waterfall")?l.trigger("showListWaterfallView",t):l.trigger("showListDirectoryView",t)}):a.getHotels({}).then(function(e){l.trigger("showMapsView",e)})},getFeatureOffers:function(e){a.getFeatureOffers(e).then(function(e){l.trigger("showBottomPanel",e)})},loadSidebarData:function(e){l.trigger("showLoadingView"),a.getOffersDetails(e).then(function(e){l.trigger("hideLoadingView"),l.trigger("showSidebarView",e)})},verifyRedirectParams:function(e){l.trigger("showLoadingView"),a.verifyBusinessMember().then(function(t){t.success?a.verifyRedirectParams(e).then(function(e){l.trigger("hideLoadingView"),l.trigger("verifyRedirectResult",e)}):(l.trigger("hideLoadingView"),l.trigger("showAuthorityView",n.assign(a.__getRedirectURL(e),t)))})}},l=n.extend({listenEvent:function(e){return this.on(e,function(){s[e]&&s[e].apply(this,arguments)})}},r.Events);t.exports=l.listenEvent("loadSidebarData").listenEvent("changeViewStyle").listenEvent("getFeatureOffers").listenEvent("verifyRedirectParams")},{"./stores":1552,backbone:8,underscore:42}],1552:[function(e,t,i){function o(e){return g.object(g.filter(g.map(e.slice(1).split("&"),function(e){return g.map(e.split("="),function(e){return decodeURIComponent(e.replace("+","%20"))})}),function(e){return 2===e.length}))}function n(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function r(e,t,i){var r,s,l=g.assign(o(location.hash||""),o(location.search||"")),d=n(new Date,0),c=l.checkin||y.getParameterByName("checkin",t),u=l.checkout||y.getParameterByName("checkout",t);c?(r=a(w(c,k).toDate(),d,7),s=a(w(u,k).toDate(),n(r,e),0)):(r=n(d,7),s=n(r,e));var h=null;return 1==i.length?h=i[0]:l.hotel?h=g.find(i,{key:l.hotel}):l.hotelid&&(h=g.find(i,{hotelid:+l.hotelid})),{hotel:h,adultocc:+(l.adults||y.getParameterByName("adults",t))||1,childocc:+(l.children||y.getParameterByName("children",t))||0,prev:r,next:s,today:n(b?r:d,0)}}function a(e,t,i){return e>=t?e:n(t,i)}function s(e){return e.then(function(e){return e})}function l(e){var t=jQuery.Deferred();return setTimeout(function(){t.reject(e)}),t.promise()}function d(e){var t=jQuery.Deferred();return setTimeout(function(){t.resolve(e)}),t.promise()}function c(e){for(var t={},i=[],o=0,n=e.length;n>o;o++){var r=e[o];r.children=[],t[r.id]=r}for(var o=0,n=e.length;n>o;o++){var r=e[o];if(r.parentid){var a=t[r.parentid];if(a){a.children.push(r);continue}}r.parentid="",i.push(r)}return i}function u(e,t){return e.trim().toUpperCase()===t.trim().toUpperCase()}var h,f,p,_,g=e("underscore"),w=e("moment"),m=e("../hotels-2.2/stores"),v=e("../../../config/host"),y=e("../ui/util"),b=!!y.ismobile(),V=!v.host||v.host===location.protocol+"//"+location.host,k="YYYY-MM-DD";t.exports={getHotels:function(){return h?d(h):window.offerData?p||(p=jQuery.when(m.getHotels(),s(jQuery.getJSON(v.getURL("api","offers/prices/"+encodeURIComponent(window.offerData.id)))),s(jQuery.getJSON(v.getURL("api","offers/featurehotels2/"+encodeURIComponent(window.offerData.id))))).then(function(e,t,i){var o=g.map(i,function(i){return g.assign(i,g.find(e.hotels,{id:i.id}),{prices:g.find(t,{destinationid:i.id}),hotelurl:i.url})}),n=g.uniq(g.flatten(g.map(o,function(t){for(var i=[],o=g.find(e.locations.list,{id:t.locationid});o;)i.push(o),o=g.find(e.locations.list,{id:o.parentid});return i})));return h={locations:{list:n,tree:c(n)},regions:g.filter(e.regions,function(e){return n.indexOf(e)>=0}),countries:g.filter(e.countries,function(e){return n.indexOf(e)>=0}),cities:g.filter(e.cities,function(e){return n.indexOf(e)>=0}),hotels:o,collections:e.collections}})):l()},getOffersDetails:function(){return f?d(f):window.offerData?_||(_=this.getHotels().then(function(e){var t=Math.max(window.offerData.los||0,1),i=e.hotels&&e.hotels[0]&&e.hotels[0].prices&&e.hotels[0].prices.url;return f=g.assign({},window.offerData,{redirectParams:r(t,i,e.hotels),defaultsParams:r(t,i,e.hotels),locations:e.locations,hotels:e.hotels,cities:g.uniq(g.flatten(g.map(e.hotels,function(t){return g.where(e.locations.list,{id:t.locationid})})))})})):l()},getFeatureOffers:function(){return d(g.map(window.bottomFeaturedOffers||[],function(e){return g.assign({imageUrl:e.thumbnail,imageAnchor:e.image_anchor,feature_offers_title:i18n.t("offers.similar_offers")},e)}))},verifyRedirectParams:function(e){var t=this.__getRedirectURL(e),i=t.queryArgs,o=i.promocode;return o?jQuery.when(this.__getCategoryList(i),this.__getPromoCodeInf(i)).then(function(e,i){if(e.success&&i.success){var n=i.data||[];if(!n.length)return t;var r=g.compact(g.flatten(g.map(e.data,function(e){return g.flatten(g.map(e.roomtypelist,function(e){return e.rateplanlist||[]}))}))),a=g.filter(r,function(e){return u(e.accesscode||"",o||"")});t.canRedirect=!1,r.length&&n.forEach(function(e){g.find(a,{rateCode:e.ratecode})&&(t.canRedirect=!0),e.loyaltyappliableflag||(t.seeOtherRates=!0)})}return t}):jQuery.when(t)},verifyBusinessMember:function(){if(window.offerData.isforbusiness)return jQuery.getJSON(v.getURL("api","account/profile")).then(function(e){return{logged:!!e.id,success:!!(e&&e.business&&e.business.activated)}},function(){return{logged:!1,success:!1}});var e=jQuery.Deferred();return e.resolve({success:!0}),e.promise()},__getCategoryList:function(e){return jQuery.ajax({url:v.getURL("api","room/getcategorylist"),data:{hotelcode:e.hotelcode,adults:e.adults,children:e.children,checkin:e.checkin,checkout:e.checkout,promo:e.promocode,groupcode:e.groupcode},cache:!1,headers:V?{"Offer-PromoCode":e.promocode,"Offer-GroupCode":e.groupcode}:void 0,dataType:"json",method:"GET"}).then(function(e){return e},function(){return d({success:!1})})},__getPromoCodeInf:function(e){return jQuery.getJSON(v.getURL("mapi","PromoCode/list"),{hotelid:e.hotelcode,promocode:e.promocode}).then(function(e){return e},function(){return d({success:!1})})},__getRedirectURL:function(e){var t=e.hotel.prices&&e.hotel.prices.url||"",i=y.getParameterByName("promo",t)||"",o=y.getParameterByName("groupcode",t)||"",n={hotelcode:e.hotel.hotelid,checkin:w(e.prev).format(k),checkout:w(e.next).format(k),discountcode:"",groupcode:o,promocode:i,adults:e.adultocc,children:e.childocc,rooms:1,AAA:!1,AARP:!1,GOV:!1,Accessible:!1};e.hotel.showRatePlanTab&&(n.viewrates=String(e.hotel.showRatePlanTab).toLowerCase());var r="";return r=window.offerData.isforbusiness||window.tobusiness?"/"+v.getLanguage()+"/business/bookings/select-rooms/?"+jQuery.param(n):"/"+v.getLanguage()+"/bookings/?"+jQuery.param(n),{canRedirect:!0,redirectURL:r,queryArgs:n}}}},{"../../../config/host":45,"../hotels-2.2/stores":1057,"../ui/util":2122,moment:16,underscore:42}],1550:[function(e,t,i){var o=e("backbone.marionette");t.exports=o.ItemView.extend({template:Handlebars.compile(e("./template.hbs")),ui:{signup:"a.m4b-b1-btn-reset",signin:"a.m4b-b1-btn-query",close:"button.m4b-b1-btn-query,.m4b-booking-addons-exit"},events:{click:function(){this.destroy()},"click .m4b-booking-addons":function(e){e.stopPropagation()},"click @ui.close":function(){this.destroy()},"click @ui.signup":function(){var e="/business/account/register/",t=jQuery("html").attr("lang");t&&(e="/"+t+e),location.href=e+"?redirect="+encodeURIComponent(location.href)},"click @ui.signin":function(e){e.stopPropagation(),jQuery(".show-user:visible").trigger("click"),this.destroy()}},serializeData:function(){return{logged:this.options.logged}}})},{"./template.hbs":1549,"backbone.marionette":6}],1549:[function(e,t,i){t.exports='<div class="m4b-gallery auto-location">\r\n    <div class="m4b-booking-addons" style="width: 635px;">\r\n        <div class="m4b-booking-addons-exit">\r\n            <span class="icon-icon_B017"></span>\r\n        </div>\r\n        <div class="m4b-booking-addons-head" style="font-size: 18px">\r\n            {{#if logged}}\r\n                Administrator Access\r\n            {{else}}\r\n                Identification Required\r\n            {{/if}}\r\n        </div>\r\n        <div class="m4b-booking-member-scroll" style="padding: 16px 16px 24px; font-size: 14px; line-height: 22px; color: #000;">\r\n            {{#if logged}}\r\n                <p>To book this offer, please reach out to your Millennium for Business Administrator for more details.</p>\r\n            {{else}}\r\n                <p>Take advantage of our exceptional offers by becoming a Millennium for Business member. Register now and book.</p>\r\n                <p style="margin-top: 30px; font-style: italic; font-weight: 500;">Please note that only Millennium for Business admin can book this offer.</p>\r\n            {{/if}}\r\n        </div>\r\n        <div class="m4b-booking-addons-bottom">\r\n            <hr class="m4b-line">\r\n            <div class="m4b-b1-block-justify-layer-3">\r\n                {{#if logged}}\r\n                    <button type="button" class="m4b-b1-btn-query" style="padding-left: 65px; padding-right: 65px;">{{ local "general.close" }}</button>\r\n                {{else}}\r\n                    <a class="m4b-b1-btn-reset" href="javascript:void(0);">{{ local "form.sign_up_now" }}</a>\r\n                    <a class="m4b-b1-btn-query" href="javascript:void(0);">{{ local "login.sign_in" }}</a>\r\n                {{/if}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'},{}],1548:[function(e,t,i){var o=e("../../booking-2.1/03-gallery/view"),n=e("../../ui/util");t.exports=o.extend({initialize:function(){var e=this,t=e.model.toJSON(),i=e.options.rootState;e.options.rootState={trigger:function(){i.trigger.apply(i,arguments)},isLogin:function(){return n.isloggedin()},getMaxChildAge:function(){return t.allah&&t.allah.maxchildage||11}}}})},{"../../booking-2.1/03-gallery/view":308,"../../ui/util":2122}],1547:[function(e,t,i){function o(e){for(var t=[],i=null,o=0;o<e.array.length;o++){var n=e.array[o],r={hotelinfo:{hotelid:n.hotelid,name:n.name,close2locations:n.close2locations,contact:{address1:n.address,address2:"",telphone:n.telphone,email:n.email},reevoo:n.reevoo,shortdescription:n.description,amenitielist:n.amenities||[],url:n.url,bookingurl:"javascript:void(0);"},get vscapeimage(){return l[this.hotelinfo.hotelid]},set vscapeimage(e){l[this.hotelinfo.hotelid]=e}};n===e.allah&&(i=r),t.push(r)}return i=i||t[0],{list:t,hero:i}}var n=(e("underscore"),e("backbone.marionette")),r=e("../../millennium-for-business/widget/ui/hotel-gallery/view"),a=e("../../millennium-for-business/helper"),s=e("./host"),l={};t.exports=n.ItemView.extend({template:!1,className:"m4b-gallery",events:{click:function(){this.destroy()}},onBeforeRender:function(){this.__destroyM4BHotelGalleryIndividual()},onDestroy:function(){this.__destroyM4BHotelGalleryIndividual()},onRender:function(){var e=o(this.model.toJSON());this.__m4bHotelGalleryIndividual=a.render(a.createElement(r,{list:e.list,hero:e.hero,host:s,onClose:jQuery.proxy(this.__m4bHotelGalleryIndividualDestroy,this),onBooking:jQuery.proxy(this.__m4bHotelGalleryBookingBtnClicked,this)}),this.el,!0)},__m4bHotelGalleryBookingBtnClicked:function(e){this.options.rootState.trigger("resetQueryParam",{code:e.detail.hotelinfo.hotelid,type:"hotel"}),this.options.rootState.trigger("hideGalleryView")},__m4bHotelGalleryIndividualDestroy:function(){this.destroy()},__destroyM4BHotelGalleryIndividual:function(){this.__m4bHotelGalleryIndividual&&(this.__m4bHotelGalleryIndividual.dispose(),this.__m4bHotelGalleryIndividual=null)}})},{"../../millennium-for-business/helper":1212,"../../millennium-for-business/widget/ui/hotel-gallery/view":1376,"./host":1546,"backbone.marionette":6,underscore:42}],1546:[function(e,t,i){function o(e,t){return e.indexOf("?")>0?e+"&"+jQuery.param(t):e+"?"+jQuery.param(t)}var n=e("../../../../config/host"),r=e("elfjs").Promise;t.exports={loadVscapes:function(e){return r.ajax({url:o(n.getURL("api","data/vscapeimage"),{propertyid:e})}).then(function(e){return e.json()})}}},{"../../../../config/host":45,elfjs:10}],1545:[function(e,t,i){t.exports=e("../../offers-2.0/04-feature/view")},{"../../offers-2.0/04-feature/view":1520}],1544:[function(e,t,i){var o=e("backbone"),n=e("../../hotels-2.2/view"),r=e("./01-maps/view");t.exports=n.extend({initialize:function(){},__showMapsView:function(e){this.getRegion("views").empty({preventDestroy:!0}),this.getRegion("views").show(this._mapsView||(this._mapsView=new r({model:new o.Model(e),rootState:this.options.rootState})))}})},{"../../hotels-2.2/view":1058,"./01-maps/view":1543,backbone:8}],1543:[function(e,t,i){var o=(e("underscore"),e("../../../hotels-2.2/03-views/03-maps/view"));t.exports=o.extend({initialize:function(){this._selected=null;var e=this.model.toJSON();1===e.locations.tree.length&&(this._selected=this.__selectSingleLocation(e.locations.tree[0]))},__selectSingleLocation:function(e){return e.children&&1===e.children.length?this.__selectSingleLocation(e.children[0]):e},__changeSelectedValue:function(e){var t=this;t._selected=e,t.__renderFilterView(),t.__renderGoogleView(),e&&"hotel"===e.level&&t.__renderGalleryView()},__renderWindowView:function(){},__renderGalleryView:function(){var e=this._selected;e&&"hotel"===e.level&&this.options.rootState.trigger("mapMarkerClick",{hero:e,data:this.model.toJSON()})}})},{"../../../hotels-2.2/03-views/03-maps/view":1055,underscore:42}],1542:[function(e,t,i){var o=e("moment"),n=e("underscore"),r=e("backbone.marionette"),a=e("./01-dropdown/view"),s=e("./02-calendar/view"),l=e("./03-occupier/view"),d=e("../../ui/util"),c="DD MMM",u="YYYY-MM-DD",h=Handlebars.compile('{{local "offers.invalid_alert"}}'),f=Handlebars.compile('{{local "offers.invalid_alert"}} {{local "offers.see_other_rates" redirectURL}}');t.exports=r.LayoutView.extend({template:!1,ui:{expanded:".offers2__details-sidebar-title",shutdown:".offers2__details-sidebar-shutdown",dropdown:".offers2__details-sidebar-dropdown-input",calendar:".offers2__details-sidebar-calendar-input",occupier:".offers2__details-sidebar-occupier-input",dropdown_text:".offers2__details-sidebar-dropdown-input-text",calendar_prev:".offers2__details-sidebar-calendar-input-prev",calendar_next:".offers2__details-sidebar-calendar-input-next",occupier_text:".offers2__details-sidebar-occupier-input-text",clearall:".offers2__details-sidebar-clearall",redirect:".offers2__details-sidebar-redirect",error:".offers2__details-sidebar-error",textarea:"[data-sect='textfield-input']"},regions:{"dropdown-popup":".offers2__details-sidebar-dropdown-popup","calendar-popup":".offers2__details-sidebar-calendar-popup","occupier-popup":".offers2__details-sidebar-occupier-popup"},events:{"click @ui.expanded":function(e){this.$el.addClass("expanded")},"click @ui.shutdown":function(e){var t=this;t.__hideDropDownView(),t.__hideCalendarView(),t.__hideOccupierView(),t.$el.removeClass("expanded"),e.stopPropagation()},"click @ui.dropdown":function(e){e.stopPropagation(),this.ui.textarea.html("").focus(),this.getRegion("dropdown-popup").hasView()?(this.getRegion("dropdown-popup").empty(),this.ui.dropdown.removeClass("error-width")):this.__showDropDownView()},"click @ui.calendar":function(e){e.stopPropagation(),this.getRegion("calendar-popup").hasView()?this.getRegion("calendar-popup").empty():this.__showCalendarView(0)},"click @ui.occupier":function(e){e.stopPropagation(),this.getRegion("occupier-popup").hasView()?this.getRegion("occupier-popup").empty():this.__showOccupierView()},"click @ui.calendar_prev":function(e){e.stopPropagation(),this.getRegion("calendar-popup").hasView()&&1===this.getRegion("calendar-popup").currentView.options.style||(this.getRegion("calendar-popup").empty(),this.__showCalendarView(1))},"click @ui.calendar_next":function(e){e.stopPropagation(),this.getRegion("calendar-popup").hasView()&&2===this.getRegion("calendar-popup").currentView.options.style||(this.getRegion("calendar-popup").empty(),this.__showCalendarView(2))},"click @ui.clearall":function(e){var t=this;t.__hideDropDownView(),t.__hideCalendarView(),t.__hideOccupierView(),t.options.rootState.trigger("changeRedirectParams",t.model.get("defaultsParams")),e.stopPropagation()},"click @ui.redirect":function(e){var t=this;t.__hideDropDownView(),t.__hideCalendarView(),t.__hideOccupierView(),this.options.rootState.trigger("verifyRedirectParams",this.model.get("redirectParams")),e.stopPropagation()},"input @ui.textarea":function(e){this.__textareaChanged()}},__textareaChanged:n.debounce(function(){this.ui.textarea.addClass("inputCheck"),this.options.rootState.trigger("filterChange",this.ui.textarea.val())},500),initialize:function(){var e=this;e.__search=n.debounce(function(e){this.__searchKeyChange(e)},500)},onRender:function(){var e=this,t=e.options.rootState;e.onDestroy(),e.listenTo(t,"changeViewStyle",e.__mapsViewStyleChanged),e.listenTo(t,"calendarStyleChanged",e.__calendarStyleChanged),e.listenTo(t,"changeRedirectParams",e.__changeRedirectParams),e.listenTo(t,"verifyRedirectResult",e.__verifyRedirectResult),e.__revealRedirectParams(),e.__addScrollEventHandle()},onDestroy:function(){this.stopListening(this.options.rootState),this.__delScrollEventHandle(),this.__delGlobalListener()},__scrollWithPC:function(){var e=this,t=e.$el;t.removeClass("hidden");var i=t.parent(),o=i.prop("clientHeight"),n=t.prop("clientHeight");if(n>=o)return void t.stop().removeAttr("style");var r=jQuery(window).scrollTop()+(jQuery("[data-component='navbar']").height()||0),a=i.offset().top,s=Math.max(0,Math.min(r-a+42,o-n-42));t.stop().animate({top:s},500,function(){0===s&&t.removeAttr("style")})},__scrollWithMB:function(){this.$el.removeAttr("style")},__addScrollEventHandle:function(){var e=this;e.__delScrollEventHandle(),e._scrollHandler=n.debounce(function(){var t=e.$el.css("position");"absolute"===t?e.__scrollWithPC():"fixed"===t&&e.__scrollWithMB()},100),jQuery(window).on("scroll resize",e._scrollHandler)},__delScrollEventHandle:function(){var e=this;e._scrollHandler&&(jQuery(window).off("scroll resize",e._scrollHandler),e._scrollHandler=null)},__mapsViewStyleChanged:function(e){this._scrollHandler&&this._scrollHandler()},__calendarStyleChanged:function(e){"PREV"===e?this.ui.calendar_prev.addClass("selected"):this.ui.calendar_prev.removeClass("selected"),"NEXT"===e?this.ui.calendar_next.addClass("selected"):this.ui.calendar_next.removeClass("selected")},__verifyRedirectResult:function(e){e.canRedirect?location.href=e.redirectURL:e.seeOtherRates?this.__disabledSidebarView(f(e)):this.__disabledSidebarView(h(e))},__disabledSidebarView:function(e){this.$el.addClass("disabled"),this.ui.redirect.prop("disabled",!0),this.ui.error.html(e),this._scrollHandler&&this._scrollHandler()},__changeRedirectParams:function(e){this.model.set("redirectParams",n.assign(this.model.get("redirectParams"),e)),this.__revealRedirectParams()},__revealRedirectParams:function(){var e=this.model.get("redirectParams");e.hotel?this.ui.textarea.val(e.hotel.name):this.ui.textarea.val(i18n.t("offers.choose_a_destination")),e.prev?this.ui.calendar_prev.html(o(e.prev).format(c)):this.ui.calendar_prev.html(c),e.next?this.ui.calendar_next.html(o(e.next).format(c)):this.ui.calendar_next.html(c),this.ui.redirect.prop("disabled",!(e.hotel&&e.prev&&e.next)),this.$el.removeClass("disabled");var t=e.adultocc||1,i=e.childocc||0,r=e.hotel&&e.hotel.maxocc||18,a=Math.min(e.hotel&&e.hotel.adultocc||9,r),s=Math.min(e.hotel&&e.hotel.childocc||9,r);if(t=Math.min(t,a),i=Math.min(i,Math.min(s,r-t)),this.model.set("redirectParams",n.assign(e,{adultocc:t,childocc:i})),this.ui.occupier_text.html([t,i18n.t(1===t?"booking.adult":"booking.adults")+",",i,i18n.t(1===i?"booking.child":"booking.children")].join(" ")),e.hotel&&e.prev&&e.next){var l=d.queryparam(),h=jQuery.param(n.assign(l,{hotel:e.hotel.key,checkin:o(e.prev).format(u),checkout:o(e.next).format(u),adults:t,children:i}));history.pushState?history.pushState(null,null,location.protocol+"//"+location.host+location.pathname+"?"+h):location.hash="#"+h}},__addGlobalListener:function(){var e=this;e.__delGlobalListener(),e._globalListener=function(t){var i=!1;e.getRegion("dropdown-popup").hasView()&&0===e.getRegion("dropdown-popup").$el.has(t.target).length&&(e.getRegion("dropdown-popup").empty(),i=!0),e.getRegion("calendar-popup").hasView()&&0===e.getRegion("calendar-popup").$el.has(t.target).length&&(e.getRegion("calendar-popup").empty(),i=!0),e.getRegion("occupier-popup").hasView()&&0===e.getRegion("occupier-popup").$el.has(t.target).length&&(e.getRegion("occupier-popup").empty(),i=!0),i&&e.__delGlobalListener()},jQuery(document).on("click",this._globalListener)},__delGlobalListener:function(){this._globalListener&&(jQuery(document).off("click",this._globalListener),this._globalListener=null)},__showDropDownView:function(){var e=this;e.__hideCalendarView(),e.__hideOccupierView(),e.__delGlobalListener(),e.__addGlobalListener(),e.ui.dropdown.addClass("selected"),e.ui.textarea.focus(),e.getRegion("dropdown-popup").show(new a({model:e.model,rootState:e.options.rootState}).on("destroy",function(){var t=e.model.get("redirectParams");t&&t.hotel?e.ui.textarea.val(t.hotel.name):e.ui.textarea.val(""),e.ui.dropdown.removeClass("selected").removeClass("error-width"),e.__delGlobalListener()}))},__showCalendarView:function(e){var t=this;t.__hideDropDownView(),t.__hideOccupierView(),t.__delGlobalListener(),t.__addGlobalListener(),t.ui.calendar.addClass("selected"),t.getRegion("calendar-popup").show(new s({style:e,model:t.model,rootState:t.options.rootState}).on("destroy",function(){t.__calendarStyleChanged("NONE"),t.ui.calendar.removeClass("selected"),t.__delGlobalListener()}))},__showOccupierView:function(){var e=this;e.__hideDropDownView(),e.__hideCalendarView(),e.__delGlobalListener(),e.__addGlobalListener(),e.ui.occupier.addClass("selected"),e.getRegion("occupier-popup").show(new l({model:e.model,rootState:e.options.rootState}).on("destroy",function(){e.ui.occupier.removeClass("selected"),e.__delGlobalListener()}))},__hideDropDownView:function(){this.getRegion("dropdown-popup").empty()},__hideCalendarView:function(){this.getRegion("calendar-popup").empty()},__hideOccupierView:function(){this.getRegion("occupier-popup").empty()}})},{"../../ui/util":2122,"./01-dropdown/view":1527,"./02-calendar/view":1537,"./03-occupier/view":1540,"backbone.marionette":6,moment:16,underscore:42}],1537:[function(e,t,i){function o(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+(t||0))}var n=e("backbone.marionette"),r=e("./swiper-calendar/calendar-creator");t.exports=n.ItemView.extend({template:!1,className:"offers2__details-calendar",onShow:function(){this.__removeCalendarView(),this.__createCalendarView()},onDestroy:function(){this.__removeCalendarView()},initialize:function(){new Date,this.model.toJSON()},__createCalendarView:function(){var e=new Date,t=this.options.style,i=this.model.get("redirectParams")||{},n=Math.max(1,this.model.get("los")||1),a=o(i.month||e),s=o(i.prev||o(i.month||e,7)),l=o(i.next||o(i.month||e,7+n));this._calendar=r(this.el,{prev:s,next:l,spans:n,month:a,displayStyle:t,onChange:jQuery.proxy(this.__onSelectionChanged,this)}),this.options.rootState.trigger("calendarStyleChanged",2>t?"PREV":"NEXT")},__removeCalendarView:function(){this._calendar&&(this._calendar.dispose(),this._calendar=null)},__onSelectionChanged:function(e){this.options.rootState.trigger("changeRedirectParams",{month:e.detail.month,prev:e.detail.prev,next:e.detail.next}),e.detail.completed?this.destroy():this.options.rootState.trigger("calendarStyleChanged",e.detail.phase?"PREV":"NEXT")}})},{"./swiper-calendar/calendar-creator":1530,"backbone.marionette":6}],1527:[function(e,t,i){function o(e,t){return t.parentid?n.find(e,{id:t.parentid}):null}var n=e("underscore"),r=e("backbone.marionette");e("iscroll");e("../04-dropdown-scroll/drop-down-scroll");e("../../../maps/helpers/requestAnimationFrame");t.exports=r.ItemView.extend({template:Handlebars.compile(e("./template.hbs")),className:"offers2__details-dropdown",ui:{items:".offers2__dropdown-list-item",_error:".error-tip",dropDownText:".offers2__dropdown-text",dropDown:".offers2__dropdown"},events:{"click @ui.items":function(e){e.stopPropagation();var t=this,i=t.model.toJSON(),o=t.options.rootState;o.trigger("changeRedirectParams",{hotel:n.find(i.hotels,{id:jQuery(e.currentTarget).attr("data-id")})}),t.destroy()}},serializeData:function(){var e=this._chagneVal,t=this.model.toJSON(),i=t.cities||[],r=t.hotels||[],a=t.locations.list||[],s=[],l=t.redirectParams.hotel;e&&(r=n.filter(r,function(t){return t.name&&t.name.toUpperCase().indexOf(e.toUpperCase())>=0}));for(var d=0,c=i.length;c>d;d++){for(var u=[i[d]],h=o(a,i[d]);h;)u.unshift(h),h=o(a,h);var f=n.find(s,{hero:u[0]});f||(f={hero:u[0],cities:[]},s.push(f)),f.cities.push({name:n.pluck(u.slice(1),"name").join(" / "),hotels:n.where(r,{locationid:i[d].id})})}return s=n.filter(s,function(e){return n.reduce(e.cities,function(e,t){return e+t.hotels.length},0)>0}),n.forEach(s,function(e){e.cities=n.filter(e.cities,function(e){return e.hotels.length>0})}),this.model.set("hasData",s),{regions:s,currentHotel:l}},onBeforeRender:function(){this.onDestroy()},onDestroy:function(){var e=this;e._iscroll&&(e._iscroll.destroy(),e._iscroll=null)},initialize:function(){var e=this,t=this.options.rootState;e.listenTo(t,"filterChange",e.__filterChange)},__filterChange:function(e){this._chagneVal=e,this.render()},onRender:function(){var e=this;e.onDestroy(),e.$el.children().length>0&&setTimeout(function(){var t=e.ui.dropDown.height(),i=e.ui.dropDownText.height();i>t&&e.ui.dropDownText.css("height",t+"px"),jQuery('[data-section="dropDownList"]').htmlSelect({callback:function(e){}})},100),e.__addErrorStyle(),e.keyReturn()},keyReturn:function(){var e=this,t=jQuery('[data-section="input"]').parent();jQuery("body").on("keypress",function(i){var o=i||window.event,r=o.keyCode||o.which||o.charCode;if(13==r&&t.hasClass("selected")){var a=jQuery(e.ui.dropDown).find(".active");if("no"==a.attr("data-value"))return!1;var s=e.model.toJSON(),l=e.options.rootState;l.trigger("changeRedirectParams",{hotel:n.find(s.hotels,{id:a.attr("data-id")
})}),e.destroy()}})},onShow:function(){this._iscroll&&this._iscroll.refresh()},__addErrorStyle:function(){var e=this,t=e.model.get("hasData");!t.length>0?(e.ui._error.addClass("error-width"),jQuery(".offers2__details-sidebar-dropdown-input").addClass("error-width"),jQuery(".offers2__details-dropdown").addClass("error-width")):(e.ui._error.removeClass("error-width"),jQuery(".offers2__details-sidebar-dropdown-input").removeClass("error-width"),jQuery(".offers2__details-dropdown").removeClass("error-width"))}})},{"../../../maps/helpers/requestAnimationFrame":1148,"../04-dropdown-scroll/drop-down-scroll":1541,"./template.hbs":1526,"backbone.marionette":6,iscroll:14,underscore:42}],1541:[function(e,t,i){!function(e){e.fn.htmlSelect=function(t){function i(e){this.o=e,this.defaultsItem=o.defaultsItem,this.callback=o.callback,this.showSelect=this.o.find(o.showSelect),this.selList=this.o.find('[data-section="ListContent"]'),this.selListParent=this.selList.parent(),this.curItem=this.defaultsItem}if(0==e(this).length)return!1;var o=e.extend({defaultsItem:0,showSelect:'[data-section="input"]',callback:function(){}},t);return i.prototype={init:function(){var e=this;return e.creatInput().changeValue().toogleSelList().keyboard(),this},creatInput:function(){var t=this;if("number"==e.type(t.defaultsItem))if(t.selList.find(".active").length){var i=t.selList.find(".active").index();t.curItem=t.selList.find("li").eq(i)}else t.curItem=t.selList.find("li").eq(t.defaultsItem);return this},changeValue:function(){var e=this;e.curItem.addClass("active").siblings().removeClass("active");var t=e.o.find('[data-section="ListContent"]');if(t.find(".active").length<1)return this;var i=t.find(".active")[0].innerText;return e.showSelect.hasClass("inputCheck")||t.find(".active").attr("data-value")||e.showSelect.val(i),this},toogleSelList:function(){var t=this,i=(e('[data-section="dropDownList"]'),e(t.selList).find(".active"));return t.selListParent.nanoScroller({destroy:!0}),t.selListParent.nanoScroller({alwaysVisible:!0}),t.selListParent.nanoScroller({scrollTo:i}),this},keyboard:function(){var t=this;e("body").on("keydown",function(e){switch(e.keyCode){case 38:t.showSelect.removeClass("inputCheck"),t.prevItem(),t.o.find(".nano").nanoScroller({scrollTo:t.o.find(".active")});break;case 40:t.showSelect.removeClass("inputCheck"),t.nextItem(),t.o.find(".nano").nanoScroller({scrollTo:t.o.find(".active")})}})},prevItem:function(){var e=this;return e.curItem.prev().length>0&&(e.curItem=e.curItem.prev(),e.changeValue()),this},nextItem:function(){var e=this;return e.curItem.next().length>0&&(e.curItem=e.curItem.next(),e.changeValue()),this}},this.each(function(){var t=e(this),o=new i(t);o.init()})}}(jQuery)},{}],1526:[function(e,t,i){t.exports='{{#if regions}}\r\n    <div class="offers2__dropdown-text nano">\r\n        <div class="nano-content"  data-section="ListContent">\r\n            <ul class="offers2__dropdown">\r\n                <li></li>   <!--This empty Li tag adds selected nodes to item for initialization.-->\r\n                {{#each regions}}\r\n                    <li class="offers2__dropdown-list-region" data-value="no">{{ hero.name }}</li>\r\n                    {{#each cities}}\r\n                        {{#if name}}\r\n                            <li class="offers2__dropdown-list-city" data-value="no">{{ name }}</li>\r\n                        {{/if}}\r\n                        {{#each hotels}}\r\n                            <li class="offers2__dropdown-list-item{{#equal ../../../currentHotel this}} active{{/equal}}" data-id="{{ id }}">\r\n                                <span class="icon-icon_I002"></span><span>{{ name }}</span>\r\n                            </li>\r\n                        {{/each}}\r\n                    {{/each}}\r\n                {{/each}}\r\n            </ul>\r\n        </div>\r\n    </div>\r\n{{else}}\r\n    <div>\r\n        <div class="error-tip">\r\n            <span class="error-desc">Sorry, no hotels matched your request. Please try again</span>\r\n        </div>\r\n    </div>\r\n{{/if}}\r\n'},{}]},{},[2250]);
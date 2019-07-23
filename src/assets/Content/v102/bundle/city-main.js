﻿require=function e(t,o,i){function n(s,a){if(!o[s]){if(!t[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var d=o[s]={exports:{}};t[s][0].call(d.exports,function(e){var o=t[s][1][e];return n(o?o:e)},d,d.exports,e,t,o,i)}return o[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({2181:[function(e,t,o){var i=(e("underscore"),e("backbone"),e("../component/city-map/view")),n=e("../component/city-map/load-more/view"),r=e("../component/ui/scratchpad-item/view"),s=e("../component/share-item/view"),a=e("../component/ui/util"),l=e("backbone.marionette");e("../component/ui/tooltipster/dist/css/tooltipster.bundle.min.css"),e("../component/ui/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-borderless.min.css"),e("../component/ui/tooltipster/dist/js/tooltipster.bundle.min.js"),function(e){var t=l.LayoutView.extend({template:!1,el:e(".main-wrapper"),ui:{nano:".right-mod-city",scrollDom:".public-title",mapsContent:".map-content",attractionsContent:".attractions-content",attractions:".attractions",loadMore:".attractions .loadMore",nLoadMore:".neighbourhoods .loadMore",tours:".tours",pcNavList:".pcNavList",mobileNavList:".mobileNavList",readMore:".nano-content h3",cityContent:".left-mod-city-content .city-content",travel:".travel",neighbourhoods:".neighbourhoods"},events:{"click .navList li":"moveScroll","change .mobileNavList select":"moveScroll","click .attractions .loadMore span":"loadMore","click .neighbourhoods .loadMore span":"nLoadMore"},initialize:function(){this.cityMapView=new i,jQuery(".tooltip").tooltipster({theme:"tooltipster-borderless"})},onRender:function(){var e=this,t=e.ui.attractions.attr("data-id");e.loadNeighbourhoodView=new n({userId:t,el:".neighbourhoods-content"}),e.loadMoreView=new n({userId:t,el:".attractions-content"});var o=4*parseInt(window.getComputedStyle(e.ui.readMore.eq(0).get(0)).lineHeight);e.isReadMore(e.ui.readMore.eq(0),o),jQuery(window).width()<=768&&e.isReadMore(e.ui.cityContent,6*parseInt(window.getComputedStyle(e.ui.cityContent.get(0)).lineHeight)),e.ui.nano.nanoScroller({destroy:!0}),e.ui.nano.nanoScroller({alwaysVisible:!0}),e.loadMoreView.render(),e.loadNeighbourhoodView.render(),e.listenTo(e.loadMoreView.collection,"add",e.lastPage),e.listenTo(e.loadNeighbourhoodView.collection,"add",e.neighbourhoodLastPage),e.loadMoreView.on("hide:attractions",e.hideAttractions,this),r.autoCreate(),s.autoCreate(),e.ui.tours.find(".tour-content div").length<1&&e.hidetours(),e.ui.mapsContent.empty(),new l.Region({el:e.ui.mapsContent.get(0)}).show(e.cityMapView),window.onload=function(){var t=e.ui.attractions.find(".tpl-half-city-attractions").length,o=e.ui.travel.find(".tpl-half-travel-guides").length,i=e.ui.neighbourhoods.find(".tpl-half-city-neibourhoods").length;t||e.hideAttractions(),o||e.hidetours(),i||e.hideneighbourhoods()}},isReadMore:function(e,t,o){var i=this;if(e.find("div").length>0?readMoreSrcoll=e.find("div"):readMoreSrcoll=e,readMoreSrcoll.height()>t){o?readMoreSrcoll.html(o):o=readMoreSrcoll.html(),readMoreSrcoll.html(readMoreSrcoll.html().replace(/<[^>]+>/g,""));for(var n="&nbsp;&nbsp;...&nbsp;&nbsp;<a href='javascript:;' class='readmore'>"+i18n.t("general.read_more")+"</a>";readMoreSrcoll.height()>t;)readMoreSrcoll.html(readMoreSrcoll.html().replace(/(\s)*([a-zA-Z0-9\-&;]+|\W)$/,""));for(var r=0;5>r;r++)readMoreSrcoll.html(readMoreSrcoll.html().replace(/(\s)*([a-zA-Z0-9\-&;]+|\W)$/,""));readMoreSrcoll.html(readMoreSrcoll.html()+n),i.__ClickReadMore(e,t,o)}},__ClickReadMore:function(e,t,o){var i=this,n="&nbsp;&nbsp;...&nbsp;&nbsp;<a href='javascript:;' class='readLess'>"+i18n.t("general.read_less")+"</a>";e.on("click",".readmore",function(){e.find("div").length>0?(e.height(t),e.addClass("nano"),e.find("div").addClass("nano-content"),e.find(".nano-content").html(o+n),e.nanoScroller({destroy:!0}),e.nanoScroller({alwaysVisible:!0})):(e.css("height","auto"),e.html(o+n)),i.__ClickReadLess(e,t,o)})},__ClickReadLess:function(e,t,o){var i=this;e.on("click",".readLess",function(){e.find("div").length>0&&(e.nanoScroller({destroy:!0}),e.removeClass("nano"),e.find("div").removeClass("nano-content"),e.find(".readLess").remove(),e.css("height","auto")),i.isReadMore(e,t,o)})},hideAttractions:function(){var e=this;e.ui.attractions.remove(),e.ui.pcNavList.find("[data-focus='attractions']").remove(),e.ui.mobileNavList.find("[data-focus='attractions']").remove()},hidetours:function(){var e=this;e.ui.tours.remove(),e.ui.pcNavList.find("[data-focus='tours']").remove(),e.ui.mobileNavList.find("[data-focus='tours']").remove()},hideneighbourhoods:function(){var e=this;e.ui.neighbourhoods.remove(),e.ui.pcNavList.find("[data-focus='neighbourhoods']").remove(),e.ui.mobileNavList.find("[data-focus='neighbourhoods']").remove()},lastPage:function(){this.loadMoreView.collection.lastPage&&this.ui.loadMore.hide()},neighbourhoodLastPage:function(){this.loadNeighbourhoodView.collection.lastPage&&this.ui.nLoadMore.hide()},loadMore:function(){a.loading({container:this.ui.loadMore,promise:this.loadMoreView.loadMore(),loading:""})},nLoadMore:function(){a.loading({container:this.ui.nLoadMore,promise:this.loadNeighbourhoodView.loadMore(),loading:""})},moveScroll:function(t){var o,i=a.ismobile()?e(t.target.selectedOptions).data("focus"):e(t.target).data("focus"),n=e("[data-focusBox="+i+"]");a.ismobile()?(o=n.offset().top,o-=40,jQuery("html, body").animate({scrollTop:o+"px"},{duration:500,easing:"swing"})):(o=n.offset().top,jQuery("html, body").animate({scrollTop:o-70+"px"},{duration:500,easing:"swing"}))}});(new t).render()}(jQuery)},{"../component/city-map/load-more/view":755,"../component/city-map/view":766,"../component/share-item/view":1940,"../component/ui/scratchpad-item/view":2113,"../component/ui/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-borderless.min.css":2119,"../component/ui/tooltipster/dist/css/tooltipster.bundle.min.css":2120,"../component/ui/tooltipster/dist/js/tooltipster.bundle.min.js":2121,"../component/ui/util":2122,backbone:8,"backbone.marionette":6,underscore:42}],755:[function(e,t,o){var i=(e("underscore"),e("backbone.marionette")),n=e("./list/view"),r=e("./nlist/view"),s=e("./models/collection"),a=e("./models/model");e("../../ui/util");t.exports=i.CollectionView.extend({initialize:function(e){var t=this;if(t.page=0,t.id=e.userId,t.collection=new s,t.$el.hasClass("attractions-content")){t.childView=n;var o=new a({page:t.page,dataid:e.userId,isAttractions:!0})}else{t.childView=r;var o=new a({page:t.page,dataid:e.userId,isAttractions:!1})}o.fetch().then(function(e){if(e.length<1)t.trigger("hide:attractions",t);else{if(t.$el.hasClass("attractions-content")){jQuery(".navList li").find("span").text(e.totalcount);var i=jQuery(".navList option").eq(2);i.text(i.text().replace(/\((.| )+?\)/g,"("+e.totalcount+")"))}e.data.length>0?(o.set(e,e.data),t.collection.lastPage=e.lastPage,t.collection.add(o)):t.trigger("hide:attractions",t)}},function(){})},loadMore:function(){var e=this;if(e.page++,e.$el.hasClass("attractions-content"))var t=new a({page:e.page,dataid:e.id,isAttractions:!0});else var t=new a({page:e.page,dataid:e.id,isAttractions:!1});var o=t.fetch().then(function(o){t.set(o,o.data),e.collection.lastPage=o.lastPage,e.collection.add(t)});return o}})},{"../../ui/util":2122,"./list/view":750,"./models/collection":751,"./models/model":752,"./nlist/view":754,"backbone.marionette":6,underscore:42}],754:[function(e,t,o){var i=(e("underscore"),e("backbone.marionette")),n=e("./template.hbs");e("../../../../component/ui/tooltipster/dist/css/tooltipster.bundle.min.css"),e("../../../../component/ui/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-borderless.min.css"),e("../../../../component/ui/tooltipster/dist/js/tooltipster.bundle.min.js"),t.exports=i.ItemView.extend({template:function(e){return Handlebars.compile(n)(e)},className:"neighbourhoods-list",initialize:function(){},onRender:function(){this.$(".tooltip").tooltipster({theme:"tooltipster-borderless"})}})},{"../../../../component/ui/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-borderless.min.css":2119,"../../../../component/ui/tooltipster/dist/css/tooltipster.bundle.min.css":2120,"../../../../component/ui/tooltipster/dist/js/tooltipster.bundle.min.js":2121,"./template.hbs":753,"backbone.marionette":6,underscore:42}],753:[function(e,t,o){t.exports='{{#equal data.length 1}}\r\n    {{#each data}}\r\n        <div style="background-image: url(\'{{backgroundimage}}\')" class="tpl-half-city-neibourhoods tpl-half-city-neibourhoods-one clearfix">\r\n            <div class="tpl-content">\r\n                <div class="tpl-text">\r\n                    <h3>{{local "general.neighbourhood"}}</h3>\r\n                    <h2>{{title}}</h2>\r\n                    <p>{{description}}</p>\r\n                    <a href="{{url}}" class="wgt-sqbutton">Explore</a>\r\n                </div>\r\n            </div>\r\n            {{#if persuasive}}\r\n                <span class="wgt-corner-label-red tooltip" title="{{persuasivetooltip}}">{{persuasive}}</span>\r\n            {{/if}}\r\n            <div class="tpl-holder"></div>\r\n        </div>\r\n    {{/each}}\r\n{{/equal}}\r\n{{#equal data.length 2}}\r\n    {{#each data}}\r\n        <div style="background-image: url(\'{{backgroundimage}}\')" class="tpl-half-city-neibourhoods  clearfix">\r\n            <div class="tpl-content">\r\n                <div class="tpl-text">\r\n                    <h3>{{local "general.neighbourhood"}}</h3>\r\n                    <h2>{{title}}</h2>\r\n                    <p>{{description}}</p>\r\n                    <a href="{{url}}" class="wgt-sqbutton">Explore</a>\r\n                </div>\r\n            </div>\r\n            {{#if persuasive}}\r\n            <span class="wgt-corner-label-red tooltip" title="{{persuasivetooltip}}">{{persuasive}}</span>\r\n            {{/if}}\r\n            <div class="tpl-holder"></div>\r\n        </div>\r\n    {{/each}}\r\n{{/equal}}'},{}],751:[function(e,t,o){var i=e("backbone"),n=e("./model");t.exports=i.Collection.extend({model:n})},{"./model":752,backbone:8}],752:[function(e,t,o){var i=e("backbone"),n=e("../../../../../config/host.js");t.exports=i.Model.extend({url:function(){if(this.get("isAttractions")){var e=n.getURL("api","neighbor/attractions");return e+="/"+this.get("dataid")+"?pagesize=2&pageindex="+this.get("page")}var e=n.getURL("api","city/neighbourhoods");return e+="/?cid="+this.get("dataid")+"&pagesize=2&pageindex="+this.get("page")}})},{"../../../../../config/host.js":45,backbone:8}],750:[function(e,t,o){var i=(e("underscore"),e("backbone.marionette")),n=e("./template.hbs");e("../../../../component/ui/tooltipster/dist/css/tooltipster.bundle.min.css"),e("../../../../component/ui/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-borderless.min.css"),e("../../../../component/ui/tooltipster/dist/js/tooltipster.bundle.min.js"),t.exports=i.ItemView.extend({template:function(e){return Handlebars.compile(n)(e)},className:"attractionsLi",initialize:function(){},onRender:function(){this.$(".tooltip").tooltipster({theme:"tooltipster-borderless"})}})},{"../../../../component/ui/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-borderless.min.css":2119,"../../../../component/ui/tooltipster/dist/css/tooltipster.bundle.min.css":2120,"../../../../component/ui/tooltipster/dist/js/tooltipster.bundle.min.js":2121,"./template.hbs":749,"backbone.marionette":6,underscore:42}],749:[function(e,t,o){t.exports='{{#each data}}\r\n    <div style="background-image: url(\'{{backgroundimage}}\')" class="tpl-half-city-attractions clearfix">\r\n        <div class="tpl-content">\r\n            <div class="wgt-icon"><span class="icon-icon_N005"></span>\r\n                <label>{{local "scratchpad.attractions"}}</label>\r\n            </div>\r\n            <div class="tpl-text">\r\n                <h3>{{name}}</h3>\r\n                <p>{{description}}</p>\r\n                <div><a href="{{url}}" class="wgt-sqbutton">{{local "general.explore"}}</a></div>\r\n            </div>\r\n        </div>\r\n       {{#if relatedNeighbourhood}}\r\n            <span class="neighbourhood">\r\n                <span class="icon-icon_F0272"></span>\r\n                <span>{{relatedNeighbourhood}}</span>\r\n            </span>\r\n       {{/if }}\r\n        {{#if persuasive}}\r\n        <span class="wgt-corner-label-red tooltip" {{#if persuasivetooltip}}title="{{persuasivetooltip}}"{{/if }} >{{persuasive}}</span>\r\n        {{/if }}\r\n        <div class="tpl-holder"></div>\r\n    </div>\r\n{{/each}}'},{}]},{},[2181]);
﻿require=function g(I,C,A){function t(l,i){if(!C[l]){if(!I[l]){var c="function"==typeof require&&require;if(!i&&c)return c(l,!0);if(b)return b(l,!0);var e=new Error("Cannot find module '"+l+"'");throw e.code="MODULE_NOT_FOUND",e}var n=C[l]={exports:{}};I[l][0].call(n.exports,function(g){var C=I[l][1][g];return t(C?C:g)},n,n.exports,g,I,C,A)}return C[l].exports}for(var b="function"==typeof require&&require,l=0;l<A.length;l++)t(A[l]);return t}({2166:[function(g,I,C){var A=(g("underscore"),g("backbone.marionette"),g("../component/layout/default-page-layout.js")),t=g("../component/bestrate-guarantee/guarantee.js"),b=A.extend({onRender:function(){(new t).render()}});!function(g){new b({el:g(".global-wrapper")}).render()}(jQuery)},{"../component/bestrate-guarantee/guarantee.js":192,"../component/layout/default-page-layout.js":1082,"backbone.marionette":6,underscore:42}],192:[function(g,I,C){var A=g("underscore"),t=(g("underscore.string/sprintf"),g("backbone"),g("backbone-validation"),g("../../../config/host")),b=g("../abmb/stateful.js"),l=g("backbone.marionette"),i=g("./model/bestrate-model.js"),c=g("../ui/validator.js"),e=g("../ui/util"),n=g("../calendar/calendar.js"),a=g("../currency-language/view.js"),d=g("./dragUpload/dragUpload.js"),s=g("moment");I.exports=l.ItemView.extend(A.extend({},b,{el:".guarantee-form",template:!1,events:{"click .submit-guarantee":"onSubmitClicked","click .placeholder":"onInputFocused","click div.field":"onDateKeyPressed","click @ui.img":function(){var g=t.getURL("api","captcha/image?r="+Math.random());this.ui.item_img.attr("src",g),jQuery(".code-bottom .captcha-img").each(function(I,C){jQuery(C).attr("src",g)})},"click @ui.voice":function(){this.IF_CLICK_AUDIO&&this.autoPlay()}},ui:{errorResponse:"div.request-error>span.error-tip",checkOutDatePopup:"div.out-calendar-popup",checkInDatePopup:"div.in-calendar-popup",checkOutDate:"input[name=check_out_date]",checkInDate:"input[name=check_in_date]",dragUpload:"div.dragUpload",img:"[data-feedback='img']",voice:"[data-feedback='voice']",item_img:"[data-item='img']",hotelListText:"[datatype='dropListText'] .hotel_list-hotels"},initialize:function(){var g=this;g.IF_CLICK_AUDIO=!0,g.audio=new Audio,g.model=new i,this.datesData={start:g.model.get("check_in_date"),end:g.model.get("check_out_date")},g.checkInDate=new n({activeDay:this.datesData.start,limitTo:"after",el:"div.in-calendar-popup"}),g.checkOutDate=new n({activeDay:this.datesData.end,limitTo:"after",el:"div.out-calendar-popup"}),g.checkOutMsg=jQuery("<div style='padding-top: 1rem; color: #f00'></div>").text(i18n.t("form_error.guarantee_check_out_date")),g.checkOutDate.setLimitBefore(s(this.datesData.start,"DD/MM/YYYY")),g.checkInDate.myEvent.on("select",g.onCheckInCalendarModelChanged,this),g.checkOutDate.myEvent.on("select",g.onCheckOutCalendarModelChanged,this),c.bind(g),e.getInstance(a).disableLanguage()},validateDate:function(){var g=s(this.datesData.start,"DD/MM/YYYY"),I=s(this.datesData.end,"DD/MM/YYYY");return I.diff(g,!0)<0?(this.ui.checkOutDate.parent().parent().addClass("input-error not-null"),!1):(this.ui.checkOutDate.parent().parent().removeClass("input-error not-null"),!0)},onRender:function(){this.ui.dragUpload.length>0&&!this.dragUploadView&&(this.dragUploadView=new d({el:this.ui.dragUpload}),this.dragUploadView.render()),this.ui.checkInDatePopup.append(this.checkInDate.render().el).hide(),this.ui.checkOutDatePopup.append(this.checkOutDate.render().el).hide(),this.ui.hotelListText.click(function(g){var I=jQuery(g.target);I.parents('[datatype="dropDownList"]').removeClass("null input-error").addClass("pass")})},onDateKeyPressed:function(g){jQuery(g.target).closest("div.clock-wrapper").length<1&&jQuery(g.target).closest("div.data-must").length<1&&(this.ui.checkOutDatePopup.hide(),this.ui.checkInDatePopup.hide())},onCheckOutCalendarModelChanged:function(g){this.ui.checkOutDatePopup.hide(),this.ui.checkOutDate.val(g.format(e.getDateFormat())),this.datesData.end=g.format("DD/MM/YYYY"),this.ui.checkOutDate.data("date-value",this.datesData.end)},onCheckInCalendarModelChanged:function(g){this.ui.checkInDatePopup.hide(),this.ui.checkInDate.val(g.format(e.getDateFormat())),this.checkOutDate.setLimitBefore(g),this.datesData.start=g.format("DD/MM/YYYY"),this.ui.checkInDate.data("date-value",this.datesData.start),this.datesData.end&&this.validateDate()},onInputFocused:function(g){var I=jQuery(g.target).siblings("input").attr("name");"check_out_date"===I?(this.datesData.start?this.ui.checkOutDatePopup.empty().append(this.checkOutDate.render().$el):this.ui.checkOutDatePopup.empty().append(this.checkOutMsg),this.ui.checkOutDatePopup.show(),this.ui.checkInDatePopup.hide()):"check_in_date"===I?(this.ui.checkInDatePopup.show(),this.ui.checkOutDatePopup.hide()):(this.ui.checkOutDatePopup.hide(),this.ui.checkInDatePopup.hide())},autoPlay:function(){var g=this;g.IF_CLICK_AUDIO=!1,g.audio.setAttribute("src",t.getURL("api","captcha/voice?r="+Math.random())),g.audio.load(),g.audio.play(),g.audio.oncanplay=function(){g.audio.play()},g.audio.onended=function(){g.IF_CLICK_AUDIO=!0}},onSubmitClicked:function(){var g=this;g.trigger("save:form");var I=g.model.get("comments"),C=g.model.get("company_website");if(g.model.set("comments",e.encodeHtml(I)),g.model.set("company_website",e.encodeHtml(C)),g.model.set("hotel_name",g.getHotelName()),g.model.set("hotel_id",g.getHotelId()),g.model.set("filekeys",g.dragUploadView.getFileId()),g.trigger("save:form"),!g.model.isValid(!0))return!1;var t=g.datesData;t.check_in_date=s(t.start,"DD/MM/YYYY").format("YYYY-MM-DD"),t.check_out_date=s(t.end,"DD/MM/YYYY").format("YYYY-MM-DD"),e.loading({errortimeout:5e3,container:g.el,promise:g.model.save(t,{success:function(){jQuery(".tpl-full-screen-mask").show()},error:function(I,C){g.ui.errorResponse.html(A.pluck(C.responseJSON,"msg").join("<hr>")),g.trigger("save:error",C.responseJSON)}})})},getHotelName:function(){var g=this.$el.find("[data-bind='hotel_name']").val();return g},getHotelId:function(){var g=this.$el.find("[data-bind='hotel_name']").attr("data-value");return g}}))},{"../../../config/host":45,"../abmb/stateful.js":72,"../calendar/calendar.js":424,"../currency-language/view.js":777,"../ui/util":2122,"../ui/validator.js":2123,"./dragUpload/dragUpload.js":190,"./model/bestrate-model.js":193,backbone:8,"backbone-validation":3,"backbone.marionette":6,moment:16,underscore:42,"underscore.string/sprintf":41}],193:[function(g,I,C){var A=(g("underscore"),g("backbone")),t=g("../../../../config/host.js").host,b=g("../../ui/validator.js"),l=b.latinRegex3;I.exports=A.Model.extend({url:function(){return t+"/api/account/rateguarantee"},defaults:{},validation:{title:{required:!0},first_name:{pattern:l,required:!0},last_name:{pattern:l,required:!0},telephone:{pattern:/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/,required:!0},check_in_date:{required:!0},check_out_date:{required:!0},email:{pattern:"email",required:!0},confirmation_number:{required:!0},hotel_name:{required:!0},company_website:{required:!0},lower_rate_amount:{pattern:/^\d+(\.\d{1,2})?$/,required:!0},captcha:{required:!0}},initialize:function(g){},parse:function(g,I){return g}})},{"../../../../config/host.js":45,"../../ui/validator.js":2123,backbone:8,underscore:42}],190:[function(g,I,C){var A=g("backbone.marionette"),t=g("./dragUpload.hbs"),b=g("backbone"),l=g("./PopupBlock/view"),i=g("../../../component/ui/util"),c=g("../../../../config/host");g("./dragUpload.sass"),I.exports=A.ItemView.extend({template:function(g){return Handlebars.compile(t)(g)},ui:{file:".file",dragContent:".drag-content",cancelButton:".cancelButton",remove:".removeList",tip:".tip"},events:{"change @ui.file":"changefile","click @ui.remove":"removeList","click @ui.cancelButton":"cancel"},initialize:function(){var g=this,I=jQuery(g.el);g.currentAjax=[],g.model=new b.Model({fileList:[]}),I.on("dragenter",function(g){g.stopPropagation(),g.preventDefault()}),I.on("dragover",function(g){g.stopPropagation(),g.preventDefault()}),I.on("drop",function(I){I.stopPropagation(),I.preventDefault();var C=I.originalEvent.dataTransfer,A=C.files;if(A.length){var t=A[0];g.validate(t)&&g.ajaxSend(t)}})},getFileId:function(){var g=this,I=g.model.get("fileList"),C="";return I[0]&&(C=I[0].key),I[1]&&(C+=","+I[1].key),C},validate:function(g){var I=this;if(!i.isloggedin()){var C={type:2,okText:i18n.t("general.ok"),status:"ok",title:i18n.t("general.no_login_title"),text:i18n.t("general.no_login_content")};new l({el:I.ui.tip,config:C}).render();return!1}var A=g.name.substring(g.name.lastIndexOf(".")).toLowerCase();if(!/.(pdf|doc|docx|xls|xlsx|gif|jpg|jpeg|png|bmp)$/.test(A)){var C={type:2,okText:i18n.t("general.ok"),status:"ok",title:i18n.t("general.invalid_filetype"),text:i18n.t("general.allowed_file_type").replace("{0}",g.name)};new l({el:I.ui.tip,config:C}).render();return!1}var t=g.size;if(t=Math.round(t/1024*100)/100,t>5120){var C={type:2,okText:i18n.t("general.ok"),status:"ok",title:i18n.t("general.file_size"),text:i18n.t("general.limit_file_size")};new l({el:I.ui.tip,config:C}).render();return!1}return!0},changefile:function(g){var I=this,C=I.ui.file.get(0).files[0];I.validate(C)&&I.ajaxSend(C)},conver:function(g){var I="";1024>g?I=g.toFixed(2)+"B":1048576>g?I=(g/1024).toFixed(2)+"KB":1073741824>g&&(I=(g/1048576).toFixed(2)+"MB");var C=I+"",A=C.indexOf("."),t=C.substr(A+1,2);return"00"==t?C.substring(0,A)+C.substr(A+3,2):C},ajaxSend:function(g){function I(g){var I=g.loaded,t=g.total,l=Math.floor(100*I/t);A[b].width=l+"%",C.model.set("fileList",A),C.render()}var C=this,A=C.model.get("fileList"),t=g.name.substring(g.name.lastIndexOf(".")).toLowerCase();/.(xls|xlsx)$/.test(t)&&(t="xls"),/.(doc|docx)$/.test(t)&&(t="doc"),/.(pdf)$/.test(t)&&(t="pdf"),/.(gif|jpg|jpeg|png|bmp)$/.test(t)&&(t="img");var b=A.length;if(b>1){var i={type:2,okText:i18n.t("general.ok"),status:"ok",title:i18n.t("general.maximum_title"),text:i18n.t("general.maximum_content")};new l({el:C.ui.tip,config:i}).render();return!1}A.push({name:g.name,width:"0%",done:!1,size:C.conver(g.size),type:t}),C.model.set("fileList",A),C.render();var e=new FormData;e.append("file",g),C.currentAjax.push(jQuery.ajax({url:c.getURL("api","rateguarantee/upload"),type:"POST",data:e,processData:!1,contentType:!1,xhr:function(){var g=jQuery.ajaxSettings.xhr();return I&&g.upload?(g.upload.addEventListener("progress",I,!1),g):void 0},success:function(g){A[b].done=!0,A[b].id=b,A[b].key=g.key;var I=A[b].name;C.model.set("fileList",A),C.render();var t={type:1,status:"true",successText:i18n.t("general.suc_upload").replace("{0}",I)};new l({el:C.ui.tip,config:t}).render()},error:function(){var g={type:1,status:"false",failText:i18n.t("account.an_error")};new l({el:C.ui.tip,config:g}).render()}}))},cancel:function(g){var I=jQuery(g.target).data("index");this.currentAjax[I].abort();var C=this.model.get("fileList");C.splice(I,1),this.model.set("fileList",C),this.render()},removeList:function(g){var I=this,C=jQuery(g.target).parents(".right").find(".removeList").data("index"),A=jQuery(g.target).parents(".right").find(".removeList").data("key"),t=jQuery(g.target).parents("li").find(".middle span").text(),b={type:2,cancelText:i18n.t("account.remove_cancel"),deleteText:i18n.t("general.delete"),title:i18n.t("general.remove_title"),text:i18n.t("general.remove_file").replace("{0}",t)},i=new l({el:I.ui.tip,config:b}).render();i.on("delete:click",function(){jQuery.ajax({url:c.getURL("api","rateguarantee/delete?key="+A),type:"POST",success:function(){var g=I.model.get("fileList");g.splice(C,1),I.model.set("fileList",g),I.render();var A={type:1,status:"true",successText:i18n.t("general.suc_remove").replace("{0}",t)};new l({el:I.ui.tip,config:A}).render()},error:function(){var g={type:1,status:"false",failText:i18n.t("account.an_error")};new l({el:I.ui.tip,config:g}).render()}})})},onRender:function(){}})},{"../../../../config/host":45,"../../../component/ui/util":2122,"./PopupBlock/view":188,"./dragUpload.hbs":189,"./dragUpload.sass":191,backbone:8,"backbone.marionette":6}],191:[function(g,I,C){I.exports=g("sassify")("/**  *  * @param { 300 | bold } $font-weight  * @param { normal     } $font-style  */ /**  *  * @param { 300 | 500 | bold } $font-weight  * @param { normal           } $font-style  */ /**  *  * @param { 300 | 500 | bold } $font-weight  * @param { normal          } $font-style  */ /**  *  * @param { 300 | bold } $font-weight  * @param { normal          } $font-style  */ /**  *  * @param { bold } $font-weight  * @param { normal } $font-style  */ /**  *  * @param { bold } $font-weight  * @param { normal } $font-style  */ /**  *  * @param { normal } $font-weight  * @param { normal } $font-style  */ /**  *  * @param { bold } $font-weight  * @param { normal } $font-style  */ /**  *  * @param { bold } $font-weight  * @param { normal } $font-style  */ /**     *     * @param { bold } $font-weight     * @param { normal } $font-style     */ /**     *     * @param { bold } $font-weight     * @param { normal } $font-style     */ /**     *     * @param { bold } $font-weight     * @param { normal } $font-style     */ .drag-content {   padding: 4rem 0;   border-bottom: 1px solid #f1f1f1;   font-family: 'Museo Sans', Helvetica, sans-serif;   font-weight: 300; }   .drag-content span[class*=icon-icon] {     font-size: 3rem;     display: inline-block;     vertical-align: top; }   .drag-content p {     display: inline-block;     font-size: 2rem;     font-weight: 600; }     .drag-content p i {       padding: 0 0.2rem; }     .drag-content p span {       color: #31a2ac;       position: relative;       left: 5px;       display: inline-block;       width: 50px;       float: right; }       .drag-content p span .file {         width: 100% !important;         height: 100% !important;         margin: 0 !important;         font-size: 0 !important;         cursor: pointer;         position: absolute;         top: 0;         left: 0;         opacity: 0; }   .drag-content .type-name {     font-size: 1.6rem;     color: rgba(54, 54, 54, 0.75); }  .list li {   padding: 2rem 0;   text-align: left;   font-size: 0; }   .list li .icons {     font-size: 5rem;     display: inline-block;     vertical-align: middle;     width: 10%; }   .list li .middle {     display: inline-block;     vertical-align: middle;     width: 70%;     font-size: 1.6rem; }     .list li .middle span {       display: block;       margin-bottom: 0.5rem; }     .list li .middle .progress {       width: 100%;       height: 1rem;       background-color: #f6f6f6;       position: relative; }       .list li .middle .progress .progress_content {         width: 80%;         position: absolute;         top: 0;         left: 0;         height: 1rem;         background-color: #31a2ac; }   .list li .right {     display: inline-block;     vertical-align: middle;     width: 20%;     text-align: right;     font-size: 1.6rem; }     .list li .right .removeList {       cursor: pointer;       text-transform: lowercase;       color: #666; }     .list li .right .cancelButton {       cursor: pointer; }  @media screen and (max-width: 768px) {   .drag-content {     padding: 2rem 0; }     .drag-content span[class*=icon-icon] {       font-size: 2rem;       vertical-align: middle; }     .drag-content p {       font-size: 1.4rem; }     .drag-content .type-name {       font-size: 1.4rem; }   .list li .icons {     font-size: 2.5rem; }   .list li .middle {     font-size: 1.2rem; }   .list li .right {     font-size: 1.2rem; } }  html[dir=rtl] .list li {   text-align: right; }   html[dir=rtl] .list li .right {     text-align: left; }  html[dir=rtl] .drag-content p span {   float: right; }  ");
},{sassify:36}],189:[function(g,I,C){I.exports='<div class="drag-content">\r\n    <span class="icon-icon_H007"></span>\r\n    <p>{{local \'general.drag_file\'}}<span>{{local \'general.drag_browse\'}}<input type="file" class="file"></span></p>\r\n    <div class="type-name">{{local \'general.drop_content\'}}</div>\r\n</div>\r\n<ul class="list">\r\n    {{#each fileList}}\r\n        <li>\r\n            {{#equal type \'pdf\'}}\r\n                <span class="icon-icon_S001 icons"></span>\r\n            {{/equal}}\r\n            {{#equal type \'doc\'}}\r\n                <span class="icon-icon_S002 icons"></span>\r\n            {{/equal}}\r\n            {{#equal type \'xls\'}}\r\n                <span class="icon-icon_S002 icons"></span>\r\n            {{/equal}}\r\n            {{#equal type \'img\'}}\r\n                <span class="icon-icon_S003 icons"></span>\r\n            {{/equal}}\r\n            <div class="middle">\r\n                <span>{{name}}</span>\r\n                {{#if done}}\r\n                    <div class="size">{{size}}</div>\r\n                {{else}}\r\n                    <div class="progress">\r\n                        <div class="progress_content" style="width: {{width}}"></div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <div class="right">\r\n                {{#if done}}\r\n                    <div class="removeList" data-index="{{@index}}" data-key="{{key}}"><span class="icon-icon_J016" style="vertical-align: text-bottom;"></span><span style="text-decoration: underline">{{local \'account.guest_remove\'}}</span></div>\r\n                {{else}}\r\n                    <div class="cancelButton" data-index="{{@index}}">{{local \'account.remove_cancel\'}}</div>\r\n                    <span>{{width}} {{local \'checkout.done\'}}</span>\r\n                {{/if}}\r\n            </div>\r\n        </li>\r\n    {{/each}}\r\n</ul>\r\n<div class="tip"></div>'},{}],188:[function(g,I,C){var A=g("underscore"),t=g("../../../abmb/stateful.js"),b=g("backbone.marionette"),l=g("../../../ui/util"),i=g("./model");g("./style.sass"),ProfilePulicView=I.exports=b.LayoutView.extend(A.extend({},t,{template:Handlebars.compile(g("./template.hbs")),ui:{statusInfo:".bpg-upload-status-info"},events:{"click .close-btn":"closePopup","click .delete":"deleteClick"},initialize:function(g){this.model=new i(g.config)},closePopup:function(){this.$(".bpg-Popup-block").remove(),this.off()},deleteClick:function(){var g=this;g.trigger("delete:click",g),g.closePopup(),g.infoAnimate()},onRender:function(){var g=this;1==g.model.get("type")&&(g.infoAnimate(),setTimeout(function(){g.$(".bpg-upload-status-info").remove()},5500))},infoAnimate:function(){var g=this;l.ismobile()?g.ui.statusInfo.css({top:-70}).animate({top:0},500):g.ui.statusInfo.css({top:-70}).animate({top:70},500)}}))},{"../../../abmb/stateful.js":72,"../../../ui/util":2122,"./model":185,"./style.sass":186,"./template.hbs":187,"backbone.marionette":6,underscore:42}],187:[function(g,I,C){I.exports='\r\n{{#equal type 1}}\r\n    {{#equal status \'true\'}}\r\n        <div class="bpg-upload-status-info success-info"><span class="icon-icon_I009"></span>{{successText}}</div>\r\n    {{else}}\r\n        <div class="bpg-upload-status-info fail-info"><span class="icon-icon_B015"></span>{{failText}}</div>\r\n    {{/equal}}\r\n{{/equal}}\r\n\r\n{{#equal type 2}}\r\n    <div class="bpg-Popup-block">\r\n        <div class="close-bg"></div>\r\n        <div class="bpg-Popup-content">\r\n            <a class="close close-btn"><span class="icon-icon_B017"></span></a>\r\n            <h1 class="title">{{title}}</h1>\r\n            <div class="text">{{text}}</div>\r\n            <div class="bpg-button">\r\n                {{#equal status "ok"}}\r\n                    <a class="btn ok  close-btn">{{okText}}</a>\r\n                {{else}}\r\n                    <a class="btn cancel close-btn">{{cancelText}}</a>\r\n                    <a class="btn delete">{{deleteText}}</a>\r\n                {{/equal}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n{{/equal}}'},{}],186:[function(g,I,C){I.exports=g("sassify")("/**  *  * @param { 300 | bold } $font-weight  * @param { normal     } $font-style  */ /**  *  * @param { 300 | 500 | bold } $font-weight  * @param { normal           } $font-style  */ /**  *  * @param { 300 | 500 | bold } $font-weight  * @param { normal          } $font-style  */ /**  *  * @param { 300 | bold } $font-weight  * @param { normal          } $font-style  */ /**  *  * @param { bold } $font-weight  * @param { normal } $font-style  */ /**  *  * @param { bold } $font-weight  * @param { normal } $font-style  */ /**  *  * @param { normal } $font-weight  * @param { normal } $font-style  */ /**  *  * @param { bold } $font-weight  * @param { normal } $font-style  */ /**  *  * @param { bold } $font-weight  * @param { normal } $font-style  */ /**     *     * @param { bold } $font-weight     * @param { normal } $font-style     */ /**     *     * @param { bold } $font-weight     * @param { normal } $font-style     */ /**     *     * @param { bold } $font-weight     * @param { normal } $font-style     */ .bpg-Popup-block {   position: fixed;   top: 0;   left: 0;   right: 0;   bottom: 0;   background-color: rgba(0, 0, 0, 0.6);   z-index: 9999; }   .bpg-Popup-block .close-bg {     position: absolute;     top: 0;     left: 0;     right: 0;     bottom: 0;     background-color: transparent; }   .bpg-Popup-block .bpg-Popup-content {     position: absolute;     top: 50%;     left: 50%;     transform: translate(-50%, -50%);     -webkit-transform: translate(-50%, -50%);     -o-transform: translate(-50%, -50%);     -moz-transform: translate(-50%, -50%);     -ms-transform: translate(-50%, -50%);     background-color: #fff;     width: 640px;     height: auto;     padding: 30px;     z-index: 1;     text-align: left; }     @media (max-width: 768px) {       .bpg-Popup-block .bpg-Popup-content {         width: 90%;         box-sizing: border-box; } }     .bpg-Popup-block .bpg-Popup-content .close {       position: absolute;       right: 20px;       top: 22px;       font-size: 5rem;       color: #000;       cursor: pointer;       display: block; }     .bpg-Popup-block .bpg-Popup-content .title {       color: #000;       font-family: 'Whitney', Helvetica, sans-serif;       font-weight: 700;       font-size: 2.2rem;       line-height: 40px;       border-bottom: 1px solid #e7e7e7;       padding-bottom: 8px; }     .bpg-Popup-block .bpg-Popup-content .text {       color: #000;       font-size: 1.8rem;       line-height: 25px;       font-family: 'Whitney', Helvetica, sans-serif;       font-weight: 300;       padding: 20px 0 30px 0;       border-bottom: 1px solid #e7e7e7; }     .bpg-Popup-block .bpg-Popup-content .bpg-button {       padding: 30px 0 0 0;       width: 100%;       height: auto;       text-align: center; }       .bpg-Popup-block .bpg-Popup-content .bpg-button .btn {         box-sizing: border-box;         display: inline-block;         min-width: 200px;         margin: 0 5px;         padding: 5px;         vertical-align: middle;         background-color: #31a2ac;         border: 1px solid #31a2ac;         color: #fff;         font-family: 'Museo Sans', Helvetica, sans-serif;         font-weight: 300;         font-size: 1.4rem;         line-height: 40px;         text-transform: uppercase;         text-align: center;         letter-spacing: 1px;         cursor: pointer; }         @media (max-width: 768px) {           .bpg-Popup-block .bpg-Popup-content .bpg-button .btn {             display: block;             margin: 5px auto; } }         .bpg-Popup-block .bpg-Popup-content .bpg-button .btn:hover {           background-color: #2c8f98;           border: 1px solid #2c8f98; }       .bpg-Popup-block .bpg-Popup-content .bpg-button .cancel {         background-color: #fff;         border: 1px solid #000;         color: #000; }         .bpg-Popup-block .bpg-Popup-content .bpg-button .cancel:hover {           background-color: #000;           color: #fff; }  .bpg-upload-status-info {   position: fixed;   left: 0;   right: 0;   width: 100%;   z-index: 9999;   color: #fff;   font-size: 1.6rem;   line-height: 25px;   text-align: left;   font-family: 'Verlag', Helvetica, sans-serif;   font-weight: 300;   padding: 10px 15px;   box-sizing: border-box; }   @media (max-width: 768px) {     .bpg-upload-status-info {       left: 0;       width: 100%; } }   .bpg-upload-status-info span {     display: inline-block;     vertical-align: middle;     margin: 0 10px;     font-size: 2rem; }  .success-info {   background-color: #2EB025; }   .success-info span {     border: 1.5px solid #FFFFFF;     border-radius: 50%; }  .fail-info {   background-color: #BA0C2F; }  html[dir=\"rtl\"] .bpg-Popup-block .bpg-Popup-content {   text-align: right; }   html[dir=\"rtl\"] .bpg-Popup-block .bpg-Popup-content .close {     right: auto;     left: 20px; }  html[dir=\"rtl\"] .bpg-upload-status-info {   left: 0;   right: 0; }   html[dir=\"rtl\"] .bpg-upload-status-info span {     padding-right: 0;     padding-left: 1px; }  ");
},{sassify:36}]},{},[2166]);
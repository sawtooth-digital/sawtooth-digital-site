(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{187:function(e,t,o){var content=o(191);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("5e9d6b72",content,!0,{sourceMap:!1})},188:function(e,t,o){var content=o(193);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("ae89f514",content,!0,{sourceMap:!1})},189:function(e,t,o){"use strict";var r={props:{header:String,subheader:String,para:String}},n=(o(192),o(5)),component=Object(n.a)(r,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"section__header__container"},[e.header?o("h2",{staticClass:"page__section__header"},[e._v(e._s(e.header))]):e._e(),e._v(" "),e.subheader?o("h3",{staticClass:"page__section__sub__header"},[e._v(e._s(e.subheader))]):e._e(),e._v(" "),e.para?o("p",{staticClass:"page__section__header__para"},[e._v(e._s(e.para))]):e._e()])},[],!1,null,null,null);t.a=component.exports},190:function(e,t,o){"use strict";var r=o(187);o.n(r).a},191:function(e,t,o){(e.exports=o(15)(!1)).push([e.i,".hero{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;justify-content:center;padding:0;box-sizing:border-box;position:relative;overflow:hidden;margin:-60px 0 0}.hero__background{width:100%;max-height:1170px;min-height:300px}.hero__background__overlay{position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;background:#000;opacity:.5}.hero__background video{min-width:100%;height:auto;min-height:100%}.hero__inner{z-index:3;width:100%;max-width:1600px;max-height:840px;padding:50px 6vw 100px;margin:0 auto;display:flex;flex-direction:row;flex-wrap:nowrap;align-content:center;justify-content:flex-start;box-sizing:border-box;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.hero__text__container{width:100%;margin:0;max-width:600px;display:flex;flex-direction:column;align-content:flex-start;justify-content:center}.hero__hr{width:110px;height:2px;border:none;background-color:#009cd6;background-color:var(--blue);margin:10px 0;padding:0;align-self:flex-start}.hero__para{font-size:1.2em;line-height:1.5em;color:#fff;text-align:left}.hero__button__container{display:flex;flex-direction:row;justify-content:center;align-self:flex-start}.hero__button{background:#009cd6;background:var(--blue);color:#fff}.hero--subpage{min-height:75vh}.hero--subpage .hero__background__overlay{background:linear-gradient(to bottom right,#607c8a,#009cd6);background:linear-gradient(to bottom right,var(--blue-grey),var(--blue));opacity:1}.hero--subpage .hero__inner{padding-top:50px;padding-bottom:50px}.hero__sub__image__container{display:flex;flex-direction:row;justify-content:center;padding:20px}.hero__sub__image{align-self:center;width:95%;margin:10px auto}@media screen and (max-width:900px){.hero__inner{padding:50px 6vw}.hero__background{min-height:50vh;display:flex;flex-direction:row;align-content:center;justify-content:center}.hero__background video{align-self:center;-o-object-fit:cover;object-fit:cover}}",""])},192:function(e,t,o){"use strict";var r=o(188);o.n(r).a},193:function(e,t,o){(e.exports=o(15)(!1)).push([e.i,'.section__header__container{margin:0 auto;display:block}.page__section__header{max-width:810px;margin:20px auto 24px;font-size:3em;line-height:1em;font-weight:700;position:relative;z-index:1}.page__section__header:after{content:"";position:absolute;bottom:-10px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);height:2px;width:180px;z-index:-1}.page__section:nth-of-type(2n) .page__section__header:after{background:#fa9e0d;background:var(--light-orange)}.page__section:nth-of-type(odd) .page__section__header:after{background:#fff}.page__section__header__para{max-width:700px;margin:10px auto;font-size:1.1em;line-height:1.5em;font-weight:500}@media screen and (max-width:900px){.page__section__header{font-size:2.5em}}',""])},194:function(e,t,o){"use strict";var r={props:{hero:Object},methods:{checkVisible:function(){var rect=document.getElementsByClassName("hero")[0].getBoundingClientRect(),e=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(rect.bottom<0||rect.top-e>=0)},changeHeader:function(){this.checkVisible()?document.getElementsByClassName("header")[0].classList.remove("header__dark"):document.getElementsByClassName("header")[0].classList.add("header__dark")},contact:function(){this.$nuxt.$emit("contact_show",!this.$parent.$parent.$parent.contactShow)}},mounted:function(){document.getElementsByClassName("header")[0].classList.remove("header__dark"),this.changeHeader(),window.addEventListener("scroll",this.changeHeader)},destroyed:function(){window.removeEventListener("scroll",this.changeHeader)}},n=(o(190),o(5)),component=Object(n.a)(r,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hero"},[e.hero?o("div",{staticClass:"hero__background"},[o("div",{staticClass:"hero__background__overlay"}),e._v(" "),!e.hero.hero_background_image&&e.hero.hero_background_video?o("video",{staticClass:"hero__header__video",attrs:{playsinline:"",autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[o("source",{attrs:{src:e.hero.hero_background_video.data.full_url,type:"video/mp4"}})]):e._e(),e._v(" "),e.hero.hero_background_image&&!e.hero.hero_background_video?o("picture",{staticClass:"hero__header__image"},[o("source",{attrs:{srcset:e.hero.hero_background_image.data.full_url,media:"(min-width: 900px)"}}),e._v(" "),o("img",{attrs:{src:e.hero.hero_background_image.data.full_url}})]):e._e()]):e._e(),e._v(" "),e.hero?o("div",{staticClass:"hero__inner"},[o("div",{staticClass:"hero__text__container"},[e.hero.hero_header?o("h1",{staticClass:"hero__header"},[e._v(e._s(e.hero.hero_header))]):e._e(),e._v(" "),e.hero.hero_para?o("hr",{staticClass:"hero__hr"}):e._e(),e._v(" "),e.hero.hero_para?o("p",{staticClass:"hero__para"},[e._v(e._s(e.hero.hero_para))]):e._e(),e._v(" "),e.hero.hero_button_text?o("div",{staticClass:"hero__button__container"},["contact"!==e.hero.hero_button_link?o("nuxt-link",{staticClass:"hero__button js__open__contact",attrs:{to:e.hero.hero_button_link}},[e._v("\n                    "+e._s(e.hero.hero_button_text)+"\n                ")]):e._e(),e._v(" "),"contact"===e.hero.hero_button_link?o("div",{staticClass:"hero__button site__button js__open__contact",on:{click:function(t){return e.contact()}}},[e._v("\n                    "+e._s(e.hero.hero_button_text)+"\n                ")]):e._e()],1):e._e()]),e._v(" "),e.hero.hero_sub_image?o("div",{staticClass:"hero__sub__image__container"},[o("picture",{staticClass:"hero__sub__image"},[o("source",{attrs:{srcset:e.hero.hero_sub_image.data.full_url,media:"(min-width: 900px)"}}),e._v(" "),o("img",{attrs:{src:e.hero.hero_sub_image.data.full_url}})])]):e._e()]):e._e()])},[],!1,null,null,null);t.a=component.exports},195:function(e,t,o){"use strict";var r={components:{SectionHeader:o(189).a},props:{intro:Object}},n=o(5),component=Object(n.a)(r,function(){var e=this.$createElement,t=this._self._c||e;return"published"===this.intro.page_intro_section_status?t("section",{staticClass:"page__section page__intro"},[t("div",{staticClass:"page__section__inner"},[t("SectionHeader",{attrs:{header:this.intro.page_intro_header,para:this.intro.page_intro_para}})],1)]):this._e()},[],!1,null,null,null);t.a=component.exports},196:function(e,t,o){var content=o(208);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("d6b3cee2",content,!0,{sourceMap:!1})},207:function(e,t,o){"use strict";var r=o(196);o.n(r).a},208:function(e,t,o){(e.exports=o(15)(!1)).push([e.i,'.privacy__policy{max-width:1000px;width:100%;padding:50px 30px 100px;margin:0 auto}.privacy__policy h3,.privacy__policy h4,.privacy__policy li,.privacy__policy p,.privacy__policy ul{text-align:left}.page__intro:before{content:"";position:absolute;top:0;left:0;width:100%;height:70px;-webkit-transform:rotate(-1.3deg) skewX(-1.3deg);transform:rotate(-1.3deg) skewX(-1.3deg);-webkit-transform-origin:0 0;transform-origin:0 0;z-index:2}.page__intro,.page__intro:before{background-color:var(--light-orange)}.page__intro{color:#fff;font-weight:600;font-size:20px;padding-top:100px}',""])},238:function(e,t,o){"use strict";o.r(t);var r=o(194),n=o(195),_={components:{Hero:r.a,PageIntro:n.a},computed:{pageInfo:function(){return this.$store.state.pages},privacyPolicy:function(){return this.$store.state.privacyPolicy[0]}},head:function(){return{title:"Privacy Policy - Sawtooth Digital",meta:[{hid:"description",name:"description",content:"Your privacy is important to us, take a moment to see how we handle your data."}]}},mounted:function(){var e=this;this.$nextTick(function(){e.$nuxt.$loading.start(),setTimeout(function(){e.$nuxt.$loading.finish()},2500)})}},c=(o(207),o(5)),component=Object(c.a)(_,function(){var e=this.$createElement,t=this._self._c||e;return t("main",[t("Hero",{attrs:{hero:this.pageInfo.privacy_policy}}),this._v(" "),t("PageIntro",{attrs:{intro:this.pageInfo.privacy_policy}}),this._v(" "),t("div",{staticClass:"privacy__policy",domProps:{innerHTML:this._s(this.privacyPolicy.privacy_policy_text)}})],1)},[],!1,null,null,null);t.default=component.exports}}]);
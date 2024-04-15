import{$a as te,Aa as $,Ab as Qe,B as A,Ba as fe,Bb as Ze,C as R,Ca as he,Cb as Xe,D as M,Da as Ee,Db as Ye,E as _,Ea as je,Eb as Je,Fa as Re,Ga as p,Ha as w,Ia as Ve,J as pe,Ja as q,Jb as et,K as d,Ka as Ne,L as V,La as ze,M as O,Ma as He,Na as H,Oa as f,P as de,Pc as ie,Q as h,Qb as tt,Qc as oe,R as g,Rc as be,Sb as nt,T as x,Tc as W,U as Y,Ua as Pe,Uc as L,V as N,Va as $e,W as E,Wa as We,Xa as J,Xb as P,Ya as ee,a as ke,aa as ue,b as _e,ba as F,c as Q,ca as I,d as ae,f as se,fa as Ae,i as ce,j as Te,ja as Be,ka as y,l as Fe,la as z,n as Ie,na as S,oa as U,p as Se,pa as me,q as Z,qa as s,ra as c,s as X,sa as k,sc as it,tb as Le,ub as Ge,uc as ye,va as Oe,vb as Ue,w as le,wa as v,wb as ge,xb as ne,y as Me,yb as qe,za as u,zb as Ke}from"./chunk-CYYLZQQC.js";import{f as we}from"./chunk-CWTPBX7D.js";var b=(()=>{let e=class e{constructor(){this.onChange=new E,this.order=0}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["ng-component"]],inputs:{order:"order"},outputs:{onChange:"onChange"},decls:0,vars:0,template:function(n,o){},encapsulation:2});let i=e;return i})();var ot=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=t=>{let n=`
    <!-- start: accent text with background -->
    <tr>
        <td style="padding:12px 0 12px;">
            <table class="accentBlock" border="0" cellpadding="0"
                cellspacing="24" width="100%" bgColor="#ecf1f7">
                <tr>
                    <td>
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td class="textColor1"
                                    style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:20px;line-height:28px;color:#333333;font-weight:normal;">
                                    ${t}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: accent text with background -->
    `;this.onChange.emit({order:this.order,text:n})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-accent-text-with-background"]],standalone:!0,features:[y,f],decls:2,vars:0,consts:[["box",""],["type","text",1,"w-full",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"textarea",1,0),u("keyup",function(){h(a);let l=p(1);return g(o.onTextChange(l.value))}),c()}}});let i=e;return i})();var rt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=t=>{let n=`
    <!-- start: little title -->
    <tr>
        <td class="textColor1"
            style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:20px;line-height:28px;color:#333333;font-weight:600;padding:12px 0 8px;">
            ${t}
        </td>
    </tr>
    <!-- end: little title -->  
    `;this.onChange.emit({order:this.order,text:n})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-little-title"]],standalone:!0,features:[y,f],decls:2,vars:0,consts:[["box",""],["type","text",1,"w-full",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"textarea",1,0),u("keyup",function(){h(a);let l=p(1);return g(o.onTextChange(l.value))}),c()}}});let i=e;return i})();var at=(()=>{let e=class e extends b{constructor(){super(...arguments),this.template=`
  <!-- start: text line -->
  <tr>
      <td style="padding:12px 0 12px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                  <td class="accentBorder" height="1" bgColor="#494a4c"
                      style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                  </td>
              </tr>
          </table>
      </td>
  </tr>
  <!-- end: text line -->
  `}ngAfterContentInit(){setTimeout(()=>{this.onChange.emit({order:this.order,text:this.template})},0)}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-text-line"]],standalone:!0,features:[y,f],decls:1,vars:0,template:function(n,o){n&1&&k(0,"hr")}});let i=e;return i})();var st=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=t=>{let n=`
    <!-- start: preheader -->
    <tr>
        <td class="textColor2" align="center"
            style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;
        color:#adadad;font-weight:normal;font-size:12px;line-height:20px;padding-bottom:12px;">
            ${t}
        </td>
    </tr>
    <!-- end: preheader -->
    `;this.onChange.emit({order:this.order,text:n})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-preheader"]],standalone:!0,features:[y,f],decls:2,vars:0,consts:[["box",""],["type","text",1,"w-full",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"textarea",1,0),u("keyup",function(){h(a);let l=p(1);return g(o.onTextChange(l.value))}),c()}}});let i=e;return i})();var qt=[{pattern:new RegExp("(?<!&nbsp;) \u2014","g"),replaceWith:"&nbsp;\u2014"},{pattern:new RegExp("(?<!ALL&nbsp;)ALL ","g"),replaceWith:"ALL&nbsp;"},{pattern:new RegExp("(?<!Tinkoff&nbsp;)Tinkoff Pro","g"),replaceWith:"Tinkoff&nbsp;Pro"},{pattern:new RegExp("(?<!Tinkoff&nbsp;)Tinkoff Shop","g"),replaceWith:"Tinkoff&nbsp;Shop"},{pattern:new RegExp("(?<!Tinkoff&nbsp;)Tinkoff Premium","g"),replaceWith:"Tinkoff&nbsp;Premium"},{pattern:new RegExp("(?<!Tinkoff&nbsp;)Tinkoff Private","g"),replaceWith:"Tinkoff&nbsp;Private"},{pattern:new RegExp("(?<!Tinkoff&nbsp;)Tinkoff Black","g"),replaceWith:"Tinkoff&nbsp;Black"},{pattern:new RegExp("(?<!Tinkoff&nbsp;)Tinkoff ID","g"),replaceWith:"Tinkoff&nbsp;ID"},{pattern:new RegExp("(?<!Tinkoff&nbsp;)Tinkoff Pay","g"),replaceWith:"Tinkoff&nbsp;Pay"},{pattern:new RegExp("(?<!\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;)\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444 \u041F\u043B\u0430\u0442\u0438\u043D\u0443\u043C","g"),replaceWith:"\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;\u041F\u043B\u0430\u0442\u0438\u043D\u0443\u043C"},{pattern:new RegExp("(?<!\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;)\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444 \u0421\u0442\u043E\u0440\u0438\u0441","g"),replaceWith:"\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;\u0421\u0442\u043E\u0440\u0438\u0441"},{pattern:new RegExp("(?<!\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;)\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444 \u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435","g"),replaceWith:"\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435"},{pattern:new RegExp("(?<!\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;)\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444 \u0411\u0438\u0437\u043D\u0435\u0441","g"),replaceWith:"\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;\u0411\u0438\u0437\u043D\u0435\u0441"},{pattern:new RegExp("(?<!\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;)\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444 \u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F","g"),replaceWith:"\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F"},{pattern:new RegExp("(?<!\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;)\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444 \u041A\u0432\u0435\u0441\u0442","g"),replaceWith:"\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;\u041A\u0432\u0435\u0441\u0442"},{pattern:new RegExp("(?<!\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;)\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444 \u0411\u0430\u043D\u043A","g"),replaceWith:"\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;\u0411\u0430\u043D\u043A"},{pattern:new RegExp("(?<!\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;)\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444 \u041C\u043E\u0431\u0430\u0439\u043B","g"),replaceWith:"\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;\u041C\u043E\u0431\u0430\u0439\u043B"},{pattern:new RegExp("(?<!\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;)\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444 \u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438","g"),replaceWith:"\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444&nbsp;\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438"},{pattern:new RegExp("(?<!&nbsp;) \u2192","g"),replaceWith:"&nbsp;\u2192"},{pattern:new RegExp("(?<!&nbsp;) \u20BD","g"),replaceWith:"&nbsp;\u20BD"},{pattern:new RegExp("(?<!&nbsp;) \u0440\u0443\u0431\u043B\u0435\u0439","g"),replaceWith:"&nbsp;\u0440\u0443\u0431\u043B\u0435\u0439"},{pattern:new RegExp("(?<!&nbsp;) \u20AC","g"),replaceWith:"&nbsp;\u20AC"},{pattern:new RegExp("(?<!&nbsp;) \xA5","g"),replaceWith:"&nbsp;\xA5"},{pattern:new RegExp("(?<!&nbsp;) 000","g"),replaceWith:"&nbsp;000"},{pattern:new RegExp("(?<!&nbsp;) \u0442\u044B\u0441","g"),replaceWith:"&nbsp;\u0442\u044B\u0441"},{pattern:new RegExp("(?<!&nbsp;) \u043C\u043B\u043D","g"),replaceWith:"&nbsp;\u043C\u043B\u043D"},{pattern:new RegExp("(?<!&nbsp;) \u043C\u043B\u0440\u0434","g"),replaceWith:"&nbsp;\u043C\u043B\u0440\u0434"},{pattern:new RegExp("(?<!&nbsp;) \u0433\u043E\u0434","g"),replaceWith:"&nbsp;\u0433\u043E\u0434"},{pattern:new RegExp("(?<!&nbsp;)( \u0431\u044B)(?=\\s|\\.|,|;|:|\\?|!|$)","g"),replaceWith:"&nbsp;\u0431\u044B"},{pattern:new RegExp("(?<!&nbsp;)( \u043B\u0438)(?=\\s|\\.|,|;|:|\\?|!|$)","g"),replaceWith:"&nbsp;\u043B\u0438"},{pattern:new RegExp("(?<!&nbsp;)( \u0436\u0435)(?=\\s|\\.|,|;|:|\\?|!|$)","g"),replaceWith:"&nbsp;\u0436\u0435"},{pattern:new RegExp("(?<!\\S)(?!\u0431\u044B|\u043B\u0438|\u0436\u0435)([\u0430-\u044F\u0410-\u042F\u0451\u04010-9a-zA-Z]{1,2})\\s","g"),replaceWith:"$1&nbsp;"},{pattern:new RegExp("(?<!&nbsp;) \\$","g"),replaceWith:"&nbsp;$"},{pattern:new RegExp("(?<!&nbsp;|\\d) (?=\\d+%)","g"),replaceWith:"&nbsp;"},{pattern:new RegExp("(?<!\\S)([\u0410-\u042F\u0401])\\.(?!&nbsp;) ","g"),replaceWith:"$1.&nbsp;"}],j=i=>{let e=i.split(/(\[\%.*?\%\])/);return e.forEach((r,t)=>{r.startsWith("[%")?e[t]=r:e[t]=qt.reduce((n,o)=>{let a=o.pattern,m=o.replaceWith;return n.replace(a,m)},r)}),e.join("")};var ct=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=t=>{let n=`
    <!-- start: header title -->
    <tr>
        <td class="textColor1" align="center"
            style="font-family: San\xA0Francisco,\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;color:#333333;font-weight:600;font-size:26px;line-height:36px;letter-spacing:0;">
            ${j(t)}
        </td>
    </tr>
    <!-- end: header title -->
    `;this.onChange.emit({order:this.order,text:n})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-header-title"]],standalone:!0,features:[y,f],decls:2,vars:0,consts:[["box",""],["type","text",1,"w-full",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"textarea",1,0),u("keyup",function(){h(a);let l=p(1);return g(o.onTextChange(l.value))}),c()}}});let i=e;return i})();var lt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=t=>{let n=`
    <!-- start: header text -->
    <tr>
        <td style="padding:12px 0 8px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td class="textColor1" align="center"
                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;color:#333333;font-weight:normal;font-size:20px;line-height:28px;">
                        ${j(t)}
                    </td>
                </tr>
                <tr>
                    <td style="padding-top:32px;">
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td class="accentBorder" height="1"
                                    bgColor="#494a4c"
                                    style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    `;this.onChange.emit({order:this.order,text:n})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-header-text"]],standalone:!0,features:[y,f],decls:2,vars:0,consts:[["box",""],["type","text",1,"w-full",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"textarea",1,0),u("keyup",function(){h(a);let l=p(1);return g(o.onTextChange(l.value))}),c()}}});let i=e;return i})();var pt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.template=`
  </table>
  </td>
</tr>
<!-- end: header -->

<tr>
  <td>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
  `}ngAfterContentInit(){setTimeout(()=>{this.onChange.emit({order:this.order,text:this.template})},0)}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-header-end"]],standalone:!0,features:[y,f],decls:1,vars:0,template:function(n,o){n&1&&k(0,"hr")}});let i=e;return i})();var dt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=t=>{let n=`
    <!-- start: content text -->
    <tr>
        <td class="textColor1"
            style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding:4px 0 16px;">
           ${j(t)}
        </td>
    </tr>
    <!-- end: content text -->
    `;this.onChange.emit({order:this.order,text:n})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-content-text"]],standalone:!0,features:[y,f],decls:2,vars:0,consts:[["box",""],["type","text",1,"w-full",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"textarea",1,0),u("keyup",function(){h(a);let l=p(1);return g(o.onTextChange(l.value))}),c()}}});let i=e;return i})();var ut=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=t=>{let n=`
    <!-- start: content title -->
    <tr>
        <td class="textColor1"
            style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:24px;line-height:32px;color:#333333;font-weight:600;padding:12px 0 8px;">
            ${j(t)}
        </td>
    </tr>
    <!-- end: content title -->
    `;this.onChange.emit({order:this.order,text:n})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-content-title"]],standalone:!0,features:[y,f],decls:2,vars:0,consts:[["box",""],["type","text",1,"w-full",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"textarea",1,0),u("keyup",function(){h(a);let l=p(1);return g(o.onTextChange(l.value))}),c()}}});let i=e;return i})();var mt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=t=>{let n=`
    <!-- start: accent text with border -->
    <tr>
        <td>
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td style="padding:12px 0 12px;">
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td class="accentBorder" height="1"
                                    bgColor="#494a4c"
                                    style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding:16px 0 16px;">
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td class="textColor1" align="center"
                                    style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:20px;line-height:28px;color:#333333;font-weight:normal;">
                                    ${t}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding:12px 0 12px;">
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td class="accentBorder" height="1"
                                    bgColor="#494a4c"
                                    style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: accent text with border -->
    `;this.onChange.emit({order:this.order,text:n})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-accent-text-with-border"]],standalone:!0,features:[y,f],decls:2,vars:0,consts:[["box",""],["type","text",1,"w-full",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"textarea",1,0),u("keyup",function(){h(a);let l=p(1);return g(o.onTextChange(l.value))}),c()}}});let i=e;return i})();var ft=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=(t,n)=>{let o=`
    <!-- start: button with background -->
    <tr>
        <td style="padding:24px 0 24px;" align="center">
            <table align="center" style="margin:0 auto;" cellpadding="0"
                cellspacing="0" border="0">
                <tr>
                    <td class="btnBack" bgcolor="#ffdd2d" align="center"
                        style="mso-padding-alt:16px 36px 16px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;border-radius:4px;">
                        <a href="${n}" target="_blank"
                            style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;display:inline-block;vertical-align:top;font-size:17px;line-height:24px;color:#333333;font-weight:normal;text-decoration:none;text-align:center;padding:16px 36px 16px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;border-radius:4px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-width:100%;">
                            ${t}
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: button with background -->
    `;this.onChange.emit({order:this.order,text:o})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-button-with-background"]],standalone:!0,features:[y,f],decls:8,vars:0,consts:[["box",""],["box1",""],["type","text","rows","3",1,"w-full","border-2",3,"keyup"],["type","text",1,"w-full","border-2",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"p"),w(1,"\u0422\u0435\u043A\u0441\u0442 \u043A\u043D\u043E\u043F\u043A\u0438"),c(),s(2,"textarea",2,0),u("keyup",function(){h(a);let l=p(3),C=p(7);return g(o.onTextChange(l.value,C.value))}),c(),s(4,"p"),w(5,"\u0421\u0441\u044B\u043B\u043A\u0430 \u043A\u043D\u043E\u043F\u043A\u0438"),c(),s(6,"textarea",3,1),u("keyup",function(){h(a);let l=p(3),C=p(7);return g(o.onTextChange(l.value,C.value))}),c()}}});let i=e;return i})();var ht=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=(t,n)=>{let o=`
    <!-- start: image -->
    <tr>
        <td align="center" style="padding-bottom:0px;">
            <img src="https://email.cdn-tinkoff.ru/email/images/4_star_up.gif" 
                style="display:block;width:100%;max-width:536px; vertical-align:top;" border="0"
                alt="" width="536">
        </td>
    </tr>
    <!-- end: image -->

<!-- start: button with background -->
    <tr>
        <td style="padding:0px 0 0px;" align="center">
            <table align="center" style="margin:0 auto;" cellpadding="0"
                cellspacing="0" border="0">
                <tr>
                    <td class="btnBack" bgcolor="#ffdd2d" align="center"
                        style="mso-padding-alt:16px 36px 16px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;border-radius:4px;">
                        <a href="${n}" target="_blank"
                            style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;display:inline-block;vertical-align:top;font-size:17px;line-height:24px;color:#333333;font-weight:normal;text-decoration:none;text-align:center;padding:16px 36px 16px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;border-radius:4px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-width:100%;">
                            ${t}
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: button with background -->

<!-- start: image -->
    <tr>
        <td align="center" style="padding-bottom:0px;">
            <img src="https://email.cdn-tinkoff.ru/email/images/4_star_down.gif" 
                style="display:block;width:100%;max-width:536px; vertical-align:top;" border="0"
                alt="" width="536">
        </td>
    </tr>
    <!-- end: image -->

    `;this.onChange.emit({order:this.order,text:o})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-button-with-gif"]],standalone:!0,features:[y,f],decls:8,vars:0,consts:[["box",""],["box1",""],["type","text","rows","3",1,"w-full","border-2",3,"keyup"],["type","text",1,"w-full","border-2",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"p"),w(1,"\u0422\u0435\u043A\u0441\u0442 \u043A\u043D\u043E\u043F\u043A\u0438"),c(),s(2,"textarea",2,0),u("keyup",function(){h(a);let l=p(3),C=p(7);return g(o.onTextChange(l.value,C.value))}),c(),s(4,"p"),w(5,"\u0421\u0441\u044B\u043B\u043A\u0430 \u043A\u043D\u043E\u043F\u043A\u0438"),c(),s(6,"textarea",3,1),u("keyup",function(){h(a);let l=p(3),C=p(7);return g(o.onTextChange(l.value,C.value))}),c()}}});let i=e;return i})();var gt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.template=`
<tr>
                                    <td style="padding-bottom:48px;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
                                            <tr>
                                                <td style="padding:40px 0 32px;">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td class="accentBorder" height="1" bgColor="#494a4c"
                                                                style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="padding:8px 0 8px;">
                                                    <a target="_blank" href="https://www.tinkoff.ru/" class="textColor2"
                                                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;text-decoration:none;">Tinkoff.ru</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="padding-top:12px;">
                                                    <a 
                                                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;display:inline-block;color:#336fee;text-decoration:none;">
                                                        <img src="https://email.cdn-tinkoff.ru/email/images/logo@2x.png"
                                                            style="display:block;" height="49" border="0"
                                                            alt="Tinkoff.ru">
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
  `}ngAfterContentInit(){setTimeout(()=>{this.onChange.emit({order:this.order,text:this.template})},0)}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-footer-one"]],standalone:!0,features:[y,f],decls:1,vars:0,template:function(n,o){n&1&&k(0,"hr")}});let i=e;return i})();var yt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=t=>{let n=`
    <tr>
    <td style="padding-bottom:48px;">
        <table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
            <tr>
                <td style="padding:40px 0 32px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td class="accentBorder" height="1" bgColor="#494a4c"
                                style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="center" style="padding:8px 0 8px;">
                    <a href="[% param.url_unsub_topic %]" class="textColor2" target="_blank"
                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;display:inline-block;text-decoration:none;">
                        \u041E\u0442\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F
                    </a>
                    <span class="textColor2"
                        style="font-family:Arial,sans-serif !important;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;display:inline-block;margin-left:2px;margin-right:2px;">
                        &bull;
                    </span>
                    <a href="${t}" class="textColor2" target="_blank"
                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;display:inline-block;text-decoration:none;">
                        \u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u043A\u0446\u0438\u0438
                    </a>
                </td>
            </tr>
            <tr>
                <td align="center" style="padding:8px 0 8px;">
                    <a target="_blank" href="https://www.tinkoff.ru/" class="textColor2"
                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;text-decoration:none;">Tinkoff.ru</a>
                </td>
            </tr>
            <tr>
                <td align="center" style="padding-top:24px;">
                    <a 
                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;display:inline-block;color:#336fee;text-decoration:none;">
                        <img src="https://email.cdn-tinkoff.ru/email/images/logo@2x.png"
                            style="display:block;" height="49" border="0"
                            alt="Tinkoff.ru">
                    </a>
                </td>
            </tr>
        </table>
    </td>
</tr>
    `;this.onChange.emit({order:this.order,text:n})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-footer-two"]],standalone:!0,features:[y,f],decls:2,vars:0,consts:[["box",""],["type","text",1,"w-full",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"textarea",1,0),u("keyup",function(){h(a);let l=p(1);return g(o.onTextChange(l.value))}),c()}}});let i=e;return i})();var bt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.template=`
<tr>
                                    <td style="padding-bottom:48px;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
                                            <tr>
                                                <td style="padding:40px 0 32px;">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td class="accentBorder" height="1" bgColor="#494a4c"
                                                                style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="padding:8px 0 8px;">
                                                    <a target="_blank" href="https://www.tinkoff.ru/" class="textColor2"
                                                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;text-decoration:none;">Tinkoff.ru</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="padding-top:12px;">
                                                    <a 
                                                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;display:inline-block;color:#336fee;text-decoration:none;">
                                                        <img src="https://email.cdn-tinkoff.ru/email/images/logo@2x.png"
                                                            style="display:block;" height="49" border="0"
                                                            alt="Tinkoff.ru">
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
  `}ngAfterContentInit(){setTimeout(()=>{this.onChange.emit({order:this.order,text:this.template})},0)}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-footer-three"]],standalone:!0,features:[y,f],decls:1,vars:0,template:function(n,o){n&1&&k(0,"hr")}});let i=e;return i})();var xt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=t=>{let n=`
    <tr>
    <td style="padding-bottom:48px;">
        <table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
            <tr>
                <td style="padding:40px 0 32px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td class="accentBorder" height="1" bgColor="#494a4c"
                                style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="center" style="padding:8px 0 8px;">
                    <a href="${t}" class="textColor2" target="_blank"
                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;display:inline-block;text-decoration:none;">
                        \u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u043A\u0446\u0438\u0438
                    </a>
                </td>
            </tr>
            <tr>
                <td align="center" style="padding:8px 0 8px;">
                    <a target="_blank" href="https://www.tinkoff.ru/" class="textColor2"
                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;text-decoration:none;">Tinkoff.ru</a>
                </td>
            </tr>
            <tr>
                <td align="center" style="padding-top:24px;">
                    <a href="#" target="_blank"
                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;display:inline-block;color:#336fee;text-decoration:none;">
                        <img src="https://email.cdn-tinkoff.ru/email/images/logo@2x.png"
                            style="display:block;" height="49" border="0"
                            alt="Tinkoff.ru">
                    </a>
                </td>
            </tr>
        </table>
    </td>
</tr>



    `;this.onChange.emit({order:this.order,text:n})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-footer-four"]],standalone:!0,features:[y,f],decls:2,vars:0,consts:[["box",""],["type","text",1,"w-full",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"textarea",1,0),u("keyup",function(){h(a);let l=p(1);return g(o.onTextChange(l.value))}),c()}}});let i=e;return i})();var vt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=t=>{let n=`
    <tr>
    <td style="padding-bottom:48px;">
        <table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
            <tr>
                <td style="padding:32px 0 24px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td class="accentBorder" height="1" bgColor="#494a4c"
                                style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            
                <tr>
                <td class="textColor1" align="center"
                    style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:12px;line-height:20px;color:#adadad;font-weight:normal;padding:4px 32px 4px;">
                   <a target="_blank" class="textColor2"
                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;text-decoration:none;"> \u041D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0435\u0439</a>
                </td>
            </tr>


            <tr>
                <td class="textColor1" align="center"
                    style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:12px;line-height:20px;color:#adadad;font-weight:normal;padding:4px 32px 4px;">
                   <a target="_blank" href="https://www.tinkoff.ru/invest/disclaimers/risk/" class="textColor2"
                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;text-decoration:none;">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E\u0431 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0438 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438</a>
                </td>
            </tr>





            <tr>
                <td align="center" style="padding:4px 0 4px;">
                    <a href="${t}" class="textColor2" target="_blank"
                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;color:#adadad ;font-weight:normal;font-size:12px;line-height:20px;display:inline-block;text-decoration:none;">
                        \u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u043A\u0446\u0438\u0438
                    </a>
                </td>
            </tr>
            <tr>
                <td align="center" style="padding:4px 0 4px;">
                    <a target="_blank" href="https://www.tinkoff.ru/" class="textColor2"
                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;text-decoration:none;">Tinkoff.ru</a>
                </td>
            </tr>
            <tr>
                <td align="center" style="padding-top:20px;">
                    <a  
                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;display:inline-block;color:#336fee;text-decoration:none;">
                        <img src="https://email.cdn-tinkoff.ru/email/images/logo@2x.png"
                            style="display:block;" height="49" border="0"
                            alt="Tinkoff.ru">
                    </a>
                </td>
            </tr>
        </table>
    </td>
</tr>
    `;this.onChange.emit({order:this.order,text:n})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-footer-five"]],standalone:!0,features:[y,f],decls:2,vars:0,consts:[["box",""],["type","text",1,"w-full",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"textarea",1,0),u("keyup",function(){h(a);let l=p(1);return g(o.onTextChange(l.value))}),c()}}});let i=e;return i})();var Ct=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=(t,n)=>{let o=`
    <!-- start: alarm block -->
    <tr>
        <td style="padding:12px 0 12px;">
            <table class="alarmBlock" border="0" cellpadding="0"
                cellspacing="24" width="100%" bgColor="#fef6e3">
                <tr>
                    <td>
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td align="center">
                                    <img src="https://email.cdn-tinkoff.ru/email/images/ing64.png"
                                        style="max-width:100%;display:block;"
                                        border="0" alt="" width="40">
                                </td>
                            </tr>
                            <tr>
                                <td class="textColor1" align="center"
                                    style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:24px;line-height:32px;color:#333333;font-weight:600;padding:16px 0 8px;">
                                    ${t}
                                </td>
                            </tr>
                            <tr>
                                <td class="textColor1" align="center"
                                    style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding:4px 0 16px;">
                                    ${n}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: alarm block -->
    `;this.onChange.emit({order:this.order,text:o})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-alarm-block"]],standalone:!0,features:[y,f],decls:8,vars:0,consts:[["box",""],["box1",""],["type","text","rows","3",1,"w-full","border-2",3,"keyup"],["type","text",1,"w-full","border-2",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"p"),w(1,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0430\u043B\u044F\u0440\u043C-\u0431\u043B\u043E\u043A\u0430"),c(),s(2,"textarea",2,0),u("keyup",function(){h(a);let l=p(3),C=p(7);return g(o.onTextChange(l.value,C.value))}),c(),s(4,"p"),w(5,"\u0422\u0435\u043A\u0441\u0442 \u0431\u043B\u043E\u043A\u0430"),c(),s(6,"textarea",3,1),u("keyup",function(){h(a);let l=p(3),C=p(7);return g(o.onTextChange(l.value,C.value))}),c()}}});let i=e;return i})();var Dt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=(t,n)=>{let o=`
    <!-- start: promo block -->
    <tr>
        <td style="padding:12px 0 12px;">
            <table class="promoAccentBlock" border="0" cellpadding="0"
                cellspacing="32" width="100%" bgColor="#f5f6f7">
                <tr>
                    <td>
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td class="textColor1" align="center"
                                    style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:32px;line-height:40px;color:#333333;font-weight:normal;">
                                    ${t}
                                </td>
                            </tr>
                            <tr>
                                <td class="textColor3" align="center"
                                    style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:15px;line-height:24px;color:#999999;font-weight:normal;">
                                    ${n}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: promo block -->
    `;this.onChange.emit({order:this.order,text:o})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-promo-block"]],standalone:!0,features:[y,f],decls:8,vars:0,consts:[["box",""],["box1",""],["type","text","rows","3",1,"w-full","border-2",3,"keyup"],["type","text",1,"w-full","border-2",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"p"),w(1,"\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434"),c(),s(2,"textarea",2,0),u("keyup",function(){h(a);let l=p(3),C=p(7);return g(o.onTextChange(l.value,C.value))}),c(),s(4,"p"),w(5,"\u0422\u0435\u043A\u0441\u0442 \u043F\u043E\u0434 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u043E\u043C"),c(),s(6,"textarea",3,1),u("keyup",function(){h(a);let l=p(3),C=p(7);return g(o.onTextChange(l.value,C.value))}),c()}}});let i=e;return i})();var wt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=(t,n)=>{let o=`
    <!-- start: promo block -->
    <tr>
        <td style="padding:12px 0 12px;">
            <table class="promoAccentBlock" border="0" cellpadding="0"
                cellspacing="32" width="100%" bgColor="#f5f6f7">
                <tr>
                    <td>
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td class="textColor1" align="center"
                                    style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:20px;line-height:28px;color:#333333;font-weight:normal;">
                                    <a  target="_blank"
                                        class="textColor1"
                                        style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:20px;line-height:28px;color:#333333;font-weight:normal;text-decoration:none;">
                                        ${t}
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="textColor3" align="center"
                                    style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:15px;line-height:24px;color:#999999;font-weight:normal;">
                                    ${n}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: promo block -->
    `;this.onChange.emit({order:this.order,text:o})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-bring-friend"]],standalone:!0,features:[y,f],decls:8,vars:0,consts:[["box",""],["box1",""],["type","text","rows","3",1,"w-full","border-2",3,"keyup"],["type","text",1,"w-full","border-2",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"p"),w(1,"\u0421\u0441\u044B\u043B\u043A\u0430-\u0448\u0430\u0440\u0438\u043B\u043A\u0430"),c(),s(2,"textarea",2,0),u("keyup",function(){h(a);let l=p(3),C=p(7);return g(o.onTextChange(l.value,C.value))}),c(),s(4,"p"),w(5,'\u0422\u0435\u043A\u0441\u0442 \u043F\u043E\u0434 \u0441\u0441\u044B\u043B\u043A\u043E\u0439, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "\u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443"'),c(),s(6,"textarea",3,1),u("keyup",function(){h(a);let l=p(3),C=p(7);return g(o.onTextChange(l.value,C.value))}),c()}}});let i=e;return i})();var kt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.template=`
                <!-- start: empty preheader -->
                <!--[if !mso]><!-->
                <div class="preheader" style="font-size:0px;color:transparent;opacity:0;"></div>
                <div class="preheader" style="font-size:0px;color:transparent;opacity:0;">
                    &#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;\u2005
                </div>
                <!--<![endif]-->
                <!-- end: empty preheader -->
  `}ngAfterContentInit(){setTimeout(()=>{this.onChange.emit({order:this.order,text:this.template})},0)}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-tempty-preheader"]],standalone:!0,features:[y,f],decls:1,vars:0,template:function(n,o){n&1&&k(0,"hr")}});let i=e;return i})();var _t=(()=>{let e=class e extends b{constructor(){super(...arguments),this.template=`
  <!-- start: btns -->
  <tr>
      <td style="padding:24px 0 24px;" align="center">
          <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                  <td style="padding:0 6px;">
                      <a href="https://apps.apple.com/RU/app/id1183786286" target="_blank"
                          style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;display:block;font-size:16px;line-height:20px;font-weight:normal;text-decoration:none;text-align:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:132px;">
                          <img src="https://email.cdn-tinkoff.ru/email/images/ButtonStoreI.png"
                              alt="app store" width="132"
                              style="display:block;max-width:100%;width:132px;"
                              border="0">
                      </a>
                  </td>
                  <td style="padding:0 6px;">
                      <a href="https://play.google.com/store/apps/details?id=ru.tinkoff.investing" target="_blank"
                          style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;display:block;font-size:16px;line-height:20px;font-weight:normal;text-decoration:none;text-align:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:148px;">
                          <img src="https://email.cdn-tinkoff.ru/email/images/ButtonStoreA123.png"
                              alt="app store" width="148"
                              style="display:block;max-width:100%;width:148px;"
                              border="0">
                      </a>
                  </td>
              </tr>
          </table>
      </td>
  </tr>
  <!-- end: btns -->
  `}ngAfterContentInit(){setTimeout(()=>{this.onChange.emit({order:this.order,text:this.template})},0)}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-btns"]],standalone:!0,features:[y,f],decls:1,vars:0,template:function(n,o){n&1&&k(0,"hr")}});let i=e;return i})();var Tt=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=t=>{let n=`
    <!-- start: image -->
    <tr>
        <td align="center" style="padding-bottom:32px;">
            <img src="https://email.cdn-tinkoff.ru/email/images/${t}.png"
                style="display:block;width:100%;max-width:536px;" border="0"
                alt="" width="536">
        </td>
    </tr>
    <!-- end: image -->

    `;this.onChange.emit({order:this.order,text:n})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-image"]],standalone:!0,features:[y,f],decls:2,vars:0,consts:[["box",""],["type","text",1,"w-full",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"textarea",1,0),u("keyup",function(){h(a);let l=p(1);return g(o.onTextChange(l.value))}),c()}}});let i=e;return i})();var Ft=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=(t,n,o)=>{let a=`

    <!-- start: block with little image -->
    <tr>
        <td style="padding-top:12px;">
            <table border="0" cellspacing="0" cellpadding="0" width="100%">
                <tr>
                    <td style="padding-bottom:12px;">
                        <table border="0" cellspacing="0" cellpadding="0"
                            width="100%" style="font-size:0;">
                            <tr>
                                <td valign="center" style="width:76px;">
                                    <a href="#" target="_blank"
                                        style="font-size:0;text-decoration:none;display:inline-block;">
                                        <img height="60" width="60"
                                            src="https://email.cdn-tinkoff.ru/email/images/${n}.png"
                                            border="0"
                                            alt="${o}"
                                            style="display:block;max-width:100%;">
                                    </a>
                                </td>
                                <td valign="center" class="textColor1"
                                    style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;">
                                    ${t}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding:12px 0 12px;">
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td class="accentBorder" height="1"
                                    bgColor="#494a4c"
                                    style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: block with little image -->
    `;this.onChange.emit({order:this.order,text:a})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-square-image"]],standalone:!0,features:[y,f],decls:12,vars:0,consts:[["box",""],["box1",""],["box2",""],["type","text","rows","3",1,"w-full","border-2",3,"keyup"],["type","text",1,"w-full","border-2",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"p"),w(1,"\u0422\u0435\u043A\u0441\u0442 \u0431\u043B\u043E\u043A\u0430"),c(),s(2,"textarea",3,0),u("keyup",function(){h(a);let l=p(3),C=p(7),T=p(11);return g(o.onTextChange(l.value,C.value,T.value))}),c(),s(4,"p"),w(5,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438"),c(),s(6,"textarea",4,1),u("keyup",function(){h(a);let l=p(3),C=p(7),T=p(11);return g(o.onTextChange(l.value,C.value,T.value))}),c(),s(8,"p"),w(9,"\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438"),c(),s(10,"textarea",4,2),u("keyup",function(){h(a);let l=p(3),C=p(7),T=p(11);return g(o.onTextChange(l.value,C.value,T.value))}),c()}}});let i=e;return i})();var It=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=(t,n,o)=>{let a=`
    <!-- start: block with little \u0441ircle image -->
    <tr>
        <td style="padding-top:12px;">
            <table border="0" cellspacing="0" cellpadding="0" width="100%">
                <tr>
                    <td style="padding-bottom:12px;">
                        <table border="0" cellspacing="0" cellpadding="0"
                            width="100%" style="font-size:0;">
                            <tr>
                                <td valign="center" style="width:76px;"> 
                                    <a href="#" target="_blank"
                                        style="font-size:0;text-decoration:none;display:inline-block;">
                                        <img height="60" width="60"
                                            src="https://email.cdn-tinkoff.ru/email/images/${o}.png"
                                            border="0" alt=""
                                            style="display:block;max-width:100%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;border-radius:50%;">
                                    </a>
                                </td>
                                <td valign="center">
                                    <table border="0" cellspacing="0"
                                        cellpadding="0" width="100%">
                                        <tr>
                                            <td class="textColor1"
                                                style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;">
                                                ${t}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="textColor3"
                                                style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:15px;line-height:24px;color:#999999;font-weight:normal;">
                                                ${n}
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding:12px 0 12px;">
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td class="accentBorder" height="1"
                                    bgColor="#494a4c"
                                    style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: block with little \u0441ircle image -->
    `;this.onChange.emit({order:this.order,text:a})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-circle-image"]],standalone:!0,features:[y,f],decls:12,vars:0,consts:[["box",""],["box1",""],["box2",""],["type","text","rows","3",1,"w-full","border-2",3,"keyup"],["type","text",1,"w-full","border-2",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"p"),w(1,"\u0422\u0435\u043A\u0441\u0442 \u0431\u043B\u043E\u043A\u0430"),c(),s(2,"textarea",3,0),u("keyup",function(){h(a);let l=p(3),C=p(7),T=p(11);return g(o.onTextChange(l.value,C.value,T.value))}),c(),s(4,"p"),w(5,"\u0421\u0435\u0440\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0431\u043B\u043E\u043A\u0430"),c(),s(6,"textarea",4,1),u("keyup",function(){h(a);let l=p(3),C=p(7),T=p(11);return g(o.onTextChange(l.value,C.value,T.value))}),c(),s(8,"p"),w(9,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438"),c(),s(10,"textarea",4,2),u("keyup",function(){h(a);let l=p(3),C=p(7),T=p(11);return g(o.onTextChange(l.value,C.value,T.value))}),c()}}});let i=e;return i})();var St=(()=>{let e=class e extends b{constructor(){super(...arguments),this.onTextChange=t=>{let n=`
           ${t}
    `;this.onChange.emit({order:this.order,text:n})}}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=x(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["app-operator"]],standalone:!0,features:[y,f],decls:2,vars:0,consts:[["box",""],["type","text",1,"w-full",3,"keyup"]],template:function(n,o){if(n&1){let a=v();s(0,"textarea",1,0),u("keyup",function(){h(a);let l=p(1);return g(o.onTextChange(l.value))}),c()}}});let i=e;return i})();var xe=new M("MutationObserver config");var ve=(()=>{class i extends _e{constructor({nativeElement:r},t){super(n=>{let o=new MutationObserver(a=>{n.next(a)});return o.observe(r,t),()=>{o.disconnect()}})}}return i.\u0275fac=function(r){return new(r||i)(_(N),_(xe))},i.\u0275prov=A({token:i,factory:i.\u0275fac}),i})();var At=["*"],Kt=["wrapper"],re=(()=>{class i{constructor(r){this.el=r,this.el$=new Q,this.debounce=0,this.orderChange=this.el$.pipe(Se(()=>Fe(this.debounce)),Ie(this.filter.bind(this)),ce(t=>this.reorder(t))),this.element=null,this.order$=new ae(new Map)}set order(r){this.order$.next(r)}get order(){return this.order$.value}rearrange(r){this.el$.next(r)}filter(r){return!!this.element&&!!r&&this.element!==r}reorder(r){var t,n;let o=Array.from(this.el.nativeElement.children),a=o.indexOf(this.element||r),m=o.indexOf(r),l=this.order.size?new Map(this.order):new Map(o.map((K,G)=>[G,G])),C=(t=l.get(a))!==null&&t!==void 0?t:a,T=(n=l.get(m))!==null&&n!==void 0?n:m;return l.set(a,T),l.set(m,C),this.order$.next(l),l}}return i.\u0275fac=function(r){return new(r||i)(I(N))},i.\u0275cmp=d({type:i,selectors:[["tui-tiles"]],hostVars:2,hostBindings:function(r,t){r&1&&u("pointerleave.silent",function(){return t.rearrange()}),r&2&&me("_dragged",t.element)},inputs:{debounce:"debounce",order:"order"},outputs:{orderChange:"orderChange"},features:[H([it,ye,ve,{provide:xe,useValue:{childList:!0}}])],ngContentSelectors:At,decls:1,vars:0,template:function(r,t){r&1&&(fe(),he(0))},styles:[`tui-tiles{position:relative;z-index:0;display:grid;grid-auto-flow:dense;justify-items:stretch}tui-tiles._dragged tui-tile>.t-wrapper{pointer-events:none}tui-tiles._dragged tui-tile:not(._dragged)>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tiles:not(._dragged) tui-tile._dragged>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tile>.t-wrapper{position:absolute;z-index:0;border-radius:inherit}tui-tile._dragged>.t-wrapper{z-index:1;transition:none}
`],encapsulation:2,changeDetection:0}),i})(),Mt=(()=>{class i{constructor(r,t,n,o){this.el=r,this.tiles=t,this.resize$=n,this.mutation$=o,this.sub=new ke,this.offset$=new ae([NaN,NaN]),this.position$=Te([this.offset$.pipe(X(et)),this.resize$.pipe(le(null)),this.mutation$.pipe(le(null)),this.tiles.order$.pipe(Z(0))]).pipe(ce(([a])=>a))}init(r){this.sub.add(this.position$.subscribe(t=>{this.setPosition(r,t),this.setRect(r,t)}))}setOffset(r){this.offset$.next(r)}ngOnDestroy(){this.sub.unsubscribe()}getRect([r,t]){return{top:Number.isNaN(t)?this.el.nativeElement.offsetTop:t,left:Number.isNaN(r)?this.el.nativeElement.offsetLeft:r,width:this.el.nativeElement.clientWidth,height:this.el.nativeElement.clientHeight,right:NaN,bottom:NaN}}setRect({style:r},t){let{top:n,left:o,width:a,height:m}=this.getRect(t);r.top=P(n),r.left=P(o),r.width=P(a),r.height=P(m)}setPosition(r,[t]){if(!Number.isNaN(t)){r.style.setProperty("position","fixed");return}let{style:n}=r,o=r.getBoundingClientRect(),a=this.el.nativeElement.getBoundingClientRect();n.removeProperty("position"),n.top=P(o.top-a.top+this.el.nativeElement.offsetTop),n.left=P(o.left-a.left+this.el.nativeElement.offsetLeft)}}return i.\u0275fac=function(r){return new(r||i)(_(N),_(re),_(ye),_(ve))},i.\u0275prov=A({token:i,factory:i.\u0275fac}),i})(),Ce=(()=>{class i{constructor(r,t,n){this.service=r,this.el=t,this.tiles=n,this.width=1,this.height=1,this.dragged=!1}get column(){return`span var(--tui-width, ${this.width})`}get row(){return`span var(--tui-height, ${this.height})`}get element(){return this.el.nativeElement}onEnter(){this.tiles.rearrange(this.element)}onDrag(r){let t=!Number.isNaN(r[0]);this.dragged=this.dragged||t,this.tiles.element=t?this.element:null,this.service.setOffset(r)}onTransitionEnd(){this.dragged=!1}ngAfterViewInit(){this.wrapper&&this.service.init(this.wrapper.nativeElement)}ngOnDestroy(){this.tiles.element===this.element&&(this.tiles.element=null)}}return i.\u0275fac=function(r){return new(r||i)(I(Mt),I(N),I(re))},i.\u0275cmp=d({type:i,selectors:[["tui-tile"]],viewQuery:function(r,t){if(r&1&&Ee(Kt,5),r&2){let n;je(n=Re())&&(t.wrapper=n.first)}},hostVars:6,hostBindings:function(r,t){r&1&&u("pointerenter",function(){return t.onEnter()}),r&2&&(U("grid-column",t.column)("grid-row",t.row),me("_dragged",t.dragged))},inputs:{width:"width",height:"height"},features:[H([Mt])],ngContentSelectors:At,decls:3,vars:0,consts:[["wrapper",""],[1,"t-wrapper",3,"transitionend.self"]],template:function(r,t){if(r&1){let n=v();fe(),s(0,"div",1,0),u("transitionend.self",function(){return h(n),g(t.onTransitionEnd())}),he(2),c()}},encapsulation:2,changeDetection:0}),i})();function Qt(i=NaN){return!Number.isNaN(i)||!Number.isNaN(this.x)}function Zt(){return!Number.isNaN(this.x)}var Bt=(()=>{class i{constructor(r){this.tile=r,this.x=NaN,this.y=NaN}onStart(r){let t=nt(r),{x:n,y:o,pointerId:a}=r;tt(t)&&t.releasePointerCapture(a),this.onPointer(n,o)}onPointer(r=NaN,t=NaN){let{left:n,top:o}=this.tile.element.getBoundingClientRect();this.x=r-n,this.y=t-o,this.tile.onDrag([NaN,NaN])}onMove(r,t){this.tile.onDrag([r-this.x,t-this.y])}}return i.\u0275fac=function(r){return new(r||i)(I(Ce))},i.\u0275dir=O({type:i,selectors:[["","tuiTileHandle",""]],hostVars:4,hostBindings:function(r,t){r&1&&u("pointerdown.silent",function(o){return t.onStart(o)})("pointerup.silent",function(){return t.onPointer()},!1,ue)("pointermove.silent",function(o){return t.onMove(o.x,o.y)},!1,ue),r&2&&U("touch-action","none")("user-select","none")}}),se([be(Qt)],i.prototype,"onPointer",null),se([be(Zt)],i.prototype,"onMove",null),i})(),Ot=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=V({type:i}),i.\u0275inj=R({}),i})();function Xt(){return"$event"}var Yt=new M("EventArgument",{providedIn:"root",factory:Xt});var Et=new M("IoEventContext"),Jt=new M("IoEventContextProvider"),Vt=new M("DynamicComponentInjector"),en=(()=>{class i{constructor(){this.trackOutputChanges=!1}}return i.\u0275fac=function(r){return new(r||i)},i.\u0275prov=A({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),jt=(()=>{class i{constructor(r,t,n,o,a,m,l,C){if(this.injector=r,this.differs=t,this.cfr=n,this.options=o,this.compInjector=a,this.eventArgument=m,this.cdr=l,this.eventContextProvider=C,this.lastComponentInst=null,this.lastChangedInputs=new Set,this.inputsDiffer=this.differs.find({}).create(),this.compFactory=null,this.outputsShouldDisconnect$=new Q,this.inputs={},this.outputs={},this.outputsChanged=()=>!1,this.options.trackOutputChanges){let T=this.differs.find({}).create();this.outputsChanged=K=>!!T.diff(K)}}get compRef(){return this.compInjector.componentRef}get componentInst(){return this.compRef?this.compRef.instance:null}get componentInstChanged(){return this.lastComponentInst!==this.componentInst?(this.lastComponentInst=this.componentInst,!0):!1}ngOnDestroy(){this.disconnectOutputs()}update(r,t){if(!this.compRef){this.disconnectOutputs();return}let n=this.updateIO(r,t),o=this.componentInstChanged,a=this.getInputsChanges(o),m=this.outputsChanged(this.outputs);a&&this.updateChangedInputs(a),(o||a)&&this.updateInputs(o||!this.lastChangedInputs.size),(o||m||n.outputsChanged)&&this.bindOutputs()}updateIO(r,t){r||(r={}),t||(t={});let n=this.inputs!==r,o=this.outputs!==t;return this.inputs=r,this.outputs=t,{inputsChanged:n,outputsChanged:o}}updateInputs(r=!1){r&&this.updateCompFactory();let t=this.compRef,n=this.inputs;if(!n||!t)return;let o=this.lastChangedInputs.size?a=>this.lastChangedInputs.has(a):()=>!0;Object.keys(n).filter(o).forEach(a=>t.setInput(a,n[a]))}bindOutputs(){this.disconnectOutputs();let r=this.componentInst,t=this.outputs;!t||!r||(t=this.resolveOutputs(t),Object.keys(t).filter(n=>r[n]).forEach(n=>r[n].pipe(Me(this.outputsShouldDisconnect$)).subscribe(o=>(this.cdr.markForCheck(),t[n](o)))))}disconnectOutputs(){this.outputsShouldDisconnect$.next()}getInputsChanges(r){return r&&this.inputsDiffer.diff({}),this.inputsDiffer.diff(this.inputs)}updateChangedInputs(r){this.lastChangedInputs.clear();let t=n=>this.lastChangedInputs.add(n.key);r.forEachAddedItem(t),r.forEachChangedItem(t),r.forEachRemovedItem(t)}resolveCompFactory(){if(!this.compRef)return null;try{try{return this.cfr.resolveComponentFactory(this.compRef.componentType)}catch{return this.cfr.resolveComponentFactory(this.compRef.instance.constructor)}}catch{return null}}updateCompFactory(){this.compFactory=this.resolveCompFactory()}resolveOutputs(r){return this.updateOutputsEventContext(),r=this.processOutputs(r),this.compFactory?this.remapIO(r,this.compFactory.outputs):r}updateOutputsEventContext(){if(this.eventContextProvider){let r=Y.create({name:"EventContext",parent:this.injector,providers:[this.eventContextProvider]});this.outputsEventContext=r.get(Et)}else this.outputsEventContext=this.injector.get(Et,null)}processOutputs(r){let t={};return Object.keys(r).forEach(n=>{let o=r[n],a;typeof o=="function"?a=o:a=o&&this.processOutputArgs(o),this.outputsEventContext&&a&&(a=a.bind(this.outputsEventContext)),t[n]=a}),t}processOutputArgs(r){let t=this.eventArgument,n="args"in r?r.args||[]:[t],o=n.indexOf(t),a=r.handler;return o===-1?function(){return a.apply(this,n)}:function(m){let l=[...n];return l[o]=m,a.apply(this,l)}}remapIO(r,t){let n={};return Object.keys(r).forEach(o=>{let a=this.findPropByTplInMapping(o,t)||o;n[a]=r[o]}),n}findPropByTplInMapping(r,t){for(let n of t)if(n.templateName===r)return n.propName;return null}}return i.\u0275fac=function(r){return new(r||i)(_(Y),_($e),_(Ae),_(en),_(Vt),_(Yt),_(Pe),_(Jt,8))},i.\u0275prov=A({token:i,factory:i.\u0275fac}),i})();var Nt=(()=>{class i{constructor(r){this.ioService=r}ngDoCheck(){this.ioService.update(this.ngComponentOutletNdcDynamicInputs,this.ngComponentOutletNdcDynamicOutputs)}}return i.\u0275fac=function(r){return new(r||i)(I(jt))},i.\u0275dir=O({type:i,selectors:[["","ngComponentOutletNdcDynamicInputs",""],["","ngComponentOutletNdcDynamicOutputs",""]],inputs:{ngComponentOutletNdcDynamicInputs:"ngComponentOutletNdcDynamicInputs",ngComponentOutletNdcDynamicOutputs:"ngComponentOutletNdcDynamicOutputs"},exportAs:["ndcDynamicIo"],standalone:!0,features:[H([jt])]}),i})(),zt=(()=>{class i{constructor(r){this.componentOutlet=r}get componentRef(){return this.componentOutlet._componentRef}}return i.\u0275fac=function(r){return new(r||i)(I(J,1))},i.\u0275dir=O({type:i,selectors:[["","ngComponentOutlet",""]],exportAs:["ndcComponentOutletInjector"],standalone:!0,features:[H([{provide:Vt,useExisting:i}])]}),i})(),Ht=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=V({type:i}),i.\u0275inj=R({}),i})();var po=new M("ReflectRef",{providedIn:"root",factory:()=>window.Reflect});function nn(i,e){if(i&1&&(s(0,"div")(1,"label"),k(2,"input",6),w(3),c()()),i&2){let r=e.$implicit;F(2),S("value",r.id),F(),q("",r.name," ")}}function on(i,e){if(i&1){let r=v();s(0,"div",7),k(1,"input",8),s(2,"tui-svg",9),u("click",function(){let n=h(r).index,o=$();return g(o.deleteItem(n))}),c()()}if(i&2){let r=e.index;F(),S("formControlName",r)}}var B=function(i){return i[i.BULLET=0]="BULLET",i[i.NUMBER=1]="NUMBER",i[i.DASH=2]="DASH",i}(B||{}),$t=(()=>{let e=class e extends b{constructor(t){super(),this.formBuilder=t,this.listForm=new ge({}),this.bullets=[{id:B.BULLET,name:"\u041C\u0430\u0440\u043A\u0435\u0440"},{id:B.NUMBER,name:"\u0427\u0438\u0441\u043B\u043E"},{id:B.DASH,name:"\u0427\u0435\u0440\u0442\u0430"}],this.generateCode=(n,o)=>{let a="",m="";switch(n){case B.BULLET:a="list",m=`
  <td valign="top" width="24" class="bullet" style="padding:2px 0 0px;mso-padding-alt:0px 0 0; font:bold 32px/28px Arial, Helvetica, sans-serif; color:#ffdd2d;">&bull;
  `;break;case B.NUMBER:a="num list",m=`
  <td valign="top" width="24" class="textColor1" style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding-bottom:2px;">
        `;break;case B.DASH:a="dashed list",m=`
  <td valign="top" width="24" class="textColor1" style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding-bottom:2px;">\u2014
  `;break;default:}let l=o.reduce((T,K,G)=>T+`
      <tr>
      <td style="padding:4px 0 ${G===o.length-1?12:4}px;">
          <table border="0" cellpadding="0" cellspacing="0"
              width="100%">
              <tr>
                  ${m}
                  ${n===B.NUMBER?G+1+".":""}
                  </td>
                  <td class="textColor1"
                      style="font-family:'San\xA0Francisco',\xA0Segoe,\xA0Roboto, Arial, Helvetica,\xA0sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding-bottom:2px;">
                      ${K}
                  </td>
              </tr>
          </table>
      </td>
  </tr>
      `,"");return`
<!-- start: ${a} -->
    <tr>
        <td style="padding-bottom:4px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              ${l}
            </table>
        </td>
    </tr>
<!-- end: ${a} -->
`}}ngOnInit(){this.listForm=new ge({bullets:new ne(B.BULLET),items:this.formBuilder.array([new ne])}),this.listForm.valueChanges.pipe(Z(200),X()).subscribe(t=>{let n=this.generateCode(t.bullets,t.items);this.onChange.emit({order:this.order,text:n})})}get formData(){return this.listForm.get("items")}addItem(){this.listForm.get("items").push(new ne(null))}deleteItem(t){this.listForm.get("items").removeAt(t)}};e.\u0275fac=function(n){return new(n||e)(I(Ye))},e.\u0275cmp=d({type:e,selectors:[["app-dynamic-list"]],standalone:!0,features:[y,f],decls:7,vars:3,consts:[[1,"overflow-auto","mt-4","mb-4",3,"formGroup"],[1,"flex","gap-4","mb-4"],[4,"ngFor","ngForOf"],["formArrayName","items"],["class","flex justify-between",4,"ngFor","ngForOf"],["tuiButton","","appearance","secondary","size","s","type","button",3,"click"],["type","radio","formControlName","bullets",3,"value"],[1,"flex","justify-between"],["type","text",1,"border-2","w-full","mb-2",3,"formControlName"],["src","tuiIconX",1,"delete",3,"click"]],template:function(n,o){n&1&&(s(0,"form",0)(1,"div",1),z(2,nn,4,2,"div",2),c(),s(3,"div",3),z(4,on,3,1,"div",4),c(),s(5,"button",5),u("click",function(){return o.addItem()}),w(6,"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u043F\u0438\u0441\u043A\u0430"),c()()),n&2&&(S("formGroup",o.listForm),F(2),S("ngForOf",o.bullets),F(2),S("ngForOf",o.formData==null?null:o.formData.controls))},dependencies:[Je,qe,Le,Ke,Ge,Ue,Qe,Xe,Ze,te,ee,L,W,oe,ie],styles:["[_nghost-%COMP%]{display:block;height:100%;overflow:auto}"]});let i=e;return i})();function rn(i,e){i&1&&Oe(0)}function an(i,e){if(i&1){let r=v();s(0,"tui-tile",3)(1,"div",4),w(2),z(3,rn,1,0,"ng-container",5),k(4,"tui-svg",6),s(5,"tui-svg",7),u("click",function(){let n=h(r).index,o=$();return g(o.removeComponent(n))}),c()()()}if(i&2){let r=e.$implicit,t=e.index,n=$();U("order",n.order.get(t)),S("height",r.height)("width",3),F(2),q(" ",r.name," "),F(),S("ngComponentOutlet",r.component)("ngComponentOutletNdcDynamicInputs",r.inputs)("ngComponentOutletNdcDynamicOutputs",r.outputs)}}function sn(i,e){if(i&1){let r=v();s(0,"button",8),u("click",function(){let n=h(r).$implicit,o=$();return g(o.addComponent(n))}),w(1),c()}if(i&2){let r=e.$implicit;F(),q(" ",r.name,`
`)}}var Wt=(()=>{let e=class e{constructor(){this.onGenerateCode=new E,this.components=[{component:ut,name:"ContentTitle",height:1},{component:dt,name:"ContentText",height:2},{component:st,name:"Preheader",height:1},{component:ct,name:"HeaderTitle",height:1},{component:lt,name:"HeaderText",height:1},{component:pt,name:"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0431\u043B\u043E\u043A \u043F\u043E\u0441\u043B\u0435 \u0445\u0435\u0434\u0435\u0440\u0430",height:1},{component:rt,name:"Little Title",height:1},{component:ot,name:"Accent text with background",height:1},{component:mt,name:"AccentTextWithBorder",height:1},{component:at,name:"Text line",height:1},{component:Tt,name:"Image - \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",height:1},{component:ft,name:"\u041A\u043D\u043E\u043F\u043A\u0430",height:2},{component:ht,name:"\u041A\u043D\u043E\u043F\u043A\u0430 \u0441 \u0433\u0438\u0444",height:2},{component:gt,name:"FooterOne - \u0444\u0443\u0442\u0435\u0440 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0434",height:1},{component:yt,name:"FooterTwo - \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u043A\u0446\u0438\u0438",height:1},{component:bt,name:"FooterThree - \u0444\u0443\u0442\u0435\u0440 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0434",height:1},{component:xt,name:"FooterFour - \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u043A\u0446\u0438\u0438",height:1},{component:vt,name:"FooterFive - \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u043A\u0446\u0438\u0438",height:1},{component:Ct,name:"AlarmBlock",height:2},{component:Dt,name:"PromoBlock",height:2},{component:wt,name:"BringFriend",height:2},{component:kt,name:"EmptyPreheader",height:1},{component:_t,name:"BtnsPreheader",height:1},{component:$t,name:"\u0421\u043F\u0438\u0441\u043E\u043A",height:3},{component:Ft,name:"\u0411\u043B\u043E\u043A \u0441 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0439 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u043E\u0439",height:3},{component:It,name:"\u0411\u043B\u043E\u043A \u0441 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0439 \u043A\u0440\u0443\u0433\u043B\u043E\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u043E\u0439",height:3},{component:St,name:"\u0423\u0441\u043B\u043E\u0432\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044B",height:1}],this.blocks=[],this.order=new Map,this.addComponent=t=>{let n=this.blocks.length;this.order.set(n,n),this.blocks.push({name:t.name,component:t.component,inputs:{order:n},outputs:{onChange:o=>{this.onGenerateCode.emit(this.generateCode(o))}},code:"",height:t.height}),this.onGenerateCode.emit(this.generateCode({order:n,text:""}))},this.removeComponent=t=>{let n=[],o=this.order.get(t);this.blocks.splice(t,1),this.order.delete(t),this.order.forEach((m,l)=>{n.push([l>=t?l-1:l,m>o?m-1:m])}),this.order=new Map(n);let a=this.updateCode(this.order);this.onGenerateCode.emit(a)},this.generateCode=t=>(this.blocks[t.order].code=t.text,this.updateCode(this.order)),this.updateCode=t=>{let n="";return[...t].sort((a,m)=>Number(a[1])-Number(m[1])).forEach(a=>{n+=this.blocks[a[0]].code}),n}}onDrag(t){let n=this.updateCode(t);this.onGenerateCode.emit(n)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["app-input"]],outputs:{onGenerateCode:"onGenerateCode"},standalone:!0,features:[f],decls:3,vars:4,consts:[[1,"tiles",3,"orderChange","debounce","order"],["class","tile",3,"height","order","width",4,"ngFor","ngForOf"],["appearance","primary","tuiButton","","type","button","class","tui-space_right-3 tui-space_bottom-3",3,"click",4,"ngFor","ngForOf"],[1,"tile",3,"height","width"],[1,"content"],[4,"ngComponentOutlet","ngComponentOutletNdcDynamicInputs","ngComponentOutletNdcDynamicOutputs"],["src","tuiIconDragLarge","tuiTileHandle","",1,"handle"],["src","tuiIconX",1,"delete",3,"click"],["appearance","primary","tuiButton","","type","button",1,"tui-space_right-3","tui-space_bottom-3",3,"click"]],template:function(n,o){n&1&&(s(0,"tui-tiles",0),He("orderChange",function(m){return ze(o.order,m)||(o.order=m),m}),u("orderChange",function(m){return o.onDrag(m)}),z(1,an,6,8,"tui-tile",1),c(),z(2,sn,2,1,"button",2)),n&2&&(S("debounce",200),Ne("order",o.order),F(),S("ngForOf",o.blocks),F(),S("ngForOf",o.components))},dependencies:[Ot,re,Ce,Bt,oe,ie,L,W,te,J,ee,Ht,zt,Nt],styles:['.tiles[_ngcontent-%COMP%]{max-height:70%;overflow:auto;gap:1rem;grid-auto-rows:minmax(100px,auto)}.tile[_ngcontent-%COMP%]:before{content:"Drop here";display:flex;height:100%;justify-content:center;align-items:center;box-sizing:border-box;color:var(--tui-base-04);border-radius:var(--tui-radius-l);border:2px dashed var(--tui-base-03)}.content[_ngcontent-%COMP%]{position:relative;transition:box-shadow .3s;height:100%;padding:1rem;background:var(--tui-base-01);box-sizing:border-box;border-radius:var(--tui-radius-l);border:1px solid var(--tui-base-03);overflow:hidden}tui-tile._dragged[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{box-shadow:var(--tui-shadow-hover)}.title[_ngcontent-%COMP%]{margin:0 0 1rem}.handle[_ngcontent-%COMP%]{transition:opacity .3s;position:absolute;right:.75rem;top:1rem;background:var(--tui-base-01);opacity:0;cursor:move}tui-tiles[_ngcontent-%COMP%]:not(._dragged)   tui-tile[_ngcontent-%COMP%]:hover   .handle[_ngcontent-%COMP%], tui-tile._dragged[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]{opacity:.7}.delete[_ngcontent-%COMP%]{top:0;right:0;position:absolute}']});let i=e;return i})();var De=class{constructor(e,r){this._document=r;let t=this._textarea=this._document.createElement("textarea"),n=t.style;n.position="fixed",n.top=n.opacity="0",n.left="-999em",t.setAttribute("aria-hidden","true"),t.value=e,t.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(t)}copy(){let e=this._textarea,r=!1;try{if(e){let t=this._document.activeElement;e.select(),e.setSelectionRange(0,e.value.length),r=this._document.execCommand("copy"),t&&t.focus()}}catch{}return r}destroy(){let e=this._textarea;e&&(e.remove(),this._textarea=void 0)}},cn=(()=>{let e=class e{constructor(t){this._document=t}copy(t){let n=this.beginCopy(t),o=n.copy();return n.destroy(),o}beginCopy(t){return new De(t,this._document)}};e.\u0275fac=function(n){return new(n||e)(_(We))},e.\u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),ln=new M("CDK_COPY_TO_CLIPBOARD_CONFIG"),Lt=(()=>{let e=class e{constructor(t,n,o){this._clipboard=t,this._ngZone=n,this.text="",this.attempts=1,this.copied=new E,this._pending=new Set,o&&o.attempts!=null&&(this.attempts=o.attempts)}copy(t=this.attempts){if(t>1){let n=t,o=this._clipboard.beginCopy(this.text);this._pending.add(o);let a=()=>{let m=o.copy();!m&&--n&&!this._destroyed?this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(a,1)):(this._currentTimeout=null,this._pending.delete(o),o.destroy(),this.copied.emit(m))};a()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(t=>t.destroy()),this._pending.clear(),this._destroyed=!0}};e.\u0275fac=function(n){return new(n||e)(I(cn),I(Be),I(ln,8))},e.\u0275dir=O({type:e,selectors:[["","cdkCopyToClipboard",""]],hostBindings:function(n,o){n&1&&u("click",function(){return o.copy()})},inputs:{text:[pe.None,"cdkCopyToClipboard","text"],attempts:[pe.None,"cdkCopyToClipboardAttempts","attempts"]},outputs:{copied:"cdkCopyToClipboardCopied"},standalone:!0});let i=e;return i})(),Gt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=V({type:e}),e.\u0275inj=R({});let i=e;return i})();var Ut=(()=>{let e=class e{constructor(){this.code="",this.formattedCode="",this.prefix=`
  <html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <title>\u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444</title>

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i"
        rel="stylesheet">
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i');
        @import url('http://dev.tinc.by/tinkoff/fonts/sf/stylesheet.css');

        :root {
            color-scheme: light dark;
            supported-color-schemes: light dark;
        }

        td,
        a,
        p,
        span {
            word-wrap: normal;
            word-break: normal;
            hyphens: none;
            font-family: 'San\xA0Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif !important;
        }

        .bullet {
            line-height: 21px !important;
        }

        .btnBack:hover {
            background-color: #fcc521;
        }

        .btn:hover {
            background-color: #E4EBF3;
        }

        @media only screen and (min-width: 600px) {
            .tableItem {
                display: inline-block !important;
                width: 50% !important;
                vertical-align: top !important;
                -webkit-box-sizing: border-box !important;
                -moz-box-sizing: border-box !important;
                box-sizing: border-box !important;
                padding-right: 22px !important;
            }

            .tableNoBackItem {
                display: inline-block !important;
                width: 50% !important;
                vertical-align: top !important;
                -webkit-box-sizing: border-box !important;
                -moz-box-sizing: border-box !important;
                box-sizing: border-box !important;
                padding-left: 12px !important;
                padding-right: 12px !important;
            }
        }

        @media only screen and (max-width: 375px) {

            .btn,
            .btnBack {
                max-width: 100% !important;
            }
        }

        @media (prefers-color-scheme: dark) {
            .bodyTable {
                background-color: #404041 !important;
            }

            .contentTable {
                background-color: #333333 !important;
            }

            .textColor1 {
                color: #ffffff !important;
            }

            .textColor2 {
                color: #adadad !important;
            }

            .textColor3 {
                color: #8d8d8e !important;
            }

            .link {
                color: #336fee !important;
            }

            .line {
                background-color: #6D6F71 !important;
            }

            .accentBlock {
                background-color: #3c4149 !important;
            }

            .alarmBlock {
                background-color: #48453e !important;
            }

            .accentBorder {
                background-color: #6d6f71 !important;
            }

            .promoAccentBlock {
                background-color: #404041 !important;
            }

            .blockBack {
                background-color: #404041 !important;
            }

            .statDown {
                color: #f54444 !important;
            }

            .statUp {
                color: #00b92d !important;
            }

            .btn {
                color: #428bf9 !important;
                background-color: #3c4149 !important;
            }

            .btnBack {
                background-color: #ffdd2d !important;
                color: #333333 !important;
            }
        }

        [data-ogsc] .bodyTable {
            background-color: #404041 !important;
        }

        [data-ogsc] .contentTable {
            background-color: #333333 !important;
        }

        [data-ogsc] .textColor1 {
            color: #ffffff !important;
        }

        [data-ogsc] .textColor2 {
            color: #adadad !important;
        }

        [data-ogsc] .textColor3 {
            color: #8d8d8e !important;
        }

        [data-ogsc] .link {
            color: #336fee !important;
        }

        [data-ogsc] .line {
            background-color: #6D6F71 !important;
        }

        [data-ogsc] .accentBlock {
            background-color: #3c4149 !important;
        }

        [data-ogsc] .alarmBlock {
            background-color: #48453e !important;
        }

        [data-ogsc] .accentBorder {
            background-color: #6d6f71 !important;
        }

        [data-ogsc] .promoAccentBlock {
            background-color: #404041 !important;
        }

        [data-ogsc] .blockBack {
            background-color: #404041 !important;
        }

        [data-ogsc] .statDown {
            color: #f54444 !important;
        }

        [data-ogsc] .statUp {
            color: #00b92d !important;
        }

        [data-ogsc] .btn {
            color: #428bf9 !important;
            background-color: #3c4149 !important;
        }

        [data-ogsc] .btnBack {
            background-color: #ffdd2d !important;
            color: #333333 !important;
        }
    </style>

    <!--[if mso]>
    <style type="text/css">
        td,a,p,span{
            font-family: Arial, sans-serif !important;
        }
    </style>
    <![endif]-->
</head>

<body style="margin:0;padding:0;">
    <table class="bodyTable" border="0" cellpadding="0" cellspacing="0" bgcolor="#f5f6f7" width="100%"
        style="border-collapse:collapse;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;-moz-text-size-adjust:none;word-wrap:normal;word-break:normal;hyphens:none;">
        <tr>
            <td align="center" style="padding-bottom:48px;">

                <!--[if gte mso 9]>
                <table border="0" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                        <td>
                <![endif]-->
                <table class="contentTable" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff"
                    style="width:100%;max-width:600px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;">
                    <tr>
                        <td align="center" style="padding:0 20px;">
                            <!--[if gte mso 9]>
                            <table border="0" cellpadding="0" cellspacing="0" width="536">
                                <tr>
                                    <td>
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="width:100%;max-width:536px;">

                                <!-- start: header -->
                                <tr>
                                    <td style="padding:20px 0 16px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">

  `,this.suffix=`
  </table>
                                    </td>
                                </tr>
                            </table>
                            <!--[if gte mso 9]>
                                    </td>
                                </tr>
                            </table>
                            <![endif]-->
                        </td>
                    </tr>
                </table>
                <!--[if gte mso 9]>
                        </td>
                    </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
    </table>
</body>

</html>
`}ngOnChanges(t){we(this,null,function*(){let n=yield import("./chunk-3CU77BGN.js");this.formattedCode=n.default.html(this.prefix+t.code.currentValue+this.suffix,{})}).catch(console.error)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["app-output"]],inputs:{code:"code"},standalone:!0,features:[de,f],decls:4,vars:2,consts:[["appearance","secondary","tuiIconButton","","icon","tuiIconCopyLarge","type","button",1,"float-right",3,"cdkCopyToClipboard"]],template:function(n,o){n&1&&(s(0,"section"),k(1,"button",0),s(2,"pre"),w(3),c()()),n&2&&(F(),S("cdkCopyToClipboard",o.formattedCode),F(2),Ve(o.formattedCode))},dependencies:[Gt,Lt,L,W],styles:["pre[_ngcontent-%COMP%]{display:block;border:2px solid black;white-space:pre-wrap;word-break:break-all}"]});let i=e;return i})();var yr=(()=>{let e=class e{constructor(){this.code=""}onGenerateCode(t){this.code=t}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["app-editor"]],standalone:!0,features:[f],decls:3,vars:1,consts:[[3,"onGenerateCode"],[3,"code"]],template:function(n,o){n&1&&(s(0,"div")(1,"app-input",0),u("onGenerateCode",function(m){return o.onGenerateCode(m)}),c(),k(2,"app-output",1),c()),n&2&&(F(2),S("code",o.code))},dependencies:[Wt,Ut]});let i=e;return i})();export{yr as EditorComponent};

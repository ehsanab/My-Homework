// ice-cold.js 0.651 contentserv10 Cutom script for browser Chrome and page 
if(typeof ICE==="undefined"){var ICE={extend:function(d,s){if(d&&s)for(var p in s)d[p]=s[p];return d;},exif:function(d,s){if(d&&s)for(var p in s)if(!d[p]||d[p]=="null")d[p]=s[p];return d;}}}
if(!ICE.version||ICE.version<0.651){
if (!ICE.exif)ICE.exif=function(d,s){if(d&&s)for(var p in s)if(!d[p]||d[p]=="null")d[p]=s[p];return d;};
ICE.exif(ICE, {
    divs:{},txid:{},info:{},lies:{},err:{},talent:{},domain:'',domainId:'a0j700000007MQXAA2',imgkey:1,
    pid:'null',did:'im20120410',pver:'Chrome-V2.0.3-001',sessionId:'D1DADED84F87152332482D770E9BAB9A'
});
ICE.extend(ICE,{
 version:0.651,root:'https://secureserv.brandaffinity.net/',userAddr:'2.180.73.143',random:0.82326
});

ICE.ua        = navigator.userAgent.toLowerCase();
ICE.isIE      = !!(navigator.appVersion.indexOf("MSIE") != -1);
ICE.isWin     = !!(navigator.appVersion.toLowerCase().indexOf("win") != -1);
ICE.isOpera   = !!(ICE.ua.indexOf("opera") != -1);
ICE.isChrome  = ICE.ua.indexOf("chrome") > -1;
ICE.isSafari  = !ICE.isChrome && (/webkit|khtml/).test(ICE.ua);
ICE.isFirefox = !!(!ICE.isChrome && /mozilla/.test(ICE.ua) && !/(compati)/.test(ICE.ua));
ICE.isIE      = ICE.isIE && ICE.isWin && !ICE.isOpera;
ICE.isMobile  = ICE.ua.indexOf("palmos") > 0 || ICE.ua.indexOf("iphone") > 0 || ICE.ua.indexOf("android") > 0 || ICE.ua.indexOf("blackberry") > 0 || ICE.ua.indexOf("mobile") > 0;

ICE.LJS=function(url){var h=document.getElementsByTagName("head").item(0);if (h){var load=document.createElement("script");load.setAttribute("type","text/javascript");load.setAttribute("charset","utf-8");load.setAttribute("src",url);h.appendChild(load);}};
ICE.LIT=function(url){var img=document.createElement("img");img.setAttribute("width","1");img.setAttribute("height","1");img.setAttribute("alt","");img.setAttribute("style","border:0;margin:0;padding:0;position:absolute;left:-10px;top:-10px");img.setAttribute("src",url)};

ICE.hash=function(s){var hash=0;if(s){hash=0;for(var i=s.length-1;i>=0;i--){var c=s.charCodeAt(i);hash=(hash<<6&0x0FFFFFFF)+c+(c<<14);c=hash&0x0FE00000;hash=c?hash^c>>21:hash}}return hash};
ICE.randomInt=function(range){return Math.floor((range||0x7FFFFFFF)*Math.random())};
ICE.isBlank=function(s){return!s||s.length<1||s=='null'};
ICE.getTrackUrl=function(){return"https:"==document.location.protocol?"https://ssl.google-analytics.com/__utm.gif":"http://www.google-analytics.com/__utm.gif"};
ICE.track=function(t,p){if(t&&t.length>10)return;var dom=ICE.hash(ICE.domain),uid,first,last,now=Math.round(new Date().getTime()/1000),visits=1;var nav=window.navigator;if(ICE.user){uid=ICE.user.id;first=Date.parse(ICE.user.firstLogin)/1000;last=Date.parse(ICE.user.lastLogin)/1000}else{first=last=now;visits=1}var utma=[dom,ICE.hash(uid),first,last,now,visits].join("."),utmz=[dom,now,visits,1,['utmcsr=(direct)','utmccn=(direct)','utmcmd=(none)'].join("|")].join("."),utme='8(PID*DID*DomainId*UID)9('+ICE.pid+'*'+ICE.did+'*'+ICE.domainId+'*'+uid+')';if(t=='event'&&p&&p.category)utme='5('+p.category+'*'+p.action+'*'+p.label+')'+utme;var a={utmac:'UA-8395350-26',utme:encodeURIComponent(utme),utmhn:encodeURIComponent(ICE.domain),utmdt:encodeURIComponent(document.title),utmfl:encodeURIComponent(ICE.MM_PluginVersion),utmn:ICE.randomInt(),utmcs:(nav&&nav.language?nav.language:nav&&nav.browserLanguage?nav.browserLanguage:'-').toLowerCase(),utmje:(nav&&nav.javaEnabled()?1:0),utmsr:(window.screen?(window.screen.width+"x"+window.screen.height):'-'),utmsc:(window.screen?window.screen.colorDepth+"-bit":'-'),utmcc:encodeURIComponent('__utma='+utma+';+__utmz='+utmz),utmwv:'4.8.8'};if(t!='page')a.utmt=t;var url=ICE.getTrackUrl();var amp='?';for(var key in a){if(a.hasOwnProperty(key)){url+=amp+key+'='+a[key];amp='&'}}ICE.LIT(url);return url};
ICE.activate=function(){};
ICE.deactivate=function(){};


if(!ICE.user)ICE.user={javaClass:"com.bat.model.live.User", id:"a0qs1ehmxsn000016vkjx3dm", name:"", facebookId:"", timezone:0, pluginUser:true, temporaryPassword:false, avatarWidth:0, avatarHeight:0, fanCount:0, friendCount:0, sessionCount:0, channelCount:1, loginCount:0, visits:1, firstLogin:"05/07/2012 07:00:14", numTapsSent:0, numTapsSeen:0, pushTapEnabled:false, confirmToSender:false, mobileConfig:"{\"targetChannels\":1,\"mediaKeys\":0}", status:"Active", createdDate:"05/07/2012 07:00:14"}
;


ICE.track('page');
}

!function(a){a.fn.lightBox=function(b){function d(){return e(this,c),!1}function e(c,d){if(a("embed, object, select").css({visibility:"hidden"}),f(),b.imageArray.length=0,b.activeImage=0,1==d.length)b.imageArray.push(new Array(c.getAttribute("href"),c.getAttribute("title")));else for(var e=0;e<d.length;e++)b.imageArray.push(new Array(d[e].getAttribute("href"),d[e].getAttribute("title")));for(;b.imageArray[b.activeImage][0]!=c.getAttribute("href");)b.activeImage++;g()}function f(){a("body").append('<div id="jquery-overlay"></div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"></a><a href="#" id="lightbox-nav-btnNext"></a></div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="'+b.imageLoading+'"></a></div></div></div><div id="lightbox-container-image-data-box"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"></span><span id="lightbox-image-details-currentNumber"></span></div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="'+b.imageBtnClose+'"></a></div></div></div></div>');var c=q();a("#jquery-overlay").css({backgroundColor:b.overlayBgColor,opacity:b.overlayOpacity,width:c[0],height:c[1]}).fadeIn();var d=r();a("#jquery-lightbox").css({top:d[1]+c[3]/10,left:d[0]}).show(),a("#jquery-overlay,#jquery-lightbox").click(function(){p()}),a("#lightbox-loading-link,#lightbox-secNav-btnClose").click(function(){return p(),!1}),a(window).resize(function(){var b=q();a("#jquery-overlay").css({width:b[0],height:b[1]});var c=r();a("#jquery-lightbox").css({top:c[1]+b[3]/10,left:c[0]})})}function g(){a("#lightbox-loading").show(),b.fixedNavigation?a("#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide():a("#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide();var c=new Image;c.onload=function(){a("#lightbox-image").attr("src",b.imageArray[b.activeImage][0]),h(c.width,c.height),c.onload=function(){}},c.src=b.imageArray[b.activeImage][0]}function h(c,d){var e=a("#lightbox-container-image-box").width(),f=a("#lightbox-container-image-box").height(),g=c+2*b.containerBorderSize,h=d+2*b.containerBorderSize,j=e-g,k=f-h;a("#lightbox-container-image-box").animate({width:g,height:h},b.containerResizeSpeed,function(){i()}),0==j&&0==k&&s(a.browser.msie?250:100),a("#lightbox-container-image-data-box").css({width:c}),a("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({height:d+2*b.containerBorderSize})}function i(){a("#lightbox-loading").hide(),a("#lightbox-image").fadeIn(function(){j(),k()}),o()}function j(){a("#lightbox-container-image-data-box").slideDown("fast"),a("#lightbox-image-details-caption").hide(),b.imageArray[b.activeImage][1]&&a("#lightbox-image-details-caption").html(b.imageArray[b.activeImage][1]).show(),b.imageArray.length>1&&a("#lightbox-image-details-currentNumber").html(b.txtImage+" "+(b.activeImage+1)+" "+b.txtOf+" "+b.imageArray.length).show()}function k(){a("#lightbox-nav").show(),a("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({background:"transparent url("+b.imageBlank+") no-repeat"}),0!=b.activeImage&&(b.fixedNavigation?a("#lightbox-nav-btnPrev").css({background:"url("+b.imageBtnPrev+") left 15% no-repeat"}).unbind().bind("click",function(){return b.activeImage=b.activeImage-1,g(),!1}):a("#lightbox-nav-btnPrev").unbind().hover(function(){a(this).css({background:"url("+b.imageBtnPrev+") left 15% no-repeat"})},function(){a(this).css({background:"transparent url("+b.imageBlank+") no-repeat"})}).show().bind("click",function(){return b.activeImage=b.activeImage-1,g(),!1})),b.activeImage!=b.imageArray.length-1&&(b.fixedNavigation?a("#lightbox-nav-btnNext").css({background:"url("+b.imageBtnNext+") right 15% no-repeat"}).unbind().bind("click",function(){return b.activeImage=b.activeImage+1,g(),!1}):a("#lightbox-nav-btnNext").unbind().hover(function(){a(this).css({background:"url("+b.imageBtnNext+") right 15% no-repeat"})},function(){a(this).css({background:"transparent url("+b.imageBlank+") no-repeat"})}).show().bind("click",function(){return b.activeImage=b.activeImage+1,g(),!1})),l()}function l(){a(document).keydown(function(a){n(a)})}function m(){a(document).unbind()}function n(a){null==a?(keycode=event.keyCode,escapeKey=27):(keycode=a.keyCode,escapeKey=a.DOM_VK_ESCAPE),key=String.fromCharCode(keycode).toLowerCase(),key!=b.keyToClose&&"x"!=key&&keycode!=escapeKey||p(),key!=b.keyToPrev&&37!=keycode||0!=b.activeImage&&(b.activeImage=b.activeImage-1,g(),m()),key!=b.keyToNext&&39!=keycode||b.activeImage!=b.imageArray.length-1&&(b.activeImage=b.activeImage+1,g(),m())}function o(){b.imageArray.length-1>b.activeImage&&(objNext=new Image,objNext.src=b.imageArray[b.activeImage+1][0]),b.activeImage>0&&(objPrev=new Image,objPrev.src=b.imageArray[b.activeImage-1][0])}function p(){a("#jquery-lightbox").remove(),a("#jquery-overlay").fadeOut(function(){a("#jquery-overlay").remove()}),a("embed, object, select").css({visibility:"visible"})}function q(){var a,b;window.innerHeight&&window.scrollMaxY?(a=window.innerWidth+window.scrollMaxX,b=window.innerHeight+window.scrollMaxY):document.body.scrollHeight>document.body.offsetHeight?(a=document.body.scrollWidth,b=document.body.scrollHeight):(a=document.body.offsetWidth,b=document.body.offsetHeight);var c,d;return self.innerHeight?(c=document.documentElement.clientWidth?document.documentElement.clientWidth:self.innerWidth,d=self.innerHeight):document.documentElement&&document.documentElement.clientHeight?(c=document.documentElement.clientWidth,d=document.documentElement.clientHeight):document.body&&(c=document.body.clientWidth,d=document.body.clientHeight),b<d?pageHeight=d:pageHeight=b,a<c?pageWidth=a:pageWidth=c,arrayPageSize=new Array(pageWidth,pageHeight,c,d),arrayPageSize}function r(){var a,b;return self.pageYOffset?(b=self.pageYOffset,a=self.pageXOffset):document.documentElement&&document.documentElement.scrollTop?(b=document.documentElement.scrollTop,a=document.documentElement.scrollLeft):document.body&&(b=document.body.scrollTop,a=document.body.scrollLeft),arrayPageScroll=new Array(a,b),arrayPageScroll}function s(a){var b=new Date;c=null;do var c=new Date;while(c-b<a)}b=jQuery.extend({overlayBgColor:"#000",overlayOpacity:.8,fixedNavigation:!1,imageLoading:"images/lightbox-ico-loading.gif",imageBtnPrev:"images/lightbox-btn-prev.gif",imageBtnNext:"images/lightbox-btn-next.gif",imageBtnClose:"images/lightbox-btn-close.gif",imageBlank:"images/lightbox-blank.gif",containerBorderSize:10,containerResizeSpeed:400,txtImage:"Image",txtOf:"of",keyToClose:"c",keyToPrev:"p",keyToNext:"n",imageArray:[],activeImage:0},b);var c=this;return this.unbind("click").click(d)}}(jQuery);
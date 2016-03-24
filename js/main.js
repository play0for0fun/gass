$(document).ready(function() {
	$.arcticmodal('setDefault', {
		 overlay: {
        css: {
            
    			backgroundColor: '#737dbd',
    			opacity: .9
        }
    }
	});

	$('.close').click(function(e){
		e.preventDefault();
		$.arcticmodal('close');
	});

	$('.btn-call').click(function(e){
		e.preventDefault();
		$('#zz-pop').arcticmodal();
	});

	$('.sec2 .block-item .btn-purch').click(function(e){
		e.preventDefault();
		$('zaktov').val($(this).data('ident'));
		$('#zak-pop').arcticmodal();
	});

	$('.sec4 .block-item .btn-purch').click(function(e){
		e.preventDefault();
		$('zakakk').val($(this).data('ident'));
		$('#zaka-pop').arcticmodal();
	});

	$('.sec2 .btn-save').click(function(e){
		e.preventDefault();
		$('#kat-pop').arcticmodal();
	});

	$('.sec6 .btn-save').click(function(e){
		e.preventDefault();
		$('#otz-pop').arcticmodal();
	});

	$('.btn-purch1').click(function(e){
		e.preventDefault();
		$('#kart-pop').arcticmodal();
	});

	$('.opt-btn').click(function(e){
		e.preventDefault();
		$('#opt').arcticmodal();
	});

	$('.conf-btn').click(function(e){
		e.preventDefault();
		$('#conf').arcticmodal();
	});
	
	$('.menu-a').click(function(e){e.preventDefault();$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top-100}, 1000);});

	slider1 = $('#big-left-slide-wrap').bxSlider({pager:false,controls:false, auto:false, speed: 400});
	$('#sld1l').click(function(){slider1.goToPrevSlide();});
	$('#sld1r').click(function(){slider1.goToNextSlide();});

	slider2 = $('#big-right-slide-wrap').bxSlider({pager:false,controls:false, auto:false, speed: 400});
	$('#sld2l').click(function(){slider2.goToPrevSlide();});
	$('#sld2r').click(function(){slider2.goToNextSlide();});

	$('.sec2 .sec2-btn2').click(function(){
		$('.sec2 .sec2-btn2').removeClass('active');
		$(this).addClass('active');
		$('.sec2 .block-group-slider,.sec2 .arrow-left,.sec2 .arrow-right').fadeOut();
		if ($(this).data('slide')=='left') {$('#big-left-slide,#sld1l,#sld1r').fadeIn({start:function(){slider1.reloadSlider()}});}
			else{$('#big-right-slide,#sld2l,#sld2r').fadeIn({start:function(){slider2.reloadSlider()}});}
	});

	$('.block-item a').click(function(e){
		e.preventDefault();
		$($(this).parent().parent().attr('data-fancy')).trigger('click');
	});

	$('.item-img').click(function(e){
		e.preventDefault();
		$($(this).parent().attr('data-fancy')).trigger('click');
	});

	asld1 = $('#small-slide-1-wrap').bxSlider({pager:false,controls:false, auto:false, speed: 400});
	$('#asl1l').click(function(){asld1.goToPrevSlide();});
	$('#asl1r').click(function(){asld1.goToNextSlide();});

	asld2 = $('#small-slide-2-wrap').bxSlider({pager:false,controls:false, auto:false, speed: 400});
	$('#asl2l').click(function(){asld2.goToPrevSlide();});
	$('#asl2r').click(function(){asld2.goToNextSlide();});

	asld3 = $('#small-slide-3-wrap').bxSlider({pager:false,controls:false, auto:false, speed: 400});
	$('#asl3l').click(function(){asld3.goToPrevSlide();});
	$('#asl3r').click(function(){asld3.goToNextSlide();});

	asld4 = $('#small-slide-4-wrap').bxSlider({pager:false,controls:false, auto:false, speed: 400});
	$('#asl4l').click(function(){asld4.goToPrevSlide();});
	$('#asl4r').click(function(){asld4.goToNextSlide();});

	$('.sec4 .sec2-btn2').click(function(){
		$('.sec4 .sec2-btn2').removeClass('active');
		$(this).addClass('active');
		$('.sec4 .block-group-slider,.sec4 .arrow-left,.sec4 .arrow-right').fadeOut();
		if ($(this).data('slide')=='1') {$('#small-slide-1,#asl1l,#asl1r').fadeIn({start:function(){asld1.reloadSlider()}});}
		else if($(this).data('slide')=='2'){$('#small-slide-2,#asl2l,#asl2r').fadeIn({start:function(){asld2.reloadSlider()}});}
		else if($(this).data('slide')=='3'){$('#small-slide-3,#asl3l,#asl3r').fadeIn({start:function(){asld3.reloadSlider()}});}
		else if($(this).data('slide')=='4'){$('#small-slide-4,#asl4l,#asl4r').fadeIn({start:function(){asld4.reloadSlider()}});}
	});

	$('.sec5-gal-img').click(function(){
		$('.sec5-gal-img-big').fadeOut();		
		$('.sec5-gal-img-big[data-item="'+$(this).data('item')+'"]').fadeIn();
		$('input[name="select"]').val($(this).data('title'));
	});

	$('.fancy-tov').fancybox({helpers:{overlay:{locked:false}, title : {
            type : 'inside'
        }},beforeLoad: function() {
        this.title = $(this.element).html();
    }});

	function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
    function run_geo(geo_url){
        $.ajax({type: 'GET',url: geo_url,dataType: 'xml',
            success: function(xml) {$(xml).find('ip').each(function(){
            var city = $(this).find('city').text();
            var region = $(this).find('region').text();
            if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
            $('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
        });}});
    }
    $.get("http://ipinfo.io", function(response) {geo_url='http://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);}, "jsonp");
    utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){utm[v]=getURLParameter(v) || $('<input type="hidden" />').attr({name: v, class: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("form")});
    $('<input type="hidden" />').attr({name: 'url', value: document.location.href}).appendTo("form");
    $('<input type="hidden" />').attr({name: 'title', value: document.title}).appendTo("form");

  	$('input[name="phone"]').mask('+7 (999) 999-99-99');
    $('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}});
	$('input[name="phone"]').focus(function() {$(this).removeClass('error-input');});

    $('form').submit(function(e){
        e.preventDefault();
        var btns=$(this).find('button')
        $(this).find('input[type="text"]').trigger('blur');
        if(!$(this).find('input[type="text"]').hasClass('error-input')){
            var type=$(this).attr('method');
            var url=$(this).attr('action');
            var data=$(this).serialize();
            $.ajax({type: type, url: url, data: data,
            success : function(){
                $('<div class="popup"><div class="popaup-img"></div><p>Спасибо, ваша заявка получена</p><p>Сотрудник магазина свяжется с Вами</p></div>').appendTo(btns);
            }
        }); 
        }
    });

});
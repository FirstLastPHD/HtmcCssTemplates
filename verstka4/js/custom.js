$(function() {

/*$(function(){
	alert("Hello World!!!!");
	
});*/

$(function(){
  //$(".js-get-started").text("Start Button");
  $("#js-nav a:first-child").text("Start Button");
});

$(function(){
	
	$(".js-get-started").click(function(){
		$(this).text("test");
	});
	
});

$(function(){
	
	/*Smooth Scroll to planth block*/
	$(".js-get-started").on("click",function(e){
		e.preventDefault();
		var plansOffset = $("#js-plans").offset().top;
		
		$("html, body").animate({
			scrollTop: plansOffset
		}, 500);
	});
	
});

/*Fixed Header when scroll
===========================*/
var headerH = $("#js-header").height(),
 navH =$("#js-nav-container").innerHeight();
//console.log(headerH);
$(document).on("scroll",function(){
	var documentScroll = $(this).scrollTop();
	//console.log(documentScroll);
	//console.log(1);
	if(documentScroll > headerH){
		$("#js-nav-container").addClass("fixed");
		//$("#js-header").addClass("nav-fixed");
		$("#js-header").css("paddingTop", navH);
		//console.log("Yes!!!!!");
	}
	else{
		$("#js-nav-container").removeClass("fixed");
		$("#js-header").removeAttr("style");
	}
});

/*Smooth scroll to the pages block */
$("#js-nav a").on("click", function(e){
	e.preventDefault();
	var carrentBlock = $(this).attr("href");
	currentBlockOffset = $(carrentBlock).offset().top;
	$("html, body").animate({
			scrollTop: currentBlockOffset-20
		}, 500);
	//console.log(currentBlockOffset);
	
});
/* Modal Windows */

$(".js-modal").each(function(){
	var modalWidth = $(this).innerWidth() / 2;
    $(this).css({
	"marginLeft": "-" + modalWidth + "px"
    });
});

$(".js-show-modal").on("click", function(e){
	//console.log("hello");
	e.preventDefault();
	var currentModal = $(this).attr("href");
	//$(currentModal +", #js-overlay").show(100);
	$(currentModal).fadeIn(100);
	//$(".js-modal, #js-overlay").fadeIn(500);
	$("body").append("<div class='overlay' id='js-overlay'></div>").addClass("open-modal");
	
});

$(".js-modal-close").on("click", function(e){
	//console.log("hello");
	e.preventDefault();
	//$(".js-modal, #js-overlay").hide(100);
	$(".js-modal").fadeOut(100);
	$("body").removeClass("open-modal");
	$("#js-overlay").remove();
	
});
$("body").on("click", "#js-overlay", function(){
	$(".js-modal").fadeOut(100);
	$("body").removeClass("open-modal");
	$("#js-overlay").remove();
});
/*$(".js-show-modal").on("click", function(e){
	//console.log("hello");
	e.preventDefault();
	var currentModal = $(this).attr("href");
	//$(currentModal +", #js-overlay").show(100);
	$(currentModal +", #js-overlay").fadeIn(100);
	//$(".js-modal, #js-overlay").fadeIn(500);
	$("body").addClass("open-modal");
	
});

$("#js-overlay, .js-modal-close").on("click", function(e){
	//console.log("hello");
	e.preventDefault();
	//$(".js-modal, #js-overlay").hide(100);
	$(".js-modal, #js-overlay").fadeOut(100);
	$("body").removeClass("open-modal");
	
});*/

/*FAQ*/
/*$(".js-faq-title").on("click", function(e){
	e.preventDefault();
	
	var $this =$(this),
	answerID =$this.attr("href");
	//questionParent =$this.parents(".faq__item");
	//var links =("#js-nav").children(".nav_item");
	//links.addClass("test");
	//console.log(questionParent);
	//console.log(answerID);
	if(!$this.hasClass("active")){
     $(".js-faq-content").slideUp();
	 $(".js-faq-title").removeClass("active");
	}
	    $this.toggleClass("active");
	    $(answerID).slideToggle();
	
	//$(this).next().slideToggle("slow");

});*/


$(".js-faq-title").on("click", function(e){
	e.preventDefault();
	//$(".js-faq-content").fadeIn();
	//$(this).next().slideDown("slow");
	var $this =$(this);
	if(!$this.hasClass("active")){
     $(".js-faq-content").slideUp();
	 $(".js-faq-title").removeClass("active");
	}
	    $this.toggleClass("active");
	    $this.next().slideToggle();
	
	//$(this).next().slideToggle("slow");

});
/*$(".js-faq-title").on("click", function(e){
	e.preventDefault();
	
	var $this =$(this),
	answerID =$this.attr("href");
	//console.log(answerID);
	if(!$this.hasClass("active")){
     $(".js-faq-content").slideUp();
	 $(".js-faq-title").removeClass("active");
	}
	    $this.toggleClass("active");
	    $(answerID).slideToggle();
	
	//$(this).next().slideToggle("slow");

});*/

  /* Popup
    ========================*/

    $(".js-popup-hover").hover(function() {

        var $this = $(this),
            popupId = $this.attr("href");

        $(popupId).fadeIn();


    }, function() {

        $(".js-popup").fadeOut();
    }, 200);
	
/* Pop-Up */
/*$(".js-popup-hover").hover(function(){
	var $this = $(this),
	popupid = $this.attr("href");
	//$("#popup-1").fadeIn();
	$(popupid).fadeIn();
	console.log("popik");
	
},function(){
	
$(".js-popup").fadeOut();});

/* Company block text toggle */
$(".js-read-more").on("click", function(e){
	e.preventDefault();
	var $this =$(this),
	text =$this.text();
	
	if(text == "Read More"){
		text =$this.text("Hide");
	}else{
		text =$this.text("Read More");
	}
	$(this).prev(".js-blog-content").toggleClass("hidden");
});


/*Slick slide script: library source: http://kenwheeler.github.io/slick/*/


    $('#js-testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: false
    });


    $(".js-slider-prev").on("click", function() {
        $('#js-testimonials-slider').slick("slickPrev");
    });

    $(".js-slider-next").on("click", function() {
        $('#js-testimonials-slider').slick("slickNext");
    });

	/* WOW JS: https://github.com/matthieua/WOW */
	
	   var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       150,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();
	
	/* Placeholders https://github.com/mathiasbynens/jquery-placeholder
    ========================*/


    $('input, textarea').placeholder();
	
	/* Counter Up https://github.com/bfintal/Counter-Up
    ========================*/
    $('.js-counter-comments').counterUp({
        delay: 10,
        time: 1500
    });


    $('.js-counter-likes').counterUp({
        delay: 10,
        time: 3000
    });
	
	  /* Typed https://github.com/mattboldt/typed.js
    ========================*/

    $(".js-typed").typed({
        strings: ["Strength in equality.The power of dreams", "Second sentence."],
        typeSpeed: 40,
        backSpeed: 0,
        backDelay: 800,
        loop: true,
        contentType: 'html',
        showCursor: true,
        cursorChar: "|",
    });

/* iCheck https://github.com/fronteed/icheck
    ========================*/

    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-red',
        radioClass: 'iradio_flat-red',
    });

    $('.js-rules').on('ifChecked', function(event){
        $(".js-modal-close").removeAttr("disabled");
    });

    $('.js-rules').on('ifUnchecked', function(event){
        $(".js-modal-close").attr("disabled", "disabled");
    });

    $('.js-rules').on('ifToggled', function(event){
        $(".js-modal-close").toggleClass("active");
    });



    $('.js-check-all').on('ifClicked', function(event){

        if( $(this).is(":checked") ) {
            $(".js-filter-group input").iCheck('uncheck');
        } else {
            $(".js-filter-group input").iCheck('check');
        }

    });

    $('.js-filter-group input').on('ifUnchecked', function(event){
        $(".js-check-all").iCheck('uncheck');
    });




$(function(){
	
});

});
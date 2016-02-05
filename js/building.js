$(document).ready(function(){

    var drawHeroText = new Vivus('hero-text', { // Initialise drawing of 'Building' hero text SVG
        type: 'oneByOne',
        start: 'manual'
    });

    var drawHeroText2 = new Vivus('hero-text2', { // Initialise drawing of 'Building' hero text SVG
        type: 'oneByOne',
        start: 'manual'
    });


    var bgloaded = $(".hero").load();

    $('.building .hero .overlay-fadeout').delay(bgloaded).animate({
        opacity:0,
        easing:'easeInQuint'
    },1000);


    setTimeout(function(){

        $('.building .hero .overlay').delay(1000).animate({
            opacity:1,
            easing:'easeInQuint'
        },1000);


        setTimeout(function(){

            drawHeroText.play(1.7)

        }, 1000);


    }, bgloaded);








    drawHeroText2.stop();






    // Building page layout ----------------------------------------------------




    var nogridlayout = function(){


        // Set height of first row container
        var item1height = $('.nogrid .item-1 img').height();
        var item4height = $('.nogrid .item-4 img').height();
        var item4halfheight = item4height /= 2;
        var row1height = item1height += item4halfheight;

        $('.nogrid .nogrid-row-1').css('height',row1height);

        var item1heightfifth = item1height /= 5;
        $('.item-2').css('top',item1heightfifth);

        //redeclared the var
        var item4heighttotal = $('.nogrid .item-4').height();
        $('.item-3').css('bottom',item4heighttotal);

        // Set height of third row
        var item7height = $('.nogrid .item-7 img').height();
        var row3height = $('.nogrid .nogrid-row-3').css('height',item7height);

    };









    // Image fades/moves in on scroll -------------------------------------------------



    var windowheight = $(window).height();
    var windowquarter = windowheight /= 4;

    var theoffset = windowquarter *= 3;



    var windowheight2 = $(window).height();
    var windowfifth = windowheight2 /= 5;

    var theoffset2 = windowfifth *= 3;

    var scrollanim = function(){



        // Building page

        $(".building #lockup-transition-1").waypoint(function(down) {
            $("#lockup-transition-1").find('.animate-movein').animate({
                top:"-=100",
                opacity:1
            },700);
            }, {
            triggerOnce: true,
            offset: theoffset
            });



        $(".building #lockup-transition-2").waypoint(function(down) {
            $("#lockup-transition-2").find('.animate-fadein').animate({
                opacity:1
            },2000);
            }, {
            triggerOnce: true,
            offset: theoffset
            });



        $(".building #lockup-transition-3").waypoint(function(down) {
            $("#lockup-transition-3").find('.animate-fadein').animate({
                opacity:1
            },2000);
            }, {
            triggerOnce: true,
            offset: theoffset
            });




        $(".building #lockup-transition-4").waypoint(function(down) {

            $("#lockup-transition-4").find('.animate-movein').animate({
                top:"-=100",
                opacity:1
            },700);

            }, {
            triggerOnce: true,
            offset: theoffset
            });








        $(".building #lockup-transition-5").waypoint(function(down) {

            $("#lockup-transition-5").find('.animate-movein').animate({
                top:"-=100",
                opacity:1
            },700);

            }, {
            triggerOnce: true,
            offset: theoffset
            });







        $(".building #lockup-transition-7").waypoint(function(down) {

            $("#lockup-transition-7").find('.animate-fadein').animate({
                opacity:1
            },2000);

            }, {
            triggerOnce: true,
            offset: theoffset
            });





        $(".building #lockup-transition-8").waypoint(function(down) {

            $("#lockup-transition-8").find('.animate-movein').animate({
                top:"-=100",
                opacity:1
            },700);

            }, {
            triggerOnce: true,
            offset: theoffset
            });





        $(".building #lockup-transition-9").waypoint(function(down) {

            $("#lockup-transition-9").find('.animate-movein').animate({
                top:"-=100",
                opacity:1
            },700);

            $("#lockup-transition-9").find('.animate-fadein').animate({
                opacity:1
            },2000);

            }, {
            triggerOnce: true,
            offset: theoffset
            });







    }; // End scrollanim












    var scrollanimscripts = function(){


        var windowheight = $(window).height();
        var windowquarter = windowheight /= 4;
        var theoffset = windowquarter *= 3;



        var windowheight2 = $(window).height();
        var windowfifth = windowheight2 /= 5;

        var theoffset2 = windowfifth *= 3;




        $(".building #lockup-transition-6").waypoint(function(down) {

            setTimeout(function(){

                drawHeroText2.play(1.7);

            }, 800);


            $("#lockup-transition-6").find('.image-section-overlay').animate({
                opacity:0
            },1000,function(){
                $("#lockup-transition-6").find('.animate-fadein').animate({
                    opacity:1
                },1000);
            });
            $("#lockup-transition-6").find('.image-section-overlay').css('z-index','0');
        },
        {
            triggerOnce: true,
            offset: theoffset2
        });


    };








    // Load this scripts no matter what;
    scrollanimscripts();






    $(window).on('resize',function(){

        if ( $(window).width() < 700  && !Modernizr.touch){

            location.reload();

        };

    });





    var animloaded = false;


    $(window).on('load resize',function(){




        if ( $(window).width() > 699 ) {

            nogridlayout();

        };



        if ( $(window).width() > 699 && animloaded == false ) {

            scrollanim();
            animloaded = true;

        };



    });






    var item8enter = function(){
        $('.item-8').find('.image-overlay').fadeIn(600);
        $('.item-8').find('span.floor-type').text('Contemporary Form');
        $('.item-8').find('.icon-1').removeClass('active');
        $('.item-8').find('.icon-2').addClass('active');
    };

    var item8leave = function(){
        $('.item-8').find('.image-overlay').fadeOut(600);
        $('.item-8').find('span.floor-type').text('Traditional Function');
        $('.item-8').find('.icon-1').addClass('active');
        $('.item-8').find('.icon-2').removeClass('active');
    };



    if ( Modernizr.touch ) {

        var imagerollovertouchstart1 = false

        $('.item-8 .images, .item-8 .icon-2').on('touchstart',function(){

            if ( imagerollovertouchstart1 == false ){
                item8enter();
                imagerollovertouchstart1 = true;
            } else {
                item8leave();
                imagerollovertouchstart1 = false

            };


        });


    } else {

        $('.item-8 .images, .item-8 .icon-2').on('mouseenter',function(){
            item8enter();
        });

        $('.item-8 .images, .item-8 .icon-2').on('mouseleave ',function(){
            item8leave();
        });

    }












});

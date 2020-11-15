var rellax = new Rellax('.speedster');




    function pinningPic() { // wait for document ready
           // build scene
            var controller = new ScrollMagic.Controller();
           var scene = new ScrollMagic.Scene({
                   triggerElement: "#about-section",
                   triggerHook:0,
                   duration: "137%"
               })
               .setPin(".resume-anchor")
            //    .addIndicators({
            //        name: "1 (duration: 2000)"
            //    }) // add indicators (requires plugin)
               .addTo(controller);

               new ScrollMagic.Scene({triggerElement: ".hero-elements", triggerHook:0.2})
               .setClassToggle("header", "scrolled") // add class toggle
            //    .addIndicators() // add indicators (requires plugin)
               .addTo(controller);
    }



    //dark-light mode
$(document).ready(function () {
    pinningPic();
    var darkmodeactive = localStorage.getItem("darkmode");
       function goDark() {
            $('html').addClass('dark');
       }
       function stayDark() {
            goDark();
            localStorage.setItem("darkmode", true);
            darkmodeactive = localStorage.getItem("darkmode");
       }
       function goLight() {
            $('html').removeClass('dark');
       }
       function stayLight() {
            goLight();
            localStorage.setItem("darkmode", false);
            darkmodeactive = localStorage.getItem("darkmode");
       }
       window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && stayDark());
       window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && stayLight());
       $(".mode-box").click(function() {
            if ($("html").hasClass("dark")) {
                stayLight();
            } else {
                stayDark();
            }
       });

       window.onload=function() {
       if (localStorage.darkmode=="true") {
            goDark();
       } else if (localStorage.darkmode=="false") {
            goLight();
       } else {

        }
       }
     });


       document.onreadystatechange = function () {
       var state = document.readyState
       if (state == 'complete') {
        setTimeout(function(){
                document.getElementById('interactive');
                document.getElementById('load').style.visibility="hidden";
        },2000);
       }
       }


           $('.mode-box').click(function(){
                $('.big-bg-head, .hero-elements > h1, .small-flake, .big-flake').toggleClass("trans750");
                setTimeout(function(){ $('.big-bg-head, .hero-elements > h1, .small-flake, .big-flake').toggleClass("trans750"); }, 750);
           });
});


$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

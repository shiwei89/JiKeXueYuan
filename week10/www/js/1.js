 $(document).ready(function() {
     $("#tabs").tabs();
     $("#tabs-1 p.one").click(function() {
         $("#tabs-1 p.two").toggle();
     })
     $("#tabs-1 p.three").click(function() {
         $("#tabs-1 p.four").toggle();
     })
     $("div.top a.six").mouseenter(function() {
         $("div#slide").slideDown()
     })
     $("div.top a.six").mouseleave(function() {
         $("div#slide").slideUp()
     })
     $("div.top a.seven").mouseenter(function() {
         $("div#slide2").slideDown()
     })
     $("div.top a.seven").mouseleave(function() {
         $("div#slide2").slideUp()
     })
     $("div.top a.eight").mouseenter(function() {
         $("div#slide3").slideDown()
     })
     $("div.top a.eight").mouseleave(function() {
         $("div#slide3").slideUp()
     })
 })

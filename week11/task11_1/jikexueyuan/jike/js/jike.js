$(document).ready(function() {
        //第三部分第一小部分的注释！
        $("div.three div.first div a.one").mouseenter(function() {
            $("div.three div.second").show()
        })
        $("div.three div.first div a.one").mouseleave(function() {
                $("div.three div.second").hide()
            })
        
            //第三部分第三小部分的注释！
        $(function() {
            $("#tabs").tabs();
        });
        //第四部分的注释！
        $("#tabs-1 div.one").mouseenter(function() {
            $("#tabs-1 div.one p.two").slideDown()
        })
        $("#tabs-1 div.one").mouseleave(function() {
            $("#tabs-1 div.one p.two").slideUp()
        })
        $("#tabs-1 div.two").mouseenter(function() {
            $("#tabs-1 div.two p.two").slideDown()
        })
        $("#tabs-1 div.two").mouseleave(function() {
            $("#tabs-1 div.two p.two").slideUp()
        })
        $("#tabs-1 div.four").mouseenter(function() {
            $("#tabs-1 div.four p.two").slideDown()
        })
        $("#tabs-1 div.four").mouseleave(function() {
            $("#tabs-1 div.four p.two").slideUp()
        })
        $("#tabs-1 div.three").mouseenter(function() {
            $("#tabs-1 div.three p.two").slideDown()
        })
        $("#tabs-1 div.three").mouseleave(function() {
            $("#tabs-1 div.three p.two").slideUp()
        })
        $("#tabs-1 div.five").mouseenter(function() {
            $("#tabs-1 div.five p.two").slideDown()
        })
        $("#tabs-1 div.five").mouseleave(function() {
            $("#tabs-1 div.five p.two").slideUp()
        })
        $("#tabs-1 div.six").mouseenter(function() {
            $("#tabs-1 div.six p.two").slideDown()
        })
        $("#tabs-1 div.six").mouseleave(function() {
            $("#tabs-1 div.six p.two").slideUp()
        })
        $("#tabs-1 div.seven").mouseenter(function() {
            $("#tabs-1 div.seven p.two").slideDown()
        })
        $("#tabs-1 div.seven").mouseleave(function() {
            $("#tabs-1 div.seven p.two").slideUp()
        })
        $("#tabs-1 div.eight").mouseenter(function() {
            $("#tabs-1 div.eight p.two").slideDown()
        })
        $("#tabs-1 div.eight").mouseleave(function() {
            $("#tabs-1 div.eight p.two").slideUp()
        })
    })
    //第六部分的注释
$(document).ready(function() {
    $(".six1").mouseover(function() {
        // $("#div2").transition({rotateY:180deg,600})
        $(".front").css("transform", "rotateY(180deg)");
        // $("#div2").css("transition","initial 0.6s initial initial");
        $(".front").css("backface-visibility", "hidden");
        $(".back").css("transform", "rotateY(360deg)");
    })
    $(".six1").mouseout(function() {
        $(".front").css("transform", "rotateY(360deg)");
        // $("#div2").css("backface-visibility","hidden");
        $(".back").css("transform", "rotateY(360deg)");
    })
})

$(document).ready(function(){
    $(".chat_box").click(function(){
        $(".chat_icon").toggleClass("fa-comment").toggleClass("fa-times");
    
        if ($(".chat_icon").hasClass(("fa-times"))){
            $(".chat").removeClass("hidden");
        }else{
            $(".chat").addClass("hidden");
        }
    })

    $('.chat').bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 20 < 0) {
            $(".logo h3").hide();
            $(".true_logo").hide();
            $(".first_p").hide();
            $(".option.first").css("margin-top","80px");
            
        }
        else if (e.originalEvent.wheelDelta / 20 > 0){
            $(".logo h3").show()
            $(".true_logo").show()
            $(".first_p").show()
            $(".option.first").css("margin-top", "0");
        }
    });
})
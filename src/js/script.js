$(document).ready(function(){
    $(".chat_box").click(function(){
        $(".chat_icon").toggleClass("fa-comment").toggleClass("fa-times");
    
        if ($(".chat_icon").hasClass(("fa-times"))){
            $(".chat").removeClass("hidden");
        }else{
            $(".chat").addClass("hidden");
        }
    })
})
let percent = 0;

function runTitle(){
  $(".title").html("<h2>Have a good day !</h2>")
};


let timer = setInterval(function () {
    $(".bar").css("width", percent + "%");
    percent += 1;
    if (percent > 100) {
        $(".loading").addClass("complete");
        setTimeout(runTitle, 3000);
        clearInterval(timer);
    }
}, 30)


$(".girl").velocity({top: "20px"},{loop: true, duration: 600});

setTimeout(function(){
  $(".boy").velocity({top: "20px"},{loop: true, duration: 600});
},600);



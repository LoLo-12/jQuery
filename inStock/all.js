let num = 15;

$(".minus").click(function(){
  num = num-1;
  if (num < 0){
    return;
  }
  $(".num").text(num);
  check();
})

$(".add").click(function(){
  num = num+1;
  $(".num").text(num);
  check();
})

function check(){
  if (num<=0){
    $(".text").text("oh no, 沒有了!!");
    $(".text").css({
      "color": "#ED1C24",
      "border-bottom": "solid 6px #ED1C24"
    })
    $(".fill").addClass("fill_open");
    $(".fill").css("color","#ED1C24");
  }else if(num<10){
    $(".text").text("快賣完了!!");
    $(".text").css({
      "color": "#FF6505",
      "border-bottom": "solid 6px #FF6505"
    })
    $(".fill").addClass("fill_open");
    $(".fill").css("color","#FF6505");
  }else if (num<20){
    $(".text").text("賣得不錯喔!!");
    $(".text").css({
      "color": "#FFCD05",
      "border-bottom": "solid 6px #FFCD05"
    })
    $(".fill").removeClass("fill_open");
  }else if(num>30){
    $(".text").text("還有很多喔~");
    $(".text").css({
      "color": "#716A5C",
      "border-bottom": "solid 6px #716A5C"
    })
  }
}
check();
$(".num").text(num);

let nowtime = 6;
$(".fill").click(function(){
  $(".fill").text("☎");
  var result = setInterval(function(){
    nowtime -= 1;
    $(".fill").text("☎ 聯絡廠商中..."+nowtime+"秒");
    if (nowtime<0){
      clearTimeout(result);
      $(".fill").text("已通知廠商補貨");
      $(".text").text("補貨中~");
      $(".text").csss({
        "color": "#944BBB",
        "border-bottom": "solid 6px #716A5C"
      })
    }
  },1000)
})

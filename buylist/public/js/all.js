let todayTime = new Date();
let todayYear = todayTime.getFullYear();
let todaMonth = todayTime.getMonth() + 1;
let todaDate = todayTime.getDate();

$(".today").text(todayYear + " / " + todaMonth + " / " + todaDate);

let list = {};
list.shopName = "購物清單";
list.item = [
    { name: "洗髮精", price: 300, num: 5 },
    { name: "手機", price: 25000, num: 1 },
    { name: "晚餐", price: 150, num: 2 },
]

let strHtml = "<li class='{{itemClass}}'><div class='buyItem'>{{itemNum}}. {{itemName}}</div><div class='price'>$ {{price}}</div><div class='symbol'>x</div><div class='num'>{{num}}</div><div class='symbol'>=</div><div class='total'>$ {{total}}</div><button class={{cancel}} data-delid={{delId}}>x</button></li>"

let endHtml = "<li class='finTotal'>總價<div class='toPrice'>$ {{toPrice}}</div></li>"

function runList() {
    $(".itemList").html("");
    let totalPrice = 0;
    let totalItem = [];
    for (let i = 0; i < list.item.length; i++) {
        totalItem[i] = list.item[i].price * list.item[i].num;
        totalPrice += parseInt(totalItem[i]);
        // console.log(totalPrice);
        let cancelId = "cancel" + i;
        let newHtml = strHtml.replace("{{itemNum}}", i + 1)
            .replace("{{itemName}}", list.item[i].name)
            .replace("{{price}}", list.item[i].price)
            .replace("{{num}}", list.item[i].num)
            .replace("{{total}}", totalItem[i])
            .replace("{{itemClass}}", "item" + i)
            .replace("{{delId}}", i)
            .replace("{{cancel}}", cancelId);
        $(".itemList").append(newHtml);
        $("." + cancelId).click(function () {
            // console.log($(this).attr("data-delid"));
            removeItem(parseInt($(this).attr("data-delid")));
        })
    }
    let finPrice = endHtml.replace("{{toPrice}}", totalPrice);
    $(".itemList").append(finPrice);
}

runList();

$(".addBtn").click(function () {
    list.item.push({
        name: $(".nameInput").val(),
        price: parseInt($(".priceInput").val()) || 100,
        num: parseInt($(".numInput").val()) || 1
    })
    runList();
    $(".nameInput").val("");
    $(".priceInput").val("");
    $(".numInput").val("");
    // console.log(list.item);
})

function removeItem(id) {
    list.item.splice(id, 1);
    runList();
};
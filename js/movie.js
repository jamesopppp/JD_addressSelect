var addressIndex1 = "0"
var addressIndex2 = "0"

function changeItem(index) {
    var selectText = $(event.currentTarget)[0].textContent
    if (index == "1") {
        $("#add1")[0].textContent = selectText
        $("#add1").removeClass("add_select")
        $("#add2")[0].textContent = "请选择"
        $("#add2").addClass("add_select")
        $(".add_list1").css("display", "none");
        $(".add_list2").css("display", "inline-block");
        addressIndex1 = $(event.currentTarget)[0].id.substring(5)
        console.log(addressIndex1)
        var address2 = values2[addressIndex1]
        for (var i = 0; i < address2.length; i++) {
            $(".add_list2").append("<div class='add_item' id='add2_" + i + "'onclick='changeItem(2)'>" + address2[i] + "</div>");
        }
    }
    if (index == "2") {
        addressIndex2 = $(event.currentTarget)[0].id.substring(5)
        $("#add2")[0].textContent = selectText
        $("#add2").removeClass("add_select")
        if (values2[addressIndex1].length == "1") {
            var address3 = values4[addressIndex1]
        } else {
            var address3 = values4[addressIndex1][addressIndex2]
        }
        if (address3 == "") {
            $(".address_shadow").hide(500)
            countAddress()
            reSetItem()
            return
        }
        $("#add3")[0].textContent = "请选择"
        $("#add3").addClass("add_select")
        $(".add_list2").css("display", "none");
        $(".add_list3").css("display", "inline-block");
        for (var i = 0; i < address3.length; i++) {
            $(".add_list3").append("<div class='add_item' id='add3_" + i + "'onclick='changeItem(3)'>" + address3[i] + "</div>");
        }
    }
    if (index == "3") {
        $("#add3")[0].textContent = selectText
        $("#add3").removeClass("add_select")
        $(".address_shadow").hide(500)
        countAddress()
        reSetItem()
            //      $("#add4")[0].textContent = "请选择"
            //      $("#add4").addClass("add_select")
            //      $(".add_list3").css("display", "none");
            //      $(".add_list4").css("display", "inline-block");
    }
    //    if (index == "4") {
    //      $("#add4")[0].textContent = selectText
    //      $("#add4").removeClass("add_select")
    //      $(".address_shadow").hide(500)
    //      countAddress()
    //    }
}

function countAddress() {
    var text1 = $("#add1")[0].textContent
    var text2 = $("#add2")[0].textContent
    var text3 = $("#add3")[0].textContent
        //    var text4 = $("#add4")[0].textContent
    if (text3 != "") {
        var sumText = text1 + "," + text2 + "," + text3
    } else {
        var sumText = text1 + "," + text2
    }
    $("#address_show").val(sumText)
    SelectOver()
}

function SelectOver() {
    $("#add1")[0].textContent = "请选择"
    $("#add2")[0].textContent = ""
    $("#add3")[0].textContent = ""
        //    $("#add4")[0].textContent = ""
    $(".add_select").removeClass("add_select")
    $("#add1").addClass("add_select")
    $(".add_list1").css("display", "inline-block");
    $(".add_list2").css("display", "none");
    $(".add_list3").css("display", "none");
    //    $(".add_list4").css("display", "none");
}

function reSetItem() {
    $(".add_list2 div").remove();
    $(".add_list3 div").remove();
}









$(window).load(function() {
    $(".cancelBut").click(function() {
        $(".address_shadow").hide(500)
        SelectOver()
        reSetItem()
    })

    $("#address_show").click(function() {
        $(".address_shadow").show(500)
    })

    $("#add1").click(function() {
        SelectOver()
        $(".add_list2 div").remove();
        $(".add_list3 div").remove();
    })

    $("#add2").click(function() {
        $("#add2")[0].textContent = "请选择"
        $("#add3")[0].textContent = ""
        $(".add_select").removeClass("add_select")
        $("#add2").addClass("add_select")
        $(".add_list2").css("display", "inline-block");
        $(".add_list3").css("display", "none");
        $(".add_list3 div").remove();
    })
});
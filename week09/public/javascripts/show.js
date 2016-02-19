
function loadNews(newstype) {
    $.ajax({
        url: "/select",
        type: "POST",
        data: {
            "newstype": newstype
        },
        dataType: "json",
        success: function(data) {
            $('.newsmain').empty();
            var html = '';
            $.each(data, function(index, element) {
                html += '<div class="newslist">' +
                    '  <div class="newsbox">' +
                    '    <div class="newsimg"><img src ="' + element['newsimg'] + '"></div>' +
                    '    <div class="newstext">' +
                    '      <div class="newsid">' + element['newsid'] + '</div>' +
                    '      <div class="newstitle">' + element['newstitle'] + '</div>' +
                    '      <div class="newscontent">' + element['newscontent'] + '</div>' +
                    // '       <a href="javascript:editNews(' + element['newsid'] + ')">修改</a>' +
                    '      <a href="javascript:deleteAlert(' + element['newsid'] + ')">删除</a>' +
                    '    </div>' +
                    '  </div>' +
                    '    <div class="addtime">' + element['addtime'] + '</div>' +
                    '</div>';
            });
            $('.newsmain').html(html);
        }
    });
}
//删除代码
function deleteAlert(id) {
    if (confirm("你确定要删除？")) {
        $.ajax({
            url: "/delete",
            type: "POST",
            data: {
                "newsid": id
            },
            dataType: "json",
            success: function(data) {
                alert("删除成功");
                loadNews("hot");
            }
        })
    } else {
        alert("取消删除");
        return false;
    }
}

$(window).on("load", function() {
    //标签切换
    $("#systemSetting li").each(function(index) {
        $(this).click(function() {
            loadNews($(this).attr("data-newstype"));
        })
    })
    loadNews("hot");
    /*s发布新闻操作*/
    $(".add-div").click(function() {
        $("#add-div form").attr("action", "/publish");
    });

    // 添加新闻div的显示或隐藏
    $("#add-title-p").click(function(){
            $("#add-div").show(200)
        });
        $(".close-add-div").click(function(){
            $("#add-div").hide(200)
        });

})

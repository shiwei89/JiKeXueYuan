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
                    '      <div class="newstitle">' + element['newstitle'] + '</div>' +
                    '      <div class="newscontent">' + element['newscontent'] + '</div>' +
                    '    </div>' +
                    '    <div class="addtime">' + element['addtime'] + '</div>' +
                    '  </div>' +
                    '</div>';
            });
            $('.newsmain').html(html);
        }
    });
}
// 页面加载时或点击类别时执行
$(window).on("load", function() {
    $("#navlist li").each(function(index) {
        $(this).click(function() {
            loadNews($(this).attr("data-newstype"));
            // alert($(this).attr("data-newstype"))
        })
    })
    loadNews("hot");
})
 // 定义可换的颜色
 var colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];
 var index = 0;
 // 换色方法
 function changeColor() {
     // 获取颜色代码
     var color = colors[index++];
     // 更改文档的背景色
     var x = document.getElementById("tr").bgColor = color;
     localStorage.color = color;
 }
 x = localStorage.color;
 //alert(x);

 function my() {
     localStorage.color;
 }

var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"]
var max;
var maxtime = 0;
var time = 1;
var arrb = new Array();
for (i = 0; i < arr.length; i++) {
    time = 1;
    for (j = i + 1; j < arr.length; j++) {

        if (arr[i] == arr[j]) {
            time = time + 1;
        }
    }

    if (time > maxtime) {
        max = arr[i];
        maxtime = time;
    }

}
for (i = 0, j = 0; i < arr.length; i++) {
    if (max == arr[i]) {
        arrb[j] = i;
        j++;
    }

}
document.write("出现次数最多的字母是：" + max + "<br>");
document.write("次数是：" + maxtime + "<br>");
for (var i = 0; i < arrb.length; i++) {
    document.write("出现的位置为：" + arrb[i] + "<br>");
}

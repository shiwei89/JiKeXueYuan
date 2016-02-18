function myFunction(a, b, char) {
    a = document.getElementById("input2").value;
    b = document.getElementById("input4").value;
    char = document.getElementById("input6").value;
    switch (true) {
        case (char == "加"):
            alert(parseFloat(a) + parseFloat(b));
            break;
        case (char == "减"):
            alert(a - b);
            break;
        case (char == "乘"):
            alert(a * b);
            break;
        case (char == "除"):
            if (b == 0) {
                alert("你必须输入非零的数字才可以运行!");
                break;
            } else {
                alert(a / b);
                break;
            }
    }
}

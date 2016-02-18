 var numresult;
 var str;

 function onclicknum(nums) {
     str = document.getElementById("nummessage");
     str.value = str.value + nums;
 }
 //清除
 function onclickclear() {
     str = document.getElementById("nummessage");
     str.value = "";
 }
 //计算结果
 function onclickresult() {
     str = document.getElementById("nummessage");
     numresult = eval(str.value);
     str.value = numresult;
 }

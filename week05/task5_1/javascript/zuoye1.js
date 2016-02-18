 function myFunction() {

     var score = document.getElementById("input2").value;

     switch (true) {
         case (score > 100):
             alert("请输入0到100!");
             break;
         case (score <= 100 && score > 90):
             alert("您是一等生!");
             break;
         case (score <= 90 && score > 80):
             alert("您是二等生!");
             break;
         case (score <= 80 && score > 70):
             alert("您是三等生!");
             break;
         case (score <= 70 && score > 60):
             alert("您是四等生!");
             break;
         case (score <= 60 && score > 50):
             alert("您是五等生!");
             break;
         case (score <= 50 && score > 40):
             alert("您是六等生!");
             break;
         case (score <= 40 && score > 30):
             alert("您是七等生!");
             break;
         case (score <= 30 && score > 20):
             alert("您是八等生!");
             break;
         case (score <= 20 && score > 10):
             alert("您是九等生!");
             break;
         case (score <= 10 && score >= 0):
             alert("您是十等生!");
             break;

     }
 }

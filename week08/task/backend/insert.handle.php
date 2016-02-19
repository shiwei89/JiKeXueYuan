<?php
//连接数据库
require_once('config.php');
if(!(isset($_POST['title'])&&(!empty($_POST['title'])))){
   echo "<script>alert('您需要输入标题');window.location.href='insert.php'</script>";
}
if(!(isset($_POST['type'])&&(!empty($_POST['type'])))){
   echo "<script>alert('您需要输入类型');window.location.href='insert.php'</script>";
}

   $title=$_POST['title'];
   $type=$_POST['type'];

   $insertsql="INSERT INTO baidu_new (title,type)values('$title','$type')";

   if(mysql_query($insertsql)){
   	echo "<script>alert('发布新闻成功');window.location.href='insert.php'</script>";
   }else{
   	echo "<script>alert('发布新闻失败');window.location.href='insert.php'</script>";
   }
?>

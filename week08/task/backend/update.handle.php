<?php
//连接数据库
require_once('config.php');
if(!(isset($_POST['title'])&&(!empty($_POST['title'])))){
    echo "<script>alert('您需要输入标题');window.location.href='insert.php'</script>";
}
if(!(isset($_POST['type'])&&(!empty($_POST['type'])))){
    echo "<script>alert('您需要输入类型');window.location.href='insert.php'</script>";
}

  $id=$_POST['id'];
   $title=$_POST['title'];
$type=$_POST['type'];
   
   $updatesql="UPDATE baidu_new set title='$title',type='$type' WHERE id=$id";
   if(mysql_query($updatesql)){
   	echo "<script>alert('修改标题成功');window.location.href='manage.php'</script>";
   }else{
   	echo "<script>alert('修改标题失败');window.location.href='update.php'</script>";
   }
?>
<?php

//连接数据库
require_once('config.php');
   $id=$_GET['id'];
   $deletesql="DELETE FROM baidu_new WHERE id =$id ";
   if(mysql_query($deletesql)){
   	echo "<script>alert('删除新闻成功');window.location.href='manage.php'</script>";
   }else{
   	echo "<script>alert('删除新闻失败');window.location.href='manage.php'</script>";
   }
?>
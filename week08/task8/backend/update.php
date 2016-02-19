<?php
//连接数据库
require_once('config.php');
$id=$_GET['id'];
$query = mysql_query("SELECT * FROM baidu_new where id=$id");
$data=mysql_fetch_assoc($query);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Title</title>
    
</head>

<body>
    <form action="update.handle.php" method="post">
    <input type="hidden" name="id" value="<?php echo $data['id'] ?>">
        <p>
            <label>文章标题</label>
            <input type="text" name="title" id="title" value="<?php echo $data['title'] ?>">
            <label>文章类型</label>
            <input type="text" name="type" id="type" value="<?php echo $data['type'] ?>">
        </p>
       
        
        <input type="submit" id="btn" value="提交" />
    </form>
   
</body>

</html>

<?php
//连接数据库
require_once('../backend/config.php');

$sql = "select * from baidu_new order by id desc";
$query = mysql_query($sql);
if($query&&mysql_num_rows($query)){
    while($row = mysql_fetch_assoc($query)){
        $data[] = $row;
    }
}
?>
<!DOCTYPE html>

<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <title>百度新闻</title>
    <script type="text/javascript" src="jquery-2.1.4.min.js"></script>
<!--    <link href="default.css" rel="stylesheet" type="text/css" />-->
    <style>
        body{margin:0;}
        h3{text-align:center}
        div.classification{background: #00ffff;}
        div#content{background: #ff9;}
        p{text-align: center;}

     </style>
</head>
<body>

<div class="container">
      <h3>百度新闻</h3>
      <div class="classification">
        <p><a href="">科技</a></p>
        <p><a href="">互联网</a></p>
      </div>
      <!-- start content -->
      <div id="content">
        <?php
        if(empty($data)){
            echo "当前没有新闻，请管理员在后台添加新闻";
        }else{
            foreach($data as $value){
                ?>
                <div class="post">
                    <span class="id"><?php echo $value['id']?></span>
                    <span class="title"><?php echo $value['title']?></span>
                    <span class="type"><?php echo $value['type']?></span>
                </div>
                <?php
            }
        }
        ?>
       </div>
       <!-- end page -->
</div>
</body>
</html>
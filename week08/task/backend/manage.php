<?php
//连接数据库
require_once('config.php');

$sql = "select * from baidu_new  order by id desc";
$query  = mysql_query($sql);
if($query&&mysql_num_rows($query)){
    while($row =mysql_fetch_assoc($query)){
        $data[] = $row;
    }
}else{
    $data = array();
}

?>
<!DOCTYPE html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>无标题文档</title>
    <style>
        body{margin:0;}
     </style>
</head>

<body>
<table width="100%" height="642" border="1" cellpadding="8" cellspacing="1" bgcolor="#000000">
    <tr>
        <td height="89" colspan="2" bgcolor="#FFFF99"><strong>后台管理系统</strong></td>
    </tr>
    <tr>
        <td width="156" height="412" align="left" valign="top" bgcolor="#FFFF99">
            <p><a href="manage.php">管理新闻</a></p> <p><a href="insert.php">发布新闻</a></p><p><a href="select.php">查看新闻</a></p></td>
        <td width="837" valign="top" bgcolor="#FFFFFF"><table width="743" border="0" cellpadding="8" cellspacing="1" bgcolor="#000000">
                <tr>
                    <td colspan="4" align="center" bgcolor="#FFFFFF">文章新闻列表</td>
                </tr>
                <tr>
                    <td width="37" bgcolor="#FFFFFF">编号</td>
                    <td width="572" bgcolor="#FFFFFF">标题</td>
                    <td width="37" bgcolor="#FFFFFF">类型</td>
                    <td width="82" bgcolor="#FFFFFF">操作</td>
                </tr>
                <?php
                if(!empty($data)){
                    foreach($data as $value){
                        ?>
                        <tr>
                            <td bgcolor="#FFFFFF">&nbsp;<?php echo $value['id']?></td>
                            <td bgcolor="#FFFFFF">&nbsp;<?php echo $value['title']?></td>
                            <td bgcolor="#FFFFFF">&nbsp;<?php echo $value['type']?></td>
                            <td bgcolor="#FFFFFF"><a href="delete.handle.php?id=<?php echo $value['id']?>">删除</a> <a href="update.php?id=<?php echo $value['id']?>">修改</a></td>
                        </tr>
                        <?php
                    }
                }
                ?>
            </table></td>
    </tr>
    <tr>
        <td colspan="2" bgcolor="#FFFF99"><strong>版权所有</strong></td>
    </tr>
</table>
</body>
</html>

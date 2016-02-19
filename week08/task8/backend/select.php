<?php
//连接数据库
require_once('config.php');

$result = mysql_query("SELECT * FROM baidu_new");
echo "
<!DOCTYPE html>
<html>
    <style>
        body{margin:0;background:#FFFF99;}
    </style>
<table border='1' width='100%'>
<h1 align='center'>新闻查看系统</h1>
<tr>
<th>id</th>
<th>title</th>
<th>type</th>

</tr>";

while($row = mysql_fetch_array($result))
  {
  echo "<tr>";
    echo "<td>" . $row['id'] . "</td>";
  echo "<td>" . $row['title'] . "</td>";
    echo "<td>" . $row['type'] . "</td>";
  echo "</tr>";
  }
echo "</table>";
echo "</html>";
mysql_close($con);
?>
  








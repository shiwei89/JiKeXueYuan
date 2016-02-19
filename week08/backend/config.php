<?php

header("content-type;text/html;charset=utf-8");
$con = mysql_connect("localhost","root","");
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}
mysql_query("set names utf8");

mysql_select_db("news", $con);

?>


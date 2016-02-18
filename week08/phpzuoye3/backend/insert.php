

<!DOCTYPE html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
  <style>
    body{margin:0;}
  </style>
</head>

<body>
<table width="100%" height="642" border="0" cellpadding="8" cellspacing="1" bgcolor="#000000">
  <tr>
    <td height="89" colspan="2" bgcolor="#FFFF99"><strong>后台管理系统</strong></td>
  </tr>
  <tr>
    <td width="156" height="412" align="left" valign="top" bgcolor="#FFFF99"><p><a href="insert.php">发布新闻</a></p>
    <p><a href="manage.php">管理新闻</a></p>      </td>
    <td width="837" valign="top" bgcolor="#FFFFFF">
    <form id="form1" name="form1" method="post" action="insert.handle.php">
      <table width="779" border="0" cellpadding="8" cellspacing="1">
        <tr>
          <td colspan="2" align="center">发布新闻</td>
          </tr>
        <tr>
          <td width="119">标题</td>

          <td width="625"><label for="title"></label>
            <input type="text" name="title" id="title" /></td>
          <td width="119">类型</td>
          <td width="625"><label for="type"></label>
            <input type="text" name="type" id="type" /></td>
        </tr>

        <tr>
          <td colspan="2" align="right"><input type="submit" name="button" id="button" value="提交"  /></td>
          </tr>
      </table>
    </form></td>
  </tr>
  <tr>
    <td colspan="2" bgcolor="#FFFF99"><strong>版权所有</strong></td>
  </tr>
</table>

</body>
</html>

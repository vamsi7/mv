<?php
include "dbconfig.php";
$fullname=$_POST['fullname'];
$username=$_POST['username'];
$password=$_POST['passwd'];
$password=md5($password);
$dob=$_POST['dob'];
$query=mysql_query("INSERT INTO users VALUES('$fullname','$username','$password','$dob')") or die(mysql_error());
if($query)
{
	echo "green";	
}
?>
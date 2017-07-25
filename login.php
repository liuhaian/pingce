<?php
$username = $_GET['username'];
$password = $_GET['password'];
if($username != 's3' or $password != '1')
	{
		return false;
		}
	else
	{
	echo date('YMD');
	}
?>
//全局高宽
	global = {
		windowH : window.innerHeight,
		windowW : window.innerWidth,
		name : document.getElementsByClassName("name")[0],
		logo : document.getElementsByClassName("logo")[0],
		login_box : document.getElementsByClassName("login_box")[0],
		login_btn : document.getElementsByClassName("login_btn")[0],
		login_exit : document.getElementsByClassName("login_exit")[0],
	}	


time = 0		
function timeqi(){
		time++
		a = setTimeout("timeqi()",1000)
		console.log(time)
	}
function cleartimeqi(){
		clearTimeout(a)
		time=0  //重置计时器
		timeqi() // 从新开启计时器
	}
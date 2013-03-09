$(document).ready(function()
{
	$(".showtext").hide();
	$("#tstatus").hide();
	$("#question_body").hide();
	$(".page").hide();
	$("#box_wrapper").show();
	if($.cookie("MVAuth")==null)
	{
		$("#signin").show();
		$("#userArea").hide();
	}
	else
	{
		$("#signin").hide();
		$("#userArea").show().html($.cookie('MVAuthFname')+", <li><a onclick='logout();'>Logout!</a></li>");
	}
	$("#logo").click(function()
	{
		hidecat();
		$("#tstatus").hide();
	});
	$("#zero_div").mouseover(function()
	{
		showtext('numb','showtext');
	});
	$("#zero_div").mouseout(function()
	{
		hidetext('numb','showtext');
	});
	$("#one_div").mouseover(function()
	{
		showtext('numb_1','showtext_1');
	});
	$("#one_div").mouseout(function()
	{
		hidetext('numb_1','showtext_1');
	});
	$("#one_div").click(function()
	{
		showcat('Quick Play');
	});
	$("#two_div").mouseover(function()
	{
		showtext('numb_2','showtext_2');
	});
	$("#two_div").mouseout(function()
	{
		hidetext('numb_2','showtext_2');
	});
	$("#two_div").click(function()
	{
		showcat('Challenges');
	});
	$("#three_div").mouseover(function()
	{
		showtext('numb_3','showtext_3');
	});
	$("#three_div").mouseout(function()
	{
		hidetext('numb_3','showtext_3');
	});
	$("#three_div").click(function()
	{
		showcat('Tournaments');
	});
});
function showtext(id1,id2)
{
	$("#"+id1).fadeOut(0);
	$("#"+id2).fadeIn(0);
}
function hidetext(id1,id2)
{
	$("#"+id1).fadeIn(0);
	$("#"+id2).fadeOut(0);
}
function showcat(value)
{
	$("#box_wrapper").hide();
	$("#ans_input").hide();
	$("#action_buttons").hide();
	$("#result").hide();
	$("#selected_questions").hide();
	$("#select_categories").hide();
	$("#question_body").fadeIn();
	optdiv ="<div style=\"padding:20px;border-top: 1px solid silver;background-image:url('img/noise.png');background-color:white;\" id='optdiv'><div class='optimg' onclick=\"start_new('mix')\" style='color: green'><img src='img/start_big.png'><br>Start Test</div>";
	optdiv +="<div class='optimg' style='color: rgb(95,195,231)' onclick=\"showoptlist();\"><img src='img/customize_big.png'><br>Customize</div>";
	optdiv +="<div class='optimg' style='color: rgb(230,81,121)' onclick=\"gotohome()\"><img src='img/quit_big.png'><br>Back to Home</div></div>";
	$("#selection_title").fadeIn(500).html("<br>"+value+optdiv);
	$("#scat").show();
}
function showoptlist()
{
	$("#select_categories").toggle();
}
function hidecat()
{
	$(".showtext").hide();
	$("#question_body").hide();
	$("#box_wrapper").fadeIn();
}
function showlogin()
{
	$("#back").fadeIn(300);
	$("#login_wrapper").fadeIn(600);
}
function hidelogin()
{
	$("#back").fadeOut();
	$("#login_wrapper").fadeOut();
}
function showcreateacc()
{
	hidelogin();
	$(".page").hide();
	$("#create_acc").show();
}
function creataccount()
{
	var fullname = $("#signupFname").val();
	var username = $("#signupUname").val();
	var passwd1 = $("#signupPasswd1").val();
	var passwd2 = $("#signupPasswd2").val();
	var dob = $("#signupDob").val();
	if(fullname=="")
	{
		$("#signupFname").focus();
		$("#signupHint").show().html("<span style='font-size:12px;'>Please provide your Fullname.</span>");
	}
	else if(username=="")
	{
		$("#signupUname").focus();
		$("#signupHint").show().html("<span style='font-size:12px;'>Please provide your Username.</span>");
	}
	else if(passwd1=="")
	{
		$("#signupPasswd1").focus();
		$("#signupHint").show().html("<span style='font-size:12px;'>Please provide your Password.</span>");
	}
	else if(passwd2=="")
	{
		$("#signupPasswd2").focus();
		$("#signupHint").show().html("<span style='font-size:12px;'>Please confirm your Password.</span>");
	}
	else if(passwd1!=passwd2)
	{
		$("#signupPasswd1").focus().val("");
		$("#signupPasswd2").val("");
		$("#signupHint").show().html("<span style='font-size:12px;color:red;'>Passwords does not match.</span>");
	}
	else if(dob==""||dob.length<10)
	{
		$("#signupDob").focus();
		$("#signupHint").show().html("<span style='font-size:12px;'>Please provide your Date of Birth.</span>");
	}
	else
	{
		$.post("actions/checkusername.php",{username:username},function(data)
		{
			if(data=="green")
			{
				$("#signupHint").show().html("<span style='font-size:12px;color:green;'>A Little House Keeping..</span>");
				$.post("actions/createaccount.php",{fullname:fullname,username:username,passwd:passwd2,dob:dob},function(data)
				{
					if(data=='green')
					{
						$("#signupHint").show().html("<span style='font-size:12px;color:green;'>Account created Successfully.</span>");
						$("#loginPasswd").val("");
						$(".page").hide();
						$("#box_wrapper").show();
					}
					else
					{
						$("#signupHint").show().html("<span style='font-size:12px;color:red;'>An error occured..</span>");
						$(".page").hide();
						$("#box_wrapper").delay(1000).show();
					}
				});
			}
			else
			{
				$("#signupHint").show().html("<span style='font-size:12px;color:red;'>Username is not available.</span>");
			}
		});
	}
}
function signin()
{
	var username=$("#loginUname").val();
	var password=$("#loginPasswd").val();
	if(username=="")
	{
		$("#signinHint").show().html("<span style='font-size:12px;color:red;'>Please provide username</span>");
	}
	else if(username=="")
	{
		$("#signinHint").show().html("<span style='font-size:12px;color:red;'>Please provide password</span>");
	}
	else
	{
		$.post("actions/signin.php",{username:username,password:password},function(data)
		{
			if(data=='green')
			{
				$("#signinHint").hide().html("");
				$("#loginPasswd").val("");
				hidelogin();
				$("#signin").hide();
				$(".page").hide();
				$("#box_wrapper").show();
				$("#userArea").show().html($.cookie('MVAuthFname')+", <a onclick='logout();'>Logout!</a>");
			}
			else
			{
				$("#signinHint").show().html("<span style='font-size:12px;color:red;'>Username, Passwords does not match.</span>");
			}
		});
	}
}
function logout()
{
	$.post("actions/signout.php",function(data)
	{
		$("#signin").show();
		$("#userArea").hide().html();
		$(".page").hide();
		$("#box_wrapper").show();
	});
}
function gotohome()
{
	hidecat();
	$("#tstatus").hide();
}
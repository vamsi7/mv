$(document).ready(function(){
	$('.page').hide();
	$('#welcome-wrapper').show();
	starturl = location.hash;
	if(starturl=="")
	{
		$('#home_page').show();
	}
	else
	{
		loadpage(location.hash);		
	}
	$(window).hashchange(function()
	{
		loadpage(location.hash);
	}); //copy this function for all communities to load threads in background when application is started.
});
function showsignin()
{
	$("#back").fadeIn();
	$("#signin_wrapper").fadeIn();
}
function hidesignin()
{
	$("#back").fadeOut();
	$("#signin_wrapper").fadeOut();
}
function loadpage(page)
{
	
	page = page.split('#');
	page = page[1];
	if(page[0]=='!')
	{
		page = page.split('!');
		page = page[1];
		spage = page.split('/');
		$("#discussion_community_id").val(spage[0]);
		$('.page').hide();
		$('.subpage').hide();
		$('#'+spage[0]+'_page').show();
		$(".nav-stacked li").removeClass("active");
		if(spage[2]==null)
		{
			$("#"+spage[1]+"_link").addClass('active');
			$('#'+spage[1]+'_sp').show();
		}
		else
		{
			$("#"+spage[1]+"_link").addClass('active');
			loadathread(spage[2]);
		}
	}
	else
	{
		$('.page').hide();
		$('#'+page+'_page').show();
		$('#hg-barlinks li').removeClass('selected');
		$('#'+page).addClass('selected');
		if(page=="software")
		{
			location.hash="#!software/discussions";
			loadpage(location.hash);
		}
	}
}
function signup()
{
	id=$("#userid").val();
	id1=id.split("");
	if(id1[0]!="N" || id.length<7 || id.length==0)
	{
		$("#id_error").show();
		return false;
	}
	name=$("#username").val();
	if(name=="")
	{
		$("#name_error").show();
		return false;
	}
	pwd1=$("#pwd1").val();
	if(pwd1=="")
	{
		$("#pwd1").focus();
		return false;
	}
	pwd2=$("#pwd2").val();
	if(pwd2=="")
	{
		$("#pwd2").focus();
		return false;
	}
	if(pwd1!=pwd2)
	{
		$("#pwd2_error").show();
		return false;
	}
	else
	{
		$.post("actions/signup.php",{id:id,name:name,password:pwd1},function(data)
		{
			if(data=="green")
			{
				$("#userid").val("");
				$("#username").val("");
				$("#pwd1").val("");
				$("#pwd2").val("");
				alert("Account created Successfully.");
				location.hash="#home";
				loadpage(location.hash);
			}
			else
			{
				$("#pwd1").val("");
				$("#pwd2").val("");
				alert("An unexpected error occured while processing your request.")
				return false;
			}
		});
	}
}
function hideerror()
{
	$('.errors').hide();
}
function signin()
{
	username=$("#inputUsername").val();
	password=$("#inputPassword").val();
	if(username.length<7)
	{
		$("#inputUsername").focus();
	}
	if(password=="")
	{
		$("#inputPassword").focus();
	}
	else
	{
		$.post("actions/signin.php",{id:username,pwd:password},function(data)
		{
			if(data=="green")
			{
				$("#login_link").hide();
				$("#author").html($.cookie("EDCUsername")).show();
				location.hash="#home";
				loadpage(location.hash);
			}
			else
			{
				alert("An unexpected error occured while processing your request.")
			}
		});
	}
}
function clearall()
{
	$('input').val("");
	$('textarea').val("");
}
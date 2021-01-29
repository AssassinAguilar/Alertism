var css = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');*{margin:0;padding:0;box-sizing:border-box;user-select:none;-webkit-tap-highlight-color:transparent;}#alert-backdrop{position:fixed;display:none;justify-content:center;align-items:center;top:0;left:0;height:100%;width:100%;background-color:rgba(0 0 0 / 50%);backdrop-filter:blur(5px);z-index:9999999999999999999999999999;font-family:'Montserrat',sans-serif}#alert-backdrop #alert-container{position:relative;text-align:left;padding:20px;width:calc(100% - 10vw);border-radius:0;box-shadow:-6px -6px 18px rgba(255,255,255,0.01),6px 6px 18px rgba(0,0,0,0.8);opacity:1;transition:.5s;background-color:#fff;color:#000;transform:translateX(0) translateY(0) scale(1)}#alert-backdrop #alert-container.dark{background-color:#000;color:#fff}#alert-backdrop #alert-container.glass{background-color:rgba(255,255,255,0.1);color:#fff}#alert-backdrop #alert-container #glassmorphism{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#000;z-index:-1;display:none}#alert-backdrop #alert-container.glass #glassmorphism::before{content:'';position:absolute;top:0;left:0;height:100%;width:100%;background:linear-gradient(45deg,red,blue);clip-path:circle(40% at right 80%)}#alert-backdrop #alert-container.glass #glassmorphism::after{content:'';position:absolute;top:0;left:0;height:100%;width:100%;background:linear-gradient(45deg,#1fe6ff,#673ab7);clip-path:circle(40% at left 25%)}#alert-backdrop #alert-container #icon-tick{position:relative;display:none;height:70px;width:70px;margin-bottom:20px;padding:30px;left:50%;transform:translateX(-50%);border:5px solid green;border-radius:50%}#alert-backdrop #alert-container #icon-tick::before{content:'';position:absolute;margin-top:0;margin-left:-10px;height:10px;width:5px;background-color:green;border-top-left-radius:50px;border-top-right-radius:50px;transform:rotate(-50deg)}#alert-backdrop #alert-container #icon-tick::after{content:'';position:absolute;margin-top:-12px;height:25px;width:5px;background-color:green;border-top-left-radius:50px;border-top-right-radius:50px;transform:rotate(40deg)}#alert-backdrop #alert-container #icon-cross{position:relative;display:none;height:70px;width:70px;margin-bottom:20px;padding:30px;left:50%;transform:translateX(-50%);border:5px solid red;border-radius:50%}#alert-backdrop #alert-container #icon-cross::before{content:'';position:absolute;margin-top:-15px;margin-left:-2px;height:30px;width:5px;background-color:red;border-radius:50px;transform:rotate(45deg)}#alert-backdrop #alert-container #icon-cross::after{content:'';position:absolute;margin-top:-15px;margin-left:-2px;height:30px;width:5px;background-color:red;border-radius:50px;transform:rotate(-45deg)}#alert-backdrop #alert-container #icon-info{position:relative;display:none;height:70px;width:70px;margin-bottom:20px;padding:30px;left:50%;transform:translateX(-50%);border:5px solid #ccc;border-radius:50%}#alert-backdrop #alert-container #icon-info::before{content:'';position:absolute;margin-left:-2px;margin-top:-20px;height:30px;width:5px;background-color:#ccc;border-radius:50px}#alert-backdrop #alert-container #icon-info::after{content:'';position:absolute;margin-left:-3px;margin-top:12px;height:7px;width:7px;background-color:#ccc;border-radius:50%}#alert-backdrop #alert-container #alert-h2{text-align:center;margin-bottom:20px;font-size:20px;font-weight:900}#alert-backdrop #alert-container #alert-input{position:relative;display:none;padding:10px;border-radius:5px;width:100%;margin:20px 0;border:3px solid #ccc;outline:0;transition:.5s;font-family:'Montserrat',sans-serif}#alert-backdrop #alert-container.dark #alert-input{background-color:#000;border-color:#ccc;color:#fff}#alert-backdrop #alert-container.glass #alert-input{background-color:rgba(255,255,255,.2);border-color:#ccc;color:#fff}#alert-backdrop #alert-container #alert-input:focus{border-color:#2196f3}#alert-backdrop #alert-container #alert-p{font-weight:600}#alert-backdrop #alert-container #btn-container{position:relative;text-align:right;margin-top:20px}#alert-backdrop #alert-container #btn-container button{position:relative;padding:5px 10px;background-color:#2196f3;border:2px solid #2196f3;margin:0 5px;outline:0;color:#fff;font-size:15px;border-radius:5px;font-weight:700;box-shadow:-2px -2px 6px rgba(255,255,255,0.01),2px 2px 6px rgba(0,0,0,0.8);font-family:'Montserrat',sans-serif;cursor:pointer}#alert-backdrop #alert-container.glass #btn-container button{background-color:rgba(255,255,255,.1);border-color:rgba(255,255,255,.2)}#alert-backdrop #alert-container #btn-container button:active{box-shadow:inset -2px -2px 6px rgba(255,255,255,0.01),inset 2px 2px 6px rgba(0,0,0,0.8)}#alert-backdrop #alert-container #cancel-btn{opacity:0;pointer-events:none}@keyframes zoom{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}@keyframes top{0%{transform:translateY(-200%)}100%{transform:translateY(0)}}@keyframes bottom{0%{transform:translateY(200%)}100%{transform:translateY(0)}}@keyframes right{0%{transform:translateX(150%)}100%{transform:translateX(0)}}@keyframes left{0%{transform:translateX(-150%)}100%{transform:translateX(0)}}@keyframes zoom-out{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}@keyframes top-out{0%{transform:translateY(0)}100%{transform:translateY(200%)}}@keyframes bottom-out{0%{transform:translateY(0)}100%{transform:translateY(-200%)}}@keyframes right-out{0%{transform:translateX(0)}100%{transform:translateX(-150%)}}@keyframes left-out{0%{transform:translateX(0)}100%{transform:translateX(150%)}}
`,
	head = document.head || document.getElementsByTagName('head')[0],
	style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet)
{
	style.styleSheet.cssText = css;
}
else
{
	style.appendChild(document.createTextNode(css));
}
var div = document.createElement("div");
div.setAttribute("id", "alertSuperContainer");
div.innerHTML = `
<div id='alert-backdrop'><div id='alert-container'><div id='glassmorphism'></div><div id='icon-tick'></div><div id='icon-cross'></div><div id='icon-info'></div><h2 id='alert-h2'></h2><p id='alert-p'></p><input id='alert-input' type='text' autocomplete='off'><div id='btn-container'><button id='cancel-btn'></button><button id='ok-btn'></button></div></div></div>
`,
	document.querySelector("body").appendChild(div);

var alertBox = document.getElementById("alert-container");

var mainAlert = document.getElementById("alert-backdrop");

var alertOkBtn = document.getElementById("ok-btn");

var alertCloseBtn = document.getElementById("cancel-btn");

var alertInputValue = document.getElementById("alert-input").value;

var tickIcon = document.getElementById("icon-tick");

var crossIcon = document.getElementById("icon-cross");

var infoIcon = document.getElementById("icon-info");

var alertH2 = document.getElementById("alert-h2");

var alertGlass = document.getElementById("glassmorphism");

var alertInputPlace = document.getElementById("alert-input").placeholder;

var alertP = document.getElementById("alert-p");

var alertInput = document.getElementById("alert-input");

function Alertism(arguments, animation)
{

	mainAlert.style.display = "flex";

	alertBox.style.transform = "translateX(0) translateY(0) scale(1)";

	if (arguments.alertBackground !== undefined)
	{
		alertBox.style.background = arguments.alertBackground;
	}
	else if (arguments.alertBackground == "")
	{
		alertBox.style.background = "#fff";
	}
	else
	{
		alertBox.style.background = "#fff";
	}

	if (arguments.alertTextColour !== undefined)
	{
		alertBox.style.color = arguments.alertTextColour;
	}
	else if (arguments.alertTextColour == "")
	{
		alertBox.style.color = "#000";
	}
	else
	{
		alertBox.style.color = "#000";
	}

	if (arguments.btnText !== undefined)
	{
		alertOkBtn.innerHTML = arguments.btnText;
	}
	else
	{
		alertOkBtn.innerHTML = "Ok"
	}

	if (arguments.title !== undefined)
	{
		alertH2.innerHTML = arguments.title;
	}
	else
	{
		alertH2.innerHTML = "Alert";
	}

	if (arguments.text !== undefined)
	{
		alertP.innerHTML = arguments.text;
	}
	else
	{
		alertP.innerHTML = "This is an Alert Box.";
	}

	if (arguments.placeHolder !== undefined)
	{
		alertInput.placeholder = arguments.placeHolder;
	}
	else
	{
		alertInput.placeholder = "Enter Text";
	}

	if (arguments.defaultValue !== undefined)
	{
		alertInput.value = arguments.defaultValue;
	}
	else
	{
		alertInput.value = "";
	}

	if (arguments.enableInput === true)
	{
		alertInput.style.display = "block";
	}
	else if (arguments.enableInput == undefined || arguments.enableInput === false)
	{
		alertInput.style.display = "none";
	}
	else
	{
		alertInput.style.display = "none";
	}

	if (arguments.mode === "dark")
	{
		alertBox.classList.add("dark");
		alertBox.classList.remove("glass");
		alertGlass.style.display = "none";
	}
	else if (arguments.mode === "glass")
	{
		alertBox.classList.add("glass");
		alertGlass.style.display = "block";
	}
	else if (arguments.mode === "light" || arguments.mode == undefined)
	{
		alertBox.className = "";
		alertGlass.style.display = "none";
	}
	else
	{
		alertBox.className = "";
		alertGlass.style.display = "none";
	}

	if (arguments.closeBtn !== undefined)
	{
		alertCloseBtn.style.opacity = "1";
		alertCloseBtn.style.pointerEvents = "auto";
		alertCloseBtn.innerHTML = arguments.closeBtn;
	}
	else
	{
		alertCloseBtn.style.opacity = "0";
		alertCloseBtn.style.pointerEvents = "none";
		alertCloseBtn.innerHTML = "";
	}

	if (arguments.icon === "tick")
	{
		tickIcon.style.display = "block";
		crossIcon.style.display = "none";
		infoIcon.style.display = "none";
	}
	else if (arguments.icon === "cross")
	{
		crossIcon.style.display = "block";
		tickIcon.style.display = "none";
		infoIcon.style.display = "none";
	}
	else if (arguments.icon === "info")
	{
		infoIcon.style.display = "block";
		tickIcon.style.display = "none";
		crossIcon.style.display = "none";
	}
	else
	{
		tickIcon.style.display = "none";
		crossIcon.style.display = "none";
		infoIcon.style.display = "none";
	}

	if (animation !== undefined)
	{
		alertBox.style.animation = animation + " 0.5s ease-in-out";
	}
	else
	{
		alertBox.style.animation = "";
	}

	alertCloseBtn.addEventListener("click", function ()
	{
		if (animation !== undefined)
		{
			alertBox.style.animation = animation + "-out 0.5s ease-in-out";
			setTimeout(function ()
			{
				mainAlert.style.display = "none";
			}, 500)
		}
		else if (animation == undefined)
		{
			setTimeout(function ()
			{
				mainAlert.style.display = "none";
			}, 500)
		}
		else
		{
			setTimeout(function ()
			{
				mainAlert.style.display = "none";
			}, 500)
		}
	})

	alertOkBtn.addEventListener("click", function ()
	{
		if (animation !== undefined)
		{
			alertBox.style.animation = animation + "-out 0.5s ease-in-out";
			setTimeout(function ()
			{
				mainAlert.style.display = "none";
			}, 500)
		}
		else if (animation == undefined)
		{
			setTimeout(function ()
			{
				mainAlert.style.display = "none";
			}, 500)
		}
		else
		{
			setTimeout(function ()
			{
				mainAlert.style.display = "none";
			}, 500)
		}
	})
}

function Toast(text = "This is a Toast.", Tbackground, Tcolor)
{

	var css = "\n#toast{visibility:hidden;text-align:center;border-radius:0;padding:16px;position:fixed;z-index:999999999999999999999999999;left:50%;transform:translateX(-50%);bottom:30px;width:calc(100% - 20vw);font-size:1rem;font-weight:bold;font-family:'Montserrat',sans-serif}#toast.active{visibility:visible;animation:fadein .5s,fadeout .5s 1.5s}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}\n";
	head = document.head || document.getElementsByTagName("head")[0],
		style = document.createElement("style");
	head.appendChild(style), style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css));
	var toaster = document.createElement("div");

	toaster.setAttribute("id", "toast");
	document.body.appendChild(toaster);
	var toast = document.getElementById("toast");
	if (Tbackground !== undefined)
	{
		toast.style.background = Tbackground;
	}
	else
	{
		toast.style.background = "#333";
	}
	if (Tcolor !== undefined)
	{
		toast.style.color = Tcolor;
	}
	else
	{
		toast.style.color = "#fff";
	}
	toast.innerText = text;
	toast.classList.add("active");
	setTimeout(function ()
	{
		toast.className = toast.classList.remove("active");
	}, 2000);
}

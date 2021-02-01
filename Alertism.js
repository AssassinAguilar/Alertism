var css = "\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');*{margin:0;padding:0;box-sizing:border-box;user-select:none;-webkit-tap-highlight-color:transparent;}#alert-backdrop{position:fixed;display:none;justify-content:center;align-items:center;top:0;left:0;height:100%;width:100%;background-color:rgba(0 0 0 / 50%);backdrop-filter:blur(5px);z-index:9999999999999999999999999999;font-family:'Montserrat',sans-serif}#alert-backdrop #alert-container{position:relative;text-align:left;padding:20px;width:calc(100% - 10vw);border-radius:0;box-shadow:-6px -6px 18px rgba(255,255,255,0.01),6px 6px 18px rgba(0,0,0,0.8);opacity:1;transition:.5s;background-color:#fff;color:#000;transform:translateX(0) translateY(0) scale(1)}#alert-backdrop #alert-container.dark{background-color:#000;color:#fff}#alert-backdrop #alert-container.glass{background-color:rgba(255,255,255,0.1);color:#fff}#alert-backdrop #alert-container #glassmorphism{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#000;z-index:-1;display:none}#alert-backdrop #alert-container.glass #glassmorphism::before{content:'';position:absolute;top:0;left:0;height:100%;width:100%;background:linear-gradient(45deg,red,blue);clip-path:circle(40% at right 80%)}#alert-backdrop #alert-container.glass #glassmorphism::after{content:'';position:absolute;top:0;left:0;height:100%;width:100%;background:linear-gradient(45deg,#1fe6ff,#673ab7);clip-path:circle(40% at left 25%)}#alert-backdrop #alert-container #icon-tick{position:relative;display:none;height:70px;width:70px;margin-bottom:20px;padding:30px;left:50%;transform:translateX(-50%);border:5px solid green;border-radius:50%}#alert-backdrop #alert-container #icon-tick::before{content:'';position:absolute;margin-top:0;margin-left:-10px;height:10px;width:5px;background-color:green;border-top-left-radius:50px;border-top-right-radius:50px;transform:rotate(-50deg)}#alert-backdrop #alert-container #icon-tick::after{content:'';position:absolute;margin-top:-12px;height:25px;width:5px;background-color:green;border-top-left-radius:50px;border-top-right-radius:50px;transform:rotate(40deg)}#alert-backdrop #alert-container #icon-cross{position:relative;display:none;height:70px;width:70px;margin-bottom:20px;padding:30px;left:50%;transform:translateX(-50%);border:5px solid red;border-radius:50%}#alert-backdrop #alert-container #icon-cross::before{content:'';position:absolute;margin-top:-15px;margin-left:-2px;height:30px;width:5px;background-color:red;border-radius:50px;transform:rotate(45deg)}#alert-backdrop #alert-container #icon-cross::after{content:'';position:absolute;margin-top:-15px;margin-left:-2px;height:30px;width:5px;background-color:red;border-radius:50px;transform:rotate(-45deg)}#alert-backdrop #alert-container #icon-info{position:relative;display:none;height:70px;width:70px;margin-bottom:20px;padding:30px;left:50%;transform:translateX(-50%);border:5px solid #ccc;border-radius:50%}#alert-backdrop #alert-container #icon-info::before{content:'';position:absolute;margin-left:-2px;margin-top:-20px;height:30px;width:5px;background-color:#ccc;border-radius:50px}#alert-backdrop #alert-container #icon-info::after{content:'';position:absolute;margin-left:-3px;margin-top:12px;height:7px;width:7px;background-color:#ccc;border-radius:50%}#alert-backdrop #alert-container #alert-h2{text-align:center;margin-bottom:20px;font-size:20px;font-weight:900}#alert-backdrop #alert-container #alert-input{position:relative;display:none;padding:10px;border-radius:5px;width:100%;margin:20px 0;border:3px solid #ccc;outline:0;transition:.5s;font-family:'Montserrat',sans-serif}#alert-backdrop #alert-container.dark #alert-input{background-color:#000;border-color:#ccc;color:#fff}#alert-backdrop #alert-container.glass #alert-input{background-color:rgba(255,255,255,.2);border-color:#ccc;color:#fff}#alert-backdrop #alert-container #alert-input:focus{border-color:#2196f3}#alert-backdrop #alert-container #alert-p{font-weight:600}#alert-backdrop #alert-container #btn-container{position:relative;text-align:right;margin-top:20px}#alert-backdrop #alert-container #btn-container button{position:relative;padding:5px 10px;background-color:#2196f3;border:2px solid #2196f3;margin:0 5px;outline:0;color:#fff;font-size:15px;border-radius:5px;font-weight:700;box-shadow:-2px -2px 6px rgba(255,255,255,0.01),2px 2px 6px rgba(0,0,0,0.8);font-family:'Montserrat',sans-serif;cursor:pointer}#alert-backdrop #alert-container.glass #btn-container button{background-color:rgba(255,255,255,.1);border-color:rgba(255,255,255,.2)}#alert-backdrop #alert-container #btn-container button:active{box-shadow:inset -2px -2px 6px rgba(255,255,255,0.01),inset 2px 2px 6px rgba(0,0,0,0.8)}#alert-backdrop #alert-container #cancel-btn{opacity:0;pointer-events:none}@keyframes zoom{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}@keyframes top{0%{transform:translateY(-200%)}100%{transform:translateY(0)}}@keyframes bottom{0%{transform:translateY(200%)}100%{transform:translateY(0)}}@keyframes right{0%{transform:translateX(200%)}100%{transform:translateX(0)}}@keyframes left{0%{transform:translateX(-200%)}100%{transform:translateX(0)}}\n",
	head = document.head || document.getElementsByTagName("head")[0],
	style = document.createElement("style");
head.appendChild(style), style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css));
var div = document.createElement("div");
div.setAttribute("id", "alertSuperContainer"), div.innerHTML = "\n<div id='alert-backdrop'><div id='alert-container'><div id='glassmorphism'></div><div id='icon-tick'></div><div id='icon-cross'></div><div id='icon-info'></div><h2 id='alert-h2'></h2><p id='alert-p'></p><input id='alert-input' type='text' autocomplete='off'><div id='btn-container'><button id='cancel-btn'></button><button id='ok-btn'></button></div></div></div>\n", document.querySelector("body").appendChild(div);
var alertBox = document.getElementById("alert-container"),
	mainAlert = document.getElementById("alert-backdrop"),
	alertOkBtn = document.getElementById("ok-btn"),
	alertCloseBtn = document.getElementById("cancel-btn"),
	alertInputValue = document.getElementById("alert-input").value,
	tickIcon = document.getElementById("icon-tick"),
	crossIcon = document.getElementById("icon-cross"),
	infoIcon = document.getElementById("icon-info"),
	alertH2 = document.getElementById("alert-h2"),
	alertGlass = document.getElementById("glassmorphism"),
	alertInputPlace = document.getElementById("alert-input").placeholder,
	alertP = document.getElementById("alert-p"),
	alertInput = document.getElementById("alert-input");

function Alertism(arguments, t)
{
	mainAlert.style.display = "flex", alertBox.style.transform = "translateX(0) translateY(0) scale(1)", "" !== arguments.alertBackground ? alertBox.style.backgroundColor = arguments.alertBackground : alertBox.style.backgroundColor = "#fff", "" !== arguments.alertTextColour ? alertBox.style.color = arguments.alertTextColour : alertBox.style.color = "#000", void 0 !== arguments.btnText ? alertOkBtn.innerHTML = arguments.btnText : alertOkBtn.innerHTML = "Ok", void 0 !== arguments.title ? alertH2.innerHTML = arguments.title : alertH2.innerHTML = "Alert", void 0 !== arguments.text ? alertP.innerHTML = arguments.text : alertP.innerHTML = "This is an Alert Box.", void 0 !== arguments.placeHolder ? alertInput.placeholder = arguments.placeHolder : alertInput.placeholder = "Enter Text", void 0 !== arguments.defaultValue ? alertInput.value = arguments.defaultValue : alertInput.value = "", !0 === arguments.enableInput ? alertInput.style.display = "block" : (null == arguments.enableInput || arguments.enableInput, alertInput.style.display = "none"), "dark" === arguments.mode ? (alertBox.classList.add("dark"), alertBox.classList.remove("glass"), alertGlass.style.display = "none") : "glass" === arguments.mode ? (alertBox.classList.add("glass"), alertGlass.style.display = "block") : ("light" === arguments.mode || arguments.mode, alertBox.className = "", alertGlass.style.display = "none"), void 0 !== arguments.closeBtn ? (alertCloseBtn.style.opacity = "1", alertCloseBtn.style.pointerEvents = "auto", alertCloseBtn.innerHTML = arguments.closeBtn) : (alertCloseBtn.style.opacity = "0", alertCloseBtn.style.pointerEvents = "none", alertCloseBtn.innerHTML = ""), "tick" === arguments.icon ? (tickIcon.style.display = "block", crossIcon.style.display = "none", infoIcon.style.display = "none") : "cross" === arguments.icon ? (crossIcon.style.display = "block", tickIcon.style.display = "none", infoIcon.style.display = "none") : "info" === arguments.icon ? (infoIcon.style.display = "block", tickIcon.style.display = "none", crossIcon.style.display = "none") : (tickIcon.style.display = "none", crossIcon.style.display = "none", infoIcon.style.display = "none"), alertBox.style.animation = void 0 !== t ? t + " 0.5s ease-in-out" : "", alertCloseBtn.addEventListener("click", function ()
	{
		"zoom" === t ? (alertBox.style.transform = "scale(0.1)", setTimeout(function ()
		{
			mainAlert.style.display = "none"
		}, 500)) : "top" === t ? (alertBox.style.transform = "translateY(200%)", setTimeout(function ()
		{
			mainAlert.style.display = "none"
		}, 500)) : "bottom" === t ? (alertBox.style.transform = "translateY(-200%)", setTimeout(function ()
		{
			mainAlert.style.display = "none"
		}, 500)) : "left" === t ? (alertBox.style.transform = "translateX(200%)", setTimeout(function ()
		{
			mainAlert.style.display = "none"
		}, 500)) : "right" === t ? (alertBox.style.transform = "translateX(-200%)", setTimeout(function ()
		{
			mainAlert.style.display = "none"
		}, 500)) : setTimeout(function ()
		{
			mainAlert.style.display = "none"
		}, 500)
	}), alertOkBtn.addEventListener("click", function ()
	{
		"zoom" === t ? (alertBox.style.transform = "scale(0.1)", setTimeout(function ()
		{
			mainAlert.style.display = "none"
		}, 500)) : "top" === t ? (alertBox.style.transform = "translateY(200%)", setTimeout(function ()
		{
			mainAlert.style.display = "none"
		}, 500)) : "bottom" === t ? (alertBox.style.transform = "translateY(-200%)", setTimeout(function ()
		{
			mainAlert.style.display = "none"
		}, 500)) : "left" === t ? (alertBox.style.transform = "translateX(200%)", setTimeout(function ()
		{
			mainAlert.style.display = "none"
		}, 500)) : "right" === t ? (alertBox.style.transform = "translateX(-200%)", setTimeout(function ()
		{
			mainAlert.style.display = "none"
		}, 500)) : setTimeout(function ()
		{
			mainAlert.style.display = "none"
		}, 500)
	})
}

function Toast(t = "This is a Toast.", e, o)
{
	var a = "\n#toast{visibility:hidden;text-align:center;border-radius:0;padding:16px;position:fixed;z-index:999999999999999999999999999;left:50%;transform:translateX(-50%);bottom:30px;width:calc(100% - 20vw);font-size:1rem;font-weight:bold;font-family:'Montserrat',sans-serif}#toast.active{visibility:visible;animation:fadein .5s,fadeout .5s 1.5s}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}\n";
	head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style"), head.appendChild(style), style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = a : style.appendChild(document.createTextNode(a));
	var r = document.createElement("div");
	r.setAttribute("id", "toast"), document.body.appendChild(r);
	var n = document.getElementById("toast");
	n.style.background = void 0 !== e ? e : "#333", n.style.color = void 0 !== o ? o : "#fff", n.innerText = t, n.classList.add("active"), setTimeout(function ()
	{
		n.className = n.classList.remove("active")
	}, 2e3)
}

var css = "\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');*{margin:0;padding:0;box-sizing:border-box;user-select:none;-webkit-tap-highlight-color:transparent;}#alert-backdrop{position:fixed;display:none;justify-content:center;align-items:center;top:0;left:0;height:100%;width:100%;background-color:rgba(0 0 0 / 50%);backdrop-filter:blur(5px);z-index:9999999999999999999999999999;font-family:'Montserrat',sans-serif}#alert-backdrop #alert-container{position:relative;background-color:#fff;text-align:left;padding:20px;width:calc(100% - 10vw);border-radius:0;box-shadow:-6px -6px 18px rgba(255,255,255,0.01),6px 6px 18px rgba(0,0,0,0.8);opacity:1;transition:.5s}#alert-backdrop #alert-container.dark{background-color:#000;color:#fff}#alert-backdrop #alert-container.glass{background-color:rgba(255,255,255,0.1);color:#fff}#alert-backdrop #alert-container #glassmorphism{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#000;z-index:-1}#alert-backdrop #alert-container.glass #glassmorphism::before{content:'';position:absolute;top:0;left:0;height:100%;width:100%;background:linear-gradient(45deg,red,blue);clip-path:circle(40% at right 80%)}#alert-backdrop #alert-container.glass #glassmorphism::after{content:'';position:absolute;top:0;left:0;height:100%;width:100%;background:linear-gradient(45deg,#1fe6ff,#673ab7);clip-path:circle(40% at left 25%)}#alert-backdrop #alert-container #icon-tick{position:relative;display:none;height:70px;width:70px;margin-bottom:20px;padding:30px;left:50%;transform:translateX(-50%);border:5px solid green;border-radius:50%}#alert-backdrop #alert-container #icon-tick::before{content:'';position:absolute;margin-top:0;margin-left:-10px;height:10px;width:5px;background-color:green;border-top-left-radius:50px;border-top-right-radius:50px;transform:rotate(-50deg)}#alert-backdrop #alert-container #icon-tick::after{content:'';position:absolute;margin-top:-12px;height:25px;width:5px;background-color:green;border-top-left-radius:50px;border-top-right-radius:50px;transform:rotate(40deg)}#alert-backdrop #alert-container #icon-cross{position:relative;display:none;height:70px;width:70px;margin-bottom:20px;padding:30px;left:50%;transform:translateX(-50%);border:5px solid red;border-radius:50%}#alert-backdrop #alert-container #icon-cross::before{content:'';position:absolute;margin-top:-15px;margin-left:-2px;height:30px;width:5px;background-color:red;border-radius:50px;transform:rotate(45deg)}#alert-backdrop #alert-container #icon-cross::after{content:'';position:absolute;margin-top:-15px;margin-left:-2px;height:30px;width:5px;background-color:red;border-radius:50px;transform:rotate(-45deg)}#alert-backdrop #alert-container #icon-info{position:relative;display:none;height:70px;width:70px;margin-bottom:20px;padding:30px;left:50%;transform:translateX(-50%);border:5px solid #ccc;border-radius:50%}#alert-backdrop #alert-container #icon-info::before{content:'';position:absolute;margin-left:-2px;margin-top:-20px;height:30px;width:5px;background-color:#ccc;border-radius:50px}#alert-backdrop #alert-container #icon-info::after{content:'';position:absolute;margin-left:-3px;margin-top:12px;height:7px;width:7px;background-color:#ccc;border-radius:50%}#alert-backdrop #alert-container #alert-h2{text-align:center;margin-bottom:20px;font-size:20px;font-weight:900}#alert-backdrop #alert-container #alert-input{position:relative;display:none;padding:10px;border-radius:5px;width:100%;margin:20px 0;border:3px solid #ccc;outline:0;transition:.5s;font-family:'Montserrat',sans-serif}#alert-backdrop #alert-container.dark #alert-input{background-color:#000;border-color:#ccc;color:#fff}#alert-backdrop #alert-container.glass #alert-input{background-color:rgba(255,255,255,.2);border-color:#ccc;color:#fff}#alert-backdrop #alert-container #alert-input:focus{border-color:#2196f3}#alert-backdrop #alert-container #alert-p{font-weight:600}#alert-backdrop #alert-container #btn-container{position:relative;text-align:right;margin-top:20px}#alert-backdrop #alert-container #btn-container button{position:relative;padding:5px 10px;background-color:#2196f3;border:2px solid #2196f3;margin:0 5px;outline:0;color:#fff;font-size:15px;border-radius:5px;font-weight:700;box-shadow:-2px -2px 6px rgba(255,255,255,0.01),2px 2px 6px rgba(0,0,0,0.8);font-family:'Montserrat',sans-serif;cursor:pointer}#alert-backdrop #alert-container.glass #btn-container button{background-color:rgba(255,255,255,.1);border-color:rgba(255,255,255,.2)}#alert-backdrop #alert-container #btn-container button:active{box-shadow:inset -2px -2px 6px rgba(255,255,255,0.01),inset 2px 2px 6px rgba(0,0,0,0.8)}#alert-backdrop #alert-container #cancel-btn{opacity:0;pointer-events:none}@keyframes zoom-in{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}@keyframes top{0%{transform:translateY(-200%)}100%{transform:translateY(0)}}@keyframes bottom{0%{transform:translateY(200%)}100%{transform:translateY(0)}}@keyframes right{0%{transform:translateX(200%)}100%{transform:translateX(0)}}@keyframes left{0%{transform:translateX(-200%)}100%{transform:translateX(0)}}\n",
        head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");
head.appendChild(style), style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css));
var html = document.createElement("div");

        html.innerHTML = "\n<div id='alert-backdrop'><div id='alert-container'><div id='glassmorphism'></div><div id='icon-tick'></div><div id='icon-cross'></div><div id='icon-info'></div><h2 id='alert-h2'></h2><p id='alert-p'></p><input id='alert-input' type='text' autocomplete='off' placeholder='Enter Text'><div id='btn-container'><button id='cancel-btn'></button><button id='ok-btn'></button></div></div></div>\n";
        document.body.appendChild(html);

function Alertism(heading = "Alert", text = "This is an Alert Box.", button = "Ok", closeButton, inputEnable = false, mode, transition, icon){
        
        var alertBox = document.getElementById("alert-container");
        
        var mainAlert = document.getElementById("alert-backdrop");
        mainAlert.style.display = "flex";
        
        var tickIcon = document.getElementById("icon-tick");
        
        var crossIcon = document.getElementById("icon-cross"); 
        
        var infoIcon = document.getElementById("icon-info");
        
        var closeBtn = document.getElementById("cancel-btn");
        
        var alertH2 = document.getElementById("alert-h2");
        alertH2.innerText = heading;
        
        var alertP = document.getElementById("alert-p");
        alertP.innerText = text;
        
        var input = document.getElementById("alert-input");
        
        var okBtn = document.getElementById("ok-btn");
        okBtn.innerText = button;
        
        if(inputEnable === true){
            
            input.style.display = "block";
            
        } else if(inputEnable === false){
            
            input.style.display = "none";
            
        } else {
            input.style.display = "none";
        }
        
        if(mode === "dark"){
            alertBox.classList.add("dark");
        } else if(mode === "glass"){
            alertBox.classList.add("glass");
        } else {
            alertBox.className = "";
        }
        
        if(transition === "zoom-in"){
            alertBox.style.animation = "zoom-in 0.5s ease-in-out";
        } else if(transition === "top"){
            alertBox.style.animation = "top 0.5s ease-in-out";
        } else if(transition === "bottom"){
            alertBox.style.animation = "bottom 0.5s ease-in-out";
        } else if(transition === "left"){
            alertBox.style.animation = "left 0.5s ease-in-out";
        } else if(transition === "right"){
            alertBox.style.animation = "right 0.5s ease-in-out";
        } else {
            alertBox.style.animation = "";
        } 
        
        if(icon === "tick"){
            tickIcon.style.display = "block";
        } else if(icon === "cross"){
            crossIcon.style.display = "block";
        } else if(icon === "info"){
            infoIcon.style.display = "block";
        } else {
            tickIcon, crossIcon, infoIcon.style.display = "none";
        }
        
        if(closeButton === ""){
            closeBtn.style.opacity = "0";
            closeBtn.style.pointerEvents = "none";
        } else if(closeButton !== ""){
            closeBtn.style.opacity = "1";
            closeBtn.style.pointerEvents = "auto";
            closeBtn.innerText = closeButton;
        }
        
        okBtn.addEventListener("click", function(){
            if(transition === "zoom-in"){
            alertBox.style.transform = "scale(0)";
            setTimeout(function (){mainAlert.style.display = "none";},500)
        } else if(transition === "top"){
            alertBox.style.transform = "translateY(200%)";
            setTimeout(function (){mainAlert.style.display = "none";},500)
        } else if(transition === "bottom"){
            alertBox.style.transform = "translateY(-200%)";
            setTimeout(function (){mainAlert.style.display = "none";},500)
        } else if(transition === "left"){
            alertBox.style.transform = "translateX(200%)";
            setTimeout(function (){mainAlert.style.display = "none";},500)
        } else if(transition === "right"){
            alertBox.style.transform = "translateX(-200%)";
            setTimeout(function (){mainAlert.style.display = "none";},500)
        } else {
            alertBox.style.display = "none";
            mainAlert.style.display = "none";
        } 
        })
        
        closeBtn.addEventListener("click", function(){
            if(transition === "zoom-in"){
            alertBox.style.transform = "scale(0)";
            setTimeout(function (){mainAlert.style.display = "none";},500)
        } else if(transition === "top"){
            alertBox.style.transform = "translateY(200%)";
            setTimeout(function (){mainAlert.style.display = "none";},500)
        } else if(transition === "bottom"){
            alertBox.style.transform = "translateY(-200%)";
            setTimeout(function (){mainAlert.style.display = "none";},500)
        } else if(transition === "left"){
            alertBox.style.transform = "translateX(200%)";
            setTimeout(function (){mainAlert.style.display = "none";},500)
        } else if(transition === "right"){
            alertBox.style.transform = "translateX(-200%)";
            setTimeout(function (){mainAlert.style.display = "none";},500)
        } else {
            alertBox.style.display = "none";
            mainAlert.style.display = "none";
        }
        })
        
     }
     
     function Toast(text = "This is a Toast.", mode){
     
     var css = "\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');*{margin:0;padding:0;box-sizing:border-box;user-select:none;-webkit-tap-highlight-color:transparent;}#toast{visibility:hidden;box-shadow:-2px -2px 6px rgba(255,255,255,0.01),2px 2px 6px rgba(0,0,0,0.8);background-color:#fff;color:#000;text-align:center;border-radius:0;padding:16px;position:fixed;z-index:999999999999999999999999999;left:50%;transform:translateX(-50%);bottom:30px;width:calc(100% - 20vw);font-size:1rem}#toast.dark{background:#000;color:#fff}#toast.active{visibility:visible;animation:fadein .5s,fadeout .5s 1.5s}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}\n";
     head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");
head.appendChild(style), style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css));
var toaster = document.createElement("div");

        toaster.setAttribute("id", "toast");
        document.body.appendChild(toaster);
         var toast = document.getElementById("toast");
         if(mode === "dark"){
             toast.classList.add("dark");
         } else {
             
         }
         toast.innerText = text;
         toast.classList.add("active");
         setTimeout(function () { toast.className = toast.classList.remove("active"); }, 2000);
     }

export default function Toast(t = "This is a Toast.", e, o) {
    var a = "\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');*{margin:0;padding:0;box-sizing:border-box;user-select:none;-webkit-tap-highlight-color:transparent;}#toast{visibility:hidden;text-align:center;border-radius:0;padding:16px;position:fixed;z-index:999999999999999999999999999;left:50%;transform:translateX(-50%);bottom:30px;width:calc(100% - 20vw);font-size:1rem;font-weight:bold;font-family:'Montserrat',sans-serif}#toast.active{visibility:visible;animation:fadein .5s,fadeout .5s 1.5s}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}\n",
    head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style"), head.appendChild(style), style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = a : style.appendChild(document.createTextNode(a));
    var r = document.createElement("div");
    r.setAttribute("id", "toast"), document.body.appendChild(r);
    var n = document.getElementById("toast");
    n.style.background = void 0 !== e ? e : "#333", n.style.color = void 0 !== o ? o : "#fff", n.innerText = t, n.classList.add("active"), setTimeout(function() {
        n.className = n.classList.remove("active")
    }, 2e3)
}

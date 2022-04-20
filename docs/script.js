onload = () => {
  (adsbygoogle = window.adsbygoogle || []).push({});
  Shiki.highlightAll();
  console.log = () => {};
  Alertism({
    enableIcon: true,
    icon: {
      type: "info",
    },
    alertHeading: "Welcome Guys",
    alertText: "This is the V2.0.0 of a JS library Alertism by Assassin.",
    btnText: "Continue",
    alertFooter:
      "If you don't know what is Alertism ? <a href='https://code.sololearn.com/WxvT30Psiaqz/?ref=app'>Click Me</a>",
    theme: "glass",
    animation: "zoom-in",
  });
};

onclick = (e) => {
  if (e.target.id !== "sideNav" && e.target.id !== "hamBurger") {
    document.querySelector(".sidenav").classList.remove("active");
    document.querySelector(".nav-menu").classList.remove("active");
  } else {
    document.querySelector(".sidenav").classList.add("active");
    document.querySelector(".nav-menu").classList.add("active");
  }
};

function openMenu() {
  document.querySelector(".sidenav").classList.toggle("active");
  document.querySelector(".nav-menu").classList.toggle("active");
}

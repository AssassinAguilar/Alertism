# Introduction
Alertism.js is a JavaScript Library which is used to make the default Alerts of JavaScript more beautiful and good-looking than original with some few lines of code. This is the V2.0.0 of Alertism.js by Assassin. Alertism.js is also used to make some nice Toasts means Pop-Ups.
### Implementation
Let's talk about the easy implementation of Alertism.js V2.0.0 to your webpage. You just have to copy/paste the following CDN of Alertism.js V2.0.0 to your webpage. This CDN will import the Alertism.js V2.0.0 Library from it's repository on Assassin's GitHub profile to your webpage.
```html
<script src="https://cdn.jsdelivr.net/gh/AssassinAguilar/Alertism/dist/V2.0.0/main.js"></script>
```
# Usage
```javascript
Alertism({
    alertHeading: "Heading for Alert",
    alertText: "Text for Alert."
})
```
That was the basic calling of the Alertism.js V2.0.0 Alerts.
**_WARNING:- 2 Alerts can't be used at same event listeners, So if you want to use 2 Alerts at same time. You have to use the other one in the onConfirmed like argumetns of the first one._**
The main object is **Alertism** which contains all arguments in a form of array. Check out the following table and try to understand it carefully as you are only become able to use Alertism.js V2.0.0 after understanding the following table.
### Arguments Table
Arguments | Arguments Type | Work
--------- | -------------- | ----
alertHeading | String ( Text ) | Heading For The Alert
alertText | String ( Text ) | Text For The Alert
alertHTML | String ( HTML Code )</td><td> HTML Code For Alert</td></tr><tr><td> btnText</td><td> String ( Text )</td><td> Text for Right Side Button</td></tr><tr><td> closeBtnText</td><td> String ( Text )</td><td> Enable a Button on Left Side and Text for It</td></tr><tr><td> alertFooter</td><td> String ( HTML Code or Text )</td><td> HTML Code or Text For Footer</td></tr><tr><td> enableIcon</td><td> Boolean ( True or False )</td><td> Enables Icon For The Alert</td></tr><tr><td> icon</td><td> Array</td><td> Colour, Position and Type for Icon</td></tr><tr><td> enableInput</td><td> Boolean ( True or False )</td><td> Enable Input for Alert</td></tr><tr><td> input</td><td> Array</td><td> Type ( within textarea ), Value and PlaceHolder for Input</td></tr><tr><td> enableCloseBtn</td><td> Boolean ( True or False )</td><td> Enable a Button to Close the Alert</td></tr><tr><td> backdrop</td><td> String ( CSS Background Code )</td><td> Change the Backdrop of The Alert</td></tr><tr><td> background</td><td> String ( CSS Background Code )</td><td> Change the Background of The Alert</td></tr><tr><td> theme</td><td> String</td><td> Theme for The Alert</td></tr><tr><td> timer</td><td> Int ( milliseconds )</td><td> Close the Alert automatically in the given time</td></tr><tr><td> position</td><td> String</td><td> Open the Alert at the given position</td></tr><tr><td> animation</td><td> String</td><td> Sets animation for the Alert</td></tr><tr><td> animationIn</td><td> String</td><td> Sets animation for the Alert Coming</td></tr><tr><td> animationOut</td><td> String</td><td> Sets animation for the Alert Going</td></tr><tr><td> onConfirmed</td><td> Function</td><td> A function which will work after closing the alert with confirming the following situation</td></tr><tr><td> onDenied</td><td> Function</td><td> A function which will work after closing the alert with dening the following situation</td></tr><tr><td> onCanceled</td><td> Function</td><td> A function which will work after closing the alert with canceling the following situation</td></tr><tr><td> onAutoClose</td><td> Function</td><td> A function which will work after closing the alert by the timer argument</td></tr>

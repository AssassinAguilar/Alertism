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
<table>
            <thead>
                <tr>
                    <th>
                        Argument
                    </th>
                    <th>
                        Argument Type
                    </th>
                    <th>
                        Work
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        alertHeading
                    </td>
                    <td>
                        String ( Text )
                    </td>
                    <td>
                        Heading For The Alert
                    </td>
                </tr>
                <tr>
                    <td>
                        alertText
                    </td>
                    <td>
                        String ( Text )
                    </td>
                    <td>
                        Text For The Alert
                    </td>
                </tr>
                <tr>
                    <td>
                        alertHTML
                    </td>
                    <td>
                        String ( HTML Code )
                    </td>
                    <td>
                        HTML Code For Alert
                    </td>
                </tr>
                <tr>
                    <td>
                        btnText
                    </td>
                    <td>
                        String ( Text )
                    </td>
                    <td>
                        Text for Right Side Button
                    </td>
                </tr>
                <tr>
                    <td>
                        closeBtnText
                    </td>
                    <td>
                        String ( Text )
                    </td>
                    <td>
                        Enable a Button on Left Side and Text for It
                    </td>
                </tr>
                <tr>
                    <td>
                        alertFooter
                    </td>
                    <td>
                        String ( HTML Code or Text )
                    </td>
                    <td>
                        HTML Code or Text For Footer
                    </td>
                </tr>
                <tr>
                    <td>
                        enableIcon
                    </td>
                    <td>
                        Boolean ( True or False )
                    </td>
                    <td>
                        Enables Icon For The Alert
                    </td>
                </tr>
                <tr>
                    <td>
                        icon
                    </td>
                    <td>
                        Array
                    </td>
                    <td>
                        Colour, Position and Type for Icon
                    </td>
                </tr>
                <tr>
                    <td>
                        enableInput
                    </td>
                    <td>
                        Boolean ( True or False )
                    </td>
                    <td>
                        Enable Input for Alert
                    </td>
                </tr>
                <tr>
                    <td>
                        input
                    </td>
                    <td>
                        Array
                    </td>
                    <td>
                        Type ( within textarea ), Value and PlaceHolder for Input
                    </td>
                </tr>
                <tr>
                    <td>
                        enableCloseBtn
                    </td>
                    <td>
                        Boolean ( True or False )
                    </td>
                    <td>
                        Enable a Button to Close the Alert
                    </td>
                </tr>
                <tr>
                    <td>
                        backdrop
                    </td>
                    <td>
                        String ( CSS Background Code )
                    </td>
                    <td>
                        Change the Backdrop of The Alert
                    </td>
                </tr>
                <tr>
                    <td>
                        background
                    </td>
                    <td>
                        String ( CSS Background Code )
                    </td>
                    <td>
                        Change the Background of The Alert
                    </td>
                </tr>
                <tr>
                    <td>
                        theme
                    </td>
                    <td>
                        String
                    </td>
                    <td>
                        Theme for The Alert
                    </td>
                </tr>
                <tr>
                    <td>
                        timer
                    </td>
                    <td>
                        Int ( milliseconds )
                    </td>
                    <td>
                        Close the Alert automatically in the given time
                    </td>
                </tr>
                <tr>
                    <td>
                        position
                    </td>
                    <td>
                        String
                    </td>
                    <td>
                        Open the Alert at the given position
                    </td>
                </tr>
                <tr>
                    <td>
                        animation
                    </td>
                    <td>
                        String
                    </td>
                    <td>
                        Sets animation for the Alert
                    </td>
                </tr>
                <tr>
                    <td>
                        animationIn
                    </td>
                    <td>
                        String
                    </td>
                    <td>
                        Sets animation for the Alert Coming
                    </td>
                </tr>
                <tr>
                    <td>
                        animationOut
                    </td>
                    <td>
                        String
                    </td>
                    <td>
                        Sets animation for the Alert Going
                    </td>
                </tr>
                <tr>
                    <td>
                        onConfirmed
                    </td>
                    <td>
                        Function
                    </td>
                    <td>
                        A function which will work after closing the alert with confirming the following situation
                    </td>
                </tr>
                <tr>
                    <td>
                        onDenied
                    </td>
                    <td>
                        Function
                    </td>
                    <td>
                        A function which will work after closing the alert with dening the following situation
                    </td>
                </tr>
                <tr>
                    <td>
                        onCanceled
                    </td>
                    <td>
                        Function
                    </td>
                    <td>
                        A function which will work after closing the alert with canceling the following situation
                    </td>
                </tr>
                <tr>
                    <td>
                        onAutoClose
                    </td>
                    <td>
                        Function
                    </td>
                    <td>
                        A function which will work after closing the alert by the timer argument
                    </td>
                </tr>
            </tbody>
        </table>
1. All valid Positons are like top-left, center and bottom-right. Here's the list for them
            <ul>
                <li>
                    top-left
                </li>
                <li>
                    top
                </li>
                <li>
                    top-right
                </li>
                <li>
                    center-left
                </li>
                <li>
                    center
                </li>
                <li>
                    center-right
                </li>
                <li>
                    bottom-left
                </li>
                <li>
                    bottom
                </li>
                <li>
                    bottom-right
                </li>
            </ul>
2. All valid Animations are same as old, they just get a little bit more good and awesome. Here's the list
            <ul>
                <li>
                    top
                </li>
                <li>
                    left
                </li>
                <li>
                    bottom
                </li>
                <li>
                    right
                </li>
                <li>
                    center
                </li>
            </ul>
3. All valis themes are as follows
            <ul>
                <li>
                    light
                </li>
                <li>
                    dark
                </li>
                <li>
                    glass
                </li>
                <li>
                    light-neumorphism
                </li>
                <li>
                    dark-neumorphism
                </li>
            </ul>
4. The icon Array arguments are as follows

```javascript
{
    position: "center"
    type: "tick",
    color: "#2196f3"
}
```
<ul>
           <li>
                All valid positions are left, center, right.
           </li>
           <li>
               All valid types of icons are tick, cross, info, warning, question.
           </li>
       </ul>
5. The input arguments are as follows

```javascript
{
    type: "textarea",
    placeHolder: "Enter Your Feedback",
    value: "This is Nice."
}
```
A mixed example of most of the arguments of the Alertism

```javascript
Alertism({
    alertHeading: "Hello",
    alertText: "Can I try to Hack your device please ? :) Do not worry I am just a beginner in Hacking, If I accidently done something wrong then nothing will happen just your data got sold :)",
    btnText: "Ok, Hack It",
    closeBtnText: "No, Please Do not",
    enableCloseBtn: true,
    enableIcon: true,
    icon: {
        type: "question"
    },
    alertFooter: "If something gone wrong, then BLAME YOURSELF !!",
    onConfirmed: () => {
        Alertism({
            alertHeading: "Hey, Thanks !",
            alertText: "Hacking Completed Successfully !! Your all data is now mine :)",
            enableIcon: true,
            theme: "light-neumorphism",
            animation: "top"
        })
    },
    onDenied: () => {
        Alertism({
            alertHeading: "Why ?",
            alertText: "If you do not want your phone to be hacked than I am leaving you but do not met me again, Bye Bye ! :(",
            enableIcon: true,
            icon: {
                type: "cross"
            },
            theme: "dark-neumorphism",
            animation: "bottom"
        })
    },
    onCanceled: () => {
        Alertism({
            alertHeading: "",
            alertText: "Why ? You Canceled it !! Are not you are my friend ? Our friendship overed !! :(",
            enableIcon: true,
            icon: {
                type: "warning"
            },
            theme: "dark",
            animation: "left"
        })
    },
    theme: "glass",
    animation: "zoom-in"
})
```
# Toast
Alertism.js V2.0.0 also makes Toasts means Pop-Ups, Let's have a look on it's table to understand it properly. The main object in this is **Toast** which contains all the arguments in the form of an array
<table>
            <thead>
                <tr>
                    <th>
                        Arguments
                    </th>
                    <th>
                        Arguments Type
                    </th>
                    <th>
                        Work
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        text
                    </td>
                    <td>
                        String ( Text )
                    </td>
                    <td>
                        Text For The Toast
                    </td>
                </tr>
                <tr>
                    <td>
                        background
                    </td>
                    <td>
                        String ( CSS Background Code )
                    </td>
                    <td>
                        Background For The Toast
                    </td>
                </tr>
                <tr>
                    <td>
                        color
                    </td>
                    <td>
                        String ( Color )
                    </td>
                    <td>
                        Colour of Text For Toast
                    </td>
                </tr>
                <tr>
                    <td>
                        theme
                    </td>
                    <td>
                        String
                    </td>
                    <td>
                        Theme For The Toast
                    </td>
                </tr>
                <tr>
                    <td>
                        position
                    </td>
                    <td>
                        String
                    </td>
                    <td>
                        Open the Toast at the given position
                    </td>
                </tr>
                <tr>
                    <td>
                        enableIcon
                    </td>
                    <td>
                        Boolean ( True or False )
                    </td>
                    <td>
                        Enable Icon For Toast
                    </td>
                </tr>
                <tr>
                    <td>
                        icon
                    </td>
                    <td>
                        Array
                    </td>
                    <td>
                        Colour and Type For Toast
                    </td>
                </tr>
                <tr>
                    <td>
                        showTimeLine
                    </td>
                    <td>
                        Boolean ( True or False )
                    </td>
                    <td>
                        Enable Time Bar For The Toast
                    </td>
                </tr>
                <tr>
                    <td>
                        timer
                    </td>
                    <td>
                        Int ( in milliseconds )
                    </td>
                    <td>
                        Close Toast in the given time
                    </td>
                </tr>
                <tr>
                    <td>
                        animation
                    </td>
                    <td>
                        String
                    </td>
                    <td>
                        Sets animation For The Toast
                    </td>
                </tr>
                <tr>
                    <td>
                        onClose
                    </td>
                    <td>
                        Function
                    </td>
                    <td>
                        A function which will work after closing the Toast
                    </td>
                </tr>
            </tbody>
        </table>
All the valid positions, themes, animations and icon array are same as Alerts. Just remember the following
        <ul>
            <li>
                Position in icon Array isn't available
            </li>
            <li>
                Make the First letter capital in the animations
            </li>
        </ul>

**_Note:- The timer for the Toasts are setted to 500 milliseconds more for the perfect animation of the time bar, If you aslo want perfect timing of the toasts going then enter the timer value to 500 milliseconds less than you want_**

A mixed example of most of the arguments of the Toast

```javascript
Toast({
    position: 'top-right',
    showTimeLine: true,
    timer: 4500,
    enableIcon: true,
    icon: {
        type: 'info',
        color: '#2196f3'
    },
    animation: 'Right'
    onClose: () => {
            Toast({
                text: 'I am a Toast which comes on the onClose argument of the other one',
                enableIcon: true,
                position: 'top-left',
                animation: 'Left',
                showTimeLine: true,
                timer: 4500,
            })
    }
)}
```

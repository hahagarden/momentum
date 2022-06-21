# _nomadcoders.co - vanillaJS chrome-app project_
_my first Javascript project :D_


## _1. Javascript_
* _**only programming language for frontend**_
* It is better that _**Tools have its own function codes**_, for example, JS is for animation, CSS is for Styling.<br>JS can also change the style of the font, but that font styling codes need to be in CSS file and JS bring them by using Class.
* We have to make codes simple as much as possible and use the recent and useful function.<br>So we use the browser's help. We use form-input HTML codes because browser automatically give messages for input conditions such as required, input length, and etc.
* _**document**_ is the _**object**_ what JS makes HTML codes into, in the JS point of view.



## _2. Method_
* _**.addEventListener("which-event", function-name)**_, it is important _**not to write () in the function-name**_ which means we just give the function-name to JS and JS executes that function whenever JS listens the event. <br>
if we add () next to function-name, that function is executed just once.
* _**.preventDefault()**_ is for preventing that browser's default action occurrs.
* _**setInterval(function-name,delay)**_ calls function every delay(milliseconds).
* _**setTimeout(function-name,delay)**_ calls function after the delay(milliseconds).
* _**document.createElement("tag-name")**_ creates html tag in JS, but not in real HTML file. so _**parent-element.appendChild(tag-name)**_ should be followed.
* _**array.pust(item)**_ add the item into the array.
* _**array.filter(function)**_ remove the item which makes the result of inner function false excuting inner function for all each item.
* LocalStorage save only in string, so if we want to save array in localStorage, make the array into string using _**localStorage.setItem(KEY, JSON.stringify(array))**_ and opposite work is _**JSON.parse(what)**_ after _**what=localStorage.getItem(KEY)**_.
* As seen in login-form, after login we do not want login-form rather greetings. To hide login-form under some options, we add the class .hidden like _**tag-name.classList.add("hidden")**_ and opposite work is _**tag-name.classList.remove("hidden")**_
* For random number, _**Math.random()*max-number**_ then number between 0 and max-number including 0. 

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? <br> <br>
getElementById : select element using id. Only one element return. <br>
getElementsByClassName : select using class name. Can return many element. Return HTMLCollection. <br>
querySelector : use CSS selector. Return first matched element. <br>
querySelectorAll : CSS selector. Return all matched elements. Return NodeList.<br> <br>
<br>
## 2. How do you create and insert a new element into the DOM? <br>
First create element using createElement(). Then add content like textContent or innerText. After that insert into DOM using append() or appendChild() inside parent element.
<br>
## 3. What is Event Bubbling? And how does it work? <br>
Event start from child element, then go parent then body then document. <br>
Example: button inside div. Click button then button event trigger then div then body. <br>
<br>
Event move bottom to up. This process called event bubbling. <br>
<br>
## 4. What is Event Delegation in JavaScript? Why is it useful? <br>
Event listener added on parent element, not every child. When child clicked, event bubble up to parent. Parent detect which child clicked using event.target.
<br><br>
It is useful because:
less event listener
better performance
dynamic element also work

##  5. What is the difference between preventDefault() and stopPropagation() methods? <br>
preventDefault() : stop browser default action. <br>
Example: link click but page not redirect.<br>
<br>
stopPropagation() : stop event bubbling.<br>
Event not go parent element.


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? <br>
getElementById : select element using id. Only one element return.
getElementsByClassName : select using class name. Can return many element. Return HTMLCollection.
querySelector : use CSS selector. Return first matched element.
querySelectorAll : CSS selector. Return all matched elements. Return NodeList.

2. How do you create and insert a new element into the DOM? <br>
First create element using createElement(). Then add content like textContent or innerText. After that insert into DOM using append() or appendChild() inside parent element.

3. What is Event Bubbling? And how does it work? <br>
Event start from child element, then go parent then body then document.
Example: button inside div. Click button then button event trigger then div then body.

Event move bottom to up. This process called event bubbling.

4. What is Event Delegation in JavaScript? Why is it useful? <br>
Event listener added on parent element, not every child. When child clicked, event bubble up to parent. Parent detect which child clicked using event.target.

It is useful because:
less event listener
better performance
dynamic element also work

5. What is the difference between preventDefault() and stopPropagation() methods? <br>
preventDefault() : stop browser default action.
Example: link click but page not redirect.

stopPropagation() : stop event bubbling.
Event not go parent element.


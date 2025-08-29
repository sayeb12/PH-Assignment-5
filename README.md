# **QS - 1:** What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Answer:** The main difference in their selection machanism and in there type of return value.

**getElementById:** It Selects a single element based on its unique id attribute. IDs are intended to be unique within an HTML document and returns a single Element object if found, otherwise null.

**getElementsByClassName(className):** It Selects elements based on their class attribute. Multiple elements can share the same class name and returns a live HTMLCollection of elements.

**querySelector(selector):** It selects the first element that matches a specified CSS selector #id, .class, tag, [attribute], or a combination and eturns a single Element object if found, otherwise null.

**querySelectorAll(selector):** It selects all elements that match a specified CSS selector and returns a static NodeList of elements. 

# **QS - 2:** How do you create and insert a new element into the DOM?

**Answer:** To create an Element into DOM we  use **document.createElement(tagName)**. Then weConfigure the Element using Set properties like textContent, className, id, or attributes using methods like setAttribute() and to insert into the DOM we append the element to a parent node using methods like appendChild(), append(), or insertBefore().

# **QS - 3:** What is Event Bubbling and how does it work?

**Answer:** Event bubbling is the process where a DOM event, such as a click, first triggers on the innermost element that received it (the target element) and then "bubbles up" to its ancestors, or parent elements, all the way to the root of the document.

**How It Works:**

- When an event occurs on an element, the event is first handled by the target element's event listener (if any).

- The event then travels upward through each ancestor element (parent, grandparent, etc.) to the root of the document (document or window).

- Event listeners on these ancestor elements are triggered in order, unless the event is stopped.

# **QS - 4:** What is Event Delegation in JavaScript? Why is it useful?

**Answer:** Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage events triggered by its child elements, rather than adding separate event listeners to each individual child.

**It is useful because**
- It improves Performance and Memory Usage.
- Handles Dynamic Content.
- Reduceds risk of memory leaks.
- It simplifies Code and Maintainability.

# **QS - 5:** What is the difference between preventDefault() and stopPropagation() methods?

**Answer:** The main difference between preventDefault() and stopPropagation() method is:

**preventDefault():**  addresses the default action of an element.

**stopPropagation():**  addresses the propagation of the event through the DOM hierarchy.

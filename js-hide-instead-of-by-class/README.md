Hide elements with JavaScript, not CSS
==========================

Modern JavaScript libraries and frameworks such as React have moved towards a tighter
integration of HTML, CSS, and JavaScript, making things that were previously impossible,
possible.

Before such libraries, hiding elements was usually done through the use of
utility CSS classes with names like `is-hidden`. JavaScript code would add the utility
class to elements, and rely on a CSS rule to actually hide the element in the browser
through properties such as `visibility: hidden;` or `display: none;`.

The main problem here is the disconnect between the JavaScript and the CSS. What if
the utility class is removed or renamed later? What if another higher specificity
rule overrides it? The only way to really know that it all works is by viewing in
the browser.

React and similar libraries solve this problem elegantly by allowing you to just not
render the element at all when it should be hidden, without the need for CSS at all.
This is one instance of a trend towards doing more HTML and CSS with JavaScript
because of the increased power and testability.

Usage:
------------
_All of these commands can also be run with npm. Just replace the word "yarn" with "npm"._

* Install dependencies: `yarn install`
* Run tests: `yarn run test`
* Compile: `yarn run webpack`
* View: `open bad.html` or `open good.html`

_Yes, bad is supposed to be broken in the browser_

Separation of Layout and Presentation
====================

This demo shows an example of separating layout styling and presentation styling. It uses a simple 
container divided into 3 equal sections laid out side-by-side. At a responsive breakpoint, the layout changes
from a single row to a single column.
 
Though both bad.html and good.html look the same in the browser, the styles in good.html are preferred as they
are much more flexible and easy to understand.

To illustrate further, in both examples, try to add another row with 3 equal sections, but with different 
background and text colors, and with no borders. Even though both examples have about the same amount of CSS,
good.html is much easier to extend.


## bad.html

Layout and presentation concerns are **mixed.**
 
* Class names are generic and lack meaning because they have to represent too many different things.
* Hard to tell which properties are responsive and which are not.
* No opportunity for reuse here as all classes are extremely specific.

## good.html

Layout and presentation concerns are **separated.**

* We have introduced new classes to hold the layout-related properties only.
* Easy to see which properties get overridden at various breakpoints, and which are static.
* Classes can be named semantically as their purpose is much clearer.
* Opportunity for reuse of this layout in other places, with or without the borders.
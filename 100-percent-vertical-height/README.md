Cross-browser 100% Vertical height
===========================

This demo shows a solution to the common problem of stretching content to fill
the available vertical space.

The demo contains a header, main, and footer. The desired behavior is for the main
section to fill most of the space of the page, with the footer being pushed all
the way to the bottom. There should not be any scrollbars because the content is
not long enough for that.

## bad.html

`height: 100%` is erroneously given to the main section in an attempt to fill the
vertical space. This causes scrollbars because the main section ends up being too tall.

## good.html

Two techniques are used:

1. `min-height: 100vh`: Use this because Safari and IE don't calculate height
correctly when using `height: 100%`. `vh` is a unit that is "relative to 1% of
the height of the viewport". (The viewport is the browser window.)
2. Use a Flexbox layout. By wrapping the header, main, and footer in a Flexbox
column layout, the main can use `flex-grow` to take up the remaining available space.

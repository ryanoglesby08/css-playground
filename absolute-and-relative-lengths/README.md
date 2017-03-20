Use Relative Lengths
=============================

The lengths in this example are set using mostly various relative units rem, em, and percents, and some things in pixels.

The main strategy being demoed here is the combined use of rem and em for controlling sizing of components. There are 4 
large components on the page with rem sizing as follows:

* header = .875 rem
* main form = 1 rem
* articles = 1.25 rem
* footer = .875 rem

By using ems for font-size within the components, we can easily scale sections accordingly.
 
Additionally, because the root font size is set in rems, we can change the base font size of the browser and the entire web page
will scale accordingly.

Finally, there is a responsive breakpoint that scales down the font-size slightly, again causing the entire web page to
follow suit.
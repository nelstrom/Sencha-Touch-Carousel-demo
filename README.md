This Git repository includes all of the source code used in creating a tutorial about carousels in Sencha Touch.

The tutorial includes several checkpoints:

* [Blank slate][0]
* [A basic carousel][1]
* [Carousel plus vbox layout][2] (with much duplication)
* [Carousel plus vbox layout][3] (DRY, with a custom componenent)
* [Carousel with a nested carousel][4]
* [Carousel with a flipcard][5]

# Using this repository to follow the screencast

First, you'll have to clone this repository:

    git clone git://github.com/nelstrom/Sencha-Touch-Carousel-demo.git

Change into the directory:

    cd Sencha-Touch-Carousel-demo

By default, the git clone command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    git co -b 00_blank_slate origin/00_blank_slate
    git co -b 01_basic_carousel origin/01_basic_carousel
    git co -b 02_carousel_plus_vbox_verbose origin/02_carousel_plus_vbox_verbose
    git co -b 03_carousel_plus_vbox_dry origin/03_carousel_plus_vbox_dry
    git co -b 04_carousel_plus_carousel origin/04_carousel_plus_carousel
    git co -b 05_carousel_plus_toolbar origin/05_carousel_plus_toolbar


## Live demo

You can try out the demo here:

* [http://sencha-carousel.heroku.com/][t]

[t]: http://sencha-carousel.heroku.com/
[0]: https://github.com/nelstrom/Sencha-Touch-Carousel-demo/tree/00_blank_slate
[1]: https://github.com/nelstrom/Sencha-Touch-Carousel-demo/tree/01_basic_carousel
[2]: https://github.com/nelstrom/Sencha-Touch-Carousel-demo/tree/02_carousel_plus_vbox_verbose
[3]: https://github.com/nelstrom/Sencha-Touch-Carousel-demo/tree/03_carousel_plus_vbox_dry
[4]: https://github.com/nelstrom/Sencha-Touch-Carousel-demo/tree/04_carousel_plus_carousel
[5]: https://github.com/nelstrom/Sencha-Touch-Carousel-demo/tree/05_carousel_plus_toolbar

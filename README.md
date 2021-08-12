
Submarine Cable Map
===================

[TeleGeography's](https://www.telegeography.com) submarine cable map is based on our authoritative [Global Bandwidth](https://www.telegeography.com/research-services/global-bandwidth-research-service/) research. The map depicts active and planned submarine cable systems, their landing stations, cable length, ready for service (RFS) date, owners, suppliers, and website. Visit [https://www.submarinecablemap.com](https://www.submarinecablemap.com).

For more background about submarine cables, read our [FAQ](https://www2.telegeography.com/submarine-cable-faqs-frequently-asked-questions).


Installation
------------

Install a LTS version of [Node.js](https://nodejs.org/), [Yarn](https://yarnpkg.com/) for package management, and finally [RedwoodJS](https://redwoodjs.com/).

    $ git clone git://github.com/telegeography/www.submarinecablemap.com.git
    $ cd www.submarinecablemap.com
    $ yarn install
    $ yarn redwood dev

How did you make the Submarine Cable Map?
-------------------------------

[TeleGeography](http://www.telegeography.com) draws the cable routes and plots the landing points with [Adobe Illustrator](https://www.adobe.com/products/illustrator.html). Using [Avenza's MAPublisher](https://www.avenza.com/mapublisher) plug-in, which works with Illustrator, two sets of data are exported as GeoJSON: the cable routes (as MultiLineStrings) and landing points (as Points).

This interactive map Javascript was created using the [RedwoodJS](https://redwoodjs.com/) web application framework.  The Javascript for the map was written in-house at TeleGeography.

How can I download the dataset?
--------------------------------------------------

Below are links to the datasets used for the [Submarine Cable Map](https://www.submarinecablemap.com).

__Submarine Cables:__

* [Submarine Cables GeoJSON](https://raw.githubusercontent.com/telegeography/www.submarinecablemap.com/master/web/public/api/v3/cable/cable-geo.json)
* [Submarine Cable Data](https://github.com/telegeography/www.submarinecablemap.com/tree/master/web/public/api/v3/cable)

__Landing Points:__

* [Landing Point GeoJSON](https://raw.githubusercontent.com/telegeography/www.submarinecablemap.com/master/web/public/api/v3/landing-point/landing-point-geo.json)
* [Landing Point Data](https://github.com/telegeography/www.submarinecablemap.com/tree/master/web/public/api/v3/landing-point)


License
------------------------

Our map is made available under the following [Creative Commons License: Attribution-NonCommercial-ShareAlike 3.0 Unported (CC BY-NC-SA 3.0)](https://creativecommons.org/licenses/by-nc-sa/3.0/).


Questions? Corrections?
------------------------

[cablemap@telegeography.com](mailto:cablemap@telegeography.com)
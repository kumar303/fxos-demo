===================
Firefox OS app demo
===================

This is a simple app that loads a Twitter search.

After going through the instructions on this page you should get a
sense for how a Firefox OS app works.
However, it is just a regular HTML5 website so you can also run it
any web browser.

Local Setup
===========

Clone the repository to get the code on your machine::

    git clone git://github.com/kumar303/fxos-demo.git

For convenience, there is a simple Python script included that will
start a web server on your machine.
Python is probably available on your machine already. Type this to start
up the server::

    cd fxos-demo
    python run_server.py

Open up the site in a web browser:
http://0.0.0.0:9100/

This web server script is important because it serves the manifest.webapp
file with the correct headers.
If you were to host this app on GitHub Pages then the manifest.webapp
would also be served with the correct headers because GitHub supports it.
If you were to host this on a different server you'd probably have to
set the headers yourself.

Install As App
==============

To install it into Firefox OS, first get yourself set up
with the
`Firefox OS simulator <http://people.mozilla.com/~myk/r2d2b2g/>`_
which is an add-on for the Firefox desktop web browser.

Once installed you'll see a dashboard where you can add a URL
to the app manifest (the magic!). Enter this link:
http://0.0.0.0:9100/manifest.webapp

When you next start up the Firefox OS simulator you should
now see Mozfest Tweets on one of the screens (you may have to
swipe a couple pages). Now you can hack it to pieces! Have fun.

Why Not Pacakged?
=================

The instructions here deliberately advise you to install the app
as a hosted web app even though the Simulator lets you upload a
local folder. If this were a packaged app as is it would not work.
The permission model for packaged apps are more complex; you get
more power but with that comes more responsibility. You probably
won't need to make a packaged app so try to start with a hosted one
and see how far you get.

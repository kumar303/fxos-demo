Firefox OS app demo
===================

This is a simple app that shows tweets in the #mozfest hashtag.

After going through the instructions on this page you should get a
sense for how a Firefox OS app works.
However, it is just a regular HTML5 website so you can also run it
any web browser.
Clone the repository to get the code on your machine::

    git clone git://github.com/kumar303/firefoxos-demo.git

For convenience, there is a simple Python script included that will
start a web server on your machine.
Python is probably available on your machine already. Type this to start
up the server::

    cd firefoxos-demo
    python run_server.py

Open up the site in a web browser:
http://localhost:8000/

To install it into Firefox OS, first get yourself set up
with the
`Firefox OS simulator <http://people.mozilla.com/~myk/r2d2b2g/>`_
which is an add-on for the Firefox desktop web browser.

Once installed you'll see a dashboard where you can add a URL
to the app manifest (the magic!). Enter this link:
http://localhost:8000/manifest.webapp

When you next start up the Firefox OS simulator you should
now see Mozfest Tweets on one of the screens (you may have to
swipe a couple pages). Now you can hack it to pieces! Have fun.

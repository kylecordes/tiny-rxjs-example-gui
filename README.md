# Tiny RxJS example GUI

Many features (surprisingly many!) in software packages large and small have this basic shape:

* User enters some kind of search parameters.
* As the user works, the parameters are debounced.
* Query is sent to the server.
* Server responses have variable latency and jitter.
* Client code cancels requests if they become obsolete while still in flight.
* Client code shows the results only of the most recent request (not an older
  one, if they arrive out of old order)

This tiny demo application shows the least-code way I am aware of to do this,
using only RxJS. It's easy to avoid such a library... **if** you are willing to
give up on some of the requirements above, perhaps without realizing it.

The downside is that this code compiles to 20 kB (minified), which while a small
number, seems like a lot for such a simple application.

I've switched to RxJS `8.0.0-alpha.3`, still in development. This reduces the
bundle size slightly; it might improve further as RxJS version 8 work continues.

## Wanted

I'm curious if there is any smaller or simpler library than RxJS, suitable for
small apps of this nature. I’ve looked around at the competing observable
libraries from a few years ago (most, Xstream, etc.) and they all appear to be
no longer actively developed.

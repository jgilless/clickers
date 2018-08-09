# Clicker Game

I recently did an hour long stream on [Twitch.tv](https://www.twitch.tv/jgilless) where I built a clicker game for everyone to try out.  You can check out the code for it at [this commit](https://github.com/jgilless/clickers/commit/0f9b757a90da82e99fa1d11469339cef85f3a7fb).  I had an absolute blast at it, I'm not great at twitch yet, but a few people turned in and were lurkers.  A few of my friends watched the stream and chatted a little bit and asked questions.  It was fun!

It's been a while since I wrote just vanilla javascript, html and css.  It's important to remember at the end of the day that all we're doing is writing that in the long run.  Our build tools turn it all into the same thing.

### The Feature List

* Clicker!
    * Click Power Modifiers
    * Track Total Clicks
    * Track Stored Value of Clicks
* Auto Clicker!
    * Buy Autoclickers
    * Track Number of Autoclickers
    * Calculate Next Autoclicker Price
    * Click Automatically
* Click Power Amplifier!
    * Buy Power
    * Calculate Next Power Price
    * Track Total Click Power
* Milestones!
    * Add Milestones
    * Track When You Get To Milestones
    * Complete Milestones
    * Do Something When You Complete a Milestone

### The Tools

**Python**
I used python to run a local server for ease of use.

```
python -m SimpleHTTPServer 8000
```

That starts up a static file server, serving at http://localhost:8000 from the root of the directory you started it in.  I'll probably be using it for development in the future, unless this project gets way out of hand and I start dragging in things like webpack, in which case I might as well just use the webpack dev server.

**Terminal**
I used the terminal to create the initial setup of the tiny website.  You could do it too with this bash command:

```
mkdir -p clicker/scripts && mkdir -p clicker/styles && cd clicker/ && touch scripts/index.js && touch styles/index.css && touch index.html && cd 
```

That's a fun little script that sets it up.  You'll have to manually setup the default html boilerplate, but that's simple enough.  You can check out an example of it here: [https://www.sitepoint.com/a-basic-html5-template/](https://www.sitepoint.com/a-basic-html5-template/)

Add this line to the head:
```
<link rel="stylesheet" href="styles/index.css">
```

Add this line to the end of the body:
```
<script type="application/javascript" src="scripts/index.js"></script>
```

Just like that, you've hooked up your CSS and Javascript to your html doc.  You serve it from root and you can access your new web project from the http://localhost:8000

**Visual Studio Code**
My current editor of choice.  You can download it [here](https://code.visualstudio.com/) for whatever operating system you desire, I'm currently running Ubuntu at home, but I use it on a Mac at work and it's perfect.  One of the nice things about vscode is that you can open it within the current folder with just a:

```
code .
```

**Chrome's Javascript Console**
Seriously, console.log everything.  It's easy and fast to debug, you can do groupings, you can check types, it's fast, it's fun, it's the console!

### Why?

Why not?  It's not a good program by any means.  It's using a setInterval instead of some kind of better requestAnimationFrame framework probably would.  It has a ton of global variables.  It doesn't have a debounce for click events, so not only can autoclickers go nuts, you can just select the element in the javascript console and trigger a thousand clicks.  

At the end of the day, it was a fun project.  I'll probably revisit this sometime, it is just begging for some kind of pub-sub system and being broken up into more kinds of modules.

### Possible Roadmap

* Click Debouncer!
* Pub Sub Mechanism!
* Styling!
* Webpack!
* React!?
* Events
* Other Currencies
* Unlocks
* Faking Huge Numbers
* Modes (Beat the click mode, go to some kind of management mode)
* Animation
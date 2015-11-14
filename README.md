# Introduction

This is a small cordova application that I made to track my own baby's
liquid intake.

# Technology

This is a hobby project for trying CoffeScript, Stylus and Jade together
with cordova.
It uses AngularMaterial for GUI.

# Development setup

You need Node.js, JDK and Android SDK.

Install the required global goodies:

```
$ npm install -g gulp bower cordova http-server
```

Then install the local dependencies:

```
$ npm install
```

This will first install npm and bower packages.

## Build the web app

```
$ gulp build
```

This should populate the `www` directory and at this point you can serve
it like a standard web page:

```
$ http-server www
```

Then prepare and compile the the cordova app:

```
$ cordova build
```

You can serve the `www` page locally on the given port (default 8000).

```
$ cordova serve [port]
```

See [Cordova's npm page](https://www.npmjs.com/package/cordova)
for more info.
If there are any issues with Cordova
[check this]
(https://www.npmjs.com/package/cordova#known-issues-and-troubleshooting).

# Acknowledgement

The background is designed by
[Freepik](http://www.freepik.com)

You are free to use this image:

- For both personal and commercial projects and to modify it.
- In a website or presentation template or application or as part of your design.

You are not allowed to:

- Sub-license, resell or rent it.
- Include it in any online or offline archive or database.

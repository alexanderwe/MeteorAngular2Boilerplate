# Meteor Boilerplate
A simple Meteor app boilerplate

## Features
- Angular2 and it's dependencies
- Angular2 routing
- Meteor accounts-password
- Bootstrap 4.0.0-alpha2



## Commands executed

```
$ curl https://install.meteor.com/ | sh   #install meteor
$ meteor create metero_boilerplate        # Create app
$ cd meteor_boilerplate

#Add Angular2
$ meteor remove blaze-html-templates
$ meteor add angular2-compilers barbatus:angular2-runtime
$ meteor npm install --save angular2-meteor @angular/platform-browser-dynamic

$ meteor npm install angular2-meteor-polyfills --save
$ meteor npm install

#Add TypeScripts Typings
$ sudo npm install typings -g
$ typings init
$ typings install es6-promise --save
$ typings install dt~es6-shim --global --save
$ typings install registry:env/meteor --global


#Add Angular2 Routing
$ meteor npm install --save @angular/

#Add Meteor accounts-password
$ meteor remove insecure
$ meteor add accounts-password
$ meteor npm install --save angular2-meteor-accounts-ui

#Add Bootstrap4 and SCSS 
$ meteor npm install --save bootstrap@4.0.0-alpha.2
$ meteor add fourseven:scss

```

## package.json 
```
{
  "name": "meteor_boilerplate",
  "private": true,
  "scripts": {
    "start": "meteor run"
  },
  "dependencies": {
    "@angular/common": "^2.0.0-rc.4",
    "@angular/compiler": "^2.0.0-rc.4",
    "@angular/core": "^2.0.0-rc.4",
    "@angular/platform-browser": "^2.0.0-rc.4",
    "@angular/platform-browser-dynamic": "^2.0.0-rc.4",
    "@angular/router": "^3.0.0-beta.2",
    "@angular/router-deprecated": "^2.0.0-rc.1",
    "angular2-meteor": "^0.5.6",
    "angular2-meteor-accounts-ui": "^0.5.0",
    "angular2-meteor-auto-bootstrap": "^0.5.6",
    "angular2-meteor-polyfills": "^0.1.1",
    "angular2-pagination": "0.2.1",
    "bootstrap": "^4.0.0-alpha.2",
    "es6-shim": "^0.35.1",
    "meteor-node-stubs": "^0.2.3",
    "reflect-metadata": "^0.1.2",
    "rxjs": "5.0.0-beta.6",
    "zone.js": "^0.6.12"
  }
}

```



Created with the help of [Angular2 and Meteor Tutorial](https://www.angular-meteor.com/tutorials/socially/angular2/bootstrapping)

[Current Repo of tutorial](https://github.com/Urigo/meteor-angular2.0-socially)



import 'reflect-metadata';
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import template from './app.component.html';

@Component({
  selector: 'app',
  template
})
class Boilerplate { }

bootstrap(Boilerplate);

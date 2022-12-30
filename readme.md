![Built With Stencil By Maxi Transfers](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

<p align="center">
  <a href="https://www.npmjs.com/package/maxill-ui">
    <img src="https://maxillc.com/images/logo.png" alt="Maxi Transfers" width="300" />
  </a>
</p>

<h1 align="center">Maxill UI⚡️</h1>

Maxill UI is a component library based on the <strong>"Web Components"</strong> architecture (more specifically, Custom Elements) that runs in all browsers and in all libraries and frameworks such as: `React`, `Angular`, `Svelte`, `Vue`, etc.

This library with styles from bootstrap <strong>v 5.3</strong>

# Getting Started

Project repository
https://github.com/MarioTavarezMaxill/maxill-ui

## List of internal project commands

<br />

### Run Develop Mode 💻

```bash
npm run start
```

### Storybook 🎨

```bash
npm run storybook
```

### Unit Testing 🧪

```bash
npm run test
```

### Build Component Library 🏗️

```sh
npm run build
```

## Install Library 🚀

```sh
npm install --save maxill-ui@latest
```

# Documentation

## Maxill UI components

https://63adaf79cb9e1198036f2190-mgcokwbftn.chromatic.com/?path=/story/example-introduction--page

## Docs

<img src="https://wac-cdn.atlassian.com/dam/jcr:a22c9f02-b225-4e34-9f1d-e5ac0265e543/confluence_rgb_slate.png" alt="Cofluence" width="100" />
<br />
<br />

https://maxims.atlassian.net/wiki/spaces/H2/pages/118292567/Web+Components+Library+Maxill+UI

# Usage and Installation 🧑🏻‍💻 👩🏻‍💻

To start using the components, please follow these steps:

<h2>🎨  Angular</h2>

1. Open the file `main.ts` and import `defineCustomElements`

```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { defineCustomElements } from 'maxill-ui/loader';

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch(err => err);

defineCustomElements(window);
```

2. Add the respective Types of each component.
   When importing the library, it shows that the Type Sizes is being imported, which contains the types: `"Xs"`, `"Small"` , `"Medium" ` and `"Large"`

```ts
import { Component } from '@angular/core';
import { Sizes } from 'maxill-ui/dist/types/components/atoms/Button/Button.types';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'boilerplate';
	size: keyof typeof Sizes = 'Small';

	onSave() {
		alert('Say Hi 👋');
	}
}
```

3. Add your element to your `.html` component

```html
<button-maxll [size]="size" (click)="onSave()">Click Me</button-maxll>
```

## License

<hr>

No License for the moment

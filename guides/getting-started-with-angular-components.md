---
title: 'getting-started-with-angular-components'
description: 'Learn how to create and use Angular components, the reusable building blocks for your Angular application. This guide covers the basics of component creation, including class, template, and metadata, as well as how to use them in your application.'
keywords:
  - Angular
  - Components
  - Reusable
  - Building Blocks
  - Application
  - Class
  - Template
  - Metadata
  - Guide
published: true
slugs:
  - getting-started-with-angular-components
---

# Getting Started with Angular Components

Angular components are reusable building blocks for creating an Angular application. They consist of a class, a template, and metadata that define the component's behavior and appearance.

Create a new component class using the `@Component` decorator and specifying the template and selector properties:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  template: `<p>Hello, {{ text }}!</p>`,
})
export class ExampleComponent {
  text = 'World';
}
```

Use the component's selector in a template to display the component's template:

```html
<app-example></app-example>
```

or importing and using in other components:

```ts
import { Component } from '@angular/core';
import { ExampleComponent } from 'src/example/example.component';

@Component({
  selector: 'app-other',
  standalone: true,
  template: `
    <app-example></app-example>
    <h3>My other component</h3>
  `,
  imports: [ExampleComponent],
})
export class OtherComponent {}
```

## Generating components

To generate a new component using the Angular CLI, you can run the following command in the terminal:

```shell
ng generate component my-component
```

This command will generate a new component called `my-component` in the `src/app` directory of your application. It will also update the <a href="#">module</a> file to include the new component in the declarations array.

The generated component will consist of four files:

- a component class file my-component.component.ts
- a template file my-component.component.html
- a style file my-component.component.css/scss
- a test file my-component.component.spec.ts

You can also generate a component in a specific path by providing the path after the component name, for example:

```shell
ng generate component path/to/my-component
```

The Angular CLI also provides a shorthand command ng g c to generate component, you can use it like this:

```shell
ng g c my-component
```

In addition to generating components, the Angular CLI can also be used to generate other types of files, such as <a href="#">services</a>, <a href="#">pipes</a> and <a href="#">directives</a>. It also includes a built-in development server, which allows you to run and test your application in a web browser.

 <!-- TODO add prev/next -->

---
title: 'angular-router-101-a-beginners-guide'
description: 'Learn the basics of Angular Routing with this simple guide. Discover how to set up routes, navigate between pages and use the Angular Router in your app.'
keywords:
  - Angular
  - Router
  - Navigation
  - Routing
  - Components
  - Beginner's Guide
  - URL
  - Routes
  - RouterLink
  - Configuration
published: true
slugs:
  - angular-router-101-a-beginners-guide
---

# Routing in Angular

This is how a basic router setup could look like:

```ts
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## NgModules and routing are tightly related

Each module in an Angular application can have its own set of routes and can have its own router.

The main routing module is responsible for the configuration of the routes that are available in the application.

By using NgModules and routing together, you can create a modular and scalable architecture for your Angular application.

It allows you to divide your application into smaller, self-contained units that can be developed, tested, and deployed independently. Some could even call it `micro-frontends` to use a buzz word.

### An example of using lazy loading

Generate a new module and component using the Angular CLI:

```shell
ng generate module my-module --route my-route --lazy
ng generate component my-component --module=my-module
```

This will generate a new module called `my-module` with a route called `my-route` and set up lazy loading for that module. It will also generate a new component called `my-component` and add it to the `my-module` module.

Define the routes for the lazy-loaded module in the `my-module` routing module:

```ts
const routes: Routes = [
  { path: '', component: MyComponent },
  { path: 'other', component: OtherComponent },
];
```

Add the lazy-loaded route to the main routing module:

```ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'my-route',
    loadChildren: () =>
      import('./my-module/my-module.module').then((m) => m.MyModuleModule),
  },
];
```

The `loadChildren` property is used to specify the module that should be loaded when the route is activated. The `import(...)` syntax is a dynamic import statement that returns a promise that will be resolved once the module is loaded.

### Benefits

Smaller application chunks result in:

- Improves scalability
- Better for maintaining
- Easier to test self contained chucks
- Faster compile times
- Great for teamwork

 <!-- TODO add prev/next -->

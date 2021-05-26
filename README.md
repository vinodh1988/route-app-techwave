# Angular 

  * Angular is meant for Developing Single Page Application
  * What you develop in an application is  an Angular Module
  * An Angular Module is a collection of
  1. Components
  2. Services
  3. Directives
  4. Pipes
  5. Routing Configuration
 * Single page here is nothing but collection of Components


 ## Angular App Folder Structure

  |WORKSPACE CONFIG FILES	|   PURPOSE                             |
  |-------------------------|---------------------------------------|
  | .editorconfig	|Configuration for code editors. See EditorConfig.|
|.gitignore |	Specifies intentionally untracked files that Git should ignore.|
|README.md |	Introductory documentation for the root app.|
|angular.json |	CLI configuration defaults for all projects in the workspace, including configuration options for build, serve, and test tools that the CLI uses, such as TSLint, Karma, and Protractor. For details, see Angular Workspace Configuration.|
|package.json |	Configures npm package dependencies that are available to all projects in the workspace. See npm documentation for the specific format and contents of this file.|
|package-lock.json|Provides version information for all packages installed into node_modules by the npm client. See npm documentation for details. If you use the yarn client, this file will be yarn.lock instead.|
|src/ | 	Source files for the root-level application project. |
|node_modules/	| Provides npm packages to the entire workspace. Workspace-wide node_modules dependencies are visible to all projects.|
| tsconfig.json |	The base TypeScript configuration for projects in the workspace. All other configuration files inherit from this base file. For more information, see the Configuration inheritance with extends section of the TypeScript documentation.|
|tslint.json |	Default TSLint configuration for projects in the workspace.|


## Component

   Component is a UI Unit

   It has its own 
 * Template [html]
 * Styling [css]
 * data
 * Events

To create a component , we create a typescript class as follows

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
}

```

in the above class,
 
* @Component is a decorator
* the propery selector represent the element that would be created as custom html tag after a component is built
* templateUrl is used to specify the html associated with the component - only one
* styleUrls is used to specify the css files associated with the component

### To create a component by using CLI

```
ng g c <name of the component>

ex: ng g c box
```
## Directives

### Built-in directives

Directives are classes that add additional behavior to elements in your Angular applications. With Angular's built-in directives, you can manage forms, lists, styles, and what users see.


The different types of Angular directives are as follows:

* `Components—directives` with a template. This type of directive is the most common directive type.

* `Attribute directives` directives that change the appearance or behavior of an element, component, or another directive.

* `Structural directives` directives that change the DOM layout by adding and removing DOM elements


### Structural Directive

  * structural directives generate template, hide template, remove template, unhide template
  * all the structural directives are prefixed with asterisk (*)
  * they can be appliced on any html element and user defined components

  some inbuilt structural directives - ngFor,ngIf,ngSwitch

  ex:

  ```
     <li *ngFor="let x of people">{{x}}</li>
   
   ```

   ### Attribute Directives

    Attribute Directives are further classified into
    1. Input Directives
    2. Output Directives
    3. Input output Directives

#### Input Directives

    * Input directive receives values
    * it can be applied on both html elements and angular components
    * it is enclosed with []
    * it changes the appearance and behaviour of the the component usually

some inbuilt input directives  ngClass, style,ngStyle

  example:

  ```
     <h1 [ngClass]="style1"></h1>
  ```

  #### Output directives

  * Output directives are event emitters
  * they are wrapped within ()
  * Generally they listen to events and call the function in the right when event occurs

 some inbuilt directives: click, mouseover, keyup, change

example
```
<button (click)="fun()">
```

#### Input Output Directives

  * Directive which can be used both as input and output
  * Wrapped within [()]

  Example

  ```
  <input type="text" [(ngModel)]="name">
  ```

for ngModel to work, you need to import FormsModule in app.module.ts as mentioned here

```

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  ```

### Exchanging data between parent and child

### @Input and @Output

#### @Input

This is used to send data from parent to child

In the child class we need create an input element decorated with @Input

example

```
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
@Input() title;
  constructor() { }
  ---
  ---
  --
  ```

and in the parent component html you can pass data like this

```
<app-box [title]="Data"></app-box>
```

here in the above code, the title input attribute is called in parent template

#### @Output

@Output is usually used to send data from child to parent
@Output decorator is used to a variable of type EventEmitter

In the child component, we create an output type in the following way

```
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
theme="blackbox"
@Input() title:any;
@Input('item') things:any; 
@Output('listen') send:EventEmitter<string>=new EventEmitter<string>();
---
---

```

In the above code send is decorated with @Output and send is of type
EventEmitter, it emits string data

and Parent would subscribe to the listen event as mentioned in the @Output

```

<app-box [item]="x" [title]="y" (listen)="fun($event)">

```

In the above parent template , (listen) is the output directive subscribing
to the event and the data emitted would be captured in $event variable

### Angular Routing

In a single-page app, you change what the user sees by showing or hiding portions of the display that correspond to particular components, rather than going out to the server to get a new page. As users perform application tasks, they need to move between the different views that you have defined.

To handle the navigation from one view to the next, you use the Angular Router. The Router enables navigation by interpreting a browser URL as an instruction to change the view.

if the url is changed in the browser the url change is tackled in the browser itself

#### Routing Configuration

There are three fundamental building blocks to creating a route.

1. Import RouterModule and Routes into your routing module.

The Angular CLI performs this step automatically. The CLI also sets up a Routes array for your routes and configures the imports and exports arrays for @NgModule()

2. Define your routes in your Routes array.

Each route in this array is a JavaScript object that contains two properties. The first property, path, defines the URL path for the route. The second property, component, defines the component Angular should use for the corresponding path.
```

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
   {path:"",component: HomeComponent},
   {path:"about",component: AboutComponent},
   {path:"contact",component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

import AppRoutingModule in app.module.ts

```

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  ```



3. Add your routes to your application.

Now that you have defined your routes, you can add them to your application. First, add links to the two components. Assign the anchor tag that you want to add the route to the routerLink attribute. Set the value of the attribute to the component to show when a user clicks on each link. Next, update your component template to include <router-outlet>. This element informs Angular to update the application view with the component for the selected route

in Menubar component, use routerLink directive to configure the route

```

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <!-- Brand/logo -->
    <a class="navbar-brand" routerLink="/">ABC Limited</a>
    
    <!-- Links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" routerLink="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/contact">Contact</a>
      </li>
    </ul>
  </nav>

  ```

  in the app component , use router-outlet

  ```
  <app-menubar></app-menubar>
<router-outlet></router-outlet>
```

#### Angular Services and Dependency Injection

Service is a broad category encompassing any value, function, or feature that an app needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.

Angular distinguishes components from services to increase modularity and reusability. By separating a component's view-related functionality from other kinds of processing, you can make your component classes lean and efficient.

Ideally, a component's job is to enable the user experience and nothing more. A component should present properties and methods for data binding, in order to mediate between the view (rendered by the template) and the application logic (which often includes some notion of a model).

A component can delegate certain tasks to services, such as fetching data from the server, validating user input, or logging directly to the console. By defining such processing tasks in an injectable service class, you make those tasks available to any component. You can also make your app more adaptable by injecting different providers of the same kind of service, as appropriate in different circumstances.

* A Component should not usually fetch data from server it should be done by service

Angular doesn't enforce these principles. Angular does help you follow these principles by making it easy to factor your application logic into services and make those services available to components through dependency injection

### creating a service by using ng

to create a service

```
ng g s services/data
```

it would create a service as follows

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}

```

#### Dependency Injection

You can inject a service to your component by using the following syntax

```
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  constructor(public ds:DataService) {
    
   }

```

By default angular create a singleton object for the service, in the above
code in the constructor we have performed dependency injection and the
access specifier applied the ds variable would make it an instance member




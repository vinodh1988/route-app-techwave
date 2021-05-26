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


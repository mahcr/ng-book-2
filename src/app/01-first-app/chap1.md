# Chapter 1 / My First Ng2 App

Angular 2 depend on these libraries:
- ES6-shim - Polyfill to support ES6 on old browsers
- zone.js - Use for the detecting changes
- reflect-metadata - Polyfill that let typescript use decorators
- SystemJS - it's a module loader


### Making a Component

The idea of components is teach the browser new tags with new functionality (as video, audio tags do)

Example of a basic component

```
import { Component } from '@angular/core';

@Component({
    selector: 'hello-word',
    template: '<div> Hola Amigo </div>'
})
export class HelloWord { }
```

Link: [hello-word.component.ts](./hello-word.component.ts)


### Booting our app

@NgModule annotation
It has three keys: declartions, imports and bootstrap

* Declarations: define the components in this module
* Imports: Describe which dependecies this module has
* Bootstrap: Tell Ng the module is used to bootstrap

```
@NgModule({
  declarations: [ HelloWorld ],
  imports: [ BrowserModule ],
  bootstrap: [ HelloWorld ],
})
class HelloWorldAppModule {}

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);
```

As you know angular can run in different platforms:
* dynamically - when we open the page in the browser
* AoT 


### Adding data

ES6 / Typescript features
1. properties - this syntaxis let us declare properties with types ```name:string``` 
2. constructor - this function is called when the class is instanced
3. template variable - ```{{varibleName}}``` this way we can interpolate variables

### Adding interaction

(click) - this attribute let us execute a expression when the element is clicked

```
<input name="title" #newtitle>
```
#newTitle syntax is called a resolve. This makes a variable within the view

### Adding the Article Component

We have three parts to defining this new component:
1. Component properties by annotating the class with @Component
2. Template option to right the view
3. Define the ArticleComponent class

In order to include this articleComponent to reddit-app component we need to import it and added as a directive:

```
import { ArticleComponent } ....

@Component({
  selector: 'reddit',
  directives: [ ArticleComponent ]
})
```

### Creating an Article class

A good practice when writting angular code is to try to isolate the data structure you're using from the component code.
So always try to have skinny controllers and fat models. In the articleComponent most all the logic has been move into
the article.model [link](./article/article.model.ts)

The point of making components is not only encapsulation, but also reusability. So try to make them independent


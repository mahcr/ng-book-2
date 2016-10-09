# Chapter 3 / Built in Components

### NgIf
 ```
 <div *ngIf="a > b"></div> 
 ```

### NgSwitch
```
<div class="container" [ngSwitch]="myVar">
  <div *ngSwitchCase="'A'">Var is A</div>
  <div *ngSwitchCase="'B'">Var is B</div>
  <div *ngSwitchDefault>Var is something else</div>
</div>
```

### NgStyle
```
<div class="ui input">
  <input type="text" name="color" value="{{color}}" #colorinput>
</div>
<div class="ui input">
  <input type="text" name="fontSize" value="{{fontSize}}" #fontinput>
</div>

<div>
  <span [ngStyle]="{color: 'red'}" [style.font-size.px]="fontSize">
  red text
  </span>
</div>
```
 
### NgClass
```
<div [ngClass]="{bordered: isBordered}">
  Using object literal. Border {{ isBordered ? "ON" : "OFF" }}
</div>
```

### NgFor
```
this.cities = ['Miami', 'Sao Paulo', 'New York'];

<div class="ui list" *ngFor="let c of cities">
  <div class="item">{{ c }}</div>
</div>
```

### NgNonBindable
```
<div class='ngNonBindableDemo'>
  <span class="bordered">{{ content }}</span>
  <span class="pre" ngNonBindable>
  &larr; This is what {{ content }} rendered
  </span>
</div>
```

## Project Link

Link: `https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html`

# Solutions

## Project 1:
### Javascript Code
```javascript
let buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
// console.log(buttons)
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target);
    let color = e.target.id;
    if (color) {
      body.style.backgroundColor = color;
    }
  });
});
```
### HTML Code
```html
    <span class="button" id="purple"></span>
```
### CSS Code
```css
    #purple{
  background-color: purple;
}
```

## Project 2:

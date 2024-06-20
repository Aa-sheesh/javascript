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
### JavaScript Code:
```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```

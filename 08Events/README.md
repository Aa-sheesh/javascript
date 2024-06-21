# Async JS Fundamentals

## JavaScript:

_Default javascript has these following features embedded in it:_

- **Synchronous**
- **Single threaded**

## Execution Context:

_Execution one line of code at a time (Each operation waits for the lost one to complete before completion) ._
| **Blocking Code** | **Non Blocking Code** |
| :------------- | :----------------- |
| Blocks the flow of program. | Does not block execution. |
| Reads file in sync. | Reads file in async. |


<img  src="./public/image.png" width="80%">

## Project Link

Link: `https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html`

### Project 5:
#### JavaScript Code:
```javascript
const insert = document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
    <div class="color">
      <table>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key===' '?'Space':e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
        
      </table>
    </div>
  `
})
```

### Project 6:
#### JavaScript Code:
```javascript
//generating random color

const randomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
const changeBgColor = () => {
  document.body.style.backgroundColor = randomColor();
};
let intervalId;
const startChangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};
const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};
let body = document.querySelector('body');
let start = document.querySelector('#start');
start.addEventListener('click', startChangingColor);
let stop = document.querySelector('#stop');
stop.addEventListener('click', stopChangingColor);
// console.log(randomColor());

```

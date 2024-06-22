## APIs
### XMLHttpRequest API:
<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>State</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>0</code></td>
      <td><code>UNSENT</code></td>
      <td>Client has been created. <code>open()</code> not called yet.</td>
    </tr>
    <tr>
      <td><code>1</code></td>
      <td><code>OPENED</code></td>
      <td><code>open()</code> has been called.</td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>HEADERS_RECEIVED</code></td>
      <td><code>send()</code> has been called, and headers and status are available.</td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td><code>LOADING</code></td>
      <td>Downloading; <code>responseText</code> holds partial data.</td>
    </tr>
    <tr>
      <td><code>4</code></td>
      <td><code>DONE</code></td>
      <td>The operation is complete.</td>
    </tr>
  </tbody>
</table>

### V8 Engine
*** Is console.log part of javascript? ***<br/>
**Ans:**<br/> 
- No, when a website is loaded v8 api is loaded into it and console.log comes from the api and many other functionalities.
- Javascript is a wrapper that is built on C++. <br/>
Link to v8: `https://v8.dev/`
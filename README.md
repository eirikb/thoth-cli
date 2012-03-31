Different clients for http://thoth.io

JavaScript
---

```HTML
<script src="https://raw.github.com/eirikb/thoth-cli/master/javascript/thoth.jquery.min.js"></script>
```

```JavaScript
thoth.create('Hello, world', function(error, id) {
  console.log('id:', id);

  thoth.read(id, function(error, data) {
    console.log(data);
  });
});
```

Node.js
---

```Bash
npm install thoth
```

```JavaScript
var thoth = require('thoth');

thoth.create('Hello, world', function(error, id) {
  console.log('id:', id);

  thoth.read(id, function(error, data) {
    console.log('data', data);
  });
});
```

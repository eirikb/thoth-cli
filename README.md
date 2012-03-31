Different cleints for http://thoth.io

JavaScript
---

```HTML
<script src="https://raw.github.com/eirikb/thoth-cli/javascript/thoth.jquery.min.js"></script>
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

thoth.create('Hello, world', function(err, id) {
  console.log('id:', id);

  thoth.read(id, function(err, data) {
    console.log('data', data);
  });
});
```
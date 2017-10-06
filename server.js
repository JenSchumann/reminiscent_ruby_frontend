const express = require('express');
const app = express();
const PORT = process.env.PORT || 4070;

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('reminiscent ruby frontend is running on port: ', 4070);
});

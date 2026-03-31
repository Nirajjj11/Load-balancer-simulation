const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

let count = 0
app.get('/', (req, res) => {
      count++
      console.log(`${count} Handled by ${PORT} at ${new Date()}`);
      res.send(`Response from Server ${PORT}`);
});

app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
});
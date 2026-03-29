const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
      console.log(`Handled by ${PORT} at ${new Date()}`);
      res.send(`Response from Server ${PORT}`);
});

app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
});
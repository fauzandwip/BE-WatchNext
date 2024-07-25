const express = require('express');

const app = express()
const PORT = process.env.PORT || 3000

app.get('/test', (req, res) => res.send('WatchNext App'))

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
})
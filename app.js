const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes'));

// error handler middleware
app.use(require('./middlewares/errorHandler.js'));

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

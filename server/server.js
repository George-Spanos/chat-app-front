const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const publicweb = process.env.PUBLICWEB || './';
const devPath = 'dist';

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicweb));

app.set('view engine', 'html');
console.log(`serving ${publicweb}`);
app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: publicweb });
});

const port = process.env.PORT || '3000';
app.listen(port, () => console.log(`API running on localhost:${port}`));
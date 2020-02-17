const express = require('express');

const publicweb = process.env.PUBLICWEB || './';
const devPath = 'dist'
const app = express();
app.set('view engine', 'html');
app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);
app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: publicweb });
});

const port = process.env.SERVER_PORT || '3000';
app.listen(port, () => console.log(`API running on localhost:${port}`));
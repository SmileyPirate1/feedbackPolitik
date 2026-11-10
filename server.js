require('dotenv').config();
const app = require('./folketinget_app/app.js');
const PORT = process.env.PORTM
//Server.js runs the server.

app.listen(PORT || 3000, () => {
    console.log(`Serveren kører på http://localhost:${PORT}`);
});
const app = require('./folketinget_app/app.js');
const port = 3000

//Server.js runs the server.

app.listen(port, () => {
    console.log(`Serveren kører på http://localhost:${port}`);
});
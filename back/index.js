const app = require('./src/server');

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
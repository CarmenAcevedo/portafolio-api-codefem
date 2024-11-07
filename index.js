const express = require('express');
// const PortafolioCarmen = require('./portafolio-mock');
const portafoliosMock = require('./portafolio-mock');

const app = express();

// Allow JSON request body
app.use(express.json());


// Endpoints: peticion donde definimos un metodo, url, headers, etc
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

app.get('/test', (req, res) =>{
    res.status(200).json( {message: 'Test'})
} )

app.get('/portafolios', (req, res) => {
    if (portafoliosMock.length === 0) {
        return res.status(204).json(portafoliosMock);
    }
    return res.status(200).json(portafoliosMock);
});

app.post('/portafolios', (req, res) => {
    const data = req.body;

    // Calcular Id
    const lastIndex = portafoliosMock.length -1;
    const lastPortafolio = portafoliosMock[lastIndex];
    const newId = lastPortafolio.id + 1;

    data.id = newId;
    data.status = 'draft';
    data.active = 'true';
    data.noVisits = 0;
    data.createdAt = new Date();
    data.updatedAt = new Date();
                                                                                                                                                                                 
    // TODO: Implement validations
    portafoliosMock.push(data);
    return res.status(201).json(data);
});

app.put('/portafolios/:id', (req, res) => {
    const data = req.body;
    // const id = req.params.id;
    const id = Number(req.params.id);  // Convertimos id a número

    const portafolioIndex = portafoliosMock.findIndex((portafolio) => {
        return portafolio.id === id;
    });

    if (portafolioIndex === -1) {
        return res.status(404).json({
            message: 'El portafolio no existe, ID:', id
        });
    }

    // TODO: Implement validations

    const portafolio = portafoliosMock[portafolioIndex];
    // Mutable
    // Object.assign(portafolio, data);
    // Inmutable
    const updatedPortafolio = { ...portafolio, ...data };

    updatedPortafolio.updatedAt = new Date();
    portafoliosMock.splice(portafolioIndex, 1, updatedPortafolio);

    return res.status(200).json(updatedPortafolio);

});

app.delete('/portafolios/:id', (req, res) => {
    const id = Number(req.params.id);  // Convertimos id a número

    const portafolioIndex = portafoliosMock.findIndex((portafolio) => {
        return portafolio.id === id;
    });

    if (portafolioIndex === -1) {
        return res.status(404).json({
            message: 'El portafolio no existe, ID:', id
        });
    }

    portafoliosMock.splice(portafolioIndex, 1);

    return res.status(200).json({
        message: `El portafolio ${id} ha sido eliminado `
    });

});

app.listen(8085, () => {
    // callback: pasar una función a otra función
    console.log('Server running in port 8085');
     
});
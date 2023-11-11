const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');


//aqui se crean las rutas pero hay que mandar a llamarlas

module.exports = function(){

    router.get('/', (req,res) => {

        res.send('inicio')
    });
    
    router.get('/nosotros', (req,res) => {
      
        res.send('nosotros')
    } );

    //agregar nuevo contendio por post

    router.post('/clientes',clienteController.nuevoCliente);

    //mostrar todos los clientes

    router.get('/clientes', clienteController.mostrarClientes);

    //muestra un cliente por id

    router.get('/clientes/:idCliente', clienteController.mostrarCliente );
    
    //acutalizar clientes

    router.put('/clientes/:idCliente', clienteController.actualizarCliente);

   //Eliminar cliente por id

   router.delete('/clientes/:idCliente', clienteController.eliminarCliente);



    return router
}


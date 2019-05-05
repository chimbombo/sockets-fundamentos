var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

//enviar mensaje
socket.emit('enviarMensaje', {
    user: 'Antonio',
    message: 'Hello World'
}, function(resp) {
    console.log('Respuesta del servidor', resp);
})

socket.on('enviarMensaje', function(message) {
    console.log(message);
})
process.env.PORT = 8000;
process.env.NODE_PUBLIC_PATH = '../';

require('mahrio').runServer( process.env, __dirname)
  .then( function( server) {
    var io = require('socket.io').listen( server.listener );

    io.on('connection', function(socket){
      console.log('Connection');
    });

    server.route({
      path: '/assets/{any*}',
      method: 'GET',
      handler: {
        directory: {
          path: 'dist/web-app'
        }
      }
    });
    server.route({
      method: 'post',
      path: '/led',
      handler: function(req, rep) {
        io.sockets.emit('event:led', req.payload.led || false);
        rep({});
      }
    });
    server.route({
      method: 'GET',
      path: '/{any*}',
      handler: function(req, rep) {
        rep.file( 'dist/web-app/index.html');
      }
    });
  });

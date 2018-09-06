require('mahrio').runServer( process.env, __dirname)
  .then( function( server) {
    server.route({
      method: 'GET',
      path: '/',
      handler: function(req, rep) {
        rep('Hello World');
      }
    })
  });

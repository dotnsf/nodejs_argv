//. app.js
var isostring = ( new Date() ).toISOString();
var argvs = process.argv.join( ' ' );
console.log( isostring + ' : ' + argvs );


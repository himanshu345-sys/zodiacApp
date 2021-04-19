const express = require('express');

const app = express();

// connect client side with server side
app.use(express.static(__dirname + '/client'));

// setup enviroment variable
const port = process.env.PORT || 3000;


app.listen(port, () => {
	console.log('Server is running on port ' + port);
});

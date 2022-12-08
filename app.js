//imports

const express = require("express");
const app = express();
const port = 3000;


//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));


//set views

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

//listening on port 3000
app.listen(port, () =>{
    console.info(`Listening on port ${port}`);
});
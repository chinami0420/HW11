const express = require('express'),
const app = express();
var PORT = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))



app.listen(PORT, console.log(`Listening on PORT: ${PORT}`))

//const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

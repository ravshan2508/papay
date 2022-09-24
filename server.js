const dotenv = require("dotenv");
dotenv.config();


const http = require('http');

const mongooose = require("mongoose");


const connectionString = process.env.MONGO_URL;

mongooose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, goose) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection sucseed");
        //console.log(goose);
        module.exports = goose;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = process.env.PORT || 3003;
        server.listen(PORT, function () {
            console.log(`http://localhost:3003 This server is runnig sucsessfully on port: ${PORT}`);
    });
    }
}

);


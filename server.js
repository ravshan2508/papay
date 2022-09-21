const dotenv = require("dotenv");
dotenv.config();


const http = require('http');

const mongodb = require("mongodb");

let db;
const connectionString = process.env.MONGO_URL;

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection sucseed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = process.env.PORT || 3003;
        server.listen(PORT, function () {
            console.log(`http://localhost:3003 This server is runnig sucsessfully on port: ${PORT}`);
    });
    }
}

);


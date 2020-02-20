"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const bodyParser = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("../config");
// Express app initialization
const tls = require('tls');
const fs = require('fs');
const app = express_1.default();
// Template configuration
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", "public");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors_1.default());
// Static files configuration
app.use("/assets", express_1.default.static(path_1.default.join(__dirname, "frontend")));
// Controllers
app.get("/", (req, res) => {
    res.render("index");
});
const getDogs = (request, response) => {
    config_1.pool.query(`SELECT * FROM dogs OFFSET ${(request.query['page'] - 1) * request.query['skip']} LIMIT ${request.query['skip']}`, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
app.get("/api/dogs", getDogs);
const getDistricts = (request, response) => {
    config_1.pool.query(`SELECT * FROM districts`, (error, results) => {
        if (error) {
            throw error;
        }
        console.log(results.rows, request, response);
        response.status(200).json(results.rows);
    });
};
app.get("/api/district", getDistricts);
const getCities = (request, response) => {
    config_1.pool.query(`SELECT * FROM cities WHERE district_id = ${request.query['districtId']}`, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
app.get("/api/city", getCities);
const getStreets = (request, response) => {
    config_1.pool.query(`SELECT * FROM streets WHERE city_id = ${request.query['cityId']}`, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
app.get("/api/street", getStreets);
const addDog = (request, response) => {
    const { birthdate, price, breedId } = request.body;
    config_1.pool.query("INSERT INTO dogs (birthdate, price, breedId) VALUES ($1, $2, $3)", [birthdate, price, breedId], error => {
        if (error) {
            throw error;
        }
        response.status(201).json({ status: "success", message: "Dog added." });
    });
};
const getCountOfDogs = (request, response) => {
    config_1.pool.query(`SELECT Count(*) FROM dogs `, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows[0].count);
    });
};
app.get("/api/dogs/count", getCountOfDogs);
// Start function
exports.start = (port) => {
    const server = http_1.default.createServer(app);
    return new Promise((resolve, reject) => {
        server.listen(port, resolve);
    });
};
//# sourceMappingURL=web.js.map
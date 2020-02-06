import express, { request } from "express";
import http from "http";
import path from "path";
import * as bodyParser from "body-parser";
import cors from "cors";
import {pool} from "../config";

// Express app initialization
const app = express();

// Template configuration
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", "public");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Static files configuration
app.use("/assets", express.static(path.join(__dirname, "frontend")));

// Controllers
app.get("/", (req, res) => {
    res.render("index");
});

const getDogs = (request: any, response: any) => {
    pool.query(`SELECT * FROM dogs OFFSET ${(request.query['page'] - 1)*request.query['skip']} LIMIT ${request.query['skip']}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
};

app.get("/api/dogs", getDogs);

const getDistricts = (request: any, response: any) => {
    pool.query(`SELECT * FROM districts`, (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows, request, response);
        response.status(200).json(results.rows);
    })
};

app.get("/api/district", getDistricts);

const getCities = (request: any, response: any) => {
    pool.query(`SELECT * FROM cities WHERE district_id = ${request.query['districtId']}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
};

app.get("/api/city", getCities);

const getStreets = (request: any, response: any) => {
    pool.query(`SELECT * FROM streets WHERE city_id = ${request.query['cityId']}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
};

app.get("/api/street", getStreets);

const addDog = (request: any, response: any) => {
    const { birthdate, price, breedId } = request.body;
    pool.query("INSERT INTO dogs (birthdate, price, breedId) VALUES ($1, $2, $3)", [birthdate, price, breedId], error => {
        if (error) {
            throw error
        }
        response.status(201).json({ status: "success", message: "Dog added." })
    })
};

const getCountOfDogs = (request: any, response: any) => {
    pool.query(`SELECT Count(*) FROM dogs `, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows[0].count);
    })
};

app.get("/api/dogs/count", getCountOfDogs);

// Start function
export const start = (port: number): Promise<void> => {
    const server = http.createServer(app);

    return new Promise<void>((resolve, reject) => {
        server.listen(port, resolve);
    });
};

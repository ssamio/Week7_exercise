"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
let data = [];
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.get("/hello", function (req, res) {
    res.send("Hello world");
});
app.post("/vehicle/add", function (req, res) {
    try {
        let target = {
            "model": req.body.model,
            "color": req.body.color,
            "year": req.body.year,
            "power": req.body.power,
            "bodyType": req.body.bodyType,
            "wheelCount": req.body.wheelCount,
            "wingspan": req.body.wingspan,
            "draft": req.body.draft
        };
        data.push(target);
        res.status(201).send("Vehicle added");
    }
    catch (err) {
        console.log(err);
        res.status(403).send("Vehicle not added");
    }
});
app.get("/vehicle/search/:model", function (req, res) {
    const target = req.params.model;
    try {
        for (let i = 0; i < data.length; i++) {
            if (data[i].model == target) {
                let result = data[i];
                return res.send(result);
            }
        }
    }
    catch (err) {
        console.log(err);
    }
    res.status(404).send("Vehicle not found");
});
app.listen(port, () => {
    console.log("Server running!");
});

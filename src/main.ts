import express, {Express, Request, Response} from "express";
import path from "path";
import { Vehicle, Car, Plane, Boat } from "../models/Vehicle.type";

const app: Express = express();
const port: number = 5000;
app.use(express.json());
let data: (Vehicle|Car|Plane|Boat)[]  = [];

app.use(express.static(path.join(__dirname, "../public")));

app.get("/hello", function(req, res){
    res.send("Hello world");
});

app.post("/vehicle/add", function(req, res) {
   try{
    let target: (Vehicle|Car|Boat|Plane) = {
        "model": req.body.model,
        "color": req.body.color,
        "year": req.body.year,
        "power": req.body.power,
        "bodyType": req.body.bodyType,
        "wheelCount": req.body.wheelCount,
        "wingSpan": req.body.wingSpan,
        "draft": req.body.draft
    };
    data.push(target);
    res.status(201).send("Vehicle added");
   }
   catch(err){
    console.log(err);
    res.status(403).send("Vehicle not added");
   } 
});

app.get("/vehicle/search/:model", function(req, res){
    const target = req.params.model;
    try{
        for(let i: number = 0; i < data.length; i++){
            if(data[i].model == target){
                let result: Vehicle = data[i];
                return res.send(result);
            }
        }    
    }
    catch(err){
        console.log(err);    
    }
    res.status(404).send("Vehicle not found");
});

app.listen(5000, () =>{
    console.log("Server running!")!
});
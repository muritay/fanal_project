import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo"
const app = express();
dotenv.config()
app.use(express.json());
secret:process.env.SESSION_SECRET
reserve: false,
saveUninitialized; false,
store; MongoStore.create({
    mongoUrl:process.env.MONGO_URI,
    autoRemove:'nature',
    collectionName: 'session',
    ttl: 60 * 60
}),
cookie; {
    maxAge: 1000 * 60 * 60
}
import signUp from "./routers/signup_route.js";
import login from ".routes/longin_route.js"
app.get("/", (reg,res) =>{
    res.send("welcome to my api");
})
app.use(signUp)
app.use(login)

 mongoose.connect('${process.env.MONGO_URI}', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB connected successfully!");
})
.catch((error) =>{
    console.error("MongoDB connection failed:", error.message);
});

app.listen(5000,() => console.log("App listening on port 5000"))
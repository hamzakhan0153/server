import express from "express";
const app = express()
const port = process.env.port || 3000;


app.get("/", (req, res) => {
    res.send("I am a hello world server")
})
app.get("/abduzab", (req, res) => {
    res.send("here is your profile")
})
app.listen(port, () => {
    console.log("serever is running")
})

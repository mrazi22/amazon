const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Listening on port 3000");
})

app.get("/", (req, res) => {
    res.json({
        message: "Hello World 3000😒😒"
    })
})
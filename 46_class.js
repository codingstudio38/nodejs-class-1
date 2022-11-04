// Node JS in Hindi #46 Events and Event Emitter
const express = require('express');
const EventEmitter = require('events');
const app = express();

const event = new EventEmitter();
var count = 0;
event.on("countAPI", () => {
    count++;
    console.log('event call', count);
})

app.get("/", async (req, resp) => {
    resp.send("home");
    event.emit("countAPI");
});
app.get("/search", async (req, resp) => {
    resp.send("search");
});
app.get("/update", async (req, resp) => {
    resp.send("update");
});

app.listen(5000)
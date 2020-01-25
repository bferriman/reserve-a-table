const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app data

const tables = [];

const waitlist = [];

//routes

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", (req, res) => {
  return res.json(tables);
});

app.get("/api/waitlist", (req, res) => {
  return res.json(waitlist);
});

app.get("/tables#", (req, res) => {
  //clear tables and wait list
});

app.post("/api/tables", (req, res) => {
  let newReservation = req.body;
  if(tables.length < 5) {
    tables.push(newReservation);
    res.send("table booked");
  }
  else {
    waitlist.push(newReservation);
    res.send("waitlisted");
  }
});

//start listening
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
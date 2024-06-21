const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

let con = mysql.createConnection({
	host: "sql12.freesqldatabase.com",
	user: "sql12715100",
	password: "xAx7SytS4A",
	database: "sql12715100"
});

app.post("/save", (req,res) => {
	let data = [req.body.name, req.body.company, req.body.pkg];
	let sql = "insert into student values(?,?,?)";
	con.query(sql,data,(err,result) => {
		if(err)			res.send(err);
		else			res.send(result);	
	});
});

app.listen(9000, () => {console.log("Server listening on port 9000");})
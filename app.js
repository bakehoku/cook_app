const express = require("express");
const app = express();

// ejs を利用する
app.set("view engine", "ejs");

// localhost:8080/static で /publicディレクトリ配下の静的ファイルを利用できるようにする
app.use("/static", express.static(__dirname + "/public"));

// ルーティング
app.use("/", require("./routes/index.js"));

// ポート：8080
app.listen(8080);
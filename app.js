const express = require('express');
const app = express();

// CSSや画像ファイルを置くフォルダを指定するコード
app.use(express.static("public"));
          
// トップ画面を表示するルーティングを作成してください            
app.get('/', (req, res) => {            
  res.render('top.ejs');            
});

app.get("/index", (req, res) => {
  res.render("index.ejs");
});

app.listen(5000);
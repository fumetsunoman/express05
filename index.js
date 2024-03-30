const  express =  require("express");
const {singers} = require("./singers.json");
// import data1 from "./singers.json" assert{type:"json"}; //匯入json檔案需要宣告 assert 這是json格式
// console.log(data1) ;//解構賦值
// const {singers} = data1;

console.log(singers);

const app = express();

app.get("/",(req,res)=>{
res.send("網站首頁")
})

// /singer/:id.html
app.get("/singer/:id.html",(req,res) => { //.html 其實不是html檔案
  // res.send(`${req.params.id}`)
  const {id} = req.params;
  let result = singers.find(singer => {
    if(singer.id === parseInt(id)){  //:id 傳送的值一定是字串所以要轉成數字
      return true;
    }
  }
  )
    if(!result){
      res.status(404).send("<h1>找不到歌手</h1>")
    return false;
  }
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${result.singer_name}</title>
  </head>
  <body>
    <h1>${result.singer_html}</h1>
    <img src="${result.singer_name}" alt="">
    
  </body>
  </html>`); //將json檔案回傳到頁面上

});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
})
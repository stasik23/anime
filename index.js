import express from "express";
import path from "path"

const dirPath = path.join(__dirname, "data");

console.log(dirPath);

const app = express();
const router = express.Router();

const server = http.createServer((req,res) =>{

})

function getAllJokes(req,res){
  let dir = fs.readdirSync(dirPath);
  let allJokes = []
  for(let i = 1;i < dir.length; i++){
    let file = fs.readdirSync(path.join(dirPath, i + '.json'))
    let jokeJson= Buffer.from(file).toString();
    let joker = JSON.parse(jokeJson);
    joker.id = i;
    allJokes.push(joker)
  }
}

app.get('/', (req, res) => {
    res.sendFile(path.join(dirPath, 'index.html'));
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

export default router
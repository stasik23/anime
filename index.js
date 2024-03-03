import express from "express";
import path from "path"
const dirPath = path.join(__dirname, '/index.html');

console.log(dirPath);

const app = express();
const router = express.Router();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'SkibidiServer', 'index.html'));
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

export default router

// import express from "express";
// import { fileURLToPath } from 'url';
// import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname();

// const app = express();

// app.use(express.static(path.join(__dirname, 'SkibidiServer')));

// app.get('/', (req, res) => {
//     const indexPath = path.join(__dirname, 'SkibidiServer', 'index.html');
//     res.sendFile(indexPath);
// });

// app.use('/api', (req, res) => {
//     res.send('API is working!');
// });

// const port = 3000;

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
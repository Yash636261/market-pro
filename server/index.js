const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const port = 5000;
const fs = require("fs");
const imageModel = require("./models");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://Jazzy49:MyNodeApp@nodeprojects.tsxlcqi.mongodb.net/dummyjjk?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log("it has an error", err));

  const adjectives = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'black', 'white', 'gray'];
  const nouns = ['apple', 'banana', 'car', 'dog', 'elephant', 'flower', 'guitar', 'house', 'ice cream', 'jacket'];
  
  function generateRandomName() {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adjective}-${noun}`;
  }

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/", upload.single("testImage"), (req, res) => {
  const saveImage =  imageModel({
    name: generateRandomName(),
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
    res.send('image is saved')
});


app.get('/',async (req,res)=>{
  const allData = await imageModel.find()
  res.json(allData)
})

const img = (data) => {
  const reg = /^data:image\/([\w+]+);base64,([\s\S]+)/;
  const match = data.match(reg);
  const baseType = {
    jpeg: 'jpg'
  };

  baseType['svg+xml'] = 'svg'

  if (!match) {
    throw new Error('image base64 data error');
  }

  const extname = baseType[match[1]] ? baseType[match[1]] : match[1];

  return {
    extname: '.' + extname,
    base64: match[2]
  };
}

const imgSync = async (data, destpath, name) => {
  const result = img(data);
  const filepath = path.join(destpath, name + result.extname);

  await fs.writeFileSync(filepath, result.base64, { encoding: 'base64' });
  return filepath;
};

// Route Controller for uploading base64 image file
app.post('/base64', async (req, res) => {
  try {
    const { base64Image, fileName } = req.body;
    await imgSync(base64Image, './uploads', fileName)

    res.status(200).send({ message: 'Files uploaded successfully.' });
  } catch (err) {
    res.status(400).send({ message: 'Error uploading file.' });
  }
});



app.listen(port, () => {
  console.log("server running successfully");
});

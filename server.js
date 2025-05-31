import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import qr from "qr-image";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/generate", (req, res) => {
  const url = req.body.url;

  if (!url) return res.status(400).send("URL is required");

  const qr_png = qr.image(url, { type: "png" });
  res.setHeader("Content-Type", "image/png");
  qr_png.pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

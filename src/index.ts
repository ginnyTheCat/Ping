import axios from "axios";
import express from "express";

const PORT = process.env.PORT || 80;

const target = process.env.TARGET!;
const key = process.env.KEY!;

async function ping(token: string, id: string) {
  const res = await axios.post(
    `https://api2.thehousepartyapp.com/users/${id}/greet`,
    undefined,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

const app = express();

app.use(express.static("static"));

app.post("/ping", async (req, res) => {
  await ping(key, target);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

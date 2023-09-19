import express from "express";
import cors from "cors";
import TeacherRoute from "./routes/TeacherRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(TeacherRoute);

app.listen(5000, () => console.log("server running.."));

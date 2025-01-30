import express from "express";
import cors from "cors";
import petShopRoutes from "./routes/petshop.routes";
import petRoutes from "./routes/pet.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/petshops", petShopRoutes);
app.use("/pets", petRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));

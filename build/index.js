import express from "express";
import { userRoutes } from "./routes/userRoutes.js";
const app = express();
app.use(express.json());
app.use(userRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
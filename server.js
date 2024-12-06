import express from 'express';
import controllerRouting from './routes/index'

const app = express();
const port = process.env.PORT || 5000;

app.arguments(express.json());
controllerRouting(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app;

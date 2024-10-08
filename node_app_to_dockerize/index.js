import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.status(200).send('Hello world!');
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🟢`))
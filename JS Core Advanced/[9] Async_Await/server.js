const express = require('express')
const app = express()
const PORT = 3000

app.get(`/user`, (req, res) => {
    const userId = req.query.id;
    console.log(userId)

    if (!userId) return res.status(400).json({ error: 'Параметр id обязателен' });

    const data = {
        id: userId,
        name: "Name",
    }

    res.json({ data: data })
})

const start = () => {
    try {
      app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
    }
    catch (e) {
      console.error('Error starting server:', error);
    }
}

start()
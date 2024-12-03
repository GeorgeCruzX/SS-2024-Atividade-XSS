const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const SECRET_KEY = 'your-secret-key';

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simular validação do usuário
    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ message: 'Login successful', token });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

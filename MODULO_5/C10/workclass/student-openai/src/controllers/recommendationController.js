const axios = require('axios');
const students = require('../models/students.js');

const getRecomendations = async (req, res) => {
    const { id } = req.params;
    const student = students.find(student => student.id = id);

    if(!student) {
        return res.status(404).send(`Estudiante no encontrado`);
    }

    const prompt = `Recomendación de cursos adicionales para el estudiante de ${student.major}`;

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
            prompt: prompt,
            max_tokens: 100,
            n: 1,
            stop: null,
            temperature: 0.7
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        
        res.json({ recommendations: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener datos de API');
    }
};

module.exports = { getRecomendations };
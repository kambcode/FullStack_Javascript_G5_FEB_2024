import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;
const carsFilePath = path.resolve('src', 'cars.json');

app.use(express.json());

// Helper function to read and write cars data
const readCars = () => {
  const data = fs.readFileSync(carsFilePath);
  return JSON.parse(data);
};

const writeCars = (data) => {
  fs.writeFileSync(carsFilePath, JSON.stringify(data, null, 2));
};

// GET all cars
app.get('/cars', (req, res) => {
  const cars = readCars();
  res.json(cars);
});

// POST a new car
app.post('/cars', (req, res) => {
  const cars = readCars();
  const newCar = req.body;
  cars.push(newCar);
  writeCars(cars);
  res.status(201).json(newCar);
});

// PUT update a car
app.put('/cars/:id', (req, res) => {
  const cars = readCars();
  const { id } = req.params;
  const updatedCar = req.body;
  const carIndex = cars.findIndex(car => car.id === id);

  if (carIndex === -1) {
    return res.status(404).json({ message: 'Car not found' });
  }

  cars[carIndex] = updatedCar;
  writeCars(cars);
  res.json(updatedCar);
});

// DELETE a car
app.delete('/cars/:id', (req, res) => {
  const cars = readCars();
  const { id } = req.params;
  const newCars = cars.filter(car => car.id !== id);

  if (cars.length === newCars.length) {
    return res.status(404).json({ message: 'Car not found' });
  }

  writeCars(newCars);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

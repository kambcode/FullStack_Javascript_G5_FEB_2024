import fs from 'fs';
import path from 'path';

const dataPath = path.join(path.resolve(), 'src', 'data', 'products.json');

const readData = () => {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
}

const writeData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

export const getProducts = (req, res) => {
    const products = readData();
    res.json(products);
};

export const getProductById = (req, res) => {
    const products = readData();
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
};

export const createProduct = (req, res) => {
    const products = readData();
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock,
        description: req.body.description
    };
    products.push(newProduct);
    writeData(products);
    res.status(201).json(newProduct);
};

export const updateProduct = (req, res) => {
    const products = readData();
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex !== -1) {
        products[productIndex] = {
            ...products[productIndex],
            ...req.body
        };
        writeData(products);
        res.json(products[productIndex]);
    } else {
        res.status(404).send('Product not found');
    }
};

export const deleteProduct = (req, res) => {
    const products = readData();
    const newProducts = products.filter(p => p.id !== parseInt(req.params.id));
    writeData(newProducts);
    res.status(204).send();
};
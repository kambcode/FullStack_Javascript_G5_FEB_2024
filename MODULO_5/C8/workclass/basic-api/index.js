const http = require('http');
const url = require('url');

const products = [
    { 
        id: 1, 
        name: 'Laptop', 
        price: 999.99, 
        category: 'Electronics'
    },
    { 
        id: 2, 
        name: 'Chair', 
        price: 49.99, 
        category: 'Furniture'
    },
    { 
        id: 3, 
        name: 'Pen', 
        price: 49.99, 
        category: 'Stationery'
    }
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/products' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } else if (pathname.startsWith('/products/') && req.method === 'GET') {
        const id = parseInt(pathname.split('/')[2], 10);
        const product = products.find(p => p.id === id);

        if (product) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(product));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Product not found' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not found' }));
    }
});

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
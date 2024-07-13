let books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: 'Nemesis', author: 'Darwin Nuñez' },
];

export const createBook = (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author};
    books.push(newBook);
    res.status(201).json(newBook);
};

export const getBooks = (req, res) => {
    const { title } = req.query;
    if (title) {
        const filteredBooks = books.filter(book => book.title.includes(title));
        return res.json(filteredBooks);
    }
    res.json(books);
};

export const getBookById = (req, res) => {
    const { id } = req.params;
    const book = books.find(book => book.id === parseInt(id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found'});
    }
}

export const deleteBook = (req, res) => {
    const { id } = req.params;
    const bookIndex = books.findIndex(book => book.id === parseInt(id));
    if (bookIndex !== -1) {
      books = books.filter(book => book.id !== parseInt(id));
      res.json({ message: 'Book deleted' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
};

export const updateBook = (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const bookIndex = books.findIndex(book => book.id === parseInt(id));
    if (bookIndex !== -1) {
      books[bookIndex] = { id: parseInt(id), title, author };
      res.json(books[bookIndex]);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
};
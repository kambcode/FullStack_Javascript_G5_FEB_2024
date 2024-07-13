let books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

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
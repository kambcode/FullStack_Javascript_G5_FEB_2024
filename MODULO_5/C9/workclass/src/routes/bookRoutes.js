import express from 'express';
import { getBooks, getBookById } from '../controllers/bookController.js';

const router = express.Router();

router.get('/books', getBooks);
router.get('/books/:id', getBookById);

export default router;
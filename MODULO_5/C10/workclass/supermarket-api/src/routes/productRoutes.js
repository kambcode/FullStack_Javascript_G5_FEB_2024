import express from 'express';
import { 
    getProducts, 
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getProducts);
router.get('/:id', getProductById);
router.post('/', auth, createProduct);
router.put('/:id', updateProduct);updateProduct;
router.delete('/:id', deleteProduct);

export default router;
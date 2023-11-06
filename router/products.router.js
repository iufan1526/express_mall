import express from 'express';
import productModel from '../schemas/products.schemas.js';
const router = express.Router();

/**
 * 상품 저장 API
 */
router.post('/product', async (req, res) => {
    const {
        productName,
        description,
        productState,
        author,
        password,
        productId,
    } = req.body;

    const createResult = await productModel.create({
        productName,
        productId,
        description,
        productState,
        author,
        password,
        date: new Date(),
    });

    res.status(200).json(createResult);
});

/**
 * 상품 조회 API
 */
router.get('/product', async (req, res) => {
    const productList = await productModel
        .find({}, { password: 0, description: 0, _id: 0 })
        .sort({ date: -1 });

    res.json({ productList });
});

/**
 * 상품 상세조회 API
 */
router.get('/product/:productId', async (req, res) => {
    const { productId } = req.params;

    const product = await productModel.findOne(
        { productId },
        { password: 0, _id: 0 },
    );

    res.json({ product });
});

/**
 * 상품 수정 API
 */
router.patch('/product/:productId', async (req, res) => {
    const { productId } = req.params;
    const { productName, description, productState, password } = req.body;

    const productList = await productModel.findOne({ productId });

    if (!productList) {
        res.status(400).send('상품 조회에 실패하였습니다.');
    }

    if (productList.password !== password) {
        res.status(400).send('비밀번호가 일치하지 않습니다.');
    }

    const resultUpdate = await productList.updateOne({
        productName,
        description,
        description,
    });

    res.status(200).json(resultUpdate);
});

/**
 * 상품 삭제 API
 */
router.delete('/product/:productId', async (req, res) => {
    const { productId } = req.params;
    const { password } = req.body;

    const productList = await productModel.findOne({ productId });

    if (!productList) {
        res.status(400).send('상품 조회에 실패하였습니다.');
    }

    if (productList.password !== password) {
        res.status(400).send('비밀번호가 일치하지 않습니다.');
    }

    const resultDelete = await productModel.deleteOne(productList);

    res.status(200).json(resultDelete);
});

export default router;

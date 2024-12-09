import express from 'express'
import { login, verify } from '../controllers/authController.js'
import authMiddle from '../middleware/authMiddle.js'


const router = express.Router()

router.post('/login', login)
router.get('/verify', authMiddle, verify)

export default router;
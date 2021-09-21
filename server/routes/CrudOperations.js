import express from 'express';

import getData from '../controllers/getData.js'
import postData from '../controllers/postData.js'
import updateData from '../controllers/updateData.js'
import deleteData from '../controllers/deleteData.js'

const router=express.Router()

router.get('/',getData)
router.post('/',postData)
router.patch('/:id',updateData)
router.delete('/:id',deleteData)

export default router
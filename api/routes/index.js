import express from 'express'
import { users, photos } from './controllers'

var router = express.Router()

router.use('/users', users);
router.use('/photos', photos);

router.get('/', (req, res, next) => {
	res.render('index', { title: 'Express' })
})

export default router
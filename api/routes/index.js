import express from 'express'
import users from './users'

var router = express.Router()

router.use('/users', users);
router.get('/', (req, res, next) => {
	res.render('index', { title: 'Express' })
})

export default router
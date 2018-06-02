import express from 'express'
import Message from '../models/Message'

var router = express.Router()

router.get('/:id?', (req, res, next) =>
{
	if (req.params.id)
		Message.find({thread: req.params.id}, (err, rows) =>
		{
			(err)
			? res.json(err)
			: res.json(rows)
		})
	else
		Message.findAll(null, null, (err, rows) => {
			(err)
			? res.json(err)
			: res.json(rows)
		})
})

export default router
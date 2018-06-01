import express from 'express'
import Comment from '../models/Comment'

var router = express.Router()

router.get('/:id?', (req, res, next) =>
{
	if (req.params.id)
		Comment.findOne(req.params.id, (err, rows) =>
		{
			(err)
			? res.json(err)
			: res.json(rows)
		})
	else
		Comment.findAll(null, (err, rows) => {
			(err)
			? res.json(err)
			: res.json(rows)
		})
})

export default router
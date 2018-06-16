import express from 'express'
import User from '../models/User'

var router = express.Router()

router.get('/:id?', (req, res, next) =>
{
	if (req.params.id)
		User.findOne(req.params.id, (err, rows) =>
		{
			(err)
			? res.json(err)
			: res.json(rows)
		})
	else
		User.find(null, null, (err, rows) =>
		{
			(err)
			? res.json(err)
			: res.json(rows)
		})
})

export default router
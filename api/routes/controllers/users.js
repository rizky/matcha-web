import express from 'express'
import User from '../models/User'

var router = express.Router()

router.get('/:id', (req, res, next) =>
{
	User.findOne(req.params.id, (err, rows) =>
	{
		(err)
		? res.json(err)
		: res.json(rows)
	})
})

router.get('/to/:to', (req, res, next) =>
{
	User.find({to: req.params.to}, null, (err, rows) =>
	{
		(err)
		? res.json(err)
		: res.json(rows)
	})
})

export default router
import express from 'express'
import Photo from '../models/Photo'

var router = express.Router()

router.get('/:id?', (req, res, next) =>
{
	if (req.params.id)
		Photo.findOne(req.params.id, function(err, rows)
		{
			(err)
			? res.json(err)
			: res.json(rows)
		})
	else
		Photo.findAll(function(err, rows)
		{
			(err)
			? res.json(err)
			: res.json(rows)
		})
})

export default router
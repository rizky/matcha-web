import express from 'express'
import User from '../models/User'

var router = express.Router()

router.get('/:id?', (req, res, next) =>
{
	if (req.params.id)
		User.findOne(req.params.id, function(err, rows)
		{
			(err)
			? res.json(err)
			: res.json(rows)
		})
	else
		User.findAll(function(err, rows)
		{
			(err)
			? res.json(err)
			: res.json(rows)
		})
})

router.post('/', (req, res, next) =>
{
	User.addUser(req.body, function(err, count)
	{
		(err)
		? res.json(err)
		: res.json(count)
	})
})

router.post('/:id', (req, res, next) =>
{
	User.deleteAll(req.body, function(err, count)
	{
		(err)
		? res.json(err)
		: res.json(count)
	})
})

router.delete('/:id', (req, res, next) =>
{
	User.deleteUser(req.params.id, function(err, count)
	{
		(err)
		? res.json(err)
		: res.json(count)
	})
})

router.put('/:id', (req, res, next) =>
{
	User.updateUser(req.params.id, req.body, function(err, rows)
	{
		(err)
		? res.json(err)
		: res.json(rows)
	})
})

export default router
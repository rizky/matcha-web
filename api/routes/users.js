import express from 'express'
import User from '../models/User'

var router = express.Router()

router.get('/:id?', (req,res,next) =>
{
	if (req.params.id)
		User.getUserById(req.params.id,function(err,rows)
		{
			if(err)
				res.json(err)
			else
				res.json(rows)
		})
	else
		User.getAllUsers(function(err,rows)
		{
			if(err)
				res.json(err)
			else
				res.json(rows)
		})
})

router.post('/', (req,res,next) =>
{
	User.addUser(req.body,function(err,count)
	{
		if(err)
			res.json(err)
		else
			res.json(req.body)
	})
})

router.post('/:id', (req,res,next) =>
{
	User.deleteAll(req.body,function(err,count)
	{
		if(err)
			res.json(err)
		else
			res.json(count)
	})
})

router.delete('/:id', (req,res,next) =>
{
	User.deleteUser(req.params.id,function(err,count)
	{
		if(err)
			res.json(err)
		else
			res.json(count)
	})
})

router.put('/:id', (req,res,next) =>
{
	User.updateUser(req.params.id,req.body,function(err,rows)
	{
		if(err)
			res.json(err)
		else
			res.json(rows)
	})
})

export default router
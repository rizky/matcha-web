'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/:id?', function (req, res, next) {
	if (req.params.id) _User2.default.getUserById(req.params.id, function (err, rows) {
		if (err) res.json(err);else res.json(rows);
	});else _User2.default.getAllUsers(function (err, rows) {
		if (err) res.json(err);else res.json(rows);
	});
});

router.post('/', function (req, res, next) {
	_User2.default.addUser(req.body, function (err, count) {
		if (err) res.json(err);else res.json(req.body);
	});
});

router.post('/:id', function (req, res, next) {
	_User2.default.deleteAll(req.body, function (err, count) {
		if (err) res.json(err);else res.json(count);
	});
});

router.delete('/:id', function (req, res, next) {
	_User2.default.deleteUser(req.params.id, function (err, count) {
		if (err) res.json(err);else res.json(count);
	});
});

router.put('/:id', function (req, res, next) {
	_User2.default.updateUser(req.params.id, req.body, function (err, rows) {
		if (err) res.json(err);else res.json(rows);
	});
});

exports.default = router;
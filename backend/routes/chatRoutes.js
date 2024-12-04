const express = require('express');
const { fetchChats } = require('../controllers/chatControllers');

const router = express.Router();

router.route('/').get(fetchChats);
// router.route('/').post(accessChat);
// router.route('/group').post(createGroupChat);
// router.route('/rename').put(renameGroup);
// router.route('/groupadd').put(addToGroup);
// router.route('/removeGroup').delete(removeFromGroup);

module.exports = router;
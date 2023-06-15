const {Router} = require ('express');
const { insertTodo, getTodos, getOneTodo, updateTodo } = require('../controller/todoController');

const router = Router();

router.post('', insertTodo)
router.get('/', getTodos)
router.get('/:id', getOneTodo)
router.put('/:id', updateTodo)

module.exports = {router};
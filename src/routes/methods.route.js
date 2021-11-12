const {Router} = requier('express')
const route = Router()
const controller = require('../controllers/methods.controller')

route.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    next()
});

//Routes
route.get('/fibonacci',controller.getFibonacci)
route.get('/factorial',controller.getFactorial)
route.get('/arpertri',controller.getArpertri)
route.get('/arpercir',controller.getArpercir)
route.get('/arperec',controller.getArperec)

module.exports=route

const Methods = {}

Methods.getFibonacci = (req,res) => {

}

Methods.getFactorial = (req,res) => {
    var nums = []


}

Methods.getArpertri = (req,res) => {
    var base = req.headers['base']
    var altura = req.headers['altura']
    var lado1 = req.headers['lado1']
    var lado2 = req.headers['lado2']

    if(base != undefined && base > 0 && altura != undefined && lado1 != undefined && lado1 > 0 && lado2 != undefined && lado2 > 0 && altura > 0 && !isNaN(base) && !isNaN(altura) && !isNaN(lado1) && !isNaN(lado2)){
        var area = base*altura/2
        var perim = base+lado1+lado2

        res.status(200).json({status:"correct", area, perim})
    }else {
        res.status(400).json({status:"fail", response:"Error al calcular"})
    }
}

Methods.getArpercir = (req,res) => {
    var radio = req.headers['radio']

    if(radio != undefined && radio > 0 && !isNaN(radio)){
        var area = Math.PI*Math.pow(radio,2)
        var perim = 2*Math.PI*radio

        res.status(200).json({status:"correct", area, perim})
    }else {
        res.status(400).json({status:"fail", response:"Error al calcular"})
    }

}

Methods.getArperec = (req,res) => {
    var base = req.headers['base']
    var altura = req.headers['altura']

    if(base != undefined && base > 0 && altura != undefined && altura > 0 && !isNaN(base) && !isNaN(altura)){
        var area = base*altura
        var perim = base*2+altura*2

        res.status(200).json({status:"correct", area, perim})
    }else {
        res.status(400).json({status:"fail", response:"Error al calcular"})
    }
}

module.exports = Methods

const Methods = {}

Methods.getFibonacci = (req,res) => {
    var cant = req.headers['cantidad']
    let nums = [0,1]

    if(cant !== undefined && cant > 0 && !isNaN(cant)){
        for (let i = 2; i < cant; i++) {
            nums[i] = nums[i - 2] + nums[i - 1];
        }
        res.status(200).json({status:"correct", nums:nums})
    }else {
        res.status(400).json({status:"fail", response:"Error al calcular"})
    }
}

Methods.getFactorial = (req,res) => {
    var num = req.headers['numero']
    var fact = 1

    if(num !== undefined && num > 0 && !isNaN(num) && num <= 170){
        for(var j = num; j > 1 ; j = j-1 ){
            fact = fact*j;
        }
        res.status(200).json({status:"correct", fact:fact})
    }else if(num == 0){
        res.status(200).json({status:"correct", fact:1})
    }else {
        res.status(400).json({status:"fail", response:"Error al calcular"})

    }

}

Methods.getArpertri = (req,res) => {
    var lado1 = parseInt(req.headers['lado1'])
    var lado2 = parseInt(req.headers['lado2'])
    var lado3 = parseInt(req.headers['lado3'])

    if(lado3 !== undefined && lado3 > 0 && lado1 !== undefined && lado1 > 0 && lado2 !== undefined && lado2 > 0 && !isNaN(lado3) && !isNaN(lado1) && !isNaN(lado2) && (lado1+lado3) > lado2 && (lado1+lado2) > lado3 && (lado2+lado3) > lado1 ){
        var perim = parseInt(lado1)+parseInt(lado2)+parseInt(lado3)
        var s = perim/2
        var area = Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3))

        res.status(200).json({status:"correct", area:area, perim:perim})
    }else {
        res.status(400).json({status:"fail", response:"Error al calcular"})
    }
}

Methods.getArpercir = (req,res) => {
    var radio = req.headers['radio']

    if(radio !== undefined && radio > 0 && !isNaN(radio)){
        var area = Math.PI*Math.pow(radio,2)
        var perim = 2*Math.PI*radio

        res.status(200).json({status:"correct", area:area, perim:perim})
    }else {
        res.status(400).json({status:"fail", response:"Error al calcular"})
    }

}

Methods.getArperec = (req,res) => {
    var base = req.headers['base']
    var altura = req.headers['altura']

    if(base !== undefined && base > 0 && altura !== undefined && altura > 0 && !isNaN(base) && !isNaN(altura)){
        var area = base*altura
        var perim = base*2+altura*2

        res.status(200).json({status:"correct", area:area, perim:perim})
    }else {
        res.status(400).json({status:"fail", response:"Error al calcular"})
    }
}

module.exports = Methods

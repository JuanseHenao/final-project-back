const request= require("supertest")
const app = require('../src/index')

//Pruebas Unitarias de Fibonacci

describe("GET Fibonacci", ()=> {

    it(" numero valido", (done) => {
        var cantidad = 8;
        request(app)
            .get("/api/fibonacci")
            .set("accept", "application/json")
            .set("cantidad", cantidad)
            .expect("Content-Type", /json/)
            .expect({status: "correct", nums:[0, 1, 1, 2, 3, 5, 8, 13]})
            .expect(200, done)

    })
    it("numero negativo", (done) => {
        var cantidad = -1;
        request(app)
            .get("/api/fibonacci")
            .set("accept", "application/json")
            .set("cantidad", cantidad)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("no es numero", (done) => {
        var cantidad = "cantidad";
        request(app)
            .get("/api/fibonacci")
            .set("accept", "application/json")
            .set("cantidad", cantidad)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("sin dato ingresado", (done) => {
        request(app)
            .get("/api/fibonacci")
            .set("accept", "application/json")
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })

}).timeout(10000)

//Pruebas Unitarias de Factorial

describe("GET Factorial", ()=> {

    it(" Numero valido", (done) => {
        var numero = 4;
        request(app)
            .get("/api/factorial")
            .set("accept", "application/json")
            .set("numero", numero)
            .expect("Content-Type", /json/)
            .expect({status: "correct", fact:24 })
            .expect(200, done)

    })
    it("Numero negativo", (done) => {
        var numero = -1;
        request(app)
            .get("/api/factorial")
            .set("accept", "application/json")
            .set("numero", numero)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("No es numero", (done) => {
        var numero = "a";
        request(app)
            .get("/api/factorial")
            .set("accept", "application/json")
            .set("numero", numero)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Numero es mayor a 170", (done) => {
        var numero = 200;
        request(app)
            .get("/api/factorial")
            .set("accept", "application/json")
            .set("numero", numero)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Sin dato ingresado", (done) => {
        request(app)
            .get("/api/factorial")
            .set("accept", "application/json")
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })

}).timeout(10000)

//Pruebas Unitarias de Área y Perímetro Triángulo

describe("GET Area perimetro triangulo", ()=> {

    it(" Numero valido", (done) => {
        var lado1 = 4;
        var lado2 = 4;
        var lado3 = 4;
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .set("lado3", lado3)
            .expect("Content-Type", /json/)
            .expect({status: "correct", area:6.928203230275509, perim:12 })
            .expect(200, done)

    })
    it("Hay un lado igual a cero 1", (done) => {
        var lado1 = 0;
        var lado2 = 4;
        var lado3 = 4;
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .set("lado3", lado3)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Hay un lado igual a cero 2", (done) => {
        var lado1 = 4;
        var lado2 = 0;
        var lado3 = 4;
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .set("lado3", lado3)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Hay un lado igual a cero 3", (done) => {
        var lado1 = 4;
        var lado2 = 4;
        var lado3 = 0;
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .set("lado3", lado3)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Numero negativo 1", (done) => {
        var lado1 = -1;
        var lado2 = 4;
        var lado3 = 4;
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .set("lado3", lado3)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Numero negativo 2", (done) => {
        var lado1 = 4;
        var lado2 = -1;
        var lado3 = 4;
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .set("lado3", lado3)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Numero negativo 3", (done) => {
        var lado1 = 4;
        var lado2 = 4;
        var lado3 = -1;
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .set("lado3", lado3)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("No es numero 1", (done) => {
        var lado1 = "a";
        var lado2 = 4;
        var lado3 = 4;
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .set("lado3", lado3)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("No es numero 2", (done) => {
        var lado1 = 4;
        var lado2 = "a";
        var lado3 = 4;
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .set("lado3", lado3)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("No es numero 3", (done) => {
        var lado1 = 4;
        var lado2 = 4;
        var lado3 = -"a";
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .set("lado3", lado3)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("No cumple ley de desigualdad 1", (done) => {
        var lado1 = 5;
        var lado2 = 5;
        var lado3 = 11;
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .set("lado3", lado3)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("No cumple ley de desigualdad 2", (done) => {
        var lado1 = 4;
        var lado2 = 9;
        var lado3 = 4;
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .set("lado3", lado3)            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("No cumple ley de desigualdad 3", (done) => {
        var lado1 = 9;
        var lado2 = 4;
        var lado3 = 4;
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .set("lado3", lado3)            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Sin dato ingresado", (done) => {
        request(app)
            .get("/api/arpertri")
            .set("accept", "application/json")
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })

}).timeout(10000)

//Pruebas Unitarias de Área y Perímetro Círculo

describe("GET Area y Perimetro Circulo", ()=> {

    it("Numero valido", (done) => {
        var radio = 5;
        request(app)
            .get("/api/arpercir")
            .set("accept", "application/json")
            .set("radio", radio)
            .expect("Content-Type", /json/)
            .expect({status: "correct", area:78.53981633974483, perim:31.41592653589793 })
            .expect(200, done)

    })
    it("Numero negativo", (done) => {
        var radio = -1;
        request(app)
            .get("/api/arpercir")
            .set("accept", "application/json")
            .set("radio", radio)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Numero igual a cero", (done) => {
        var radio = 0;
        request(app)
            .get("/api/arpercir")
            .set("accept", "application/json")
            .set("radio", radio)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("No es numero", (done) => {
        var radio = "r";
        request(app)
            .get("/api/arpercir")
            .set("accept", "application/json")
            .set("radio", radio)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Sin dato ingresado", (done) => {
        request(app)
            .get("/api/arpercir")
            .set("accept", "application/json")
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })

}).timeout(10000)

//Pruebas Unitarias de Área y Perímetro Rectángulo

describe("GET Area perimetro rectangulo", ()=> {

    it(" Numero valido", (done) => {
        var base = 4;
        var altura = 3;
        request(app)
            .get("/api/arperec")
            .set("accept", "application/json")
            .set("base", base)
            .set("altura", altura)
            .expect("Content-Type", /json/)
            .expect({status: "correct", area:12, perim:14 })
            .expect(200, done)

    })
    it("Base igual a cero", (done) => {
        var base = 0;
        var altura = 4;
        request(app)
            .get("/api/arperec")
            .set("accept", "application/json")
            .set("base", base)
            .set("altura", altura)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Altura igual a cero", (done) => {
        var base = 4;
        var altura = 0;
        request(app)
            .get("/api/arperec")
            .set("accept", "application/json")
            .set("base", base)
            .set("altura", altura)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Base con numero negativo", (done) => {
        var base = -1;
        var altura = 4;
        request(app)
            .get("/api/arperec")
            .set("accept", "application/json")
            .set("base", base)
            .set("altura", altura)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Altura con numero negativo", (done) => {
        var base = 4;
        var altura = -1;
        request(app)
            .get("/api/arperec")
            .set("accept", "application/json")
            .set("base", base)
            .set("altura", altura)
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })
    it("Sin dato ingresado", (done) => {
        request(app)
            .get("/api/arperec")
            .set("accept", "application/json")
            .expect("Content-Type", /json/)
            .expect({status: "fail", response: "Error al calcular"})
            .expect(400, done)
    })

}).timeout(10000)

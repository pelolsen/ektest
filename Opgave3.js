class Loan{
    constructor(id, productName, amount, lender, rate, duration){
        this.id = id
        this.productName = productName
        this.amount = amount
        this.lender = lender
        this.rate = rate
        this.duration=duration 
    }
    yearRate(){
        var amount= this.amount
        var rate = Math.pow((1+(this.rate/100)), this.duration)
        var total = amount*rate
        var pryear = total/this.duration
        return pryear

    }
}

//Extender lån
class CarLoan extends Loan{
    constructor(id, productName, amount, lender, rate, duration, orginationFee, carlicenseplate){
        super(id, productName,amount, lender, rate, duration)
        this.orginationFee = orginationFee
        this.carlicenseplate = carlicenseplate 
                //Sætter status til at starte med denne værdi 
        this.status  = 'Established'
    }
    yearRate(){
        var amount= this.amount
        var rate = Math.pow((1+(this.rate/100)), this.duration)
        var total = amount*rate
        var pryear = total/this.duration
        return pryear

    }
}
//Extender lån
class MorgageLoan extends Loan{
    constructor(id, productName, amount, lender, rate, duration, orginationFee, address){
        super(id, productName, amount, lender, rate, duration)
        this.orginationFee = orginationFee 
        this.govermentfee = (this.amount/100)*1.5 
        this.address = address
        //Sætter status til at starte med denne værdi 
        this.status = 'Established'
    }
    yearRate(){
        var amount= this.amount
        var rate = Math.pow((1+(this.rate/100)), this.duration)
        var total = amount*rate
        var pryear = total/this.duration
        return pryear

    }
}

class User {
    constructor(id, fullname, address, email, phone){
        this.id=id
        this.fullname=fullname
        this.address=address
        this.email=email
        this.phone=phone
    }
}

class Address{
    constructor(id, streetName, zipCode, city, country, streetNumber){
        this.id=id
        this.streetName=streetName
        this.zipCode=zipCode
        this.city=city
        this.country=country
        this.streetNumber=streetNumber
    }
}

var AndersAnd = new User(1, "Anders And", new Address(1, "Paradisæblevej", 2860, "Andeby", "Danmark", 8), "lequack@disney.com", 40263978)
var joakimVonAnd = new User(2, "Joakim Von And", new Address(2, "Store Velstands Boulevard 888", 2860, "Andeby", "Danmark", 888),"scrooge@disney.com", 38153815)

var Anderslån = new CarLoan(1, "Billån", 0, AndersAnd, 8, 10, 20000, "BT22112")
var JokkeLån = new MorgageLoan(1, "Pengelån", 3000000, joakimVonAnd, 1.5, 10, 0, joakimVonAnd.address)
console.log(JokkeLån.yearRate());
console.log(Anderslån.yearRate());

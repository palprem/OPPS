var bankAcount=function(){
    var acountBalance=1000
    var deposit=function(depositAmount){
        acountBalance=acountBalance+depositAmount
        console.log('acountBalance', acountBalance)
    }
    var withDrow=function(withdrawAmount){
        acountBalance=acountBalance-withdrawAmount
        console.log('remain amount -', acountBalance)
    }
    return{ deposit, withDrow}
}
var bank=bankAcount()
bank.deposit(200)
bank.withDrow(200)
// console.log(acountBalance)
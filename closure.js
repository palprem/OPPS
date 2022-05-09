function bankAcountDesposit(){
    var currentbalance=1000
    let deposit=function(depositAmount){
        currentbalance=currentbalance+depositAmount
        return `Acount Balance ${currentbalance}`
    }
    return deposit;
}
var dp=bankAcountDesposit()
console.log(dp(200))
// console.log(currentbalance)
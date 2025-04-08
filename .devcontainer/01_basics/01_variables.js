const accountId = 144553
let accountEmail ="sahilkuv7649590@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Patna"

console.log(accountId);

/*
Prefer not to use var 
because of issue of block scope and functional scope
*/

console.table([accountId, accountEmail ,accountPassword, accountCity])
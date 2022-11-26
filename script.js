  let p=fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
p.then((value1)=>{
    return value1.json()
}).then((value2)=>{
console.log(value2)
})
async function data()
{
    await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then (function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
    })
}
data();
const select1 = document.querySelector("#currency-selector-1");
const select2 = document.querySelector("#currency-selector-2");
const worth1 = document.querySelector("#worth-money-1");
const worth2 = document.querySelector("#worth-money-2");
let p = document.querySelector("#exchange-rate");
updateRate();
function updateRate(){
  console.log("its running")
  fetch(`https://v6.exchangerate-api.com/v6/edd946b514578525c8e7fed3/latest/${select1.value}`)
  .then((res)=> res.json())
  .then((data)=> {
    const rate = data.conversion_rates[select2.value];
    p.innerText = `1 ${select1.value} = ${ rate + " " + select2.value } `;
    worth2.value = worth1.value * rate;
  })
}

select1.addEventListener("change",updateRate);
select2.addEventListener("change",updateRate);
worth1.addEventListener("change",updateRate);

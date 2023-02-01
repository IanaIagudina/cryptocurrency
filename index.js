const coinList = document.getElementById('list') // -> change it for table places

// const stripe = Stripe("key");

//iFrame
const appearance = {
    theme: 'default',
};
// elements = stripe.elements({ appearance, clientSecret: 'key' });
const paymentElement = elements.create("payment");
paymentElement.mount("#payment-element");

// -> show Curent Date

// document.getElementById("CurentDateBtn").addEventListener("click", displayDate);
// function displayDate() {
//   document.getElementById("CurentDate").innerHTML = Date();
// }


//-> mouse out/mouse over
var x = document.getElementById("CurentDateBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", displayDate);
x.addEventListener("mouseout", myThirdFunction);
function myFunction() {
    document.getElementById("CurentDateBtn").innerHTML = "Click to Show Date<br>";
}

function myThirdFunction() {
    document.getElementById("CurentDateBtn").innerHTML = "Hide Date<br>";
}
function displayDate() {
    document.getElementById("CurentDateBtn").innerHTML += Date();
}



// -> search element
// -> TODO add search button
//const coinImput = 
// document.getElementsByClassName('text').onsearch = function() {
//     myFunction ()
// }
// myFunction () { 


// }
// //document.getElementById("myInput").onsearch = function() {myFunction()};

// function myFunction() {
//   var x = document.getElementById("myInput");
//   document.getElementById("demo").innerHTML = "You are searching for: " + x.value;
// }

//API coin
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&fbclid=IwAR2seyvVJZbkupG8ZP75m6uh_cqGH5NeTLcq2l4v7cAPKCPF_jh-_Kvc9dg")//, {mode: "no-cors"})
    // TODO -> fetch(('http://localhost:3000/market'))
    .then(Response => Response.json())
    .then(coinArr => {
        for (let i = 0; i < 10; i++) {
            displayInfo(coinArr[i])

        }
        // .then(coinArr => console.log(coinArr))
    })



//coinObj.data.forEach(x => console.log(x))
// .then(coinArr => console.log(coinArr))

function displayInfo(coinObj) {
    // -> console.log(coinObj)
    //-> doesn't work: console.log(coinObj[0])
    // console.log(coinObj.name)
    // console.log(coinObj.image)

    //->same as 
    //console.log(coinObj.name, coinObj.current_price, coinObj.image, coinObj.symbol)

    // check it on w3schools: for in, for of
    // for (x in obj)
    // x- is key
    const tr = document.createElement('tr')
    tr.className = "coinInfo"

    // -> added star img. created Favorit column
    td = document.createElement('td')
    tr.append(td)
    let emptyStar = document.createElement('img')
    emptyStar.src = './img/empty_star.png'
    // -> td.setAttribute('id', 'starButton')
    emptyStar.className = "emptyStar"
    td.id = 'starButton'
    td.append(emptyStar)
    // -> Double click event and click event
    emptyStar.addEventListener("dblclick", () => {
        emptyStar.src = './img/empty_star.png'
        emptyStar.src = './img/filled_star.png'
        console.log("empty")
    })
    emptyStar.addEventListener("click", () => {
        emptyStar.src = './img/filled_star.png'
        emptyStar.src = './img/empty_star.png'
        console.log("emptyfiled")
    })

    // -> added coin Img
    td = document.createElement('td')
    tr.append(td)
    const coinImg = document.createElement('img')
    coinImg.className = "logo"
    td.append(coinImg)
    coinImg.src = coinObj.image

    // -> added symbol
    td = document.createElement('td')
    tr.append(td)
    td.textContent = coinObj.symbol

    // -> added coin Name
    td = document.createElement('td')
    tr.append(td)
    td.textContent = coinObj.name

    // -> added prices
    td = document.createElement('td')
    tr.append(td)
    td.textContent = `$ ${coinObj.current_price}`

    // -> added percantage
    td = document.createElement('td')
    tr.append(td)
    td.textContent = coinObj.price_change_percentage_24h
    coinList.append(tr);
    // -> input number
    td = document.createElement('td')
    tr.append(td)
    const coinInput = document.createElement('input')
    coinInput.id = "textBox"
    coinInput.type = "number"
    td.append(coinInput)
}





//-> keydown

// let btn = document.createElement("button");
// btn.innerHTML = "Submit";
// btn.type = "submit";
// btn.name = "formBtn";
// document.body.appendChild(btn);

// let coinLine = document.getElementsByClassName("coinInfo").createElement("button")
// coinLine.addEventListener('click', () => {
//     console.log('work')
// })



document.getElementById("payment-form").addEventListener('submit', (e) => {
    e.preventDefault()
    setLoading(true)

})
// -> mouseover event reset payment
ducument.getElementById("myCheck").addEventListener('mouseover', () => {
    document.getElementById("myCheck").click();
    setLoading(false)
}
)


// Show a spinner on payment submission
function setLoading(isLoading) {
    if (isLoading) {
        // Disable the button and show a spinner
        document.querySelector("#submit").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add("hidden");
    } else {
        document.querySelector("#submit").disabled = false;
        document.querySelector("#spinner").classList.add("hidden");
        document.querySelector("#button-text").classList.remove("hidden");
    }
}

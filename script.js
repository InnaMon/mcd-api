const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=EVV431001NUOLKDZ";
const url2 = "https://investors-exchange-iex-trading.p.rapidapi.com/stock/{symbol}/book";

fetch(url)
.then(function(response) {
  // console.log(response);
  return response.json();
})
.then(function(data) {
  console.log(data)
  // let obj = JSON.stringify(data["Time Series (5min)"] ["2019-05-20 16:00:00"]["2. high"]); 
  let obj = JSON.stringify(data["Time Series (5min)"]);
  console.log(Array.from(obj))
  // let obj = JSON.stringify(data);
  
  // appendData(obj);
})
.catch(function(error) {
  console.log('Error!', error);
});

function appendData(obj) {
  // let x = JSON.parse(obj);
  var date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  const finances = document.getElementById('finances');
  finances.innerText = `Daily High for ${date} : ${obj}`; //insert current date
  // console.log(obj);
}

// function appendData(obj) {
//   const finances = document.getElementById('finances');
//   for(let i=0; i < data.length; i++) {
//     const div = document.createElement('div');
//     const post = data[i];
//     div.innerHTML = 'Data: ' + post;
//     finances.appendChild(div);
//   }
// }
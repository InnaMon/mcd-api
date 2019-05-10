const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=EVV431001NUOLKDZ";
const url2 = "https://investors-exchange-iex-trading.p.rapidapi.com/stock/{symbol}/book";

fetch(url)
.then(function(response) {
  //console.log(response);
  return response.json();
})
.then(function(data) {
  let obj = JSON.stringify(data["Time Series (5min)"]["2019-05-09 16:00:00"]["2. high"]);
  appendData(obj);
  console.log(obj);
})
.catch(function(error) {
  console.log('Error!', error);
});

function appendData(obj) {
  let x = JSON.parse(obj);
  const finances = document.getElementById('finances');
  finances.innerText = `Daily High for 2019-05-09 4:OO PM : ${x}`;
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
const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=EVV431001NUOLKDZ";
const url2 = "https://investors-exchange-iex-trading.p.rapidapi.com/stock/{symbol}/book";

fetch(url)
.then(function(response) {
  //console.log(response);
  return response.json();
})
.then(function(data) {
  console.log(JSON.stringify(data));
  console.log(data.statusText);
  //const obj = JSON.parse(data)
  //console.log(obj);
  //appendData(data)
})
.catch(function(error) {
  console.log('Error!', error);
});

function appendData(data) {
  const finances = document.getElementById('finances');
  for(let i=0; i < data.length; i++) {
    const div = document.createElement('div');
    const post = data[i];
    div.innerHTML = 'Data: ' + post;
    finances.appendChild(div);
  }
}
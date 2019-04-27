const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=EVV431001NUOLKDZ";

fetch(url)
.then(function(response) {
  console.log(response);
  return response.json();
})
.then(function(data) {
  console.log(data);
  appendData(data)
})
.catch(function(error) {
  console.log('Error!', error);
});

function appendData(data) {
  const finances = document.getElementById('finances');
  const div = document.createElement('div');
  div.innerHTML = data[0];
  finances.appendChild(div);
}
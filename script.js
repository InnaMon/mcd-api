const finances = document.getElementById('finances');
const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=EVV431001NUOLKDZ";

fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.log('Error!', error);
});

// fetch(url, {
//     mode: 'no-cors'
//     })
// // .then(function(response) {
// //   // Read the response as json.
// //   return response.json();
// // })
// .then(function(data) {
//   // Do stuff with the JSON
//   console.log(data);
// })
// .catch(function(error) {
//   console.log('Error!', error);
// });
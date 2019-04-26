const finances = document.getElementById('finances');
const url = "https://www.google.com/async/finance_wholepage_price_updates?ei=ESbDXJXfB47cswXnlbWwDQ&yv=3&async=mids:%2Fm%2F07zkrcn%7C%2Fm%2F07zltq7%7C%2Fm%2F07zlv08%7C%2Fm%2F07zl90k%7C%2Fm%2F07zlm7d%7C%2Fm%2F07zltf3%7C%2Fm%2F03p3lxb%7C%2Fm%2F07zl5yq%7C%2Fm%2F016yss%7C%2Fm%2F02853rl%7C%2Fm%2F04zvfw%7C%2Fg%2F1q52gbb7v,currencies:,_fmt:jspb";


fetch(url, {
    mode: 'no-cors' // 'cors' by default
  })
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log('Error!', error);
});
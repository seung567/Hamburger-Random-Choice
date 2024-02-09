/**
 * 
 */


fetch("https://www.lotteeatz.com/brand/ria")
  .then((response) => response.text())
  .then((data) => console.log(data))
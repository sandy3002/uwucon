const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbwG9vjFS-dqaZT6kKXS6r_15kub3YH2R5yw/exec'


form.addEventListener('submit', e => {
submitButton.disabled = true;
e.preventDefault()
let requestBody = new FormData(form)

console.log(requestBody.forEach((value, key) => {console.log(key, value)}))
console.log(requestBody);


fetch('/purchase', { method: 'POST', body: requestBody})
.then(response => {
alert('Success!', response)
submitButton.disabled = false
})
.catch(error => {
alert('Error!', error.message)
submitButton.disabled = false

   }
   )
})

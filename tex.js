var time = new Date()
var hora = time.getHours()
var min = String(time.getMinutes()).padStart(2, '0')

console.log(min)
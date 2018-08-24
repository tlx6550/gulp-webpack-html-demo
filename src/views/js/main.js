import v from'./test.js'
v(66)
var t = $('.head p').text()
console.log(t)
$('.pop-c').click(function(e){
	$(this).hide()
})
const c = 8
setTimeout(()=>{
	console.log(c+1)
},2000)
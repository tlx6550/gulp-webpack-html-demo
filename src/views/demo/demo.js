var homeTpl = require('./demo.hbs');
alert(1)
var html = homeTpl({ data:'注意：这段文字是通过/demo.hbs来渲染的555'});
$('#bhs').html(html)
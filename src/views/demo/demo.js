import Fmover from 'finger-mover'
// 导入 纵向模拟滚动插件 simulation-scroll-y
import simulationScrollY from 'simulation-scroll-y'
// 导入 横向模拟滚动插件 simulation-scroll-x
import simulationScrollX from 'simulation-scroll-x'


 function createTxt (i) {
        var str = ''
        for (var k = 0; k < 100; k++) {
            str += i + '----'
        }
        return str
    }

    var content = document.querySelector('.content')
    for (var i = 0; i < 100; i++) {
        var p = document.createElement('p')
        p.innerHTML = createTxt(i)
        content.appendChild(p)
    }
// 同时使用 simulation-scroll-y 和 simulation-scroll-x 这两个插件，即可实现 2d 滚动
console.log(simulationScrollX)
setTimeout(function(){
	let fm = new Fmover({
	    // el 可以是元素或元素选择器
	    el: '#scroll-box',
	    plugins: [
	        simulationScrollY()
	    ]
	})
},1000)

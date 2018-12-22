import Fmover from 'finger-mover'
// 导入 纵向模拟滚动插件 simulation-scroll-y
import simulationScrollY from 'simulation-scroll-y'
// 导入 横向模拟滚动插件 simulation-scroll-x
import simulationScrollX from 'simulation-scroll-x'
import Fingerd from 'fingerd'
console.log(Fingerd)
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
	let fm = new Fmover({
	    // el 可以是元素或元素选择器
	    el: '#scroll-box',
	    plugins: [
	        simulationScrollY()
	    ]
	})
	
	let el = document.querySelector('#box')
//手指状态可以继承
// 创建 Fingerd 对象，并传入一个元素，作为手指的作用范围，通常这个元素与你监听事件的元素相同即可
/*let f = new Fingerd({
    element: el
})
// 在相应的事件中，将原生的事件对象注入即可。打印对象 `f` 你将得到 `Fingerd` 为你提供的诸多信息
el.addEventListener('touchstart', function (event) {
    f.injectEvent(event)

    console.log(f)
})*/

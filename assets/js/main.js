const view = document.querySelector('.viewport p')
let viewport = view.innerHTML
let arr = [0]

function printKey(key) {
    let lastEl = arr[arr.length-1]

    if ((lastEl == '+' || lastEl == '-' || lastEl == '/' || lastEl == '*' || lastEl == '.' || view.innerHTML == 0) && (key == '+' || key == '-' || key == '/' || key == '*' || key == '.' || view.innerHTML == 0)) {
        arr.pop()
        view.innerHTML = arr.join('')
    }
    
    if (key == '1' || key == '2' || key == '3' || key == '4' || key == '5' || key == '6' || key == '7' || key == '8' || key == '9' || key == '0') {
        view.innerHTML += key
        arr.push(key)
    } else if (key == '+' || key == '-' || key == '/' || key == '*') {
        view.innerHTML += key
        arr.push(key)
    } else if (key == '=') {
        console.log(arr.join(''))
        view.innerHTML = Math.round(eval(arr.join('')) * 100) / 100
        arr = []
        arr.push(view.innerHTML)
    } else if (key == 'res') {
        view.innerHTML = 0
        arr = []
    } else if (key == 'del') {
        arr.pop()
        view.innerHTML = arr.join('')
    } else if (key == ',') {
        view.innerHTML += '.'
        arr.push('.')
    }
}

const html = document.querySelector('html')
function theme(el) {
    html.setAttribute('class', '')
    
    if (el == 1) {
        html.classList.add('theme1')
    } else if (el == 2) {
        html.classList.add('theme2')
    } else if (el == 3) {
        html.classList.add('theme3')
    }
}
//原生js写法
function createElement(){
    let element = document.createElement('div')
    element.innerHTML = `
       <div>
          <h1>Hello World</h1>
       </div>
    `
    return element    
}
document.body.appendChild(createElement())
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'http://127.0.0.1:5500/question.html';
})

document.getElementById('tri-calculate-btn').addEventListener('click', function(){
    const triArea = getAreaById('tri-input-one', 'tri-input-two');
    const ans = setEliment('Triangles', triArea);    
})

document.getElementById('rec-calculate-btn').addEventListener('click', function(){
    const rectArea = getAreaById2('rec-input-one', 'rec-input-two');
    const ans = setEliment('Rectangle', rectArea);
})
document.getElementById('para-calculate-btn').addEventListener('click', function(){
    const rectArea = getAreaById2('para-input-one', 'para-input-two');
    const ans = setEliment('Parallelogram', rectArea);
})
document.getElementById('rho-claculate-btn').addEventListener('click', function(){
    const rectArea = getAreaById('rho-input-one', 'rho-input-two');
    const ans = setEliment('Rhombus', rectArea);
})
document.getElementById('pent-calculate-btn').addEventListener('click', function(){
    const rectArea = getAreaById('pent-input-one', 'pent-input-two');
    const ans = setEliment('Pentagon', rectArea);
})
document.getElementById('elli-calculate-ctn').addEventListener('click', function(){
    const rectArea = getAreaById3('elli-input-one', 'elli-input-two');
    const ans = setEliment('Ellipse', rectArea);
})



// Random color
document.getElementById('random-color-tri').addEventListener('mouseover', function(){
    document.getElementById('random-color-tri').style.backgroundColor = randomColor()
})
document.getElementById('random-color-rec').addEventListener('mouseover', function(){
    document.getElementById('random-color-rec').style.backgroundColor = randomColor()
})
document.getElementById('random-color-per').addEventListener('mouseover', function(){
    document.getElementById('random-color-per').style.backgroundColor = randomColor()
})
document.getElementById('random-color-rho').addEventListener('mouseover', function(){
    document.getElementById('random-color-rho').style.backgroundColor = randomColor()
})
document.getElementById('random-color-pen').addEventListener('mouseover', function(){
    document.getElementById('random-color-pen').style.backgroundColor = randomColor()
})
document.getElementById('random-color-elli').addEventListener('mouseover', function(){
    document.getElementById('random-color-elli').style.backgroundColor = randomColor()
})
document.getElementById('random-color-area').addEventListener('mouseover', function(){
    document.getElementById('random-color-area').style.backgroundColor = randomColor()
})
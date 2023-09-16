function getInputFieldValueById (elementId){
    const inputFieldsElement = document.getElementById(elementId);
    const iputFieldsValueString = inputFieldsElement.value;
    const inputFieldsValue = parseFloat(iputFieldsValueString);

    inputFieldsElement.value = '';

    return inputFieldsValue;
}

// Triangle , Pentagon, Rombus
function getAreaById (idOne, idTwo){
    const peramiterOne = getInputFieldValueById(idOne);
    const peramiterTwo = getInputFieldValueById(idTwo);
    if(isNaN(peramiterOne) || isNaN(peramiterTwo)){
        alert('Pleace Enter a Valid Input');
    }
    else{
        const area = 0.5 * peramiterOne * peramiterTwo;
        return area.toFixed(2);
    }
}

// Rectanguler & Perallelogram
function getAreaById2(idOne, idTwo){
    const peramiterOne = getInputFieldValueById(idOne);
    const peramiterTwo = getInputFieldValueById(idTwo);

    if(isNaN(peramiterOne) || isNaN(peramiterTwo)){
        alert('Pleace Enter a Valid Input');
    }
    else{
        const area = peramiterOne * peramiterTwo;
        return area.toFixed(2);
    }
}

// Ellipse
function getAreaById3(idOne, idTwo){
    const peramiterOne = getInputFieldValueById(idOne);
    const peramiterTwo = getInputFieldValueById(idTwo);

    if(isNaN(peramiterOne) || isNaN(peramiterTwo)){
        alert('Pleace Enter a Valid Input');
    }
    else{
        const area = 3.14 * peramiterOne * peramiterTwo;
        return area.toFixed(2);
    }
}

function setEliment (areaName, area){
    const calculationAreaElement = document.getElementById('calculation-area');
    const p = document.createElement('p');
    p.innerText = areaName + " "+ area + 'cm2';
    calculationAreaElement.appendChild(p);
}


function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 


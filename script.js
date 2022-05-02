/*Fill your code */
let total = 0;
let layers = 0;

const makeLayer = (color) => {
    layers++;
    console.log(`layer${layers}`)
    const layerDiv = document.querySelector(`.layer${layers}`);
    layerDiv.style.visibility = 'visible';
    layerDiv.style.backgroundColor = color;

    if (layers === 5) {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach((button) => {
            button.disabled = true;
        })
        document.querySelector('.buy').disabled = false;
    }
}

const onChocolate = () => {
    const element = document.getElementById('chocolate').cloneNode(true);
    element.removeAttribute('id')
    const billList = document.getElementById('bill-list');
    billList.appendChild(element);
    total += 300;

    makeLayer('orange');
}

const onStrawberry = () => {
    const element = document.getElementById('strawberry').cloneNode(true);
    element.removeAttribute('id')
    const billList = document.getElementById('bill-list');
    billList.appendChild(element);
    total += 100;

    makeLayer('pink');
}

const onButter = () => {
    const element = document.getElementById('butterscotch').cloneNode(true);
    element.removeAttribute('id')
    const billList = document.getElementById('bill-list');
    billList.appendChild(element);
    total += 200;

    makeLayer('yellow');
}

const onVannila = () => {
    const element = document.getElementById('vannila').cloneNode(true);
    element.removeAttribute('id')
    const billList = document.getElementById('bill-list');
    billList.appendChild(element);
    total += 150;

    makeLayer('white');
}

const onRed = () => {
    const element = document.getElementById('redvelvet').cloneNode(true);
    element.removeAttribute('id')
    const billList = document.getElementById('bill-list');
    billList.appendChild(element);
    total += 350;

    makeLayer('red');
}

const onBuy = () => {
    const totalSpan = document.getElementById('total');
    totalSpan.innerHTML = total;
    const hiddenTotal = document.querySelector('.total');
    hiddenTotal.style.visibility = 'visible';

    const candles = document.querySelector('.candles')
    candles.style.visibility = 'visible';
}
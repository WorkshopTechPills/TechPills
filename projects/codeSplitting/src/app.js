var button = document.createElement('button');
button.innerText = 'Click me now!';

button.addEventListener('click', onButtonClick);

async function onButtonClick(event) {
    import('./myModule').then((mod) => {
        mod.myModule();
    });
}

document.body.appendChild(button);
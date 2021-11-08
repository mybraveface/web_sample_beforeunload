document.getElementById('btnRegister').addEventListener('click', () => {
    window.onpagehide = null;
    window.onpagehide = function(e) {
        saveLocalStorage()
    }
    console.log('Registered');
});
document.getElementById('btnUnregister').addEventListener('click', () => {
    window.onpagehide = null;
    console.log('Unregistered');
});
document.getElementById('btnClearLocalStorage').addEventListener('click', () => {
    localStorage.removeItem('input');
    console.log('cleared');
});

function saveLocalStorage() {
    const value = {
        'value1' : document.getElementById('value1').value,
        'value2' : document.getElementById('value2').value,
        'value3' : document.getElementById('value3').value
    };
    localStorage.setItem('input', JSON.stringify(value));
}

window.onload = () => {
    const value = localStorage.getItem('input');
    if (value == null) {
        return;
    }

    const valueObj = JSON.parse(value);

    document.getElementById('value1').value = valueObj.value1;
    document.getElementById('value2').value = valueObj.value2;
    document.getElementById('value3').value = valueObj.value3;
}
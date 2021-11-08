document.getElementById('btnRegister').addEventListener('click', () => {
    window.onbeforeunload = null;
    window.onbeforeunload = function(e) {
        return 'このページを離れますか？';
    }
    console.log('Registered');
});
document.getElementById('btnUnregister').addEventListener('click', () => {
    window.onbeforeunload = null;
    console.log('Unregistered');
});
// window.onbeforeunload = function(e){
//     return "このページを離れますか？"; // Google Chrome以外
//     e.returnValue = "このページを離れますか？"; // Google Chrome
// }
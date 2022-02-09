let inputFocus = document.getElementById('search-input');
inputFocus.addEventListener('mouseover', () => {
    inputFocus.focus();
});

let dropDown = document.getElementById('catalogue');
dropDown.addEventListener('mouseover', () => {
    dropDown.style.display = 'block';
});
console.log();
function get() {
    let number = document.getElementById('getRandom');
    let from = parseInt(document.getElementById('option').value);
    let to = parseInt(document.getElementById('options').value);
    let random = Math.floor(Math.random() * (to - from + 1)) + from;
    
    number.textContent = random;
}


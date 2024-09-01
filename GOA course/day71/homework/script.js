function plus(){
    let numb = parseInt(document.getElementById('demo').textContent);
    let newnumb = numb + 1
    document.getElementById('demo').textContent = newnumb
}

function reset(){
    document.getElementById('demo').textContent = 0
}

function minus(){
    let ragac = parseInt(document.getElementById('demo').textContent);
    let kideragac = ragac - 1
    document.getElementById('demo').textContent = kideragac
}
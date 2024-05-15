function add() {
    let word = document.getElementById('add-input').value
    let div = document.createElement('div')
    div.id = word
    div.textContent = word
    document.getElementById('add-container').append(div)
    document.getElementById('add-input').value = ''
}

function find() {
    let word = document.getElementById('find-input').value
    if (document.getElementById(word) != null) {
        let div = document.createElement('div')
        div.textContent = 'This word exist in the dictionary'
        document.getElementById('find-container').append(div)
    } else {
        let div = document.createElement('div')
        div.textContent = 'This word does not exist in the dictionary'
        document.getElementById('find-container').append(div)
    }
    document.getElementById('find-input').value = ''
}

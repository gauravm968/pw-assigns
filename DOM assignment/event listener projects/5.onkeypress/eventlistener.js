let input = document.getElementById('input') 
let show = document.getElementById('show')

input.addEventListener('keypress', (e) => {
    show.textContent =`Key pressed : ${e.key}`
})
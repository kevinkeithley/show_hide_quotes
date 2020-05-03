document.getElementById('blur-text-button').addEventListener('click', function () {
  if (this.classList.contains('game-off')) {
    this.innerHTML = 'Turn off game'
    this.classList.add('game-on')
    this.classList.remove('game-off')
    const items = document.querySelectorAll('.item')
    for (let i = 0; i < items.length; i++) {
      items[i].firstElementChild.classList.add('blurry-text')
      var btn = document.createElement('SPAN')
      btn.setAttribute('class', 'far fa-eye')
      btn.setAttribute('id', 'btn_'.concat([i]))
      btn.setAttribute('onClick', 'toggleClick(this)')
      items[i].appendChild(btn)
    }
  } else if (this.classList.contains('game-on')) {
    this.innerHTML = 'Play the game'
    this.classList.add('game-off')
    this.classList.remove('game-on')
    const items = document.querySelectorAll('.item')
    for (let i = 0; i < items.length; i++) {
      items[i].firstElementChild.classList.remove('blurry-text')
      var el = document.getElementById('btn_'.concat([i]))
      el.remove()
    }
  }
})
function toggleClick (id) {
  id.parentElement.firstElementChild.classList.toggle('blurry-text')
  id.classList.toggle('fa-eye')
  id.classList.toggle('fa-eye-slash')
}

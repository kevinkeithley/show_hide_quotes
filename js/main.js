document.getElementById('blur-text-button').addEventListener('click', function () {
  const strBtn = 'button_'
  const strItm = 'item_'
  if (this.classList.contains('game-off')) {
    this.innerHTML = 'Turn off game'
    this.classList.add('game-on')
    this.classList.remove('game-off')
    const items = document.querySelectorAll('.item')
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add('blurry-text')
      items[i].setAttribute('id', strItm.concat([i]))
      var btn = document.createElement('BUTTON')
      btn.innerHTML = 'Show/Hide'
      btn.setAttribute('id', strBtn.concat([i]))
      btn.setAttribute('onClick', 'toggleClick(this)')
      items[i].appendChild(btn)
    }
  } else if (this.classList.contains('game-on')) {
    this.innerHTML = 'Play the game'
    this.classList.add('game-off')
    this.classList.remove('game-on')
    const items = document.querySelectorAll('.item')
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('blurry-text')
      var el = document.getElementById(strBtn.concat([i]))
      el.remove()
    }
  }
})
function toggleClick (id) {
  id.parentElement.classList.toggle('blurry-text')
}

document.getElementById('blur-text-button').addEventListener('click', function () {
  const strBtn = 'button_'
  const strItm = 'item_'
  var elBlurButton = document.getElementById('blur-text-button')
  if (elBlurButton.classList.contains('game-off')) {
    elBlurButton.innerHTML = 'Turn off game'
    elBlurButton.classList.add('game-on')
    elBlurButton.classList.remove('game-off')
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
  } else if (elBlurButton.classList.contains('game-on')) {
    elBlurButton.innerHTML = 'Play the game'
    elBlurButton.classList.add('game-off')
    elBlurButton.classList.remove('game-on')
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

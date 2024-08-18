const hamburgMenuBtn: HTMLButtonElement | null = document.querySelector('.hamburgBtn')
let isHamburgMenuOpened = false
const hamburMenuBtnSpans = hamburgMenuBtn?.innerHTML

if(hamburgMenuBtn){
  hamburgMenuBtn.addEventListener('click', () => {
    const headerNav: HTMLElement | null = document.querySelector('.headerNavigation') 
    if(headerNav){
      if(isHamburgMenuOpened === false){
        headerNav.style.opacity = '1'
        headerNav.style.pointerEvents = 'all'
        isHamburgMenuOpened = true 
        hamburgMenuBtn.innerHTML = 'X'
      }else {
        headerNav.style.opacity = '0'
        headerNav.style.pointerEvents = 'none'
        if(hamburMenuBtnSpans){
          hamburgMenuBtn.innerHTML = hamburMenuBtnSpans
        }
        isHamburgMenuOpened = false
      }
    }
  })
}
export function copyLink(btns: NodeListOf<HTMLButtonElement>, btn: HTMLButtonElement, text: string){
  btns.forEach((button) => {
    button.style.backgroundColor = '#9de2e0'
    button.innerText = 'Copy'
  })

  btn.innerHTML = 'Copied!'
  btn.style.backgroundColor = '#3b3054'
  navigator.clipboard.writeText(text)
}
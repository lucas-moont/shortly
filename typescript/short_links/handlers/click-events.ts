import { copyLink } from "../copy_link"

export function setupCopyClickEvents() {
  const copyBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.copyShortenedLink')

  copyBtns.forEach(button => {
    button.addEventListener('click', () => {
      copyLink(copyBtns, button)
    })
  })
}
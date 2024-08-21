import { copyLink } from "../short_links/copy_link.js"

export async function setupCopyClickEvents() {
  const copyBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.copyShortenedLink')

  copyBtns.forEach(button => {
    button.addEventListener('click', () => {
      copyLink(copyBtns, button, button.getAttribute('href-to-be-copied') ?? '/')
    })
  })
}
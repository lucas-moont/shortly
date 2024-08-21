import { setupHamburgMenu } from "./menu.js"
import { setupCopyClickEvents } from "./handlers/click-events.js"
import { setupFormSubmit } from "./handlers/form-submit.js"

document.addEventListener('DOMContentLoaded', async () => {
  setupCopyClickEvents()
  setupFormSubmit()
  setupHamburgMenu()
})
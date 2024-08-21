import { setupHamburgMenu } from "./menu.js"
import { setupCopyClickEvents } from "./short_links/handlers/click-events.js"
import { setupFormSubmit } from "./short_links/handlers/form-submit.js"

document.addEventListener('DOMContentLoaded', async () => {
  setupCopyClickEvents()
  setupFormSubmit()
  setupHamburgMenu()
})
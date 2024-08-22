import { setupHamburgMenu } from "./menu.js";
import { setupCopyClickEvents } from "./handlers/click-events.js";
import { setupFormSubmit } from "./handlers/form-submit.js";
import { buildShortLinksHtmlFromLocalStorage } from "./short_links/local_storage_repository/build_short_links_html_structure_by_local_storage.js";

document.addEventListener("DOMContentLoaded", async () => {
  setupFormSubmit();
  setupHamburgMenu();
  await buildShortLinksHtmlFromLocalStorage(
    document.querySelector(".shortenedLinksWrapper ul")
  );
  setupCopyClickEvents();
});

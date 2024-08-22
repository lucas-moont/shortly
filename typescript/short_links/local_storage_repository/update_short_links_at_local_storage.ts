import { processShortLinksFromLocalStorage } from "./process_short_links_local_storage.js";

export async function updateShortLinksAtLocalStorage(liElement: HTMLLIElement){
  const { shortLinksLocalStorageArray } =
    await processShortLinksFromLocalStorage();

  shortLinksLocalStorageArray.push(liElement.outerHTML)
  localStorage.setItem('short_links', JSON.stringify(shortLinksLocalStorageArray))
}
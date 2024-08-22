import { processShortLinksFromLocalStorage } from "./process_short_links_local_storage.js";

export async function buildShortLinksHtmlFromLocalStorage(listElement: HTMLUListElement | null) {
  const { shortLinksLocalStorageArray } =
    await processShortLinksFromLocalStorage();

    if(shortLinksLocalStorageArray.length > 0){
      shortLinksLocalStorageArray.forEach((shortLinkElement: HTMLLIElement) => {
        if(listElement){
          listElement.innerHTML += shortLinkElement
        }
      })
    }
}

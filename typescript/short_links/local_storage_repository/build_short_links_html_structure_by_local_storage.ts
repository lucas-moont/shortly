import { processShortLinksFromLocalStorage } from "../process_short_links_local_storage";

export async function buildShortLinksHtmlFromLocalStorage(listElement: HTMLUListElement) {
  const { shortLinksLocalStorageArray } =
    await processShortLinksFromLocalStorage();

    if(shortLinksLocalStorageArray.length > 0){
      shortLinksLocalStorageArray.forEach((shortLinkElement: HTMLLIElement) => {
        listElement.innerHTML += shortLinkElement
      })
    }
}

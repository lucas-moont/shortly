export async function processShortLinksFromLocalStorage() {
  if (!localStorage.getItem("short_links")) {
    localStorage.setItem(
      "short_links",
      JSON.stringify([])
    );
  }

  const shortLinksLocalStorage: string = localStorage.getItem("short_links") || '[]';
  const shortLinksLocalStorageArray = JSON.parse(shortLinksLocalStorage);
  return { shortLinksLocalStorageArray };
}

export async function processShortLinksFromLocalStorage() {
  if (!localStorage.getItem("short_links")) {
    const shortLinksLocalStorage = localStorage.setItem(
      "short_links",
      JSON.stringify([])
    );
    return { shortLinksLocalStorage };
  }

  const shortLinksLocalStorage = localStorage.getItem(
    JSON.parse("short_links")
  );
  return { shortLinksLocalStorage };
}

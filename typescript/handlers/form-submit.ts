import { addShortLinkHTMLStructure } from "../short_links/local_storage_repository/add_short_link_html_structure.js"

export async function setupFormSubmit() {
  const generateShortLinkForm = document.querySelector(".shortLinkGenerator")

  const shortLinkInput: HTMLInputElement | null =
    document.querySelector("#shortLinkInput")
  const errorText: HTMLParagraphElement | null =
    document.querySelector(".errorText")
  const shortenedLinksWrapper: HTMLUListElement | null = document.querySelector(
    ".shortenedLinksWrapper ul"
  )

  generateShortLinkForm?.addEventListener("submit", async (e) => {
    e.preventDefault()
    if(errorText){
      errorText.style.display = 'none'
    }
    await processShortenedLinkFormSubmitHandler(
      shortLinkInput,
      shortenedLinksWrapper,
      errorText
    )
  })
}

async function processShortenedLinkFormSubmitHandler(
  shortLinkInput: HTMLInputElement | null,
  shortenedLinksWrapper: HTMLUListElement | null,
  errorText: HTMLParagraphElement | null
) {
  if (shortLinkInput && shortenedLinksWrapper && errorText) {
    await addShortLinkHTMLStructure(
      shortLinkInput.value,
      shortenedLinksWrapper,
      errorText
    )
  }
}

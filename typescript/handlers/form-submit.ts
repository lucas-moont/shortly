import { createShortLinkHTMLStructure } from "../short_links/create_short_link_html_structure.js"

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
    await createShortLinkHTMLStructure(
      shortLinkInput.value,
      shortenedLinksWrapper,
      errorText
    )
  }
}

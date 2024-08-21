import { copyLink } from "./copy_link.js"
import { GetUrlErrorHandling } from "./errors/get-url-global-error-handling.js"
import { getShortenedLink } from "./get_shortened_link.js"
import { setupCopyClickEvents } from "./handlers/click-events.js"

const shortLinkForm = document.querySelector(".shortLinkGenerator")
const shortLinkInput: HTMLInputElement | null =
  document.querySelector("#shortLinkInput")
const errorText: HTMLParagraphElement | null =
  document.querySelector(".errorText")
const shortenedLinksWrapper: HTMLUListElement | null = document.querySelector(
  ".shortenedLinksWrapper ul"
)

if (shortLinkForm && shortLinkInput && shortenedLinksWrapper && errorText) {
  shortLinkForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    await createShortLinkHTMLStructure(
      shortLinkInput.value,
      shortenedLinksWrapper,
      errorText
    )
  })
}

async function createShortLinkHTMLStructure(
  url: string,
  shortenedLinksUl: HTMLUListElement,
  errorText: HTMLParagraphElement
) {
  const shortenedUrlObject = await getShortenedLink(url)
  if (shortenedUrlObject.status === "error") {
    if (errorText) {
      throw new GetUrlErrorHandling(errorText)
    }

    throw new Error("Erro")
  }

  const li = document.createElement("li")
  const a = document.createElement("a")
  const button: HTMLButtonElement = document.createElement("button")
  const completeLinkSpan = document.createElement("span")
  const shortenedLinksInteraction = document.createElement("span")
  const btns: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".copyShortenedLink")

  li.classList.add("shortenedLinkLi")
  a.classList.add("shortenedLinkAnchor")
  button.classList.add("copyShortenedLink", "cyanBtn", "lessRoundedBtn")
  completeLinkSpan.classList.add("completeLink")
  shortenedLinksInteraction.classList.add("shortenedLinksInteraction")

  a.href = shortenedUrlObject.shortUrl
  a.innerText = shortenedUrlObject.shortUrl
  button.innerText = "Copy"

  setupCopyClickEvents()

  shortenedLinksInteraction.append(a, button)
  completeLinkSpan.innerText = url

  li.append(completeLinkSpan, shortenedLinksInteraction)

  shortenedLinksUl.appendChild(li)
}

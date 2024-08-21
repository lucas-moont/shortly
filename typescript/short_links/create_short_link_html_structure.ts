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

export async function createShortLinkHTMLStructure(
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

  li.classList.add("shortenedLinkLi")
  a.classList.add("shortenedLinkAnchor")
  button.classList.add("copyShortenedLink", "cyanBtn", "lessRoundedBtn")
  button.setAttribute('href-to-be-copied', shortenedUrlObject.shortUrl)
  completeLinkSpan.classList.add("completeLink")
  shortenedLinksInteraction.classList.add("shortenedLinksInteraction")

  a.href = shortenedUrlObject.shortUrl
  a.innerText = shortenedUrlObject.shortUrl
  button.innerText = "Copy"

  shortenedLinksInteraction.append(a, button)
  completeLinkSpan.innerText = url

  li.append(completeLinkSpan, shortenedLinksInteraction, '')

  shortenedLinksUl.appendChild(li)

  setupCopyClickEvents()
}

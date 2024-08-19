import { GetUrlErrorHandling } from "./errors/get-url-global-error-handling";
import { getShortenedLink } from "./get_shortened_link";

const shortLinkForm = document.querySelector(".shortLinkGenerator");
const shortLinkInput: HTMLInputElement | null =
  document.querySelector("#shortLinkInput");
const errorText: HTMLParagraphElement | null =
  document.querySelector(".errorText");
const shortenedLinksWrapper: HTMLUListElement | null = document.querySelector(
  ".shortenedLinksWrapper ul"
);

if (shortLinkForm && shortLinkInput && shortenedLinksWrapper && errorText) {
  shortLinkForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    await createShortLinkHTMLStructure(
      shortLinkInput.value,
      shortenedLinksWrapper,
      errorText
    );
  });
}else{
  console.log('algum elemento não existe: ' + shortLinkForm + shortLinkInput)
}

async function createShortLinkHTMLStructure(
  url: string,
  shortenedLinksUl: HTMLUListElement,
  errorText: HTMLParagraphElement
) {
  const shortenedUrlObject = await getShortenedLink(url);
  if (shortenedUrlObject.status === "error") {
    if (errorText) {
      throw new GetUrlErrorHandling(errorText);
    }

    throw new Error("Erro");
  }

  const li = document.createElement("li");
  const a = document.createElement("a");
  const button = document.createElement("button");
  const completeLinkSpan = document.createElement("span");
  const shortenedLinksInteraction = document.createElement("span");

  li.classList.add("shortenedLinkLi");
  a.classList.add("shortenedLinkAnchor");
  button.classList.add("copyShortenedLink", "cyanBtn", "lessRoundedBtn");
  completeLinkSpan.classList.add("completeLink");
  shortenedLinksInteraction.classList.add("shortenedLinksInteraction");

  a.href = shortenedUrlObject.shortUrl;
  a.innerText = shortenedUrlObject.shortUrl;
  button.innerText = "Copy";

  button.addEventListener("click", () => {
    navigator.clipboard.writeText("Copiado");
  });

  shortenedLinksInteraction.append(a, button);
  completeLinkSpan.innerText = url;

  li.append(completeLinkSpan, shortenedLinksInteraction);

  shortenedLinksUl.appendChild(li);
}

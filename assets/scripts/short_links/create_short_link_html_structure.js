var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GetUrlErrorHandling } from "./errors/get-url-global-error-handling.js";
import { getShortenedLink } from "./get_shortened_link.js";
import { setupCopyClickEvents } from "../handlers/click-events.js";
import { processShortLinksFromLocalStorage } from "./process_short_links_local_storage.js";
const shortLinkForm = document.querySelector(".shortLinkGenerator");
const shortLinkInput = document.querySelector("#shortLinkInput");
const errorText = document.querySelector(".errorText");
const shortenedLinksWrapper = document.querySelector(".shortenedLinksWrapper ul");
export function createShortLinkHTMLStructure(url, shortenedLinksUl, errorText) {
    return __awaiter(this, void 0, void 0, function* () {
        const shortenedUrlObject = yield getShortenedLink(url);
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
        button.setAttribute("href-to-be-copied", shortenedUrlObject.shortUrl);
        completeLinkSpan.classList.add("completeLink");
        shortenedLinksInteraction.classList.add("shortenedLinksInteraction");
        a.href = shortenedUrlObject.shortUrl;
        a.innerText = shortenedUrlObject.shortUrl;
        button.innerText = "Copy";
        shortenedLinksInteraction.append(a, button);
        completeLinkSpan.innerText = url;
        li.append(completeLinkSpan, shortenedLinksInteraction, "");
        shortenedLinksUl.appendChild(li);
        setupCopyClickEvents();
        const { shortLinksLocalStorageArray } = yield processShortLinksFromLocalStorage();
        shortLinksLocalStorageArray.push(li);
    });
}

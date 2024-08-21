var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addShortLinkHTMLStructure } from "../short_links/add_short_link_html_structure.js";
export function setupFormSubmit() {
    return __awaiter(this, void 0, void 0, function* () {
        const generateShortLinkForm = document.querySelector(".shortLinkGenerator");
        const shortLinkInput = document.querySelector("#shortLinkInput");
        const errorText = document.querySelector(".errorText");
        const shortenedLinksWrapper = document.querySelector(".shortenedLinksWrapper ul");
        generateShortLinkForm === null || generateShortLinkForm === void 0 ? void 0 : generateShortLinkForm.addEventListener("submit", (e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            yield processShortenedLinkFormSubmitHandler(shortLinkInput, shortenedLinksWrapper, errorText);
        }));
    });
}
function processShortenedLinkFormSubmitHandler(shortLinkInput, shortenedLinksWrapper, errorText) {
    return __awaiter(this, void 0, void 0, function* () {
        if (shortLinkInput && shortenedLinksWrapper && errorText) {
            yield addShortLinkHTMLStructure(shortLinkInput.value, shortenedLinksWrapper, errorText);
        }
    });
}

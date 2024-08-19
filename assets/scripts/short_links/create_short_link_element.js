var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getShortenedLink } from "./get_shortened_link";
const shortLinkForm = document.querySelector('.shortLinkGenerator');
const shortLinkInput = document.querySelector('.shortLinkInput');
if (shortLinkForm && shortLinkInput) {
    shortLinkForm.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        shortLinkForm.querySelector('.');
    }));
}
function createShortLinkElement(e, url) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const shortenedUrlObject = yield getShortenedLink(url);
        if (shortenedUrlObject.status === 'error') {
        }
    });
}

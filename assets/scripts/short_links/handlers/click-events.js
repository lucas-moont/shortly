var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { copyLink } from "../copy_link.js";
export function setupCopyClickEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const copyBtns = document.querySelectorAll('.copyShortenedLink');
        copyBtns.forEach(button => {
            button.addEventListener('click', () => {
                var _a;
                copyLink(copyBtns, button, (_a = button.getAttribute('href-to-be-copied')) !== null && _a !== void 0 ? _a : '/');
            });
        });
    });
}

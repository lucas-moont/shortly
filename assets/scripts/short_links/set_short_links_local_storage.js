var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function processShortLinksFromLocalStorage() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!localStorage.getItem("short_links")) {
            const shortLinksLocalStorage = localStorage.setItem("short_links", JSON.stringify([]));
            return { shortLinksLocalStorage };
        }
        const shortLinksLocalStorage = localStorage.getItem(JSON.parse("short_links"));
        return { shortLinksLocalStorage };
    });
}

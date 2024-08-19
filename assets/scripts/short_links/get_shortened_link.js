var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getShortenedLink(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const urlEnconded = encodeURIComponent(url);
            const cleanedUrlResponse = yield fetch('https://cleanuri.com/api/v1/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `url=${urlEnconded}`,
            });
            return cleanedUrlResponse;
        }
        catch (error) {
        }
    });
}
const body = document.querySelector('body');
if (body) {
    body.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        const url = yield getShortenedLink('https://google.com.br');
        console.log(url);
    }));
}

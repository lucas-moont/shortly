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
        const token = "4oAY7YuNOrALuc7p0jGmMU2siwfwOZyosH034bfKd1Js5KSnUrlWAZ3XXg2p";
        try {
            const cleanedUrlResponse = yield fetch(`https://api.tinyurl.com/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    url,
                }),
            });
            if (!cleanedUrlResponse.ok) {
                return {
                    status: "error",
                    message: "An error occured",
                    shortUrl: "",
                };
            }
            const { data } = yield cleanedUrlResponse.json();
            return {
                shortUrl: data.tiny_url,
                message: "Success",
                status: "Success",
            };
        }
        catch (error) {
            return {
                status: "error",
                message: "An error occured",
                shortUrl: "",
            };
        }
    });
}

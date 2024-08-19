export class GetUrlErrorHandling extends Error {
    constructor() {
        super('Ocorreu um erro');
        this.showErrorMessage();
    }
    showErrorMessage() {
        const errorText = document.querySelector('.errorText');
        if (errorText) {
            errorText.style.display = 'block';
        }
    }
}

export class GetUrlErrorHandling extends Error {
    constructor(errorText) {
        super('Ocorreu um erro');
        this.errorText = errorText;
        this.showErrorMessage();
    }
    showErrorMessage() {
        const errorText = document.querySelector('.errorText');
        if (errorText) {
            errorText.style.display = 'block';
        }
    }
}

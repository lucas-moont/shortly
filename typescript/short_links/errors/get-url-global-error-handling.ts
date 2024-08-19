export class GetUrlErrorHandling extends Error {
  errorText: HTMLParagraphElement

  constructor(errorText: HTMLParagraphElement) {
    super('Ocorreu um erro')
    this.errorText = errorText
    this.showErrorMessage()
  }

  showErrorMessage(){
    const errorText: HTMLParagraphElement | null = document.querySelector('.errorText')

    if(errorText){
      errorText.style.display = 'block'
    }
  }
}
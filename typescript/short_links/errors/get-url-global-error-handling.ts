export class GetUrlErrorHandling extends Error {
  constructor() {
    super('Ocorreu um erro')
    this.showErrorMessage()
  }

  showErrorMessage(){
    const errorText: HTMLParagraphElement | null = document.querySelector('.errorText')

    if(errorText){
      errorText.style.display = 'block'
    }
  }
}
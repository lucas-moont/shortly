export async function getShortenedLink(url: string) {
  try {
    const urlEnconded = encodeURIComponent(url)
    const cleanedUrlResponse = await fetch(`https://is.gd/create.php?format=simple&url=${urlEnconded}`, {
    })

    return cleanedUrlResponse
  } catch (error) {
    
  }
}

const body = document.querySelector('body')

if(body){
  body.addEventListener('click', async () => {
    const url = await getShortenedLink('https://google.com.br')
    console.log(url)
  })
}

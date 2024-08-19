export async function getShortenedLink(url: string) {
  try {
    const urlEnconded = encodeURIComponent(url)
    const cleanedUrlResponse = await fetch('https://cleanuri.com/api/v1/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `url=${urlEnconded}`,
      mode: 'no-cors'
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

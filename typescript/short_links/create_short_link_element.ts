import { getShortenedLink } from "./get_shortened_link"

const shortLinkForm = document.querySelector('.shortLinkGenerator')
const shortLinkInput = document.querySelector('.shortLinkInput')

if(shortLinkForm && shortLinkInput){
  shortLinkForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    shortLinkForm.querySelector('.')
  })
}

async function createShortLinkElement(e: Event, url: string) {
  e.preventDefault()
  const shortenedUrlObject = await getShortenedLink(url)
  if(shortenedUrlObject.status === 'error'){
    
  }
}
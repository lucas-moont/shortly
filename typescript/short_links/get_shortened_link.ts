export async function getShortenedLink(url: string) {
  const token = "4oAY7YuNOrALuc7p0jGmMU2siwfwOZyosH034bfKd1Js5KSnUrlWAZ3XXg2p";

  try {
    const cleanedUrlResponse = await fetch(`https://api.tinyurl.com/create`, {
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
      //TODO: MOSTRA O TEXTO DE ERRO
    }

    const { data } = await cleanedUrlResponse.json();
    return data.tiny_url;
  } catch (error) {
    console.error(error);
  }
}

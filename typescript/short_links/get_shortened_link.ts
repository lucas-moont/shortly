interface getShortenedLinkResponse {
  shortUrl: string;
  message: string;
  status: string;
}

export async function getShortenedLink(
  url: string
): Promise<getShortenedLinkResponse> {
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
      return {
        status: "error",
        message: "An error occured",
        shortUrl: "",
      };
    }

    const { data } = await cleanedUrlResponse.json();
    return {
      shortUrl: data.tiny_url,
      message: "Success",
      status: "Success",
    };
  } catch (error) {
    return {
      status: "error",
      message: "An error occured",
      shortUrl: "",
    };
  }
}

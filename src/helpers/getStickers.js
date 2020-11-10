export const getStickers = async ( sticker ) => {
  const url = `http://api.giphy.com/v1/stickers/search?q=${ encodeURI( sticker ) }&limit=10&api_key=ewwlDgHSm5jIhyrMlny2T7tbW6FIEcSD`
  const res = await fetch(url)
  const { data } = await res.json()

  const stickers = data.map( img => {
      return {
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url
      }
  })

  return stickers
}

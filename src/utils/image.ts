const base_url = "https://onestopcleaningsolution.com/cdn-cgi/image/"

function generateImageTransform(src: string, width: number, height: number, fit: string = "crop", format: string = "webp") {
  return `${base_url}width=${width},height=${height},fit=${fit},format=${format}/${src}`
}

function generateWebpImage(src: string) {
    return `${base_url}format=webp/${src}`
}

export function webp(src: string) {
    return generateWebpImage(src);
}
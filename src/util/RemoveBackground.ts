import imglyRemoveBackground from "@imgly/background-removal"

export async function removeBackground(src: image_src): Promise<string> {
  console.log("removeBackground")
  const url = URL.createObjectURL(src);
  const blob: Blob = await imglyRemoveBackground(url);
  const resultUrl = URL.createObjectURL(blob);
  console.log(resultUrl);
  return resultUrl;
}

type image_src = Blob | MediaSource;
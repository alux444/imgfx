import imglyRemoveBackground from "@imgly/background-removal";

export async function removeBackground(src: image_src): Promise<string | null> {
  console.log("removeBackground");
  try {
    const url = URL.createObjectURL(src);
    const blob: Blob = await imglyRemoveBackground(url);
    const resultUrl = URL.createObjectURL(blob);
    console.log(resultUrl);
    return resultUrl;
  } catch (e) {
    console.log("failed");
    return null;
  }
}

type image_src = Blob | MediaSource;

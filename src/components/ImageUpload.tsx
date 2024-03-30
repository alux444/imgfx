import React, { ChangeEvent } from 'react'
import { removeBackground } from '../util/RemoveBackground'

const ImageUpload = () => {
  const [file, setFile] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setLoading(true);
        const res = await removeBackground(file);
        console.log(res)
        setFile(res);
        setLoading(false);
    }
  }

  return (
  <div>
      <div id="dropZone" className="drop-zone">
        <h1>Remove Background</h1>
        <form
          id="uploadForm"
        >
          <input id="fileInput" type="file" name="file" onChange={handleFileUpload} />
          {loading && <p>Processing...</p>}
          {file && <img loading='lazy' className='w-[20vw] h-[20vw]' src={file} alt="Background Removed"/>}
          {file && <a href={file} download="removed-background.png">Download</a>}
        </form>
      </div>
    </div>
  )
}

export default ImageUpload;
import React, { ChangeEvent } from 'react'
import { removeBackground } from '../util/RemoveBackground'

const ImageUpload = () => {
  const [file, setFile] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setError(null);
    if (file) {
        setLoading(true);
        const res = await removeBackground(file);
        if (res == null) setError("Invalid file type. Please upload an image file of JPEG/JPG/PNG.")
        console.log(res)
        setFile(res);
        setLoading(false);
    }
  }

  return (
  <div>
      <div id="dropZone" className="drop-zone">
        <h1 className='text-red-500'>Remove Background</h1>
        <form
          id="uploadForm"
        >
          <input id="fileInput" type="file" name="file" onChange={handleFileUpload} />
          {loading && <p>Processing...</p>}
          {error && <p>{error}</p>}
          {file && <img loading='lazy' className='object-contain w-[20vw] max-h-[20vw]' src={file} alt="Background Removed"/>}
          {file && <a href={file} download="removed-background.png">Download Image</a>}
        </form>
      </div>
    </div>
  )
}

export default ImageUpload;
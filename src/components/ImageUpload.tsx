import React, { ChangeEvent } from "react";
import { removeBackground } from "../util/RemoveBackground";

const ImageUpload = () => {
  const [file, setFile] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [fileName, setFileName] = React.useState<string | null>(null);

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    let file;
    if (event.type === "drop") {
      file = (event as React.DragEvent<HTMLDivElement>).dataTransfer?.files[0];
    } else {
      file = (event as ChangeEvent<HTMLInputElement>).target.files?.[0];
    }
    setError(null);
    if (file) {
      setLoading(true);
      setFileName(file.name);
      const res = await removeBackground(file);
      if (res == null) setError("Invalid file type. Please upload an image file of JPEG/JPG/PNG.");
      console.log(res);
      setFile(res);
      setLoading(false);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <div id="dropZone" className="drop-zone" onDragOver={handleDragOver} onDrop={handleFileUpload}>
        <h1 className="">Remove Background</h1>
        <form className="flex justify-center items-center flex-col gap-2" id="uploadForm">
          <input id="fileInput" type="file" name="file" onChange={handleFileUpload} className="hidden" />
          <label htmlFor="fileInput" className="cursor-pointer border-[1px] w-[250px] h-[50px] flex justify-center items-center text-center">
            <span>Upload File</span>
          </label>
          {fileName && <p>{fileName}</p>}
          {loading && <p>Processing...</p>}
          {error && <p>{error}</p>}
          {file && <img loading="lazy" className="object-contain flex-grow w-[60vw] md:w-[50vw] xl:w-[20vw] max-h-[20vh] border-[1px]" src={file} alt="Background Removed" />}
          {file && (
            <a href={file} download="removed-background.png">
              Download Image
            </a>
          )}
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;

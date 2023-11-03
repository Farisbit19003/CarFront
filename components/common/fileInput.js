import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

const FileInput = ({ keyPrefix, multiple, image, setImage }) => {

  const [loading, setloading] = useState(false);
  const [files, setFiles] = useState([]);

  const formData = new FormData();

  const uploadImageToCloud = async (event) => {
    setloading(true);
    const { data } = await axios.post("/image/upload", formData);
    setImage([
      {
        url: data.url,
        public_id: data.public_id,
      },
    ]);
    setloading(false);
    event.target.value = null;
  };

  const uploadMultiImageToCloud = async (event) => {
    const newFiles = Array.from(event.target.files);
    setloading(true);
    for (let index = 0; index < newFiles.length; index++) {
      formData.append("image", newFiles[index]);
      console.log("Form ", formData);
      const { data } = await axios.post("/image/upload", formData);
      setImage((prevImage) => [
        ...prevImage,
        {
          url: data.url,
          public_id: data.public_id,
        },
      ]);
    }
    setloading(false);
    event.target.value = null;
  };

  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files);
    if (multiple) {
      setFiles([...files, ...newFiles]);
      uploadMultiImageToCloud(event);
    } else {
      let file = event.target.files[0];
      formData.append("image", file);
      uploadImageToCloud(event);
    }
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...image];
    newFiles.splice(index, 1);
    setImage(newFiles);
  };

  return (
    <>
      <div className="flex flex-col cursor-pointer w-full border-amber-500 border-2 border-dashed">
        <label htmlFor={`${keyPrefix}-file-input`}>
          <div className="flex items-center cursor-pointer md:w-full justify-center flex-col font-sans rounded-lg p-5">
            <AiOutlineCloudUpload size={40} />
            <div className="text-center">
              <p>
                <span className="text-amber-500">Upload an image</span>
              </p>
              <p>PNG, JPG</p>
            </div>
          </div>
        </label>
        <input
          id={`${keyPrefix}-file-input`}
          type="file"
          onChange={handleFileUpload}
          style={{ display: "none" }}
          multiple={multiple}
        />

        {loading ? (
          <LoadingOutlined />
        ) : (
          image?.map((file, index) => (
            <div key={index} className="flex flex-row justify-start ">
              <div className="flex flex-row m-2  my-2">
                <div className="flex-1  text-gray-500 font-semibold">
                  <span>
                    <img src={file.url} height={100} width={100} />
                  </span>
                </div>
                <TiDeleteOutline
                  color="red"
                  className="cursor-pointer"
                  size={20}
                  onClick={() => handleRemoveFile(index)}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default FileInput;

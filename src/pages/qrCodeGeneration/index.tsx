import { Button } from "antd";
import qrImage from "../../assets/images/qrcode.svg";
import uploadIcon from "../../assets/icons/UploadBlue.svg";
import fileIconBlue from "../../assets/icons/FileBlue.svg";
import rightBlue from "../../assets/icons/rightBlue.svg";
import crossRed from "../../assets/icons/crossRed.svg";
import axios from "axios";
import {
  SnippetsOutlined,
  FontSizeOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignBottomOutlined,
  CloseOutlined,
  FileOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { useEffect, useState } from "react";
import { Input } from "antd";

export function QrGeneration() {
  const { TextArea } = Input;

  const [file, setFile] = useState<File>();
  const [dataType, setDataType] = useState("file");
  const [jsonData, setJsonData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [readyToGen, setReadyToGen] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (file) {
      const extension = file.name.split(".").pop();
      if (extension === "json") {
        setSuccess("Uploaded Successfully");
        setReadyToGen(true);
      } else {
        setError("Please select .json file");
      }
    }
  }, [file]);

  useEffect(() => {
    clearState();
    if (jsonData) {
      const isTrue = isValidJson(jsonData);
      if (isTrue) {
        setSuccess("Valid Json");
        setReadyToGen(true);
      } else {
        setError("Please copy pase right json");
        setReadyToGen(false);
      }
    }
  }, [jsonData]);

  const handleFile = (e: any) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleChange = (e: any) => {
    const data = e.target.value;
    setJsonData(data);
  };

  const clearFile = () => {
    setFile(undefined);
    const inputEl = document.getElementById("file-upload") as HTMLInputElement;
    if (inputEl) {
      inputEl.value = "";
    }
  };

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = image;
    downloadLink.download = "qr-code.png";
    downloadLink.click();
    URL.revokeObjectURL(downloadLink.href);
    document.body.removeChild(downloadLink);
  };

  const clearState = () => {
    setSuccess("");
    setError("");
    setReadyToGen(false);
  };

  const handleClear = () => {
    clearFile();
    setJsonData("");
    clearState();
  };

  const getQRImage = (data: object) => {
    // console.log(data);
    setLoading(true);
    axios
      .post("http://54.248.146.78:8081/stg/api/qr/create", data)
      .then((response) => {
        const imageUrl = response.data.qr_img;
        if (typeof imageUrl === "string") {
          setImage(imageUrl);
          clearFile();
          setJsonData("");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setError("Please enter correct data");
        } else {
          setError("Some thing wrong");
          console.log(typeof error.response.status);
        }
      });
  };

  const handleGenerateQr = () => {
    setImage("");
    clearState();
    if (dataType === "file" && file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          const data = JSON.parse(reader.result);
          getQRImage(data);
        } else {
          console.log(reader.result);
        }
      };
    }
    if (dataType === "text" && jsonData) {
      const data = JSON.parse(jsonData);
      getQRImage(data);
    }
  };

  const isValidJson = (text: any) => {
    if (typeof text !== "string") {
      return false;
    }
    try {
      var json = JSON.parse(text);
      return typeof json === "object";
    } catch (error) {
      return false;
    }
  };

  return (
    <section className="main">
      <h1 className="title">QR Code Generator</h1>
      <div className="option-container">
        <Button
          icon={<SnippetsOutlined />}
          className={`option-button ${dataType === "file" ? "selected" : ""} `}
          onClick={() => {
            setDataType("file");
            setJsonData("");
            clearState();
            setImage("");
          }}
        >
          File
        </Button>
        <Button
          icon={<FontSizeOutlined />}
          className={`option-button text-button ${
            dataType === "text" ? "selected" : ""
          } `}
          onClick={() => {
            setDataType("text");
            clearFile();
            clearState();
            setImage("");
          }}
        >
          Text
        </Button>
      </div>
      <div className="json-qr-container">
        <div className="json-container">
          {dataType === "file" ? (
            <h3 className="sub-title">Upload File</h3>
          ) : (
            <h3 className="sub-title">Input Text</h3>
          )}
          <div className="data-container">
            {success && (
              <p className={`message-text success`}>
                <img src={rightBlue} alt="icon" />
                {success}
              </p>
            )}
            {error && (
              <p className={`message-text error`}>
                <img src={crossRed} alt="icon" />
                {error}
              </p>
            )}
            {dataType === "text" && (
              <div className="text-container">
                <TextArea
                  className={`json-text-input ${error ? "error-class" : ""}`}
                  placeholder="Enter Json text here."
                  value={jsonData}
                  onChange={handleChange}
                />
              </div>
            )}
            {dataType === "file" && (
              <div className="file-container">
                {file && (
                  <div
                    className={`item-container ${error ? "error-class" : ""}`}
                  >
                    <img src={fileIconBlue} alt="icon" />
                    <p className="item-name">{file?.name}</p>
                  </div>
                )}
                {!file && (
                  <div className="input">
                    <label className="label" htmlFor="file-upload">
                      {/* <VerticalAlignTopOutlined /> */}
                      <img src={uploadIcon} alt="upload icon" />
                      <h3 className="main-label-text">Choose file to upload</h3>
                      <p className="additional-label-text">.json file only</p>
                    </label>
                    <input
                      className="file"
                      type="file"
                      name="jsonFile"
                      id="file-upload"
                      onChange={handleFile}
                      accept=".json"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="button-container">
            <Button
              disabled={readyToGen ? false : true}
              className={`qr-generate ${readyToGen ? "" : "disabled"}`}
              onClick={handleGenerateQr}
            >
              Generate QR Code
            </Button>
            <Button
              className={`clear ${file || jsonData ? "" : "disabled"}`}
              onClick={handleClear}
              disabled={file || jsonData ? false : true}
            >
              Clear
            </Button>
          </div>
        </div>
        <div className="qr-code-container">
          <div className="qr-code">
            <img
              className={`${image ? "" : "preview-img"}`}
              src={image ? image : qrImage}
              alt="qr-code"
            />
          </div>
          <div>
            <Button
              disabled={image ? false : true}
              className={`download-button ${image ? "" : "disabled"}`}
              onClick={handleDownload}
            >
              Download <VerticalAlignBottomOutlined />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Layout } from "../components/layout";
import { useState, useRef } from "react";
import { QRCode, Button, Input, Select, Space } from "antd";
import { QrReaderProps, QrReader } from "react-qr-reader";
import CButton from "../components/button";
import Icon from "../assets/icons/FileBlue.svg";

export function Home() {
  const [value, setValue] = useState("");
  const [textInputValue, setTextInputValue] = useState("");
  const downloadQRCode = () => {
    const canvas = document.getElementById("myqrcode")?.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = "QRCode.png";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const handleSubmit = (e: any) => {
    setValue(textInputValue);
    setTextInputValue("");
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setTextInputValue(e.target.value);
  };

  const [qrscan, setQrscan] = useState("No result");

  const handleScan = (data: any) => {
    if (data) {
      console.log(data);
      setQrscan(data);
    }
  };
  const handleError = (err: any) => {
    console.error(err);
  };
  return (
    <Layout>
      <div style={{ height: "500px" }}>
        <h1 style={{ textAlign: "center" }}>QR Code generation</h1>
        <br />
        <br />
        <form
          style={{ width: "80%", marginLeft: "20px" }}
          onSubmit={handleSubmit}
        >
          <Space.Compact style={{ width: "100%" }}>
            <Input
              name="text"
              placeholder="Please enter any text"
              value={textInputValue}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </Space.Compact>
        </form>
        <br />
        <br />

        <CButton position="right" icon={Icon}>
          File
        </CButton>

        {value && (
          <div id="myqrcode">
            <QRCode
              value={value}
              style={{
                marginBottom: 16,
              }}
            />
            <Button type="primary" onClick={downloadQRCode}>
              Download
            </Button>
            <br />
            <br />

            {/* <div style={{ marginTop: 30 }}>
              <QrReader
                scanDelay={300}
                onResult={handleScan}
                constraints={{ facingMode: "user" }}
                videoStyle={{ width: "50%", height: "200px" }}
              />
            </div> */}
          </div>
        )}
      </div>
    </Layout>
  );
}

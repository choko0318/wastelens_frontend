import React, { useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import axios from "axios";
import "./page2.css";
import logo2 from "./logo3.png";

function LensPage() {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    return imageSrc;
  }, [webcamRef]);

  const handleCaptureAndSubmit = async () => {
    const capturedImage = capture();
    if (capturedImage) {
      try {
        // 이미지를 서버에 전송할 때, base64 데이터를 파일로 변환하는 코드
        const byteString = atob(capturedImage.split(",")[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: "image/jpeg" });

        const formData = new FormData();
        formData.append("image", blob);

        const response = await axios.post(
          "http://localhost:8000/api/upload/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data.success) {
          navigate("/result");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div className="lens">
      <div className="contents">
        <div className="top">
          <img src={logo2} className="logo2" alt="logo" />
        </div>
        <div className="middle">
          <h2>쓰레기를 촬영해주세요.</h2>
          <div className="lensArea">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="webcam"
            />
          </div>
          <div className="cap_button">
            <button className="my-button" onClick={handleCaptureAndSubmit}>
              <span>결과 확인</span>
            </button>
          </div>
          <h2>Tip.</h2>
          <p>
            '가축이 먹을 수 있는지'를
            <br />
            생각해보면, 쓰레기를 분류할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function Page2() {
  return <LensPage />;
}

export default Page2;

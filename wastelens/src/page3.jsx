import React from "react";
import { useNavigate } from "react-router-dom";
import "./page3.css";
import logo2 from "./logo3.png";
function ResultPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="lens">
      <div className="contents">
        <div className="top">
          <img src={logo2} className="logo2" alt="logo" />
        </div>
        <div className="middle3">
          <div className="resultArea">
            <div>당신의 쓰레기</div>
            <div>
              <span className="typeText">닭 뼈다귀</span>는
            </div>
            <div>
              <span className="resultText">일반 쓰레기</span>입니다.
            </div>
          </div>
          <h2>Tip.</h2>
          <p>
            음식물 - 수박, 귤, 사과
            <br />
            일반 - 치킨뼈, 조개, 파인애플, 옥수수, 양파
          </p>
        </div>
        <div className="bottom">
          <button class="my-button" onClick={handleButtonClick}>
            <span>결과 확인하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
function Page3() {
  return <ResultPage />;
}

export default Page3;

import { useState } from "react";
import "./App.css";
// import InputForm from './components/InputForm'
// import MedalList from './components/MedalList'

function App() {
  const [medalData, setMedalData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });
  const [medalList, setMedalList] = useState([]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    // console.log("name", name);
    // console.log("value", value);
    setMedalData((prev) => {
      return { ...prev, [name]: name === "country" ? value : +value };
    });
  };

  const inputReset = () => {
    setMedalData({
      country: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  };
  const addListHandler = (e) => {
    e.preventDefault();

    const { country, gold, silver, bronze } = medalData;
    //+ alert 나라명 중복
    // const isContain = medalList.includes(country);
    // console.log("isContain", isContain);
    
    const newList = {
      country: country,
      gold: +gold,
      silver: +silver,
      bronze: +bronze,
    };
    console.log("newList => ", newList);
    setMedalList((prev) => {
      return [...prev, newList];
    });
    console.log("medalList =>", medalList);

    inputReset();
  };

  const deleteListHandler = (country) => {
    const deletedList = medalList.filter((list) => {
      return list.country !== country;
    });
    setMedalList(deletedList);
  };
  return (
    <>
      <h1>2024파리 올림픽</h1>
      <form onSubmit={addListHandler}>
        <label htmlFor="">국가명</label>
        <input
          type="text"
          id="country"
          name="country"
          value={medalData.country}
          onChange={(e) => inputHandler(e)}
          required
        />
        <label htmlFor="">금메달</label>
        <input
          type="number"
          id="gold"
          name="gold"
          value={medalData.gold}
          onChange={(event) => {
            inputHandler(event);
          }}
          required
        />
        <label htmlFor="">은메달</label>
        <input
          type="number"
          id="silver"
          name="silver"
          value={medalData.silver}
          onChange={(event) => {
            inputHandler(event);
          }}
          required
        />
        <label htmlFor="">동메달</label>
        <input
          type="number"
          id="bronze"
          name="bronze"
          value={medalData.bronze}
          onChange={(event) => {
            inputHandler(event);
          }}
          required
        />
        <button>국가추가</button>
        <button>업데이트</button>
      </form>
      <div>
        <ul>
          {medalList.map((list) => {
            return (
              <li key={list.country} style={{ display: "flex" }}>
                <p>국가명: {list.country} </p>
                <p>금메달: {list.gold} </p>
                <p>은메달: {list.silver} </p>
                <p>동메달: {list.bronze} </p>
                <button onClick={() => deleteListHandler(list.country)}>
                  삭제
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import Bill from "./Bill.jsx";
import FriendsList from "./FriendsList.jsx";
import Header from "./Header.jsx";

const friendsList = [
  {
    name: "ivan",
    expense: 20,
    payed: 5,
  },
  {
    name: "mark",
    expense: 15,
    payed: 5,
  },
  {
    name: "sarah",
    expense: 30,
    payed: 17,
  },
];

export default function App() {
  const [friends, setFriends] = useState(friendsList);
  const [bill, setBill] = useState(undefined);
  const [isOn, setIsOn] = useState(true);

  function handleToggleBillMenu() {
    if (!bill > 0) return;
    setIsOn(!isOn);
  }

  return (
    <div className="container">
      <Header>
        <h1>Welcome to eat-n-split</h1>
        <p>Quick way to calculate and split bill among your friends!</p>
      </Header>
      <div className="section">
        <div className="left-section">
          <Bill
            bill={bill}
            onSetBill={setBill}
            isOn={isOn}
            onHandleToggleBillMenu={handleToggleBillMenu}
          />
        </div>
        <div className="right-section">
          <Header>
            <h1 style={{ fontSize: "17px", textTransform: "none" }}>
              Friends:
            </h1>
          </Header>
          <button className="btn">Add friend</button>
          <FriendsList friends={friends} />
        </div>
      </div>
    </div>
  );
}

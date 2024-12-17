import { useState } from "react";
// import Bill from "./Bill.jsx";
import FriendsList from "./FriendsList.jsx";
import AddFriend from "./AddFriend.jsx";

const friendsList = [
  {
    name: "Ivan",
    balance: -12,
  },
  {
    name: "Mark",
    balance: 0,
  },
  {
    name: "Sarah",
    balance: 22,
  },
];

export default function App() {
  const [friends, setFriends] = useState(friendsList);
  // const [bill, setBill] = useState(undefined);
  // const [isOn, setIsOn] = useState(true);

  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
  }

  return (
    <div className="main-section">
      <div className="sidebar">
        <FriendsList friends={friends} />
        <AddFriend onHandleAddFriend={handleAddFriend} friends={friends} />
      </div>
    </div>
  );
}

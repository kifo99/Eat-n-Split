import { useState } from "react";

/* eslint-disable react/prop-types */
export default function AddFriend({ onHandleAddFriend }) {
  const [friend, setFriend] = useState({
    name: "",
    balance: 0,
  });

  return (
    <form className="form-control">
      <label>Friend name:</label>
      <input
        value={friend.name}
        onChange={(e) =>
          setFriend((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <button
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          onHandleAddFriend(friend);
        }}
      >
        Add Friend
      </button>
    </form>
  );
}

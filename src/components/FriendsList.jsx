/* eslint-disable react/prop-types */
import Friend from "./Friend";

export default function FriendsList({ friends }) {
  return (
    <ul className="friends-list">
      {friends.map((friend) => (
        <Friend name={friend.name} balance={friend.balance} key={friend.name} />
      ))}
    </ul>
  );
}

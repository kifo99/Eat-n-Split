/* eslint-disable react/prop-types */
export default function Friend({ name, balance }) {
  return (
    <li className="list-item">
      <div>
        <h3>{name} </h3>
        {balance < 0 && (
          <p className="red">
            You owen {name} {Math.abs(balance)}.
          </p>
        )}
        {balance > 0 && (
          <p className="green">
            {name} owens you {Math.abs(balance)}.
          </p>
        )}
        {balance === 0 && <p>You and{name} are even.</p>}
      </div>

      <button className="btn">Select</button>
    </li>
  );
}

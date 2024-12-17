/* eslint-disable react/prop-types */
export default function Friend({ name, expense, payed }) {
  return (
    <li className="list-item">
      <p>Name: {name} </p>
      <p>Expense: {expense}$ </p>
      <p>Payed: {payed}$ </p>
    </li>
  );
}

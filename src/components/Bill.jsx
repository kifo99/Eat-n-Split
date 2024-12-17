/* eslint-disable react/prop-types */
export default function Bill({
  bill,
  onSetBill,
  isOn,
  onHandleToggleBillMenu,
}) {
  return (
    <form className={isOn ? "form-control" : "hidden"}>
      <input
        type="number"
        step="any"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
        placeholder="Bill amount"
      />
      <button
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          onHandleToggleBillMenu();
        }}
      >
        Submit bill
      </button>
    </form>
  );
}

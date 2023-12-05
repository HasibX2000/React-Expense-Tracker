export default function BalanceArea() {
  return (
    <div className="balance-area">
      <div>
        <h4 className="action-name">INCOME</h4>
        <h3 className="action-income">$300</h3>
      </div>
      <div className="border">|</div>
      <div>
        <h4 className="action-name">EXPENSE</h4>
        <h3 className="action-expense">$100</h3>
      </div>
    </div>
  );
}

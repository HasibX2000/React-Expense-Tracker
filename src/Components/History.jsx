import HistoryList from './HistoryList';

export default function History() {
  return (
    <div className="history">
      <h2 className="title">Transaction History</h2>
      <hr className="hr" />
      <HistoryList />
    </div>
  );
}

import Balance from './Balance';
import BalanceArea from './BalanceArea';
import Footer from './Footer';
import History from './History';
import Transaction from './Transaction';

export default function MainArea() {
  return (
    <div className="main">
      <Balance />
      <BalanceArea />
      <Transaction />
      <History />
      <Footer />
    </div>
  );
}

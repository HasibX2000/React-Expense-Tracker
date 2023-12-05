import Button from './Button';
import Input from './Input';
import Select from './Select';

export default function Transaction() {
  return (
    <form className="transaction">
      <h2 className="title">Add New Transaction</h2>
      <hr className="hr" />
      <Input type="text" placeholder="Enter Purpose" />
      <Input type="number" placeholder="Enter Amount" />

      <Select />
      <Button />
    </form>
  );
}

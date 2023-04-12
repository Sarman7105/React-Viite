import "./index.scss";
import { Space, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/counter/actions";
import { IState } from "../../type";


const Counter = () => {
  const count = useSelector((state: IState) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment(5));
  };
  const handleDecrement = () => {
    dispatch(decrement(5));
  };
  return (
    <div className="counter-container">
      <h1 className="counter">{count}</h1>
      <div className="button-group">
        <Space wrap>
          <Button type="primary" size="large" onClick={handleIncrement}>
            Increment
          </Button>
          <Button type="primary" size="large" danger onClick={handleDecrement}>
            Decrement
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Counter;

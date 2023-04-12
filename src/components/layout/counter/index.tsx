import "./index.scss";
import { Dispatch } from "react";
import { Space, Button } from "antd";
import { connect } from "react-redux";
import { decrement, increment } from "../../../redux/counter/actions";
interface IState {
  value: number;
}
interface ICounterDispatch {
  type: string;
  payload: number;
}
interface ICounterProps {
  count: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
}
const Counter = ({ count, increment, decrement }: ICounterProps) => {
  return (
    <div className="counter-container">
      <h1 className="counter">{count}</h1>
      <div className="button-group">
        <Space wrap>
          <Button type="primary" size="large" onClick={() => increment(5)}>
            Increment
          </Button>
          <Button
            type="primary"
            size="large"
            danger
            onClick={() => decrement(2)}
          >
            Decrement
          </Button>
        </Space>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    count: state.value,
  };
};
const mapDispatchToProps = (dispatch: Dispatch<ICounterDispatch>) => {
  return {
    increment: (value: number) => dispatch(increment(value)),
    decrement: (value: number) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

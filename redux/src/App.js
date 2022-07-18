import { connect } from "react-redux";
import { incrementCount, decrementCount, reset } from "./redux/action";
import './App.css';

function App({ count, myName, decreaseFunction, incrementFunction, reset }) {
  return (
    <div className="App">
      <h1>{count}</h1>
      <br />
      <button onClick={() => decreaseFunction()}>DEC</button>
      <button onClick={() => reset()}>RESET</button>
      <button onClick={() => incrementFunction()}>INC</button>
      <h1>Hello CodeSandbox</h1>
      {myName}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    myName: state.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decreaseFunction: (count) => dispatch(decrementCount(count)),
    incrementFunction: (count) => dispatch(incrementCount(count)),
    reset: () => dispatch(reset())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

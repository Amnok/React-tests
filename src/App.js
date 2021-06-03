import './App.css';
import Wrapper from './context/wrapper';
import Normal from './custom-hooks/normal';
import WrappingComponent from './error-boundary/wrapping-component';
import Component1 from './hocs-test/component1';
import Component2 from './hocs-test/component2';
import withLoader from './hocs-test/withLoader';
import UseReducerTest from './hooks/useReducerTest';
import Multi from './state-tests/multi';
import ClassTick from './tick-tick/classTick';
import FuntionalTick from './tick-tick/funtionalTick';

function App() {
  return (
    <div>
      <UseReducerTest/>
    </div>
  );
}

export default App;

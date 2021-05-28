import './App.css';
import Normal from './custom-hooks/normal';
import Component1 from './hocs-test/component1';
import Component2 from './hocs-test/component2';
import withLoader from './hocs-test/withLoader';
import Multi from './state-tests/multi';
import ClassTick from './tick-tick/classTick';
import FuntionalTick from './tick-tick/funtionalTick';

function App() {
  return (
    <div>
    <Normal/>
    </div>
  );
}

export default App;

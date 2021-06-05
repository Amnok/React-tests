import './App.css';
import Wrapper from './context/wrapper';
import Normal from './custom-hooks/normal';
import WrappingComponent from './error-boundary/wrapping-component';
import AllAboutFormik from './formik/all-about-formik';
import BasicForm from './formik/basic-form';
import FormWithYup from './formik/form-with-yup';
import Component1 from './hocs-test/component1';
import Component2 from './hocs-test/component2';
import withLoader from './hocs-test/withLoader';
import UseReducerTest from './hooks/useReducerTest';
import Multi from './state-tests/multi';
import ClassTick from './tick-tick/classTick';
import FuntionalTick from './tick-tick/funtionalTick';

function App() {
  return (
    <div className='container'>
      <AllAboutFormik/>
    </div>
  );
}

export default App;

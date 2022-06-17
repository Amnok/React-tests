import React from 'react';
import { Route, Routes } from 'react-router';
import Hooks from './index';
import UseStateHook from './useStateHook';
import UseEffectHook from './useEffectHook';
import UseCallbackHook from './useCallbackHook';
import UseContextHook from './useContextHook';
import UseMemoHook from './useMemoHook';
import UseReducerHook from './useReducerHook';
import UseRefHook from './useRefHook';
import HooksAppRouter from './search-user-app/hooks-app-router';
import HooksTest from './HooksTest';
import UseTransition from './useTransition';

export default function HooksRouter() {
  return (
    <div>
      <Routes>
        <Route path="/use-state" element={<UseStateHook />}></Route>
        <Route path="/use-effect" element={<UseEffectHook />}></Route>
        <Route path="/use-callback" element={<UseCallbackHook />}></Route>
        <Route path="/use-context" element={<UseContextHook />}></Route>
        <Route path="/use-memo" element={<UseMemoHook />}></Route>
        <Route path="/use-reducer" element={<UseReducerHook />}></Route>
        <Route path="/use-ref" element={<UseRefHook />}></Route>
        <Route path="/use-transition" element={<UseTransition />}></Route>
        <Route path="/hooks-test" element={<HooksTest />}></Route>
        <Route path="/hooks-app/*" element={<HooksAppRouter />}></Route>
        <Route path="/" element={<Hooks />}></Route>
      </Routes>
    </div>
  );
}

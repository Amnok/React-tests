import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Hooks from './index';
import Users from './Users';
import Home from './Home';
import Posts from './posts';
import Comments from './Comments';

export default function HooksAppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/comments" element={<Comments />}></Route>
      </Routes>
    </div>
  );
}

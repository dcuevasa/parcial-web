import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from './components/UserInfo';
import Images from './components/Images';
import UserView from './components/UserView';

function App() {
  return (
    <div className="App">
      {/* <UserInfo/> */}
      <Images/>
      <BrowserRouter>
       <Routes>
        <Route path="/"/>
         <Route path="/usuario" element={<UserView />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

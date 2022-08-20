import React, { Component } from 'react';
import { ReactDOM } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Header from "./Includes/Header"
import Footer from "./Includes/Footer"
import Main from "./Main"
import Customer from './Components/Board/Customer';
import QuickMenu from './Includes/QuickMenu';
import FAQ from './Components/Board/FAQ';
import Announcement from './Components/Board/Announcement';
import Event from './Components/Board/Event';
import Banner from './Components/Board/Banner';
import Advertisement from './Components/Board/Advertisement';
import Popup from './Components/Board/Popup';
import Message from './Components/Board/Message';
import Shopproduct from './Components/Board/ShopProduct';
import DistManagement from './Components/DIst/DistManagement';
import Dividend from './Components/DIst/Dividend';
import Betting from './Components/Betting/Betting';
import BetCancel from './Components/Betting/BetCancel';
import MiniBet from './Components/Betting/MiniBet';
import CasinoBet from './Components/Betting/CasinoBet';
import AutoGame from './Components/Game/AutoGame';
import WaitGame from './Components/Game/WaitGame';
import ProgressGame from './Components/Game/ProgressGame';
import ModifyResult from './Components/Game/ModifyResult';
import WaitCalculate from './Components/Game/WaitCalculate';
import EndGame from './Components/Game/EndGame';
import Bonus from './Components/Game/Bonus'
import MiniGame from './Components/Game/MiniGame';
import IntergrationGame from './Components/Game/IntergrationGame';
import ExcelGame from './Components/Game/ExcelGame';
import Market from './Components/Game/Market';
import Charge from './Components/Account/Charge';
import Cash from './Components/Account/Cash';
import Exchange from './Components/Account/Exchange';
import Point from './Components/Account/Point';
import CasinoCharge from './Components/Account/CasinoCharge';
import CasinoExchange from './Components/Account/CasinoExchange';
import SalesScript from './Components/Account/SalesScript';
import SalesSport from './Components/Account/SalesSports';
import SalesMinigame from './Components/Account/SalesMinigame';
import SalesCasino from './Components/Account/SalesCasino';
import SalesStats from './Components/Account/SalesStats';
import TeamManagement from './Components/League/TeamManagement';
import LeagueManagement from './Components/League/LeagueManagement';
import User from './Components/User/User';
import Level from './Components/User/Level';
import ModifyUser from './Components/User/ModifyUser';
import LoginLog from './Components/User/LoginLog';
import BlockLog from './Components/User/BlockLog';
import UserCode from './Components/User/UserCode';
import JoinStats from './Components/User/JoinStats';
import Basic from './Components/Setting/Basic';
import Join from './Components/Setting/Join';
import GameRule from './Components/Setting/GameRule';
import MiniRule from './Components/Setting/MiniRule';
import BettingRule from './Components/Setting/BettingRule';
import Alarm from './Components/Setting/Alarm';
import Chatting from './Components/Setting/Chatting';
import Terms from './Components/Setting/Terms';



function App() {
  return (
    <>
      <BrowserRouter>
        <QuickMenu></QuickMenu>
        <Header></Header>
        <Routes>
          {/* 메인페이지 */}
          <Route path="/" element={<Main />}></Route>
          {/* 게시물관리 */}
          <Route path="/Customer" element={<Customer />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route path="/Announcement" element={<Announcement />}></Route>
          <Route path="/Event" element={<Event />}></Route>
          <Route path="/Banner" element={<Banner />}></Route>
          <Route path="/Advertisement" element={<Advertisement />}></Route>
          <Route path="/Popup" element={<Popup />}></Route>
          <Route path="/Message" element={<Message />}></Route>
          <Route path="/ShopProduct" element={<Shopproduct />}></Route>
          {/* 총판관리 */}
          <Route path="/DistManagement" element={<DistManagement />}></Route>
          <Route path="/Dividend" element={<Dividend />}></Route>
          {/* 배팅관리 */}
          <Route path='/Betting' element={<Betting />}></Route>
          <Route path='/BetCancel' element={<BetCancel />}></Route>
          <Route path='/MiniBet' element={<MiniBet />}></Route>
          <Route path='/CasinoBet' element={<CasinoBet />}></Route>
          {/* 게임관리 */}
          <Route path='/AutoGame' element={<AutoGame />}></Route>
          <Route path='/WaitGame' element={<WaitGame />}></Route>
          <Route path='/ProgressGame' element={<ProgressGame />}></Route>
          <Route path='/ModifyResult' element={<ModifyResult />}></Route>
          <Route path='/WaitCalculate' element={<WaitCalculate />}></Route>
          <Route path='/EndGame' element={<EndGame />}></Route>
          <Route path='/Bonus' element={<Bonus />}></Route>
          <Route path='/MiniGame' element={<MiniGame />}></Route>
          <Route path='/IntergrationGame' element={<IntergrationGame />}></Route>
          <Route path='ExcelGame' element={<ExcelGame />}></Route>
          <Route path='/Market' element={<Market />}></Route>
          {/* 입출금관리 */}
          <Route path='/Charge' element={<Charge />}></Route>
          <Route path='/Cash' element={<Cash />}></Route>
          <Route path='/Exchange' element={<Exchange />}></Route>
          <Route path='/Point' element={<Point />}></Route>
          <Route path='/CasinoCharge' element={<CasinoCharge />}></Route>
          <Route path='/CasinoExchange' element={<CasinoExchange />}></Route>
          <Route path='/SalesScript' element={<SalesScript />}></Route>
          <Route path='/SalesSports' element={<SalesSport />}></Route>
          <Route path='/SalesMinigame' element={<SalesMinigame />}></Route>
          <Route path='/SalesCasino' element={<SalesCasino />}></Route>
          <Route path='/SalesStats' element={<SalesStats />}></Route>
          {/* 팀&리그관리 */}
          <Route path='/TeamManagement' element={<TeamManagement />}></Route>
          <Route path='/LeagueManagement' element={<LeagueManagement />}></Route>
          {/* 유저관리 */}
          <Route path='/User' element={<User />}></Route>
          <Route path='/Level' element={<Level />}></Route>
          <Route path='/ModifyUser' element={<ModifyUser />}></Route>
          <Route path='/LoginLog' element={<LoginLog />}></Route>
          <Route path='/BlockLog' element={<BlockLog />}></Route>
          <Route path='/UserCode' element={<UserCode />}></Route>
          <Route path='/JoinStats' element={<JoinStats />}></Route>
          {/* 환경설정 */}
          <Route path='/Basic' element={<Basic />}></Route>
          <Route path='/Join' element={<Join />}></Route>
          <Route path='/GameRule' element={<GameRule />}></Route>
          <Route path='/MiniRule' element={<MiniRule />}></Route>
          <Route path='/BettingRule' element={<BettingRule />}></Route>
          <Route path='/Alarm' element={<Alarm />}></Route>
          <Route path='/Chatting' element={<Chatting />}></Route>
          <Route path='/Terms' element={<Terms />}></Route>
          
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState } from "react";
import Loading from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
import CurrentUser from '../Components/Popup/CurrentUser';

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
    <div className='sticky-top'>
      <header className="navbar navbar-expand-md navbar-dark sticky-top d-print-none">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <Link to="/">
              <img src={Loading} height={32} alt="LOGO" className="navbar-brand-image" style={{ height: '15px' }} />
            </Link>
          </h1>
          <div className="navbar-nav flex-row order-md-last">
            <a className="sitehome-btn btn btn-sm" id="open-currentsessions-modal-btn" onClick={handleShow}>현재접속자</a>
            <a href="http://miniplay2.com" className="sitehome-btn btn btn-sm">사이트홈</a>
            {/* <!-- <div className="nav-item dropdown d-none d-md-flex me-3">
                <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" tabindex="-1" aria-label="Show notifications">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                                <span className="badge bg-red"></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-card">
                                    <div className="card">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet consectetur exercitationem fugiat in ipsa ipsum, natus odio quidem quod repudiandae sapiente. Amet debitis et magni maxime necessitatibus ullam.
                                        </div>
                                    </div>
                                </div>
                            </div> --> */}
            <div className="nav-item dropdown">
              <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                <div className="d-none d-xl-block ps-2" style={{ textalign: 'right' }}>
                  <div style={{ fontweight: 'bold', color: '#eeeeee', paddingbottom: '2px' }}><span>tuser1</span> (관리자)</div>
                  <div className="mt-1 small text-muted">접속하신 아이피는 <span>180.191.237.102</span> 입니다.</div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                {/* <!--                        <a href="#" className="dropdown-item">Set status</a>-->
<!--                        <a href="#" className="dropdown-item">Profile & account</a>-->
<!--                        <a href="#" className="dropdown-item">Feedback</a>-->
<!--                        <div className="dropdown-divider"></div>-->
<!--                        <a href="#" className="dropdown-item">Settings</a>--> */}
                <form method="post" action="/logout">
                  <input type="hidden" name="_csrf" value="9c9ad875-e8e9-4dd2-b651-b1f42b1a1df3" />
                  <button className="dropdown-item" type="submit">Logout</button>
                </form>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
              <ul className="navbar-nav">
                <li className="nav-item" data-target=".cs">
                  <Link className="nav-link" to="/Customer">
                    {/* <!--<span className="nav-link-icon d-md-none d-lg-inline-block">
                                    <i className="ti ti-messages"></i>
                                </span>--> */}
                    <span className="nav-link-title">
                      게시물관리
                    </span>
                  </Link>
                </li>
                <li className="nav-item" data-target=".partner">
                  <Link className="nav-link" to="/DistManagement">
                    {/* <!--<span className="nav-link-icon d-md-none d-lg-inline-block">
                                    <i className="ti ti-affiliate"></i>
                                </span>--> */}
                    <span className="nav-link-title">
                      총판관리
                    </span>
                  </Link>
                </li>
                <li className="nav-item" data-target=".bet">
                  <Link className="nav-link" to="/Betting">
                    {/* <!--<span className="nav-link-icon d-md-none d-lg-inline-block">
                                    <i className="ti ti-columns"></i>
                                </span>--> */}
                    <span className="nav-link-title">
                      배팅관리
                    </span>
                  </Link>
                </li>
                <li className="nav-item" data-target=".fixture">
                  <Link className="nav-link" to="/AutoGame">
                    {/* <!--<span className="nav-link-icon d-md-none d-lg-inline-block">
                                    <i className="ti ti-dice"></i>
                                </span>--> */}
                    <span className="nav-link-title">
                      게임관리
                    </span>
                  </Link>
                </li>
                <li className="nav-item" data-target=".transaction">
                  <Link className="nav-link" to="/Charge">
                    {/* <!--<span className="nav-link-icon d-md-none d-lg-inline-block">
                                    <i className="ti ti-exchange"></i>
                                </span>--> */}
                    <span className="nav-link-title">
                      입출금관리
                    </span>
                  </Link>
                </li>
                <li className="nav-item" data-target=".team">
                  <Link className="nav-link" to="/TeamManagement">
                    {/* <!--<span className="nav-link-icon d-md-none d-lg-inline-block">
                                    <i className="ti ti-trophy"></i>
                                </span>--> */}
                    <span className="nav-link-title">
                      팀&리그관리
                    </span>
                  </Link>
                </li>
                <li className="nav-item" data-target=".user">
                  <Link className="nav-link" to="/User">
                    {/* <!--<span className="nav-link-icon d-md-none d-lg-inline-block">
                                    <i className="ti ti-users"></i>
                                </span>--> */}
                    <span className="nav-link-title">
                      회원관리
                    </span>
                  </Link>
                </li>
                <li className="nav-item" data-target=".setting">
                  <Link className="nav-link" to="/Basic">
                    {/* <!--<span className="nav-link-icon d-md-none d-lg-inline-block">
                                    <i className="ti ti-users"></i>
                                </span>--> */}
                    <span className="nav-link-title">
                      환경설정
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="navbar-expand-md setting" data-accepts="/|/setting" style={{ display: 'none' }}>
        <div className="collapse navbar-collapse">
          <div className="navbar navbar-light">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link className="nav-link" to="/Basic">
                    <span className="nav-link-title">
                      기본환경 설정
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Join">
                    <span className="nav-link-title">
                      회원가입 설정
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/GameRule">
                    <span className="nav-link-title">
                      게임룰 설정
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/MiniRule">
                    <span className="nav-link-title">
                      미니게임룰 설정
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/BettingRule">
                    <span className="nav-link-title">
                      배팅 설정
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Alarm">
                    <span className="nav-link-title">
                      알람 설정
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Chatting">
                    <span className="nav-link-title">
                      채팅관리
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Terms">
                    <span className="nav-link-title">
                      약관설정
                    </span>
                  </Link>
                </li>

                {/* <!--                        <li className="nav-item">-->
<!--                            <a className="nav-link" href="/setting/privatechat" th:classappend="${currentPath.toLowerCase()} == '/setting/privatechat'? 'active'">-->
<!--                                <span className="nav-link-title">-->
<!--                                    1:1 문의-->
<!--                                </span>-->
<!--                            </a>-->
<!--                        </li>--> */}
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="navbar-expand-md cs" data-accepts="/cs|/event|/faq|/announcement|/banner|/advertisement|/popup|/privatemessage|/shopproduct" style={{ display: 'none' }}>
        <div className="collapse navbar-collapse">
          <div className="navbar navbar-light">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/Customer">
                    <span className="nav-link-title">
                      고객센터
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/FAQ">
                    <span className="nav-link-title">
                      고객센터-FAQ
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Announcement">
                    <span className="nav-link-title">
                      공지사항등록
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Event">
                    <span className="nav-link-title">
                      이벤트관리
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Banner">
                    <span className="nav-link-title">
                      배너관리
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Advertisement">
                    <span className="nav-link-title">
                      광고관리
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Popup">
                    <span className="nav-link-title">
                      팝업관리
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Message">
                    <span className="nav-link-title">
                      쪽지관리
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ShopProduct">
                    <span className="nav-link-title">
                      마켓관리
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-expand-md partner" data-accepts="/partner" style={{display: 'none'}}>
        <div className="collapse navbar-collapse">
            <div className="navbar navbar-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/DistManagement">
                                <span className="nav-link-title">
                                    총판관리
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Dividend">
                                <span className="nav-link-title">
                                    총판배당금관리
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="navbar-expand-md bet" data-accepts="/bet" style={{display: 'none'}}>
        <div className="collapse navbar-collapse">
            <div className="navbar navbar-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/Betting">
                                <span className="nav-link-title">
                                    배팅관리
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/BetCancel">
                                <span className="nav-link-title">
                                    배팅취소내역
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/MiniBet">
                                <span className="nav-link-title">
                                    미니게임배팅관리
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/CasinoBet">
                                <span className="nav-link-title">
                                    카지노배팅관리
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="navbar-expand-md transaction" data-accepts="/transaction" style={{display: 'none'}}>
        <div className="collapse navbar-collapse">
            <div className="navbar navbar-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">

                        {/* <!--
                        <li className="nav-item">
                            <a className="nav-link" href="/transaction/exchanges" th:classappend="${currentPath.toLowerCase()} == '/transaction/exchanges'? 'active'">
                                <span className="nav-link-title">
                                    환전관리
                                </span>
                            </a>
                        </li>
                        --> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Charge">
                                <span className="nav-link-title">
                                    충전관리
                                </span>
                            </Link>
                        </li>
                        
                            <li className="nav-item ">
                                <Link className="nav-link" to="/Cash">
                                    <span className="nav-link-title">
                                        캐쉬관리
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/Exchange">
                                    <span className="nav-link-title">
                                        환전관리
                                    </span>
                                </Link>
                            </li>

                        
                        

                        <li className="nav-item">
                            <Link className="nav-link" to="/Point">
                                <span className="nav-link-title">
                                    포인트관리
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/CasinoCharge">
                                <span className="nav-link-title">
                                    카지노충전신청
                                </span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/CasinoExchange">
                                <span className="nav-link-title">
                                    카지노환전신청
                                </span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/SalesScript">
                                <span className="nav-link-title">
                                    매출현황(대본별)
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SalesSports">
                                <span className="nav-link-title">
                                    매출현황(스포츠)
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SalesMinigame">
                                <span className="nav-link-title">
                                    매출현황(미니게임)
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SalesCasino">
                                <span className="nav-link-title">
                                    매출현황(카지노)
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SalesStats">
                                <span className="nav-link-title">
                                    매출현황(통계)
                                </span>
                            </Link>
                        </li>
                        {/* <!--
                        <li className="nav-item">
                            <a className="nav-link" href="/transaction/partnertransactionsdaily" th:classappend="${currentPath.toLowerCase()} == '/transaction/partnertransactionsdaily'? 'active'">
                                <span className="nav-link-title">
                                    총판출금(일별)
                                </span>
                            </a>
                        </li>
                        --> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="navbar-expand-md fixture" data-accepts="/fixture" style={{display: 'none'}}>
        <div className="collapse navbar-collapse">
            <div className="navbar navbar-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/AutoGame">
                                <span className="nav-link-title">
                                     자동경기등록
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/WaitGame">
                                <span className="nav-link-title">
                                    경기대기
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ProgressGame">
                                <span className="nav-link-title">
                                    진행중경기 밋 결과입력
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ModifyResult">
                                <span className="nav-link-title">
                                    결과수정내역
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/WaitCalculate">
                                <span className="nav-link-title">
                                    정산처리대기
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/EndGame">
                                <span className="nav-link-title">
                                    종료된경기
                                </span>
                            </Link>
                        </li>

{/* <!--                        <li className="nav-item">-->
<!--                            <a className="nav-link" href="/fixture/special" th:classappend="${currentPath.toLowerCase()} == '/fixture/special'? 'active'">-->
<!--                                <span className="nav-link-title">-->
<!--                                    스페셜-->
<!--                                </span>-->
<!--                            </a>-->
<!--                        </li>--> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Bonus">
                                <span className="nav-link-title">
                                    보너스
                                </span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/MiniGame">
                                <span className="nav-link-title">
                                    미니게임 결과입력
                                </span>
                            </Link>
                        </li>

                        <li className="nav-item ">
                            <Link className="nav-link" to="/IntergrationGame">
                                <span className="nav-link-title">
                                    통합경기등록
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ExcelGame">
                                <span className="nav-link-title">
                                    엑셀경기등록
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Market">
                                <span className="nav-link-title">
                                    마켓
                                </span>
                            </Link>
                        </li>

                        {/* <!--
                        <li className="nav-item">
                            <a className="nav-link" href="/fixture/inplay" th:classappend="${currentPath.toLowerCase()} == '/fixture/inplay'? 'active'">
                                <span className="nav-link-title">
                                    라이브
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/fixture/announcement" th:classappend="${currentPath.toLowerCase()} == '/fixture/announcment'? 'active'">
                                <span className="nav-link-title">
                                    공지
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/fixture/deleted" th:classappend="${currentPath.toLowerCase()} == '/fixture/deleted'? 'active'">
                                <span className="nav-link-title">
                                    삭제된경기
                                </span>
                            </a>
                        </li>
                        --> */}

                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="navbar-expand-md team" data-accepts="/team|/league" style={{display: 'none'}}>
        <div className="collapse navbar-collapse">
            <div className="navbar navbar-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/TeamManagement">
                                <span className="nav-link-title">
                                    팀관리
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/LeagueManagement">
                                <span className="nav-link-title">
                                    리그관리
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="navbar-expand-md user" data-accepts="/user" style={{display: 'none'}}>
        <div className="collapse navbar-collapse">
            <div className="navbar navbar-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/User">
                                <span className="nav-link-title">
                                    회원관리
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Level">
                                <span className="nav-link-title">
                                    레벨권한관리
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ModifyUser">
                                <span className="nav-link-title">
                                    회원수정내역
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/LoginLog">
                                <span className="nav-link-title">
                                    로그인내역
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/BlockLog">
                                <span className="nav-link-title">
                                    차단내역
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/UserCode">
                                <span className="nav-link-title">
                                    회원가입코드발급
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/JoinStats">
                                <span className="nav-link-title">
                                    가입통계
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<CurrentUser show={show} handleClose={handleClose} />
    </>
  );
};

export default Header
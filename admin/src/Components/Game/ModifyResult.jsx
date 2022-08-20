import React from "react";

const ModifyResult = () => {
  return (
    <>
        <section className="page-wrapper">
            <div className="alarms-section">
                <a href="/transaction/currency.asp" className="item">충전신청(<span className="text-success font-weight-bold" id="a_chargeRequests">0</span>)</a>
                <a href="/transaction/exchange.asp" className="item">환전신청(<span className="text-success font-weight-bold" id="a_exchangeRequests">0</span>)</a>
                <a href="#" className="item">카지노충전신청(<span className="text-success font-weight-bold" id="a_casinoChargeRequests">0</span>)</a>
                <a href="#" className="item">카지노환전신청(<span className="text-success font-weight-bold" id="a_casinoExchangeRequests">0</span>)</a>
                <a href="/cs/list.asp" className="item">1:1문의(<span className="text-success font-weight-bold" id="a_oneToOneRequests">0</span>)</a>
            </div>
      <div className="container-fluid">
        {/* <!-- Page title --> */}
        <div className="page-header d-print-none">
          <div className="row align-items-center">
            <div className="col">
              {/* <!-- Page pre-title --> */}
              {/* <!--<div className="page-pretitle">
                            관리자메인 > 회원관리
                        </div>--> */}
              <h2 className="page-title">결과수정내역</h2>
            </div>
            <div className="col-auto ms-auto d-print-none">
              <div className="btn-list">
                <form action="" method="get" className="d-flex">
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx={10} cy={10} r={7} />
                        <line x1={21} y1={21} x2={15} y2={15} />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="search"
                      className="form-control search-input"
                      placeholder="검색…"
                      aria-label="검색"
                      defaultValue=""
                    />
                  </div>
                  <button type="submit" className="btn btn-primary ms-2">
                    검색
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="total">
            총 <span>96</span>건
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="container-fluid">
          <div className="row row-deck row-cards">
            <div className="col-12">
              <div className="card">
                <div className="table-responsive">
                  <table className="table card-table table-vcenter text-nowrap datatable">
                    <thead>
                      <tr>
                        <th className="w-1">
                          <a className="sort-item" data-sort="id">
                            번호
                            <i className="ti ti-chevron-up"></i>
                          </a>
                        </th>
                        <th className="w-1">
                          <a className="sort-item" data-sort="user.userName">
                            유저명
                          </a>
                        </th>
                        <th>경기#</th>
                        <th style={{textalign: 'right'}}>홈팀</th>
                        <th style={{textalign: 'center'}}>스코어</th>
                        <th style={{textalign: 'left'}}>원정팀</th>
                        <th>
                          <a className="sort-item" data-sort="ipAddress">
                            IP
                          </a>
                        </th>
                        <th>
                          <a className="sort-item" data-sort="created">
                            생성일
                          </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>320</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="320"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="320"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="320"
                          data-changedesc='{"id":8290220,"providerId":8,"startDate":1646406000000,"sportId":6046,"sportName":"축구","locationId":114,"locationName":"몰디브","leagueId":15185,"leagueName":"Dhivehi Premier League","homeTeamId":52339063,"homeTeamName":"Green Streets","homeTeamScore":1,"awayTeamId":52531920,"awayTeamName":"Super United Sports","awayTeamScore":1,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":20,"status":3,"lastUpdate":1646318546000,"localUpdateDate":1646326041000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="320"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>2405:4800:52a7:3efb:54a5:c52:a798:9f2</td>
                        <td>2022-03-04 01:51:06</td>
                      </tr>
                      <tr>
                        <td>317</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="317"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="317"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="317"
                          data-changedesc='{"id":8274187,"providerId":8,"startDate":1646179200000,"sportId":35232,"sportName":"아이스 하키","locationId":4,"locationName":"미국","leagueId":19,"leagueName":"NHL","homeTeamId":5551,"homeTeamName":"콜롬버스 블루 자켓츠","homeTeamScore":0,"awayTeamId":5535,"awayTeamName":"뉴저지 데빌즈","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":1,"status":1,"lastUpdate":1645949718000,"localUpdateDate":1646169301000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="317"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>221.151.212.163</td>
                        <td>2022-03-02 06:19:09</td>
                      </tr>
                      <tr>
                        <td>316</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="316"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="316"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="316"
                          data-changedesc='{"id":8274187,"providerId":8,"startDate":1646179200000,"sportId":35232,"sportName":"아이스 하키","locationId":4,"locationName":"미국","leagueId":19,"leagueName":"NHL","homeTeamId":5551,"homeTeamName":"콜롬버스 블루 자켓츠","homeTeamScore":0,"awayTeamId":5535,"awayTeamName":"뉴저지 데빌즈","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":1,"status":-20,"lastUpdate":1645949718000,"localUpdateDate":1646169301000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="316"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>221.151.212.163</td>
                        <td>2022-03-02 06:18:56</td>
                      </tr>
                      <tr>
                        <td>315</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="315"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="315"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="315"
                          data-changedesc='{"id":8274187,"providerId":8,"startDate":1646179200000,"sportId":35232,"sportName":"아이스 하키","locationId":4,"locationName":"미국","leagueId":19,"leagueName":"NHL","homeTeamId":5551,"homeTeamName":"콜롬버스 블루 자켓츠","homeTeamScore":0,"awayTeamId":5535,"awayTeamName":"뉴저지 데빌즈","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":1,"status":0,"lastUpdate":1645949718000,"localUpdateDate":1646169301000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="315"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>221.151.212.163</td>
                        <td>2022-03-02 06:18:33</td>
                      </tr>
                      <tr>
                        <td>314</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="314"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="314"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="314"
                          data-changedesc='{"id":8262405,"providerId":8,"startDate":1646036100000,"sportId":6046,"sportName":"축구","locationId":58,"locationName":"인도네시아","leagueId":20570,"leagueName":"리가 1","homeTeamId":52324466,"homeTeamName":"PSIS 세마랑","homeTeamScore":0,"awayTeamId":52262007,"awayTeamName":"티라-페르시카보","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":20,"status":2,"lastUpdate":1645669086000,"localUpdateDate":1646035690000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="314"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 17:08:31</td>
                      </tr>
                      <tr>
                        <td>313</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="313"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="313"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="313"
                          data-changedesc='{"id":8276248,"providerId":8,"startDate":1646033400000,"sportId":48242,"sportName":"농구","locationId":42,"locationName":"그루지아","leagueId":24664,"leagueName":"A League","homeTeamId":52946032,"homeTeamName":"BC Margveti","homeTeamScore":30,"awayTeamId":52340559,"awayTeamName":"Mgzavrebi-Armia","awayTeamScore":20,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":2,"lastUpdate":1645984183000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="313"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:56:47</td>
                      </tr>
                      <tr>
                        <td>312</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="312"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="312"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="312"
                          data-changedesc='{"id":8276248,"providerId":8,"startDate":1646033400000,"sportId":48242,"sportName":"농구","locationId":42,"locationName":"그루지아","leagueId":24664,"leagueName":"A League","homeTeamId":52946032,"homeTeamName":"BC Margveti","homeTeamScore":30,"awayTeamId":52340559,"awayTeamName":"Mgzavrebi-Armia","awayTeamScore":20,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":2,"lastUpdate":1645984183000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="312"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:56:45</td>
                      </tr>
                      <tr>
                        <td>311</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="311"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="311"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="311"
                          data-changedesc='{"id":8276248,"providerId":8,"startDate":1646033400000,"sportId":48242,"sportName":"농구","locationId":42,"locationName":"그루지아","leagueId":24664,"leagueName":"A League","homeTeamId":52946032,"homeTeamName":"BC Margveti","homeTeamScore":30,"awayTeamId":52340559,"awayTeamName":"Mgzavrebi-Armia","awayTeamScore":20,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":1,"lastUpdate":1645984183000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="311"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:56:16</td>
                      </tr>
                      <tr>
                        <td>309</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="309"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="309"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="309"
                          data-changedesc='{"id":8275944,"providerId":8,"startDate":1646029800000,"sportId":6046,"sportName":"축구","locationId":9,"locationName":"베트남","leagueId":14139,"leagueName":"U19 Championship","homeTeamId":52437830,"homeTeamName":"Binh Duong U-19","homeTeamScore":0,"awayTeamId":52537042,"awayTeamName":"Tien Giang U19","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":1,"status":0,"lastUpdate":1645975777000,"localUpdateDate":1646009613000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="309"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:54:02</td>
                      </tr>
                      <tr>
                        <td>307</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="307"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="307"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="307"
                          data-changedesc='{"id":8275720,"providerId":8,"startDate":1646031600000,"sportId":48242,"sportName":"농구","locationId":248,"locationName":"세계","leagueId":33447,"leagueName":"FIBA World Championship","homeTeamId":235279,"homeTeamName":"인도","homeTeamScore":0,"awayTeamId":91616,"awayTeamName":"뉴질랜드","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":2,"lastUpdate":1646031019000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="307"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:12:41</td>
                      </tr>
                      <tr>
                        <td>306</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="306"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="306"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="306"
                          data-changedesc='{"id":8275720,"providerId":8,"startDate":1646031600000,"sportId":48242,"sportName":"농구","locationId":248,"locationName":"세계","leagueId":33447,"leagueName":"FIBA World Championship","homeTeamId":235279,"homeTeamName":"인도","homeTeamScore":0,"awayTeamId":91616,"awayTeamName":"뉴질랜드","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":2,"lastUpdate":1646031019000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="306"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:12:32</td>
                      </tr>
                      <tr>
                        <td>305</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="305"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="305"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="305"
                          data-changedesc='{"id":8275720,"providerId":8,"startDate":1646031600000,"sportId":48242,"sportName":"농구","locationId":248,"locationName":"세계","leagueId":33447,"leagueName":"FIBA World Championship","homeTeamId":235279,"homeTeamName":"인도","homeTeamScore":0,"awayTeamId":91616,"awayTeamName":"뉴질랜드","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":1,"lastUpdate":1646031019000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="305"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:12:16</td>
                      </tr>
                      <tr>
                        <td>304</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="304"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="304"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="304"
                          data-changedesc='{"id":8275720,"providerId":8,"startDate":1646031600000,"sportId":48242,"sportName":"농구","locationId":248,"locationName":"세계","leagueId":33447,"leagueName":"FIBA World Championship","homeTeamId":235279,"homeTeamName":"인도","homeTeamScore":0,"awayTeamId":91616,"awayTeamName":"뉴질랜드","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":1,"lastUpdate":1646031019000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="304"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:12:16</td>
                      </tr>
                      <tr>
                        <td>303</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="303"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="303"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="303"
                          data-changedesc='{"id":8275720,"providerId":8,"startDate":1646031600000,"sportId":48242,"sportName":"농구","locationId":248,"locationName":"세계","leagueId":33447,"leagueName":"FIBA World Championship","homeTeamId":235279,"homeTeamName":"인도","homeTeamScore":0,"awayTeamId":91616,"awayTeamName":"뉴질랜드","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":2,"lastUpdate":1646031019000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="303"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:12:09</td>
                      </tr>
                      <tr>
                        <td>302</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="302"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="302"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="302"
                          data-changedesc='{"id":8275720,"providerId":8,"startDate":1646031600000,"sportId":48242,"sportName":"농구","locationId":248,"locationName":"세계","leagueId":33447,"leagueName":"FIBA World Championship","homeTeamId":235279,"homeTeamName":"인도","homeTeamScore":0,"awayTeamId":91616,"awayTeamName":"뉴질랜드","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":1,"lastUpdate":1646031019000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="302"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:12:00</td>
                      </tr>
                      <tr>
                        <td>301</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="301"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="301"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="301"
                          data-changedesc='{"id":8275720,"providerId":8,"startDate":1646031600000,"sportId":48242,"sportName":"농구","locationId":248,"locationName":"세계","leagueId":33447,"leagueName":"FIBA World Championship","homeTeamId":235279,"homeTeamName":"인도","homeTeamScore":0,"awayTeamId":91616,"awayTeamName":"뉴질랜드","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":2,"lastUpdate":1646031019000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="301"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:11:43</td>
                      </tr>
                      <tr>
                        <td>300</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="300"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="300"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="300"
                          data-changedesc='{"id":8275720,"providerId":8,"startDate":1646031600000,"sportId":48242,"sportName":"농구","locationId":248,"locationName":"세계","leagueId":33447,"leagueName":"FIBA World Championship","homeTeamId":235279,"homeTeamName":"인도","homeTeamScore":0,"awayTeamId":91616,"awayTeamName":"뉴질랜드","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":0,"lastUpdate":1646031019000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="300"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:11:09</td>
                      </tr>
                      <tr>
                        <td>299</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="299"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="299"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="299"
                          data-changedesc='{"id":8275720,"providerId":8,"startDate":1646031600000,"sportId":48242,"sportName":"농구","locationId":248,"locationName":"세계","leagueId":33447,"leagueName":"FIBA World Championship","homeTeamId":235279,"homeTeamName":"인도","homeTeamScore":0,"awayTeamId":91616,"awayTeamName":"뉴질랜드","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":2,"lastUpdate":1646031019000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="299"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:11:01</td>
                      </tr>
                      <tr>
                        <td>298</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="298"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="298"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="298"
                          data-changedesc='{"id":8275720,"providerId":8,"startDate":1646031600000,"sportId":48242,"sportName":"농구","locationId":248,"locationName":"세계","leagueId":33447,"leagueName":"FIBA World Championship","homeTeamId":235279,"homeTeamName":"인도","homeTeamScore":0,"awayTeamId":91616,"awayTeamName":"뉴질랜드","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":1,"status":1,"lastUpdate":1646031019000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="298"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:10:32</td>
                      </tr>
                      <tr>
                        <td>297</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="297"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="297"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="297"
                          data-changedesc='{"id":8275720,"providerId":8,"startDate":1646031600000,"sportId":48242,"sportName":"농구","locationId":248,"locationName":"세계","leagueId":33447,"leagueName":"FIBA World Championship","homeTeamId":235279,"homeTeamName":"인도","homeTeamScore":0,"awayTeamId":91616,"awayTeamName":"뉴질랜드","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":1,"status":0,"lastUpdate":1646031019000,"localUpdateDate":1646032116000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="297"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 16:10:20</td>
                      </tr>
                      <tr>
                        <td>295</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="295"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="295"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="295"
                          data-changedesc='{"id":8272467,"providerId":8,"startDate":1646010000000,"sportId":6046,"sportName":"축구","locationId":34,"locationName":"니카라과","leagueId":39940,"leagueName":"Championship","homeTeamId":50023877,"homeTeamName":"Managua FC","homeTeamScore":2,"awayTeamId":50029831,"awayTeamName":"UNAN Managua","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":1,"status":3,"lastUpdate":1645884634000,"localUpdateDate":1646009613000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="295"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 11:52:45</td>
                      </tr>
                      <tr>
                        <td>293</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="293"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="293"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="293"
                          data-changedesc='{"id":8135821,"providerId":8,"startDate":1646010000000,"sportId":6046,"sportName":"축구","locationId":4,"locationName":"미국","leagueId":156,"leagueName":"미국 1부 리그","homeTeamId":148697,"homeTeamName":"시애틀","homeTeamScore":3,"awayTeamId":52035225,"awayTeamName":"내슈빌 SC","awayTeamScore":4,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":1,"status":3,"lastUpdate":1643189610000,"localUpdateDate":1646009613000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="293"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 11:50:24</td>
                      </tr>
                      <tr>
                        <td>292</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="292"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="292"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="292"
                          data-changedesc='{"id":8224770,"providerId":8,"startDate":1646010000000,"sportId":6046,"sportName":"축구","locationId":218,"locationName":"멕시코","leagueId":5299,"leagueName":"프리메라 디비전","homeTeamId":52024650,"homeTeamName":"크루즈 아줄","homeTeamScore":0,"awayTeamId":77059,"awayTeamName":"산토스 라구나","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":1,"status":1,"lastUpdate":1644931629000,"localUpdateDate":1646009613000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="292"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 11:47:41</td>
                      </tr>
                      <tr>
                        <td>291</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="291"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="291"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="291"
                          data-changedesc='{"id":8273685,"providerId":8,"startDate":1646013600000,"sportId":48242,"sportName":"농구","locationId":4,"locationName":"미국","leagueId":64,"leagueName":"미국 프로 농구","homeTeamId":15006,"homeTeamName":"Portland Trail Blazers","homeTeamScore":2,"awayTeamId":14995,"awayTeamName":"Denver Nuggets","awayTeamScore":1,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":2,"lastUpdate":1645925816000,"localUpdateDate":1646009590000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="291"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 11:44:22</td>
                      </tr>
                      <tr>
                        <td>290</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="290"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="290"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="290"
                          data-changedesc='{"id":8273685,"providerId":8,"startDate":1646013600000,"sportId":48242,"sportName":"농구","locationId":4,"locationName":"미국","leagueId":64,"leagueName":"미국 프로 농구","homeTeamId":15006,"homeTeamName":"Portland Trail Blazers","homeTeamScore":2,"awayTeamId":14995,"awayTeamName":"Denver Nuggets","awayTeamScore":1,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":2,"lastUpdate":1645925816000,"localUpdateDate":1646009590000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="290"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 11:44:04</td>
                      </tr>
                      <tr>
                        <td>289</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="289"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="289"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="289"
                          data-changedesc='{"id":8273685,"providerId":8,"startDate":1646013600000,"sportId":48242,"sportName":"농구","locationId":4,"locationName":"미국","leagueId":64,"leagueName":"미국 프로 농구","homeTeamId":15006,"homeTeamName":"Portland Trail Blazers","homeTeamScore":2,"awayTeamId":14995,"awayTeamName":"Denver Nuggets","awayTeamScore":0,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":1,"publishStatus":1,"status":2,"lastUpdate":1645925816000,"localUpdateDate":1646009590000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="289"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 11:43:27</td>
                      </tr>
                      <tr>
                        <td>281</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="281"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="281"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="281"
                          data-changedesc='{"id":8135821,"providerId":8,"startDate":1646010000000,"sportId":6046,"sportName":"축구","locationId":4,"locationName":"미국","leagueId":156,"leagueName":"미국 1부 리그","homeTeamId":148697,"homeTeamName":"시애틀","homeTeamScore":3,"awayTeamId":52035225,"awayTeamName":"내슈빌 SC","awayTeamScore":4,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":1,"status":3,"lastUpdate":1643189610000,"localUpdateDate":1646009613000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="281"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 10:44:28</td>
                      </tr>
                      <tr>
                        <td>280</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="280"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="280"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="280"
                          data-changedesc='{"id":8135821,"providerId":8,"startDate":1646010000000,"sportId":6046,"sportName":"축구","locationId":4,"locationName":"미국","leagueId":156,"leagueName":"미국 1부 리그","homeTeamId":148697,"homeTeamName":"시애틀","homeTeamScore":3,"awayTeamId":52035225,"awayTeamName":"내슈빌 SC","awayTeamScore":4,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":1,"status":3,"lastUpdate":1643189610000,"localUpdateDate":1646009613000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="280"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 10:44:27</td>
                      </tr>
                      <tr>
                        <td>279</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="279"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="279"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="279"
                          data-changedesc='{"id":8135821,"providerId":8,"startDate":1646010000000,"sportId":6046,"sportName":"축구","locationId":4,"locationName":"미국","leagueId":156,"leagueName":"미국 1부 리그","homeTeamId":148697,"homeTeamName":"시애틀","homeTeamScore":3,"awayTeamId":52035225,"awayTeamName":"내슈빌 SC","awayTeamScore":4,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":1,"status":3,"lastUpdate":1643189610000,"localUpdateDate":1646009613000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="279"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 10:44:25</td>
                      </tr>
                      <tr>
                        <td>278</td>
                        {/* <!--                                            <td><a th:href="@{/user/{id}(id=${log.user.id})}" th:utext="${log.user.userName}"></a></td>--> */}
                        <td>tuser1</td>
                        {/* <!--                                            <td th:utext="${@thUtil.renderAdminActivityLogActionType(log.actionType)}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${@thUtil.renderTransactionLogDeviceType(log.deviceType)}">...</td>--> */}

                        <td className="fixtureid-cell" data-logid="278"></td>
                        <td
                          style={{textalign: 'right'}}
                          className="hometeam-cell"
                          data-logid="278"
                        ></td>
                        <td
                          style={{textalign: 'center'}}
                          className="changelog-detail-cell"
                          data-logid="278"
                          data-changedesc='{"id":8135821,"providerId":8,"startDate":1646010000000,"sportId":6046,"sportName":"축구","locationId":4,"locationName":"미국","leagueId":156,"leagueName":"미국 1부 리그","homeTeamId":148697,"homeTeamName":"시애틀","homeTeamScore":3,"awayTeamId":52035225,"awayTeamName":"내슈빌 SC","awayTeamScore":4,"scoreStatus":null,"scoreTime":null,"scoreDescription":null,"liveScore":null,"betCount":null,"betMoney":null,"inplayStatus":0,"publishStatus":1,"status":3,"lastUpdate":1643189610000,"localUpdateDate":1646009613000,"created":null}'
                        ></td>
                        <td
                          style={{textalign: 'left'}}
                          className="awayteam-cell"
                          data-logid="278"
                        ></td>

                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.beforeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.changeValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td className="text-right" th:utext="${#numbers.formatDecimal(log.afterValue, 0, 'COMMA', 0, 'POINT')}">...</td>--> */}
                        {/* <!--                                            <td th:utext="${log.changeDesc}">...</td>--> */}
                        <td>119.65.103.62</td>
                        <td>2022-02-28 10:43:44</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-footer d-flex align-items-center">
                  {/* <!--                                <div className="btn-list">--> */}
                  {/* <!--                                    <span className="d-none d-sm-inline">--> */}
                  {/* <!--                                        <a data-url="/faq/bulkdelete" href="#" className="btn btn-outline-secondary" id="bulk-delete-btn">--> */}
                  {/* <!--                                            선택삭제--> */}
                  {/* <!--                                        </a>--> */}
                  {/* <!--                                    </span>--> */}
                  {/* <!--                                </div>--> */}

                  <ul className="pagination m-0 ms-auto">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        tabIndex="-1"
                        aria-disabled="true"
                        href="/fixture/manualsettlementhistory?&amp;page=0"
                        disabled="disabled"
                      >
                        <i className="ti ti-chevron-left"></i>
                        이전
                      </a>
                    </li>

                    <li className="page-item active">
                      <a
                        className="page-link"
                        href="/fixture/manualsettlementhistory?&amp;page=1"
                      >
                        1
                      </a>
                    </li>

                    <li className="page-item">
                      <a
                        className="page-link"
                        href="/fixture/manualsettlementhistory?&amp;page=2"
                      >
                        2
                      </a>
                    </li>

                    <li className="page-item">
                      <a
                        className="page-link"
                        href="/fixture/manualsettlementhistory?&amp;page=3"
                      >
                        3
                      </a>
                    </li>

                    <li className="page-item">
                      <a
                        className="page-link"
                        href="/fixture/manualsettlementhistory?&amp;page=4"
                      >
                        4
                      </a>
                    </li>

                    {/* <!--        <th:block th:each="pageNum: ${#numbers.sequence(1, pageCount)}">--> */}
                    {/* <!--            <li className="page-item" th:classappend="${pageNum} == ${page}? 'active'">--> */}
                    {/* <!--                <a className="page-link" th:href="${mainPath} + '&page=' + ${pageNum}" th:text="${pageNum}"--> */}
                    {/* <!--                   th:disabled="${pageNum} == ${page}? 'disabled'"></a>--> */}
                    {/* <!--            </li>--> */}
                    {/* <!--        </th:block>--> */}
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="/fixture/manualsettlementhistory?&amp;page=2"
                      >
                        다음 <i className="ti ti-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default ModifyResult;

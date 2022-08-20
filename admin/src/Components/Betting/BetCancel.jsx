import React from "react";

const BetCancel = () => {
  return (
    <>
      <section className="page-wrapper">
        <div className="alarms-section">
          <a href="/transaction/currency.asp" className="item">
            충전신청(
            <span
              className="text-success font-weight-bold"
              id="a_chargeRequests"
            >
              0
            </span>
            )
          </a>
          <a href="/transaction/exchange.asp" className="item">
            환전신청(
            <span
              className="text-success font-weight-bold"
              id="a_exchangeRequests"
            >
              0
            </span>
            )
          </a>
          <a href="#" className="item">
            카지노충전신청(
            <span
              className="text-success font-weight-bold"
              id="a_casinoChargeRequests"
            >
              0
            </span>
            )
          </a>
          <a href="#" className="item">
            카지노환전신청(
            <span
              className="text-success font-weight-bold"
              id="a_casinoExchangeRequests"
            >
              0
            </span>
            )
          </a>
          <a href="/cs/list.asp" className="item">
            1:1문의(
            <span
              className="text-success font-weight-bold"
              id="a_oneToOneRequests"
            >
              0
            </span>
            )
          </a>
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
                <h2 className="page-title">배팅취소내역</h2>
              </div>

              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list"></div>
              </div>
            </div>
            {/* <!--            <div className="total">-->
<!--                전체배팅금액 2,000,000-->
<!--            </div>--> */}

            <div className="row align-items-center g-2">
              <div className="col-5">
                <div className="btn-list" style={{flexwrap: 'nowrap'}}>
                  <span className="d-none d-sm-inline">
                    <input
                      className="form-control"
                      placeholder="시작날짜"
                      aria-label="시작날짜"
                      id="startdate-input"
                      defaultValue=""
                    />
                  </span>
                  <span className="d-none d-sm-inline">-</span>
                  <span className="d-none d-sm-inline">
                    <input
                      className="form-control"
                      placeholder="끝날짜"
                      aria-label="끝날짜"
                      id="enddate-input"
                      defaultValue=""
                    />
                  </span>
                  <span className="d-none d-sm-inline">
                    <div className="input-group">
                      <input
                        type="text"
                        name="search"
                        className="form-control"
                        placeholder="유저명 검색…"
                        aria-label="검색"
                        defaultValue=""
                        id="searchval-input"
                      />
                      <button className="btn" type="button" id="search-btn">
                        검색
                      </button>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            <div className="total">
              총 <span>34</span>건
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-deck row-cards">
              <div className="col-12">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap datatable table-compact">
                      <thead>
                        <tr>
                          {/* <!-- <th className="w-1"><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all users"></th> --> */}
                          <th className="w-1">
                            <a className="sort-item" data-sort="id">
                              번호
                              <i className="ti ti-chevron-down"></i>
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="created">
                              배팅시간
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="user.userName">
                              유저
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="isInplay">
                              구분
                            </a>
                          </th>
                          <th className="text-right">예상 배당률</th>
                          <th className="text-right">
                            <a className="sort-item" data-sort="betAmount">
                              배팅금액
                            </a>
                          </th>
                          <th className="text-right">예상적중금</th>
                          <th className="text-right">
                            <a className="sort-item" data-sort="wonAmount">
                              적중금액
                            </a>
                          </th>
                          <th className="w-1">결과</th>
                          <th className="w-1"></th>
                          <th className="w-1"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="row-header row-expanded"
                          data-betslipid="77"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>77</td>
                          <td>2021-10-28 11:49:10</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="21"
                            >
                              sara2
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">1.727</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">8,635</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@6f70d03d]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="77"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="77">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="88">
                                  <td>2021-10-28 08:00:00</td>
                                  <td>WinLoseDraw</td>
                                  <td>축구</td>
                                  <td>7719871</td>
                                  <td>
                                    <span>UD Parachique</span> vs.
                                    <span>CD Alfonso Ugarte</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    3.750
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>3.750</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.727
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="2"
                                    data-odds="1.727"
                                  >
                                    <span>원정팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="117"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>117</td>
                          <td>2021-11-05 23:11:21</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="48"
                            >
                              lilyhuynh
                            </a>
                          </td>
                          <td>
                            <span>실시간</span>
                          </td>
                          <td className="text-right">4.500</td>
                          <td className="text-right">100</td>
                          <td className="text-right">450</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@aac51918]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="117"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="117">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>마켓</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th>타입</th>
                                  <th align="center" className="w-1">
                                    배당
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>2021-11-05 23:00:00</td>
                                  <td>승무패 [1 피리어드]</td>
                                  <td>아이스 하키</td>
                                  <td>7753728</td>
                                  <td>
                                    <span>HC Khimik Voskresensk</span> vs.
                                    <span>Ska-네바</span>
                                  </td>
                                  <td>1</td>
                                  <td align="center" className="w-1">
                                    4.500
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-success me-1"></span>{" "}
                                    미적중
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="165"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>165</td>
                          <td>2021-11-08 00:41:41</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="32"
                            >
                              testguy
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">6.500</td>
                          <td className="text-right">300</td>
                          <td className="text-right">1,950</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@36a8c2a2]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="165"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="165">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="229">
                                  <td>2021-11-08 10:30:00</td>
                                  <td>WinLoseIncludingOvertime</td>
                                  <td>농구</td>
                                  <td>7770950</td>
                                  <td>
                                    <span>골든 스테이츠</span> vs.
                                    <span>휴스턴</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    1.120
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    6.500
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="2"
                                    data-odds="6.500"
                                  >
                                    <span>원정팀</span>
                                  </td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="186"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>186</td>
                          <td>2021-11-08 14:31:53</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="55"
                            >
                              tester1
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">1.833</td>
                          <td className="text-right">1,000</td>
                          <td className="text-right">1,833</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@4708b92]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="186"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="186">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="255">
                                  <td>2021-11-08 18:00:00</td>
                                  <td>승패</td>
                                  <td>배구</td>
                                  <td>7772289</td>
                                  <td>
                                    <span>Sapfir-Pro W</span> vs.
                                    <span>Granat-Pro W</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.833
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    1.833
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="1.833"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-success me-1"></span>{" "}
                                    미적중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="187"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>187</td>
                          <td>2021-11-08 14:33:37</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="55"
                            >
                              tester1
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">1.833</td>
                          <td className="text-right">1,000</td>
                          <td className="text-right">1,833</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@f5f8b3dd]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="187"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="187">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="256">
                                  <td>2021-11-08 18:00:00</td>
                                  <td>승패</td>
                                  <td>배구</td>
                                  <td>7772289</td>
                                  <td>
                                    <span>Sapfir-Pro W</span> vs.
                                    <span>Granat-Pro W</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.833
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    1.833
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="1.833"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-success me-1"></span>{" "}
                                    미적중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="305"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>305</td>
                          <td>2021-12-17 11:08:40</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="72"
                            >
                              jackylu8
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">5.400</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">27,000</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@90df75f4]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="305"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="305">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="419">
                                  <td>2021-12-17 16:00:00</td>
                                  <td>승무패</td>
                                  <td>농구</td>
                                  <td>7954578</td>
                                  <td>
                                    <span>Wuhan Shengfan W</span> vs.
                                    <span>FUSC W</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    5.400
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>24.000</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    1.152
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="5.400"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-success me-1"></span>{" "}
                                    미적중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="361"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>361</td>
                          <td>2022-01-08 04:40:42</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="77"
                            >
                              yangpa
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">3.851459306400</td>
                          <td className="text-right">100,000</td>
                          <td className="text-right">385,145</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@53eeb835, com.miniplay.admin.models.bet.BetDetail@6002be5d, com.miniplay.admin.models.bet.BetDetail@39a9ba4e, com.miniplay.admin.models.bet.BetDetail@c451a0fa]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="361"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="361">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="516">
                                  <td>2022-01-08 10:00:00</td>
                                  <td>승패 [연장포함]</td>
                                  <td>농구</td>
                                  <td>8045200</td>
                                  <td>
                                    <span>휴스턴</span> vs.
                                    <span>Dallas Mavericks</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.220
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.740
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="2"
                                    data-odds="1.740"
                                  >
                                    <span>원정팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}

                                <tr className="betrow-wdl" data-betid="517">
                                  <td>2022-01-08 10:00:00</td>
                                  <td>승패 [연장포함]</td>
                                  <td>농구</td>
                                  <td>8045201</td>
                                  <td>
                                    <span>오클라호마 시티 썬더</span> vs.
                                    <span>미네소타 팀버울브스</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.850
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.478
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="2"
                                    data-odds="1.478"
                                  >
                                    <span>원정팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}

                                <tr className="betrow-wdl" data-betid="518">
                                  <td>2022-01-08 10:00:00</td>
                                  <td>승패 [연장포함]</td>
                                  <td>농구</td>
                                  <td>8045202</td>
                                  <td>
                                    <span>Chicago Bulls</span> vs.
                                    <span>워싱턴 위저즈</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.454
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.940
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="1.454"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}

                                <tr className="betrow-bonus" data-betid="519">
                                  <td></td>
                                  <td>보너스</td>
                                  <td colSpan="3">
                                    <span>3폴더 이상</span>
                                  </td>
                                  <td colSpan="5" align="center">
                                    <span>1.030</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                <tr className="betrow-special" data-betid="519">
                                  <td></td>
                                  <td>
                                    <span>다폴더 보너스 추가 배당</span>
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td>
                                    <span></span> vs.
                                    <span></span>
                                  </td>
                                  <td colSpan="4">
                                    <span>3폴더 이상</span>
                                  </td>
                                  <td align="center">
                                    <span>1.030</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="427"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>427</td>
                          <td>2022-01-21 10:33:06</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">6.980747400</td>
                          <td className="text-right">100,000</td>
                          <td className="text-right">698,074</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@9b697391, com.miniplay.admin.models.bet.BetDetail@bd0fff76, com.miniplay.admin.models.bet.BetDetail@ccd5d2d5]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="427"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="427">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="627">
                                  <td>2022-01-21 12:00:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8063119</td>
                                  <td>
                                    <span>산 루이스</span> vs.
                                    <span>후아레스</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    2.230
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>3.020</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    4.020
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="2.230"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}

                                <tr className="betrow-wdl" data-betid="628">
                                  <td>2022-01-21 16:35:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8100254</td>
                                  <td>
                                    <span>Adelaide United W</span> vs.
                                    <span>Wellington Phoenix W</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.122
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>8.920</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    19.550
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="1.122"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}

                                <tr className="betrow-wdl" data-betid="629">
                                  <td>2022-01-21 17:45:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8097850</td>
                                  <td>
                                    <span>웰링턴</span> vs.
                                    <span>웨스턴 유나이티드 FC</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    2.790
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>3.790</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.460
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="2.790"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="428"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>428</td>
                          <td>2022-01-21 14:51:24</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="75"
                            >
                              kk0972
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">3.768736180</td>
                          <td className="text-right">201,750</td>
                          <td className="text-right">760,342</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@9bdf73f8, com.miniplay.admin.models.bet.BetDetail@a3271bf4, com.miniplay.admin.models.bet.BetDetail@df86a78]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="428"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="428">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  className="betrow-handicapuo"
                                  data-betid="630"
                                >
                                  <td>2022-01-21 17:45:00</td>
                                  <td>핸디캡</td>
                                  <td>축구</td>
                                  <td>8097850</td>
                                  <td>
                                    <span>웰링턴</span> vs.
                                    <span>웨스턴 유나이티드 FC</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.595
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>0.5 (0-0)</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.480
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td align="center">1</td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}

                                <tr
                                  className="betrow-handicapuo"
                                  data-betid="631"
                                >
                                  <td>2022-01-21 17:45:00</td>
                                  <td>코너 합계</td>
                                  <td>축구</td>
                                  <td>8097850</td>
                                  <td>
                                    <span>웰링턴</span> vs.
                                    <span>웨스턴 유나이티드 FC</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.826
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>11.5</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    1.990
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td align="center">Under</td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}

                                <tr className="betrow-special" data-betid="632">
                                  <td>2022-01-21 17:45:00</td>
                                  <td>
                                    <span>홈팀 득점</span>
                                  </td>
                                  <td>축구</td>
                                  <td>8097850</td>
                                  <td>
                                    <span>웰링턴</span> vs.
                                    <span>웨스턴 유나이티드 FC</span>
                                  </td>
                                  <td colSpan="4">
                                    <span>Yes</span>
                                  </td>
                                  <td align="center">
                                    <span>1.294</span>
                                  </td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="429"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>429</td>
                          <td>2022-01-21 14:53:27</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="75"
                            >
                              kk0972
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">6.639591640</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">33,197</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@60373d05, com.miniplay.admin.models.bet.BetDetail@fddb776c, com.miniplay.admin.models.bet.BetDetail@e815b8f9]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="429"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="429">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="633">
                                  <td>2022-01-21 17:45:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8097850</td>
                                  <td>
                                    <span>웰링턴</span> vs.
                                    <span>웨스턴 유나이티드 FC</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    2.810
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>3.730</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.480
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="2.810"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}

                                <tr className="betrow-special" data-betid="634">
                                  <td>2022-01-21 17:45:00</td>
                                  <td>
                                    <span>홈팀 득점</span>
                                  </td>
                                  <td>축구</td>
                                  <td>8097850</td>
                                  <td>
                                    <span>웰링턴</span> vs.
                                    <span>웨스턴 유나이티드 FC</span>
                                  </td>
                                  <td colSpan="4">
                                    <span>Yes</span>
                                  </td>
                                  <td align="center">
                                    <span>1.294</span>
                                  </td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}

                                <tr
                                  className="betrow-handicapuo"
                                  data-betid="635"
                                >
                                  <td>2022-01-21 17:45:00</td>
                                  <td>코너 합계</td>
                                  <td>축구</td>
                                  <td>8097850</td>
                                  <td>
                                    <span>웰링턴</span> vs.
                                    <span>웨스턴 유나이티드 FC</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.826
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>11.5</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    1.990
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td align="center">Under</td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="430"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>430</td>
                          <td>2022-01-21 14:54:23</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">1.125</td>
                          <td className="text-right">50,000</td>
                          <td className="text-right">56,250</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@220254b]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="430"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="430">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="636">
                                  <td>2022-01-21 16:35:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8100254</td>
                                  <td>
                                    <span>Adelaide United W</span> vs.
                                    <span>Wellington Phoenix W</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.125
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>8.790</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    19.350
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="1.125"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="431"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>431</td>
                          <td>2022-01-21 15:06:05</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">1.126</td>
                          <td className="text-right">50,000</td>
                          <td className="text-right">56,300</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@b93b3c99]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="431"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="431">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="637">
                                  <td>2022-01-21 16:35:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8100254</td>
                                  <td>
                                    <span>Adelaide United W</span> vs.
                                    <span>Wellington Phoenix W</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.126
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>8.730</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    19.220
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="1.126"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="432"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>432</td>
                          <td>2022-01-21 15:07:00</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">1.126</td>
                          <td className="text-right">100,000</td>
                          <td className="text-right">112,600</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@c4387a3a]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="432"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="432">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="638">
                                  <td>2022-01-21 16:35:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8100254</td>
                                  <td>
                                    <span>Adelaide United W</span> vs.
                                    <span>Wellington Phoenix W</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.126
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>8.730</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    19.220
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="1.126"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="433"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>433</td>
                          <td>2022-01-21 15:08:01</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">1.126</td>
                          <td className="text-right">200,000</td>
                          <td className="text-right">225,200</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@b408529e]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="433"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="433">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="639">
                                  <td>2022-01-21 16:35:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8100254</td>
                                  <td>
                                    <span>Adelaide United W</span> vs.
                                    <span>Wellington Phoenix W</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.126
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>8.730</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    19.220
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="1.126"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="434"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>434</td>
                          <td>2022-01-21 15:19:13</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">2.770</td>
                          <td className="text-right">10,000</td>
                          <td className="text-right">27,700</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@ce335ab6]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="434"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="434">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="640">
                                  <td>2022-01-21 17:45:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8097850</td>
                                  <td>
                                    <span>웰링턴</span> vs.
                                    <span>웨스턴 유나이티드 FC</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    2.770
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>3.630</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.550
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="2.770"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1"></td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="458"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>458</td>
                          <td>2022-01-26 16:27:12</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">1.181</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">5,905</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@78d980bc]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="458"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="458">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="676">
                                  <td>2022-01-26 18:00:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8128959</td>
                                  <td>
                                    <span>Pattaya Discovery United</span> vs.
                                    <span>Banbueng FC</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.181
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>6.500</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    9.000
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="1.181"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="459"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>459</td>
                          <td>2022-01-26 16:27:34</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">1.480</td>
                          <td className="text-right">10,000</td>
                          <td className="text-right">14,800</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@7adf07bd]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="459"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="459">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="677">
                                  <td>2022-01-26 22:00:00</td>
                                  <td>승패 [연장포함]</td>
                                  <td>아이스 하키</td>
                                  <td>8125181</td>
                                  <td>
                                    <span>Beliye Medvedi</span> vs.
                                    <span>Stalnye Lisy</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.550
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.480
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="2"
                                    data-odds="1.480"
                                  >
                                    <span>원정팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="460"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>460</td>
                          <td>2022-01-26 16:29:24</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">2.200</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">11,000</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@e5e0dc74]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="460"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="460">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="678">
                                  <td>2022-01-26 17:30:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8128958</td>
                                  <td>
                                    <span>Inter Bangkok</span> vs.
                                    <span>Bankunmae</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    2.200
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>3.300</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.750
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="2.200"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="461"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>461</td>
                          <td>2022-01-26 16:30:15</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">1.710</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">8,550</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@e6ca01a]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="461"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="461">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="679">
                                  <td>2022-01-26 18:05:00</td>
                                  <td>승패 [연장포함]</td>
                                  <td>농구</td>
                                  <td>8131506</td>
                                  <td>
                                    <span>Erofey-Pro 3x3</span> vs.
                                    <span>Zenit-Pro 3x3</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.000
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.710
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="2"
                                    data-odds="1.710"
                                  >
                                    <span>원정팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="463"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>463</td>
                          <td>2022-01-26 16:31:23</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">2.000</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">10,000</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@ce956f70]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="463"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="463">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="681">
                                  <td>2022-01-26 18:10:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8132696</td>
                                  <td>
                                    <span>TundraBraza (TFB) Esports</span> vs.
                                    <span>FC Red Bull Salzburg (l1r1)</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    2.000
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>4.333</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.600
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="2.000"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="466"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>466</td>
                          <td>2022-01-26 16:34:11</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="75"
                            >
                              kk0972
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">2.100</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">10,500</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@f3032f15]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="466"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="466">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="684">
                                  <td>2022-01-26 20:00:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8112200</td>
                                  <td>
                                    <span>랏차부리</span> vs.
                                    <span>무앙통</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    2.100
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>3.750</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.700
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="2.100"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="481"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>481</td>
                          <td>2022-01-26 17:12:39</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">3.308800</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">16,544</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@3448ab88, com.miniplay.admin.models.bet.BetDetail@c6bc3131]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="481"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="481">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="712">
                                  <td>2022-01-26 19:00:00</td>
                                  <td>첫3점슛</td>
                                  <td>농구</td>
                                  <td>8131232</td>
                                  <td>
                                    <span>피버스</span> vs.
                                    <span>Wonju Dongbu Promy</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    1.880
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.880
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="2"
                                    data-odds="1.880"
                                  >
                                    <span>원정팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}

                                <tr
                                  className="betrow-handicapuo"
                                  data-betid="713"
                                >
                                  <td>2022-01-26 19:00:00</td>
                                  <td>핸디캡 [연장포함]</td>
                                  <td>농구</td>
                                  <td>8131232</td>
                                  <td>
                                    <span>피버스</span> vs.
                                    <span>Wonju Dongbu Promy</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.760
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>-2.0 (0-0)</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    1.900
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td align="center">1</td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="482"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>482</td>
                          <td>2022-01-26 17:50:56</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="75"
                            >
                              kk0972
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">1.470</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">7,350</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@fe2413e0]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="482"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="482">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="714">
                                  <td>2022-01-26 19:05:00</td>
                                  <td>승패 [연장포함]</td>
                                  <td>농구</td>
                                  <td>8127999</td>
                                  <td>
                                    <span>Hiroshima Dragonflies</span> vs.
                                    <span>Yokohama</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.470
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.550
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="1.470"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="493"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>493</td>
                          <td>2022-01-27 16:09:15</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>실시간</span>
                          </td>
                          <td className="text-right">1.909</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">9,545</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 유처 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@ace7251e]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="493"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="493">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>마켓</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th>타입</th>
                                  <th align="center" className="w-1">
                                    배당
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>2022-01-27 16:05:00</td>
                                  <td>홀짝</td>
                                  <td>축구</td>
                                  <td>8139618</td>
                                  <td>
                                    <span>Real Madrid (kyloco)</span> vs.
                                    <span>Sevilla (shadow)</span>
                                  </td>
                                  <td>Odd</td>
                                  <td align="center" className="w-1">
                                    1.909
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="500"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>500</td>
                          <td>2022-01-27 16:17:25</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="80"
                            >
                              test1515
                            </a>
                          </td>
                          <td>
                            <span>실시간</span>
                          </td>
                          <td className="text-right">1.615</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">8,075</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 관리자 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@ed99b89]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="500"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="500">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>마켓</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th>타입</th>
                                  <th align="center" className="w-1">
                                    배당
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>2022-01-27 16:09:00</td>
                                  <td>양팀 모두득점</td>
                                  <td>축구</td>
                                  <td>8139624</td>
                                  <td>
                                    <span>Nyancat FC (NFC)</span> vs.
                                    <span>REF6000 (REF) Esports</span>
                                  </td>
                                  <td>Yes</td>
                                  <td align="center" className="w-1">
                                    1.615
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="509"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>509</td>
                          <td>2022-02-15 17:28:57</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">2.000</td>
                          <td className="text-right">7,000</td>
                          <td className="text-right">14,000</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 관리자 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@ac320f4b]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="509"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="509">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="743">
                                  <td>2022-02-15 18:35:00</td>
                                  <td>승패 [연장포함]</td>
                                  <td>농구</td>
                                  <td>8221247</td>
                                  <td>
                                    <span>Europa-pro 3x3</span> vs.
                                    <span>Erofey-Pro 3x3</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    2.000
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    1.710
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="2.000"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="513"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>513</td>
                          <td>2022-02-18 13:50:09</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">1.620</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">8,100</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 관리자 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@fa29cef5]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="513"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="513">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  className="betrow-handicapuo"
                                  data-betid="749"
                                >
                                  <td>2022-02-18 14:00:00</td>
                                  <td>핸디캡 [연장포함]</td>
                                  <td>농구</td>
                                  <td>8230639</td>
                                  <td>
                                    <span>San Jose State</span> vs.
                                    <span>Nevada Wolf Pack</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.620
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>10.0 (0-0)</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.200
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td align="center">1</td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="518"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>518</td>
                          <td>2022-02-23 12:35:20</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="106"
                            >
                              test1415
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">1.660</td>
                          <td className="text-right">10,000</td>
                          <td className="text-right">16,600</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 관리자 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@cbcb5123]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="518"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="518">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="758">
                                  <td>2022-02-23 13:00:00</td>
                                  <td>승패 [연장포함]</td>
                                  <td>농구</td>
                                  <td>8251736</td>
                                  <td>
                                    <span>Nevada Wolf Pack</span> vs.
                                    <span>UNLV Rebels</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.660
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.300
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="1.660"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="519"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>519</td>
                          <td>2022-02-23 12:35:40</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="106"
                            >
                              test1415
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">6.314000000</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">31,570</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 관리자 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@657e51d2, com.miniplay.admin.models.bet.BetDetail@6b131f05, com.miniplay.admin.models.bet.BetDetail@f14ce862]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="519"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="519">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="759">
                                  <td>2022-02-23 15:00:00</td>
                                  <td>승패</td>
                                  <td>축구</td>
                                  <td>8146419</td>
                                  <td>
                                    <span>Sagan Tosu</span> vs.
                                    <span>H 콘사돌레 S</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    2.200
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    1.615
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="2.200"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}

                                <tr className="betrow-wdl" data-betid="760">
                                  <td>2022-02-23 14:00:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8146423</td>
                                  <td>
                                    <span>Gamba Osaka</span> vs.
                                    <span>세레소 오사카</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    3.000
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>3.400</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    2.050
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="2"
                                    data-odds="2.050"
                                  >
                                    <span>원정팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}

                                <tr className="betrow-wdl" data-betid="761">
                                  <td>2022-02-23 14:00:00</td>
                                  <td>승패</td>
                                  <td>축구</td>
                                  <td>8146420</td>
                                  <td>
                                    <span>나고야 G</span> vs.
                                    <span>시미즈 에스펄스</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    1.400
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>VS</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.750
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="1.400"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="540"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td>540</td>
                          <td>2022-02-26 02:32:00</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>
                            <span>사전</span>
                          </td>
                          <td className="text-right">2.375</td>
                          <td className="text-right">5,000</td>
                          <td className="text-right">11,875</td>
                          <td className="text-right"></td>
                          <td>
                            <span>
                              <span className="badge me-1"></span> 관리자 취소
                            </span>
                            {/* <!-- <th:block th:if="${betSlip.wonAmount}">
                                                    <span th:utext="${@thUtil.renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}"></span>
                                                </th:block> --> */}
                          </td>
                          <td data-bets="[com.miniplay.admin.models.bet.BetDetail@fca1e7b8]">
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-betslip-recover"
                              data-betslipid="540"
                            >
                              복구하기
                            </a>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{display: 'none'}} data-betslipid="540">
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th>경기시간</th>
                                  <th>방식</th>
                                  <th>종목</th>
                                  <th>경기ID</th>
                                  <th>팀명</th>
                                  <th align="center" className="w-1">
                                    승/언더
                                  </th>
                                  <th align="center" className="w-1">
                                    무/라인
                                  </th>
                                  <th align="center" className="w-1">
                                    패/오버
                                  </th>
                                  <th align="center" className="w-1">
                                    점수
                                  </th>
                                  <th align="center">배팅</th>
                                  <th className="w-1">결과</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="betrow-wdl" data-betid="797">
                                  <td>2022-02-26 03:00:00</td>
                                  <td>승무패</td>
                                  <td>축구</td>
                                  <td>8225794</td>
                                  <td>
                                    <span>US 크레테일</span> vs.
                                    <span>CS 스당아르덴</span>
                                  </td>
                                  <td align="center" className="w-1 selected">
                                    2.375
                                  </td>
                                  <td align="center" className="w-1">
                                    <span>2.875</span>
                                  </td>
                                  <td align="center" className="w-1">
                                    2.900
                                  </td>
                                  <td align="center" className="w-1">
                                    <span></span> :<span></span>
                                  </td>
                                  <td
                                    align="center"
                                    data-oddname="1"
                                    data-odds="2.375"
                                  >
                                    <span>홈팀</span>
                                  </td>
                                  <td className="w-1">
                                    <span className="badge bg-azure me-1"></span>{" "}
                                    진행중
                                  </td>
                                </tr>

                                {/* <!-- <th:block th:unless="${@thUtil.isBetSpecial(bet)} or ${@thUtil.isBetHandicapOrUO(bet)} or ${@thUtil.isBetBonus(bet)} or ${@thUtil.isBetSpecial(bet)}">
                                                                    <tr className="betrow-other" th:attr="data-betid=${bet.id}">
                                                                        <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.marketName}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                        <td th:utext="${bet.fixtureId}"></td>
                                                                        <td>
                                                                            <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                            <span th:utext="${bet.awayTeamName}"></span>
                                                                        </td>
                                                                        <td colSpan="4">
                                                                            <span th:utext="${bet.oddName}"></span>
                                                                        </td>
                                                                        <td align="center">
                                                                            <span th:utext="${bet.odds}"></span>
                                                                        </td>
                                                                        <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                    </tr>
                                                                </th:block> --> */}
                                {/* <!-- <tr>
                                                                    <td th:utext="${#dates.format(bet.startDate, 'yyyy-MM-dd HH:mm')}"></td>
                                                                    <td th:utext="${bet.marketName}"></td>
                                                                    <td th:utext="${@thUtil.renderSportNameFromSportId(bet.sportId)}"></td>
                                                                    <td th:utext="${bet.fixtureId}"></td>
                                                                    <td>
                                                                        <span th:utext="${bet.homeTeamName}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamName}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.odd1}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <th:block th:if="${bet.odd2}">
                                                                            <span th:utext="${bet.odd2}"></span>
                                                                        </th:block>
                                                                        <th:block th:unless="${bet.odd2}">
                                                                            <span th:if="${bet.line}" th:utext="${bet.line}"></span>
                                                                        </th:block>
                                                                    </td>
                                                                    <td th:utext="${bet.odd3}" align="center" className="w-1"></td>
                                                                    <td align="center" className="w-1">
                                                                        <span th:utext="${bet.homeTeamScore}"></span> vs.
                                                                        <span th:utext="${bet.awayTeamScore}"></span>
                                                                    </td>
                                                                    <td th:utext="${bet.oddName}"></td>
                                                                    <td th:utext="${@thUtil.renderBetStatus(bet.settlementRate)}" className="w-1"></td>
                                                                </tr> --> */}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <!--                        <div className="card-footer d-flex align-items-center">-->
<!--                            <div className="btn-list">-->
<!--                                    <span className="d-none d-sm-inline">-->
<!--                                        &lt;!&ndash; <a href="#" className="btn btn-outline-secondary">-->
<!--                                            복구하기-->
<!--                                        </a> &ndash;&gt;-->
<!--                                    </span>-->
<!--                            </div>-->
<!--                            &lt;!&ndash;<div th:replace="~{fragments/general.html :: pagination(mainPath= ${@urlService.getFullRequestUrlWithoutPage()}, page = ${page}, pageCount = ${(totalItemCount / pageSize) + (totalItemCount % pageSize != 0 ? 1 : 0)})}"> </div>&ndash;&gt;-->

<!--                        </div>--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BetCancel;

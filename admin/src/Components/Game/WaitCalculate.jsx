import React, { useState } from "react";
import UserInfo from "../Popup/UserInfo";

const WaitCalculate = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="page-wrapper">
        <div className="container-fluid">
          {/* <!-- Page title --> */}
          <div className="page-header d-print-none">
            <div className="row align-items-center">
              <div className="col">
                {/* <!-- Page pre-title --> */}
                {/* <!--<div className="page-pretitle">
                            관리자메인 > 회원관리
                        </div>--> */}
                <h2 className="page-title">정산처리대기</h2>
              </div>

              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list"></div>
              </div>
            </div>
            {/* <!--                <div className="total">--> */}
            {/* <!--                    전체배팅금액 2,000,000--> */}
            {/* <!--                </div>--> */}

            <div className="total">
              총 <span>3</span>건
            </div>

            <div className="row align-items-center g-2">
              <div className="col-5"></div>
              <div className="col-7 text-end">
                <button className="btn btn-secondary" id="bulk-settle-btn">
                  선택정산
                </button>
                <button className="btn btn-warning update-bet-result ms-2">
                  결과 업데이트
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-deck row-cards">
              <div className="col-12">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap datatable table-compact table-bordered">
                      <thead>
                        <tr>
                          <th className="w-1">
                            <input
                              id="form-check-all"
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                            />
                          </th>
                          <th>경기시간</th>
                          <th>종류</th>
                          <th>종목</th>
                          <th>리그</th>
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
                          <th align="center" className="w-1">
                            결과
                          </th>
                          {/* <!--                                            <th className="w-1">번호</th>--> */}
                          {/* <!--                                            <th>배팅시간</th>--> */}
                          {/* <!--                                            <th>유저</th>--> */}
                          {/* <!--                                            <th>구분</th>--> */}
                          {/* <!--                                            <th className="text-right">예상 배당률</th>--> */}
                          {/* <!--                                            <th className="text-right">배팅금액</th>--> */}
                          {/* <!--                                            <th className="text-right">예상적중금</th>--> */}
                          {/* <!--                                            <th className="text-right">적중금액</th>--> */}
                          {/* <!--                                            <th className="w-1">결과</th>--> */}
                          {/* <!--                                            <th className="w-1"></th>--> */}
                          {/* <!--                                            <th className="w-1"></th>--> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-id="549"
                        >
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="549"
                            />
                          </td>
                          <td colSpan="10">
                            배팅시간: <span>2022-02-28 16:24:34</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>14.000</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">70,000</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>549</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span></span>
                          </td>
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-up"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-special" data-betid="812">
                          <td>2022-02-28 16:30:00</td>
                          <td>
                            <span>연장전 발생</span>
                          </td>
                          <td>농구</td>
                          <td>A League</td>
                          <td>8276248</td>
                          <td>
                            <span>BC Margveti</span> vs.
                            <span>Mgzavrebi-Armia</span>
                          </td>
                          <td colSpan="4">
                            <span>14.000</span>
                          </td>
                          <td>
                            <span>Yes</span>
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
                          className="row-header row-expanded betslip-item-header"
                          data-id="545"
                        >
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="545"
                            />
                          </td>
                          <td colSpan="10">
                            배팅시간: <span>2022-02-28 10:47:04</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="106"
                              >
                                test1415
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>2.604</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">13,017</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>545</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span></span>
                          </td>
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-up"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="806">
                          <td>2022-02-28 11:00:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>미국 프로 농구</td>
                          <td>8273685</td>
                          <td>
                            <span>Portland Trail Blazers</span> vs.
                            <span>Denver Nuggets</span>
                          </td>
                          <td align="center" className="w-1">
                            3.900
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.270
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>
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

                        <tr className="betrow-wdl" data-betid="807">
                          <td>2022-02-28 15:20:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>Liga PRO 3x3</td>
                          <td>8273804</td>
                          <td>
                            <span>Spartak-pro 3x3</span> vs.
                            <span>Dinamo-Pro Khabarovsk 3x3</span>
                          </td>
                          <td align="center" className="w-1">
                            1.710
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.000
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>
                            <span>원정팀</span>
                          </td>
                          <td className="w-1">
                            <span className="badge bg-azure me-1"></span> 진행중
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

                        <tr className="betrow-wdl" data-betid="808">
                          <td>2022-02-28 15:30:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>U19 Championship</td>
                          <td>8275944</td>
                          <td>
                            <span>Binh Duong U-19</span> vs.
                            <span>Tien Giang U19</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.025
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            10.500
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-id="544"
                        >
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="544"
                            />
                          </td>
                          <td colSpan="10">
                            배팅시간: <span>2022-02-28 10:46:57</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="106"
                              >
                                test1415
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">10,000</span> (
                            <span>70.024</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">700,245</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>544</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span></span>
                          </td>
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-up"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="803">
                          <td>2022-02-28 11:00:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>미국 프로 농구</td>
                          <td>8273685</td>
                          <td>
                            <span>Portland Trail Blazers</span> vs.
                            <span>Denver Nuggets</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            3.900
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            1.270
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>
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

                        <tr className="betrow-wdl" data-betid="804">
                          <td>2022-02-28 15:20:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>Liga PRO 3x3</td>
                          <td>8273804</td>
                          <td>
                            <span>Spartak-pro 3x3</span> vs.
                            <span>Dinamo-Pro Khabarovsk 3x3</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.710
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            2.000
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>
                            <span>홈팀</span>
                          </td>
                          <td className="w-1">
                            <span className="badge bg-azure me-1"></span> 진행중
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

                        <tr className="betrow-wdl" data-betid="805">
                          <td>2022-02-28 15:30:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>U19 Championship</td>
                          <td>8275944</td>
                          <td>
                            <span>Binh Duong U-19</span> vs.
                            <span>Tien Giang U19</span>
                          </td>
                          <td align="center" className="w-1">
                            1.025
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            10.500
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>
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
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <div className="btn-list">
                      <span className="d-none d-sm-inline">
                        {/* <!-- <a href="#" className="btn btn-outline-secondary">
                                            삭제/환불하기
                                        </a> --> */}
                      </span>
                    </div>
                    {/* <!--<div th:replace="~{fragments/general.html :: pagination(mainPath= ${@urlService.getFullRequestUrlWithoutPage()}, page = ${page}, pageCount = ${(totalItemCount / pageSize) + (totalItemCount % pageSize != 0 ? 1 : 0)})}"> </div>--> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UserInfo show={show} handleClose={handleClose} />
    </>
  );
};

export default WaitCalculate;

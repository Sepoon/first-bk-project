import React from "react";

const Betting = () => {
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
                {/* <!-- Page pre-title -->
                        <!--<div className="page-pretitle">
                            관리자메인 > 회원관리
                        </div>--> */}
                <h2 className="page-title">배팅관리</h2>
              </div>

              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list"></div>
              </div>
            </div>
            {/* <!--                <div className="total">-->
<!--                    전체배팅금액 2,000,000-->
<!--                </div>--> */}

            <div className="total">
              총 <span>402</span>건
            </div>

            <div className="row align-items-center g-2">
              <div className="col">
                <div className="btn-list">
                  <span className="d-none d-sm-inline">
                    <a
                      href="#"
                      className="btn btn-pill btn-betslipstatus-filter btn-secondary"
                      data-betslipstatus=""
                    >
                      전체 베팅
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="#"
                      className="btn btn-pill btn-betslipstatus-filter btn-outline-secondary"
                      data-betslipstatus="1"
                    >
                      진행중인 베팅
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="#"
                      className="btn btn-pill btn-betslipstatus-filter btn-outline-secondary"
                      data-betslipstatus="10"
                    >
                      종료된 베팅
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="row align-items-center g-2"
              style={{ marginTop: 20 }}
            >
              <div className="col-5">
                <div className="btn-list" style={{ flexWrap: "nowrap" }}>
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
                    <input
                      className="form-control"
                      placeholder="금액"
                      aria-label="금액"
                      id="amount-input"
                      defaultValue={0}
                    />
                  </span>
                  <span className="d-none d-sm-inline">
                    <select
                      className="form-select w-auto"
                      id="amountMinMax-select"
                    >
                      <option value="min">배팅금 이상</option>
                      <option value="max">배팅금 이하</option>
                    </select>
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
                          {/* <!-- <th className="w-1"><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all users"></th> --> */}
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
                          {/* <!--                                            <th className="w-1">번호</th>-->
<!--                                            <th>배팅시간</th>-->
<!--                                            <th>유저</th>-->
<!--                                            <th>구분</th>-->
<!--                                            <th className="text-right">예상 배당률</th>-->
<!--                                            <th className="text-right">배팅금액</th>-->
<!--                                            <th className="text-right">예상적중금</th>-->
<!--                                            <th className="text-right">적중금액</th>-->
<!--                                            <th className="w-1">결과</th>-->
<!--                                            <th className="w-1"></th>-->
<!--                                            <th className="w-1"></th>--> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="592"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 12:23:26</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">50,000</span> (
                            <span>3.219</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">160,965</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>592</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="592"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="886">
                          <td>2022-03-07 15:00:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>IBL</td>
                          <td>8299069</td>
                          <td>
                            <span>tangerang hawks</span> vs.
                            <span>Pacific Caesar Surabaya</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.100
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            1.660
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

                        <tr className="betrow-wdl" data-betid="887">
                          <td>2022-03-07 15:00:00</td>
                          <td>승무패</td>
                          <td>축구</td>
                          <td>Liga 3</td>
                          <td>8302792</td>
                          <td>
                            <span>Psgc Ciamis</span> vs.
                            <span>Mataram Utama</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.533
                          </td>
                          <td align="center" className="w-1">
                            <span>4.000</span>
                          </td>
                          <td align="center" className="w-1">
                            4.750
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="591"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 12:18:38</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">20,000</span> (
                            <span>7.885</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">157,700</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>591</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="591"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="884">
                          <td>2022-03-07 15:00:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>IBL</td>
                          <td>8299069</td>
                          <td>
                            <span>tangerang hawks</span> vs.
                            <span>Pacific Caesar Surabaya</span>
                          </td>
                          <td align="center" className="w-1">
                            2.100
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.660
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

                        <tr className="betrow-wdl" data-betid="885">
                          <td>2022-03-07 15:00:00</td>
                          <td>승무패</td>
                          <td>축구</td>
                          <td>Liga 3</td>
                          <td>8302792</td>
                          <td>
                            <span>Psgc Ciamis</span> vs.
                            <span>Mataram Utama</span>
                          </td>
                          <td align="center" className="w-1">
                            1.533
                          </td>
                          <td align="center" className="w-1">
                            <span>4.000</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            4.750
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="590"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 11:16:22</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>실시간</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>43.330</span>)
                            &nbsp;&nbsp;&nbsp;|&nnbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">216,650</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>590</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-success me-1"></span>{" "}
                              미적중
                            </span>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>2022-03-07 09:30:00</td>
                          <td>승패 [후반 및 연장포함] </td>
                          <td>농구</td>
                          <td>NCAA Basketball</td>
                          <td>8299668</td>
                          <td>
                            <span>Northwestern Wildcats</span> vs.
                            <span>Minnesota Golden Gophers</span>
                          </td>
                          <td colSpan="3" align="left" className="w-1">
                            10.000
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>1</td>
                          <td className="w-1">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                        </tr>

                        <tr>
                          <td>2022-03-07 10:00:00</td>
                          <td>승무패 [2 피리어드]</td>
                          <td>축구</td>
                          <td>Championship</td>
                          <td>8291041</td>
                          <td>
                            <span>Walter Ferretti</span> vs.
                            <span>Real Estelí</span>
                          </td>
                          <td colSpan="3" align="left" className="w-1">
                            4.333
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>1</td>
                          <td className="w-1">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="589"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 11:16:10</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>82.620</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">413,100</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>589</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="589"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="878">
                          <td>2022-03-07 22:30:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>Championship U19</td>
                          <td>8302192</td>
                          <td>
                            <span>Radomlje U19</span> vs.
                            <span>Celje U19</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.250
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            1.571
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

                        <tr className="betrow-wdl" data-betid="879">
                          <td>2022-03-07 22:30:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>Omani Professional League</td>
                          <td>8300789</td>
                          <td>
                            <span>Nizwa</span> vs.
                            <span>Dhofar</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            6.000
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            1.111
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

                        <tr className="betrow-wdl" data-betid="880">
                          <td>2022-03-07 23:00:00</td>
                          <td>승무패</td>
                          <td>축구</td>
                          <td>인디안 수퍼 리그</td>
                          <td>8291424</td>
                          <td>
                            <span>모훈 바간 AC</span> vs.
                            <span>잠셰드푸르</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.550
                          </td>
                          <td align="center" className="w-1">
                            <span>3.250</span>
                          </td>
                          <td align="center" className="w-1">
                            2.550
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

                        <tr className="betrow-wdl" data-betid="881">
                          <td>2022-03-07 23:00:00</td>
                          <td>승무패</td>
                          <td>축구</td>
                          <td>I-League</td>
                          <td>8299749</td>
                          <td>
                            <span>TRAU</span> vs.
                            <span>NEROCA F.C.</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.400
                          </td>
                          <td align="center" className="w-1">
                            <span>3.200</span>
                          </td>
                          <td align="center" className="w-1">
                            2.625
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="588"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 11:16:05</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">10,000</span> (
                            <span>20.451</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">204,511</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>588</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="588"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-handicapuo" data-betid="873">
                          <td>2022-03-07 20:35:00</td>
                          <td>언더오버 [연장포함]</td>
                          <td>농구</td>
                          <td>CBA</td>
                          <td>8299945</td>
                          <td>
                            <span>Qingdao</span> vs.
                            <span>Liaoning Flying Leopards</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.860
                          </td>
                          <td align="center" className="w-1">
                            <span>200.5</span>
                          </td>
                          <td align="center" className="w-1">
                            1.860
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>Under</td>
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

                        <tr className="betrow-wdl" data-betid="874">
                          <td>2022-03-07 23:00:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>Premijer 리가</td>
                          <td>8290601</td>
                          <td>
                            <span>투즐라 시티</span> vs.
                            <span>시로키 브리제그</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.333
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            3.250
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

                        <tr className="betrow-wdl" data-betid="875">
                          <td>2022-03-07 22:45:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>Reserve League</td>
                          <td>8302493</td>
                          <td>
                            <span>Al Sadd II</span> vs.
                            <span>Al Duhail Reserves</span>
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

                        <tr className="betrow-wdl" data-betid="876">
                          <td>2022-03-07 22:35:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>Omani Professional League</td>
                          <td>8300794</td>
                          <td>
                            <span>Saham</span> vs.
                            <span>알나흐다 클럽</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.000
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            1.727
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

                        <tr className="betrow-wdl" data-betid="877">
                          <td>2022-03-07 22:30:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>Championship U19</td>
                          <td>8302192</td>
                          <td>
                            <span>Radomlje U19</span> vs.
                            <span>Celje U19</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.250
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            1.571
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="587"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 11:15:26</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>1.375</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">6,875</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>587</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="587"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-special" data-betid="872">
                          <td>2022-03-07 20:00:00</td>
                          <td>
                            <span>승패</span>
                          </td>
                          <td>축구</td>
                          <td>Elit Ligi U19</td>
                          <td>8299884</td>
                          <td>
                            <span>Kayserispor U19</span> vs.
                            <span>Alanyaspor U19</span>
                          </td>
                          <td colSpan="4">
                            <span>1.375</span>
                          </td>
                          <td>
                            <span>1</span>
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="586"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 11:15:23</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>47.249</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">236,243</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>586</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="586"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="865">
                          <td>2022-03-07 19:00:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>KBL</td>
                          <td>8299944</td>
                          <td>
                            <span>오리온스</span> vs.
                            <span>세이커스</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.800
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            2.050
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

                        <tr className="betrow-wdl" data-betid="866">
                          <td>2022-03-07 19:30:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>IBL</td>
                          <td>8302729</td>
                          <td>
                            <span>West Bandits Solo</span> vs.
                            <span>Satya Wacana</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.150
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            4.750
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

                        <tr className="betrow-wdl" data-betid="867">
                          <td>2022-03-07 18:30:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>Premier League</td>
                          <td>8300725</td>
                          <td>
                            <span>Muktijoddha SKC</span> vs.
                            <span>Rahmatganj MFS</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.250
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            1.571
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

                        <tr className="betrow-wdl" data-betid="868">
                          <td>2022-03-07 19:30:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>WNBL</td>
                          <td>8303115</td>
                          <td>
                            <span>Perth Lynx W</span> vs.
                            <span>Adelaide Lightning W</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.700
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            2.100
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

                        <tr className="betrow-wdl" data-betid="869">
                          <td>2022-03-07 20:00:00</td>
                          <td>승무패</td>
                          <td>축구</td>
                          <td>Premier League</td>
                          <td>8201630</td>
                          <td>
                            <span>Krasnodar FC</span> vs.
                            <span>FC Ural</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.150
                          </td>
                          <td align="center" className="w-1">
                            <span>3.200</span>
                          </td>
                          <td align="center" className="w-1">
                            3.000
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

                        <tr className="betrow-wdl" data-betid="870">
                          <td>2022-03-07 20:00:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>I-League</td>
                          <td>8299750</td>
                          <td>
                            <span>Gokulam Kerala FC</span> vs.
                            <span>Real Kashmir F.C</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.666
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            2.100
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

                        <tr className="betrow-wdl" data-betid="871">
                          <td>2022-03-07 20:00:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>Tanzanian Premier League</td>
                          <td>8299883</td>
                          <td>
                            <span>Ruvu Shooting</span> vs.
                            <span>Biashara United</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.666
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            2.100
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="585"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 11:15:10</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>47.361</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">236,807</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>585</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="585"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="859">
                          <td>2022-03-07 17:15:00</td>
                          <td>승무패</td>
                          <td>축구</td>
                          <td>Liga 3</td>
                          <td>8302794</td>
                          <td>
                            <span>Gresik United</span> vs.
                            <span>Persidago Gorontalo</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.000
                          </td>
                          <td align="center" className="w-1">
                            <span>3.750</span>
                          </td>
                          <td align="center" className="w-1">
                            2.900
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

                        <tr className="betrow-wdl" data-betid="860">
                          <td>2022-03-07 17:30:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>NBL 플레이오프</td>
                          <td>8297243</td>
                          <td>
                            <span>브레이커스</span> vs.
                            <span>브리스베인 불렛츠</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.200
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            1.680
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

                        <tr className="betrow-wdl" data-betid="861">
                          <td>2022-03-07 17:30:00</td>
                          <td>승무패</td>
                          <td>축구</td>
                          <td>I-League</td>
                          <td>8299904</td>
                          <td>
                            <span>Mohammedan SC Kolkata</span> vs.
                            <span>Sreenidi Deccan</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.000
                          </td>
                          <td align="center" className="w-1">
                            <span>3.300</span>
                          </td>
                          <td align="center" className="w-1">
                            3.200
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

                        <tr className="betrow-wdl" data-betid="862">
                          <td>2022-03-07 17:30:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>U19 Championship</td>
                          <td>8302814</td>
                          <td>
                            <span>Nam Dinh U19</span> vs.
                            <span>SLNA U19</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.500
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            1.500
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

                        <tr className="betrow-wdl" data-betid="863">
                          <td>2022-03-07 18:00:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>Elit Ligi U19</td>
                          <td>8299742</td>
                          <td>
                            <span>Gazisehir Gaziantep U19</span> vs.
                            <span>Hatayspor U19</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.333
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            3.250
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

                        <tr className="betrow-wdl" data-betid="864">
                          <td>2022-03-07 18:00:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>Elit Ligi U19</td>
                          <td>8299743</td>
                          <td>
                            <span>Balikesirspor U19</span> vs.
                            <span>Denizlispor U19</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.615
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            2.200
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="584"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 11:15:05</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>31.265</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">156,325</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>584</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="584"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="856">
                          <td>2022-03-07 16:00:00</td>
                          <td>승패 [연장포함]</td>
                          <td>아이스 하키</td>
                          <td>Kazakhstan Ice Hockey Championship</td>
                          <td>8297218</td>
                          <td>
                            <span>Nomad</span> vs.
                            <span>Arlan Kokshetau</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.850
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            1.850
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

                        <tr className="betrow-wdl" data-betid="857">
                          <td>2022-03-07 16:00:00</td>
                          <td>승패 [연장포함]</td>
                          <td>아이스 하키</td>
                          <td>Kazakhstan Ice Hockey Championship</td>
                          <td>8297220</td>
                          <td>
                            <span>Snezhnye Barsy</span> vs.
                            <span>Beibarys Atyrau</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            6.500
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            1.100
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

                        <tr className="betrow-wdl" data-betid="858">
                          <td>2022-03-07 17:15:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>IBL</td>
                          <td>8299570</td>
                          <td>
                            <span>Rans Pik</span> vs.
                            <span>NSH-GMC Jakarta</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.600
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            1.450
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="583"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 11:15:01</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>3.676</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">18,382</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>583</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="583"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="853">
                          <td>2022-03-07 15:00:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>IBL</td>
                          <td>8299069</td>
                          <td>
                            <span>tangerang hawks</span> vs.
                            <span>Pacific Caesar Surabaya</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.100
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            1.660
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

                        <tr className="betrow-wdl" data-betid="854">
                          <td>2022-03-07 15:00:00</td>
                          <td>승무패</td>
                          <td>축구</td>
                          <td>Liga 3</td>
                          <td>8302792</td>
                          <td>
                            <span>Psgc Ciamis</span> vs.
                            <span>Mataram Utama</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.533
                          </td>
                          <td align="center" className="w-1">
                            <span>4.000</span>
                          </td>
                          <td align="center" className="w-1">
                            4.750
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

                        <tr className="betrow-wdl" data-betid="855">
                          <td>2022-03-07 15:15:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>Women W-League</td>
                          <td>8292734</td>
                          <td>
                            <span>Brisbane Roar W</span> vs.
                            <span>Newcastle Jets W</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.142
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            5.000
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="582"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 11:14:57</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>2.778</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">13,891</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>582</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="582"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="850">
                          <td>2022-03-07 12:00:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>미국 프로 농구</td>
                          <td>8299939</td>
                          <td>
                            <span> Los Angeles Clippers </span> vs.
                            <span>뉴욕 닉스</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.470
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

                        <tr className="betrow-wdl" data-betid="851">
                          <td>2022-03-07 12:00:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>WNCAA</td>
                          <td>8300486</td>
                          <td>
                            <span>Colorado State Rams W</span> vs.
                            <span>San-Jose State Spartans W</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.050
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            11.000
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

                        <tr className="betrow-wdl" data-betid="852">
                          <td>2022-03-07 12:06:00</td>
                          <td>승무패</td>
                          <td>축구</td>
                          <td>프리메라 디비전</td>
                          <td>8277770</td>
                          <td>
                            <span>솔로스 데 티후아나</span> vs.
                            <span>산 루이스</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.800
                          </td>
                          <td align="center" className="w-1">
                            <span>3.500</span>
                          </td>
                          <td align="center" className="w-1">
                            4.500
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="581"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 11:14:53</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>2.162</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">10,807</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>581</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="581"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="848">
                          <td>2022-03-07 11:30:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>NCAA Basketball</td>
                          <td>8299577</td>
                          <td>
                            <span>Oral Roberts</span> vs.
                            <span>Western Illinois</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.410
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            3.000
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

                        <tr className="betrow-wdl" data-betid="849">
                          <td>2022-03-07 12:00:00</td>
                          <td>승무패</td>
                          <td>축구</td>
                          <td>미국 1부 리그</td>
                          <td>8276995</td>
                          <td>
                            <span>Los Angeles FC</span> vs.
                            <span>포틀랜드 팀버스</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.533
                          </td>
                          <td align="center" className="w-1">
                            <span>4.333</span>
                          </td>
                          <td align="center" className="w-1">
                            6.000
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="580"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 09:41:49</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>1.300</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">6,500</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>580</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="580"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-special" data-betid="847">
                          <td>2022-03-07 10:00:00</td>
                          <td>
                            <span>승무패</span>
                          </td>
                          <td>아이스 하키</td>
                          <td>AHL</td>
                          <td>8296074</td>
                          <td>
                            <span>San Jose Barracuda</span> vs.
                            <span>Tucson Roadrunners</span>
                          </td>
                          <td colSpan="4">
                            <span>1.300</span>
                          </td>
                          <td>
                            <span>1</span>
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="579"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-07 09:41:15</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>1.750</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">8,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>579</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="579"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-special" data-betid="846">
                          <td>2022-03-07 10:00:00</td>
                          <td>
                            <span>승패</span>
                          </td>
                          <td>축구</td>
                          <td>Championship</td>
                          <td>8291041</td>
                          <td>
                            <span>Walter Ferretti</span> vs.
                            <span>Real Estelí</span>
                          </td>
                          <td colSpan="4">
                            <span>1.750</span>
                          </td>
                          <td>
                            <span>1</span>
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="576"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-04 19:37:26</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="109"
                              >
                                jackylu10
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>1.450</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">7,250</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>576</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="576"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-special" data-betid="843">
                          <td>2022-03-04 20:00:00</td>
                          <td>
                            <span>승무패</span>
                          </td>
                          <td>축구</td>
                          <td>Division 2</td>
                          <td>8287529</td>
                          <td>
                            <span>Ranong United FC</span> vs.
                            <span>Muangkan United</span>
                          </td>
                          <td colSpan="4">
                            <span>1.450</span>
                          </td>
                          <td>
                            <span>1</span>
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="575"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-04 12:50:35</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>실시간</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>4.000</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">20,000</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>575</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="575"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>2022-03-04 12:05:00</td>
                          <td>승무패 [2 피리어드]</td>
                          <td>축구</td>
                          <td>Liga de Expansion MX</td>
                          <td>8280540</td>
                          <td>
                            <span>시마로네스</span> vs.
                            <span>Tampico Madero FC</span>
                          </td>
                          <td colSpan="3" align="left" className="w-1">
                            4.000
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>2</td>
                          <td className="w-1">
                            <span className="badge bg-azure me-1"></span> 진행중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="574"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-03 12:01:05</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>실시간</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>1.400</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">7,000</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>574</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="574"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>2022-03-03 10:30:00</td>
                          <td>코너 - 정확한 언더오버</td>
                          <td>축구</td>
                          <td>Primera Division</td>
                          <td>8282423</td>
                          <td>
                            <span>알리안사 (Slv)</span> vs.
                            <span>CD 파스</span>
                          </td>
                          <td colSpan="3" align="left" className="w-1">
                            1.400
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>Over</td>
                          <td className="w-1">
                            <span className="badge bg-azure me-1"></span> 진행중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="573"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-03 12:00:41</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>실시간</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>1.400</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">7,000</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>573</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="573"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>2022-03-03 10:30:00</td>
                          <td>코너 - 정확한 언더오버</td>
                          <td>축구</td>
                          <td>Primera Division</td>
                          <td>8282423</td>
                          <td>
                            <span>알리안사 (Slv)</span> vs.
                            <span>CD 파스</span>
                          </td>
                          <td colSpan="3" align="left" className="w-1">
                            1.400
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>Over</td>
                          <td className="w-1">
                            <span className="badge bg-azure me-1"></span> 진행중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="572"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-03 12:00:13</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>실시간</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>13.797</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">68,985</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>572</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="572"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>2022-03-03 10:30:00</td>
                          <td>홀짝</td>
                          <td>축구</td>
                          <td>Primera Division</td>
                          <td>8282423</td>
                          <td>
                            <span>알리안사 (Slv)</span> vs.
                            <span>CD 파스</span>
                          </td>
                          <td colSpan="3" align="left" className="w-1">
                            1.533
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>Even</td>
                          <td className="w-1">
                            <span className="badge bg-danger me-1"></span> 적중
                          </td>
                        </tr>

                        <tr>
                          <td>2022-03-03 10:30:00</td>
                          <td>코너 - 정확한 언더오버</td>
                          <td>축구</td>
                          <td>Primera Division</td>
                          <td>8282423</td>
                          <td>
                            <span>알리안사 (Slv)</span> vs.
                            <span>CD 파스</span>
                          </td>
                          <td colSpan="3" align="left" className="w-1">
                            9.000
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>Under</td>
                          <td className="w-1">
                            <span className="badge bg-azure me-1"></span> 진행중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="571"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-03 11:59:48</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>실시간</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>9.000</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">45,000</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>571</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="571"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>2022-03-03 10:30:00</td>
                          <td>코너 - 정확한 언더오버</td>
                          <td>축구</td>
                          <td>Primera Division</td>
                          <td>8282423</td>
                          <td>
                            <span>알리안사 (Slv)</span> vs.
                            <span>CD 파스</span>
                          </td>
                          <td colSpan="3" align="left" className="w-1">
                            9.000
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>Under</td>
                          <td className="w-1">
                            <span className="badge bg-azure me-1"></span> 진행중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="570"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-03 11:59:29</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>실시간</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>9.000</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">45,000</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>570</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="570"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>2022-03-03 10:30:00</td>
                          <td>코너 - 정확한 언더오버</td>
                          <td>축구</td>
                          <td>Primera Division</td>
                          <td>8282423</td>
                          <td>
                            <span>알리안사 (Slv)</span> vs.
                            <span>CD 파스</span>
                          </td>
                          <td colSpan="3" align="left" className="w-1">
                            9.000
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>Under</td>
                          <td className="w-1">
                            <span className="badge bg-azure me-1"></span> 진행중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="569"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-03 11:59:27</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>실시간</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>9.000</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">45,000</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>569</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="569"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>2022-03-03 10:30:00</td>
                          <td>코너 - 정확한 언더오버</td>
                          <td>축구</td>
                          <td>Primera Division</td>
                          <td>8282423</td>
                          <td>
                            <span>알리안사 (Slv)</span> vs.
                            <span>CD 파스</span>
                          </td>
                          <td colSpan="3" align="left" className="w-1">
                            9.000
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>Under</td>
                          <td className="w-1">
                            <span className="badge bg-azure me-1"></span> 진행중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="566"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-02 22:57:19</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>1.500</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">7,500</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>566</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="566"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="832">
                          <td>2022-03-02 23:00:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>터키 쿠파시, 넉아웃 스테이지</td>
                          <td>8279341</td>
                          <td>
                            <span>시바스스포르</span> vs.
                            <span>파티흐 카라귐뤼크 SK</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.500
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            2.500
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="565"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-02 22:56:52</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>2.200</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">11,000</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>565</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="565"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="831">
                          <td>2022-03-02 23:00:00</td>
                          <td>승무패</td>
                          <td>축구</td>
                          <td>인디안 수퍼 리그</td>
                          <td>8273149</td>
                          <td>
                            <span>케랄라 블래스터스 FC</span> vs.
                            <span>뭄바이 시티 FC</span>
                          </td>
                          <td align="center" className="w-1">
                            2.750
                          </td>
                          <td align="center" className="w-1">
                            <span>3.400</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.200
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="564"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-02 22:47:50</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>1.444</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">7,220</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>564</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="564"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="830">
                          <td>2022-03-02 23:00:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>1st League</td>
                          <td>8258153</td>
                          <td>
                            <span>바치카 팔란카</span> vs.
                            <span>야보르 이바니차</span>
                          </td>
                          <td align="center" className="w-1">
                            2.625
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.444
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="563"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-02 22:47:43</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>1.111</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">5,555</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>563</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="563"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="829">
                          <td>2022-03-02 22:50:00</td>
                          <td>승패</td>
                          <td>축구</td>
                          <td>스타스 리그</td>
                          <td>8273072</td>
                          <td>
                            <span>알두하일 SC</span> vs.
                            <span>움-사랄</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.111
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1">
                            6.000
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="561"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-02 15:35:11</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="106"
                              >
                                test1415
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>1.420</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">7,100</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>561</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="561"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-handicapuo" data-betid="826">
                          <td>2022-03-02 16:00:00</td>
                          <td>언더오버 [연장포함]</td>
                          <td>농구</td>
                          <td>WNBL</td>
                          <td>8276708</td>
                          <td>
                            <span>Bendigo W</span> vs.
                            <span>Southside Flyers W</span>
                          </td>
                          <td align="center" className="w-1">
                            2.750
                          </td>
                          <td align="center" className="w-1">
                            <span>155.5</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.420
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>Over</td>
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="560"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-02 15:34:53</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="106"
                              >
                                test1415
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>1.500</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">7,500</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>560</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="560"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-handicapuo" data-betid="825">
                          <td>2022-03-02 16:00:00</td>
                          <td>언더오버 [연장포함]</td>
                          <td>농구</td>
                          <td>WNBL</td>
                          <td>8276708</td>
                          <td>
                            <span>Bendigo W</span> vs.
                            <span>Southside Flyers W</span>
                          </td>
                          <td align="center" className="w-1">
                            2.500
                          </td>
                          <td align="center" className="w-1">
                            <span>157.0</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            1.500
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>Over</td>
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="559"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-02 15:34:43</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="106"
                              >
                                test1415
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>사전</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>2.350</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">11,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>559</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="559"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr className="betrow-wdl" data-betid="824">
                          <td>2022-03-02 16:00:00</td>
                          <td>승패 [연장포함]</td>
                          <td>농구</td>
                          <td>WNBL</td>
                          <td>8276708</td>
                          <td>
                            <span>Bendigo W</span> vs.
                            <span>Southside Flyers W</span>
                          </td>
                          <td align="center" className="w-1">
                            1.550
                          </td>
                          <td align="center" className="w-1">
                            <span>VS</span>
                          </td>
                          <td align="center" className="w-1 selected">
                            2.350
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

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="558"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="10">
                            배팅시간: <span>2022-03-02 10:48:59</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                className="open-user-info-modal"
                                href="#"
                                data-userid="75"
                              >
                                kk0972
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>실시간</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span>1.909</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">9,545</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>558</span>
                          </td>

                          <td colSpan="2" align="right">
                            <span>
                              <span className="badge bg-azure me-1"></span>{" "}
                              진행중
                            </span>

                            <a
                              href="#"
                              className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel"
                              data-betslipid="558"
                            >
                              취소
                            </a>
                          </td>
                          {/* <!--                                                <td className="row-expand">-->
<!--                                                    <i className="ti ti-chevron-up"></i>-->
<!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>2022-03-02 09:00:00</td>
                          <td>승패 [3 피리어드]</td>
                          <td>아이스 하키</td>
                          <td>NHL</td>
                          <td>8274187</td>
                          <td>
                            <span>콜롬버스 블루 자켓츠</span> vs.
                            <span>뉴저지 데빌즈</span>
                          </td>
                          <td colSpan="3" align="left" className="w-1">
                            1.909
                          </td>
                          <td align="center" className="w-1">
                            <span></span> :<span></span>
                          </td>
                          <td>2</td>
                          <td className="w-1">
                            <span className="badge bg-azure me-1"></span> 진행중
                          </td>
                        </tr>
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
    </>
  );
};

export default Betting;

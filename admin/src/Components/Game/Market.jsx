import React from "react";

const Market = () => {
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
                <h2 className="page-title">마켓</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form
                    action="/fixture/markets"
                    method="get"
                    className="d-flex"
                  >
                    <select className="form-select w-auto" name="searchBy">
                      <option value="name">제목</option>
                    </select>
                    <div className="input-icon ms-2">
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
              총 <span>2,040</span>건
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
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="name">
                              제목
                              <i className="ti ti-chevron-down"></i>
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="nameKo">
                              제목(한글)
                            </a>
                          </th>
                          <th>타입</th>
                          <th>UI타입</th>
                          <th>Tab</th>
                          <th>Sort</th>
                          <th>Main</th>
                          <th>WDL</th>
                          <th>핸디</th>
                          <th>언오</th>
                          <th>Active</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1509</td>
                          <td>
                            {" "}
                            Difference Between The Highest And The Lowest
                            Numbers Drawn - Odd/Even
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=" Difference Between The Highest And The Lowest Numbers Drawn - Odd/Even"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="821"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="1509"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>1921</td>
                          <td> Double Chance Posts and Crossbars</td>
                          <td>
                            <input
                              type="text"
                              defaultValue=" Double Chance Posts and Crossbars"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1125"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="1921"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>852</td>
                          <td> Either Team to Score 3 Unanswered Times</td>
                          <td>
                            <input
                              type="text"
                              defaultValue=" Either Team to Score 3 Unanswered Times"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="404"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="852"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>1691</td>
                          <td> European Handicap 4th Period</td>
                          <td>
                            <input
                              type="text"
                              defaultValue=" European Handicap 4th Period"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="2"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="314"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="1691"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>998</td>
                          <td> First Match Corner - 12</td>
                          <td>
                            <input
                              type="text"
                              defaultValue=" First Match Corner - 12"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="487"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="998"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>1652</td>
                          <td> Qualifying Winning Car</td>
                          <td>
                            <input
                              type="text"
                              defaultValue=" Qualifying Winning Car"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="915"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="1652"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>1505</td>
                          <td>
                            {" "}
                            Total Value Of The Lowest And Highest Numbers Drawn
                            - Under/Over
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=" Total Value Of The Lowest And Highest Numbers Drawn - Under/Over"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="817"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="1505"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>1788</td>
                          <td> Under/Over Pass Completions</td>
                          <td>
                            <input
                              type="text"
                              defaultValue=" Under/Over Pass Completions"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1009"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="1788"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>2125</td>
                          <td>10 Minuets Corner?</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="10 Minuets Corner?"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1282"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="2125"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>161</td>
                          <td>10 Minute Result</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="승무패 [10분]"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="84"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="161"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>1971</td>
                          <td>10 Minute Result 2-Way</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="10 Minute Result 2-Way"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1169"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="1971"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>162</td>
                          <td>10 Minute Under/Over</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="언더오버 [10분]"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select defaultValue={'default'} className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">
                                Inplay
                              </option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="85"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="162"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>578</td>
                          <td>10 Minute Under/Over - Cards</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="10 Minute Under/Over - Cards"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="287"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="578"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>577</td>
                          <td>10 Minute Under/Over - Corners</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="10 Minute Under/Over - Corners"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="286"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="577"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>758</td>
                          <td>10 Minute Under/Over - Free Kicks</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="10 Minute Under/Over - Free Kicks"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="367"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="758"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>760</td>
                          <td>10 Minute Under/Over - Goal Kicks</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="10 Minute Under/Over - Goal Kicks"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="369"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="760"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>759</td>
                          <td>10 Minute Under/Over - Throw-ins</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="10 Minute Under/Over - Throw-ins"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="368"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="759"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>1860</td>
                          <td>10 Minute Winning Margin 5-Way</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="10 Minute Winning Margin 5-Way"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1072"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="1860"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>566</td>
                          <td>10th Period Winner Home/Away</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="10th Period Winner Home/Away"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="276"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="566"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>567</td>
                          <td>11th Period Winner Home/Away</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="11th Period Winner Home/Away"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="277"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="567"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>52</td>
                          <td>12</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="승패"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select defaultValue={'default'} className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">
                                Prematch
                              </option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="28"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="true"
                              className="market-isMain"
                              defaultChecked="checked"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="true"
                              className="market-isWdl"
                              defaultChecked="checked"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="true"
                              className="market-isActive"
                              defaultChecked="checked"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="52"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>286</td>
                          <td>12 2nd Half</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="승패 [후반전]"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select defaultValue={'default'} className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">
                                Inplay
                              </option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="3"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="54"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="true"
                              className="market-isWdl"
                              defaultChecked="checked"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="true"
                              className="market-isActive"
                              defaultChecked="checked"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="286"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>464</td>
                          <td>12 2nd Half Including Overtime</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="승패 [후반 및 연장포함] "
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select defaultValue={'default'} className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">
                                Inplay
                              </option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="3"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="75"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="true"
                              className="market-isWdl"
                              defaultChecked="checked"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="true"
                              className="market-isActive"
                              defaultChecked="checked"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="464"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>986</td>
                          <td>12 Aces</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="12 Aces"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="480"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="986"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>987</td>
                          <td>12 Aces - 1st Period</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="12 Aces - 1st Period"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="2"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="142"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="987"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>988</td>
                          <td>12 Aces - 2nd Period</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="12 Aces - 2nd Period"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="2"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="143"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="988"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>853</td>
                          <td>12 And Under/Over</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="12 And Under/Over"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="405"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="853"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>411</td>
                          <td>12 Corners</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="승패 및 코너"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="218"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="411"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>412</td>
                          <td>12 Corners 1st Half</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="승패 및 코너 [전반전]"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="3"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="68"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue="false"
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="412"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>1010</td>
                          <td>12 Double Faults</td>
                          <td>
                            <input
                              type="text"
                              defaultValue="12 Double Faults"
                              className="form-control market-nameKo"
                            />
                          </td>
                          <td>
                            <select className="form-control market-type">
                              <option value="">No Type</option>
                              <option value="1">Prematch</option>
                              <option value="2">Inplay</option>
                              <option value="5">Custom Prematch</option>
                              <option value="10">Bonus</option>
                              <option value="20">Special</option>
                              <option value="100">Other</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control market-renderType"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="1"
                              className="form-control market-tab"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue="493"
                              className="form-control market-sortOrder"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isMain"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isWdl"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isHandicap"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isUnderover"
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="market-isActive"
                            />
                          </td>
                          {/* <!--<td th:utext="${market.isSpecial}"></td>--> */}
                          <td className="text-end">
                            <a
                              href="#"
                              className="btn btn-primary save-market-item"
                              data-id="1010"
                            >
                              Save
                            </a>
                            {/* <!--                                            <a href="#" className="btn btn-white text-red link-action-btn" th:attr="data-id=${market.id}" data-url="/market/save" data-confirm="Are you sure to make this partner to a regular user?">--> */}
                            {/* <!--                                                수정--> */}
                            {/* <!--                                            </a>--> */}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <div className="card-footer d-flex align-items-center">
                      <ul className="pagination m-0 ms-auto">
                        <li className="page-item disabled">
                          <a
                            className="page-link"
                            tabIndex="-1"
                            aria-disabled="true"
                            href="/fixture/markets?&amp;page=0"
                            disabled="disabled"
                          >
                            <i className="ti ti-chevron-left"></i>
                            이전
                          </a>
                        </li>

                        <li className="page-item active">
                          <a
                            className="page-link"
                            href="/fixture/markets?&amp;page=1"
                          >
                            1
                          </a>
                        </li>

                        <li className="page-item">
                          <a
                            className="page-link"
                            href="/fixture/markets?&amp;page=2"
                          >
                            2
                          </a>
                        </li>

                        <li className="page-item">
                          <a
                            className="page-link"
                            href="/fixture/markets?&amp;page=3"
                          >
                            3
                          </a>
                        </li>

                        <li className="page-item">
                          <a
                            className="page-link"
                            href="/fixture/markets?&amp;page=4"
                          >
                            4
                          </a>
                        </li>

                        <li className="page-item">
                          <a
                            className="page-link"
                            href="/fixture/markets?&amp;page=5"
                          >
                            5
                          </a>
                        </li>

                        <li className="page-item">
                          <a
                            className="page-link"
                            href="/fixture/markets?&amp;page=6"
                          >
                            6
                          </a>
                        </li>

                        <li className="page-item">
                          <a
                            className="page-link"
                            href="/fixture/markets?&amp;page=7"
                          >
                            7
                          </a>
                        </li>

                        <li className="page-item">
                          <a
                            className="page-link"
                            href="/fixture/markets?&amp;page=8"
                          >
                            8
                          </a>
                        </li>

                        <li className="page-item">
                          <a
                            className="page-link"
                            href="/fixture/markets?&amp;page=9"
                          >
                            9
                          </a>
                        </li>

                        <li className="page-item">
                          <a
                            className="page-link"
                            href="/fixture/markets?&amp;page=10"
                          >
                            10
                          </a>
                        </li>

                        <li className="page-item">
                          <span className="page-link">...</span>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="/fixture/markets?&amp;page=68"
                          >
                            68
                          </a>
                        </li>

                        {/* <!--        <th:block th:each="pageNum: ${#numbers.sequence(1, pageCount)}">-->
<!--            <li class="page-item" th:classappend="${pageNum} == ${page}? 'active'">-->
<!--                <a class="page-link" th:href="${mainPath} + '&page=' + ${pageNum}" th:text="${pageNum}"-->
<!--                   th:disabled="${pageNum} == ${page}? 'disabled'"></a>-->
<!--            </li>-->
<!--        </th:block>--> */}
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="/fixture/markets?&amp;page=2"
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
        </div>
      </section>
    </>
  );
};

export default Market;

import React from "react";

const ProgressGame = () => {
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
                <h2 className="page-title">진행중경기 밋 결과입력</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form
                    id="search-form"
                    action=""
                    method="get"
                    className="d-flex"
                  >
                    <select
                      id="sport-select"
                      className="form-select w-auto"
                      name="sportId"
                    >
                      <option value="">전체 스포츠</option>
                      <option value="6046">축구</option>
                      <option value="48242">농구</option>
                      <option value="154914">야구</option>
                      <option value="154830">배구</option>
                      <option value="35232">아이스하키</option>
                      <option value="131506">미식축구</option>
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
              총 <span>58</span>건
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
                          <th className="w-1">
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select all fixtures"
                              id="checkbox-allfixtures"
                            />
                          </th>
                          <th className="w-1">종류</th>
                          <th>경기시간</th>
                          <th>경기ID</th>
                          <th>리그명</th>
                          <th>팀명</th>
                          <th align="center">스코어(홈)</th>
                          <th align="center">스코어(원정)</th>
                          <th>상태</th>
                          <th></th>
                          {/* <!--<th>출저</th>--> */}
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302773"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 11:00</td>
                          <td>8302773</td>
                          <td>Primera Division</td>
                          <td>
                            <span>Xinabajul</span> vs.
                            <span>Coatepecano IB /DR</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302773"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302773"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302773"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302773"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302773"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302773"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300486"
                            />
                          </td>
                          <td>농구</td>
                          <td>2022-03-07 12:00</td>
                          <td>8300486</td>
                          <td>WNCAA</td>
                          <td>
                            <span>Colorado State Rams W</span> vs.
                            <span>San-Jose State Spartans W</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300486"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300486"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300486"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300486"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300486"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300486"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8299069"
                            />
                          </td>
                          <td>농구</td>
                          <td>2022-03-07 15:00</td>
                          <td>8299069</td>
                          <td>IBL</td>
                          <td>
                            <span>tangerang hawks</span> vs.
                            <span>Pacific Caesar Surabaya</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8299069"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8299069"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8299069"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8299069"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8299069"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8299069"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302792"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 15:00</td>
                          <td>8302792</td>
                          <td>Liga 3</td>
                          <td>
                            <span>Psgc Ciamis</span> vs.
                            <span>Mataram Utama</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302792"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302792"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302792"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302792"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302792"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302792"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8292734"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 15:15</td>
                          <td>8292734</td>
                          <td>Women W-League</td>
                          <td>
                            <span>Brisbane Roar W</span> vs.
                            <span>Newcastle Jets W</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8292734"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8292734"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8292734"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8292734"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8292734"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8292734"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302815"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 15:30</td>
                          <td>8302815</td>
                          <td>U19 Championship</td>
                          <td>
                            <span>Nutifood Academy U19</span> vs.
                            <span>Thua Thien Hue U19</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302815"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302815"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302815"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302815"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302815"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302815"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8297218"
                            />
                          </td>
                          <td>아이스 하키</td>
                          <td>2022-03-07 16:00</td>
                          <td>8297218</td>
                          <td>Kazakhstan Ice Hockey Championship</td>
                          <td>
                            <span>Nomad</span> vs.
                            <span>Arlan Kokshetau</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8297218"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8297218"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8297218"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8297218"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8297218"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8297218"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8297220"
                            />
                          </td>
                          <td>아이스 하키</td>
                          <td>2022-03-07 16:00</td>
                          <td>8297220</td>
                          <td>Kazakhstan Ice Hockey Championship</td>
                          <td>
                            <span>Snezhnye Barsy</span> vs.
                            <span>Beibarys Atyrau</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8297220"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8297220"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8297220"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8297220"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8297220"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8297220"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8299570"
                            />
                          </td>
                          <td>농구</td>
                          <td>2022-03-07 17:15</td>
                          <td>8299570</td>
                          <td>IBL</td>
                          <td>
                            <span>Rans Pik</span> vs.
                            <span>NSH-GMC Jakarta</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8299570"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8299570"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8299570"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8299570"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8299570"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8299570"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302794"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 17:15</td>
                          <td>8302794</td>
                          <td>Liga 3</td>
                          <td>
                            <span>Gresik United</span> vs.
                            <span>Persidago Gorontalo</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302794"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302794"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302794"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302794"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302794"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302794"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8297243"
                            />
                          </td>
                          <td>농구</td>
                          <td>2022-03-07 17:30</td>
                          <td>8297243</td>
                          <td>NBL 플레이오프</td>
                          <td>
                            <span>브레이커스</span> vs.
                            <span>브리스베인 불렛츠</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8297243"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8297243"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8297243"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8297243"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8297243"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8297243"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302814"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 17:30</td>
                          <td>8302814</td>
                          <td>U19 Championship</td>
                          <td>
                            <span>Nam Dinh U19</span> vs.
                            <span>SLNA U19</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302814"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302814"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302814"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302814"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302814"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302814"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8299742"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 18:00</td>
                          <td>8299742</td>
                          <td>Elit Ligi U19</td>
                          <td>
                            <span>Gazisehir Gaziantep U19</span> vs.
                            <span>Hatayspor U19</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8299742"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8299742"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8299742"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8299742"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8299742"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8299742"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8299743"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 18:00</td>
                          <td>8299743</td>
                          <td>Elit Ligi U19</td>
                          <td>
                            <span>Balikesirspor U19</span> vs.
                            <span>Denizlispor U19</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8299743"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8299743"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8299743"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8299743"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8299743"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8299743"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300724"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 18:30</td>
                          <td>8300724</td>
                          <td>Premier League</td>
                          <td>
                            <span>Bangladesh Police</span> vs.
                            <span>Swadhinata KS</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300724"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300724"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300724"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300724"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300724"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300724"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300725"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 18:30</td>
                          <td>8300725</td>
                          <td>Premier League</td>
                          <td>
                            <span>Muktijoddha SKC</span> vs.
                            <span>Rahmatganj MFS</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300725"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300725"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300725"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300725"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300725"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300725"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302729"
                            />
                          </td>
                          <td>농구</td>
                          <td>2022-03-07 19:30</td>
                          <td>8302729</td>
                          <td>IBL</td>
                          <td>
                            <span>West Bandits Solo</span> vs.
                            <span>Satya Wacana</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302729"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302729"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302729"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302729"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302729"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302729"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8201630"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 20:00</td>
                          <td>8201630</td>
                          <td>Premier League</td>
                          <td>
                            <span>Krasnodar FC</span> vs.
                            <span>FC Ural</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8201630"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8201630"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8201630"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8201630"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8201630"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8201630"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8299883"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 20:00</td>
                          <td>8299883</td>
                          <td>Tanzanian Premier League</td>
                          <td>
                            <span>Ruvu Shooting</span> vs.
                            <span>Biashara United</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8299883"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8299883"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8299883"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8299883"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8299883"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8299883"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8299884"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 20:00</td>
                          <td>8299884</td>
                          <td>Elit Ligi U19</td>
                          <td>
                            <span>Kayserispor U19</span> vs.
                            <span>Alanyaspor U19</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8299884"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8299884"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8299884"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8299884"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8299884"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8299884"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8299947"
                            />
                          </td>
                          <td>농구</td>
                          <td>2022-03-07 21:00</td>
                          <td>8299947</td>
                          <td>TBL2</td>
                          <td>
                            <span>High Touch</span> vs.
                            <span>VEFA 1908</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8299947"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8299947"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8299947"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8299947"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8299947"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8299947"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300739"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 21:00</td>
                          <td>8300739</td>
                          <td>Championship W</td>
                          <td>
                            <span>CA Platense W</span> vs.
                            <span>Villa San Carlos W</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300739"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300739"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300739"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300739"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300739"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300739"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300740"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 21:00</td>
                          <td>8300740</td>
                          <td>Championship W</td>
                          <td>
                            <span>CA Huracan W</span> vs.
                            <span>CA River Plate W</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300740"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300740"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300740"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300740"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300740"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300740"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302467"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 21:00</td>
                          <td>8302467</td>
                          <td>Jordan Shield Cup</td>
                          <td>
                            <span>알 자지라 요르단</span> vs.
                            <span>Ma'an</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302467"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302467"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302467"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302467"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302467"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302467"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302712"
                            />
                          </td>
                          <td>농구</td>
                          <td>2022-03-07 21:00</td>
                          <td>8302712</td>
                          <td>Iraq - Premier League</td>
                          <td>
                            <span>Al Hashd</span> vs.
                            <span>Gas Alshimal</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302712"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302712"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302712"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302712"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302712"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302712"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302745"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 21:00</td>
                          <td>8302745</td>
                          <td>Super League</td>
                          <td>
                            <span>Naivas</span> vs.
                            <span>Migori Youth</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302745"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302745"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302745"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302745"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302745"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302745"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302802"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 21:00</td>
                          <td>8302802</td>
                          <td>Reserveligaen</td>
                          <td>
                            <span>Randers FC Reserves</span> vs.
                            <span>OB Reserve</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302802"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302802"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302802"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302802"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302802"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302802"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302813"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 21:00</td>
                          <td>8302813</td>
                          <td>Reserveligaen</td>
                          <td>
                            <span>Viborg (Res)</span> vs.
                            <span>AC Horsens (Res)</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302813"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302813"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302813"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302813"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302813"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302813"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302818"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 21:30</td>
                          <td>8302818</td>
                          <td>Reserve League</td>
                          <td>
                            <span>Maastricht Reserves</span> vs.
                            <span>Fortuna Sittard Res.</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302818"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302818"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302818"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302818"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302818"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302818"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300063"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 21:45</td>
                          <td>8300063</td>
                          <td>Superliga</td>
                          <td>
                            <span>Kastrioti Krujë</span> vs.
                            <span>라치</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300063"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300063"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300063"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300063"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300063"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300063"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300064"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 21:45</td>
                          <td>8300064</td>
                          <td>Superliga</td>
                          <td>
                            <span>Egnatia Rrogozhine</span> vs.
                            <span>kf Teuta</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300064"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300064"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300064"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300064"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300064"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300064"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302541"
                            />
                          </td>
                          <td>농구</td>
                          <td>2022-03-07 21:45</td>
                          <td>8302541</td>
                          <td>IBL</td>
                          <td>
                            <span>Hangtuah</span> vs.
                            <span>Louvre Surabaya</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302541"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302541"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302541"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302541"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302541"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302541"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300068"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 21:50</td>
                          <td>8300068</td>
                          <td>Division 1</td>
                          <td>
                            <span>알 쇼알라</span> vs.
                            <span>Al Jabalain</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300068"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300068"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300068"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300068"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300068"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300068"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8277440"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:00</td>
                          <td>8277440</td>
                          <td>First League</td>
                          <td>
                            <span>아르다 카르드잘리</span> vs.
                            <span>Beroe</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8277440"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8277440"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8277440"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8277440"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8277440"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8277440"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8291397"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:00</td>
                          <td>8291397</td>
                          <td>프리미어 리그</td>
                          <td>
                            <span>National Bank of Egypt</span> vs.
                            <span>미스르 렐 마카사</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8291397"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8291397"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8291397"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8291397"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8291397"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8291397"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300065"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:00</td>
                          <td>8300065</td>
                          <td>Tanzanian Premier League</td>
                          <td>
                            <span>Kinondoni MC</span> vs.
                            <span>Coastal Union</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300065"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300065"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300065"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300065"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300065"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300065"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300075"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:00</td>
                          <td>8300075</td>
                          <td>Development League U23</td>
                          <td>
                            <span>Charlton Athletic U23</span> vs.
                            <span>Ipswich Town U23</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300075"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300075"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300075"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300075"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300075"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300075"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8301023"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:00</td>
                          <td>8301023</td>
                          <td>SuperLiga</td>
                          <td>
                            <span>Radnicki 1923</span> vs.
                            <span>FK 메탈락 고르니 밀라노박</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8301023"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8301023"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8301023"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8301023"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8301023"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8301023"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302011"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:00</td>
                          <td>8302011</td>
                          <td>Premier League Cup U23</td>
                          <td>
                            <span>Mansfield Town U23</span> vs.
                            <span>Leeds United U23s</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302011"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302011"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302011"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302011"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302011"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302011"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302908"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:00</td>
                          <td>8302908</td>
                          <td>Division 1</td>
                          <td>
                            <span>Korabi Peshkopi</span> vs.
                            <span>KS Pogradeci</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302908"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302908"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302908"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302908"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302908"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302908"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300523"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:15</td>
                          <td>8300523</td>
                          <td>Division 1</td>
                          <td>
                            <span>알 오로바 FC</span> vs.
                            <span>알칼리즈 클럽</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300523"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300523"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300523"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300523"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300523"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300523"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8040278"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:30</td>
                          <td>8040278</td>
                          <td>Premier League</td>
                          <td>
                            <span>FC 제닛트</span> vs.
                            <span>FC 유에프에이</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8040278"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8040278"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8040278"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8040278"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8040278"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8040278"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8043833"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:30</td>
                          <td>8043833</td>
                          <td>Premier League</td>
                          <td>
                            <span>FC 로스토프</span> vs.
                            <span>PFC 소치</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8043833"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8043833"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8043833"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8043833"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8043833"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8043833"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8299370"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:30</td>
                          <td>8299370</td>
                          <td>리그 앙</td>
                          <td>
                            <span>마그라</span> vs.
                            <span>CS 콘스탄틴</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8299370"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8299370"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8299370"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8299370"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8299370"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8299370"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300522"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:30</td>
                          <td>8300522</td>
                          <td>리그 앙</td>
                          <td>
                            <span>CR 벨로우이즈다드</span> vs.
                            <span>파라두</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300522"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300522"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300522"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300522"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300522"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300522"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300527"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:30</td>
                          <td>8300527</td>
                          <td>Campionato Primavera 2</td>
                          <td>
                            <span>Como U19</span> vs.
                            <span>Alessandria U19</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300527"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300527"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300527"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300527"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300527"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300527"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300789"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:30</td>
                          <td>8300789</td>
                          <td>Omani Professional League</td>
                          <td>
                            <span>Nizwa</span> vs.
                            <span>Dhofar</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300789"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300789"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300789"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300789"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300789"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300789"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302192"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:30</td>
                          <td>8302192</td>
                          <td>Championship U19</td>
                          <td>
                            <span>Radomlje U19</span> vs.
                            <span>Celje U19</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302192"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302192"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302192"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302192"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302192"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302192"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300794"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:35</td>
                          <td>8300794</td>
                          <td>Omani Professional League</td>
                          <td>
                            <span>Saham</span> vs.
                            <span>알나흐다 클럽</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300794"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300794"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300794"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300794"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300794"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300794"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302493"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 22:45</td>
                          <td>8302493</td>
                          <td>Reserve League</td>
                          <td>
                            <span>Al Sadd II</span> vs.
                            <span>Al Duhail Reserves</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302493"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302493"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302493"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302493"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302493"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302493"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8290601"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 23:00</td>
                          <td>8290601</td>
                          <td>Premijer 리가</td>
                          <td>
                            <span>투즐라 시티</span> vs.
                            <span>시로키 브리제그</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8290601"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8290601"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8290601"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8290601"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8290601"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8290601"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8291424"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-07 23:00</td>
                          <td>8291424</td>
                          <td>인디안 수퍼 리그</td>
                          <td>
                            <span>모훈 바간 AC</span> vs.
                            <span>잠셰드푸르</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8291424"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8291424"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8291424"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8291424"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8291424"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8291424"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302323"
                            />
                          </td>
                          <td>농구</td>
                          <td>2022-03-07 23:00</td>
                          <td>8302323</td>
                          <td>League 1 W</td>
                          <td>
                            <span>USK Prague II W</span> vs.
                            <span>Valoskun KP Brno W</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302323"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302323"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302323"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302323"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302323"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302323"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302679"
                            />
                          </td>
                          <td>농구</td>
                          <td>2022-03-07 23:00</td>
                          <td>8302679</td>
                          <td>Premier League</td>
                          <td>
                            <span>Orthodox Amman</span> vs.
                            <span>Al-Jubaiha</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302679"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302679"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302679"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302679"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302679"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302679"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300570"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-08 00:00</td>
                          <td>8300570</td>
                          <td>Campeonato Nacional U23</td>
                          <td>
                            <span>Leixoes U23</span> vs.
                            <span>Benfica U23</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300570"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300570"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300570"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300570"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300570"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300570"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300786"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-08 00:00</td>
                          <td>8300786</td>
                          <td>SuperLiga</td>
                          <td>
                            <span>라드니크</span> vs.
                            <span>추카리츠키</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300786"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300786"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300786"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300786"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300786"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300786"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8300800"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-08 00:00</td>
                          <td>8300800</td>
                          <td>SuperLiga</td>
                          <td>
                            <span>나프레다크 크루셰바츠</span> vs.
                            <span>FK 프로레테르 노비 사드</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8300800"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8300800"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8300800"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8300800"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8300800"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8300800"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle checkbox-fixture"
                              type="checkbox"
                              aria-label="Select"
                              data-fixtureid="8302480"
                            />
                          </td>
                          <td>축구</td>
                          <td>2022-03-08 00:00</td>
                          <td>8302480</td>
                          <td>Championship U19</td>
                          <td>
                            <span>Boavista U19</span> vs.
                            <span>Marítimo U19</span>
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control homescore-input"
                              defaultValue="0"
                              data-fixtureid="8302480"
                            />
                          </td>
                          <td style={{ width: "80px" }}>
                            <input
                              type="number"
                              className="form-control awayscore-input"
                              defaultValue="0"
                              data-fixtureid="8302480"
                            />
                          </td>
                          <td>
                            {/* <!-- <span th:utext="${fixture.status}"></span> --> */}
                            {/* <!--                                                개시/대기/경기중/마감/적특--> */}
                            <select
                              className="form-select select-fixture-status"
                              data-fixtureid="8302480"
                              defaultValue={"default"}
                            >
                              <option value="1">개시</option>
                              {/* <!--                                                    <option defaultValue="0" th:selected="${fixture.status == 0}">대기</option>--> */}
                              <option value="2">경기중</option>
                              <option value="3">마감</option>
                              <option value="-20">적특</option>
                            </select>
                          </td>
                          <td className="text-end"></td>
                          {/* <!-- <td>LSports</td> --> */}
                          <td className="text-end">
                            {/* <!-- <span th:utext="${fixture.inplayStatus}"></span> --> */}
                            <a
                              href="#"
                              className="btn btn-white btn-sm btn-fixture-edit"
                              data-fixtureid="8302480"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-registerinplay"
                              data-fixtureid="8302480"
                            >
                              실시간 등록
                            </a>

                            <a
                              href="/fixture/details/8302480"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <div className="btn-list">
                      <span className="d-none d-sm-inline">
                        <a
                          id="bulk-fixture-registerinplay-btn"
                          href="#"
                          className="btn btn-outline-secondary"
                        >
                          선택 실시간 등록
                        </a>
                      </span>
                      <span className="d-none d-sm-inline">
                        <a
                          id="bulk-fixture-unregisterinplay-btn"
                          href="#"
                          className="btn btn-outline-secondary"
                        >
                          선택 실시간 등록 취소
                        </a>
                      </span>
                      <span className="d-none d-sm-inline">
                        <a
                          id="bulk-fixturedraft-btn"
                          href="#"
                          className="btn btn-outline-secondary"
                        >
                          선택대기
                        </a>
                      </span>
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

export default ProgressGame;

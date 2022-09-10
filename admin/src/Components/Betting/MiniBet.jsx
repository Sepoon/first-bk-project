import React, { useState } from "react";
import UserInfo from "../Popup/UserInfo";

const MiniBet = () => {
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
                <h2 className="page-title">미니게임 배팅관리</h2>
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
              총 <span>432</span>건
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
              <div className="col-9">
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
                      defaultValue="0"
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
            <div
              className="row align-items-center g-2"
              style={{ marginTop: 20 }}
            >
              <div className="col">
                <div className="btn-list">
                  <span className="d-none d-sm-inline">
                    <a
                      href="#"
                      className="btn btn-pill btn-betslipgametype-filter btn-secondary"
                      data-betslipgametype=""
                    >
                      전체 베팅
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="#"
                      className="btn btn-pill btn-betslipgametype-filter btn-outline-secondary"
                      data-betslipgametype="1"
                    >
                      파워볼1분
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="#"
                      className="btn btn-pill btn-betslipgametype-filter btn-outline-secondary"
                      data-betslipgametype="2"
                    >
                      파워볼2분
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="#"
                      className="btn btn-pill btn-betslipgametype-filter btn-outline-secondary"
                      data-betslipgametype="3"
                    >
                      파워볼3분
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="#"
                      className="btn btn-pill btn-betslipgametype-filter btn-outline-secondary"
                      data-betslipgametype="11"
                    >
                      야구
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="#"
                      className="btn btn-pill btn-betslipgametype-filter btn-outline-secondary"
                      data-betslipgametype="12"
                    >
                      크리켓
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="#"
                      className="btn btn-pill btn-betslipgametype-filter btn-outline-secondary"
                      data-betslipgametype="13"
                    >
                      축구
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="#"
                      className="btn btn-pill btn-betslipgametype-filter btn-outline-secondary"
                      data-betslipgametype="14"
                    >
                      섯다
                    </a>
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
                          {/* <!--                                            <th className="w-1">번호</th>--> */}
                          {/* <!--                                            <th>배팅시간</th>--> */}
                          {/* <!--                                            <th>유저</th>--> */}
                          <th>게임시간/마감시간 </th>
                          <th>게임</th>
                          <th>회차</th>
                          <th>베팅</th>
                          <th align="center" className="w-1">
                            배당
                          </th>
                          <th align="center" className="w-1">
                            상태
                          </th>

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
                          data-betslipid="545"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 13:52:49</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="123"
                              >
                                jackylu11
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">10,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">19,500</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 적중금액:{" "}
                            <span className="bold">19,500</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>545</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-danger me-1"></span> 적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 13:53:01</span>
                          </td>
                          <td className="ps-5">야구</td>
                          <td>
                            <span>755666</span>회차
                          </td>

                          <td>홀</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="544"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 13:52:43</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="123"
                              >
                                jackylu11
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">50,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">97,500</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>544</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 13:53:01</span>
                          </td>
                          <td className="ps-5">축구</td>
                          <td>
                            <span>755667</span>회차
                          </td>

                          <td>No goal</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="543"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 13:52:40</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="123"
                              >
                                jackylu11
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">20,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">39,000</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 적중금액:{" "}
                            <span className="bold">39,000</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>543</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-danger me-1"></span> 적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 13:53:01</span>
                          </td>
                          <td className="ps-5">축구</td>
                          <td>
                            <span>755667</span>회차
                          </td>

                          <td>Goal</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="542"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 13:52:36</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="123"
                              >
                                jackylu11
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">10,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">19,500</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 적중금액:{" "}
                            <span className="bold">19,500</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>542</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-danger me-1"></span> 적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 13:54:01</span>
                          </td>
                          <td className="ps-5">섯다</td>
                          <td>
                            <span>755668</span>회차
                          </td>

                          <td>아귀</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="541"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 13:48:16</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="123"
                              >
                                jackylu11
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">15,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">29,250</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>541</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 13:49:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>755642</span>회차
                          </td>

                          <td>파워볼(짝)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="540"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 13:48:14</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="123"
                              >
                                jackylu11
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">50,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">97,500</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>540</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 13:49:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>755642</span>회차
                          </td>

                          <td>파워볼(홀+언더)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="539"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 13:48:11</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="123"
                              >
                                jackylu11
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">10,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">19,500</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 적중금액:{" "}
                            <span className="bold">19,500</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>539</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-danger me-1"></span> 적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 13:49:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>755642</span>회차
                          </td>

                          <td>일반볼합(짝)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="538"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 13:48:08</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="123"
                              >
                                jackylu11
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">9,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 적중금액:{" "}
                            <span className="bold">9,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>538</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-danger me-1"></span> 적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 13:49:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>755642</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="537"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 12:58:01</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">300,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">585,000</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>537</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 12:58:31</span>
                          </td>
                          <td className="ps-5">섯다</td>
                          <td>
                            <span>755364</span>회차
                          </td>

                          <td>아귀</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="536"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 12:30:31</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="125"
                              >
                                jackylu13
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">9,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>536</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 12:31:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>755211</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="535"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 12:21:25</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">50,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">97,500</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>535</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 12:22:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>755163</span>회차
                          </td>

                          <td>파워볼(짝+언더)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="534"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 12:21:15</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">10,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">19,500</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>534</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 12:22:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>755163</span>회차
                          </td>

                          <td>파워볼(짝)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="533"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 12:21:04</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <span>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                onClick={handleShow}
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                            </span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">20,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">39,000</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>533</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 12:22:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>755163</span>회차
                          </td>

                          <td>파워볼(짝)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="532"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-07 11:24:23</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">9,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 적중금액:{" "}
                            <span className="bold">9,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>532</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-danger me-1"></span> 적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-07 11:25:30</span>
                          </td>
                          <td className="ps-5">섯다</td>
                          <td>
                            <span>754853</span>회차
                          </td>

                          <td>아귀</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="529"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:52:49</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">3.998</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">19,987</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>529</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:53:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726775</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:53:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726775</span>회차
                          </td>

                          <td>일반볼합(소)</td>
                          <td align="center" className="w-1">
                            2.050
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="528"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:51:48</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">3.998</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">19,987</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>528</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:52:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726768</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:52:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726768</span>회차
                          </td>

                          <td>일반볼합(소)</td>
                          <td align="center" className="w-1">
                            2.050
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="527"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:50:14</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">3.998</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">19,987</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>527</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:51:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726764</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:51:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726764</span>회차
                          </td>

                          <td>일반볼합(소)</td>
                          <td align="center" className="w-1">
                            2.050
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="526"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:49:50</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">3.998</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">19,987</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>526</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:50:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726758</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:50:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726758</span>회차
                          </td>

                          <td>일반볼합(소)</td>
                          <td align="center" className="w-1">
                            2.050
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="525"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:47:24</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">3.998</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">19,987</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>525</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:48:01</span>
                          </td>
                          <td className="ps-5">파워볼2분</td>
                          <td>
                            <span>726742</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:48:01</span>
                          </td>
                          <td className="ps-5">파워볼2분</td>
                          <td>
                            <span>726742</span>회차
                          </td>

                          <td>일반볼합(소)</td>
                          <td align="center" className="w-1">
                            2.050
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="524"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:47:21</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">3.998</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">19,987</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>524</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:48:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726747</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:48:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726747</span>회차
                          </td>

                          <td>일반볼합(소)</td>
                          <td align="center" className="w-1">
                            2.050
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="523"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:46:37</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">7.795</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">38,975</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>523</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:48:01</span>
                          </td>
                          <td className="ps-5">파워볼3분</td>
                          <td>
                            <span>726735</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:48:01</span>
                          </td>
                          <td className="ps-5">파워볼3분</td>
                          <td>
                            <span>726735</span>회차
                          </td>

                          <td>일반볼합(소)</td>
                          <td align="center" className="w-1">
                            2.050
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:48:01</span>
                          </td>
                          <td className="ps-5">파워볼3분</td>
                          <td>
                            <span>726735</span>회차
                          </td>

                          <td>일반볼합(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="522"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:46:31</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">3.998</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">19,987</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>522</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:47:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726741</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:47:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726741</span>회차
                          </td>

                          <td>일반볼합(소)</td>
                          <td align="center" className="w-1">
                            2.050
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="521"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:46:28</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">9,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 적중금액:{" "}
                            <span className="bold">9,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>521</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-danger me-1"></span> 적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:47:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726741</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="520"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:45:39</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">9,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 적중금액:{" "}
                            <span className="bold">9,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>520</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-danger me-1"></span> 적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:46:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726736</span>회차
                          </td>

                          <td>파워볼(짝)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="519"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:45:36</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">7.795</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">38,975</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>519</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:46:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726736</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:46:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726736</span>회차
                          </td>

                          <td>일반볼합(소)</td>
                          <td align="center" className="w-1">
                            2.050
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:46:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726736</span>회차
                          </td>

                          <td>일반볼합(짝)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="518"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:44:12</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">3.998</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">19,987</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>518</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:45:01</span>
                          </td>
                          <td className="ps-5">파워볼3분</td>
                          <td>
                            <span>726718</span>회차
                          </td>

                          <td>일반볼합(대)</td>
                          <td align="center" className="w-1">
                            2.050
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:45:01</span>
                          </td>
                          <td className="ps-5">파워볼3분</td>
                          <td>
                            <span>726718</span>회차
                          </td>

                          <td>파워볼(언더)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="517"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:44:10</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">9,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>517</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:45:01</span>
                          </td>
                          <td className="ps-5">파워볼3분</td>
                          <td>
                            <span>726718</span>회차
                          </td>

                          <td>파워볼(언더)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="516"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:44:04</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">3.998</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">19,987</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>516</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:45:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726730</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:45:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726730</span>회차
                          </td>

                          <td>일반볼합(중)</td>
                          <td align="center" className="w-1">
                            2.050
                          </td>
                          <td align="center" className="w-1">
                            적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="515"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:43:16</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">9,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>515</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:44:01</span>
                          </td>
                          <td className="ps-5">크리켓</td>
                          <td>
                            <span>726728</span>회차
                          </td>

                          <td>득점</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded betslip-item-header"
                          data-betslipid="514"
                        >
                          {/* <!-- <td><input className="form-check-input m-0 align-middle list-checkbox" type="checkbox" aria-label="Select"></td> --> */}
                          <td colSpan="5">
                            배팅시간: <span>2022-03-03 17:43:12</span>
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
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 배팅금액:{" "}
                            <span className="bold">5,000</span> (
                            <span className="text-right">1.950</span>)
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 예상적중금액:{" "}
                            <span className="bold">9,750</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 번호:{" "}
                            <span>514</span>
                          </td>
                          <td align="center">
                            <span className="badge bg-success me-1"></span>{" "}
                            미적중
                          </td>
                          {/* <!--                                                <td>--> */}
                          {/* <!--                                                    <th:block th:if="${betSlip.status == 1}">--> */}
                          {/* <!--                                                        <a href="#" className="btn btn-white text-red delete-link btn-sm btn-betslip-cancel" th:attr="data-betslipid=${betSlip.id}">--> */}
                          {/* <!--                                                            취소--> */}
                          {/* <!--                                                        </a>--> */}
                          {/* <!--                                                    </th:block>--> */}
                          {/* <!--                                                </td>--> */}
                          {/* <!--                                                <td className="row-expand">--> */}
                          {/* <!--                                                    <i className="ti ti-chevron-down"></i>--> */}
                          {/* <!--                                                </td>--> */}
                        </tr>

                        <tr>
                          <td>
                            마감시간: <span>2022-03-03 17:44:01</span>
                          </td>
                          <td className="ps-5">파워볼1분</td>
                          <td>
                            <span>726725</span>회차
                          </td>

                          <td>파워볼(홀)</td>
                          <td align="center" className="w-1">
                            1.950
                          </td>
                          <td align="center" className="w-1">
                            미적중
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <!--                            <div className="card-footer d-flex align-items-center">--> */}
                  {/* <!--                                <div className="btn-list">--> */}
                  {/* <!--                                    <span className="d-none d-sm-inline">--> */}
                  {/* <!--                                        &lt;!&ndash; <a href="#" className="btn btn-outline-secondary">--> */}
                  {/* <!--                                            삭제/환불하기--> */}
                  {/* <!--                                        </a> &ndash;&gt;--> */}
                  {/* <!--                                    </span>--> */}
                  {/* <!--                                </div>--> */}
                  {/* <!--                                &lt;!&ndash;<div th:replace="~{fragments/general.html :: pagination(mainPath= ${@urlService.getFullRequestUrlWithoutPage()}, page = ${page}, pageCount = ${(totalItemCount / pageSize) + (totalItemCount % pageSize != 0 ? 1 : 0)})}"> </div>&ndash;&gt;--> */}

                  {/* <!--                            </div>--> */}
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

export default MiniBet;

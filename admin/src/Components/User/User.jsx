import React, { useState, useEffect } from "react";
import axios from "axios";
import UserInfo from "../Popup/UserInfo";

const UserManagement = () => {
  const [show, setShow] = useState(false);

  const [userName, setUserName] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/users').then((response) => {
      var ret = response.data;
      setUserName(ret[0].memberName);

    });
  }, []);

  return (
    <>
      <section className="page-wrapper">
        <div className="container-fluid">
          {/* <!-- Page title --> */}
          <div className="page-header d-print-none">
            <div className="row align-items-center mb-2">
              <div className="col">
                {/* <!-- Page pre-title --> */}
                {/* <!--<div className="page-pretitle">
                        관리자메인 > 회원관리
                    </div>--> */}
                <h2 className="page-title">회원관리</h2>
              </div>
              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="/user/list" method="get" className="d-flex">
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="user">사용자</option>
                      <option value="phonenumber">핸드폰번호</option>
                      <option value="referrer">추천인</option>
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
                        defaultValue={userName}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary ms-2">
                      검색
                    </button>
                  </form>
                </div>
              </div>

              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <span className="d-none d-sm-inline">
                    <a href="/user/create" className="btn btn-primary">
                      회원 추가
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="total userlist-total">
              <div>
                총 <span>94</span>건
              </div>
              <div>
                전체회원보유머니 : <span>26,109,307</span>
                <span className="li-divider">|</span> 전체회원보유포인트 :{" "}
                <span>748,604</span>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col">
                <div className="btn-list">
                  {/* <!--
                        <span className="d-none d-sm-inline">
                            <a href="/user/list" className="btn btn-outline-secondary btn-pill"
                               th:text="${'정상 (' + totalItemCount + ')'}" th:classappend="${status} == -1 AND ${partner} == -1? 'active'">
                                전체회원 (0)
                            </a>
                        </span>
                        --> */}
                  <span className="d-none d-sm-inline">
                    <a
                      href="/user/list?status=1"
                      className="btn btn-outline-secondary btn-pill active"
                    >
                      정상 (94)
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="/user/list?status=10"
                      className="btn btn-outline-warning btn-pill"
                    >
                      차단 (5)
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="/user/list?status=0"
                      className="btn btn-outline-danger btn-pill"
                    >
                      삭제 (8)
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="/user/list?status=20"
                      className="btn btn-outline-secondary btn-pill"
                    >
                      가라 (2)
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="/user/list?partner=1"
                      className="btn btn-outline-secondary btn-pill"
                    >
                      총판 (11)
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
                  {/* <!--<div className="card-header">
                            <h3 className="card-title">Invoices</h3>
                        </div>
                        <div className="card-body border-bottom py-3">
                            <div className="d-flex">
                                <div className="text-muted">
                                    Show
                                    <div className="mx-2 d-inline-block">
                                        <input type="text" className="form-control form-control-sm" value="8" size="3" aria-label="Invoices count">
                                    </div>
                                    entries
                                </div>
                                <div className="ms-auto text-muted">
                                    Search:
                                    <div className="ms-2 d-inline-block">
                                        <input type="text" className="form-control form-control-sm" aria-label="Search invoice">
                                    </div>
                                </div>
                            </div>
                        </div>--> */}
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap datatable table-compact">
                      <thead>
                        <tr>
                          <th className="w-1">
                            <input
                              id="form-check-all"
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select all users"
                            />
                          </th>
                          <th>분류</th>
                          <th>
                            <a className="sort-item" data-sort="id">
                              회원ID
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="nickName">
                              닉네임
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="created">
                              가입일
                              <i className="ti ti-chevron-up"></i>
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="lastLoginDate">
                              최근접속일
                            </a>
                          </th>
                          <th style={{ width: "100px" }}>
                            <a className="sort-item" data-sort="level">
                              권한
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="referrer">
                              추천인
                            </a>
                          </th>
                          <th className="text-end">
                            <a className="sort-item" data-sort="monthRevenue">
                              이달수익
                            </a>
                          </th>
                          <th className="text-end">
                            <a className="sort-item" data-sort="totalRevenue">
                              누적수익
                            </a>
                          </th>
                          <th className="text-end">
                            <a className="sort-item" data-sort="cash">
                              캐쉬
                            </a>
                          </th>
                          <th className="text-end">
                            <a className="sort-item" data-sort="point">
                              포인트
                            </a>
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="137"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>137</td>
                          <td>
                            <a
                              href="#"
                              className="edit-btn"
                              data-id="137"
                              onClick={handleShow}
                            >
                              <u>kaka18 (jackylu1)</u>
                            </a>
                          </td>
                          <td>2022-03-07 11:14:56.0</td>
                          <td>2022-03-07 11:14:56.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="137"
                              defaultValue={"default"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu1</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/137">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/137">20,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/137"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="137"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/137"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="137"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="136"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>136</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="136" onClick={handleShow}>
                              <u>kaka17</u>
                            </a>
                          </td>
                          <td>2022-03-07 11:12:38.0</td>
                          <td>2022-03-07 11:12:38.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="136"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td></td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/136">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/136">20,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/136"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="136"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/136"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="136"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="135"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>135</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="135" onClick={handleShow}>
                              <u>kaka16</u>
                            </a>
                          </td>
                          <td>2022-03-07 11:08:00.0</td>
                          <td>2022-03-07 13:02:37.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="135"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td></td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/135">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/135">20,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/135"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="135"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/135"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="135"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="134"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>134</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="134" onClick={handleShow}>
                              <u>tsara9</u>
                            </a>
                          </td>
                          <td>2022-03-06 20:31:18.0</td>
                          <td>2022-03-06 20:31:18.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="134"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td></td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/134">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/134">10,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/134"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="134"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/134"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="134"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="133"
                            />
                          </td>
                          <td>
                            <span className="badge bg-dark">관리자</span>
                          </td>
                          <td>133</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="133" onClick={handleShow}>
                              <u>tsara8</u>
                            </a>
                          </td>
                          <td>2022-03-06 20:26:08.0</td>
                          <td>2022-03-06 20:26:08.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="133"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu9</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/133">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/133">10,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/133"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="133"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/133"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="133"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="132"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>132</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="132" onClick={handleShow}>
                              <u>tsara7</u>
                            </a>
                          </td>
                          <td>2022-03-05 23:39:49.0</td>
                          <td>2022-03-05 23:39:49.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="132"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu9</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/132">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/132">10,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/132"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="132"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/132"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="132"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="131"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>131</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="131" onClick={handleShow}>
                              <u>tsara6</u>
                            </a>
                          </td>
                          <td>2022-03-05 23:36:58.0</td>
                          <td>2022-03-05 23:36:58.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="131"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td></td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/131">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/131">10,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/131"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="131"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/131"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="131"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="130"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>130</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="130" onClick={handleShow}>
                              <u>tsara5</u>
                            </a>
                          </td>
                          <td>2022-03-05 23:35:11.0</td>
                          <td>2022-03-05 23:35:11.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="130"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td></td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/130">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/130">10,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/130"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="130"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/130"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="130"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="129"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>129</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="129" onClick={handleShow}>
                              <u>kaka15 (jackylu1)</u>
                            </a>
                          </td>
                          <td>2022-03-04 19:47:49.0</td>
                          <td>2022-03-04 19:48:32.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="129"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu1</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/129">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/129">10,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/129"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="129"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/129"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="129"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="128"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>128</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="128" onClick={handleShow}>
                              <u>kaka14 (jackylu1)</u>
                            </a>
                          </td>
                          <td>2022-03-04 17:19:09.0</td>
                          <td>2022-03-04 19:19:54.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="128"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu1</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/128">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/128">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/128"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="128"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/128"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="128"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="127"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>127</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="127" onClick={handleShow}>
                              <u>tsara4</u>
                            </a>
                          </td>
                          <td>2022-03-03 17:22:44.0</td>
                          <td>2022-03-03 17:22:44.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="127"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu9</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/127">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/127">10,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/127"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="127"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/127"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="127"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="126"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>126</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="126" onClick={handleShow}>
                              <u>tsara3</u>
                            </a>
                          </td>
                          <td>2022-03-03 16:59:12.0</td>
                          <td>2022-03-03 16:59:12.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="126"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu9</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/126">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/126">10,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/126"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="126"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/126"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="126"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="125"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>125</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="125" onClick={handleShow}>
                              <u>kaka13 (jackylu1)</u>
                            </a>
                          </td>
                          <td>2022-03-03 16:18:59.0</td>
                          <td>2022-03-07 12:28:57.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="125"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu1</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/125">6,050</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/125">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/125"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="125"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/125"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="125"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="124"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>124</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="124" onClick={handleShow}>
                              <u>kaka12 (jackylu1)</u>
                            </a>
                          </td>
                          <td>2022-03-03 15:58:24.0</td>
                          <td>2022-03-07 15:08:22.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="124"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu1</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/124">100,000</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/124">10,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/124"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="124"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/124"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="124"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="123"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>123</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="123" onClick={handleShow}>
                              <u>kaka11 (jackylu1)</u>
                            </a>
                          </td>
                          <td>2022-03-03 15:51:30.0</td>
                          <td>2022-03-07 15:16:02.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="123"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu4</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/123">10,846,449</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/123">10,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/123"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="123"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/123"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="123"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="122"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>122</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="122" onClick={handleShow}>
                              <u>tsara2 (sara)</u>
                            </a>
                          </td>
                          <td>2022-03-03 15:39:33.0</td>
                          <td>2022-03-03 15:39:33.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="122"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>sara</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/122">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/122">10,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/122"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="122"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/122"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="122"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="121"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>121</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="121" onClick={handleShow}>
                              <u>tsara 1 (sara)</u>
                            </a>
                          </td>
                          <td>2022-03-02 14:04:39.0</td>
                          <td>2022-03-02 14:04:39.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="121"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>sara</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/121">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/121">10,000</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/121"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="121"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/121"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="121"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="120"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>120</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="120" onClick={handleShow}>
                              <u>테스트0225</u>
                            </a>
                          </td>
                          <td>2022-02-25 14:51:03.0</td>
                          <td></td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="120"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td></td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/120">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/120">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/120"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="120"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/120"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="120"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="119"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>119</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="119" onClick={handleShow}>
                              <u>테에스으트으</u>
                            </a>
                          </td>
                          <td>2022-02-25 10:36:29.0</td>
                          <td></td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="119"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td></td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/119">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/119">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/119"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="119"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/119"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="119"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="118"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>118</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="118" onClick={handleShow}>
                              <u>0225테스트1</u>
                            </a>
                          </td>
                          <td>2022-02-25 10:36:02.0</td>
                          <td></td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="118"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td></td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/118">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/118">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/118"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="118"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/118"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="118"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="117"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>117</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="117" onClick={handleShow}>
                              <u>0225테스트</u>
                            </a>
                          </td>
                          <td>2022-02-25 10:33:37.0</td>
                          <td></td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="117"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td></td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/117">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/117">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/117"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="117"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/117"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="117"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="116"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>116</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="116" onClick={handleShow}>
                              <u>ㅇ2ㅇ34</u>
                            </a>
                          </td>
                          <td>2022-02-23 14:38:48.0</td>
                          <td>2022-02-25 11:35:11.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="116"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>test고고</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/116">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/116">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/116"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="116"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/116"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="116"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="114"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>114</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="114" onClick={handleShow}>
                              <u>테스특</u>
                            </a>
                          </td>
                          <td>2022-02-23 14:17:05.0</td>
                          <td>2022-02-23 14:20:24.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="114"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>test고고</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/114">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/114">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/114"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="114"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/114"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="114"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="110"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>110</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="110" onClick={handleShow}>
                              <u>helloworld (jackylu1)</u>
                            </a>
                          </td>
                          <td>2022-02-22 17:08:33.0</td>
                          <td>2022-02-22 18:09:28.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="110"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu4</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/110">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/110">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/110"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="110"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/110"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="110"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="109"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>109</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="109" onClick={handleShow}>
                              <u>kaka10 (jackylu1)</u>
                            </a>
                          </td>
                          <td>2022-02-22 11:23:47.0</td>
                          <td>2022-03-04 19:31:34.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="109"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu4</td>
                          <td className="text-end">5,000</td>
                          <td className="text-end">55,000</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/109">1,053,861</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/109">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/109"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="109"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/109"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="109"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="108"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>108</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="108" onClick={handleShow}>
                              <u>testu2 (jackylu1)</u>
                            </a>
                          </td>
                          <td>2022-02-19 20:53:20.0</td>
                          <td>2022-02-19 21:23:50.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="108"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu4</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/108">200,000</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/108">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/108"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="108"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/108"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="108"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="107"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>107</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="107" onClick={handleShow}>
                              <u>testu1 (jackylu1)</u>
                            </a>
                          </td>
                          <td>2022-02-19 17:38:09.0</td>
                          <td>2022-02-19 17:38:09.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="107"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>jackylu1</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/107">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/107">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/107"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="107"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/107"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="107"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="106"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>106</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="106" onClick={handleShow}>
                              <u>test고고고</u>
                            </a>
                          </td>
                          <td>2022-02-12 20:15:23.0</td>
                          <td>2022-03-07 11:34:23.0</td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="106"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td></td>
                          <td className="text-end">80,000</td>
                          <td className="text-end">165,000</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/106">741,075</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/106">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/106"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="106"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/106"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="106"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="103"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>103</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="103" onClick={handleShow}>
                              <u>adminin</u>
                            </a>
                          </td>
                          <td>2022-02-12 14:12:00.0</td>
                          <td></td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="103"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td></td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/103">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/103">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/103"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="103"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/103"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="103"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="102"
                            />
                          </td>
                          <td>
                            <span className="badge bg-azure">일반</span>
                          </td>
                          <td>102</td>
                          <td>
                            <a href="#" className="edit-btn" data-id="102" onClick={handleShow}>
                              <u>addadd4</u>
                            </a>
                          </td>
                          <td>2022-02-12 14:10:25.0</td>
                          <td></td>
                          {/* <!-- <td className="text-end">
                                        <span th:utext="${user?.level}"></span>등급
                                    </td> --> */}
                          <td>
                            <select
                              className="form-select select-user-level"
                              data-userid="102"
                              defaultValue={"defalut"}
                            >
                              <option value="0">0 등급</option>
                              <option value="1">1 등급</option>
                              <option value="2">2 등급</option>
                              <option value="3">3 등급</option>
                              <option value="4">4 등급</option>
                              <option value="5">5 등급</option>
                              <option value="6">6 등급</option>
                              <option value="7">7 등급</option>
                              <option value="8">8 등급</option>
                              <option value="9">9 등급</option>
                            </select>
                          </td>
                          <td>test고고</td>
                          <td className="text-end">0</td>
                          <td className="text-end">0</td>
                          {/* <!-- <td th:utext="${#numbers.formatDecimal(user?.balance ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td>
                                    <td th:utext="${#numbers.formatDecimal(user?.point ?: 0, 0, 'COMMA', 0, 'POINT')}" className="text-end">...</td> --> */}
                          <td className="text-end">
                            <a href="/transaction/list/user/102">0</a>
                            {/* <!--                                        <input type="number" className="form-control balance-input" th:value="${user?.balance} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a href="/transaction/points/user/102">0</a>
                            {/* <!--                                        <input type="number" className="form-control points-input" th:value="${user?.point} ?: 0" th:attr="data-userid=${user.id}"/>--> */}
                          </td>
                          <td className="text-end">
                            <a
                              href="/user/quickedit/102"
                              className="btn btn-outline-green btn-sm btn-quickedit"
                              data-userid="102"
                            >
                              저장
                            </a>
                            <a
                              href="/user/edit/102"
                              className="btn btn-white btn-sm"
                            >
                              수정
                            </a>
                            {/* <!--                                        <a th:href="@{/user/{id}(id=${user.id})}" className="btn btn-white btn-sm">--> */}
                            {/* <!--                                            상세--> */}
                            {/* <!--                                        </a>--> */}
                            <a
                              href="#"
                              className="btn btn-white text-red delete-link delete-item-btn btn-sm"
                              data-id="102"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <div className="btn-list">
                      {/* <!--                                <span className="d-none d-sm-inline">--> */}
                      {/* <!--                                    <a href="#" className="btn btn-outline-secondary" data-bs-toggle="modal"--> */}
                      {/* <!--                                       data-bs-target="#user-modal">--> */}
                      {/* <!--                                        TEST MODAL--> */}
                      {/* <!--                                    </a>--> */}
                      {/* <!--                                </span>--> */}
                      {/* <!--                                <span className="d-none d-sm-inline">--> */}
                      {/* <!--                                    <a href="#" className="btn btn-outline-secondary">--> */}
                      {/* <!--                                        선택수정--> */}
                      {/* <!--                                    </a>--> */}
                      {/* <!--                                </span>--> */}
                      <span className="d-none d-sm-inline">
                        <a
                          data-url="/user/bulkblock"
                          data-confirm="선택한 유저들을 차단하시겠습니까?"
                          href="#"
                          className="btn btn-outline-warning bulk-action-btn"
                        >
                          회원차단
                        </a>
                      </span>

                      <span className="d-none d-sm-inline">
                        <a
                          data-url="/user/bulkdelete"
                          data-confirm="선택한 유저들을 삭제하시겠습니까?"
                          href="#"
                          className="btn btn-outline-warning bulk-action-btn"
                        >
                          삭제하기
                        </a>
                      </span>
                      <span className="d-none d-sm-inline">
                        <a
                          data-url="/user/bulkcheating"
                          data-confirm="선택한 유저들을 가라처리 하시겠습니까?"
                          href="#"
                          className="btn btn-outline-danger bulk-action-btn"
                        >
                          회원가라
                        </a>
                      </span>
                      <span className="d-none d-sm-inline">
                        <a
                          href="/user/download/all"
                          className="btn btn-outline-success"
                        >
                          <i className="ti ti-file-export"></i> 엑셀 (전체)
                        </a>
                      </span>
                      <span className="d-none d-sm-inline">
                        <a
                          href="/user/download/active"
                          className="btn btn-outline-success"
                        >
                          <i className="ti ti-file-export"></i> 엑셀 (정상)
                        </a>
                      </span>
                    </div>

                    <ul className="pagination m-0 ms-auto">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          tabIndex="-1"
                          aria-disabled="true"
                          href="/user/list?&amp;page=0"
                          disabled="disabled"
                        >
                          <i className="ti ti-chevron-left"></i>
                          이전
                        </a>
                      </li>

                      <li className="page-item active">
                        <a className="page-link" href="/user/list?&amp;page=1">
                          1
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="/user/list?&amp;page=2">
                          2
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="/user/list?&amp;page=3">
                          3
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="/user/list?&amp;page=4">
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
                        <a className="page-link" href="/user/list?&amp;page=2">
                          다음 <i className="ti ti-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-muted note">
                * 회원자료 삭제시 다른 회원이 기존 회원아이디를 사용하지
                못하도록 회원아이디, 이름, 별명은 삭제하지 않고 영구 보관합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <UserInfo show={show} handleClose={handleClose} />
    </>
  );
};

export default UserManagement;

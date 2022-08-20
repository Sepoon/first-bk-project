import React from "react";

const Message = () => {
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
                <h2 className="page-title">쪽지관리</h2>
              </div>

              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <button className="btn btn-primary" id="send-multiple-msg">
                    쪽지발송
                  </button>
                  <form
                    action="/privatemessage/list"
                    method="get"
                    className="d-flex"
                  >
                    <select
                      defaultValue={"DEFAULT"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="sender">보낸이</option>
                      <option value="receiver">받는이</option>
                      <option value="content">내용</option>
                      {/* <!--                                    <option th:selected="${searchBy} == 'nickName'? 'selected'" value="nickName">별명</option>-->
<!--                                    <option th:selected="${searchBy} == 'memberID'? 'selected'" value="memberID">회원ID</option>-->
<!--                                    <option th:selected="${searchBy} == 'title'? 'selected'" value="title">제목</option>--> */}
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
                            <input
                              id="form-check-all"
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select all"
                            />
                          </th>
                          <th>보낸이</th>
                          <th>받는이</th>
                          <th>보낸시간</th>
                          <th>제목</th>
                          <th>내용</th>
                          <th>상태 </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="164"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-07 11:14:56</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="164"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="137"
                              >
                                jackylu18
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="163"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-07 11:12:38</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="163"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="136"
                              >
                                jackylu17
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="162"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-07 11:08:03</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="162"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="135"
                              >
                                jackylu16
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="161"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-06 21:37:18</td>
                          <td>this is a private message</td>
                          <td>this is a private message from admin</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="161"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="71"
                              >
                                jackylu7
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="160"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-06 20:31:18</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="160"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="134"
                              >
                                tsara9
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="159"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-06 20:26:10</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="159"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="133"
                              >
                                tsara8
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="158"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-05 23:39:49</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="158"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="132"
                              >
                                tsara7
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="157"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-05 23:36:59</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="157"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="131"
                              >
                                tsara6
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="156"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-05 23:35:13</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="156"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="130"
                              >
                                tsara5
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="155"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-04 19:47:51</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="155"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="129"
                              >
                                jackylu15
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="154"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>13명</td>
                          <td>2022-03-03 18:29:34</td>
                          <td>hi there</td>
                          <td>
                            checking if the content is too long, will it
                            breaking the layout? checking if the content is too
                            long, will it breaking the layout? checking if the
                            content is too long, will it breaking the layout?
                            checking if the content is too long, will it
                            breaking the layout? checking if the content is too
                            long, will it breaking the layout? checking if the
                            content is too long, will it breaking the layout?
                            checking if the content is too long, will it
                            breaking the layout? checking if the content is too
                            long, will it breaking the layout? checking if the
                            content is too long, will it breaking the layout?
                            checking if the content is too long, will it
                            breaking the layout?{" "}
                          </td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-dark me-1"></span>{" "}
                                테이크 아웃
                              </span>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="67"
                              >
                                jackylu3
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="68"
                              >
                                jackylu4
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="69"
                              >
                                jackylu5
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="70"
                              >
                                jackylu6
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="72"
                              >
                                jackylu8
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="98"
                              >
                                testuser2
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="107"
                              >
                                testu1
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="108"
                              >
                                testu2
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="109"
                              >
                                jackylu10
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="110"
                              >
                                helloworld
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="123"
                              >
                                jackylu11
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="124"
                              >
                                jackylu12
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="125"
                              >
                                jackylu13
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="153"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>3명</td>
                          <td>2022-03-03 18:16:52</td>
                          <td>test</td>
                          <td>test</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-dark me-1"></span>{" "}
                                테이크 아웃
                              </span>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="20"
                              >
                                sara
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="109"
                              >
                                jackylu10
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="152"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-03 17:22:46</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="152"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="127"
                              >
                                tsara4
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="151"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-03 16:59:14</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="151"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="126"
                              >
                                tsara3
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="150"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-03 16:19:00</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="150"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="125"
                              >
                                jackylu13
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="149"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-03 15:58:25</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="149"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="124"
                              >
                                jackylu12
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="148"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-03 15:51:30</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="148"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="123"
                              >
                                jackylu11
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="147"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-03 15:39:35</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="147"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="122"
                              >
                                tsara2
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="146"
                            />
                          </td>
                          <td>
                            <a href="#" className="open-user-info-modal">
                              Miniplay Admin
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-02 14:04:41</td>
                          <td></td>
                          <td>가입을 환영합니다!!!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="146"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="121"
                              >
                                tsara1
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="145"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>4명</td>
                          <td>2022-03-01 17:44:15</td>
                          <td>hi</td>
                          <td>body</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="145"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="80"
                              >
                                test1515
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="81"
                              >
                                testuser
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="82"
                              >
                                dlwlsi2
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="144"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-03-01 17:42:28</td>
                          <td>33</td>
                          <td>33333</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="144"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="143"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>2명</td>
                          <td>2022-03-01 17:40:54</td>
                          <td>hi</td>
                          <td>hiiiii</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="143"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="67"
                              >
                                jackylu3
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="107"
                              >
                                testu1
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="142"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>2명</td>
                          <td>2022-03-01 17:38:33</td>
                          <td>aaaaa</td>
                          <td>bbbbbb</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="142"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="109"
                              >
                                jackylu10
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="141"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>2명</td>
                          <td>2022-03-01 11:44:06</td>
                          <td>test send multiptle 2</td>
                          <td>hi sara, how are you?</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-dark me-1"></span>{" "}
                                테이크 아웃
                              </span>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="22"
                              >
                                sara3
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="23"
                              >
                                sara4
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="140"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>2명</td>
                          <td>2022-03-01 11:25:24</td>
                          <td></td>
                          <td>hi jacky</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-dark me-1"></span>{" "}
                                테이크 아웃
                              </span>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="73"
                              >
                                jackylu9
                              </a>
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="109"
                              >
                                jackylu10
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="139"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-02-28 19:02:00</td>
                          <td></td>
                          <td>test</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="139"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="20"
                              >
                                sara
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="138"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-02-28 18:53:38</td>
                          <td></td>
                          <td>asdasd</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="138"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="20"
                              >
                                sara
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="137"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-02-28 09:58:57</td>
                          <td></td>
                          <td>hi kamie</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="137"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="51"
                              >
                                tkamie3
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="136"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              kk0972
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2022-01-21 12:35:19</td>
                          <td></td>
                          <td>하이루</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="136"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="80"
                              >
                                test1515
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="row-header row-expanded">
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select"
                              value="135"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="52"
                            >
                              b612hun
                            </a>
                          </td>
                          <td>1명</td>
                          <td>2021-11-07 17:35:59</td>
                          <td></td>
                          <td>hello!</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <span>
                                <span className="badge bg-success me-1"></span>{" "}
                                활동적인
                              </span>
                              <button
                                className="btn btn-danger take-away-btn"
                                data-id="135"
                              >
                                테이크 아웃
                              </button>
                            </div>
                          </td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr style={{ display: "none" }}>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              <a
                                href="#"
                                className="open-user-info-modal"
                                data-userid="3"
                              >
                                tuser1
                              </a>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <div className="btn-list">
                      <span className="d-none d-sm-inline">
                        <a
                          data-url="/privatemessage/bulkdelete"
                          id="bulk-delete-btn"
                          href="#"
                          className="btn btn-outline-secondary"
                        >
                          삭제하기
                        </a>
                      </span>
                    </div>

                    <ul className="pagination m-0 ms-auto">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          tabIndex="-1"
                          aria-disabled="true"
                          href="/privatemessage/list?&amp;page=0"
                          disabled="disabled"
                        >
                          <i className="ti ti-chevron-left"></i>
                          이전
                        </a>
                      </li>

                      <li className="page-item active">
                        <a
                          className="page-link"
                          href="/privatemessage/list?&amp;page=1"
                        >
                          1
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/privatemessage/list?&amp;page=2"
                        >
                          2
                        </a>
                      </li>

                      {/* <!--        <th:block th:each="pageNum: ${#numbers.sequence(1, pageCount)}">--> */}
                      {/* <!--            <li className="page-item" th:classappend="${pageNum} == ${page}? 'active'">--> */}
                      {/* <!--                <a className="page-link" th:href="${mainPath} + '&page=' + ${pageNum}" th:text="${pageNum}"-->
<!--                   th:disabled="${pageNum} == ${page}? 'disabled'"></a>-->
<!--            </li>-->
<!--        </th:block>--> */}
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/privatemessage/list?&amp;page=2"
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

export default Message;

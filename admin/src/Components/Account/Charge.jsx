import React, { useState } from "react";
import UserInfo from "../Popup/UserInfo";

const Charge = () => {
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
                <h2 className="page-title">충전관리</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="" method="get" className="d-flex">
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
                      name="paymentType"
                    >
                      <option value="">전체</option>
                      <option value="1">휴대폰</option>
                      <option value="2">신용카드</option>
                      <option value="3">가상계좌</option>
                      <option value="4">무통장결제</option>
                    </select>
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="user">유저</option>
                      <option value="description">비고</option>
                      <option value="ip">IP</option>
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
                    <div className="d-inline-flex ms-2">
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
                            <rect x={4} y={5} width={16} height={16} rx={2} />
                            <line x1={16} y1={3} x2={16} y2={7} />
                            <line x1={8} y1={3} x2={8} y2={7} />
                            <line x1={4} y1={11} x2={20} y2={11} />
                            <line x1={11} y1={15} x2={12} y2={15} />
                            <line x1={12} y1={15} x2={12} y2={18} />
                          </svg>
                        </span>
                        <input
                          id="days-filter"
                          className="form-control"
                          readOnly=""
                        />
                      </div>
                      <button className="btn btn-primary ms-2" type="submit">
                        조회
                      </button>
                    </div>
                    <input
                      id="from"
                      name="from"
                      className="form-control"
                      type="hidden"
                    />
                    <input
                      id="to"
                      name="to"
                      className="form-control"
                      type="hidden"
                    />
                  </form>
                </div>
              </div>
            </div>

            <div className="total">
              총 <span>95</span>건
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-deck row-cards">
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-body p-2 text-center">
                    <div className="h1 mt-3">12,247,999</div>
                    <div className="text-muted mb-3">총결제</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-body p-2 text-center">
                    <div className="h1 mt-3">155,000</div>
                    <div className="text-muted mb-3">신용카드결제</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-body p-2 text-center">
                    <div className="h1 mt-3">160,000</div>
                    <div className="text-muted mb-3">가상계좌결제</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-body p-2 text-center">
                    <div className="h1 mt-3">11,932,999</div>
                    <div className="text-muted mb-3">휴대폰결제</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-body p-2 text-center">
                    <div className="h1 mt-3">4,148,972</div>
                    <div className="text-muted mb-3">무통장결제</div>
                  </div>
                </div>
              </div>
              {/* <!-- <div className="col-12">
                    <div className="card">
                        <table className="table card-table table-vcenter text-nowrap datatable mb-5">
                            <thead>
                            <tr>
                                <th className="text-center">총결제</th>
                                <th className="text-center">신용카드</th>
                                <th className="text-center">가상계좌</th>
                                <th className="text-center">휴대폰</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center font-weight-bold">총결제</td>
                                <td className="text-center font-weight-bold">총결제</td>
                                <td className="text-center font-weight-bold">총결제</td>
                                <td className="text-center font-weight-bold">총결제</td>
                            </tr>
                            <tr>
                                <td className="text-center text-red text-decoration-underline font-weight-bold" th:utext="${#numbers.formatDecimal(totalCreditCardPayments + totalBankTransferPayments + totalMobilePayments, 0, 'COMMA', 0, 'POINT')}"></td>
                                <td className="text-center text-red text-decoration-underline font-weight-bold" th:utext="${#numbers.formatDecimal(totalCreditCardPayments, 0, 'COMMA', 0, 'POINT')}"></td>
                                <td className="text-center text-red text-decoration-underline font-weight-bold" th:utext="${#numbers.formatDecimal(totalBankTransferPayments, 0, 'COMMA', 0, 'POINT')}"></td>
                                <td className="text-center text-red text-decoration-underline font-weight-bold" th:utext="${#numbers.formatDecimal(totalMobilePayments, 0, 'COMMA', 0, 'POINT')}"></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div> --> */}
              <div className="col-12">
                <div className="card">
                  {/* <!--
                        <div className="row align-items-center p-2">
                            <div className="col">
                                <div className="btn-list">
                                        <span className="d-none d-sm-inline">
                                            <a href="#" className="btn btn-primary btn-pill">
                                                전체 (230)
                                            </a>
                                        </span>
                                        <span className="d-none d-sm-inline">
                                            <a href="#" className="btn btn-outline-secondary btn-pill">
                                                진행중인 베팅 (15)
                                            </a>
                                        </span>
                                </div>
                            </div>
                        </div>
                        --> */}
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
                          <th>
                            <a className="sort-item" data-sort="user.nickName">
                              입금자(이름)
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="paymentType">
                              결제방법
                            </a>
                          </th>
                          <th className="text-right">
                            <a className="sort-item" data-sort="paymentAmount">
                              신청금액
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="created">
                              신청시간
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="responseDate">
                              처리시간
                            </a>
                          </th>
                          {/* <!--                                    <th>IP</th>--> */}
                          <th>
                            <a className="sort-item" data-sort="chargeStatus">
                              상태
                            </a>
                          </th>
                          {/* <!--<th>충전</th>--> */}
                          {/* <!--delete by requirement at 2022/02/07 (slide 35, i#3)--> */}
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>125</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="124"
                            >
                              kaka12(ajsdkajs)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">300,000</td>
                          <td>2022-03-07 15:08:34</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            <div className="col-12">
                              <a
                                className="btn btn-warning ms-2 log-action-btn"
                                href="/transaction/currency/125/setstatus?status=12"
                              >
                                충전
                              </a>
                              <a
                                className="btn btn-success ms-2 log-action-btn"
                                href="/transaction/currency/125/setstatus?status=10"
                              >
                                취소
                              </a>
                              <a
                                className="btn btn-danger ms-2 log-action-btn"
                                href="/transaction/currency/125/setstatus?status=5"
                              >
                                대기
                              </a>

                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>124</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="123"
                            >
                              kaka11(aaa)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">300,000</td>
                          <td>2022-03-07 15:06:26</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            <div className="col-12">
                              <a
                                className="btn btn-warning ms-2 log-action-btn"
                                href="/transaction/currency/124/setstatus?status=12"
                              >
                                충전
                              </a>
                              <a
                                className="btn btn-success ms-2 log-action-btn"
                                href="/transaction/currency/124/setstatus?status=10"
                              >
                                취소
                              </a>
                              <a
                                className="btn btn-danger ms-2 log-action-btn"
                                href="/transaction/currency/124/setstatus?status=5"
                              >
                                대기
                              </a>

                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>123</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="123"
                            >
                              kaka11(aaa)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">900,000</td>
                          <td>2022-03-07 14:53:05</td>
                          <td>2022-03-07 14:53:47</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>122</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="123"
                            >
                              kaka11(aaa)
                            </a>
                          </td>
                          <td>휴대폰</td>
                          <td className="text-right">9,999,999</td>
                          <td>2022-03-07 13:39:05</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>121</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="73"
                            >
                              jackylu9(AAAA)
                            </a>
                          </td>
                          <td>휴대폰</td>
                          <td className="text-right">900,000</td>
                          <td>2022-03-07 12:47:42</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>120</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="73"
                            >
                              jackylu9(AAAA)
                            </a>
                          </td>
                          <td>휴대폰</td>
                          <td className="text-right">300,000</td>
                          <td>2022-03-07 12:42:58</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>119</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="106"
                            >
                              test고고고(김테)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">30,000</td>
                          <td>2022-02-28 10:54:58</td>
                          <td>2022-02-28 10:55:11</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>118</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="116"
                            >
                              ㅇ2ㅇ34(ㅇㅇㅈ)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">12,222</td>
                          <td>2022-02-23 15:27:05</td>
                          <td>2022-02-23 15:27:13</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>취소</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>117</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="116"
                            >
                              ㅇ2ㅇ34(ㅇㅇㅈ)
                            </a>
                          </td>
                          <td>가상계좌</td>
                          <td className="text-right">30,000</td>
                          <td>2022-02-23 15:26:54</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>116</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="116"
                            >
                              ㅇ2ㅇ34(ㅇㅇㅈ)
                            </a>
                          </td>
                          <td>신용카드</td>
                          <td className="text-right">35,000</td>
                          <td>2022-02-23 15:26:37</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>115</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="106"
                            >
                              test고고고(김테)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">300,000</td>
                          <td>2022-02-23 11:31:24</td>
                          <td>2022-02-23 11:31:32</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>114</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="106"
                            >
                              test고고고(김테)
                            </a>
                          </td>
                          <td>휴대폰</td>
                          <td className="text-right">350,000</td>
                          <td>2022-02-23 11:30:42</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>113</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="108"
                            >
                              testu2(홍길동)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">60,000</td>
                          <td>2022-02-19 21:26:58</td>
                          <td>2022-02-19 21:27:14</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>108</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="106"
                            >
                              test고고고(김테)
                            </a>
                          </td>
                          <td>휴대폰</td>
                          <td className="text-right">50,000</td>
                          <td>2022-02-12 20:29:43</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>107</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="106"
                            >
                              test고고고(김테)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">50,000</td>
                          <td>2022-02-12 20:27:52</td>
                          <td>2022-02-23 10:36:26</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>106</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              본부장테스트(김건호)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">416,750</td>
                          <td>2022-01-25 17:13:06</td>
                          <td>2022-01-25 17:13:18</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>105</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              본부장테스트(김건호)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">10,000</td>
                          <td>2022-01-25 17:10:38</td>
                          <td>2022-01-25 17:10:44</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>104</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              본부장테스트(김건호)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">10,000</td>
                          <td>2022-01-25 17:09:35</td>
                          <td>2022-01-25 17:09:40</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>103</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="90"
                            >
                              ㅇㅈㅇㅈㅇ2(d,d,)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">300,000</td>
                          <td>2022-01-25 17:01:23</td>
                          <td>2022-01-25 17:01:36</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>102</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="90"
                            >
                              ㅇㅈㅇㅈㅇ2(d,d,)
                            </a>
                          </td>
                          <td>휴대폰</td>
                          <td className="text-right">33,000</td>
                          <td>2022-01-25 17:00:48</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>101</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              본부장테스트(김건호)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">10,000</td>
                          <td>2022-01-25 10:34:19</td>
                          <td>2022-01-25 10:35:38</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>100</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              본부장테스트(김건호)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">10,000</td>
                          <td>2022-01-25 10:33:38</td>
                          <td>2022-01-25 10:34:09</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>취소</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>99</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              본부장테스트(김건호)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">10,000</td>
                          <td>2022-01-25 10:33:17</td>
                          <td>2022-01-25 10:33:28</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>취소</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>98</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              본부장테스트(김건호)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">10,000</td>
                          <td>2022-01-25 10:32:50</td>
                          <td>2022-01-25 10:33:02</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>취소</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>97</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="80"
                            >
                              test고고(김또깡)
                            </a>
                          </td>
                          <td>휴대폰</td>
                          <td className="text-right">150,000</td>
                          <td>2022-01-17 15:50:42</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>96</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="80"
                            >
                              test고고(김또깡)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">1,290,000</td>
                          <td>2022-01-17 15:49:19</td>
                          <td>2022-01-17 16:30:27</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>95</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="80"
                            >
                              test고고(김또깡)
                            </a>
                          </td>
                          <td>무통장결제</td>
                          <td className="text-right">130,000</td>
                          <td>2022-01-17 15:49:06</td>
                          <td>2022-01-17 16:30:32</td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>취소</td>
                          <td>
                            <div className="col-12">
                              {/* <!--                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
--> */}
                            </div>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>94</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="80"
                            >
                              test고고(김또깡)
                            </a>
                          </td>
                          <td>가상계좌</td>
                          <td className="text-right">130,000</td>
                          <td>2022-01-17 15:48:58</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>93</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="80"
                            >
                              test고고(김또깡)
                            </a>
                          </td>
                          <td>신용카드</td>
                          <td className="text-right">120,000</td>
                          <td>2022-01-17 15:48:51</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>92</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="80"
                            >
                              test고고(김또깡)
                            </a>
                          </td>
                          <td>휴대폰</td>
                          <td className="text-right">150,000</td>
                          <td>2022-01-17 15:48:39</td>
                          <td></td>
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>신청</td>
                          <td>
                            {/* <!--delete by requirement at 2022/02/07 (slide 35, #3)--> */}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="card-footer d-flex align-items-center">
                    <ul className="pagination m-0 ms-auto">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          tabIndex="-1"
                          aria-disabled="true"
                          href="/transaction/currency?&amp;page=0"
                          disabled="disabled"
                        >
                          <i className="ti ti-chevron-left"></i>
                          이전
                        </a>
                      </li>

                      <li className="page-item active">
                        <a
                          className="page-link"
                          href="/transaction/currency?&amp;page=1"
                        >
                          1
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/currency?&amp;page=2"
                        >
                          2
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/currency?&amp;page=3"
                        >
                          3
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/currency?&amp;page=4"
                        >
                          4
                        </a>
                      </li>

                      {/* <!--        <th:block th:each="pageNum: ${#numbers.sequence(1, pageCount)}">--> */}
                      {/* <!--            <li className="page-item" th:classNameappend="${pageNum} == ${page}? 'active'">--> */}
                      {/* <!--                <a className="page-link" th:href="${mainPath} + '&page=' + ${pageNum}" th:text="${pageNum}"--> */}
                      {/* <!--                   th:disabled="${pageNum} == ${page}? 'disabled'"></a>--> */}
                      {/* <!--            </li>--> */}
                      {/* <!--        </th:block>--> */}
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/currency?&amp;page=2"
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
      <UserInfo show={show} handleClose={handleClose} />
    </>
  );
};

export default Charge;

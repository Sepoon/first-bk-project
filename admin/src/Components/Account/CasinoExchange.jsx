import React from "react";

const CasinoExchange = () => {
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
                <h2 className="page-title">카지노환전신청</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="" method="get" className="d-flex">
                    {/* <!--<select className="form-select w-auto" name="paymentType">
                                <option value="" th:selected="${paymentType == '' || paymentType == null}">전체</option>
                                <option value="1" th:selected="${paymentType == 1}">휴대폰</option>
                                <option value="2" th:selected="${paymentType == 2}">신용카드</option>
                                <option value="3" th:selected="${paymentType == 3}">가상계좌</option>
                                <option value="4" th:selected="${paymentType == 4}">무통장결제</option>
                            </select>
                            <select className="form-select w-auto" name="searchBy">
                                <option th:selected="${searchBy} == 'user'? 'selected'" value="user">유저</option>
                                <option th:selected="${searchBy} == 'description'? 'selected'" value="description">비고</option>
                                <option th:selected="${searchBy} == 'ip'? 'selected'" value="ip">IP</option>
                            </select>--> */}
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
              총 <span>12</span>건
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
                            <a className="sort-item" data-sort="txId">
                              번호
                              <i className="ti ti-chevron-up"></i>
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="username">
                              유저명
                            </a>
                          </th>
                          <th>게임</th>
                          <th className="text-right">
                            <a className="sort-item" data-sort="amount">
                              신청금액
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="txProcessedAt">
                              처리시
                              {/* <!--                                            신청시간--> */}
                            </a>
                          </th>
                          <th>상태</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>185662114</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="77"
                            >
                              다이브
                            </a>
                          </td>
                          {/* <!--                                        <td th:utext="${@thUtil.renderPaymentType(log.paymentType)}">...</td>--> */}

                          <td>
                            evolution baccarat No Comm Speed Baccarat A#16190
                          </td>

                          <td className="text-right">50,000</td>
                          <td>2021-12-22 05:46:26</td>
                          {/* <!--                                        <td th:utext="${#dates.format(log.txProcessedAt, 'yyyy-MM-dd HH:mm:ss')}">...</td>--> */}
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          {/* <!--<td>
                                            <th:block th:switch="${log.chargeStatus}">
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                    신청
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).COMPLETED.value}">
                                                    충전
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                    대기
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                    취소
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).ERROR.value}">
                                                    오류
                                                </th:block>
                                            </th:block>
                                        </td>--> */}
                          {/* <!--<td>
                                            <div className="col-12" th:if="${log.paymentType} == ${T(com.miniplay.core.enums.PaymentType).DEPOSIT.value}">
                                                <th:block th:switch="${log.chargeStatus}">
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=5'}" th:utext="대기"></a>
                                                    </th:block>
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                    </th:block>
&lt;!&ndash;                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
&ndash;&gt;
                                                </th:block>
                                            </div>
                                        &lt;!&ndash;delete by requirement at 2022/02/07 (slide 35, #3)&ndash;&gt;
                                        </td>--> */}
                        </tr>
                        <tr>
                          <td>185652604</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="77"
                            >
                              다이브
                            </a>
                          </td>
                          {/* <!--                                        <td th:utext="${@thUtil.renderPaymentType(log.paymentType)}">...</td>--> */}

                          <td>vivo live Sun Macau Baccarat 2#724</td>

                          <td className="text-right">3,900</td>
                          <td>2021-12-22 05:39:06</td>
                          {/* <!--                                        <td th:utext="${#dates.format(log.txProcessedAt, 'yyyy-MM-dd HH:mm:ss')}">...</td>--> */}
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          {/* <!--<td>
                                            <th:block th:switch="${log.chargeStatus}">
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                    신청
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).COMPLETED.value}">
                                                    충전
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                    대기
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                    취소
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).ERROR.value}">
                                                    오류
                                                </th:block>
                                            </th:block>
                                        </td>--> */}
                          {/* <!--<td>
                                            <div className="col-12" th:if="${log.paymentType} == ${T(com.miniplay.core.enums.PaymentType).DEPOSIT.value}">
                                                <th:block th:switch="${log.chargeStatus}">
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=5'}" th:utext="대기"></a>
                                                    </th:block>
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                    </th:block>
&lt;!&ndash;                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
&ndash;&gt;
                                                </th:block>
                                            </div>
                                        &lt;!&ndash;delete by requirement at 2022/02/07 (slide 35, #3)&ndash;&gt;
                                        </td>--> */}
                        </tr>
                        <tr>
                          <td>153074907</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          {/* <!--                                        <td th:utext="${@thUtil.renderPaymentType(log.paymentType)}">...</td>--> */}

                          <td>vivo live VA Roulette#732</td>

                          <td className="text-right">10,000</td>
                          <td>2021-12-08 01:17:24</td>
                          {/* <!--                                        <td th:utext="${#dates.format(log.txProcessedAt, 'yyyy-MM-dd HH:mm:ss')}">...</td>--> */}
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          {/* <!--<td>
                                            <th:block th:switch="${log.chargeStatus}">
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                    신청
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).COMPLETED.value}">
                                                    충전
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                    대기
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                    취소
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).ERROR.value}">
                                                    오류
                                                </th:block>
                                            </th:block>
                                        </td>--> */}
                          {/* <!--<td>
                                            <div className="col-12" th:if="${log.paymentType} == ${T(com.miniplay.core.enums.PaymentType).DEPOSIT.value}">
                                                <th:block th:switch="${log.chargeStatus}">
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=5'}" th:utext="대기"></a>
                                                    </th:block>
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                    </th:block>
&lt;!&ndash;                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
&ndash;&gt;
                                                </th:block>
                                            </div>
                                        &lt;!&ndash;delete by requirement at 2022/02/07 (slide 35, #3)&ndash;&gt;
                                        </td>--> */}
                        </tr>
                        <tr>
                          <td>152224110</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          {/* <!--                                        <td th:utext="${@thUtil.renderPaymentType(log.paymentType)}">...</td>--> */}

                          <td>vivo live Sun Macau Roulette#703</td>

                          <td className="text-right">10,000</td>
                          <td>2021-12-06 19:18:16</td>
                          {/* <!--                                        <td th:utext="${#dates.format(log.txProcessedAt, 'yyyy-MM-dd HH:mm:ss')}">...</td>--> */}
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          {/* <!--<td>
                                            <th:block th:switch="${log.chargeStatus}">
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                    신청
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).COMPLETED.value}">
                                                    충전
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                    대기
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                    취소
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).ERROR.value}">
                                                    오류
                                                </th:block>
                                            </th:block>
                                        </td>--> */}
                          {/* <!--<td>
                                            <div className="col-12" th:if="${log.paymentType} == ${T(com.miniplay.core.enums.PaymentType).DEPOSIT.value}">
                                                <th:block th:switch="${log.chargeStatus}">
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=5'}" th:utext="대기"></a>
                                                    </th:block>
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                    </th:block>
&lt;!&ndash;                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
&ndash;&gt;
                                                </th:block>
                                            </div>
                                        &lt;!&ndash;delete by requirement at 2022/02/07 (slide 35, #3)&ndash;&gt;
                                        </td>--> */}
                        </tr>
                        <tr>
                          <td>152213415</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          {/* <!--                                        <td th:utext="${@thUtil.renderPaymentType(log.paymentType)}">...</td>--> */}

                          <td>vivo live Bulgaria Baccarat 2#721</td>

                          <td className="text-right">1,950</td>
                          <td>2021-12-06 19:12:52</td>
                          {/* <!--                                        <td th:utext="${#dates.format(log.txProcessedAt, 'yyyy-MM-dd HH:mm:ss')}">...</td>--> */}
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          {/* <!--<td>
                                            <th:block th:switch="${log.chargeStatus}">
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                    신청
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).COMPLETED.value}">
                                                    충전
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                    대기
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                    취소
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).ERROR.value}">
                                                    오류
                                                </th:block>
                                            </th:block>
                                        </td>--> */}
                          {/* <!--<td>
                                            <div className="col-12" th:if="${log.paymentType} == ${T(com.miniplay.core.enums.PaymentType).DEPOSIT.value}">
                                                <th:block th:switch="${log.chargeStatus}">
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=5'}" th:utext="대기"></a>
                                                    </th:block>
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                    </th:block>
&lt;!&ndash;                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
&ndash;&gt;
                                                </th:block>
                                            </div>
                                        &lt;!&ndash;delete by requirement at 2022/02/07 (slide 35, #3)&ndash;&gt;
                                        </td>--> */}
                        </tr>
                        <tr>
                          <td>138727859</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          {/* <!--                                        <td th:utext="${@thUtil.renderPaymentType(log.paymentType)}">...</td>--> */}

                          <td>vivo live Spanish Roulette#702</td>

                          <td className="text-right">3,600</td>
                          <td>2021-11-30 19:07:12</td>
                          {/* <!--                                        <td th:utext="${#dates.format(log.txProcessedAt, 'yyyy-MM-dd HH:mm:ss')}">...</td>--> */}
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          {/* <!--<td>
                                            <th:block th:switch="${log.chargeStatus}">
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                    신청
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).COMPLETED.value}">
                                                    충전
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                    대기
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                    취소
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).ERROR.value}">
                                                    오류
                                                </th:block>
                                            </th:block>
                                        </td>--> */}
                          {/* <!--<td>
                                            <div className="col-12" th:if="${log.paymentType} == ${T(com.miniplay.core.enums.PaymentType).DEPOSIT.value}">
                                                <th:block th:switch="${log.chargeStatus}">
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=5'}" th:utext="대기"></a>
                                                    </th:block>
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                    </th:block>
&lt;!&ndash;                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
&ndash;&gt;
                                                </th:block>
                                            </div>
                                        &lt;!&ndash;delete by requirement at 2022/02/07 (slide 35, #3)&ndash;&gt;
                                        </td>--> */}
                        </tr>
                        <tr>
                          <td>138667027</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          {/* <!--                                        <td th:utext="${@thUtil.renderPaymentType(log.paymentType)}">...</td>--> */}

                          <td>vivo live Spanish Roulette#702</td>

                          <td className="text-right">1,800</td>
                          <td>2021-11-30 18:34:30</td>
                          {/* <!--                                        <td th:utext="${#dates.format(log.txProcessedAt, 'yyyy-MM-dd HH:mm:ss')}">...</td>--> */}
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          {/* <!--<td>
                                            <th:block th:switch="${log.chargeStatus}">
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                    신청
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).COMPLETED.value}">
                                                    충전
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                    대기
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                    취소
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).ERROR.value}">
                                                    오류
                                                </th:block>
                                            </th:block>
                                        </td>--> */}
                          {/* <!--<td>
                                            <div className="col-12" th:if="${log.paymentType} == ${T(com.miniplay.core.enums.PaymentType).DEPOSIT.value}">
                                                <th:block th:switch="${log.chargeStatus}">
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=5'}" th:utext="대기"></a>
                                                    </th:block>
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                    </th:block>
&lt;!&ndash;                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
&ndash;&gt;
                                                </th:block>
                                            </div>
                                        &lt;!&ndash;delete by requirement at 2022/02/07 (slide 35, #3)&ndash;&gt;
                                        </td>--> */}
                        </tr>
                        <tr>
                          <td>136460121</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="71"
                            >
                              jackylu7
                            </a>
                          </td>
                          {/* <!--                                        <td th:utext="${@thUtil.renderPaymentType(log.paymentType)}">...</td>--> */}

                          <td>vivo live Galaxy Baccarat 2#748</td>

                          <td className="text-right">1,000</td>
                          <td>2021-11-29 17:35:21</td>
                          {/* <!--                                        <td th:utext="${#dates.format(log.txProcessedAt, 'yyyy-MM-dd HH:mm:ss')}">...</td>--> */}
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          {/* <!--<td>
                                            <th:block th:switch="${log.chargeStatus}">
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                    신청
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).COMPLETED.value}">
                                                    충전
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                    대기
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                    취소
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).ERROR.value}">
                                                    오류
                                                </th:block>
                                            </th:block>
                                        </td>--> */}
                          {/* <!--<td>
                                            <div className="col-12" th:if="${log.paymentType} == ${T(com.miniplay.core.enums.PaymentType).DEPOSIT.value}">
                                                <th:block th:switch="${log.chargeStatus}">
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=5'}" th:utext="대기"></a>
                                                    </th:block>
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                    </th:block>
&lt;!&ndash;                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
&ndash;&gt;
                                                </th:block>
                                            </div>
                                        &lt;!&ndash;delete by requirement at 2022/02/07 (slide 35, #3)&ndash;&gt;
                                        </td>--> */}
                        </tr>
                        <tr>
                          <td>132941952</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          {/* <!--                                        <td th:utext="${@thUtil.renderPaymentType(log.paymentType)}">...</td>--> */}

                          <td>vivo live Sun Macau Roulette#703</td>

                          <td className="text-right">10,000</td>
                          <td>2021-11-27 21:24:16</td>
                          {/* <!--                                        <td th:utext="${#dates.format(log.txProcessedAt, 'yyyy-MM-dd HH:mm:ss')}">...</td>--> */}
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          {/* <!--<td>
                                            <th:block th:switch="${log.chargeStatus}">
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                    신청
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).COMPLETED.value}">
                                                    충전
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                    대기
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                    취소
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).ERROR.value}">
                                                    오류
                                                </th:block>
                                            </th:block>
                                        </td>--> */}
                          {/* <!--<td>
                                            <div className="col-12" th:if="${log.paymentType} == ${T(com.miniplay.core.enums.PaymentType).DEPOSIT.value}">
                                                <th:block th:switch="${log.chargeStatus}">
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=5'}" th:utext="대기"></a>
                                                    </th:block>
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                    </th:block>
&lt;!&ndash;                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
&ndash;&gt;
                                                </th:block>
                                            </div>
                                        &lt;!&ndash;delete by requirement at 2022/02/07 (slide 35, #3)&ndash;&gt;
                                        </td>--> */}
                        </tr>
                        <tr>
                          <td>132932072</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          {/* <!--                                        <td th:utext="${@thUtil.renderPaymentType(log.paymentType)}">...</td>--> */}

                          <td>vivo live Bulgaria Roulette#701</td>

                          <td className="text-right">10,000</td>
                          <td>2021-11-27 21:18:10</td>
                          {/* <!--                                        <td th:utext="${#dates.format(log.txProcessedAt, 'yyyy-MM-dd HH:mm:ss')}">...</td>--> */}
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          {/* <!--<td>
                                            <th:block th:switch="${log.chargeStatus}">
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                    신청
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).COMPLETED.value}">
                                                    충전
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                    대기
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                    취소
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).ERROR.value}">
                                                    오류
                                                </th:block>
                                            </th:block>
                                        </td>--> */}
                          {/* <!--<td>
                                            <div className="col-12" th:if="${log.paymentType} == ${T(com.miniplay.core.enums.PaymentType).DEPOSIT.value}">
                                                <th:block th:switch="${log.chargeStatus}">
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=5'}" th:utext="대기"></a>
                                                    </th:block>
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                    </th:block>
&lt;!&ndash;                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
&ndash;&gt;
                                                </th:block>
                                            </div>
                                        &lt;!&ndash;delete by requirement at 2022/02/07 (slide 35, #3)&ndash;&gt;
                                        </td>--> */}
                        </tr>
                        <tr>
                          <td>132880427</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          {/* <!--                                        <td th:utext="${@thUtil.renderPaymentType(log.paymentType)}">...</td>--> */}

                          <td>vivo live Bulgaria Roulette#701</td>

                          <td className="text-right">5,000</td>
                          <td>2021-11-27 20:49:09</td>
                          {/* <!--                                        <td th:utext="${#dates.format(log.txProcessedAt, 'yyyy-MM-dd HH:mm:ss')}">...</td>--> */}
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          {/* <!--<td>
                                            <th:block th:switch="${log.chargeStatus}">
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                    신청
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).COMPLETED.value}">
                                                    충전
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                    대기
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                    취소
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).ERROR.value}">
                                                    오류
                                                </th:block>
                                            </th:block>
                                        </td>--> */}
                          {/* <!--<td>
                                            <div className="col-12" th:if="${log.paymentType} == ${T(com.miniplay.core.enums.PaymentType).DEPOSIT.value}">
                                                <th:block th:switch="${log.chargeStatus}">
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=5'}" th:utext="대기"></a>
                                                    </th:block>
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                    </th:block>
&lt;!&ndash;                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
&ndash;&gt;
                                                </th:block>
                                            </div>
                                        &lt;!&ndash;delete by requirement at 2022/02/07 (slide 35, #3)&ndash;&gt;
                                        </td>--> */}
                        </tr>
                        <tr>
                          <td>132880426</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          {/* <!--                                        <td th:utext="${@thUtil.renderPaymentType(log.paymentType)}">...</td>--> */}

                          <td>vivo live Bulgaria Roulette#701</td>

                          <td className="text-right">5,000</td>
                          <td>2021-11-27 20:49:09</td>
                          {/* <!--                                        <td th:utext="${#dates.format(log.txProcessedAt, 'yyyy-MM-dd HH:mm:ss')}">...</td>--> */}
                          {/* <!--                                        <td th:utext="${log.ipAddress}">...</td>--> */}
                          <td>충전</td>
                          {/* <!--<td>
                                            <th:block th:switch="${log.chargeStatus}">
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                    신청
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).COMPLETED.value}">
                                                    충전
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                    대기
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                    취소
                                                </th:block>
                                                <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).ERROR.value}">
                                                    오류
                                                </th:block>
                                            </th:block>
                                        </td>--> */}
                          {/* <!--<td>
                                            <div className="col-12" th:if="${log.paymentType} == ${T(com.miniplay.core.enums.PaymentType).DEPOSIT.value}">
                                                <th:block th:switch="${log.chargeStatus}">
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).REQUESTED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=5'}" th:utext="대기"></a>
                                                    </th:block>
                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).PAUSED.value}">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}"  th:utext="충전"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="취소"></a>
                                                    </th:block>
&lt;!&ndash;                                                    <th:block th:case="${T(com.miniplay.core.enums.CurrencyTransactionLogChargeStatus).CANCELLED.value}">
                                                        취소 된
                                                    </th:block>
                                                    <th:block th:case="*">
                                                        <a className="btn btn-warning ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=1'}"  th:utext="기다리다"></a>
                                                        <a className="btn btn-success ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=10'}" th:utext="요금"></a>
                                                        <a className="btn btn-danger ms-2 log-action-btn" th:href="@{'/transaction/currency/' + ${log.id} + '/setstatus?status=12'}" th:utext="취소"></a>
                                                    </th:block>
&ndash;&gt;
                                                </th:block>
                                            </div>
                                        &lt;!&ndash;delete by requirement at 2022/02/07 (slide 35, #3)&ndash;&gt;
                                        </td>--> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="card-footer d-flex align-items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CasinoExchange;

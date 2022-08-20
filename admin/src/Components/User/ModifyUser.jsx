import React from "react";

const ModifyUser = () => {
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
                <h2 className="page-title">회원수정내역</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form
                    action="/user/changelog"
                    method="get"
                    className="d-flex"
                  >
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="user">사용자</option>
                      <option value="beforeChange">변경전</option>
                      <option value="afterChange">변경후</option>
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
              총 <span>434</span>건
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
                          {/* <!-- <th className="w-1"><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select"></th> --> */}
                          <th>
                            <a className="sort-item" data-sort="id">
                              로그ID
                              <i className="ti ti-chevron-up"></i>
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="ipAddress">
                              IP주소
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="user.userName">
                              유저명
                            </a>
                          </th>
                          {/* <!-- <th>필드</th> --> */}
                          <th>변경사항</th>
                          {/* <!-- <th>변경후</th> --> */}
                          <th>
                            <a className="sort-item" data-sort="created">
                              변경일
                            </a>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>434</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="434"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"jackylu11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":"","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$b30U68Ck3A1HOk9vgkK6YOvDkElYu2aNmoFFjpEvLXuTYYkpUUFAy","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":1,"depositbonusNormal":2,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"aaa","bankName":"023","bankAccount":"11111111","numLogins":null,"numBets":null,"partnerDepositPct":1.000000,"partnerMinigamePct":2.000000,"partnerCasinoPct":3.000000,"partnerPrematchPct":4.000000,"partnerInplayPct":5.000000,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":"","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$b30U68Ck3A1HOk9vgkK6YOvDkElYu2aNmoFFjpEvLXuTYYkpUUFAy","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":1,"depositbonusNormal":2,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":68,"referrer":"jackylu4","partner1Id":46,"partner1":"jackylu1","partner2Id":67,"partner2":"jackylu3","partner3Id":68,"partner3":"jackylu4","description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"aaa","bankName":"023","bankAccount":"11111111","numLogins":null,"numBets":null,"partnerDepositPct":1.000000,"partnerMinigamePct":2.000000,"partnerCasinoPct":3.000000,"partnerPrematchPct":4.000000,"partnerInplayPct":5.000000,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:41:15</td>
                        </tr>
                        <tr>
                          <td>433</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="433"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"jackylu11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":"","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$b30U68Ck3A1HOk9vgkK6YOvDkElYu2aNmoFFjpEvLXuTYYkpUUFAy","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"aaa","bankName":"023","bankAccount":"11111111","numLogins":null,"numBets":null,"partnerDepositPct":0.000000,"partnerMinigamePct":0.000000,"partnerCasinoPct":0.000000,"partnerPrematchPct":0.000000,"partnerInplayPct":0.000000,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"jackylu11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":"","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$b30U68Ck3A1HOk9vgkK6YOvDkElYu2aNmoFFjpEvLXuTYYkpUUFAy","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":1,"depositbonusNormal":2,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"aaa","bankName":"023","bankAccount":"11111111","numLogins":null,"numBets":null,"partnerDepositPct":1,"partnerMinigamePct":2,"partnerCasinoPct":3,"partnerPrematchPct":4,"partnerInplayPct":5,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:38:13</td>
                        </tr>
                        <tr>
                          <td>432</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="432"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":"","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$rxE357/Re0RYr4rp8WA59eqa9BoG2mlL8v3QVK5UUNn6sLAnlv0Wq","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@1234","pin":"1234","bankholderName":"aaa","bankName":"023","bankAccount":"11111111","numLogins":null,"numBets":null,"partnerDepositPct":0.000000,"partnerMinigamePct":0.000000,"partnerCasinoPct":0.000000,"partnerPrematchPct":0.000000,"partnerInplayPct":0.000000,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"jackylu11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":"","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$b30U68Ck3A1HOk9vgkK6YOvDkElYu2aNmoFFjpEvLXuTYYkpUUFAy","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"aaa","bankName":"023","bankAccount":"11111111","numLogins":null,"numBets":null,"partnerDepositPct":0.000000,"partnerMinigamePct":0.000000,"partnerCasinoPct":0.000000,"partnerPrematchPct":0.000000,"partnerInplayPct":0.000000,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:35:25</td>
                        </tr>
                        <tr>
                          <td>431</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="431"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":"","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"aaa","bankName":"023","bankAccount":"11111111","numLogins":null,"numBets":null,"partnerDepositPct":0.000000,"partnerMinigamePct":0.000000,"partnerCasinoPct":0.000000,"partnerPrematchPct":0.000000,"partnerInplayPct":0.000000,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":"","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$rxE357/Re0RYr4rp8WA59eqa9BoG2mlL8v3QVK5UUNn6sLAnlv0Wq","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@1234","pin":"1234","bankholderName":"aaa","bankName":"023","bankAccount":"11111111","numLogins":null,"numBets":null,"partnerDepositPct":0.000000,"partnerMinigamePct":0.000000,"partnerCasinoPct":0.000000,"partnerPrematchPct":0.000000,"partnerInplayPct":0.000000,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:34:30</td>
                        </tr>
                        <tr>
                          <td>430</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="430"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":0.000000,"partnerMinigamePct":0.000000,"partnerCasinoPct":0.000000,"partnerPrematchPct":0.000000,"partnerInplayPct":0.000000,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":"","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"aaa","bankName":"023","bankAccount":"11111111","numLogins":null,"numBets":null,"partnerDepositPct":0.000000,"partnerMinigamePct":0.000000,"partnerCasinoPct":0.000000,"partnerPrematchPct":0.000000,"partnerInplayPct":0.000000,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:33:30</td>
                        </tr>
                        <tr>
                          <td>429</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="429"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":2.000000,"partnerMinigamePct":3.000000,"partnerCasinoPct":4.000000,"partnerPrematchPct":5.000000,"partnerInplayPct":6.000000,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":0,"partnerMinigamePct":0,"partnerCasinoPct":0,"partnerPrematchPct":0,"partnerInplayPct":0,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:31:27</td>
                        </tr>
                        <tr>
                          <td>428</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="428"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":1.000000,"partnerMinigamePct":1.000000,"partnerCasinoPct":1.000000,"partnerPrematchPct":1.000000,"partnerInplayPct":1.000000,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":2,"partnerMinigamePct":3,"partnerCasinoPct":4,"partnerPrematchPct":5,"partnerInplayPct":6,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:31:11</td>
                        </tr>
                        <tr>
                          <td>427</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="427"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":1,"partnerMinigamePct":1,"partnerCasinoPct":1,"partnerPrematchPct":1,"partnerInplayPct":1,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:30:29</td>
                        </tr>
                        <tr>
                          <td>426</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="426"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":1,"depositbonusNormal":1,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:29:36</td>
                        </tr>
                        <tr>
                          <td>425</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="425"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":1,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":1,"depositbonusNormal":1,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:29:22</td>
                        </tr>
                        <tr>
                          <td>424</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="424"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":1,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625841000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:28:59</td>
                        </tr>
                        <tr>
                          <td>423</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="423"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":3,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625723000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":4,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625723000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:03:32</td>
                        </tr>
                        <tr>
                          <td>422</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="124"
                            >
                              jackylu12
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="422"
                            data-before='{"id":124,"userName":"jackylu12","nickName":"kaka12","partnerType":0,"profileImageUrl":null,"email":"jackylu12@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$lCPVyjAOo.hgNnXovO9rAurh.MEiPWf2Fl2oRI1OimrTlcRD47l0S","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":2,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625728000,"lastLoginIp":"116.109.23.149","created":1646290704000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"ajsdkajs","bankName":"004","bankAccount":"1234567","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":124,"userName":"jackylu12","nickName":"kaka12","partnerType":0,"profileImageUrl":null,"email":"jackylu12@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$lCPVyjAOo.hgNnXovO9rAurh.MEiPWf2Fl2oRI1OimrTlcRD47l0S","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":2,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646625728000,"lastLoginIp":"116.109.23.149","created":1646290704000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"ajsdkajs","bankName":"004","bankAccount":"1234567","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:03:32</td>
                        </tr>
                        <tr>
                          <td>421</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="125"
                            >
                              jackylu13
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="421"
                            data-before='{"id":125,"userName":"jackylu13","nickName":"kaka13","partnerType":0,"profileImageUrl":null,"email":"jackylu13@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$zowjpDz.10ZQPK6wIBap4.Zjk5uQsHcSTXF0d9IZEkv.fzHRbW9Cu","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":6050,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646623737000,"lastLoginIp":"116.109.23.149","created":1646291939000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"1234567","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":125,"userName":"jackylu13","nickName":"kaka13","partnerType":0,"profileImageUrl":null,"email":"jackylu13@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$zowjpDz.10ZQPK6wIBap4.Zjk5uQsHcSTXF0d9IZEkv.fzHRbW9Cu","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":6050,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646623737000,"lastLoginIp":"116.109.23.149","created":1646291939000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"1234567","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 13:03:30</td>
                        </tr>
                        <tr>
                          <td>420</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="137"
                            >
                              jackylu18
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="420"
                            data-before='{"id":137,"userName":"jackylu18","nickName":"kaka18","partnerType":0,"profileImageUrl":null,"email":"jackylu18@mailinator.com","emailConfirmed":false,"phoneNumber":"1423545756","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$xFh6V2XgVshlw0FKCmmITuhqg.Wr1lTfMwOBccCebhthfuSz/Tswm","emailMarketing":false,"smsMarketing":true,"messageReceiveType":0,"level":2,"balance":0,"cash":0,"point":20000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646619296000,"lastLoginIp":"116.109.23.149","created":1646619296000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"1234567","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":137,"userName":"jackylu18","nickName":"kaka18","partnerType":0,"profileImageUrl":null,"email":"jackylu18@mailinator.com","emailConfirmed":false,"phoneNumber":"1423545756","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$xFh6V2XgVshlw0FKCmmITuhqg.Wr1lTfMwOBccCebhthfuSz/Tswm","emailMarketing":false,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":20000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646619296000,"lastLoginIp":"116.109.23.149","created":1646619296000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"1234567","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 12:28:14</td>
                        </tr>
                        <tr>
                          <td>419</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="419"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646617884000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":3,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646617884000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 10:51:52</td>
                        </tr>
                        <tr>
                          <td>418</td>
                          <td>119.65.103.62</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="133"
                            >
                              tsara8
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="418"
                            data-before='{"id":133,"userName":"tsara8","nickName":"tsara8","partnerType":0,"profileImageUrl":null,"email":"tsara8@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$A5.cCJq9YHTfKK5oS.PbruVVjhd.tkznXKfKHP3X.QARstBPQoA4W","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":73,"referrer":"jackylu9","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646565968000,"lastLoginIp":"2001:ee0:4f4d:af10:5450:3376:7272:b1ed","created":1646565968000,"createdIp":"2001:ee0:4f4d:af10:5450:3376:7272:b1ed","password":"1qaz!QAZ","pin":"1234","bankholderName":"tsara8","bankName":"004","bankAccount":"tsara8","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":133,"userName":"tsara8","nickName":"tsara8","partnerType":100,"profileImageUrl":null,"email":"tsara8@mailinator.com","emailConfirmed":false,"phoneNumber":"","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$A5.cCJq9YHTfKK5oS.PbruVVjhd.tkznXKfKHP3X.QARstBPQoA4W","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":73,"referrer":"jackylu9","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646565968000,"lastLoginIp":"2001:ee0:4f4d:af10:5450:3376:7272:b1ed","created":1646565968000,"createdIp":"2001:ee0:4f4d:af10:5450:3376:7272:b1ed","password":"1qaz!QAZ","pin":"1234","bankholderName":"tsara8","bankName":"004","bankAccount":"tsara8","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-07 09:51:00</td>
                        </tr>
                        <tr>
                          <td>417</td>
                          <td>180.191.237.102</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="134"
                            >
                              tsara9
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="417"
                            data-before='{"id":134,"userName":"tsara9","nickName":"tsara9","partnerType":0,"profileImageUrl":null,"email":"tsara9@mailinator.com","emailConfirmed":false,"phoneNumber":"04567892113","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$7buuciNpMvlNnTax85SNyuhjriukvAVGozBEszRh1rp2czID6j1ne","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":null,"referrer":null,"partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646566278000,"lastLoginIp":"2001:ee0:4f4d:af10:5450:3376:7272:b1ed","created":1646566278000,"createdIp":"2001:ee0:4f4d:af10:5450:3376:7272:b1ed","password":"1qaz!QAZ","pin":"2134","bankholderName":"tsara9","bankName":"004","bankAccount":"tsara9","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":134,"userName":"tsara9","nickName":"tsara9","partnerType":0,"profileImageUrl":null,"email":"tsara9@mailinator.com","emailConfirmed":false,"phoneNumber":"04567892113","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$7buuciNpMvlNnTax85SNyuhjriukvAVGozBEszRh1rp2czID6j1ne","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":null,"referrer":null,"partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646566278000,"lastLoginIp":"2001:ee0:4f4d:af10:5450:3376:7272:b1ed","created":1646566278000,"createdIp":"2001:ee0:4f4d:af10:5450:3376:7272:b1ed","password":"1qaz!QAZ","pin":"2134","bankholderName":"tsara9","bankName":"004","bankAccount":"tsara9","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-06 23:46:38</td>
                        </tr>
                        <tr>
                          <td>416</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="124"
                            >
                              jackylu12
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="416"
                            data-before='{"id":124,"userName":"jackylu12","nickName":"kaka12","partnerType":0,"profileImageUrl":null,"email":"jackylu12@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$lCPVyjAOo.hgNnXovO9rAurh.MEiPWf2Fl2oRI1OimrTlcRD47l0S","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":0,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646290704000,"lastLoginIp":"116.109.23.149","created":1646290704000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"ajsdkajs","bankName":"004","bankAccount":"1234567","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":124,"userName":"jackylu12","nickName":"kaka12","partnerType":0,"profileImageUrl":null,"email":"jackylu12@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$lCPVyjAOo.hgNnXovO9rAurh.MEiPWf2Fl2oRI1OimrTlcRD47l0S","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":2,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646290704000,"lastLoginIp":"116.109.23.149","created":1646290704000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"ajsdkajs","bankName":"004","bankAccount":"1234567","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-04 12:39:02</td>
                        </tr>
                        <tr>
                          <td>415</td>
                          <td>119.65.103.62</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="6"
                            >
                              tuser4
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="415"
                            data-before='{"id":6,"userName":"tuser4","nickName":"tuser4","partnerType":0,"profileImageUrl":null,"email":"tuser4@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":true,"passwordHash":"$2a$10$y.klc0FNUvG4pVjP.H.xLeGTDv8hHerFMBScNie0TZSZ1wFK.ik4G","emailMarketing":null,"smsMarketing":null,"messageReceiveType":0,"level":1,"balance":10000,"cash":0,"point":0,"isSingleBetDisabled":null,"isDoubleBetDisabled":null,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":null,"totalWithdraw":null,"referrerId":null,"referrer":null,"partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":10,"lastLoginDate":1628058803000,"lastLoginIp":null,"created":1627933699000,"createdIp":null,"password":null,"pin":null,"bankholderName":null,"bankName":null,"bankAccount":null,"numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":6,"userName":"tuser4","nickName":"tuser4","partnerType":0,"profileImageUrl":null,"email":"tuser4@mailinator.com","emailConfirmed":false,"phoneNumber":"","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":true,"passwordHash":"$2a$10$Wo98uSpn1fTlYklpVZEVYOZRpT54Dqd2gzrjycrvaTR6BtSg/j.tq","emailMarketing":null,"smsMarketing":null,"messageReceiveType":0,"level":1,"balance":10000,"cash":0,"point":0,"isSingleBetDisabled":null,"isDoubleBetDisabled":null,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":null,"totalWithdraw":null,"referrerId":null,"referrer":null,"partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":10,"lastLoginDate":1628058803000,"lastLoginIp":null,"created":1627933699000,"createdIp":null,"password":"1234","pin":null,"bankholderName":"","bankName":null,"bankAccount":"","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-04 10:05:11</td>
                        </tr>
                        <tr>
                          <td>414</td>
                          <td>220.72.234.115</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="52"
                            >
                              b612hun
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="414"
                            data-before='{"id":52,"userName":"b612hun","nickName":"b612hun","partnerType":0,"profileImageUrl":null,"email":"b612hun@gmail.com","emailConfirmed":false,"phoneNumber":"0123456789","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$4m.7xY1VVOdzkfy6b57QP.g7QAH.4zrRA.2a.qrZCpdaCp9XbcZrW","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":3,"referrer":"tuser123","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":10,"lastLoginDate":1646309617000,"lastLoginIp":"220.72.234.115","created":1636273857000,"createdIp":"124.50.253.114, 162.158.119.117","password":null,"pin":null,"bankholderName":"","bankName":null,"bankAccount":"","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":52,"userName":"b612hun","nickName":"b612hun","partnerType":0,"profileImageUrl":null,"email":"b612hun@gmail.com","emailConfirmed":false,"phoneNumber":"0123456789","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$4m.7xY1VVOdzkfy6b57QP.g7QAH.4zrRA.2a.qrZCpdaCp9XbcZrW","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":3,"referrer":"tuser123","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646309617000,"lastLoginIp":"220.72.234.115","created":1636273857000,"createdIp":"124.50.253.114, 162.158.119.117","password":null,"pin":null,"bankholderName":"","bankName":null,"bankAccount":"","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-03 23:08:11</td>
                        </tr>
                        <tr>
                          <td>413</td>
                          <td>0:0:0:0:0:0:0:1</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="52"
                            >
                              b612hun
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="413"
                            data-before='{"id":52,"userName":"b612hun","nickName":"b612hun","partnerType":0,"profileImageUrl":null,"email":"b612hun@gmail.com","emailConfirmed":false,"phoneNumber":"0123456789","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$4m.7xY1VVOdzkfy6b57QP.g7QAH.4zrRA.2a.qrZCpdaCp9XbcZrW","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":3,"referrer":"tuser123","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646309617000,"lastLoginIp":"220.72.234.115","created":1636273857000,"createdIp":"124.50.253.114, 162.158.119.117","password":null,"pin":null,"bankholderName":"","bankName":null,"bankAccount":"","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":52,"userName":"b612hun","nickName":"b612hun","partnerType":0,"profileImageUrl":null,"email":"b612hun@gmail.com","emailConfirmed":false,"phoneNumber":"0123456789","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$4m.7xY1VVOdzkfy6b57QP.g7QAH.4zrRA.2a.qrZCpdaCp9XbcZrW","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":0,"depositbonusNormal":0,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":3,"referrer":"tuser123","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":"","numReports":0,"lastReportedDate":null,"status":10,"lastLoginDate":1646309617000,"lastLoginIp":"220.72.234.115","created":1636273857000,"createdIp":"124.50.253.114, 162.158.119.117","password":null,"pin":null,"bankholderName":"","bankName":null,"bankAccount":"","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-03 21:13:56</td>
                        </tr>
                        <tr>
                          <td>412</td>
                          <td>0:0:0:0:0:0:0:1</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="52"
                            >
                              b612hun
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="412"
                            data-before='{"id":52,"userName":"b612hun","nickName":"b612hun","partnerType":0,"profileImageUrl":null,"email":"b612hun@gmail.com","emailConfirmed":false,"phoneNumber":"0123456789","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$4m.7xY1VVOdzkfy6b57QP.g7QAH.4zrRA.2a.qrZCpdaCp9XbcZrW","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":0,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":3,"referrer":"tuser1","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1636273864000,"lastLoginIp":"124.50.253.114, 162.158.119.117","created":1636273857000,"createdIp":"124.50.253.114, 162.158.119.117","password":null,"pin":null,"bankholderName":null,"bankName":null,"bankAccount":null,"numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":52,"userName":"b612hun","nickName":"b612hun","partnerType":0,"profileImageUrl":null,"email":"b612hun@gmail.com","emailConfirmed":false,"phoneNumber":"0123456789","phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$4m.7xY1VVOdzkfy6b57QP.g7QAH.4zrRA.2a.qrZCpdaCp9XbcZrW","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":3,"referrer":"tuser123","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1636273864000,"lastLoginIp":"124.50.253.114, 162.158.119.117","created":1636273857000,"createdIp":"124.50.253.114, 162.158.119.117","password":null,"pin":null,"bankholderName":"","bankName":null,"bankAccount":"","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-03 21:13:33</td>
                        </tr>
                        <tr>
                          <td>411</td>
                          <td>116.109.23.149</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="411"
                            data-before='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":0,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646290290000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                            data-after='{"id":123,"userName":"jackylu11","nickName":"kaka11","partnerType":0,"profileImageUrl":null,"email":"jackylu11@mailinator.com","emailConfirmed":false,"phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$IYpSexwg.pbwVicujx7rgOwANK18TGWQCDH4oRbGmbIgnee2AazU2","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":10000,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":46,"referrer":"jackylu1","partner1Id":46,"partner1":"jackylu1","partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1646290290000,"lastLoginIp":"116.109.23.149","created":1646290290000,"createdIp":"116.109.23.149","password":"Hello@123","pin":"1234","bankholderName":"BBBBBB","bankName":"004","bankAccount":"91478921824","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null,"minigameBetSlips":null}'
                          ></td>
                          <td>2022-03-03 15:52:10</td>
                        </tr>
                        <tr>
                          <td>410</td>
                          <td>119.65.103.62</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="115"
                            >
                              test15123
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="410"
                            data-before='{"id":115,"userName":"test15123","nickName":"32ㄷㅇㄷ2ㄷ","partnerType":0,"profileImageUrl":null,"email":"dmwn@gmail.com","emailConfirmed":false,"phoneNumber":"01022112211","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$96KHI7eh23rGXXuMP5BMduV/ZlqRrOJRZgGlwA4VaPocvkYtCD156","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":2,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":80,"referrer":"test고고","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1645593751000,"lastLoginIp":"119.65.103.62","created":1645593751000,"createdIp":"119.65.103.62","password":"saxz15@@","pin":"1111","bankholderName":"이이이","bankName":"004","bankAccount":"11222","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null}'
                            data-after='{"id":115,"userName":"test15123","nickName":"32ㄷㅇㄷ2ㄷ","partnerType":0,"profileImageUrl":null,"email":"dmwn@gmail.com","emailConfirmed":false,"phoneNumber":"01022112211","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$96KHI7eh23rGXXuMP5BMduV/ZlqRrOJRZgGlwA4VaPocvkYtCD156","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":80,"referrer":"test고고","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1645593751000,"lastLoginIp":"119.65.103.62","created":1645593751000,"createdIp":"119.65.103.62","password":"saxz15@@","pin":"1111","bankholderName":"이이이","bankName":"004","bankAccount":"11222","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null}'
                          ></td>
                          <td>2022-02-28 12:46:19</td>
                        </tr>
                        <tr>
                          <td>409</td>
                          <td>119.65.103.62</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="115"
                            >
                              test15123
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="409"
                            data-before='{"id":115,"userName":"test15123","nickName":"32ㄷㅇㄷ2ㄷ","partnerType":0,"profileImageUrl":null,"email":"dmwn@gmail.com","emailConfirmed":false,"phoneNumber":"01022112211","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$96KHI7eh23rGXXuMP5BMduV/ZlqRrOJRZgGlwA4VaPocvkYtCD156","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":0,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":80,"referrer":"test고고","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1645593751000,"lastLoginIp":"119.65.103.62","created":1645593751000,"createdIp":"119.65.103.62","password":"saxz15@@","pin":"1111","bankholderName":"이이이","bankName":"004","bankAccount":"11222","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null}'
                            data-after='{"id":115,"userName":"test15123","nickName":"32ㄷㅇㄷ2ㄷ","partnerType":0,"profileImageUrl":null,"email":"dmwn@gmail.com","emailConfirmed":false,"phoneNumber":"01022112211","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$96KHI7eh23rGXXuMP5BMduV/ZlqRrOJRZgGlwA4VaPocvkYtCD156","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":2,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":80,"referrer":"test고고","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1645593751000,"lastLoginIp":"119.65.103.62","created":1645593751000,"createdIp":"119.65.103.62","password":"saxz15@@","pin":"1111","bankholderName":"이이이","bankName":"004","bankAccount":"11222","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null}'
                          ></td>
                          <td>2022-02-28 12:45:53</td>
                        </tr>
                        <tr>
                          <td>408</td>
                          <td>119.65.103.62</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="115"
                            >
                              test15123
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="408"
                            data-before='{"id":115,"userName":"test15123","nickName":"32ㄷㅇㄷ2ㄷ","partnerType":0,"profileImageUrl":null,"email":"dmwn@gmail.com","emailConfirmed":false,"phoneNumber":"01022112211","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$96KHI7eh23rGXXuMP5BMduV/ZlqRrOJRZgGlwA4VaPocvkYtCD156","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":80,"referrer":"test고고","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1645593751000,"lastLoginIp":"119.65.103.62","created":1645593751000,"createdIp":"119.65.103.62","password":"saxz15@@","pin":"1111","bankholderName":"이이이","bankName":"004","bankAccount":"11222","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null}'
                            data-after='{"id":115,"userName":"test15123","nickName":"32ㄷㅇㄷ2ㄷ","partnerType":0,"profileImageUrl":null,"email":"dmwn@gmail.com","emailConfirmed":false,"phoneNumber":"01022112211","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$96KHI7eh23rGXXuMP5BMduV/ZlqRrOJRZgGlwA4VaPocvkYtCD156","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":0,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":80,"referrer":"test고고","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1645593751000,"lastLoginIp":"119.65.103.62","created":1645593751000,"createdIp":"119.65.103.62","password":"saxz15@@","pin":"1111","bankholderName":"이이이","bankName":"004","bankAccount":"11222","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null}'
                          ></td>
                          <td>2022-02-28 12:45:49</td>
                        </tr>
                        <tr>
                          <td>407</td>
                          <td>119.65.103.62</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="115"
                            >
                              test15123
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="407"
                            data-before='{"id":115,"userName":"test15123","nickName":"32ㄷㅇㄷ2ㄷ","partnerType":0,"profileImageUrl":null,"email":"dmwn@gmail.com","emailConfirmed":false,"phoneNumber":"01022112211","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$96KHI7eh23rGXXuMP5BMduV/ZlqRrOJRZgGlwA4VaPocvkYtCD156","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":0,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":80,"referrer":"test고고","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1645593751000,"lastLoginIp":"119.65.103.62","created":1645593751000,"createdIp":"119.65.103.62","password":"saxz15@@","pin":"1111","bankholderName":"이이이","bankName":"004","bankAccount":"11222","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null}'
                            data-after='{"id":115,"userName":"test15123","nickName":"32ㄷㅇㄷ2ㄷ","partnerType":0,"profileImageUrl":null,"email":"dmwn@gmail.com","emailConfirmed":false,"phoneNumber":"01022112211","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$96KHI7eh23rGXXuMP5BMduV/ZlqRrOJRZgGlwA4VaPocvkYtCD156","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":80,"referrer":"test고고","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1645593751000,"lastLoginIp":"119.65.103.62","created":1645593751000,"createdIp":"119.65.103.62","password":"saxz15@@","pin":"1111","bankholderName":"이이이","bankName":"004","bankAccount":"11222","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null}'
                          ></td>
                          <td>2022-02-28 12:45:42</td>
                        </tr>
                        <tr>
                          <td>406</td>
                          <td>119.65.103.62</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="115"
                            >
                              test15123
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="406"
                            data-before='{"id":115,"userName":"test15123","nickName":"32ㄷㅇㄷ2ㄷ","partnerType":0,"profileImageUrl":null,"email":"dmwn@gmail.com","emailConfirmed":false,"phoneNumber":"01022112211","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$96KHI7eh23rGXXuMP5BMduV/ZlqRrOJRZgGlwA4VaPocvkYtCD156","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":80,"referrer":"test고고","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1645593751000,"lastLoginIp":"119.65.103.62","created":1645593751000,"createdIp":"119.65.103.62","password":"saxz15@@","pin":"1111","bankholderName":"이이이","bankName":"004","bankAccount":"11222","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null}'
                            data-after='{"id":115,"userName":"test15123","nickName":"32ㄷㅇㄷ2ㄷ","partnerType":0,"profileImageUrl":null,"email":"dmwn@gmail.com","emailConfirmed":false,"phoneNumber":"01022112211","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$96KHI7eh23rGXXuMP5BMduV/ZlqRrOJRZgGlwA4VaPocvkYtCD156","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":0,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":80,"referrer":"test고고","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1645593751000,"lastLoginIp":"119.65.103.62","created":1645593751000,"createdIp":"119.65.103.62","password":"saxz15@@","pin":"1111","bankholderName":"이이이","bankName":"004","bankAccount":"11222","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null}'
                          ></td>
                          <td>2022-02-28 12:45:36</td>
                        </tr>
                        <tr>
                          <td>405</td>
                          <td>119.65.103.62</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="115"
                            >
                              test15123
                            </a>
                          </td>
                          {/* <!-- <td th:utext="${log.fieldChange}">...</td>
                                        <td th:utext="${log.beforeValue}">...</td>
                                        <td th:utext="${log.afterValue}">...</td> --> */}
                          <td
                            className="changelog-detail-cell"
                            data-logid="405"
                            data-before='{"id":115,"userName":"test15123","nickName":"32ㄷㅇㄷ2ㄷ","partnerType":0,"profileImageUrl":null,"email":"dmwn@gmail.com","emailConfirmed":false,"phoneNumber":"01022112211","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$96KHI7eh23rGXXuMP5BMduV/ZlqRrOJRZgGlwA4VaPocvkYtCD156","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":0,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":80,"referrer":"test고고","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1645593751000,"lastLoginIp":"119.65.103.62","created":1645593751000,"createdIp":"119.65.103.62","password":"saxz15@@","pin":"1111","bankholderName":"이이이","bankName":"004","bankAccount":"11222","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null}'
                            data-after='{"id":115,"userName":"test15123","nickName":"32ㄷㅇㄷ2ㄷ","partnerType":0,"profileImageUrl":null,"email":"dmwn@gmail.com","emailConfirmed":false,"phoneNumber":"01022112211","phoneNumberConfirmed":true,"twoFactorEnabled":false,"accessFailedCount":0,"lockoutEnabled":false,"passwordHash":"$2a$10$96KHI7eh23rGXXuMP5BMduV/ZlqRrOJRZgGlwA4VaPocvkYtCD156","emailMarketing":true,"smsMarketing":true,"messageReceiveType":0,"level":1,"balance":0,"cash":0,"point":0,"isSingleBetDisabled":false,"isDoubleBetDisabled":false,"depositbonusFirst":null,"depositbonusNormal":null,"maxBetAmountLimit":null,"maxWinAmountLimit":null,"maxWinRateLimit":null,"monthRevenue":0,"totalRevenue":0,"totalDeposit":0,"totalWithdraw":0,"referrerId":80,"referrer":"test고고","partner1Id":null,"partner1":null,"partner2Id":null,"partner2":null,"partner3Id":null,"partner3":null,"description":null,"numReports":0,"lastReportedDate":null,"status":1,"lastLoginDate":1645593751000,"lastLoginIp":"119.65.103.62","created":1645593751000,"createdIp":"119.65.103.62","password":"saxz15@@","pin":"1111","bankholderName":"이이이","bankName":"004","bankAccount":"11222","numLogins":null,"numBets":null,"partnerDepositPct":null,"partnerMinigamePct":null,"partnerCasinoPct":null,"partnerPrematchPct":null,"partnerInplayPct":null,"reportStatus":null,"withdrawDate":null,"silenceDate":null,"prematchBetSlips":null,"inplayBetSlips":null,"transactionLogs":null,"cashLogs":null,"pointLogs":null,"loginLogs":null}'
                          ></td>
                          <td>2022-02-28 12:45:30</td>
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
                          href="/user/changelog?&amp;page=0"
                          disabled="disabled"
                        >
                          <i className="ti ti-chevron-left"></i>
                          이전
                        </a>
                      </li>

                      <li className="page-item active">
                        <a
                          className="page-link"
                          href="/user/changelog?&amp;page=1"
                        >
                          1
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/changelog?&amp;page=2"
                        >
                          2
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/changelog?&amp;page=3"
                        >
                          3
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/changelog?&amp;page=4"
                        >
                          4
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/changelog?&amp;page=5"
                        >
                          5
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/changelog?&amp;page=6"
                        >
                          6
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/changelog?&amp;page=7"
                        >
                          7
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/changelog?&amp;page=8"
                        >
                          8
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/changelog?&amp;page=9"
                        >
                          9
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/changelog?&amp;page=10"
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
                          href="/user/changelog?&amp;page=15"
                        >
                          15
                        </a>
                      </li>

                      {/* <!--        <th:block th:each="pageNum: ${#numbers.sequence(1, pageCount)}">--> */}
                      {/* <!--            <li className="page-item" th:classappend="${pageNum} == ${page}? 'active'">--> */}
                      {/* <!--                <a className="page-link" th:href="${mainPath} + '&page=' + ${pageNum}" th:text="${pageNum}"--> */}
                      {/* <!--                   th:disabled="${pageNum} == ${page}? 'disabled'"></a>--> */}
                      {/* <!--            </li>--> */}
                      {/* <!--        </th:block>--> */}
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/changelog?&amp;page=2"
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

export default ModifyUser;

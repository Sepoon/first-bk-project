import React from 'react'

const BlockLog = () => {
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
                <h2 className="page-title">차단내역</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form
                    action="/user/restrictedlog"
                    method="get"
                    className="d-flex"
                  >
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="user">사용자 이름</option>
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
                  </form>
                </div>
              </div>
            </div>

            <div className="total">
              총 <span>13</span>건
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
                              로그ID
                              <i className="ti ti-chevron-up"></i>
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="userName">
                              유저명
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="requestIp">
                              IP
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="userAgent">
                              비고
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="loginDate">
                              생성일
                            </a>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>732</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="125"
                            >
                              jackylu13
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-04 19:20:39</td>
                        </tr>
                        <tr>
                          <td>731</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="125"
                            >
                              jackylu13
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-04 19:20:39</td>
                        </tr>
                        <tr>
                          <td>730</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="124"
                            >
                              jackylu12
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-04 19:20:36</td>
                        </tr>
                        <tr>
                          <td>729</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="124"
                            >
                              jackylu12
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-04 19:20:36</td>
                        </tr>
                        <tr>
                          <td>728</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="124"
                            >
                              jackylu12
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-04 19:20:35</td>
                        </tr>
                        <tr>
                          <td>727</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-04 19:20:33</td>
                        </tr>
                        <tr>
                          <td>726</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-04 19:20:31</td>
                        </tr>
                        <tr>
                          <td>725</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="128"
                            >
                              jackylu14
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-04 19:19:21</td>
                        </tr>
                        <tr>
                          <td>724</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="128"
                            >
                              jackylu14
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-04 19:19:16</td>
                        </tr>
                        <tr>
                          <td>723</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="128"
                            >
                              jackylu14
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-04 19:18:55</td>
                        </tr>
                        <tr>
                          <td>722</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="6"
                            >
                              tuser4
                            </a>
                          </td>
                          <td>119.65.103.62</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/99.0.4844.51 Safari/537.36
                          </td>
                          <td>2022-03-04 10:05:21</td>
                        </tr>
                        <tr>
                          <td>721</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="6"
                            >
                              tuser4
                            </a>
                          </td>
                          <td>119.65.103.62</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/99.0.4844.51 Safari/537.36
                          </td>
                          <td>2022-03-04 10:05:20</td>
                        </tr>
                        <tr>
                          <td>720</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              data-userid="52"
                            >
                              b612hun
                            </a>
                          </td>
                          <td>220.72.234.115</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-03 23:06:09</td>
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
}

export default BlockLog
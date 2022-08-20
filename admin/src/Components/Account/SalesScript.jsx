import React from "react";

const SalesScript = () => {
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
                <h2 className="page-title">매출현황(대본별)</h2>
              </div>
              {/* <!-- Page title actions --> */}
              <div
                className="col-auto ms-auto d-print-none"
                style={{ minwidth: "400px" }}
              >
                <form action="" method="get" className="d-flex">
                  <div className="row g-2">
                    <div className="col-4">
                      <div className="dropdown">
                        <input
                          type="text"
                          placeholder="총판"
                          defaultValue=""
                          className="form-control search-input"
                          id="dropdownMenu1"
                          aria-describedby=""
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          autoComplete="off"
                        />
                        <div
                          className="dropdown-menu search-dropdown"
                          aria-labelledby="dropdownMenu1"
                        >
                          <div className="d-flex text-center align-items-center p-4">
                            데이터 없음
                          </div>
                        </div>
                        <input
                          type="hidden"
                          defaultValue=""
                          id="partnerId"
                          name="partnerId"
                        />
                      </div>
                    </div>
                    <div className="d-inline-flex col-8">
                      <div className="input-icon">
                        <span className="input-icon-addon">
                          {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" /></svg> --> */}
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid admin-dashboard-page">
            <div className="row row-cards mb-3">
              <div className="col-12">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap datatable">
                      <thead>
                        <tr>
                          <th className="text-center">날짜</th>
                          <th className="text-center">충전금액</th>
                          <th className="text-center">수익</th>
                          <th className="text-center">배팅금액</th>
                          <th className="text-center">당첨금액</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cards mb-3">
              <div className="col-12">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap datatable">
                      <thead>
                        <tr>
                          <th className="text-center"></th>
                          <th className="text-center">닉네임</th>
                          <th className="text-center">충전금액</th>
                          <th className="text-center">수익</th>
                          <th className="text-center">배팅금액</th>
                          <th className="text-center">당첨금액</th>
                          {/* <!--                                            <th className="text-center">포인트지급</th>--> */}
                          <th className="text-center">보유머니</th>
                          <th className="text-center">보유포인트</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="text-center">합계</th>
                          <th className="text-center"></th>
                          <th className="text-end text-red"></th>
                          <th className="text-end text-blue"></th>
                          <th className="text-end"></th>
                          <th className="text-end"></th>
                          <th className="text-end"></th>
                          <th className="text-end"></th>
                        </tr>
                      </tbody>
                    </table>
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

export default SalesScript;

import React from "react";

const SalesStats = () => {
  return (
    <>
      <section className="page-wrapper">
        
        <div className="container-fluid">
          {/* Page title */}

          <div className="page-header d-print-none">
            <div className="row align-items-center">
              <div className="col">
                {/* Page pre-title */}
                {/*<div className="page-pretitle">
                  관리자메인 > 회원관리
              </div>*/}

                <h2 className="page-title">매출현황(통계)</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="" method="get">
                    <div className="d-inline-flex">
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
                          <th className="text-center">날짜</th>
                          <th className="text-right">사전배팅</th>
                          <th className="text-right">실시간배팅</th>
                          <th className="text-right">카지노 배팅</th>
                          <th className="text-right">블록체인1분파워볼</th>
                          <th className="text-right">블록체인2분파워볼</th>
                          <th className="text-right">블록체인3분파워볼</th>
                          <th className="text-right">쌍귀섯다</th>
                          <th className="text-right">BE축구2</th>
                          <th className="text-right">BE야구2</th>
                          <th className="text-right">BE그리켓2</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">
                            <span>2022-01</span>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">2,241</div>
                            <div className="text-danger">0</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">480</div>
                            <div className="text-danger">86</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">0</div>
                            <div className="text-danger">0</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">1,749</div>
                            <div className="text-danger">2,438</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">195</div>
                            <div className="text-danger">68</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">20</div>
                            <div className="text-danger">29</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">105</div>
                            <div className="text-danger">102</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">50</div>
                            <div className="text-danger">48</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">5</div>
                            <div className="text-danger">9</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">5</div>
                            <div className="text-danger">0</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <span>2022-02</span>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">377</div>
                            <div className="text-danger">100</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">205</div>
                            <div className="text-danger">0</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">0</div>
                            <div className="text-danger">0</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">95</div>
                            <div className="text-danger">70</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">20</div>
                            <div className="text-danger">19</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">110</div>
                            <div className="text-danger">20</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">175</div>
                            <div className="text-danger">312</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">130</div>
                            <div className="text-danger">195</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">15</div>
                            <div className="text-danger">19</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">25</div>
                            <div className="text-danger">29</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <span>2022-03</span>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">200</div>
                            <div className="text-danger">10</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">45</div>
                            <div className="text-danger">0</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">0</div>
                            <div className="text-danger">0</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">1,015</div>
                            <div className="text-danger">985</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">20</div>
                            <div className="text-danger">0</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">20</div>
                            <div className="text-danger">0</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">320</div>
                            <div className="text-danger">34</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">85</div>
                            <div className="text-danger">39</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">10</div>
                            <div className="text-danger">19</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">5</div>
                            <div className="text-danger">0</div>
                          </td>
                        </tr>
                        <tr className="bg-teal">
                          <td className="text-center font-weight-bold text-white">
                            합계
                          </td>
                          <td className="text-right font-weight-bold">
                            <div className="text-primary">2,818</div>
                            <div className="text-danger">110</div>
                          </td>
                          <td className="text-right font-weight-bold">
                            <div className="text-primary">730</div>
                            <div className="text-danger">86</div>
                          </td>
                          <td className="text-right font-weight-bold">
                            <div className="text-primary">0</div>
                            <div className="text-danger">0</div>
                          </td>
                          <td className="text-right font-weight-bold">
                            <div className="text-primary">2,859</div>
                            <div className="text-danger">3,494</div>
                          </td>
                          <td className="text-right font-weight-bold">
                            <div className="text-primary">235</div>
                            <div className="text-danger">87</div>
                          </td>
                          <td className="text-right font-weight-bold">
                            <div className="text-primary">150</div>
                            <div className="text-danger">49</div>
                          </td>
                          <td className="text-right font-weight-bold">
                            <div className="text-primary">600</div>
                            <div className="text-danger">448</div>
                          </td>
                          <td className="text-right font-weight-bold">
                            <div className="text-primary">265</div>
                            <div className="text-danger">282</div>
                          </td>
                          <td className="text-right font-weight-bold">
                            <div className="text-primary">30</div>
                            <div className="text-danger">48</div>
                          </td>
                          <td className="text-right font-weight-bold">
                            <div className="text-primary">35</div>
                            <div className="text-danger">29</div>
                          </td>
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

export default SalesStats;

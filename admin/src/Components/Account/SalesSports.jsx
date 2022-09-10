import React from "react";

const SalesSport = () => {
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
                <h2 className="page-title">매출현황(스포츠)</h2>
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
                      <colgroup>
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "45%" }} />
                        <col style={{ width: "45%" }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="text-center">날짜</th>
                          <th className="text-right">스포츠</th>
                          <th className="text-right">라이브</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">
                            <span>2022-03-02</span>(
                            <span className="text-dark">수</span>)
                          </td>
                          <td className="text-right">
                            <div className="text-primary">65</div>
                            <div className="text-danger">0</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">5</div>
                            <div className="text-danger">0</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <span>2022-03-03</span>(
                            <span className="text-dark">목</span>)
                          </td>
                          <td className="text-right">
                            <div className="text-primary">0</div>
                            <div className="text-danger">0</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">30</div>
                            <div className="text-danger">0</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <span>2022-03-04</span>(
                            <span className="text-dark">금</span>)
                          </td>
                          <td className="text-right">
                            <div className="text-primary">5</div>
                            <div className="text-danger">0</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">5</div>
                            <div className="text-danger">0</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <span>2022-03-05</span>(
                            <span className="text-primary">토</span>)
                          </td>
                          <td className="text-right">
                            <div className="text-primary">0</div>
                            <div className="text-danger">10</div>
                          </td>
                          <td className="text-right">
                            <div className="text-primary">0</div>
                            <div className="text-danger">0</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <span>2022-03-07</span>(
                            <span className="text-dark">월</span>)
                          </td>
                          <td className="text-right">
                            <div className="text-primary">130</div>
                            <div className="text-danger">0</div>
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
                            <div className="text-primary">200</div>
                            <div className="text-danger">10</div>
                          </td>
                          <td className="text-right font-weight-bold">
                            <div className="text-primary">45</div>
                            <div className="text-danger">0</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className=" ms-3 mt-2">
                      <i>
                        <span className="text-danger">*</span> 합계 베팅유저수는
                        전체 베팅에 참여한 유저의 수이므로 각각의 베팅유저수
                        합보다 작을 수 있습니다.
                      </i>
                    </p>
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

export default SalesSport;

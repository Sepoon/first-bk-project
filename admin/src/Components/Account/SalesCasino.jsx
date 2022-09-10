import React from "react";

const SalesCasino = () => {
  return (
    <>
      <section className="page-wrapper">
        
        <div className="container-fluid">
          {/* <!-- Page title --> */}
          <div className="page-header d-print-none">
            <div className="row align-items-center">
              <div className="col">
                {/* <!-- Page pre-title -->
                    <!--<div className="page-pretitle">
                        관리자메인 > 회원관리
                    </div>--> */}
                <h2 className="page-title">매출현황(카지노)</h2>
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
                        <col style={{ width: "20%" }} />
                        <col style={{ width: "80%" }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="text-center">날짜</th>
                          <th className="text-right">에볼루션카지노</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-teal">
                          <td className="text-center font-weight-bold text-white">
                            합계
                          </td>
                          <td className="text-right font-weight-bold">
                            <div>
                              <span className="text-primary">0</span>
                              <span className="ms-4">
                                (<span>0</span>) 건
                              </span>
                            </div>
                            <div>
                              <span className="text-danger">0</span>
                              <span className="ms-4">
                                (<span>0</span>) 건
                              </span>
                            </div>
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

export default SalesCasino;

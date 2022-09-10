import React from "react";

const WaitGame = () => {
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
                <h2 className="page-title">경기대기</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="" method="get" className="d-flex">
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
              총 <span>71</span>건
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-deck row-cards">
              <div className="col-12">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap datatable table-compact">
                      <thead>
                        <tr>
                          <th className="w-1">
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select all fixtures"
                              id="checkbox-allfixtures"
                            />
                          </th>
                          <th className="w-1">종류</th>
                          <th>경기시간</th>
                          <th>경기ID</th>
                          <th>리그명</th>
                          <th>팀명</th>
                          <th>무/핸/언오</th>
                          {/* <!--                                            <th>등록일시</th>--> */}
                          {/* <!--
                                            <th>배팅결과</th>
                                            <th>수정</th>
                                            <th>적중틀례</th>
                                            --> */}
                          <th>상태</th>
                          <th></th>
                          <th></th>
                          <th></th>
                          {/* <!--<th>출저</th>--> */}
                          <th className="w-1">뱃슬립</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <div className="btn-list">
                      <span className="d-none d-sm-inline">
                        <a
                          id="bulk-fixturedelete-btn"
                          href="#"
                          className="btn btn-outline-secondary"
                        >
                          선택삭제
                        </a>
                      </span>
                      <span className="d-none d-sm-inline">
                        <a
                          id="bulk-fixturepublish-btn"
                          href="#"
                          className="btn btn-outline-secondary"
                        >
                          선택개시
                        </a>
                      </span>
                      {/* <!--
                                    <span className="d-none d-sm-inline">
                                        <a href="#" className="btn btn-outline-secondary">
                                            선택마감
                                        </a>
                                    </span>
                                    --> */}
                    </div>
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

export default WaitGame;

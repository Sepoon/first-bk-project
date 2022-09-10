import React from "react";

const MiniGame = () => {
  return (
    <>
      <section className="page-wrapper">
        
        <div className="container-fluid">
          {/* <!-- Page title --> */}
          <div className="page-header d-print-none">
            <div className="row align-items-center">
              <div className="col">
                <h2 className="page-title">미니게임 라운드</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <select
                    id="gametype-select"
                    className="form-select w-auto"
                    name="gameType"
                  >
                    <option value="14">섯다</option>
                    <option value="13">축구</option>
                    <option value="11">야구</option>
                    <option value="12">크리켓</option>
                    <option value="1">파워볼 1</option>
                    <option value="2">파워볼 2</option>
                    <option value="3">파워볼 3</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="total">
              총 <span id="r-totalCount"></span>건
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-deck row-cards">
              <div className="col-12">
                <div className="card">
                  <div className="table-responsive">
                    <table
                      className="table card-table table-vcenter text-nowrap datatable table-compact w-100"
                      id="rounds-table"
                    >
                      <thead>
                        <tr>
                          <th>종류</th>
                          <th>경기시간</th>
                          <th>경기 id</th>
                          <th>회차</th>
                          <th>결과</th>
                          <th>상태</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <div className="btn-list">
                      <span className="d-none d-sm-inline">
                        <a
                          id="bulk-settle-btn"
                          href="#"
                          className="btn btn-outline-secondary"
                        >
                          선택정산
                        </a>
                      </span>
                    </div>
                    <div id="page-pagination-section"></div>
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

export default MiniGame;

import React from 'react'

const JoinStats = () => {
  return (
    <>
      <section className="page-wrapper">
        
        <div className="container-fluid">
          {/* <!-- Page title --> */}
          <div className="page-header d-print-none">
            <div className="row align-items-center mb-2">
              <div className="col">
                <h2 className="page-title">가입통계</h2>
              </div>
              <div
                className="col-auto ms-auto d-print-none"
                style={{ minwidth: "250px" }}
              >
                <div className="row g-2">
                  <div className="col-4">
                    <select
                      name="month"
                      className="form-select"
                      id="month_select"
                      defaultValue={"default"}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                  </div>
                  <div className="col-5">
                    <select
                      defaultValue={"default"}
                      name="year"
                      className="form-select"
                      id="year_select"
                    >
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                    </select>
                  </div>
                  <a href="#" className="btn btn-white col-3" id="search_btn">
                    검색
                  </a>
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
                          <th>날짜</th>
                          <th className="text-end">가입자수</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2022-03-02</td>
                          <td className="text-end">1</td>
                        </tr>
                        <tr>
                          <td>2022-03-03</td>
                          <td className="text-end">6</td>
                        </tr>
                        <tr>
                          <td>2022-03-04</td>
                          <td className="text-end">2</td>
                        </tr>
                        <tr>
                          <td>2022-03-05</td>
                          <td className="text-end">3</td>
                        </tr>
                        <tr>
                          <td>2022-03-06</td>
                          <td className="text-end">2</td>
                        </tr>
                        <tr>
                          <td>2022-03-07</td>
                          <td className="text-end">3</td>
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
}

export default JoinStats

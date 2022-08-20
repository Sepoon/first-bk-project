import React from 'react'

const UserCode = () => {
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
                <h2 className="page-title">회원가입코드발급</h2>
              </div>
              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form
                    action="/user/registercodes"
                    method="get"
                    className="d-flex"
                  >
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="user">사용자</option>
                      <option value="code">코드</option>
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
              총 <span>5</span>건
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-deck row-cards mb-3">
              <div className="col-12">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap datatable">
                      <thead>
                        <tr>
                          <th className="w-1">
                            <input
                              id="form-check-all"
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select all"
                            />
                          </th>
                          <th className="w-1">
                            <a className="sort-item" data-sort="id">
                              번호
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="user.userName">
                              유저명
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="code">
                              발금코드
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="expirationDate">
                              만료시간
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="created">
                              발급시간
                              <i className="ti ti-chevron-up"></i>
                            </a>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="20"
                            />
                          </td>
                          <td>20</td>
                          <td>test1515</td>
                          <td>TEST1515</td>
                          <td>2022-04-30 00:00:00</td>
                          <td>2022-02-12 14:08:00</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="9"
                            />
                          </td>
                          <td>9</td>
                          <td>jackylu5</td>
                          <td>JACKYLU5</td>
                          <td>2022-06-01 00:00:00</td>
                          <td>2021-11-29 15:37:02</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="8"
                            />
                          </td>
                          <td>8</td>
                          <td>jackylu4</td>
                          <td>JACKYLU4</td>
                          <td>2022-06-01 00:00:00</td>
                          <td>2021-11-29 15:36:45</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="7"
                            />
                          </td>
                          <td>7</td>
                          <td>jackylu3</td>
                          <td>JACKYLU3</td>
                          <td>2022-06-01 00:00:00</td>
                          <td>2021-11-29 15:36:28</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="6"
                            />
                          </td>
                          <td>6</td>
                          <td>jackylu1</td>
                          <td>JACKYLU1</td>
                          <td>2022-06-01 00:00:00</td>
                          <td>2021-11-29 15:34:51</td>
                        </tr>
                        {/* <!--
                                <tr>
                                    <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select Item"></td>
                                    <td><span className="text-green">1</span></td>
                                    <td>Some announcement announcement announcement announcement announcement announcement</td>
                                    <td>
                                        2019-01-31 20:15
                                    </td>
                                </tr>
                                --> */}
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <div className="btn-list">
                      <span className="d-none d-sm-inline">
                        <a
                          data-url="/user/registercodes/bulkdelete"
                          data-confirm="해당 항목을 삭제하시겠습니까?"
                          href="#"
                          className="btn btn-outline-secondary bulk-action-btn"
                        >
                          삭제하기
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cards mb-3">
              <div className="col-12">
                <form
                  action="/user/createregistercode"
                  method="post"
                  className="card"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value="070255fa-fb29-4261-be5e-bd69f333c5b6"
                  />
                  <div className="card-header">
                    <h4 className="card-title">회원가입코드발급</h4>
                  </div>
                  <div className="card-body">
                    <div className="form-group mb-3 row">
                      <label className="form-label col-3 col-form-label">
                        회원아이디
                      </label>
                      <div className="col">
                        <div className="dropdown">
                          <input
                            type="text"
                            placeholder="회원아이디"
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
                          <input type="hidden" name="userId" id="userId" />
                        </div>
                      </div>
                      {/* <!--                                <div className="col">-->
<!--                                    <input type="text" name="title" className="form-control" aria-describedby="" placeholder="회원아이디">-->
<!--                                </div>--> */}
                    </div>
                    <div className="form-group mb-3 row">
                      <label className="form-label col-3 col-form-label">
                        코드
                      </label>
                      <div className="col">
                        <input
                          type="text"
                          name="code"
                          className="form-control"
                          aria-describedby=""
                          placeholder="코드"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3 row">
                      <label className="form-label col-3 col-form-label">
                        만료시간
                      </label>
                      <div className="col input-icon">
                        <input
                          type="text"
                          id="expirationDate"
                          name="expirationDate"
                          className="form-control"
                          aria-describedby=""
                          placeholder="만료시간"
                        />
                        <span className="input-icon-addon">
                          {/* <!-- Download SVG icon from http://tabler-icons.io/i/calendar --> */}
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
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-end">
                    <div className="d-flex">
                      <button type="submit" className="btn btn-primary ms-auto">
                        확인
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserCode
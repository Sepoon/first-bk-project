import React from "react";

const Announcement = () => {
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
        {/* // <!-- #include virtual="/inc/header.inc.asp" --> */}
        <div className="container-fluid">
          {/* <!-- Page title --> */}
          <div className="page-header d-print-none">
            <div className="row align-items-center">
              <div className="col">
                <h2 className="page-title">공지사항등록</h2>
              </div>
              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form
                    action="/announcement/list"
                    method="get"
                    className="d-flex"
                  >
                    <select
                      defaultValue={"DEFAULT"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="title">제목</option>
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
                            <a className="sort-item" data-sort="title">
                              제목
                              <i className="ti ti-chevron-down"></i>
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="created">
                              등록일시
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="status">
                              상태
                            </a>
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="53"
                            />
                          </td>
                          <td>53</td>
                          <td>공지사항 1</td>
                          <td>2021-10-27 22:55:00</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 활성
                          </td>
                          <td className="text-end">
                            <a
                              href="/announcement/edit/53"
                              className="btn btn-white"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/announcement/delete"
                              data-confirm="이 항목을 삭제하시겠습니까?"
                              data-id="53"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="56"
                            />
                          </td>
                          <td>56</td>
                          <td>공지사항등록 테스트</td>
                          <td>2022-01-21 10:46:01</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 활성
                          </td>
                          <td className="text-end">
                            <a
                              href="/announcement/edit/56"
                              className="btn btn-white"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/announcement/delete"
                              data-confirm="이 항목을 삭제하시겠습니까?"
                              data-id="56"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="57"
                            />
                          </td>
                          <td>57</td>
                          <td>나나나</td>
                          <td>2022-01-21 11:55:11</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 활성
                          </td>
                          <td className="text-end">
                            <a
                              href="/announcement/edit/57"
                              className="btn btn-white"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/announcement/delete"
                              data-confirm="이 항목을 삭제하시겠습니까?"
                              data-id="57"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="48"
                            />
                          </td>
                          <td>48</td>
                          <td>스포츠 첫충 & 매충 보너스</td>
                          <td>2021-10-25 07:33:06</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 활성
                          </td>
                          <td className="text-end">
                            <a
                              href="/announcement/edit/48"
                              className="btn btn-white"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/announcement/delete"
                              data-confirm="이 항목을 삭제하시겠습니까?"
                              data-id="48"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="58"
                            />
                          </td>
                          <td>58</td>
                          <td>테스트 공지</td>
                          <td>2022-02-22 16:46:03</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 활성
                          </td>
                          <td className="text-end">
                            <a
                              href="/announcement/edit/58"
                              className="btn btn-white"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/announcement/delete"
                              data-confirm="이 항목을 삭제하시겠습니까?"
                              data-id="58"
                            >
                              삭제
                            </a>
                          </td>
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
                          data-url="/announcement/bulkdelete"
                          data-confirm="해당 아이템들을 삭제하시겠습니까?"
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
                  action="/announcement/create"
                  method="post"
                  className="card"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                  />
                  <div className="card-header">
                    <h4 className="card-title">공지추가</h4>
                  </div>
                  <div className="card-body">
                    <div className="form-group mb-3 row">
                      <label className="form-label col-3 col-form-label">
                        제목
                      </label>
                      <div className="col">
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          aria-describedby=""
                          placeholder="공지 제목"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-5 row">
                      <label className="form-label col-3 col-form-label">
                        Content
                      </label>
                      <div className="col">
                        <input type="hidden" name="content" id="content" />
                        <div id="Content-editor" className="editor"></div>
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
      {/* <!-- #include virtual="/inc/footer.inc.asp" --> */}
    </>
  );
};

export default Announcement;

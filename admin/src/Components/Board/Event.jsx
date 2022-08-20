import React from "react";

const Event = () => {
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
                {/* <!-- Page pre-title --> */}
                {/* <!--<div className="page-pretitle">
                            관리자메인 > 회원관리
                        </div>--> */}
                <h2 className="page-title">이벤트관리</h2>
              </div>

              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="/event/list" method="get" className="d-flex">
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
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <span className="d-none d-sm-inline">
                    <a href="/event/create" className="btn btn-primary">
                      이벤트 생성하기
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="total">
              총 <span>6</span>건
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
                            <input
                              id="form-check-all"
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select all users"
                            />
                          </th>
                          <th className="w-1">
                            <a className="sort-item" data-sort="id">
                              번호
                            </a>
                          </th>
                          <th>이미지</th>
                          <th>
                            <a className="sort-item" data-sort="title">
                              제목
                              <i className="ti ti-chevron-down"></i>
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="created">
                              발급시간
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
                              value="4"
                            />
                          </td>
                          <td>4</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/event/4/1635173223411_logo2.png"
                              height="48"
                            />
                          </td>
                          <td>test</td>
                          <td>2021-10-25 21:47:02</td>
                          <td>활성</td>
                          <td className="text-end">
                            <a href="/event/edit/4" className="btn btn-white">
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/event/delete"
                              data-confirm="이 항목을 삭제하시겠습니까??"
                              data-id="4"
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
                              value="9"
                            />
                          </td>
                          <td>9</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/event/9/1635333240412_3.jpg"
                              height="48"
                            />
                          </td>
                          <td>보면서 게임하기! 라이브스코어 업데이트</td>
                          <td>2021-10-27 19:50:55</td>
                          <td>활성</td>
                          <td className="text-end">
                            <a href="/event/edit/9" className="btn btn-white">
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/event/delete"
                              data-confirm="이 항목을 삭제하시겠습니까??"
                              data-id="9"
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
                              value="7"
                            />
                          </td>
                          <td>7</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/event/7/1635332744261_1.jpg"
                              height="48"
                            />
                          </td>
                          <td>스포츠 멀티베팅 이벤트!</td>
                          <td>2021-10-27 19:47:59</td>
                          <td>활성</td>
                          <td className="text-end">
                            <a href="/event/edit/7" className="btn btn-white">
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/event/delete"
                              data-confirm="이 항목을 삭제하시겠습니까??"
                              data-id="7"
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
                              value="1"
                            />
                          </td>
                          <td>1</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/event/1/1642733995254_다운로드.jpeg"
                              height="48"
                            />
                          </td>
                          <td>업계 최고의 지인추천 이벤트</td>
                          <td>2021-10-25 11:41:01</td>
                          <td>활성</td>
                          <td className="text-end">
                            <a href="/event/edit/1" className="btn btn-white">
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/event/delete"
                              data-confirm="이 항목을 삭제하시겠습니까??"
                              data-id="1"
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
                              value="3"
                            />
                          </td>
                          <td>3</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/event/3/1635147849174_Contiki-Local-Flavours-1280x190.jpg"
                              height="48"
                            />
                          </td>
                          <td>업계 최고의 지인추천 이벤트 기본</td>
                          <td>2021-10-25 07:44:09</td>
                          <td>활성</td>
                          <td className="text-end">
                            <a href="/event/edit/3" className="btn btn-white">
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/event/delete"
                              data-confirm="이 항목을 삭제하시겠습니까??"
                              data-id="3"
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
                              value="8"
                            />
                          </td>
                          <td>8</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/event/8/1635333589040_4.jpg"
                              height="48"
                            />
                          </td>
                          <td>추천인 입력시 쏟아지는 혜택!</td>
                          <td>2021-10-27 19:49:42</td>
                          <td>활성</td>
                          <td className="text-end">
                            <a href="/event/edit/8" className="btn btn-white">
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/event/delete"
                              data-confirm="이 항목을 삭제하시겠습니까??"
                              data-id="8"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <div className="btn-list">
                      <span className="d-none d-sm-inline">
                        <a
                          data-url="/event/bulkdelete"
                          id="bulk-delete-btn"
                          href="#"
                          className="btn btn-outline-secondary"
                        >
                          삭제하기
                        </a>
                      </span>
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

export default Event;

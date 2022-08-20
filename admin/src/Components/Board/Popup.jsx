import React from "react";

const Popup = () => {
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
                {/* <!-- Page pre-title -->
                    <!--<div className="page-pretitle">
                        관리자메인 > 회원관리
                    </div>--> */}
                <h2 className="page-title">팝업관리</h2>
              </div>
              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="/popup/list" method="get" className="d-flex">
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
                    <a href="/popup/create" className="btn btn-primary">
                      팝업 생성하기
                    </a>
                  </span>
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
                          <th className="w-1">
                            <input
                              id="form-check-all"
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select all"
                            />
                          </th>
                          <th>
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
                          <th>사이즈</th>
                          <th>이미지</th>
                          <th>
                            <a className="sort-item" data-sort="linkUrl">
                              URL
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="startDate">
                              시작날짜
                            </a>
                          </th>
                          {/* <!--                                    <th>기간</th>--> */}
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
                          <td>가입 이벤트</td>
                          <td>300x400</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/popup/53/1635347585931_2.jpg"
                              height="48"
                            />
                          </td>
                          <td></td>
                          <td>2021-08-15</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 활성
                          </td>
                          <td className="text-end">
                            <a href="/popup/edit/53" className="btn btn-white">
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/popup/delete"
                              data-confirm="이 항목을 삭제하시겠습니까?"
                              data-id="53"
                            >
                              삭제
                            </a>
                            {/* <!--<a th:href="@{/popup/edit/{id}(id=${advertisement.id})}" className="text-btn">수정</a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="51"
                            />
                          </td>
                          <td>51</td>
                          <td>럭키박스 이벤트</td>
                          <td>300x500</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/popup/51/1635347610509_4.jpg"
                              height="48"
                            />
                          </td>
                          <td></td>
                          <td>2021-08-12</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 활성
                          </td>
                          <td className="text-end">
                            <a href="/popup/edit/51" className="btn btn-white">
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/popup/delete"
                              data-confirm="이 항목을 삭제하시겠습니까?"
                              data-id="51"
                            >
                              삭제
                            </a>
                            {/* <!--<a th:href="@{/popup/edit/{id}(id=${advertisement.id})}" className="text-btn">수정</a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="118"
                            />
                          </td>
                          <td>118</td>
                          <td>베팅왕 이벤트</td>
                          <td>100x100</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/popup/118/1635347598337_3.jpg"
                              height="48"
                            />
                          </td>
                          <td></td>
                          <td>2021-09-30</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 활성
                          </td>
                          <td className="text-end">
                            <a href="/popup/edit/118" className="btn btn-white">
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/popup/delete"
                              data-confirm="이 항목을 삭제하시겠습니까?"
                              data-id="118"
                            >
                              삭제
                            </a>
                            {/* <!--<a th:href="@{/popup/edit/{id}(id=${advertisement.id})}" className="text-btn">수정</a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="119"
                            />
                          </td>
                          <td>119</td>
                          <td>스포츠 멀티베팅 이벤트</td>
                          <td>300x400</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/popup/119/1635347534597_1.jpg"
                              height="48"
                            />
                          </td>
                          <td></td>
                          <td></td>
                          <td>
                            <span className="badge bg-success me-1"></span> 활성
                          </td>
                          <td className="text-end">
                            <a href="/popup/edit/119" className="btn btn-white">
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/popup/delete"
                              data-confirm="이 항목을 삭제하시겠습니까?"
                              data-id="119"
                            >
                              삭제
                            </a>
                            {/* <!--<a th:href="@{/popup/edit/{id}(id=${advertisement.id})}" className="text-btn">수정</a>--> */}
                          </td>
                        </tr>

                        {/* <!--
                                <tr>
                                    <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select user"></td>
                                    <td>October event popup</td>
                                    <td>
                                        Image
                                    </td>
                                    <td>
                                        400x400
                                    </td>
                                    <td>
                                        전체레벨
                                    </td>
                                    <td>
                                        2021-09-30 12:00
                                    </td>
                                    <td>
                                        2021-09-30 12:00 ~ 2021-10-30 12:00
                                    </td>
                                    <td>
                                        사용중
                                    </td>
                                    <td className="text-end">
                                        <a href="#" className="text-reset text-btn">수정</a>
                                        <span className="a-divider">|</span>
                                        <a href="#" className="text-red text-btn">삭제</a>
                                    </td>
                                </tr>
                                --> */}
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <div className="btn-list">
                      {/* <!--<span className="d-none d-sm-inline">
                                    <a href="#" className="btn btn-outline-secondary">
                                        선택
                                    </a>
                                </span>
                                <span className="d-none d-sm-inline">
                                    <a href="#" className="btn btn-outline-secondary">
                                        취소
                                    </a>
                                </span>
                                <span className="d-none d-sm-inline">
                                    <a href="#" className="btn btn-outline-secondary">
                                        반전
                                    </a>
                                </span>
                                <span className="d-none d-sm-inline">
                                    <a href="#" className="btn btn-outline-secondary">
                                        전체수정
                                    </a>
                                </span>
                                <span className="d-none d-sm-inline">
                                    <a href="#" className="btn btn-outline-secondary">
                                        전체삭제
                                    </a>
                                </span>--> */}
                      <a
                        data-url="/popup/bulkdelete"
                        data-confirm="해당 아이템들을 삭제하시겠습니까?"
                        href="#"
                        className="btn btn-outline-secondary bulk-action-btn"
                      >
                        삭제하기
                      </a>
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

export default Popup;

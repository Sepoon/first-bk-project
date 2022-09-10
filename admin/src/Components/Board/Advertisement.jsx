import React from "react";

const Advertisement = () => {
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
                <h2 className="page-title">광고관리</h2>
              </div>

              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form
                    action="/advertisement/list"
                    method="get"
                    className="d-flex"
                  >
                    <select
                      defaultValue={"DEFAULT"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="title">제목</option>
                      <option value="link">링크</option>
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
                    <a href="/advertisement/create" className="btn btn-primary">
                      광고 생성하기
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="total">
              총 <span>3</span>건
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
                          <th>
                            <a className="sort-item" data-sort="title">
                              제목
                              <i className="ti ti-chevron-down"></i>
                            </a>
                          </th>
                          <th>이미지</th>
                          <th>링크</th>
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
                              value="125"
                            />
                          </td>
                          <td>125</td>
                          <td>test 0914</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/advertisement/125/1635408771328_인디벳-400x400-1-80x80.gif"
                              width="48"
                            />
                          </td>
                          <td>
                            <a href="https://picsum.photos/200">
                              https://picsum.photos/200
                            </a>
                          </td>
                          <td>
                            <span className="badge bg-success me-1"></span> 활성
                          </td>
                          <td className="text-end">
                            <a
                              href="/advertisement/edit/125"
                              className="btn btn-white"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/advertisement/delete"
                              data-confirm="이 항목을 삭제하시겠습니까?"
                              data-id="125"
                            >
                              삭제
                            </a>

                            {/* <!--<a th:href="@{/advertisement/edit/{id}(id=${advertisement.id})}" className="text-btn">수정</a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="124"
                            />
                          </td>
                          <td>124</td>
                          <td>test ad 4</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/advertisement/124/1635408868716_images.jpg"
                              width="48"
                            />
                          </td>
                          <td>
                            <a href="https://picsum.photos/200">
                              https://picsum.photos/200
                            </a>
                          </td>
                          <td>
                            <span className="badge bg-success me-1"></span> 활성
                          </td>
                          <td className="text-end">
                            <a
                              href="/advertisement/edit/124"
                              className="btn btn-white"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/advertisement/delete"
                              data-confirm="이 항목을 삭제하시겠습니까?"
                              data-id="124"
                            >
                              삭제
                            </a>

                            {/* <!--<a th:href="@{/advertisement/edit/{id}(id=${advertisement.id})}" className="text-btn">수정</a>--> */}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="129"
                            />
                          </td>
                          <td>129</td>
                          <td>오리</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/advertisement/129/1642735090741_다운로드.jpeg"
                              width="48"
                            />
                          </td>
                          <td>
                            <a href="https://www.google.com">
                              https://www.google.com
                            </a>
                          </td>
                          <td>
                            <span className="badge bg-success me-1"></span> 활성
                          </td>
                          <td className="text-end">
                            <a
                              href="/advertisement/edit/129"
                              className="btn btn-white"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/advertisement/delete"
                              data-confirm="이 항목을 삭제하시겠습니까?"
                              data-id="129"
                            >
                              삭제
                            </a>

                            {/* <!--<a th:href="@{/advertisement/edit/{id}(id=${advertisement.id})}" className="text-btn">수정</a>--> */}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <div className="btn-list">
                      <span className="d-none d-sm-inline">
                        <a
                          data-url="/advertisement/bulkdelete"
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

export default Advertisement;

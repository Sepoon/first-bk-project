import React from "react";

const Banner = () => {
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
                <h2 className="page-title">배너관리</h2>
              </div>

              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="/banner/list" method="get" className="d-flex">
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
                    <a href="/banner/create" className="btn btn-primary">
                      배너 생성하기
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="total">
              총 <span>2</span>건
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
                            <a className="sort-item" data-sort="startDate">
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
                              value="46"
                            />
                          </td>
                          <td>46</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/banner/46/1635409909816_2.jpg"
                              height="48"
                            />
                          </td>
                          <td>미니게임</td>
                          <td>2021-10-25</td>
                          <td>활성</td>
                          <td className="text-end">
                            <a href="/banner/edit/46" className="btn btn-white">
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/banner/delete"
                              data-confirm="이 항목을 삭제하시겠습니까??"
                              data-id="46"
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
                              value="47"
                            />
                          </td>
                          <td>47</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/banner/47/1635409543692_banner.jpg"
                              height="48"
                            />
                          </td>
                          <td>샘플베너</td>
                          <td>2021-10-26</td>
                          <td>활성</td>
                          <td className="text-end">
                            <a href="/banner/edit/47" className="btn btn-white">
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/banner/delete"
                              data-confirm="이 항목을 삭제하시겠습니까??"
                              data-id="47"
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
                          data-url="/banner/bulkdelete"
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

export default Banner;

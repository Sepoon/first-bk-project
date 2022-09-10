import React from "react";

const FAQ = () => {
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
                <h2 className="page-title">고객센터-FAQ</h2>
              </div>

              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="/faq/list" method="get" className="d-flex">
                    <select
                      defaultValue={'DEFAULT'}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="title">제목</option>
                      <option value="content">콘텐츠</option>
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
                    <a href="/faq/create" className="btn btn-primary">
                      FAQ 생성하기
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="total">
              총 <span>11</span>건
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
                            <a className="sort-item" data-sort="categoryId">
                              카테고리
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="question">
                              제목
                              <i className="ti ti-chevron-down"></i>
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="answer">
                              내용
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="created">
                              발급시간
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
                              value="135"
                            />
                          </td>

                          <td>MEMBER</td>

                          <td>' - '</td>
                          <td>^ - ^</td>
                          <td>2022-01-20 11:14:51</td>
                          <td className="text-end">
                            <a href="/faq/edit/135" className="btn btn-white">
                              수정
                            </a>
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

                          <td>MEMBER</td>

                          <td>게임 이용안내 및 규정</td>
                          <td>게임 이용안내 및 규정</td>
                          <td>2021-10-25 07:27:15</td>
                          <td className="text-end">
                            <a href="/faq/edit/129" className="btn btn-white">
                              수정
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="127"
                            />
                          </td>

                          <td>GAME</td>

                          <td>로그인이 안됩니다.</td>
                          <td>
                            로그인이 안되는경우 F5 새로고침후 재접속
                            부탁드립니다.
                          </td>
                          <td>2021-10-25 07:25:55</td>
                          <td className="text-end">
                            <a href="/faq/edit/127" className="btn btn-white">
                              수정
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="132"
                            />
                          </td>

                          <td>BEST</td>

                          <td>스포츠 사칭 피해 및 주의 안내에 대한 공지</td>
                          <td>스포츠 사칭 피해 및 주의 안내에 대한 공지</td>
                          <td>2021-10-25 07:28:07</td>
                          <td className="text-end">
                            <a href="/faq/edit/132" className="btn btn-white">
                              수정
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="136"
                            />
                          </td>

                          <td>BEST</td>

                          <td>ㅇㄷㅇㄷㅇㅇㄷ1</td>
                          <td>ㅇㄷㅇㄷㅇㄷㅇㄷㅇㄷㅇㄷ22222</td>
                          <td>2022-01-20 16:45:01</td>
                          <td className="text-end">
                            <a href="/faq/edit/136" className="btn btn-white">
                              수정
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="138"
                            />
                          </td>

                          <td>BEST</td>

                          <td>아</td>
                          <td>qna 계속 생성해보기</td>
                          <td>2022-01-20 16:48:32</td>
                          <td className="text-end">
                            <a href="/faq/edit/138" className="btn btn-white">
                              수정
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="131"
                            />
                          </td>

                          <td>PAYMENT</td>

                          <td>양방 및 편법 부정한 배팅에 대한 제재 안내</td>
                          <td>양방 및 편법 부정한 배팅에 대한 제재 안내</td>
                          <td>2021-10-25 07:27:51</td>
                          <td className="text-end">
                            <a href="/faq/edit/131" className="btn btn-white">
                              수정
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="139"
                            />
                          </td>

                          <td>MEMBER</td>

                          <td>여기에 올라가네 카테고리</td>
                          <td>카테고리!</td>
                          <td>2022-01-20 16:49:29</td>
                          <td className="text-end">
                            <a href="/faq/edit/139" className="btn btn-white">
                              수정
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="128"
                            />
                          </td>

                          <td>BEST</td>

                          <td>입금 및 출금한도등 입출금에 대한 규정 안내</td>
                          <td>입금 및 출금한도등 입출금에 대한 규정 안내</td>
                          <td>2021-10-25 07:26:57</td>
                          <td className="text-end">
                            <a href="/faq/edit/128" className="btn btn-white">
                              수정
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="130"
                            />
                          </td>

                          <td>GAME</td>

                          <td>입금 및 출금한도등 입출금에 대한 규정 안내</td>
                          <td>입금 및 출금한도등 입출금에 대한 규정 안내</td>
                          <td>2021-10-25 07:27:33</td>
                          <td className="text-end">
                            <a href="/faq/edit/130" className="btn btn-white">
                              수정
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="137"
                            />
                          </td>

                          <td>BEST</td>

                          <td>질문? 제목?</td>
                          <td>
                            답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변
                          </td>
                          <td>2022-01-20 16:46:01</td>
                          <td className="text-end">
                            <a href="/faq/edit/137" className="btn btn-white">
                              수정
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
                          data-url="/faq/bulkdelete"
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

export default FAQ;

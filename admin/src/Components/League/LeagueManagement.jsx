import React from "react";

const LeagueManagement = () => {
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
                <h2 className="page-title">리그관리</h2>
              </div>

              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="/league/list" method="get" className="d-flex">
                    <input type="hidden" name="source" defaultValue="" />
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
                      id=""
                      name="sportId"
                    >
                      <option value="">전체</option>
                      <option value="6046">축구</option>
                      <option value="48242">농구</option>
                      <option value="154914">야구</option>
                      <option value="154830">배구</option>
                      <option value="35232">아이스하키</option>
                      <option value="131506">미식축구</option>
                    </select>
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="nameEn">리그명 (LSport)</option>
                      <option value="nameKo">리그명</option>
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
                    <a href="/league/create" className="btn btn-primary">
                      리그 등록
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="row align-items-center mt-3">
              <div className="col">
                <div className="btn-list">
                  <span className="d-none d-sm-inline">
                    <a
                      href="/league/list"
                      className="btn btn-outline-secondary btn-pill active"
                    >
                      전체
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="/league/list?source=LSPORTS"
                      className="btn btn-outline-secondary btn-pill"
                    >
                      LSports
                    </a>
                  </span>
                  <span className="d-none d-sm-inline">
                    <a
                      href="/league/list?source=MANUAL"
                      className="btn btn-outline-secondary btn-pill"
                    >
                      Custom
                    </a>
                  </span>
                </div>
              </div>
              {/* <!--
                    <div className="col-auto ms-auto d-print-none note" style="margin-top: 15px;">
                        전체회원보유머니 : 0 | 전체회원보유포인트 : 0
                    </div>
                    --> */}
            </div>

            <div className="total">
              총 <span>578</span>건
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
                              aria-label="Select"
                            />
                          </th>
                          <th className="w-1">
                            <a className="sort-item" data-sort="id">
                              리그ID
                            </a>
                          </th>
                          {/* <!--                                        <th>이미지</th>--> */}
                          <th>
                            <a className="sort-item" data-sort="sportName">
                              종목
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="locationName">
                              Location
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="nameEn">
                              리그명 (LSports)
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="nameKo">
                              리그명
                              <i className="ti ti-chevron-down"></i>
                            </a>
                          </th>
                          <th>로고</th>
                          <th>
                            <a className="sort-item" data-sort="code">
                              코드
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="bgColor">
                              색
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="created">
                              생성날짜
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
                              value="43610"
                            />
                          </td>

                          <td>43610</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>축구</td>
                          <td>알바니아</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td> Cup</td>
                          <td> Cup</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2022-01-27 11:08:16</td>
                          <td>
                            <a
                              href="/league/edit/43610"
                              className="btn btn-white"
                            >
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
                              value="15370"
                            />
                          </td>

                          <td>15370</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>농구</td>
                          <td>폴란드</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1 Liga</td>
                          <td>1 Liga</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-10-30 23:29:21</td>
                          <td>
                            <a
                              href="/league/edit/15370"
                              className="btn btn-white"
                            >
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
                              value="43657"
                            />
                          </td>

                          <td>43657</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>축구</td>
                          <td>폴란드</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1 Liga W</td>
                          <td>1 Liga W</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span
                              className="form-colorinput-color rounded-circle"
                              style={{ backgroundColor: "#e47272" }}
                            />
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-10-27 11:28:56</td>
                          <td>
                            <a
                              href="/league/edit/43657"
                              className="btn btn-white"
                            >
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
                              value="28741"
                            />
                          </td>

                          <td>28741</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>농구</td>
                          <td>아이슬란드</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1 Liga W</td>
                          <td>1 Liga W</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-07 02:42:20</td>
                          <td>
                            <a
                              href="/league/edit/28741"
                              className="btn btn-white"
                            >
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
                              value="6821"
                            />
                          </td>

                          <td>6821</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>배구</td>
                          <td>Austria</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1. Bundesliga Women</td>
                          <td>1. Bundesliga Women</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-08 01:44:49</td>
                          <td>
                            <a
                              href="/league/edit/6821"
                              className="btn btn-white"
                            >
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
                              value="15654"
                            />
                          </td>

                          <td>15654</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>배구</td>
                          <td>Slovenia</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1. DOL</td>
                          <td>1. DOL</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-07 02:49:44</td>
                          <td>
                            <a
                              href="/league/edit/15654"
                              className="btn btn-white"
                            >
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
                              value="35655"
                            />
                          </td>

                          <td>35655</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>배구</td>
                          <td>Slovenia</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1. DOL W</td>
                          <td>1. DOL W</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-05 20:48:16</td>
                          <td>
                            <a
                              href="/league/edit/35655"
                              className="btn btn-white"
                            >
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
                              value="514"
                            />
                          </td>

                          <td>514</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>Football</td>
                          <td>Croatia</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1. HNL</td>
                          <td>1. HNL</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-08 01:31:16</td>
                          <td>
                            <a
                              href="/league/edit/514"
                              className="btn btn-white"
                            >
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
                              value="13352"
                            />
                          </td>

                          <td>13352</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>Football</td>
                          <td>Croatia</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1. HNL U19</td>
                          <td>1. HNL U19</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-07 18:36:17</td>
                          <td>
                            <a
                              href="/league/edit/13352"
                              className="btn btn-white"
                            >
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
                              value="15714"
                            />
                          </td>

                          <td>15714</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>Ice Hockey</td>
                          <td>Slovakia</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1. Liga</td>
                          <td>1. Liga</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-05 21:18:31</td>
                          <td>
                            <a
                              href="/league/edit/15714"
                              className="btn btn-white"
                            >
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
                              value="34104"
                            />
                          </td>

                          <td>34104</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>농구</td>
                          <td>슬로베니아</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1. SKL</td>
                          <td>1. SKL</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-10-25 09:28:38</td>
                          <td>
                            <a
                              href="/league/edit/34104"
                              className="btn btn-white"
                            >
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
                              value="15564"
                            />
                          </td>

                          <td>15564</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>배구</td>
                          <td>Croatia</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1.A Liga Women</td>
                          <td>1.A Liga Women</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-07 02:49:40</td>
                          <td>
                            <a
                              href="/league/edit/15564"
                              className="btn btn-white"
                            >
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
                              value="14856"
                            />
                          </td>

                          <td>14856</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>축구</td>
                          <td>안도라</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1a Divisió</td>
                          <td>1a Divisió</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2022-03-06 23:58:43</td>
                          <td>
                            <a
                              href="/league/edit/14856"
                              className="btn btn-white"
                            >
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
                              value="13957"
                            />
                          </td>

                          <td>13957</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>Football</td>
                          <td>Burkina Faso</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1st Division</td>
                          <td>1st Division</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-07 02:45:04</td>
                          <td>
                            <a
                              href="/league/edit/13957"
                              className="btn btn-white"
                            >
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
                              value="38649"
                            />
                          </td>

                          <td>38649</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>축구</td>
                          <td>세르비아</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>1st League</td>
                          <td>1st League</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-10-27 11:28:36</td>
                          <td>
                            <a
                              href="/league/edit/38649"
                              className="btn btn-white"
                            >
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
                              value="38570"
                            />
                          </td>

                          <td>38570</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>Football</td>
                          <td>Poland</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>2 Liga</td>
                          <td>2 Liga</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-05 21:05:00</td>
                          <td>
                            <a
                              href="/league/edit/38570"
                              className="btn btn-white"
                            >
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
                              value="27850"
                            />
                          </td>

                          <td>27850</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>농구</td>
                          <td>Austria</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>2 Liga</td>
                          <td>2 Liga</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-10-26 04:09:35</td>
                          <td>
                            <a
                              href="/league/edit/27850"
                              className="btn btn-white"
                            >
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
                              value="13847"
                            />
                          </td>

                          <td>13847</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>축구</td>
                          <td>독일</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>2. Bundesliga W</td>
                          <td>2. Bundesliga W</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-07 08:26:34</td>
                          <td>
                            <a
                              href="/league/edit/13847"
                              className="btn btn-white"
                            >
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
                              value="3117"
                            />
                          </td>

                          <td>3117</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>Football</td>
                          <td>Croatia</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>2. HNL</td>
                          <td>2. HNL</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-05 21:05:01</td>
                          <td>
                            <a
                              href="/league/edit/3117"
                              className="btn btn-white"
                            >
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
                              value="11590"
                            />
                          </td>

                          <td>11590</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>축구</td>
                          <td>슬로베니아</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>2. Liga</td>
                          <td>2. Liga</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2022-03-06 23:58:44</td>
                          <td>
                            <a
                              href="/league/edit/11590"
                              className="btn btn-white"
                            >
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
                              value="35638"
                            />
                          </td>

                          <td>35638</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>Football</td>
                          <td>Gambia</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>2nd Division</td>
                          <td>2nd Division</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2022-01-27 12:45:22</td>
                          <td>
                            <a
                              href="/league/edit/35638"
                              className="btn btn-white"
                            >
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
                              value="170"
                            />
                          </td>

                          <td>170</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>축구</td>
                          <td>오스트리아</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>2부 리그</td>
                          <td>2부 리그</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-07 17:57:01</td>
                          <td>
                            <a
                              href="/league/edit/170"
                              className="btn btn-white"
                            >
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
                              value="11934"
                            />
                          </td>

                          <td>11934</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>축구</td>
                          <td>체코</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>3 liga</td>
                          <td>3 liga</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-10-28 11:52:22</td>
                          <td>
                            <a
                              href="/league/edit/11934"
                              className="btn btn-white"
                            >
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
                              value="11917"
                            />
                          </td>

                          <td>11917</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>축구</td>
                          <td>크로아티아</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>3. HNL</td>
                          <td>3. HNL</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-07 18:48:08</td>
                          <td>
                            <a
                              href="/league/edit/11917"
                              className="btn btn-white"
                            >
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
                              value="19656"
                            />
                          </td>

                          <td>19656</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>축구</td>
                          <td>터키</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>3. Lig, 그룹1</td>
                          <td>3. Lig, 그룹1</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-07 17:57:00</td>
                          <td>
                            <a
                              href="/league/edit/19656"
                              className="btn btn-white"
                            >
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
                              value="40295"
                            />
                          </td>

                          <td>40295</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>농구</td>
                          <td>세계</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>3x3 World Tour</td>
                          <td>3x3 World Tour</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-08 03:54:57</td>
                          <td>
                            <a
                              href="/league/edit/40295"
                              className="btn btn-white"
                            >
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
                              value="30609"
                            />
                          </td>

                          <td>30609</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>축구</td>
                          <td>터키</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>3부리그, 승격 플레이오프</td>
                          <td>3부리그, 승격 플레이오프</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-12-18 18:01:34</td>
                          <td>
                            <a
                              href="/league/edit/30609"
                              className="btn btn-white"
                            >
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
                              value="41412"
                            />
                          </td>

                          <td>41412</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>축구</td>
                          <td>폴란드</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>4 Liga</td>
                          <td>4 Liga</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-11-07 02:57:20</td>
                          <td>
                            <a
                              href="/league/edit/41412"
                              className="btn btn-white"
                            >
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
                              value="15144"
                            />
                          </td>

                          <td>15144</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>축구</td>
                          <td>체코</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>5 Liga</td>
                          <td>5 Liga</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2021-10-28 11:52:22</td>
                          <td>
                            <a
                              href="/league/edit/15144"
                              className="btn btn-white"
                            >
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
                              value="24664"
                            />
                          </td>

                          <td>24664</td>
                          {/* <!--                                        <td>--> */}
                          {/* <!--                                            <img th:src="${league.logoUrl}" height="36" />--> */}
                          {/* <!--                                        </td>--> */}
                          <td>농구</td>
                          <td>그루지아</td>
                          {/* <!--                                            <div th:if="${!#strings.isEmpty(league.code)}">--> */}
                          {/* <!--                                                <img th:src="@{'/img/flags/' + ${league.code} + '.svg'}" height="16" th:title="${league.code}" style="-webkit-box-shadow: 1px 1px 3px 1px #cccccc; box-shadow: 1px 1px 3px 1px #cccccc;" onerror="this.style.display='none'" />--> */}
                          {/* <!--                                            </div>--> */}
                          {/* <!--<td th:utext="${league.locationName}">...</td>--> */}
                          <td>A League</td>
                          <td>A League</td>
                          <td>
                            <img src="" height="36" />
                          </td>
                          <td></td>
                          <td>
                            <span className="form-colorinput-color rounded-circle"></span>
                          </td>
                          {/* <!--                                        <td th:utext="${league.source}">...</td>--> */}
                          <td>2022-02-23 12:25:33</td>
                          <td>
                            <a
                              href="/league/edit/24664"
                              className="btn btn-white"
                            >
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
                          data-url="/league/bulkdelete"
                          id="bulk-delete-btn"
                          href="#"
                          className="btn btn-outline-secondary"
                        >
                          삭제하기
                        </a>
                      </span>
                    </div>

                    <ul className="pagination m-0 ms-auto">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          tabIndex="-1"
                          aria-disabled="true"
                          href="/league/list?&amp;page=0"
                          disabled="disabled"
                        >
                          <i className="ti ti-chevron-left"></i>
                          이전
                        </a>
                      </li>

                      <li className="page-item active">
                        <a
                          className="page-link"
                          href="/league/list?&amp;page=1"
                        >
                          1
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/league/list?&amp;page=2"
                        >
                          2
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/league/list?&amp;page=3"
                        >
                          3
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/league/list?&amp;page=4"
                        >
                          4
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/league/list?&amp;page=5"
                        >
                          5
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/league/list?&amp;page=6"
                        >
                          6
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/league/list?&amp;page=7"
                        >
                          7
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/league/list?&amp;page=8"
                        >
                          8
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/league/list?&amp;page=9"
                        >
                          9
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/league/list?&amp;page=10"
                        >
                          10
                        </a>
                      </li>

                      <li className="page-item">
                        <span className="page-link">...</span>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/league/list?&amp;page=20"
                        >
                          20
                        </a>
                      </li>

                      {/* <!--        <th:block th:each="pageNum: ${#numbers.sequence(1, pageCount)}">--> */}
                      {/* <!--            <li className="page-item" th:classappend="${pageNum} == ${page}? 'active'">--> */}
                      {/* <!--                <a className="page-link" th:href="${mainPath} + '&page=' + ${pageNum}" th:text="${pageNum}"--> */}
                      {/* <!--                   th:disabled="${pageNum} == ${page}? 'disabled'"></a>--> */}
                      {/* <!--            </li>--> */}
                      {/* <!--        </th:block>--> */}
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/league/list?&amp;page=2"
                        >
                          다음 <i className="ti ti-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
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

export default LeagueManagement;

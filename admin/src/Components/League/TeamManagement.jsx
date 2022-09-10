import React from "react";

const TeamManagement = () => {
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
                <h2 className="page-title">팀관리</h2>
              </div>

              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="/team/list" method="get" className="d-flex">
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
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
                      <option value="leagueName">리그 이름</option>
                      <option value="teamEnName">팀 이름(LSport)</option>
                      <option value="teamKoName">팀 이름</option>
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
                    <a href="/team/create" className="btn btn-primary">
                      팀 등록
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              {/* <!--                    <div className="col">--> */}
              {/* <!--                        <div className="btn-list">--> */}

              {/* <!--                        <span className="d-none d-sm-inline">--> */}
              {/* <!--                            <a href="#" className="btn btn-outline-secondary btn-pill">--> */}
              {/* <!--                                전체 (150)--> */}
              {/* <!--                            </a>--> */}
              {/* <!--                        </span>--> */}
              {/* <!--                        <span className="d-none d-sm-inline">--> */}
              {/* <!--                            <a href="#" className="btn btn-outline-secondary btn-pill">--> */}
              {/* <!--                                LSports (140)--> */}
              {/* <!--                            </a>--> */}
              {/* <!--                        </span>--> */}
              {/* <!--                        <span className="d-none d-sm-inline">--> */}
              {/* <!--                            <a href="#" className="btn btn-outline-secondary btn-pill">--> */}
              {/* <!--                                Custom (10)--> */}
              {/* <!--                            </a>--> */}
              {/* <!--                        </span>--> */}
              {/* <!--                        </div>--> */}
              {/* <!--                    </div>--> */}
              {/* <!--
                    <div className="col-auto ms-auto d-print-none note" style="margin-top: 15px;">
                        전체회원보유머니 : 0 | 전체회원보유포인트 : 0
                    </div>
                    --> */}
            </div>

            <div className="total">
              총 <span>5,011</span>건
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
                              팀ID
                            </a>
                          </th>
                          <th>종목</th>
                          <th>리그명</th>
                          <th>
                            <a className="sort-item" data-sort="nameEn">
                              팀명 (LSports)
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="nameKo">
                              팀명
                            </a>
                          </th>
                          <th>로고</th>
                          <th>출저</th>
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
                              defaultValue="52029005"
                            />
                          </td>
                          <td>52029005</td>
                          <td>축구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Division 1</td>
                          <td> Al Ain FC</td>
                          <td> Al Ain FC</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52029005"
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
                              defaultValue="52509630"
                            />
                          </td>
                          <td>52509630</td>
                          <td>축구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Premier League W</td>
                          <td> Al Amiria W</td>
                          <td> Al Amiria W</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52509630"
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
                              defaultValue="52611983"
                            />
                          </td>
                          <td>52611983</td>
                          <td>Football</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>USL League One</td>
                          <td> Chattanooga Red Wolves</td>
                          <td> Chattanooga Red Wolves</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52611983"
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
                              defaultValue="52540537"
                            />
                          </td>
                          <td>52540537</td>
                          <td>농구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Euroleague Women</td>
                          <td> Fenerbahce W</td>
                          <td> Fenerbahce W</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52540537"
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
                              defaultValue="52701244"
                            />
                          </td>
                          <td>52701244</td>
                          <td>농구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>NBA Blitz League (E)</td>
                          <td> HOU Rockets (PK) Esports</td>
                          <td> HOU Rockets (PK) Esports</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52701244"
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
                              defaultValue="52504711"
                            />
                          </td>
                          <td>52504711</td>
                          <td>Football</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Jupiler League</td>
                          <td> KV Mechelen</td>
                          <td> KV Mechelen</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52504711"
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
                              defaultValue="52507054"
                            />
                          </td>
                          <td>52507054</td>
                          <td>아이스 하키</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>MHL</td>
                          <td> Ladya</td>
                          <td> Ladya</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52507054"
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
                              defaultValue="15003"
                            />
                          </td>
                          <td>15003</td>
                          <td>농구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>미국 프로 농구</td>
                          <td> Los Angeles Clippers </td>
                          <td> Los Angeles Clippers </td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/15003"
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
                              defaultValue="52707363"
                            />
                          </td>
                          <td>52707363</td>
                          <td>농구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>NBA Blitz League (E)</td>
                          <td> Los Angeles Clippers (zenny)</td>
                          <td> Los Angeles Clippers (zenny)</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52707363"
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
                              defaultValue="315769"
                            />
                          </td>
                          <td>315769</td>
                          <td>축구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Division 3</td>
                          <td> Sisaket</td>
                          <td> Sisaket</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/315769"
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
                              defaultValue="93644"
                            />
                          </td>
                          <td>93644</td>
                          <td>축구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>클럽 친선 경기</td>
                          <td>1 FC 슬로바코</td>
                          <td>1 FC 슬로바코</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/93644"
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
                              defaultValue="813"
                            />
                          </td>
                          <td>813</td>
                          <td>Football</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Bundesliga</td>
                          <td>1. FC Köln</td>
                          <td>1. FC Köln</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a href="/team/edit/813" className="btn btn-white">
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
                              defaultValue="13991"
                            />
                          </td>
                          <td>13991</td>
                          <td>축구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>여성부 분데스리가</td>
                          <td>1. FC 쾰른</td>
                          <td>1. FC 쾰른</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/13991"
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
                              defaultValue="1900"
                            />
                          </td>
                          <td>1900</td>
                          <td>Football</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Bundesliga</td>
                          <td>1. FSV Mainz</td>
                          <td>1. FSV Mainz</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a href="/team/edit/1900" className="btn btn-white">
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
                              defaultValue="80373"
                            />
                          </td>
                          <td>80373</td>
                          <td>Football</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Oberliga</td>
                          <td>1. SC Feucht</td>
                          <td>1. SC Feucht</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/80373"
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
                              defaultValue="281688"
                            />
                          </td>
                          <td>281688</td>
                          <td>축구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Tipsport Liga</td>
                          <td>1. SK 프로스테요브</td>
                          <td>1. SK 프로스테요브</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/281688"
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
                              defaultValue="52027693"
                            />
                          </td>
                          <td>52027693</td>
                          <td>축구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>First League. Women.</td>
                          <td>1207 Antalya W</td>
                          <td>1207 Antalya W</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52027693"
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
                              defaultValue="807"
                            />
                          </td>
                          <td>807</td>
                          <td>축구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>DFB 포칼 컵</td>
                          <td>1860 뮌헨</td>
                          <td>1860 뮌헨</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a href="/team/edit/807" className="btn btn-white">
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
                              defaultValue="52307842"
                            />
                          </td>
                          <td>52307842</td>
                          <td>축구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>3. Lig, 그룹1</td>
                          <td>1954 켈킷 벨레디예스포</td>
                          <td>1954 켈킷 벨레디예스포</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52307842"
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
                              defaultValue="52148990"
                            />
                          </td>
                          <td>52148990</td>
                          <td>축구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Amateur Cup</td>
                          <td>1980 빈</td>
                          <td>1980 빈</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52148990"
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
                              defaultValue="52760432"
                            />
                          </td>
                          <td>52760432</td>
                          <td>농구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Argentina Buenos Aires CPM</td>
                          <td>9 De Julio (j)</td>
                          <td>9 De Julio (j)</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52760432"
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
                              defaultValue="285359"
                            />
                          </td>
                          <td>285359</td>
                          <td>농구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Serie B</td>
                          <td>A. C. 이몰라</td>
                          <td>A. C. 이몰라</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/285359"
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
                              defaultValue="52800017"
                            />
                          </td>
                          <td>52800017</td>
                          <td>배구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>SuperLiga C</td>
                          <td>AA Metisa/FME Timbo Volei</td>
                          <td>AA Metisa/FME Timbo Volei</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52800017"
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
                              defaultValue="52514482"
                            />
                          </td>
                          <td>52514482</td>
                          <td>배구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>SuperLiga C</td>
                          <td>AA Neurologia Ativa</td>
                          <td>AA Neurologia Ativa</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52514482"
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
                              defaultValue="52715820"
                            />
                          </td>
                          <td>52715820</td>
                          <td>배구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Brazil. Regional league. Women. Paranaense.</td>
                          <td>AABB Cascavel W</td>
                          <td>AABB Cascavel W</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52715820"
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
                              defaultValue="6529"
                            />
                          </td>
                          <td>6529</td>
                          <td>Ice Hockey</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Superisligaen 플레이오프</td>
                          <td>Aalborg Pirates</td>
                          <td>Aalborg Pirates</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a href="/team/edit/6529" className="btn btn-white">
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
                              defaultValue="52023286"
                            />
                          </td>
                          <td>52023286</td>
                          <td>농구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Division 1A</td>
                          <td>Aanekosken Huima</td>
                          <td>Aanekosken Huima</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52023286"
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
                              defaultValue="50063718"
                            />
                          </td>
                          <td>50063718</td>
                          <td>축구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>Premier League</td>
                          <td>Abahani Limited Chittagong</td>
                          <td>Abahani Limited Chittagong</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/50063718"
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
                              defaultValue="52533484"
                            />
                          </td>
                          <td>52533484</td>
                          <td>농구</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>TBL2</td>
                          <td>ABB EgoSpor</td>
                          <td>ABB EgoSpor</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52533484"
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
                              defaultValue="52819344"
                            />
                          </td>
                          <td>52819344</td>
                          <td>아이스 하키</td>
                          {/* <!--
                                        <td th:switch="${team.sportName}">
                                            <span th:case="'soccer'">축구</span>
                                            <span th:case="'basketball'">농구</span>
                                            <span th:case="'baseball'">야구</span>
                                            <span th:case="'volleyball'">배구</span>
                                            <span th:case="'*'" th:text="${team.sportName}"></span>
                                        </td>
                                        --> */}
                          <td>AHL</td>
                          <td>Abbotsford Canucks</td>
                          <td>Abbotsford Canucks</td>
                          <td>
                            {/* <!--                                            <img                                             <img th:src="${team.logoUrl}" height="36" />
src="https://cdn.shopify.com/s/files/1/1949/1233/products/la-lakers.jpg?v=1575428341" height="36" />--> */}
                          </td>
                          <td></td>
                          <td>
                            <a
                              href="/team/edit/52819344"
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
                          data-url="/team/bulkdelete"
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
                          href="/team/list?&amp;page=0"
                          disabled="disabled"
                        >
                          <i className="ti ti-chevron-left"></i>
                          이전
                        </a>
                      </li>

                      <li className="page-item active">
                        <a className="page-link" href="/team/list?&amp;page=1">
                          1
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="/team/list?&amp;page=2">
                          2
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="/team/list?&amp;page=3">
                          3
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="/team/list?&amp;page=4">
                          4
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="/team/list?&amp;page=5">
                          5
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="/team/list?&amp;page=6">
                          6
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="/team/list?&amp;page=7">
                          7
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="/team/list?&amp;page=8">
                          8
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="/team/list?&amp;page=9">
                          9
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="/team/list?&amp;page=10">
                          10
                        </a>
                      </li>

                      <li className="page-item">
                        <span className="page-link">...</span>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/team/list?&amp;page=168"
                        >
                          168
                        </a>
                      </li>

                      {/* <!--        <th:block th:each="pageNum: ${#numbers.sequence(1, pageCount)}">--> */}
                      {/* <!--            <li className="page-item" th:classappend="${pageNum} == ${page}? 'active'">--> */}
                      {/* <!--                <a className="page-link" th:href="${mainPath} + '&page=' + ${pageNum}" th:text="${pageNum}"--> */}
                      {/* <!--                   th:disabled="${pageNum} == ${page}? 'disabled'"></a>--> */}
                      {/* <!--            </li>--> */}
                      {/* <!--        </th:block>--> */}
                      <li className="page-item">
                        <a className="page-link" href="/team/list?&amp;page=2">
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

export default TeamManagement;

import React from "react";

const EndGame = () => {
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
                <h2 className="page-title">종료된경기</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="" method="get" className="d-flex">
                    <div className="input-icon ms-2">
                      {/* <!--                                    <span className="d-none d-sm-inline">--> */}
                      {/* <!--                                        <input className="form-control" placeholder="시작날짜" aria-label="시작날짜" id="startdate-input" th:value="${#dates.format(startDate, 'yyyy-MM-dd')}"/>--> */}
                      {/* <!--                                    </span>--> */}
                      {/* <!--                                    <span className="d-none d-sm-inline">--> */}
                      {/* <!--                                        - --> */}
                      {/* <!--                                    </span>--> */}
                      {/* <!--                                    <span className="d-none d-sm-inline">--> */}
                      {/* <!--                                        <input className="form-control" placeholder="끝날짜" aria-label="끝날짜" id="enddate-input" th:value="${#dates.format(endDate, 'yyyy-MM-dd')}"/>--> */}
                      {/* <!--                                    </span>--> */}

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
                          <rect x={4} y={5} width={16} height={16} rx={2} />
                          <line x1={16} y1={3} x2={16} y2={7} />
                          <line x1={8} y1={3} x2={8} y2={7} />
                          <line x1={4} y1={11} x2={20} y2={11} />
                          <line x1={11} y1={15} x2={12} y2={15} />
                          <line x1={12} y1={15} x2={12} y2={18} />
                        </svg>
                      </span>
                      <input
                        id="from-filter"
                        className="form-control"
                        readOnly=""
                        defaultValue="2022-03-07"
                      />
                    </div>
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
                    <div className="input-icon ms-2">
                      <button className="btn btn-primary" type="submit">
                        조회
                      </button>
                    </div>
                    <input
                      id="from"
                      name="from"
                      className="form-control"
                      type="hidden"
                      defaultValue="Mon Mar 07 09:00:00 KST 2022"
                    />
                    {/* <!--                                <input id="to" name="to" className="form-control" type="hidden" th:value="${to}"/>--> */}
                  </form>
                </div>
              </div>
            </div>
            <div className="total">
              총 <span>16</span>건
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-deck row-cards">
              <div className="col-12">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap datatable table-compact">
                      <thead>
                        <tr>
                          {/* <!-- <th className="w-1"><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all fixtures" id="checkbox-allfixtures"></th> --> */}
                          <th className="w-1">종류</th>
                          <th>경기시간</th>
                          <th>경기ID</th>
                          <th>리그명</th>
                          <th>팀명</th>
                          <th align="center" className="w-1">
                            스코어
                          </th>
                          <th className="w-1">배팅건수</th>
                          <th className="w-1">배팅금액</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>축구</td>
                          <td>2022-03-07 09:30:00</td>
                          <td>8282082</td>
                          <td>Liga Profesional</td>
                          <td>
                            <span>벨레즈 S.</span> vs.
                            <span>에스튀디안트 LP</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8282082"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8282082"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>농구</td>
                          <td>2022-03-07 09:30:00</td>
                          <td>8299141</td>
                          <td>Torneo Federal</td>
                          <td>
                            <span>Sportivo Atletico Las Parejas</span> vs.
                            <span>El Ceibo</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8299141"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8299141"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>농구</td>
                          <td>2022-03-07 09:30:00</td>
                          <td>8299571</td>
                          <td>NCAA Basketball</td>
                          <td>
                            <span>Illinois Fighting Illini</span> vs.
                            <span>Iowa Hawkeyes</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8299571"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8299571"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>농구</td>
                          <td>2022-03-07 09:30:00</td>
                          <td>8299668</td>
                          <td>NCAA Basketball</td>
                          <td>
                            <span>Northwestern Wildcats</span> vs.
                            <span>Minnesota Golden Gophers</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>1</td>
                          <td>5,000</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8299668"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8299668"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>농구</td>
                          <td>2022-03-07 09:30:00</td>
                          <td>8299915</td>
                          <td>미국 프로 농구</td>
                          <td>
                            <span>Cleveland Cavaliers</span> vs.
                            <span>Toronto Raptors</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8299915"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8299915"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>농구</td>
                          <td>2022-03-07 09:30:00</td>
                          <td>8302162</td>
                          <td>WNCAA</td>
                          <td>
                            <span>San Diego State Aztecs W</span> vs.
                            <span>Boise State Broncos W</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8302162"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8302162"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>축구</td>
                          <td>2022-03-07 10:00:00</td>
                          <td>8291041</td>
                          <td>Championship</td>
                          <td>
                            <span>Walter Ferretti</span> vs.
                            <span>Real Estelí</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>1</td>
                          <td>5,000</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8291041"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8291041"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>아이스 하키</td>
                          <td>2022-03-07 10:00:00</td>
                          <td>8292743</td>
                          <td>NHL</td>
                          <td>
                            <span>골든나이츠</span> vs.
                            <span>오타와 세니터즈</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8292743"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8292743"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>아이스 하키</td>
                          <td>2022-03-07 10:00:00</td>
                          <td>8292745</td>
                          <td>NHL</td>
                          <td>
                            <span>애너하임 덕스</span> vs.
                            <span>산호세 샤크스</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8292745"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8292745"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>농구</td>
                          <td>2022-03-07 10:00:00</td>
                          <td>8296536</td>
                          <td>Liga Nacional de Básquet</td>
                          <td>
                            <span>Ciclista Olimpico</span> vs.
                            <span>Regatas de Corrientes</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8296536"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8296536"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>농구</td>
                          <td>2022-03-07 10:00:00</td>
                          <td>8299930</td>
                          <td>미국 프로 농구</td>
                          <td>
                            <span>Denver Nuggets</span> vs.
                            <span>New Orleans Pelicans</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8299930"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8299930"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>축구</td>
                          <td>2022-03-07 10:15:00</td>
                          <td>8282328</td>
                          <td>프리메라 A, 클라우수라</td>
                          <td>
                            <span>나시오날 메델린</span> vs.
                            <span>IND. 메들린</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8282328"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8282328"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>농구</td>
                          <td>2022-03-07 10:30:00</td>
                          <td>8299575</td>
                          <td>NCAA Basketball</td>
                          <td>
                            <span>Hofstra</span> vs.
                            <span>Charleston Cougars</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8299575"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8299575"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>농구</td>
                          <td>2022-03-07 11:30:00</td>
                          <td>8299577</td>
                          <td>NCAA Basketball</td>
                          <td>
                            <span>Oral Roberts</span> vs.
                            <span>Western Illinois</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8299577"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8299577"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>축구</td>
                          <td>2022-03-07 12:00:00</td>
                          <td>8276995</td>
                          <td>미국 1부 리그</td>
                          <td>
                            <span>Los Angeles FC</span> vs.
                            <span>포틀랜드 팀버스</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8276995"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8276995"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!-- <td><input className="form-check-input m-0 align-middle checkbox-fixture" type="checkbox" aria-label="Select" th:attr="data-fixtureid=${fixture.id}"></td> --> */}
                          <td>농구</td>
                          <td>2022-03-07 12:00:00</td>
                          <td>8299939</td>
                          <td>미국 프로 농구</td>
                          <td>
                            <span>Los Angeles Clippers</span> vs.
                            <span>New York Knicks</span>
                          </td>
                          <td align="center">
                            <span></span> :<span></span>
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-end">
                            <a
                              href="/fixture/details/8299939"
                              target="_blank"
                              className="btn btn-white btn-sm"
                            >
                              상세보기
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-green btn-sm btn-fixture-reactivate"
                              data-fixtureid="8299939"
                            >
                              결과재입력
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* <!-- <div className="card-footer d-flex align-items-center">
                                <div className="btn-list">
                                    <span className="d-none d-sm-inline">
                                        <a id="bulk-fixture-reactivate-btn" href="#" className="btn btn-outline-secondary">
                                            선택 경기 활성화
                                        </a>
                                    </span>
                                </div>

                                <div th:replace="~{fragments/general.html :: pagination(mainPath= ${@urlService.getFullRequestUrlWithoutPage()}, page = ${page}, pageCount = ${(totalItemCount / pageSize) + (totalItemCount % pageSize != 0 ? 1 : 0)})}"> </div>

                            </div> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EndGame;

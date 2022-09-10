import React from "react";

const IntergrationGame = () => {
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
                <h2 className="page-title">통합경기등록</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-deck row-cards">
              <div className="col-12">
                <div className="card">
                  <form method="post" action="/fixture/create" className="card">
                    <input
                      type="hidden"
                      name="_csrf"
                      defaultValue="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                    />
                    <div className="card-header">
                      <h4 className="card-title">통합경기등록</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group mb-3 row">
                            <label className="form-label col-3 col-form-label">
                              경기시간
                            </label>
                            <div className="col">
                              <input
                                id="start-date"
                                className="form-control"
                                readOnly=""
                                type="hidden"
                                name="startDate"
                                defaultValue=""
                              />
                            </div>
                          </div>
                          <div className="form-group mb-3 row">
                            <label className="form-label col-3 col-form-label"></label>
                            <div className="col-3">
                              <select
                                defaultValue={"default"}
                                className="form-select"
                                id="startHour"
                              >
                                <option value={0}>00시</option>
                                <option value={1}>01시</option>
                                <option value={2}>02시</option>
                                <option value={3}>03시</option>
                                <option value={4}>04시</option>
                                <option value={5}>05시</option>
                                <option value={6}>06시</option>
                                <option value={7}>07시</option>
                                <option value={8}>08시</option>
                                <option value={9}>09시</option>
                                <option value={10}>10시</option>
                                <option value={11}>11시</option>
                                <option value={12}>12시</option>
                                <option value={13}>13시</option>
                                <option value={14}>14시</option>
                                <option value={15}>15시</option>
                                <option value={16}>16시</option>
                                <option value={17}>17시</option>
                                <option value={18}>18시</option>
                                <option value={19}>19시</option>
                                <option value={20}>20시</option>
                                <option value={21}>21시</option>
                                <option value={22}>22시</option>
                                <option value={23}>23시</option>
                              </select>
                            </div>
                            <div className="col-3">
                              <select
                                defaultValue={"default"}
                                className="form-select"
                                id="startMinute"
                              >
                                <option value={0}>00분</option>

                                <option value={1}>01분</option>
                                <option value={2}>02분</option>
                                <option value={3}>03분</option>
                                <option value={4}>04분</option>
                                <option value={5}>05분</option>
                                <option value={6}>06분</option>
                                <option value={7}>07분</option>
                                <option value={8}>08분</option>
                                <option value={9}>09분</option>
                                <option value={10}>10분</option>
                                <option value={11}>11분</option>
                                <option value={12}>12분</option>
                                <option value={13}>13분</option>
                                <option value={14}>14분</option>
                                <option value={15}>15분</option>
                                <option value={16}>16분</option>
                                <option value={17}>17분</option>
                                <option value={18}>18분</option>
                                <option value={19}>19분</option>
                                <option value={20}>20분</option>
                                <option value={21}>21분</option>
                                <option value={22}>22분</option>
                                <option value={23}>23분</option>
                                <option value={24}>24분</option>
                                <option value={25}>25분</option>
                                <option value={26}>26분</option>
                                <option value={27}>27분</option>
                                <option value={28}>28분</option>
                                <option value={29}>29분</option>
                                <option value={30}>30분</option>
                                <option value={31}>31분</option>
                                <option value={32}>32분</option>
                                <option value={33}>33분</option>
                                <option value={34}>34분</option>
                                <option value={35}>35분</option>
                                <option value={36}>36분</option>
                                <option value={37}>37분</option>
                                <option value={38}>38분</option>
                                <option value={39}>39분</option>
                                <option value={40}>40분</option>
                                <option value={41}>41분</option>
                                <option value={42}>42분</option>
                                <option value={43}>43분</option>
                                <option value={44}>44분</option>
                                <option value={45}>45분</option>
                                <option value={46}>46분</option>
                                <option value={47}>47분</option>
                                <option value={48}>48분</option>
                                <option value={49}>49분</option>
                                <option value={50}>50분</option>
                                <option value={51}>51분</option>
                                <option value={52}>52분</option>
                                <option value={53}>53분</option>
                                <option value={54}>54분</option>
                                <option value={55}>55분</option>
                                <option value={56}>56분</option>
                                <option value={57}>57분</option>
                                <option value={58}>58분</option>
                                <option value={59}>59분</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group mb-3 row">
                            <label className="form-label col-3 col-form-label">
                              리그
                            </label>
                            <div className="col">
                              <div className="dropdown">
                                <input
                                  type="text"
                                  placeholder="리그"
                                  defaultValue=""
                                  className="form-control search-input league-input"
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
                                <input
                                  type="hidden"
                                  defaultValue=""
                                  id="leagueId"
                                  name="leagueId"
                                />
                              </div>
                            </div>
                            <div className="col-3">
                              <a
                                href="/league/create"
                                className="btn btn-outline-secondary"
                              >
                                리그 생성
                              </a>
                            </div>
                          </div>
                          <div className="form-group mb-3 row">
                            <label className="form-label col-3 col-form-label">
                              홈팀
                            </label>
                            <div className="col">
                              <div className="dropdown">
                                <input
                                  type="text"
                                  placeholder="홈팀"
                                  defaultValue=""
                                  className="form-control search-input home-team-input"
                                  id="dropdownMenu2"
                                  aria-describedby=""
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  autoComplete="off"
                                />
                                <div
                                  className="dropdown-menu search-dropdown"
                                  aria-labelledby="dropdownMenu2"
                                >
                                  <div className="d-flex text-center align-items-center p-4">
                                    데이터 없음
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  defaultValue=""
                                  id="homeTeamId"
                                  name="homeTeamId"
                                />
                              </div>
                            </div>
                            <div className="col-3">
                              <a
                                href="/team/create"
                                className="btn btn-outline-secondary"
                              >
                                팀 생성
                              </a>
                            </div>
                          </div>

                          <div className="form-group mb-3 row">
                            <label className="form-label col-3 col-form-label">
                              원정팀
                            </label>
                            <div className="col">
                              <div className="dropdown">
                                <input
                                  type="text"
                                  placeholder="원정팀"
                                  defaultValue=""
                                  className="form-control search-input away-team-input"
                                  id="dropdownMenu3"
                                  aria-describedby=""
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  autoComplete="off"
                                />
                                <div
                                  className="dropdown-menu search-dropdown"
                                  aria-labelledby="dropdownMenu3"
                                >
                                  <div className="d-flex text-center align-items-center p-4">
                                    데이터 없음
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  defaultValue=""
                                  id="awayTeamId"
                                  name="awayTeamId"
                                />
                              </div>
                            </div>
                            <div className="col-3">
                              <a
                                href="/team/create"
                                className="btn btn-outline-secondary"
                              >
                                팀 생성
                              </a>
                            </div>
                          </div>
                          <div className="form-group mb-3 row">
                            <label className="form-label col-3 col-form-label pt-0">
                              경기방식
                            </label>
                            <div className="col">
                              <label className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="wdlActive1"
                                  name="wdlActive"
                                  defaultValue="true"
                                />
                                <input
                                  type="hidden"
                                  name="_wdlActive"
                                  defaultValue="on"
                                />
                                <span className="form-check-label">승무패</span>
                              </label>
                              <label className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="handicapActive1"
                                  name="handicapActive"
                                  defaultValue="true"
                                />
                                <input
                                  type="hidden"
                                  name="_handicapActive"
                                  defaultValue="on"
                                />
                                <span className="form-check-label">핸디캡</span>
                              </label>
                              <label className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="underoverActive1"
                                  name="underoverActive"
                                  defaultValue="true"
                                />
                                <input
                                  type="hidden"
                                  name="_underoverActive"
                                  defaultValue="on"
                                />
                                <span className="form-check-label">
                                  오버언더
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group mb-3 row">
                            <div className="table-responsive">
                              <table className="table card-table table-vcenter text-nowrap datatable">
                                <thead>
                                  <tr>
                                    <th>종류</th>
                                    <th>홈팀 배당</th>
                                    <th>무승부 배당</th>
                                    <th>원정팀 배당</th>
                                    <th>단폴금지</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>승무패</td>
                                    <td>
                                      <input
                                        className="form-control"
                                        type="number"
                                        step=".01"
                                        id="wdlHomeOdd"
                                        name="wdlHomeOdd"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control"
                                        type="number"
                                        step=".01"
                                        id="wdlDrawOdd"
                                        name="wdlDrawOdd"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control"
                                        type="number"
                                        step=".01"
                                        id="wdlAwayOdd"
                                        name="wdlAwayOdd"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="wdlSingleBetDisabled1"
                                        name="wdlSingleBetDisabled"
                                        defaultValue="true"
                                      />
                                      <input
                                        type="hidden"
                                        name="_wdlSingleBetDisabled"
                                        defaultValue="on"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>핸디캡</td>
                                    <td>
                                      <input
                                        className="form-control"
                                        type="number"
                                        step=".01"
                                        id="handicapHomeOdd"
                                        name="handicapHomeOdd"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="핸디"
                                        id="handicapLine"
                                        name="handicapLine"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control"
                                        type="number"
                                        step=".01"
                                        id="handicapAwayOdd"
                                        name="handicapAwayOdd"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="handicapSingleBetDisabled1"
                                        name="handicapSingleBetDisabled"
                                        defaultValue="true"
                                      />
                                      <input
                                        type="hidden"
                                        name="_handicapSingleBetDisabled"
                                        defaultValue="on"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>오버언더</td>
                                    <td>
                                      <input
                                        className="form-control"
                                        type="number"
                                        step=".01"
                                        id="wdlHomeOdd"
                                        name="wdlHomeOdd"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="총점"
                                        id="underoverUnderOdd"
                                        name="underoverUnderOdd"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control"
                                        type="number"
                                        step=".01"
                                        id="underoverLine"
                                        name="underoverLine"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="underoverSingleBetDisabled1"
                                        name="underoverSingleBetDisabled"
                                        defaultValue="true"
                                      />
                                      <input
                                        type="hidden"
                                        name="_underoverSingleBetDisabled"
                                        defaultValue="on"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-end">
                      <div className="d-flex">
                        {/* <!--<a href="#" className="btn btn-link">초기화</a>--> */}
                        <button
                          type="submit"
                          className="btn btn-primary ms-auto"
                        >
                          등록하기
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntergrationGame;

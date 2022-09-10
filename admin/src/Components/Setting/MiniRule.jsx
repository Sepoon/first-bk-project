import React from "react";

const MiniRule = () => {
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
                <h2 className="page-title">게임룰 설정</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-cards mb-3">
              <div className="col-12">
                <form
                  action="/setting/minigame"
                  method="post"
                  className="card"
                  id="basicSettingForm"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value="070255fa-fb29-4261-be5e-bd69f333c5b6"
                  />
                  <div className="card-header">
                    <h4 className="card-title">게임룰 설정</h4>
                  </div>
                  <div
                    className="card-body"
                    style={{ padding: "0px!important" }}
                  >
                    <div className="table-responsive">
                      <table className="table table-vcenter card-table">
                        <colgroup>
                          <col width="8.5%" />
                          <col width="6.5%" />
                          <col width="6.5%" />
                          <col width="6.5%" />
                          <col width="6.5%" />
                          <col width="6.5%" />
                          <col width="6.5%" />
                          <col width="6.5%" />
                          <col width="6.5%" />
                          <col width="6%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>구분</th>
                            <th className="text-center text-nowrap">
                              GameEnabled
                            </th>
                            <th className="text-center text-nowrap">
                              MinBetCount
                            </th>
                            <th className="text-center text-nowrap">
                              MaxBetCount
                            </th>
                            <th className="text-center text-nowrap">
                              MaxBetInRound
                            </th>
                            <th className="text-center text-nowrap">
                              MaxSeparatedBetsInRound
                            </th>
                            <th className="text-center text-nowrap">
                              MaxCompositeBetsInRound
                            </th>
                            <th className="text-center text-nowrap">
                              BetDisabled
                            </th>
                            <th className="text-center text-nowrap">
                              NotCombineSepratedAndCompositeBets
                            </th>
                            <th className="text-center text-nowrap">
                              AllowMultipleBetsInBetSlip
                            </th>
                            <th className="text-center text-nowrap">레벨별</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>Powerball</td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                defaultChecked="checked"
                                id="gameRules0.minigameRule.gameEnabled1"
                                name="gameRules[0].minigameRule.gameEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[0].minigameRule.gameEnabled"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[0].minigameRule.minBetCnt"
                                placeholder=""
                                id="gameRules0.minigameRule.minBetCnt"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[0].minigameRule.maxBetCnt"
                                placeholder=""
                                id="gameRules0.minigameRule.maxBetCnt"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[0].minigameRule.maxBetsInRound"
                                placeholder=""
                                id="gameRules0.minigameRule.maxBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[0].minigameRule.maxSeparatedBetsInRound"
                                placeholder=""
                                id="gameRules0.minigameRule.maxSeparatedBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[0].minigameRule.maxCompositeBetsInRound"
                                placeholder=""
                                id="gameRules0.minigameRule.maxCompositeBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules0.minigameRule.isBetDisabled1"
                                name="gameRules[0].minigameRule.isBetDisabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[0].minigameRule.isBetDisabled"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules0.minigameRule.notCombineSepratedAndCompositeBets1"
                                name="gameRules[0].minigameRule.notCombineSepratedAndCompositeBets"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[0].minigameRule.notCombineSepratedAndCompositeBets"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules0.minigameRule.allowMultipleBetsInBetSlip1"
                                name="gameRules[0].minigameRule.allowMultipleBetsInBetSlip"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[0].minigameRule.allowMultipleBetsInBetSlip"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <a
                                className="collapse-btn"
                                href="#"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsePOWERBALL_ONEMIN"
                                aria-expanded="true"
                                aria-controls="collapsePOWERBALL_ONEMIN"
                              >
                                설정
                              </a>
                              <input
                                type="hidden"
                                id="gameRules0.minigameType"
                                name="gameRules[0].minigameType"
                                value="POWERBALL_ONEMIN"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer text-end">
                    <div className="d-flex">
                      {/* <!--<a href="#" className="btn btn-link">초기화</a>--> */}
                      <button type="submit" className="btn btn-primary ms-auto">
                        저장하기
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiniRule;

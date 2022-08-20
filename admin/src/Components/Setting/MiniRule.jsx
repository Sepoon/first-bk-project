import React from "react";

const MiniRule = () => {
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

                          <tr
                            id="collapsePOWERBALL_ONEMIN"
                            className="accordion-collapse collapse"
                          >
                            <td colSpan="17" className="p-0">
                              <table
                                className="table table-vcenter card-table w-100"
                                style={{ backgroundcolor: "#f2f2f2" }}
                              >
                                <colgroup>
                                  <col width="11.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="5%" />
                                </colgroup>
                                <thead>
                                  <tr>
                                    <th>MarketType</th>
                                    <th className="text-center"></th>
                                    <th className="text-center">Odd</th>
                                    {/* <!--                                                                <th className="text-center">MaxBet</th>--> */}
                                    <th className="text-center">Enabled</th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                  </tr>
                                </thead>
                                <tr>
                                  <td>POWERBALL ODD + UNDER</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[0].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules0.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules0.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[0].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[0].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules0.marketType"
                                      name="gameRules[0].marketRules[0].marketType"
                                      value="32"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>REGULAR ODD/EVEN</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[1].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules1.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules1.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[1].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[1].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules1.marketType"
                                      name="gameRules[0].marketRules[1].marketType"
                                      value="1"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>POWERBALL EVEN + OVER</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[2].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules2.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules2.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[2].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[2].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules2.marketType"
                                      name="gameRules[0].marketRules[2].marketType"
                                      value="33"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>REGULAR UNDER/OVER</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[3].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules3.marketConfig.odd"
                                      defaultValue="2.05"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules3.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[3].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[3].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules3.marketType"
                                      name="gameRules[0].marketRules[3].marketType"
                                      value="2"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>POWERBALL EVEN + UNDER</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[4].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules4.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules4.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[4].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[4].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules4.marketType"
                                      name="gameRules[0].marketRules[4].marketType"
                                      value="34"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>REGULAR LARGE/SMALL</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[5].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules5.marketConfig.odd"
                                      defaultValue="2.05"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules5.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[5].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[5].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules5.marketType"
                                      name="gameRules[0].marketRules[5].marketType"
                                      value="5"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>REGULAR MEDIUM</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[6].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules6.marketConfig.odd"
                                      defaultValue="2.05"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules6.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[6].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[6].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules6.marketType"
                                      name="gameRules[0].marketRules[6].marketType"
                                      value="6"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>REGULAR ODD/EVEN + LARGE/SMALL</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[7].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules7.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules7.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[7].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[7].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules7.marketType"
                                      name="gameRules[0].marketRules[7].marketType"
                                      value="41"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>REGULAR ODD/EVEN + MEDIUM</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[8].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules8.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules8.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[8].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[8].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules8.marketType"
                                      name="gameRules[0].marketRules[8].marketType"
                                      value="42"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>POWERBALL ODD/EVEN</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[9].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules9.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules9.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[9].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[9].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules9.marketType"
                                      name="gameRules[0].marketRules[9].marketType"
                                      value="11"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>POWERBALL UNDER/OVER</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[10].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules10.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules10.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[10].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[10].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules10.marketType"
                                      name="gameRules[0].marketRules[10].marketType"
                                      value="12"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>REGULAR ODD + OVER</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[11].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules11.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules11.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[11].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[11].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules11.marketType"
                                      name="gameRules[0].marketRules[11].marketType"
                                      value="21"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>REGULAR ODD + UNDER</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[12].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules12.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules12.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[12].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[12].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules12.marketType"
                                      name="gameRules[0].marketRules[12].marketType"
                                      value="22"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>REGULAR EVEN + OVER</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[13].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules13.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules13.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[13].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[13].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules13.marketType"
                                      name="gameRules[0].marketRules[13].marketType"
                                      value="23"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>REGULAR EVEN + UNDER</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[14].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules14.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules14.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[14].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[14].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules14.marketType"
                                      name="gameRules[0].marketRules[14].marketType"
                                      value="24"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>POWERBALL ODD + OVER</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[0].marketRules[15].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules0.marketRules15.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules0.marketRules15.marketConfig.enabled1"
                                      name="gameRules[0].marketRules[15].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[0].marketRules[15].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules0.marketRules15.marketType"
                                      name="gameRules[0].marketRules[15].marketType"
                                      value="31"
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td>Baseball</td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                defaultChecked="checked"
                                id="gameRules1.minigameRule.gameEnabled1"
                                name="gameRules[1].minigameRule.gameEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[1].minigameRule.gameEnabled"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[1].minigameRule.minBetCnt"
                                placeholder=""
                                id="gameRules1.minigameRule.minBetCnt"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[1].minigameRule.maxBetCnt"
                                placeholder=""
                                id="gameRules1.minigameRule.maxBetCnt"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[1].minigameRule.maxBetsInRound"
                                placeholder=""
                                id="gameRules1.minigameRule.maxBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[1].minigameRule.maxSeparatedBetsInRound"
                                placeholder=""
                                id="gameRules1.minigameRule.maxSeparatedBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[1].minigameRule.maxCompositeBetsInRound"
                                placeholder=""
                                id="gameRules1.minigameRule.maxCompositeBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules1.minigameRule.isBetDisabled1"
                                name="gameRules[1].minigameRule.isBetDisabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[1].minigameRule.isBetDisabled"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules1.minigameRule.notCombineSepratedAndCompositeBets1"
                                name="gameRules[1].minigameRule.notCombineSepratedAndCompositeBets"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[1].minigameRule.notCombineSepratedAndCompositeBets"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules1.minigameRule.allowMultipleBetsInBetSlip1"
                                name="gameRules[1].minigameRule.allowMultipleBetsInBetSlip"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[1].minigameRule.allowMultipleBetsInBetSlip"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <a
                                className="collapse-btn"
                                href="#"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseBASEBALL"
                                aria-expanded="true"
                                aria-controls="collapseBASEBALL"
                              >
                                설정
                              </a>
                              <input
                                type="hidden"
                                id="gameRules1.minigameType"
                                name="gameRules[1].minigameType"
                                value="BASEBALL"
                              />
                            </td>
                          </tr>
                          <tr
                            id="collapseBASEBALL"
                            className="accordion-collapse collapse"
                          >
                            <td colSpan="17" className="p-0">
                              <table
                                className="table table-vcenter card-table w-100"
                                style={{ backgroundcolor: "#f2f2f2" }}
                              >
                                <colgroup>
                                  <col width="11.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="5%" />
                                </colgroup>
                                <thead>
                                  <tr>
                                    <th>MarketType</th>
                                    <th className="text-center"></th>
                                    <th className="text-center">Odd</th>
                                    {/* <!--                                                                <th className="text-center">MaxBet</th>--> */}
                                    <th className="text-center">Enabled</th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                  </tr>
                                </thead>
                                <tr>
                                  <td>ODD/EVEN</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[1].marketRules[0].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules1.marketRules0.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules1.marketRules0.marketConfig.enabled1"
                                      name="gameRules[1].marketRules[0].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[1].marketRules[0].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules1.marketRules0.marketType"
                                      name="gameRules[1].marketRules[0].marketType"
                                      value="1"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>LEFT/RIGHT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[1].marketRules[1].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules1.marketRules1.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules1.marketRules1.marketConfig.enabled1"
                                      name="gameRules[1].marketRules[1].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[1].marketRules[1].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules1.marketRules1.marketType"
                                      name="gameRules[1].marketRules[1].marketType"
                                      value="2"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>THREE/FOUR LINES</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[1].marketRules[2].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules1.marketRules2.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules1.marketRules2.marketConfig.enabled1"
                                      name="gameRules[1].marketRules[2].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[1].marketRules[2].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules1.marketRules2.marketType"
                                      name="gameRules[1].marketRules[2].marketType"
                                      value="3"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>LEFT THREE LINES</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[1].marketRules[3].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules1.marketRules3.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules1.marketRules3.marketConfig.enabled1"
                                      name="gameRules[1].marketRules[3].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[1].marketRules[3].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules1.marketRules3.marketType"
                                      name="gameRules[1].marketRules[3].marketType"
                                      value="21"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>LEFT FOUR LINES</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[1].marketRules[4].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules1.marketRules4.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules1.marketRules4.marketConfig.enabled1"
                                      name="gameRules[1].marketRules[4].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[1].marketRules[4].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules1.marketRules4.marketType"
                                      name="gameRules[1].marketRules[4].marketType"
                                      value="22"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>RIGHT THREE LINES</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[1].marketRules[5].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules1.marketRules5.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules1.marketRules5.marketConfig.enabled1"
                                      name="gameRules[1].marketRules[5].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[1].marketRules[5].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules1.marketRules5.marketType"
                                      name="gameRules[1].marketRules[5].marketType"
                                      value="23"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>RIGHT FOUR LINES</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[1].marketRules[6].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules1.marketRules6.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules1.marketRules6.marketConfig.enabled1"
                                      name="gameRules[1].marketRules[6].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[1].marketRules[6].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules1.marketRules6.marketType"
                                      name="gameRules[1].marketRules[6].marketType"
                                      value="24"
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td>Cricket</td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                defaultChecked="checked"
                                id="gameRules2.minigameRule.gameEnabled1"
                                name="gameRules[2].minigameRule.gameEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[2].minigameRule.gameEnabled"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[2].minigameRule.minBetCnt"
                                placeholder=""
                                id="gameRules2.minigameRule.minBetCnt"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[2].minigameRule.maxBetCnt"
                                placeholder=""
                                id="gameRules2.minigameRule.maxBetCnt"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[2].minigameRule.maxBetsInRound"
                                placeholder=""
                                id="gameRules2.minigameRule.maxBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[2].minigameRule.maxSeparatedBetsInRound"
                                placeholder=""
                                id="gameRules2.minigameRule.maxSeparatedBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[2].minigameRule.maxCompositeBetsInRound"
                                placeholder=""
                                id="gameRules2.minigameRule.maxCompositeBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules2.minigameRule.isBetDisabled1"
                                name="gameRules[2].minigameRule.isBetDisabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[2].minigameRule.isBetDisabled"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules2.minigameRule.notCombineSepratedAndCompositeBets1"
                                name="gameRules[2].minigameRule.notCombineSepratedAndCompositeBets"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[2].minigameRule.notCombineSepratedAndCompositeBets"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules2.minigameRule.allowMultipleBetsInBetSlip1"
                                name="gameRules[2].minigameRule.allowMultipleBetsInBetSlip"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[2].minigameRule.allowMultipleBetsInBetSlip"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <a
                                className="collapse-btn"
                                href="#"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseCRICKET"
                                aria-expanded="true"
                                aria-controls="collapseCRICKET"
                              >
                                설정
                              </a>
                              <input
                                type="hidden"
                                id="gameRules2.minigameType"
                                name="gameRules[2].minigameType"
                                value="CRICKET"
                              />
                            </td>
                          </tr>
                          <tr
                            id="collapseCRICKET"
                            className="accordion-collapse collapse"
                          >
                            <td colSpan="17" className="p-0">
                              <table
                                className="table table-vcenter card-table w-100"
                                style={{ backgroundcolor: "#f2f2f2" }}
                              >
                                <colgroup>
                                  <col width="11.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="5%" />
                                </colgroup>
                                <thead>
                                  <tr>
                                    <th>MarketType</th>
                                    <th className="text-center"></th>
                                    <th className="text-center">Odd</th>
                                    {/* <!--                                                                <th className="text-center">MaxBet</th>--> */}
                                    <th className="text-center">Enabled</th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                  </tr>
                                </thead>
                                <tr>
                                  <td>SCORE OUT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[2].marketRules[0].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules2.marketRules0.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules2.marketRules0.marketConfig.enabled1"
                                      name="gameRules[2].marketRules[0].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[2].marketRules[0].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules2.marketRules0.marketType"
                                      name="gameRules[2].marketRules[0].marketType"
                                      value="1"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>BATTER LEFT/RIGHT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[2].marketRules[1].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules2.marketRules1.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules2.marketRules1.marketConfig.enabled1"
                                      name="gameRules[2].marketRules[1].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[2].marketRules[1].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules2.marketRules1.marketType"
                                      name="gameRules[2].marketRules[1].marketType"
                                      value="2"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>OUTFIELD LEFT/RIGHT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[2].marketRules[2].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules2.marketRules2.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules2.marketRules2.marketConfig.enabled1"
                                      name="gameRules[2].marketRules[2].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[2].marketRules[2].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules2.marketRules2.marketType"
                                      name="gameRules[2].marketRules[2].marketType"
                                      value="3"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>BATTER LEFT + OUTFIELD LEFT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[2].marketRules[3].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules2.marketRules3.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules2.marketRules3.marketConfig.enabled1"
                                      name="gameRules[2].marketRules[3].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[2].marketRules[3].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules2.marketRules3.marketType"
                                      name="gameRules[2].marketRules[3].marketType"
                                      value="21"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>BATTER LEFT + OUTFIELD RIGHT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[2].marketRules[4].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules2.marketRules4.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules2.marketRules4.marketConfig.enabled1"
                                      name="gameRules[2].marketRules[4].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[2].marketRules[4].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules2.marketRules4.marketType"
                                      name="gameRules[2].marketRules[4].marketType"
                                      value="22"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>BATTER RIGHT + OUTFIELD LEFT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[2].marketRules[5].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules2.marketRules5.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules2.marketRules5.marketConfig.enabled1"
                                      name="gameRules[2].marketRules[5].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[2].marketRules[5].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules2.marketRules5.marketType"
                                      name="gameRules[2].marketRules[5].marketType"
                                      value="23"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>BATTER RIGHT + OUTFIELD RIGHT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[2].marketRules[6].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules2.marketRules6.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules2.marketRules6.marketConfig.enabled1"
                                      name="gameRules[2].marketRules[6].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[2].marketRules[6].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules2.marketRules6.marketType"
                                      name="gameRules[2].marketRules[6].marketType"
                                      value="24"
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td>Soccer</td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                defaultChecked="checked"
                                id="gameRules3.minigameRule.gameEnabled1"
                                name="gameRules[3].minigameRule.gameEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[3].minigameRule.gameEnabled"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[3].minigameRule.minBetCnt"
                                placeholder=""
                                id="gameRules3.minigameRule.minBetCnt"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[3].minigameRule.maxBetCnt"
                                placeholder=""
                                id="gameRules3.minigameRule.maxBetCnt"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[3].minigameRule.maxBetsInRound"
                                placeholder=""
                                id="gameRules3.minigameRule.maxBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[3].minigameRule.maxSeparatedBetsInRound"
                                placeholder=""
                                id="gameRules3.minigameRule.maxSeparatedBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[3].minigameRule.maxCompositeBetsInRound"
                                placeholder=""
                                id="gameRules3.minigameRule.maxCompositeBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules3.minigameRule.isBetDisabled1"
                                name="gameRules[3].minigameRule.isBetDisabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[3].minigameRule.isBetDisabled"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules3.minigameRule.notCombineSepratedAndCompositeBets1"
                                name="gameRules[3].minigameRule.notCombineSepratedAndCompositeBets"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[3].minigameRule.notCombineSepratedAndCompositeBets"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules3.minigameRule.allowMultipleBetsInBetSlip1"
                                name="gameRules[3].minigameRule.allowMultipleBetsInBetSlip"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[3].minigameRule.allowMultipleBetsInBetSlip"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <a
                                className="collapse-btn"
                                href="#"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSOCCER"
                                aria-expanded="true"
                                aria-controls="collapseSOCCER"
                              >
                                설정
                              </a>
                              <input
                                type="hidden"
                                id="gameRules3.minigameType"
                                name="gameRules[3].minigameType"
                                value="SOCCER"
                              />
                            </td>
                          </tr>
                          <tr
                            id="collapseSOCCER"
                            className="accordion-collapse collapse"
                          >
                            <td colSpan="17" className="p-0">
                              <table
                                className="table table-vcenter card-table w-100"
                                style={{ backgroundcolor: "#f2f2f2" }}
                              >
                                <colgroup>
                                  <col width="11.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="5%" />
                                </colgroup>
                                <thead>
                                  <tr>
                                    <th>MarketType</th>
                                    <th className="text-center"></th>
                                    <th className="text-center">Odd</th>
                                    {/* <!--                                                                <th className="text-center">MaxBet</th>--> */}
                                    <th className="text-center">Enabled</th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                  </tr>
                                </thead>
                                <tr>
                                  <td>GOAL/NOGOAL</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[3].marketRules[0].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules3.marketRules0.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules3.marketRules0.marketConfig.enabled1"
                                      name="gameRules[3].marketRules[0].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[3].marketRules[0].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules3.marketRules0.marketType"
                                      name="gameRules[3].marketRules[0].marketType"
                                      value="1"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>KEEPER LEFT/RIGHT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[3].marketRules[1].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules3.marketRules1.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules3.marketRules1.marketConfig.enabled1"
                                      name="gameRules[3].marketRules[1].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[3].marketRules[1].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules3.marketRules1.marketType"
                                      name="gameRules[3].marketRules[1].marketType"
                                      value="2"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>KICKER LEFT/RIGHT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[3].marketRules[2].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules3.marketRules2.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules3.marketRules2.marketConfig.enabled1"
                                      name="gameRules[3].marketRules[2].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[3].marketRules[2].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules3.marketRules2.marketType"
                                      name="gameRules[3].marketRules[2].marketType"
                                      value="3"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>KEEPER LEFT + KICKER LEFT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[3].marketRules[3].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules3.marketRules3.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules3.marketRules3.marketConfig.enabled1"
                                      name="gameRules[3].marketRules[3].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[3].marketRules[3].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules3.marketRules3.marketType"
                                      name="gameRules[3].marketRules[3].marketType"
                                      value="21"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>KEEPER LEFT + KICKER RIGHT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[3].marketRules[4].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules3.marketRules4.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules3.marketRules4.marketConfig.enabled1"
                                      name="gameRules[3].marketRules[4].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[3].marketRules[4].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules3.marketRules4.marketType"
                                      name="gameRules[3].marketRules[4].marketType"
                                      value="22"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>KEEPER RIGHT + KICKER LEFT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[3].marketRules[5].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules3.marketRules5.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules3.marketRules5.marketConfig.enabled1"
                                      name="gameRules[3].marketRules[5].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[3].marketRules[5].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules3.marketRules5.marketType"
                                      name="gameRules[3].marketRules[5].marketType"
                                      value="23"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>KEEPER RIGHT + KICKER RIGHT</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[3].marketRules[6].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules3.marketRules6.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules3.marketRules6.marketConfig.enabled1"
                                      name="gameRules[3].marketRules[6].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[3].marketRules[6].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules3.marketRules6.marketType"
                                      name="gameRules[3].marketRules[6].marketType"
                                      value="24"
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td>Sutda</td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                defaultChecked="checked"
                                id="gameRules4.minigameRule.gameEnabled1"
                                name="gameRules[4].minigameRule.gameEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[4].minigameRule.gameEnabled"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[4].minigameRule.minBetCnt"
                                placeholder=""
                                id="gameRules4.minigameRule.minBetCnt"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[4].minigameRule.maxBetCnt"
                                placeholder=""
                                id="gameRules4.minigameRule.maxBetCnt"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[4].minigameRule.maxBetsInRound"
                                placeholder=""
                                id="gameRules4.minigameRule.maxBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[4].minigameRule.maxSeparatedBetsInRound"
                                placeholder=""
                                id="gameRules4.minigameRule.maxSeparatedBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[4].minigameRule.maxCompositeBetsInRound"
                                placeholder=""
                                id="gameRules4.minigameRule.maxCompositeBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules4.minigameRule.isBetDisabled1"
                                name="gameRules[4].minigameRule.isBetDisabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[4].minigameRule.isBetDisabled"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules4.minigameRule.notCombineSepratedAndCompositeBets1"
                                name="gameRules[4].minigameRule.notCombineSepratedAndCompositeBets"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[4].minigameRule.notCombineSepratedAndCompositeBets"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="gameRules4.minigameRule.allowMultipleBetsInBetSlip1"
                                name="gameRules[4].minigameRule.allowMultipleBetsInBetSlip"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[4].minigameRule.allowMultipleBetsInBetSlip"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <a
                                className="collapse-btn"
                                href="#"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSUTDA"
                                aria-expanded="true"
                                aria-controls="collapseSUTDA"
                              >
                                설정
                              </a>
                              <input
                                type="hidden"
                                id="gameRules4.minigameType"
                                name="gameRules[4].minigameType"
                                value="SUTDA"
                              />
                            </td>
                          </tr>
                          <tr
                            id="collapseSUTDA"
                            className="accordion-collapse collapse"
                          >
                            <td colSpan="17" className="p-0">
                              <table
                                className="table table-vcenter card-table w-100"
                                style={{ backgroundcolor: "#f2f2f2" }}
                              >
                                <colgroup>
                                  <col width="11.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="6.5%" />
                                  <col width="5%" />
                                </colgroup>
                                <thead>
                                  <tr>
                                    <th>MarketType</th>
                                    <th className="text-center"></th>
                                    <th className="text-center">Odd</th>
                                    {/* <!--                                                                <th className="text-center">MaxBet</th>--> */}
                                    <th className="text-center">Enabled</th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                    <th className="text-center"></th>
                                  </tr>
                                </thead>
                                <tr>
                                  <td>AGUI/JJACKGUI</td>
                                  <td></td>
                                  <td className="text-center">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="gameRules[4].marketRules[0].marketConfig.odd"
                                      placeholder=""
                                      id="gameRules4.marketRules0.marketConfig.odd"
                                      defaultValue="1.95"
                                    />
                                  </td>
                                  {/* <!--                                                                <td className="text-center"><input type="number" className="form-control" name="example-text-input" placeholder="" th:field="*{gameRules[__${stat.index}__].marketRules[__${subStat.index}__].marketConfig.maxBet}"></td>--> */}
                                  <td className="text-center">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked="checked"
                                      id="gameRules4.marketRules0.marketConfig.enabled1"
                                      name="gameRules[4].marketRules[0].marketConfig.enabled"
                                      defaultValue="true"
                                    />
                                    <input
                                      type="hidden"
                                      name="_gameRules[4].marketRules[0].marketConfig.enabled"
                                      value="on"
                                    />
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-center">
                                    {/* <!--                                                                <a href="#" className="copy-btn" th:data-id="${gameRule.minigameType}">Copy</a>--> */}
                                    <input
                                      type="hidden"
                                      id="gameRules4.marketRules0.marketType"
                                      name="gameRules[4].marketRules[0].marketType"
                                      value="1"
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td>Evolution</td>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                defaultChecked="checked"
                                id="gameRules5.minigameRule.gameEnabled1"
                                name="gameRules[5].minigameRule.gameEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_gameRules[5].minigameRule.gameEnabled"
                                value="on"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="hidden"
                                className="form-control"
                                name="gameRules[5].minigameRule.minBetCnt"
                                placeholder=""
                                id="gameRules5.minigameRule.minBetCnt"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="hidden"
                                className="form-control"
                                name="gameRules[5].minigameRule.maxBetCnt"
                                placeholder=""
                                id="gameRules5.minigameRule.maxBetCnt"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="hidden"
                                className="form-control"
                                name="gameRules[5].minigameRule.maxBetsInRound"
                                placeholder=""
                                id="gameRules5.minigameRule.maxBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="hidden"
                                className="form-control"
                                name="gameRules[5].minigameRule.maxSeparatedBetsInRound"
                                placeholder=""
                                id="gameRules5.minigameRule.maxSeparatedBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="hidden"
                                className="form-control"
                                name="gameRules[5].minigameRule.maxCompositeBetsInRound"
                                placeholder=""
                                id="gameRules5.minigameRule.maxCompositeBetsInRound"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="hidden"
                                className="form-check-input"
                                id="gameRules5.minigameRule.isBetDisabled"
                                name="gameRules[5].minigameRule.isBetDisabled"
                                defaultValue="false"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="hidden"
                                className="form-check-input"
                                id="gameRules5.minigameRule.notCombineSepratedAndCompositeBets"
                                name="gameRules[5].minigameRule.notCombineSepratedAndCompositeBets"
                                defaultValue="false"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="hidden"
                                className="form-check-input"
                                id="gameRules5.minigameRule.allowMultipleBetsInBetSlip"
                                name="gameRules[5].minigameRule.allowMultipleBetsInBetSlip"
                                defaultValue=""
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="hidden"
                                id="gameRules5.minigameType"
                                name="gameRules[5].minigameType"
                                value="EVOLUTION"
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


import React from "react";
import Col from "react-bootstrap/esm/Col";

const GameRule = () => {
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
                  action="/setting/gamerules"
                  method="post"
                  className="card"
                  id="basicSettingForm"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    defaultValue="070255fa-fb29-4261-be5e-bd69f333c5b6"
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
                          <col width="9.5%" />
                          <col width="9.5%" />
                          <col width="9.5%" />
                          <col width="9.5%" />
                          <col width="9.5%" />
                          <col width="9.5%" />
                          <col width="9.5%" />
                          <col width="9.5%" />
                          <col width="9.5%" />
                          <col width="6%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>구분</th>
                            <th className="text-center">참여레벨</th>
                            <th className="text-center">최소배팅금</th>
                            <th className="text-center">최대배팅금</th>
                            <th className="text-center">최대당첨금</th>
                            <th className="text-center">최대배팅금(단폴)</th>
                            <th className="text-center">최대당첨금(단폴)</th>
                            <th className="text-center">최소폴더</th>
                            <th className="text-center">최대폴더</th>
                            <th className="text-center">경기마감(초)</th>
                            <th className="text-center">레벨별</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>조합</td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                placeholder=""
                                id="gameRules0.participationLevel"
                                name="gameRules[0].participationLevel"
                                defaultValue="1"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[0].minBetAmount"
                                placeholder=""
                                id="gameRules0.minBetAmount"
                                defaultValue="5000"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[0].maxBetAmount"
                                placeholder=""
                                id="gameRules0.maxBetAmount"
                                defaultValue="1000000"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[0].maxWinAmount"
                                placeholder=""
                                id="gameRules0.maxWinAmount"
                                defaultValue="3000000"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[0].singleBetMaxBetAmount"
                                placeholder=""
                                id="gameRules0.singleBetMaxBetAmount"
                                defaultValue="500000"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[0].singleBetMaxWinAmount"
                                placeholder=""
                                id="gameRules0.singleBetMaxWinAmount"
                                defaultValue="1500000"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[0].minParlay"
                                placeholder=""
                                id="gameRules0.minParlay"
                                defaultValue="1"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[0].maxParlay"
                                placeholder=""
                                id="gameRules0.maxParlay"
                                defaultValue="10"
                              />
                            </td>
                            <td className="text-center">
                              <input
                                type="number"
                                className="form-control"
                                name="gameRules[0].prematchCloseBetSeconds"
                                placeholder=""
                                id="gameRules0.prematchCloseBetSeconds"
                                defaultValue="60"
                              />
                            </td>
                            <td className="text-center">
                              <a
                                className="collapse-btn"
                                href="#"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsecombo"
                                aria-expanded="true"
                                aria-controls="collapsecombo"
                              >
                                설정
                              </a>
                              <input
                                type="hidden"
                                id="gameRules0.gameType"
                                name="gameRules[0].gameType"
                                defaultValue="Combo"
                              />
                            </td>
                          </tr>
                          <tr
                            id="collapsecombo"
                            className="accordion-collapse collapse"
                          >
                            <td colSpan="11" className="p-0">
                              <table
                                className="table table-vcenter card-table w-100"
                                style={{ backgroundcolor: "#f2f2f2" }}
                              >
                                <colgroup>
                                  <col width="8.5%" />
                                  <col width="9.5%" />
                                  <col width="9.5%" />
                                  <col width="9.5%" />
                                  <col width="9.5%" />
                                  <col width="9.5%" />
                                  <col width="9.5%" />
                                  <col width="9.5%" />
                                  <col width="9.5%" />
                                  <col width="9.5%" />
                                  <col width="6%" />
                                </colgroup>
                                <tbody>
                                  <tr>
                                    <td>1 레벨</td>
                                    <td></td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[0].minBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules0.minBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[0].maxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules0.maxBetAmount"
                                        defaultValue="300000"
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[0].maxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules0.maxWinAmount"
                                        defaultValue="1000000"
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[0].singleBetMaxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules0.singleBetMaxBetAmount"
                                        defaultValue="200000"
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[0].singleBetMaxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules0.singleBetMaxWinAmount"
                                        defaultValue="500000"
                                      />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-center">
                                      <a
                                        href="#"
                                        className="copy-btn"
                                        data-id="combo"
                                      >
                                        Copy
                                      </a>
                                      <input
                                        type="hidden"
                                        id="gameRules0.subGameRules0.level"
                                        name="gameRules[0].subGameRules[0].level"
                                        defaultValue="1"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2 레벨</td>
                                    <td></td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[1].minBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules1.minBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[1].maxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules1.maxBetAmount"
                                        defaultValue="1500000"
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[1].maxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules1.maxWinAmount"
                                        defaultValue="4000000"
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[1].singleBetMaxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules1.singleBetMaxBetAmount"
                                        defaultValue="1000000"
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[1].singleBetMaxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules1.singleBetMaxWinAmount"
                                        defaultValue="3000000"
                                      />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-center">
                                      <a
                                        href="#"
                                        className="copy-btn"
                                        data-id="combo"
                                      >
                                        Copy
                                      </a>
                                      <input
                                        type="hidden"
                                        id="gameRules0.subGameRules1.level"
                                        name="gameRules[0].subGameRules[1].level"
                                        defaultValue="2"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>3 레벨</td>
                                    <td></td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[2].minBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules2.minBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[2].maxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules2.maxBetAmount"
                                        defaultValue="1500000"
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[2].maxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules2.maxWinAmount"
                                        defaultValue="4000000"
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[2].singleBetMaxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules2.singleBetMaxBetAmount"
                                        defaultValue="1000000"
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[2].singleBetMaxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules2.singleBetMaxWinAmount"
                                        defaultValue="3000000"
                                      />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-center">
                                      <a
                                        href="#"
                                        className="copy-btn"
                                        data-id="combo"
                                      >
                                        Copy
                                      </a>
                                      <input
                                        type="hidden"
                                        id="gameRules0.subGameRules2.level"
                                        name="gameRules[0].subGameRules[2].level"
                                        defaultValue="3"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>4 레벨</td>
                                    <td></td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[3].minBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules3.minBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[3].maxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules3.maxBetAmount"
                                        defaultValue="2000000"
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[3].maxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules3.maxWinAmount"
                                        defaultValue="5000000"
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[3].singleBetMaxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules3.singleBetMaxBetAmount"
                                        defaultValue="2000000"
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[3].singleBetMaxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules3.singleBetMaxWinAmount"
                                        defaultValue="5000000"
                                      />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-center">
                                      <a
                                        href="#"
                                        className="copy-btn"
                                        data-id="combo"
                                      >
                                        Copy
                                      </a>
                                      <input
                                        type="hidden"
                                        id="gameRules0.subGameRules3.level"
                                        name="gameRules[0].subGameRules[3].level"
                                        defaultValue="4"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5 레벨</td>
                                    <td></td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[4].minBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules4.minBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[4].maxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules4.maxBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[4].maxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules4.maxWinAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[4].singleBetMaxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules4.singleBetMaxBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[4].singleBetMaxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules4.singleBetMaxWinAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-center">
                                      <a
                                        href="#"
                                        className="copy-btn"
                                        data-id="combo"
                                      >
                                        Copy
                                      </a>
                                      <input
                                        type="hidden"
                                        id="gameRules0.subGameRules4.level"
                                        name="gameRules[0].subGameRules[4].level"
                                        defaultValue="5"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>6 레벨</td>
                                    <td></td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[5].minBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules5.minBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[5].maxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules5.maxBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[5].maxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules5.maxWinAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[5].singleBetMaxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules5.singleBetMaxBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[5].singleBetMaxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules5.singleBetMaxWinAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-center">
                                      <a
                                        href="#"
                                        className="copy-btn"
                                        data-id="combo"
                                      >
                                        Copy
                                      </a>
                                      <input
                                        type="hidden"
                                        id="gameRules0.subGameRules5.level"
                                        name="gameRules[0].subGameRules[5].level"
                                        defaultValue="6"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>7 레벨</td>
                                    <td></td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[6].minBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules6.minBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[6].maxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules6.maxBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[6].maxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules6.maxWinAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[6].singleBetMaxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules6.singleBetMaxBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[6].singleBetMaxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules6.singleBetMaxWinAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-center">
                                      <a
                                        href="#"
                                        className="copy-btn"
                                        data-id="combo"
                                      >
                                        Copy
                                      </a>
                                      <input
                                        type="hidden"
                                        id="gameRules0.subGameRules6.level"
                                        name="gameRules[0].subGameRules[6].level"
                                        defaultValue="7"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>8 레벨</td>
                                    <td></td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[7].minBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules7.minBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[7].maxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules7.maxBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[7].maxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules7.maxWinAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[7].singleBetMaxBetAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules7.singleBetMaxBetAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td className="text-center">
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="gameRules[0].subGameRules[7].singleBetMaxWinAmount"
                                        placeholder=""
                                        id="gameRules0.subGameRules7.singleBetMaxWinAmount"
                                        defaultValue=""
                                      />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-center">
                                      <a
                                        href="#"
                                        className="copy-btn"
                                        data-id="combo"
                                      >
                                        Copy
                                      </a>
                                      <input
                                        type="hidden"
                                        id="gameRules0.subGameRules7.level"
                                        name="gameRules[0].subGameRules[7].level"
                                        defaultValue="8"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
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

export default GameRule;

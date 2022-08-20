import React from "react";

const Level = () => {
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
                <h2 className="page-title">레벨권한관리</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-deck row-cards">
              <div className="col-12">
                <div className="card">
                  <form
                    action="/user/levels"
                    method="post"
                    id="levelSettingForm"
                  >
                    <input
                      type="hidden"
                      name="_csrf"
                      defaultValue="070255fa-fb29-4261-be5e-bd69f333c5b6"
                    />
                    <div className="table-responsive">
                      <table className="table card-table table-vcenter text-nowrap datatable user-levels-table">
                        <thead>
                          <tr>
                            <th className="text-center">레벨</th>
                            <th className="text-center">레벨명</th>
                            <th className="text-center">
                              아이콘(사이즈 50x50)
                            </th>
                            <th className="text-center w-2">레벨별 전용계좌</th>
                            <th className="text-right w-2">
                              충전시(%)(추천인)
                            </th>
                            <th className="text-right w-2">
                              스포츠-닉첨시(%)(추천인)
                            </th>
                            <th className="text-right w-2">
                              스포츠-배팅시(%)(추천인)
                            </th>
                            <th className="text-right w-2">
                              미니게임-낙첨시(%)(추천인)
                            </th>
                            <th className="text-right w-2">
                              미니게임-베딩시(%)(추천인)
                            </th>
                            <th className="text-right w-2">매충전(%)(회원)</th>
                            <th className="text-right w-2">첫충전(%)(회원)</th>
                            <th className="text-right w-2">
                              스포츠-낙첨시(%)(회원)
                            </th>
                            <th className="text-right w-2">
                              스포츠-배팅시(%)(회원)
                            </th>
                            <th className="text-right w-2">
                              미니게임-낙첨시(%)(회원)
                            </th>
                            <th className="text-right w-2">
                              미니게임-배팅시(%)(회원)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">0</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels0.title"
                                name="levels[0].title"
                                defaultValue="Level 0"
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="0"
                                  id="levels0.imageUrl"
                                  name="levels[0].imageUrl"
                                  defaultValue="https://update.squareonesoft.com/miniplay/undefined/1640767141207_268790886_970810293793102_6610858111528963316_n.jpg"
                                />
                                <input
                                  type="hidden"
                                  id="levels0.level"
                                  name="levels[0].level"
                                  defaultValue="0"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="0"
                                  data-url="https://update.squareonesoft.com/miniplay/undefined/1640767141207_268790886_970810293793102_6610858111528963316_n.jpg"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels0.dedicatedAccount"
                                name="levels[0].dedicatedAccount"
                                defaultValue="aaaa"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels0.referrerChargePct"
                                name="levels[0].referrerChargePct"
                                defaultValue="12.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels0.referrerSportBettingLosePct"
                                name="levels[0].referrerSportBettingLosePct"
                                defaultValue="1.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels0.referrerSportBettingBetPct"
                                name="levels[0].referrerSportBettingBetPct"
                                defaultValue="3.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels0.referrerMinigameBettingLosePct"
                                name="levels[0].referrerMinigameBettingLosePct"
                                defaultValue="4.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels0.referrerMinigameBettingBetPct"
                                name="levels[0].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels0.memberEveryChargePct"
                                name="levels[0].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels0.memberFirstChargePct"
                                name="levels[0].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels0.memberSportBettingLosePct"
                                name="levels[0].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels0.memberSportBettingBetPct"
                                name="levels[0].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels0.memberMinigameBettingLosePct"
                                name="levels[0].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels0.memberMinigameBettingBetPct"
                                name="levels[0].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">1</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels1.title"
                                name="levels[1].title"
                                defaultValue="Level 1"
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="1"
                                  id="levels1.imageUrl"
                                  name="levels[1].imageUrl"
                                  defaultValue="https://update.squareonesoft.com/miniplay/undefined/1643098052981_photo_2022-01-21_12-27-59.jpg"
                                />
                                <input
                                  type="hidden"
                                  id="levels1.level"
                                  name="levels[1].level"
                                  defaultValue="1"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="1"
                                  data-url="https://update.squareonesoft.com/miniplay/undefined/1643098052981_photo_2022-01-21_12-27-59.jpg"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels1.dedicatedAccount"
                                name="levels[1].dedicatedAccount"
                                defaultValue="aaaaa"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels1.referrerChargePct"
                                name="levels[1].referrerChargePct"
                                defaultValue="10.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels1.referrerSportBettingLosePct"
                                name="levels[1].referrerSportBettingLosePct"
                                defaultValue="2.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels1.referrerSportBettingBetPct"
                                name="levels[1].referrerSportBettingBetPct"
                                defaultValue="3.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels1.referrerMinigameBettingLosePct"
                                name="levels[1].referrerMinigameBettingLosePct"
                                defaultValue="4.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels1.referrerMinigameBettingBetPct"
                                name="levels[1].referrerMinigameBettingBetPct"
                                defaultValue="5.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels1.memberEveryChargePct"
                                name="levels[1].memberEveryChargePct"
                                defaultValue="50.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels1.memberFirstChargePct"
                                name="levels[1].memberFirstChargePct"
                                defaultValue="7.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels1.memberSportBettingLosePct"
                                name="levels[1].memberSportBettingLosePct"
                                defaultValue="8.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels1.memberSportBettingBetPct"
                                name="levels[1].memberSportBettingBetPct"
                                defaultValue="9.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels1.memberMinigameBettingLosePct"
                                name="levels[1].memberMinigameBettingLosePct"
                                defaultValue="10.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels1.memberMinigameBettingBetPct"
                                name="levels[1].memberMinigameBettingBetPct"
                                defaultValue="11.00"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">2</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels2.title"
                                name="levels[2].title"
                                defaultValue="Level 2"
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="2"
                                  id="levels2.imageUrl"
                                  name="levels[2].imageUrl"
                                  defaultValue="https://update.squareonesoft.com/miniplay/admin/level/3/1646364288825_Flabellina-300x200.jpg"
                                />
                                <input
                                  type="hidden"
                                  id="levels2.level"
                                  name="levels[2].level"
                                  defaultValue="2"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="2"
                                  data-url="https://update.squareonesoft.com/miniplay/admin/level/3/1646364288825_Flabellina-300x200.jpg"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels2.dedicatedAccount"
                                name="levels[2].dedicatedAccount"
                                defaultValue="bbbbb"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels2.referrerChargePct"
                                name="levels[2].referrerChargePct"
                                defaultValue="1.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels2.referrerSportBettingLosePct"
                                name="levels[2].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels2.referrerSportBettingBetPct"
                                name="levels[2].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels2.referrerMinigameBettingLosePct"
                                name="levels[2].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels2.referrerMinigameBettingBetPct"
                                name="levels[2].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels2.memberEveryChargePct"
                                name="levels[2].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels2.memberFirstChargePct"
                                name="levels[2].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels2.memberSportBettingLosePct"
                                name="levels[2].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels2.memberSportBettingBetPct"
                                name="levels[2].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels2.memberMinigameBettingLosePct"
                                name="levels[2].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels2.memberMinigameBettingBetPct"
                                name="levels[2].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">3</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels3.title"
                                name="levels[3].title"
                                defaultValue="Level 3"
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="3"
                                  id="levels3.imageUrl"
                                  name="levels[3].imageUrl"
                                  defaultValue="https://update.squareonesoft.com/miniplay/admin/level/3/1646404928258_Cat03.jpg"
                                />
                                <input
                                  type="hidden"
                                  id="levels3.level"
                                  name="levels[3].level"
                                  defaultValue="3"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="3"
                                  data-url="https://update.squareonesoft.com/miniplay/admin/level/3/1646404928258_Cat03.jpg"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels3.dedicatedAccount"
                                name="levels[3].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels3.referrerChargePct"
                                name="levels[3].referrerChargePct"
                                defaultValue="2.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels3.referrerSportBettingLosePct"
                                name="levels[3].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels3.referrerSportBettingBetPct"
                                name="levels[3].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels3.referrerMinigameBettingLosePct"
                                name="levels[3].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels3.referrerMinigameBettingBetPct"
                                name="levels[3].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels3.memberEveryChargePct"
                                name="levels[3].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels3.memberFirstChargePct"
                                name="levels[3].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels3.memberSportBettingLosePct"
                                name="levels[3].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels3.memberSportBettingBetPct"
                                name="levels[3].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels3.memberMinigameBettingLosePct"
                                name="levels[3].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels3.memberMinigameBettingBetPct"
                                name="levels[3].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">4</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels4.title"
                                name="levels[4].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="4"
                                  id="levels4.imageUrl"
                                  name="levels[4].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels4.level"
                                  name="levels[4].level"
                                  defaultValue="4"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="4"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels4.dedicatedAccount"
                                name="levels[4].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels4.referrerChargePct"
                                name="levels[4].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels4.referrerSportBettingLosePct"
                                name="levels[4].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels4.referrerSportBettingBetPct"
                                name="levels[4].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels4.referrerMinigameBettingLosePct"
                                name="levels[4].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels4.referrerMinigameBettingBetPct"
                                name="levels[4].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels4.memberEveryChargePct"
                                name="levels[4].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels4.memberFirstChargePct"
                                name="levels[4].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels4.memberSportBettingLosePct"
                                name="levels[4].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels4.memberSportBettingBetPct"
                                name="levels[4].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels4.memberMinigameBettingLosePct"
                                name="levels[4].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels4.memberMinigameBettingBetPct"
                                name="levels[4].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">5</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels5.title"
                                name="levels[5].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="5"
                                  id="levels5.imageUrl"
                                  name="levels[5].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels5.level"
                                  name="levels[5].level"
                                  defaultValue="5"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="5"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels5.dedicatedAccount"
                                name="levels[5].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels5.referrerChargePct"
                                name="levels[5].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels5.referrerSportBettingLosePct"
                                name="levels[5].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels5.referrerSportBettingBetPct"
                                name="levels[5].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels5.referrerMinigameBettingLosePct"
                                name="levels[5].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels5.referrerMinigameBettingBetPct"
                                name="levels[5].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels5.memberEveryChargePct"
                                name="levels[5].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels5.memberFirstChargePct"
                                name="levels[5].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels5.memberSportBettingLosePct"
                                name="levels[5].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels5.memberSportBettingBetPct"
                                name="levels[5].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels5.memberMinigameBettingLosePct"
                                name="levels[5].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels5.memberMinigameBettingBetPct"
                                name="levels[5].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">6</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels6.title"
                                name="levels[6].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="6"
                                  id="levels6.imageUrl"
                                  name="levels[6].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels6.level"
                                  name="levels[6].level"
                                  defaultValue="6"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="6"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels6.dedicatedAccount"
                                name="levels[6].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels6.referrerChargePct"
                                name="levels[6].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels6.referrerSportBettingLosePct"
                                name="levels[6].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels6.referrerSportBettingBetPct"
                                name="levels[6].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels6.referrerMinigameBettingLosePct"
                                name="levels[6].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels6.referrerMinigameBettingBetPct"
                                name="levels[6].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels6.memberEveryChargePct"
                                name="levels[6].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels6.memberFirstChargePct"
                                name="levels[6].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels6.memberSportBettingLosePct"
                                name="levels[6].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels6.memberSportBettingBetPct"
                                name="levels[6].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels6.memberMinigameBettingLosePct"
                                name="levels[6].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels6.memberMinigameBettingBetPct"
                                name="levels[6].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">7</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels7.title"
                                name="levels[7].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="7"
                                  id="levels7.imageUrl"
                                  name="levels[7].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels7.level"
                                  name="levels[7].level"
                                  defaultValue="7"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="7"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels7.dedicatedAccount"
                                name="levels[7].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels7.referrerChargePct"
                                name="levels[7].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels7.referrerSportBettingLosePct"
                                name="levels[7].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels7.referrerSportBettingBetPct"
                                name="levels[7].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels7.referrerMinigameBettingLosePct"
                                name="levels[7].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels7.referrerMinigameBettingBetPct"
                                name="levels[7].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels7.memberEveryChargePct"
                                name="levels[7].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels7.memberFirstChargePct"
                                name="levels[7].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels7.memberSportBettingLosePct"
                                name="levels[7].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels7.memberSportBettingBetPct"
                                name="levels[7].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels7.memberMinigameBettingLosePct"
                                name="levels[7].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels7.memberMinigameBettingBetPct"
                                name="levels[7].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">8</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels8.title"
                                name="levels[8].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="8"
                                  id="levels8.imageUrl"
                                  name="levels[8].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels8.level"
                                  name="levels[8].level"
                                  defaultValue="8"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="8"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels8.dedicatedAccount"
                                name="levels[8].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels8.referrerChargePct"
                                name="levels[8].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels8.referrerSportBettingLosePct"
                                name="levels[8].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels8.referrerSportBettingBetPct"
                                name="levels[8].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels8.referrerMinigameBettingLosePct"
                                name="levels[8].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels8.referrerMinigameBettingBetPct"
                                name="levels[8].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels8.memberEveryChargePct"
                                name="levels[8].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels8.memberFirstChargePct"
                                name="levels[8].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels8.memberSportBettingLosePct"
                                name="levels[8].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels8.memberSportBettingBetPct"
                                name="levels[8].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels8.memberMinigameBettingLosePct"
                                name="levels[8].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels8.memberMinigameBettingBetPct"
                                name="levels[8].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">9</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels9.title"
                                name="levels[9].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="9"
                                  id="levels9.imageUrl"
                                  name="levels[9].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels9.level"
                                  name="levels[9].level"
                                  defaultValue="9"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="9"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels9.dedicatedAccount"
                                name="levels[9].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels9.referrerChargePct"
                                name="levels[9].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels9.referrerSportBettingLosePct"
                                name="levels[9].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels9.referrerSportBettingBetPct"
                                name="levels[9].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels9.referrerMinigameBettingLosePct"
                                name="levels[9].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels9.referrerMinigameBettingBetPct"
                                name="levels[9].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels9.memberEveryChargePct"
                                name="levels[9].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels9.memberFirstChargePct"
                                name="levels[9].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels9.memberSportBettingLosePct"
                                name="levels[9].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels9.memberSportBettingBetPct"
                                name="levels[9].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels9.memberMinigameBettingLosePct"
                                name="levels[9].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels9.memberMinigameBettingBetPct"
                                name="levels[9].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">10</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels10.title"
                                name="levels[10].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="10"
                                  id="levels10.imageUrl"
                                  name="levels[10].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels10.level"
                                  name="levels[10].level"
                                  defaultValue="10"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="10"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels10.dedicatedAccount"
                                name="levels[10].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels10.referrerChargePct"
                                name="levels[10].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels10.referrerSportBettingLosePct"
                                name="levels[10].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels10.referrerSportBettingBetPct"
                                name="levels[10].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels10.referrerMinigameBettingLosePct"
                                name="levels[10].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels10.referrerMinigameBettingBetPct"
                                name="levels[10].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels10.memberEveryChargePct"
                                name="levels[10].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels10.memberFirstChargePct"
                                name="levels[10].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels10.memberSportBettingLosePct"
                                name="levels[10].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels10.memberSportBettingBetPct"
                                name="levels[10].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels10.memberMinigameBettingLosePct"
                                name="levels[10].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels10.memberMinigameBettingBetPct"
                                name="levels[10].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">11</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels11.title"
                                name="levels[11].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="11"
                                  id="levels11.imageUrl"
                                  name="levels[11].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels11.level"
                                  name="levels[11].level"
                                  defaultValue="11"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="11"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels11.dedicatedAccount"
                                name="levels[11].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels11.referrerChargePct"
                                name="levels[11].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels11.referrerSportBettingLosePct"
                                name="levels[11].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels11.referrerSportBettingBetPct"
                                name="levels[11].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels11.referrerMinigameBettingLosePct"
                                name="levels[11].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels11.referrerMinigameBettingBetPct"
                                name="levels[11].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels11.memberEveryChargePct"
                                name="levels[11].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels11.memberFirstChargePct"
                                name="levels[11].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels11.memberSportBettingLosePct"
                                name="levels[11].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels11.memberSportBettingBetPct"
                                name="levels[11].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels11.memberMinigameBettingLosePct"
                                name="levels[11].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels11.memberMinigameBettingBetPct"
                                name="levels[11].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">12</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels12.title"
                                name="levels[12].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="12"
                                  id="levels12.imageUrl"
                                  name="levels[12].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels12.level"
                                  name="levels[12].level"
                                  defaultValue="12"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="12"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels12.dedicatedAccount"
                                name="levels[12].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels12.referrerChargePct"
                                name="levels[12].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels12.referrerSportBettingLosePct"
                                name="levels[12].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels12.referrerSportBettingBetPct"
                                name="levels[12].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels12.referrerMinigameBettingLosePct"
                                name="levels[12].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels12.referrerMinigameBettingBetPct"
                                name="levels[12].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels12.memberEveryChargePct"
                                name="levels[12].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels12.memberFirstChargePct"
                                name="levels[12].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels12.memberSportBettingLosePct"
                                name="levels[12].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels12.memberSportBettingBetPct"
                                name="levels[12].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels12.memberMinigameBettingLosePct"
                                name="levels[12].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels12.memberMinigameBettingBetPct"
                                name="levels[12].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">13</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels13.title"
                                name="levels[13].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="13"
                                  id="levels13.imageUrl"
                                  name="levels[13].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels13.level"
                                  name="levels[13].level"
                                  defaultValue="13"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="13"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels13.dedicatedAccount"
                                name="levels[13].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels13.referrerChargePct"
                                name="levels[13].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels13.referrerSportBettingLosePct"
                                name="levels[13].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels13.referrerSportBettingBetPct"
                                name="levels[13].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels13.referrerMinigameBettingLosePct"
                                name="levels[13].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels13.referrerMinigameBettingBetPct"
                                name="levels[13].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels13.memberEveryChargePct"
                                name="levels[13].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels13.memberFirstChargePct"
                                name="levels[13].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels13.memberSportBettingLosePct"
                                name="levels[13].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels13.memberSportBettingBetPct"
                                name="levels[13].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels13.memberMinigameBettingLosePct"
                                name="levels[13].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels13.memberMinigameBettingBetPct"
                                name="levels[13].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">14</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels14.title"
                                name="levels[14].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="14"
                                  id="levels14.imageUrl"
                                  name="levels[14].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels14.level"
                                  name="levels[14].level"
                                  defaultValue="14"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="14"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels14.dedicatedAccount"
                                name="levels[14].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels14.referrerChargePct"
                                name="levels[14].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels14.referrerSportBettingLosePct"
                                name="levels[14].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels14.referrerSportBettingBetPct"
                                name="levels[14].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels14.referrerMinigameBettingLosePct"
                                name="levels[14].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels14.referrerMinigameBettingBetPct"
                                name="levels[14].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels14.memberEveryChargePct"
                                name="levels[14].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels14.memberFirstChargePct"
                                name="levels[14].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels14.memberSportBettingLosePct"
                                name="levels[14].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels14.memberSportBettingBetPct"
                                name="levels[14].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels14.memberMinigameBettingLosePct"
                                name="levels[14].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels14.memberMinigameBettingBetPct"
                                name="levels[14].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">15</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels15.title"
                                name="levels[15].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="15"
                                  id="levels15.imageUrl"
                                  name="levels[15].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels15.level"
                                  name="levels[15].level"
                                  defaultValue="15"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="15"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels15.dedicatedAccount"
                                name="levels[15].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels15.referrerChargePct"
                                name="levels[15].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels15.referrerSportBettingLosePct"
                                name="levels[15].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels15.referrerSportBettingBetPct"
                                name="levels[15].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels15.referrerMinigameBettingLosePct"
                                name="levels[15].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels15.referrerMinigameBettingBetPct"
                                name="levels[15].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels15.memberEveryChargePct"
                                name="levels[15].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels15.memberFirstChargePct"
                                name="levels[15].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels15.memberSportBettingLosePct"
                                name="levels[15].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels15.memberSportBettingBetPct"
                                name="levels[15].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels15.memberMinigameBettingLosePct"
                                name="levels[15].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels15.memberMinigameBettingBetPct"
                                name="levels[15].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">16</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels16.title"
                                name="levels[16].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="16"
                                  id="levels16.imageUrl"
                                  name="levels[16].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels16.level"
                                  name="levels[16].level"
                                  defaultValue="16"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="16"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels16.dedicatedAccount"
                                name="levels[16].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels16.referrerChargePct"
                                name="levels[16].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels16.referrerSportBettingLosePct"
                                name="levels[16].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels16.referrerSportBettingBetPct"
                                name="levels[16].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels16.referrerMinigameBettingLosePct"
                                name="levels[16].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels16.referrerMinigameBettingBetPct"
                                name="levels[16].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels16.memberEveryChargePct"
                                name="levels[16].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels16.memberFirstChargePct"
                                name="levels[16].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels16.memberSportBettingLosePct"
                                name="levels[16].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels16.memberSportBettingBetPct"
                                name="levels[16].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels16.memberMinigameBettingLosePct"
                                name="levels[16].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels16.memberMinigameBettingBetPct"
                                name="levels[16].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">17</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels17.title"
                                name="levels[17].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="17"
                                  id="levels17.imageUrl"
                                  name="levels[17].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels17.level"
                                  name="levels[17].level"
                                  defaultValue="17"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="17"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels17.dedicatedAccount"
                                name="levels[17].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels17.referrerChargePct"
                                name="levels[17].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels17.referrerSportBettingLosePct"
                                name="levels[17].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels17.referrerSportBettingBetPct"
                                name="levels[17].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels17.referrerMinigameBettingLosePct"
                                name="levels[17].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels17.referrerMinigameBettingBetPct"
                                name="levels[17].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels17.memberEveryChargePct"
                                name="levels[17].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels17.memberFirstChargePct"
                                name="levels[17].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels17.memberSportBettingLosePct"
                                name="levels[17].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels17.memberSportBettingBetPct"
                                name="levels[17].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels17.memberMinigameBettingLosePct"
                                name="levels[17].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels17.memberMinigameBettingBetPct"
                                name="levels[17].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">18</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels18.title"
                                name="levels[18].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="18"
                                  id="levels18.imageUrl"
                                  name="levels[18].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels18.level"
                                  name="levels[18].level"
                                  defaultValue="18"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="18"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels18.dedicatedAccount"
                                name="levels[18].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels18.referrerChargePct"
                                name="levels[18].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels18.referrerSportBettingLosePct"
                                name="levels[18].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels18.referrerSportBettingBetPct"
                                name="levels[18].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels18.referrerMinigameBettingLosePct"
                                name="levels[18].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels18.referrerMinigameBettingBetPct"
                                name="levels[18].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels18.memberEveryChargePct"
                                name="levels[18].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels18.memberFirstChargePct"
                                name="levels[18].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels18.memberSportBettingLosePct"
                                name="levels[18].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels18.memberSportBettingBetPct"
                                name="levels[18].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels18.memberMinigameBettingLosePct"
                                name="levels[18].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels18.memberMinigameBettingBetPct"
                                name="levels[18].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">19</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels19.title"
                                name="levels[19].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="19"
                                  id="levels19.imageUrl"
                                  name="levels[19].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels19.level"
                                  name="levels[19].level"
                                  defaultValue="19"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="19"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels19.dedicatedAccount"
                                name="levels[19].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels19.referrerChargePct"
                                name="levels[19].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels19.referrerSportBettingLosePct"
                                name="levels[19].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels19.referrerSportBettingBetPct"
                                name="levels[19].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels19.referrerMinigameBettingLosePct"
                                name="levels[19].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels19.referrerMinigameBettingBetPct"
                                name="levels[19].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels19.memberEveryChargePct"
                                name="levels[19].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels19.memberFirstChargePct"
                                name="levels[19].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels19.memberSportBettingLosePct"
                                name="levels[19].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels19.memberSportBettingBetPct"
                                name="levels[19].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels19.memberMinigameBettingLosePct"
                                name="levels[19].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels19.memberMinigameBettingBetPct"
                                name="levels[19].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">20</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels20.title"
                                name="levels[20].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="20"
                                  id="levels20.imageUrl"
                                  name="levels[20].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels20.level"
                                  name="levels[20].level"
                                  defaultValue="20"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="20"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels20.dedicatedAccount"
                                name="levels[20].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels20.referrerChargePct"
                                name="levels[20].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels20.referrerSportBettingLosePct"
                                name="levels[20].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels20.referrerSportBettingBetPct"
                                name="levels[20].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels20.referrerMinigameBettingLosePct"
                                name="levels[20].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels20.referrerMinigameBettingBetPct"
                                name="levels[20].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels20.memberEveryChargePct"
                                name="levels[20].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels20.memberFirstChargePct"
                                name="levels[20].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels20.memberSportBettingLosePct"
                                name="levels[20].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels20.memberSportBettingBetPct"
                                name="levels[20].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels20.memberMinigameBettingLosePct"
                                name="levels[20].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels20.memberMinigameBettingBetPct"
                                name="levels[20].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">21</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels21.title"
                                name="levels[21].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="21"
                                  id="levels21.imageUrl"
                                  name="levels[21].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels21.level"
                                  name="levels[21].level"
                                  defaultValue="21"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="21"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels21.dedicatedAccount"
                                name="levels[21].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels21.referrerChargePct"
                                name="levels[21].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels21.referrerSportBettingLosePct"
                                name="levels[21].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels21.referrerSportBettingBetPct"
                                name="levels[21].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels21.referrerMinigameBettingLosePct"
                                name="levels[21].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels21.referrerMinigameBettingBetPct"
                                name="levels[21].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels21.memberEveryChargePct"
                                name="levels[21].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels21.memberFirstChargePct"
                                name="levels[21].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels21.memberSportBettingLosePct"
                                name="levels[21].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels21.memberSportBettingBetPct"
                                name="levels[21].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels21.memberMinigameBettingLosePct"
                                name="levels[21].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels21.memberMinigameBettingBetPct"
                                name="levels[21].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">22</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels22.title"
                                name="levels[22].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="22"
                                  id="levels22.imageUrl"
                                  name="levels[22].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels22.level"
                                  name="levels[22].level"
                                  defaultValue="22"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="22"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels22.dedicatedAccount"
                                name="levels[22].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels22.referrerChargePct"
                                name="levels[22].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels22.referrerSportBettingLosePct"
                                name="levels[22].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels22.referrerSportBettingBetPct"
                                name="levels[22].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels22.referrerMinigameBettingLosePct"
                                name="levels[22].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels22.referrerMinigameBettingBetPct"
                                name="levels[22].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels22.memberEveryChargePct"
                                name="levels[22].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels22.memberFirstChargePct"
                                name="levels[22].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels22.memberSportBettingLosePct"
                                name="levels[22].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels22.memberSportBettingBetPct"
                                name="levels[22].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels22.memberMinigameBettingLosePct"
                                name="levels[22].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels22.memberMinigameBettingBetPct"
                                name="levels[22].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">23</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels23.title"
                                name="levels[23].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="23"
                                  id="levels23.imageUrl"
                                  name="levels[23].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels23.level"
                                  name="levels[23].level"
                                  defaultValue="23"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="23"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels23.dedicatedAccount"
                                name="levels[23].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels23.referrerChargePct"
                                name="levels[23].referrerChargePct"
                                defaultValue="3.00"
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels23.referrerSportBettingLosePct"
                                name="levels[23].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels23.referrerSportBettingBetPct"
                                name="levels[23].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels23.referrerMinigameBettingLosePct"
                                name="levels[23].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels23.referrerMinigameBettingBetPct"
                                name="levels[23].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels23.memberEveryChargePct"
                                name="levels[23].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels23.memberFirstChargePct"
                                name="levels[23].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels23.memberSportBettingLosePct"
                                name="levels[23].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels23.memberSportBettingBetPct"
                                name="levels[23].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels23.memberMinigameBettingLosePct"
                                name="levels[23].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels23.memberMinigameBettingBetPct"
                                name="levels[23].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">24</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels24.title"
                                name="levels[24].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="24"
                                  id="levels24.imageUrl"
                                  name="levels[24].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels24.level"
                                  name="levels[24].level"
                                  defaultValue="24"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="24"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels24.dedicatedAccount"
                                name="levels[24].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels24.referrerChargePct"
                                name="levels[24].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels24.referrerSportBettingLosePct"
                                name="levels[24].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels24.referrerSportBettingBetPct"
                                name="levels[24].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels24.referrerMinigameBettingLosePct"
                                name="levels[24].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels24.referrerMinigameBettingBetPct"
                                name="levels[24].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels24.memberEveryChargePct"
                                name="levels[24].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels24.memberFirstChargePct"
                                name="levels[24].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels24.memberSportBettingLosePct"
                                name="levels[24].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels24.memberSportBettingBetPct"
                                name="levels[24].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels24.memberMinigameBettingLosePct"
                                name="levels[24].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels24.memberMinigameBettingBetPct"
                                name="levels[24].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">25</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels25.title"
                                name="levels[25].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="25"
                                  id="levels25.imageUrl"
                                  name="levels[25].imageUrl"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  id="levels25.level"
                                  name="levels[25].level"
                                  defaultValue="25"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="25"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels25.dedicatedAccount"
                                name="levels[25].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels25.referrerChargePct"
                                name="levels[25].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels25.referrerSportBettingLosePct"
                                name="levels[25].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels25.referrerSportBettingBetPct"
                                name="levels[25].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels25.referrerMinigameBettingLosePct"
                                name="levels[25].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels25.referrerMinigameBettingBetPct"
                                name="levels[25].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels25.memberEveryChargePct"
                                name="levels[25].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels25.memberFirstChargePct"
                                name="levels[25].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels25.memberSportBettingLosePct"
                                name="levels[25].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels25.memberSportBettingBetPct"
                                name="levels[25].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels25.memberMinigameBettingLosePct"
                                name="levels[25].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels25.memberMinigameBettingBetPct"
                                name="levels[25].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">26</td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                id="levels26.title"
                                name="levels[26].title"
                                defaultValue=""
                              />
                            </td>
                            <td>
                              <div>
                                <input
                                  type="hidden"
                                  className="image-url-input"
                                  data-id="26"
                                  id="levels26.imageUrl"
                                  name="levels[26].imageUrl"
                                  defaultValue="https://update.squareonesoft.com/miniplay/undefined/1640767150286_level_1.png"
                                />
                                <input
                                  type="hidden"
                                  id="levels26.level"
                                  name="levels[26].level"
                                  defaultValue="26"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="filepond image-url-input ms-4"
                                  multiple
                                  data-allow-reorder="true"
                                  data-max-file-size="3MB"
                                  data-max-files="1"
                                  data-id="26"
                                  data-url="https://update.squareonesoft.com/miniplay/undefined/1640767150286_level_1.png"
                                />
                              </div>
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="text"
                                id="levels26.dedicatedAccount"
                                name="levels[26].dedicatedAccount"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels26.referrerChargePct"
                                name="levels[26].referrerChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels26.referrerSportBettingLosePct"
                                name="levels[26].referrerSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels26.referrerSportBettingBetPct"
                                name="levels[26].referrerSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels26.referrerMinigameBettingLosePct"
                                name="levels[26].referrerMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels26.referrerMinigameBettingBetPct"
                                name="levels[26].referrerMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels26.memberEveryChargePct"
                                name="levels[26].memberEveryChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels26.memberFirstChargePct"
                                name="levels[26].memberFirstChargePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels26.memberSportBettingLosePct"
                                name="levels[26].memberSportBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels26.memberSportBettingBetPct"
                                name="levels[26].memberSportBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels26.memberMinigameBettingLosePct"
                                name="levels[26].memberMinigameBettingLosePct"
                                defaultValue=""
                              />
                            </td>
                            <td className="w-2">
                              <input
                                className="form-control"
                                type="number"
                                id="levels26.memberMinigameBettingBetPct"
                                name="levels[26].memberMinigameBettingBetPct"
                                defaultValue=""
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="card-footer text-end">
                      <div className="d-flex">
                        <button
                          type="submit"
                          id="submit-btn"
                          className="btn btn-primary ms-auto"
                        >
                          저장하기
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

export default Level;

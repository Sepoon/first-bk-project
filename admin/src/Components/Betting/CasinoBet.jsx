import React, {useState} from "react";
import UserInfo from "../Popup/UserInfo";

const CasinoBet = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <h2 className="page-title">카지노 배팅관리</h2>
              </div>

              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list"></div>
              </div>
            </div>
            {/* <!--                <div className="total">--> */}
            {/* <!--                    전체배팅금액 2,000,000--> */}
            {/* <!--                </div>--> */}

            <div className="total">
              총 <span>29</span>건
            </div>

            <div
              className="row align-items-center g-2"
              style={{ marginTop: 20 }}
            >
              <div className="col-5">
                <div className="btn-list" style={{ flexWrap: "nowrap" }}>
                  <span className="d-none d-sm-inline">
                    <input
                      className="form-control"
                      placeholder="시작날짜"
                      aria-label="시작날짜"
                      id="startdate-input"
                      defaultValue=""
                    />
                  </span>
                  <span className="d-none d-sm-inline">-</span>
                  <span className="d-none d-sm-inline">
                    <input
                      className="form-control"
                      placeholder="끝날짜"
                      aria-label="끝날짜"
                      id="enddate-input"
                      defaultValue=""
                    />
                  </span>
                  <span className="d-none d-sm-inline">
                    <div className="input-group">
                      <input
                        type="text"
                        name="search"
                        className="form-control"
                        placeholder="유저명 검색…"
                        aria-label="검색"
                        defaultValue=""
                        id="searchval-input"
                      />
                      <button className="btn" type="button" id="search-btn">
                        검색
                      </button>
                    </div>
                  </span>
                </div>
              </div>
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
                          <th className="w-1">
                            <a className="sort-item" data-sort="txId">
                              번호
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="txProcessedAt">
                              배팅시간
                              <i className="ti ti-chevron-up"></i>
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="username">
                              유저
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="gameId">
                              게임ID
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="gameRound">
                              게임 라운드
                            </a>
                          </th>

                          <th className="text-right">손익</th>
                          <th className="w-1">결과</th>
                          <th className="w-1"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="row-header row-expanded"
                          data-betslipid="185662531"
                        >
                          <td>185662531</td>
                          <td>2021-12-22 05:46:46</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="77"
                            >
                              yangpa
                            </a>
                          </td>
                          <td>16190</td>
                          <td>12282871591</td>
                          <td className="text-right">-51,000</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="185662531"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>185662531</td>
                                  <td>bet</td>
                                  <td>2021-12-22 05:46:46</td>
                                  <td className="text-right">-51,000</td>
                                </tr>

                                <tr>
                                  <td>185662700</td>
                                  <td>win</td>
                                  <td>2021-12-22 05:46:55</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="185661997"
                        >
                          <td>185661997</td>
                          <td>2021-12-22 05:46:20</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="77"
                            >
                              yangpa
                            </a>
                          </td>
                          <td>16190</td>
                          <td>12282868175</td>
                          <td className="text-right">25,000</td>
                          <td className="w-1">적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="185661997"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>185661997</td>
                                  <td>bet</td>
                                  <td>2021-12-22 05:46:20</td>
                                  <td className="text-right">-25,000</td>
                                </tr>

                                <tr>
                                  <td>185662114</td>
                                  <td>win</td>
                                  <td>2021-12-22 05:46:26</td>
                                  <td className="text-right">50,000</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="185660859"
                        >
                          <td>185660859</td>
                          <td>2021-12-22 05:45:27</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="77"
                            >
                              yangpa
                            </a>
                          </td>
                          <td>16190</td>
                          <td>12282861335</td>
                          <td className="text-right">-4,000</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="185660859"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>185660859</td>
                                  <td>bet</td>
                                  <td>2021-12-22 05:45:27</td>
                                  <td className="text-right">-4,000</td>
                                </tr>

                                <tr>
                                  <td>185661002</td>
                                  <td>win</td>
                                  <td>2021-12-22 05:45:33</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="185652127"
                        >
                          <td>185652127</td>
                          <td>2021-12-22 05:38:47</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="77"
                            >
                              yangpa
                            </a>
                          </td>
                          <td>724</td>
                          <td>12282806679</td>
                          <td className="text-right">1,900</td>
                          <td className="w-1">적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="185652127"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>185652127</td>
                                  <td>bet</td>
                                  <td>2021-12-22 05:38:47</td>
                                  <td className="text-right">-2,000</td>
                                </tr>

                                <tr>
                                  <td>185652604</td>
                                  <td>win</td>
                                  <td>2021-12-22 05:39:06</td>
                                  <td className="text-right">3,900</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="185650959"
                        >
                          <td>185650959</td>
                          <td>2021-12-22 05:37:55</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="77"
                            >
                              yangpa
                            </a>
                          </td>
                          <td>724</td>
                          <td>12282799706</td>
                          <td className="text-right">-1,000</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="185650959"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>185650959</td>
                                  <td>bet</td>
                                  <td>2021-12-22 05:37:55</td>
                                  <td className="text-right">-1,000</td>
                                </tr>

                                <tr>
                                  <td>185651359</td>
                                  <td>win</td>
                                  <td>2021-12-22 05:38:14</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="173684089"
                        >
                          <td>173684089</td>
                          <td>2021-12-17 18:36:02</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="48"
                            >
                              lilyhuynh
                            </a>
                          </td>
                          <td>708</td>
                          <td>12246092572</td>
                          <td className="text-right">-10,100</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="173684089"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>173684089</td>
                                  <td>bet</td>
                                  <td>2021-12-17 18:36:02</td>
                                  <td className="text-right">-10,100</td>
                                </tr>

                                <tr>
                                  <td>173684728</td>
                                  <td>win</td>
                                  <td>2021-12-17 18:36:21</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="153085484"
                        >
                          <td>153085484</td>
                          <td>2021-12-08 01:27:19</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          <td>751</td>
                          <td>12174583753</td>
                          <td className="text-right">-5,000</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="153085484"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>153085484</td>
                                  <td>bet</td>
                                  <td>2021-12-08 01:27:19</td>
                                  <td className="text-right">-5,000</td>
                                </tr>

                                <tr>
                                  <td>153087215</td>
                                  <td>win</td>
                                  <td>2021-12-08 01:28:51</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="153079761"
                        >
                          <td>153079761</td>
                          <td>2021-12-08 01:22:03</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          <td>701</td>
                          <td>12174534674</td>
                          <td className="text-right">-5,000</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="153079761"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>153079761</td>
                                  <td>bet</td>
                                  <td>2021-12-08 01:22:03</td>
                                  <td className="text-right">-5,000</td>
                                </tr>

                                <tr>
                                  <td>153080566</td>
                                  <td>win</td>
                                  <td>2021-12-08 01:22:41</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="153078618"
                        >
                          <td>153078618</td>
                          <td>2021-12-08 01:20:52</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          <td>701</td>
                          <td>12174524056</td>
                          <td className="text-right">-5,000</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="153078618"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>153078618</td>
                                  <td>bet</td>
                                  <td>2021-12-08 01:20:52</td>
                                  <td className="text-right">-5,000</td>
                                </tr>

                                <tr>
                                  <td>153079280</td>
                                  <td>win</td>
                                  <td>2021-12-08 01:21:33</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="153073516"
                        >
                          <td>153073516</td>
                          <td>2021-12-08 01:15:58</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          <td>732</td>
                          <td>12174480345</td>
                          <td className="text-right">5,000</td>
                          <td className="w-1">적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="153073516"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>153073516</td>
                                  <td>bet</td>
                                  <td>2021-12-08 01:15:58</td>
                                  <td className="text-right">-5,000</td>
                                </tr>

                                <tr>
                                  <td>153074907</td>
                                  <td>win</td>
                                  <td>2021-12-08 01:17:24</td>
                                  <td className="text-right">10,000</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="153021379"
                        >
                          <td>153021379</td>
                          <td>2021-12-07 23:34:44</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          <td>707</td>
                          <td>12173736162</td>
                          <td className="text-right">-5,000</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="153021379"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>153021379</td>
                                  <td>bet</td>
                                  <td>2021-12-07 23:34:44</td>
                                  <td className="text-right">-5,000</td>
                                </tr>

                                <tr>
                                  <td>153021758</td>
                                  <td>win</td>
                                  <td>2021-12-07 23:35:12</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="152222787"
                        >
                          <td>152222787</td>
                          <td>2021-12-06 19:17:37</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          <td>703</td>
                          <td>12165617974</td>
                          <td className="text-right">5,000</td>
                          <td className="w-1">적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="152222787"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>152222787</td>
                                  <td>bet</td>
                                  <td>2021-12-06 19:17:37</td>
                                  <td className="text-right">-5,000</td>
                                </tr>

                                <tr>
                                  <td>152224110</td>
                                  <td>win</td>
                                  <td>2021-12-06 19:18:16</td>
                                  <td className="text-right">10,000</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="152212187"
                        >
                          <td>152212187</td>
                          <td>2021-12-06 19:12:16</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          <td>721</td>
                          <td>12165586156</td>
                          <td className="text-right">950</td>
                          <td className="w-1">적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="152212187"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>152212187</td>
                                  <td>bet</td>
                                  <td>2021-12-06 19:12:16</td>
                                  <td className="text-right">-1,000</td>
                                </tr>

                                <tr>
                                  <td>152213415</td>
                                  <td>win</td>
                                  <td>2021-12-06 19:12:52</td>
                                  <td className="text-right">1,950</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="138730109"
                        >
                          <td>138730109</td>
                          <td>2021-11-30 19:08:28</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>702</td>
                          <td>12117219908</td>
                          <td className="text-right">-1,400</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="138730109"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>138730109</td>
                                  <td>bet</td>
                                  <td>2021-11-30 19:08:28</td>
                                  <td className="text-right">-1,400</td>
                                </tr>

                                <tr>
                                  <td>138731022</td>
                                  <td>win</td>
                                  <td>2021-11-30 19:09:00</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="138726915"
                        >
                          <td>138726915</td>
                          <td>2021-11-30 19:06:41</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>702</td>
                          <td>12117211438</td>
                          <td className="text-right">3,000</td>
                          <td className="w-1">적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="138726915"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>138726915</td>
                                  <td>bet</td>
                                  <td>2021-11-30 19:06:41</td>
                                  <td className="text-right">-600</td>
                                </tr>

                                <tr>
                                  <td>138727859</td>
                                  <td>win</td>
                                  <td>2021-11-30 19:07:12</td>
                                  <td className="text-right">3,600</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="138669402"
                        >
                          <td>138669402</td>
                          <td>2021-11-30 18:35:44</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>702</td>
                          <td>12117055631</td>
                          <td className="text-right">-1,200</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="138669402"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>138669402</td>
                                  <td>bet</td>
                                  <td>2021-11-30 18:35:44</td>
                                  <td className="text-right">-1,200</td>
                                </tr>

                                <tr>
                                  <td>138670357</td>
                                  <td>win</td>
                                  <td>2021-11-30 18:36:15</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="138667831"
                        >
                          <td>138667831</td>
                          <td>2021-11-30 18:34:54</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>702</td>
                          <td>12117051750</td>
                          <td className="text-right">-1,100</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="138667831"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>138667831</td>
                                  <td>bet</td>
                                  <td>2021-11-30 18:34:54</td>
                                  <td className="text-right">-1,100</td>
                                </tr>

                                <tr>
                                  <td>138668706</td>
                                  <td>win</td>
                                  <td>2021-11-30 18:35:22</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="138666149"
                        >
                          <td>138666149</td>
                          <td>2021-11-30 18:34:03</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>702</td>
                          <td>12117047982</td>
                          <td className="text-right">1,300</td>
                          <td className="w-1">적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="138666149"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>138666149</td>
                                  <td>bet</td>
                                  <td>2021-11-30 18:34:03</td>
                                  <td className="text-right">-500</td>
                                </tr>

                                <tr>
                                  <td>138667027</td>
                                  <td>win</td>
                                  <td>2021-11-30 18:34:30</td>
                                  <td className="text-right">1,800</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="138662741"
                        >
                          <td>138662741</td>
                          <td>2021-11-30 18:32:19</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>702</td>
                          <td>12117040166</td>
                          <td className="text-right">-800</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="138662741"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>138662741</td>
                                  <td>bet</td>
                                  <td>2021-11-30 18:32:19</td>
                                  <td className="text-right">-800</td>
                                </tr>

                                <tr>
                                  <td>138663750</td>
                                  <td>win</td>
                                  <td>2021-11-30 18:32:48</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="138659644"
                        >
                          <td>138659644</td>
                          <td>2021-11-30 18:30:37</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>702</td>
                          <td>12117032449</td>
                          <td className="text-right">-1,500</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="138659644"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>138659644</td>
                                  <td>bet</td>
                                  <td>2021-11-30 18:30:37</td>
                                  <td className="text-right">-1,500</td>
                                </tr>

                                <tr>
                                  <td>138660527</td>
                                  <td>win</td>
                                  <td>2021-11-30 18:31:07</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="138617191"
                        >
                          <td>138617191</td>
                          <td>2021-11-30 18:06:53</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>702</td>
                          <td>12116937697</td>
                          <td className="text-right">-1,600</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="138617191"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>138617191</td>
                                  <td>bet</td>
                                  <td>2021-11-30 18:06:53</td>
                                  <td className="text-right">-1,600</td>
                                </tr>

                                <tr>
                                  <td>138618043</td>
                                  <td>win</td>
                                  <td>2021-11-30 18:07:22</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="138614026"
                        >
                          <td>138614026</td>
                          <td>2021-11-30 18:05:11</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>702</td>
                          <td>12116931443</td>
                          <td className="text-right">-100</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="138614026"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>138614026</td>
                                  <td>bet</td>
                                  <td>2021-11-30 18:05:11</td>
                                  <td className="text-right">-100</td>
                                </tr>

                                <tr>
                                  <td>138614920</td>
                                  <td>win</td>
                                  <td>2021-11-30 18:05:40</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="136413630"
                        >
                          <td>136413630</td>
                          <td>2021-11-29 17:07:25</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="71"
                            >
                              jackylu7
                            </a>
                          </td>
                          <td>748</td>
                          <td>12109312957</td>
                          <td className="text-right">-4,000</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="136413630"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>136413630</td>
                                  <td>bet</td>
                                  <td>2021-11-29 17:07:25</td>
                                  <td className="text-right">-4,000</td>
                                </tr>

                                <tr>
                                  <td>136414173</td>
                                  <td>win</td>
                                  <td>2021-11-29 17:07:44</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="136410165"
                        >
                          <td>136410165</td>
                          <td>2021-11-29 17:05:20</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="71"
                            >
                              jackylu7
                            </a>
                          </td>
                          <td>748</td>
                          <td>12109308693</td>
                          <td className="text-right">0</td>
                          <td className="w-1">취소</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="136410165"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>136410165</td>
                                  <td>bet</td>
                                  <td>2021-11-29 17:05:20</td>
                                  <td className="text-right">-1,000</td>
                                </tr>

                                <tr>
                                  <td>136460121</td>
                                  <td>cancel</td>
                                  <td>2021-11-29 17:35:21</td>
                                  <td className="text-right">1,000</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="132940683"
                        >
                          <td>132940683</td>
                          <td>2021-11-27 21:23:22</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          <td>703</td>
                          <td>12094586236</td>
                          <td className="text-right">5,000</td>
                          <td className="w-1">적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="132940683"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>132940683</td>
                                  <td>bet</td>
                                  <td>2021-11-27 21:23:22</td>
                                  <td className="text-right">-5,000</td>
                                </tr>

                                <tr>
                                  <td>132941952</td>
                                  <td>win</td>
                                  <td>2021-11-27 21:24:16</td>
                                  <td className="text-right">10,000</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="132933039"
                        >
                          <td>132933039</td>
                          <td>2021-11-27 21:18:47</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          <td>701</td>
                          <td>12094550926</td>
                          <td className="text-right">-5,000</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="132933039"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>132933039</td>
                                  <td>bet</td>
                                  <td>2021-11-27 21:18:47</td>
                                  <td className="text-right">-5,000</td>
                                </tr>

                                <tr>
                                  <td>132933939</td>
                                  <td>win</td>
                                  <td>2021-11-27 21:19:17</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="132930590"
                        >
                          <td>132930590</td>
                          <td>2021-11-27 21:17:18</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          <td>701</td>
                          <td>12094539376</td>
                          <td className="text-right">5,000</td>
                          <td className="w-1">적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="132930590"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>132930590</td>
                                  <td>bet</td>
                                  <td>2021-11-27 21:17:18</td>
                                  <td className="text-right">-5,000</td>
                                </tr>

                                <tr>
                                  <td>132932072</td>
                                  <td>win</td>
                                  <td>2021-11-27 21:18:10</td>
                                  <td className="text-right">10,000</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="132929354"
                        >
                          <td>132929354</td>
                          <td>2021-11-27 21:16:39</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          <td>701</td>
                          <td>12094534196</td>
                          <td className="text-right">-5,000</td>
                          <td className="w-1">미적중</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="132929354"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>132929354</td>
                                  <td>bet</td>
                                  <td>2021-11-27 21:16:39</td>
                                  <td className="text-right">-5,000</td>
                                </tr>

                                <tr>
                                  <td>132930081</td>
                                  <td>win</td>
                                  <td>2021-11-27 21:17:04</td>
                                  <td className="text-right">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr
                          className="row-header row-expanded"
                          data-betslipid="132880425"
                        >
                          <td>132880425</td>
                          <td>2021-11-27 20:49:09</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="5"
                            >
                              tuser3
                            </a>
                          </td>
                          <td>701</td>
                          <td>12094329686</td>
                          <td className="text-right">-5,000</td>
                          <td className="w-1">대기</td>
                          <td className="row-expand">
                            <i className="ti ti-chevron-down"></i>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          data-betslipid="132880425"
                        >
                          <td colSpan="11">
                            <table className="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                              <thead>
                                <tr>
                                  <th className="w-1">번호</th>
                                  <th>타입</th>
                                  <th>시간</th>
                                  <th className="text-right">금액 변동</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>132880425</td>
                                  <td>bet</td>
                                  <td>2021-11-27 20:49:09</td>
                                  <td className="text-right">-5,000</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <div className="btn-list">
                      <span className="d-none d-sm-inline">
                        {/* <!-- <a href="#" className="btn btn-outline-secondary">
                                            삭제/환불하기
                                        </a> --> */}
                      </span>
                    </div>
                    {/* <!--<div th:replace="~{fragments/general.html :: pagination(mainPath= ${@urlService.getFullRequestUrlWithoutPage()}, page = ${page}, pageCount = ${(totalItemCount / pageSize) + (totalItemCount % pageSize != 0 ? 1 : 0)})}"> </div>--> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UserInfo show={show} handleClose={handleClose} />
    </>
  );
};

export default CasinoBet;

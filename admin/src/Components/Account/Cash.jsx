import React from "react";

const Cash = () => {
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
                <h2 className="page-title">캐쉬관리</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="" method="get" className="d-flex">
                    <select defaultValue={'default'} className="form-select w-auto" name="actionType">
                      <option value="">
                        전체
                      </option>
                      <option value="1000">아이템 사용</option>
                      <option value="1001">무료충전</option>
                      <option value="1002">관리자 변경</option>
                      <option value="1100">사전배팅</option>
                      <option value="1101">사전배팅 취소</option>
                      <option value="1102">사전배팅 적중</option>
                      <option value="1103">사전배팅 미적중</option>
                      <option value="1103">사전배팅 관리자취소</option>
                      <option value="1110">실시간배팅</option>
                      <option value="1111">실시간배팅 취소</option>
                      <option value="1112">실시간배팅 적중</option>
                      <option value="1113">실시간배팅 미적중</option>
                      <option value="1113">실시간배팅 관리자취소</option>
                      <option value="10000">충전</option>
                      <option value="10100">환전</option>
                      <option value="10100">환전 환불</option>
                      <option value="1200">카지노 배팅</option>
                      <option value="1201">카지노 취소</option>
                      <option value="1202">카지노 적중</option>
                      <option value="1205">카지노 기타</option>
                      <option value="1300">미니게임 배팅</option>
                      <option value="1301">미니게임 취소</option>
                      <option value="1302">미니게임 적중</option>
                    </select>
                    <select defaultValue={'default'} className="form-select w-auto" name="searchBy">
                      <option value="username">
                        유저
                      </option>
                      <option value="description">비고</option>
                      <option value="ip">IP</option>
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
                    <div className="d-inline-flex ms-2">
                      <div className="input-icon">
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
                          id="days-filter"
                          className="form-control"
                          readOnly=""
                        />
                      </div>
                      <button className="btn btn-primary ms-2" type="submit">
                        조회
                      </button>
                    </div>
                    <input
                      id="from"
                      name="from"
                      className="form-control"
                      type="hidden"
                    />
                    <input
                      id="to"
                      name="to"
                      className="form-control"
                      type="hidden"
                    />
                  </form>
                </div>
              </div>
            </div>

            <div className="total">
              총 <span>2,068</span>건
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
                            <a className="sort-item" data-sort="id">
                              번호
                              <i className="ti ti-chevron-up"></i>
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="user.nickName">
                              유저명
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="actionType">
                              액션
                            </a>
                          </th>
                          <th className="text-right">
                            <a className="sort-item" data-sort="beforeValue">
                              변경전 금액
                            </a>
                          </th>
                          <th className="text-right">
                            <a className="sort-item" data-sort="changeValue">
                              변경금액
                            </a>
                          </th>
                          <th className="text-right">
                            <a className="sort-item" data-sort="beforeValue">
                              변경후 금액
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="changeDesc">
                              비고
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="ipAddress">
                              IP
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="created">
                              생성일
                            </a>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>3377</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="123"
                            >
                              kaka11
                            </a>
                          </td>
                          <td>환전</td>
                          <td className="text-right">10,490,449</td>

                          <td className="text-right text-blue">
                            <span>-100,000</span>
                          </td>
                          <td className="text-right">10,390,449</td>
                          <td></td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 15:07:21</td>
                        </tr>
                        <tr>
                          <td>3367</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="123"
                            >
                              kaka11
                            </a>
                          </td>
                          <td>환전</td>
                          <td className="text-right">10,830,449</td>

                          <td className="text-right text-blue">
                            <span>-500,000</span>
                          </td>
                          <td className="text-right">10,330,449</td>
                          <td></td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 14:55:33</td>
                        </tr>
                        <tr>
                          <td>3366</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="123"
                            >
                              kaka11
                            </a>
                          </td>
                          <td>환전</td>
                          <td className="text-right">10,930,449</td>

                          <td className="text-right text-blue">
                            <span>-100,000</span>
                          </td>
                          <td className="text-right">10,830,449</td>
                          <td></td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 14:54:20</td>
                        </tr>
                        <tr>
                          <td>3365</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="123"
                            >
                              kaka11
                            </a>
                          </td>
                          <td>충전</td>
                          <td className="text-right">10,030,449</td>
                          <td className="text-right text-red">
                            +<span>909,000</span>
                          </td>

                          <td className="text-right">10,930,449</td>
                          <td></td>
                          <td></td>
                          <td>2022-03-07 14:53:47</td>
                        </tr>
                        <tr>
                          <td>3339</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="123"
                            >
                              kaka11
                            </a>
                          </td>
                          <td>관리자 변경</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>9,999,999</span>
                          </td>

                          <td className="text-right">9,999,999</td>
                          <td></td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 13:44:02</td>
                        </tr>
                        <tr>
                          <td>3338</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>환전</td>
                          <td className="text-right">248,422</td>

                          <td className="text-right text-blue">
                            <span>-100,000</span>
                          </td>
                          <td className="text-right">148,422</td>
                          <td></td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 12:58:22</td>
                        </tr>
                        <tr>
                          <td>3336</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>환전</td>
                          <td className="text-right">648,422</td>

                          <td className="text-right text-blue">
                            <span>-100,000</span>
                          </td>
                          <td className="text-right">548,422</td>
                          <td></td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 12:51:38</td>
                        </tr>
                        <tr>
                          <td>3335</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>관리자 변경</td>
                          <td className="text-right">348,422</td>
                          <td className="text-right text-red">
                            +<span>300,000</span>
                          </td>

                          <td className="text-right">648,422</td>
                          <td></td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 12:51:20</td>
                        </tr>
                        <tr>
                          <td>3334</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>환전</td>
                          <td className="text-right">448,422</td>

                          <td className="text-right text-blue">
                            <span>-100,000</span>
                          </td>
                          <td className="text-right">348,422</td>
                          <td></td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 12:46:16</td>
                        </tr>
                        <tr>
                          <td>3333</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>환전</td>
                          <td className="text-right">548,422</td>

                          <td className="text-right text-blue">
                            <span>-100,000</span>
                          </td>
                          <td className="text-right">448,422</td>
                          <td></td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 12:44:51</td>
                        </tr>
                        <tr>
                          <td>3327</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">548,422</td>

                          <td className="text-right text-blue">
                            <span>-50,000</span>
                          </td>
                          <td className="text-right">498,422</td>
                          <td></td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 12:23:26</td>
                        </tr>
                        <tr>
                          <td>3323</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">648,422</td>

                          <td className="text-right text-blue">
                            <span>-20,000</span>
                          </td>
                          <td className="text-right">628,422</td>
                          <td></td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 12:18:38</td>
                        </tr>
                        <tr>
                          <td>3320</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>실시간배팅</td>
                          <td className="text-right">1,666,750</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,661,750</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-07 11:16:22</td>
                        </tr>
                        <tr>
                          <td>3319</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">1,671,750</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,666,750</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-07 11:16:10</td>
                        </tr>
                        <tr>
                          <td>3318</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">1,681,750</td>

                          <td className="text-right text-blue">
                            <span>-10,000</span>
                          </td>
                          <td className="text-right">1,671,750</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-07 11:16:05</td>
                        </tr>
                        <tr>
                          <td>3317</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">1,686,750</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,681,750</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-07 11:15:26</td>
                        </tr>
                        <tr>
                          <td>3316</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">1,691,750</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,686,750</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-07 11:15:23</td>
                        </tr>
                        <tr>
                          <td>3315</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">1,696,750</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,691,750</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-07 11:15:10</td>
                        </tr>
                        <tr>
                          <td>3314</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">1,701,750</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,696,750</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-07 11:15:05</td>
                        </tr>
                        <tr>
                          <td>3313</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">1,706,750</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,701,750</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-07 11:15:01</td>
                        </tr>
                        <tr>
                          <td>3312</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">1,711,750</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,706,750</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-07 11:14:57</td>
                        </tr>
                        <tr>
                          <td>3311</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">1,716,750</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,711,750</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-07 11:14:53</td>
                        </tr>
                        <tr>
                          <td>3310</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">1,721,750</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,716,750</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-07 09:41:49</td>
                        </tr>
                        <tr>
                          <td>3309</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">1,726,750</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,721,750</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-07 09:41:15</td>
                        </tr>
                        <tr>
                          <td>3302</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>사전배팅 적중</td>
                          <td className="text-right">1,716,750</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">1,726,750</td>
                          <td>REFUND</td>
                          <td></td>
                          <td>2022-03-05 02:35:19</td>
                        </tr>
                        <tr>
                          <td>3299</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="109"
                            >
                              kaka10
                            </a>
                          </td>
                          <td>사전배팅</td>
                          <td className="text-right">1,058,861</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,053,861</td>
                          <td></td>
                          <td>116.109.23.149</td>
                          <td>2022-03-04 19:37:26</td>
                        </tr>
                        <tr>
                          <td>3298</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>실시간배팅</td>
                          <td className="text-right">1,721,750</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,716,750</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-04 12:50:35</td>
                        </tr>
                        <tr>
                          <td>3177</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>실시간배팅</td>
                          <td className="text-right">1,747,000</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,742,000</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-03 12:01:05</td>
                        </tr>
                        <tr>
                          <td>3176</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>실시간배팅</td>
                          <td className="text-right">1,752,000</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,747,000</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-03 12:00:41</td>
                        </tr>
                        <tr>
                          <td>3175</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td>실시간배팅</td>
                          <td className="text-right">1,757,000</td>

                          <td className="text-right text-blue">
                            <span>-5,000</span>
                          </td>
                          <td className="text-right">1,752,000</td>
                          <td></td>
                          <td>119.65.103.62</td>
                          <td>2022-03-03 12:00:13</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <ul className="pagination m-0 ms-auto">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          tabIndex="-1"
                          aria-disabled="true"
                          href="/transaction/list?&amp;page=0"
                          disabled="disabled"
                        >
                          <i className="ti ti-chevron-left"></i>
                          이전
                        </a>
                      </li>

                      <li className="page-item active">
                        <a
                          className="page-link"
                          href="/transaction/list?&amp;page=1"
                        >
                          1
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/list?&amp;page=2"
                        >
                          2
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/list?&amp;page=3"
                        >
                          3
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/list?&amp;page=4"
                        >
                          4
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/list?&amp;page=5"
                        >
                          5
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/list?&amp;page=6"
                        >
                          6
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/list?&amp;page=7"
                        >
                          7
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/list?&amp;page=8"
                        >
                          8
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/list?&amp;page=9"
                        >
                          9
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/list?&amp;page=10"
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
                          href="/transaction/list?&amp;page=69"
                        >
                          69
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
                          href="/transaction/list?&amp;page=2"
                        >
                          다음 <i className="ti ti-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cards mb-3">
              <div className="col-12">
                <form
                  action="/transaction/createlog"
                  method="post"
                  className="card"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value="5c979add-ec82-408e-855a-ce5c97866efd"
                  />
                  <div className="card-header">
                    <h4 className="card-title">잔액추가</h4>
                  </div>
                  <div className="card-body">
                    <div className="col-6">
                      <div className="form-group mb-3 row">
                        <label className="form-label col-3 col-form-label">
                          회원ID
                        </label>
                        <div className="col">
                          <input
                            type="text"
                            id="userName"
                            className="form-control"
                            aria-describedby=""
                            placeholder="회원ID"
                            name="userName"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label className="form-label col-3 col-form-label">
                          내용
                        </label>
                        <div className="col">
                          <input
                            type="text"
                            id="description"
                            className="form-control"
                            aria-describedby=""
                            placeholder="내용"
                            name="description"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label className="form-label col-3 col-form-label">
                          금액
                        </label>
                        <div className="col">
                          <input
                            type="number"
                            id="changeValue"
                            className="form-control"
                            aria-describedby=""
                            placeholder="금액"
                            name="changeValue"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-end">
                    <div className="d-flex">
                      <button type="submit" className="btn btn-primary ms-auto">
                        확인
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

export default Cash;

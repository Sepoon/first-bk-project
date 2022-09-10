import React, { useState } from "react";
import UserInfo from "../Popup/UserInfo";

const Point = () => {
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
                <h2 className="page-title">포인트관리</h2>
              </div>
              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form
                    action="/transaction/points"
                    method="get"
                    className="d-flex"
                  >
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
                      name="actionType"
                    >
                      <option value="">전체</option>
                      <option value="100">회원가입</option>
                      <option value="101">본인인증</option>
                      <option value="102">로그인</option>
                      <option value="103">레벨업</option>
                      <option value="104">관리자 변경</option>
                      <option value="110">쪽지 보내기</option>
                    </select>
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="username">유저</option>
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
          </div>
          {/* <!--        <div className="total">--> */}
          {/* <!--            건수 : 0--> */}
          {/* <!--        </div>--> */}

          <div className="total">
            총 <span>47</span>건
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-deck row-cards mb-3">
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
                          <td>227</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="46"
                            >
                              jackylu1
                            </a>
                          </td>
                          <td></td>
                          <td className="text-right">50,000</td>
                          <td className="text-right text-red">
                            +<span>20,000</span>
                          </td>

                          <td className="text-right">70,000</td>
                          <td>Register referrer bonus</td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 11:14:56</td>
                        </tr>
                        <tr>
                          <td>226</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="137"
                            >
                              kaka18
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>20,000</span>
                          </td>

                          <td className="text-right">20,000</td>
                          <td>Register bonus</td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 11:14:56</td>
                        </tr>
                        <tr>
                          <td>225</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="136"
                            >
                              kaka17
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>20,000</span>
                          </td>

                          <td className="text-right">20,000</td>
                          <td>Register bonus</td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 11:12:38</td>
                        </tr>
                        <tr>
                          <td>224</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="135"
                            >
                              kaka16
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>20,000</span>
                          </td>

                          <td className="text-right">20,000</td>
                          <td>Register bonus</td>
                          <td>116.109.23.149</td>
                          <td>2022-03-07 11:08:00</td>
                        </tr>
                        <tr>
                          <td>223</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="134"
                            >
                              tsara9
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>Register bonus</td>
                          <td>2001:ee0:4f4d:af10:5450:3376:7272:b1ed</td>
                          <td>2022-03-06 20:31:18</td>
                        </tr>
                        <tr>
                          <td>222</td>
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
                          <td></td>
                          <td className="text-right">40,000</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">50,000</td>
                          <td>Register referrer bonus</td>
                          <td>2001:ee0:4f4d:af10:5450:3376:7272:b1ed</td>
                          <td>2022-03-06 20:26:08</td>
                        </tr>
                        <tr>
                          <td>221</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="133"
                            >
                              tsara8
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>Register bonus</td>
                          <td>2001:ee0:4f4d:af10:5450:3376:7272:b1ed</td>
                          <td>2022-03-06 20:26:08</td>
                        </tr>
                        <tr>
                          <td>220</td>
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
                          <td></td>
                          <td className="text-right">30,000</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">40,000</td>
                          <td>Register referrer bonus</td>
                          <td>173.245.219.245</td>
                          <td>2022-03-05 23:39:49</td>
                        </tr>
                        <tr>
                          <td>219</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="132"
                            >
                              tsara7
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>Register bonus</td>
                          <td>173.245.219.245</td>
                          <td>2022-03-05 23:39:49</td>
                        </tr>
                        <tr>
                          <td>218</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="131"
                            >
                              tsara6
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>Register bonus</td>
                          <td>173.245.219.245</td>
                          <td>2022-03-05 23:36:58</td>
                        </tr>
                        <tr>
                          <td>217</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="130"
                            >
                              tsara5
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>Register bonus</td>
                          <td>173.245.219.245</td>
                          <td>2022-03-05 23:35:11</td>
                        </tr>
                        <tr>
                          <td>216</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="46"
                            >
                              jackylu1
                            </a>
                          </td>
                          <td></td>
                          <td className="text-right">40,000</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">50,000</td>
                          <td>Register referrer bonus</td>
                          <td>116.109.23.149</td>
                          <td>2022-03-04 19:47:49</td>
                        </tr>
                        <tr>
                          <td>215</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="129"
                            >
                              kaka15
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>Register bonus</td>
                          <td>116.109.23.149</td>
                          <td>2022-03-04 19:47:49</td>
                        </tr>
                        <tr>
                          <td>214</td>
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
                          <td></td>
                          <td className="text-right">20,000</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">30,000</td>
                          <td>Register referrer bonus</td>
                          <td>173.245.219.245</td>
                          <td>2022-03-03 17:22:44</td>
                        </tr>
                        <tr>
                          <td>213</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="127"
                            >
                              tsara4
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>Register bonus</td>
                          <td>173.245.219.245</td>
                          <td>2022-03-03 17:22:44</td>
                        </tr>
                        <tr>
                          <td>212</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="126"
                            >
                              tsara3
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>Register bonus</td>
                          <td>173.245.219.245</td>
                          <td>2022-03-03 16:59:12</td>
                        </tr>
                        <tr>
                          <td>211</td>
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
                          <td></td>
                          <td className="text-right">10,000</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">20,000</td>
                          <td>Register referrer bonus</td>
                          <td>173.245.219.245</td>
                          <td>2022-03-03 16:59:12</td>
                        </tr>
                        <tr>
                          <td>210</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="125"
                            >
                              kaka13
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>Register bonus</td>
                          <td>116.109.23.149</td>
                          <td>2022-03-03 16:18:59</td>
                        </tr>
                        <tr>
                          <td>209</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="46"
                            >
                              jackylu1
                            </a>
                          </td>
                          <td></td>
                          <td className="text-right">30,000</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">40,000</td>
                          <td>Register referrer bonus</td>
                          <td>116.109.23.149</td>
                          <td>2022-03-03 16:18:59</td>
                        </tr>
                        <tr>
                          <td>208</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="124"
                            >
                              kaka12
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>Register bonus</td>
                          <td>116.109.23.149</td>
                          <td>2022-03-03 15:58:24</td>
                        </tr>
                        <tr>
                          <td>207</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="46"
                            >
                              jackylu1
                            </a>
                          </td>
                          <td></td>
                          <td className="text-right">20,000</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">30,000</td>
                          <td>Register referrer bonus</td>
                          <td>116.109.23.149</td>
                          <td>2022-03-03 15:58:24</td>
                        </tr>
                        <tr>
                          <td>206</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="123"
                            >
                              kaka11
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>Register bonus</td>
                          <td>116.109.23.149</td>
                          <td>2022-03-03 15:51:30</td>
                        </tr>
                        <tr>
                          <td>205</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="46"
                            >
                              jackylu1
                            </a>
                          </td>
                          <td></td>
                          <td className="text-right">10,000</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">20,000</td>
                          <td>Register referrer bonus</td>
                          <td>116.109.23.149</td>
                          <td>2022-03-03 15:51:30</td>
                        </tr>
                        <tr>
                          <td>204</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="122"
                            >
                              tsara2
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>Register bonus</td>
                          <td>173.245.219.245</td>
                          <td>2022-03-03 15:39:33</td>
                        </tr>
                        <tr>
                          <td>203</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="20"
                            >
                              sara
                            </a>
                          </td>
                          <td></td>
                          <td className="text-right">20,000</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">30,000</td>
                          <td>Register referrer bonus</td>
                          <td>173.245.219.245</td>
                          <td>2022-03-03 15:39:33</td>
                        </tr>
                        <tr>
                          <td>202</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="121"
                            >
                              tsara 1
                            </a>
                          </td>
                          <td>회원가입</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>Register bonus</td>
                          <td>173.245.219.245</td>
                          <td>2022-03-02 14:04:39</td>
                        </tr>
                        <tr>
                          <td>201</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="20"
                            >
                              sara
                            </a>
                          </td>
                          <td></td>
                          <td className="text-right">10,000</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">20,000</td>
                          <td>Register referrer bonus</td>
                          <td>173.245.219.245</td>
                          <td>2022-03-02 14:04:39</td>
                        </tr>
                        <tr>
                          <td>199</td>
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
                          <td>관리자 변경</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>10,000</span>
                          </td>

                          <td className="text-right">10,000</td>
                          <td>테스트</td>
                          <td>124.50.253.114</td>
                          <td>2022-02-23 16:20:36</td>
                        </tr>
                        <tr>
                          <td>198</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="106"
                            >
                              test고고고
                            </a>
                          </td>
                          <td>관리자 변경</td>
                          <td className="text-right">0</td>
                          <td className="text-right text-red">
                            +<span>300,000</span>
                          </td>

                          <td className="text-right">300,000</td>
                          <td>테스트 포인트</td>
                          <td>119.65.103.62</td>
                          <td>2022-02-23 12:32:13</td>
                        </tr>
                        <tr>
                          <td>195</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="89"
                            >
                              테스트랍니다1
                            </a>
                          </td>
                          <td>관리자 변경</td>
                          <td className="text-right">10,000</td>

                          <td className="text-right text-blue">
                            <span>-10,000</span>
                          </td>
                          <td className="text-right">0</td>
                          <td>관리자 수정</td>
                          <td>119.65.103.62</td>
                          <td>2022-01-25 16:31:48</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <div className="btn-list"></div>

                    <ul className="pagination m-0 ms-auto">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          tabIndex="-1"
                          aria-disabled="true"
                          href="/transaction/points?&amp;page=0"
                          disabled="disabled"
                        >
                          <i className="ti ti-chevron-left"></i>
                          이전
                        </a>
                      </li>

                      <li className="page-item active">
                        <a
                          className="page-link"
                          href="/transaction/points?&amp;page=1"
                        >
                          1
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/points?&amp;page=2"
                        >
                          2
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
                          href="/transaction/points?&amp;page=2"
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
                  action="/transaction/createpointlog"
                  method="post"
                  className="card"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    defaultValue="5c979add-ec82-408e-855a-ce5c97866efd"
                  />
                  <div className="card-header">
                    <h4 className="card-title">적립포인트추가</h4>
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
                          포인트
                        </label>
                        <div className="col">
                          <input
                            type="number"
                            id="changeValue"
                            className="form-control"
                            aria-describedby=""
                            placeholder="포인트"
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
      <UserInfo show={show} handleClose={handleClose} />
    </>
  );
};

export default Point;

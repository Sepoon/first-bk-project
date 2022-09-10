import React, { useState } from "react";
import UserInfo from "../Popup/UserInfo";

const LoginLog = () => {
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
                <h2 className="page-title">로그인내역</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="/user/loginlog" method="get" className="d-flex">
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="user">사용자</option>
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
                  </form>
                </div>
              </div>
            </div>

            <div className="total">
              총 <span>827</span>건
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
                              로그ID
                              <i className="ti ti-chevron-up"></i>
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="user.userName">
                              유저명
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="requestIp">
                              IP
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="userAgent">
                              경로
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="loginDate">
                              날짜
                            </a>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>830</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>173.245.219.245</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 15:18:08.0</td>
                        </tr>
                        <tr>
                          <td>829</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 15:16:02.0</td>
                        </tr>
                        <tr>
                          <td>828</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 15:14:20.0</td>
                        </tr>
                        <tr>
                          <td>827</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 15:10:25.0</td>
                        </tr>
                        <tr>
                          <td>826</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="124"
                            >
                              jackylu12
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 15:08:22.0</td>
                        </tr>
                        <tr>
                          <td>825</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 14:52:27.0</td>
                        </tr>
                        <tr>
                          <td>824</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              kk0972
                            </a>
                          </td>
                          <td>119.65.103.62</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/99.0.4844.51 Safari/537.36
                          </td>
                          <td>2022-03-07 14:29:28.0</td>
                        </tr>
                        <tr>
                          <td>823</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>180.191.237.102</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 13:53:11.0</td>
                        </tr>
                        <tr>
                          <td>822</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>221.151.212.163</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/99.0.4844.51 Safari/537.36 Edg/99.0.1150.30
                          </td>
                          <td>2022-03-07 13:40:20.0</td>
                        </tr>
                        <tr>
                          <td>821</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>42.114.90.164</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 13:26:06.0</td>
                        </tr>
                        <tr>
                          <td>820</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 13:04:01.0</td>
                        </tr>
                        <tr>
                          <td>819</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="135"
                            >
                              jackylu16
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 13:02:37.0</td>
                        </tr>
                        <tr>
                          <td>818</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="124"
                            >
                              jackylu12
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 13:02:08.0</td>
                        </tr>
                        <tr>
                          <td>817</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 13:02:03.0</td>
                        </tr>
                        <tr>
                          <td>816</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 12:32:25.0</td>
                        </tr>
                        <tr>
                          <td>815</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="125"
                            >
                              jackylu13
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 12:28:57.0</td>
                        </tr>
                        <tr>
                          <td>814</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="73"
                            >
                              jackylu9
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 12:17:52.0</td>
                        </tr>
                        <tr>
                          <td>813</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="106"
                            >
                              test1415
                            </a>
                          </td>
                          <td>106.101.1.204</td>
                          <td>
                            Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac
                            OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)
                            Version/15.3 Mobile/15E148 Safari/604.1
                          </td>
                          <td>2022-03-07 11:34:23.0</td>
                        </tr>
                        <tr>
                          <td>812</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="106"
                            >
                              test1415
                            </a>
                          </td>
                          <td>119.65.103.62</td>
                          <td>
                            Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 11:19:48.0</td>
                        </tr>
                        <tr>
                          <td>811</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="137"
                            >
                              jackylu18
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 11:14:56.0</td>
                        </tr>
                        <tr>
                          <td>810</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              kk0972
                            </a>
                          </td>
                          <td>119.65.103.62</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/99.0.4844.51 Safari/537.36
                          </td>
                          <td>2022-03-07 11:14:41.0</td>
                        </tr>
                        <tr>
                          <td>809</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="136"
                            >
                              jackylu17
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 11:12:38.0</td>
                        </tr>
                        <tr>
                          <td>808</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="135"
                            >
                              jackylu16
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 11:09:58.0</td>
                        </tr>
                        <tr>
                          <td>807</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="135"
                            >
                              jackylu16
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 11:08:03.0</td>
                        </tr>
                        <tr>
                          <td>806</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="124"
                            >
                              jackylu12
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 10:52:08.0</td>
                        </tr>
                        <tr>
                          <td>805</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="123"
                            >
                              jackylu11
                            </a>
                          </td>
                          <td>116.109.23.149</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/98.0.4758.102 Safari/537.36
                          </td>
                          <td>2022-03-07 10:51:24.0</td>
                        </tr>
                        <tr>
                          <td>804</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              kk0972
                            </a>
                          </td>
                          <td>119.65.103.62</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/99.0.4844.51 Safari/537.36
                          </td>
                          <td>2022-03-07 09:37:08.0</td>
                        </tr>
                        <tr>
                          <td>803</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="71"
                            >
                              jackylu7
                            </a>
                          </td>
                          <td>220.72.234.115</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/99.0.4844.51 Safari/537.36
                          </td>
                          <td>2022-03-07 02:57:07.0</td>
                        </tr>
                        <tr>
                          <td>802</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="3"
                            >
                              tuser1
                            </a>
                          </td>
                          <td>220.72.234.115</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/99.0.4844.51 Safari/537.36
                          </td>
                          <td>2022-03-07 02:56:36.0</td>
                        </tr>
                        <tr>
                          <td>801</td>
                          <td>
                            <a
                              className="open-user-info-modal"
                              href="#"
                              onClick={handleShow}
                              data-userid="71"
                            >
                              jackylu7
                            </a>
                          </td>
                          <td>220.72.234.115</td>
                          <td>
                            Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/99.0.4844.51 Safari/537.36
                          </td>
                          <td>2022-03-07 01:23:09.0</td>
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
                          href="/user/loginlog?&amp;page=0"
                          disabled="disabled"
                        >
                          <i className="ti ti-chevron-left"></i>
                          이전
                        </a>
                      </li>

                      <li className="page-item active">
                        <a
                          className="page-link"
                          href="/user/loginlog?&amp;page=1"
                        >
                          1
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/loginlog?&amp;page=2"
                        >
                          2
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/loginlog?&amp;page=3"
                        >
                          3
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/loginlog?&amp;page=4"
                        >
                          4
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/loginlog?&amp;page=5"
                        >
                          5
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/loginlog?&amp;page=6"
                        >
                          6
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/loginlog?&amp;page=7"
                        >
                          7
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/loginlog?&amp;page=8"
                        >
                          8
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/loginlog?&amp;page=9"
                        >
                          9
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/user/loginlog?&amp;page=10"
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
                          href="/user/loginlog?&amp;page=28"
                        >
                          28
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
                          href="/user/loginlog?&amp;page=2"
                        >
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
      <UserInfo show={show} handleClose={handleClose} />
    </>
  );
};

export default LoginLog;

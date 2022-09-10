import React, { useState } from "react";
import UserInfo from "../Popup/UserInfo";

const Exchange = () => {
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
                <h2 className="page-title">환전관리</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="" method="get" className="d-flex">
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="user">유저</option>
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
              총 <span>43</span>건
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
                          {/* <!--                                        <th className="text-right">--> */}
                          <th className="text-right">
                            <a className="sort-item" data-sort="amount">
                              금액
                            </a>
                          </th>
                          <th>계좌</th>
                          <th className="text-right">
                            <a
                              className="sort-item"
                              data-sort="lastChargeAmount"
                            >
                              충전금액
                            </a>
                          </th>
                          <th className="text-right">
                            <a className="sort-item" data-sort="lastRollingPct">
                              롤링(%)
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="created">
                              신청시간
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="responseDate">
                              처리시간
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="status">
                              상태
                            </a>
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>72</td>
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
                          <td className="text-right">100,000</td>

                          <td>(SC제일은행) 11111111</td>

                          <td className="text-right">900,000</td>
                          <td className="text-right">-55.00</td>

                          <td>2022-03-07 15:07:21</td>
                          <td></td>
                          <td>신청</td>
                          <td>
                            <a
                              className="btn btn-warning ms-2 log-action-btn"
                              href="/transaction/exchange/72/setstatus?status=12"
                            >
                              완료
                            </a>
                            <a
                              className="btn btn-success ms-2 log-action-btn"
                              href="/transaction/exchange/72/setstatus?status=10"
                            >
                              취소
                            </a>
                            <a
                              className="btn btn-danger ms-2 log-action-btn"
                              href="/transaction/exchange/72/setstatus?status=5"
                            >
                              대기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>71</td>
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
                          <td className="text-right">500,000</td>

                          <td>(SC제일은행) 11111111</td>

                          <td className="text-right">900,000</td>
                          <td className="text-right">.00</td>

                          <td>2022-03-07 14:55:33</td>
                          <td></td>
                          <td>신청</td>
                          <td>
                            <a
                              className="btn btn-warning ms-2 log-action-btn"
                              href="/transaction/exchange/71/setstatus?status=12"
                            >
                              완료
                            </a>
                            <a
                              className="btn btn-success ms-2 log-action-btn"
                              href="/transaction/exchange/71/setstatus?status=10"
                            >
                              취소
                            </a>
                            <a
                              className="btn btn-danger ms-2 log-action-btn"
                              href="/transaction/exchange/71/setstatus?status=5"
                            >
                              대기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>70</td>
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
                          <td className="text-right">100,000</td>

                          <td>(SC제일은행) 11111111</td>

                          <td className="text-right">900,000</td>
                          <td className="text-right">.00</td>

                          <td>2022-03-07 14:54:20</td>
                          <td>2022-03-07 14:55:09</td>
                          <td>완료</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>69</td>
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
                          <td className="text-right">100,000</td>

                          <td>(제주은행) 123456</td>

                          <td className="text-right">5,000</td>
                          <td className="text-right">-12,520.00</td>

                          <td>2022-03-07 12:58:22</td>
                          <td></td>
                          <td>신청</td>
                          <td>
                            <a
                              className="btn btn-warning ms-2 log-action-btn"
                              href="/transaction/exchange/69/setstatus?status=12"
                            >
                              완료
                            </a>
                            <a
                              className="btn btn-success ms-2 log-action-btn"
                              href="/transaction/exchange/69/setstatus?status=10"
                            >
                              취소
                            </a>
                            <a
                              className="btn btn-danger ms-2 log-action-btn"
                              href="/transaction/exchange/69/setstatus?status=5"
                            >
                              대기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>68</td>
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
                          <td className="text-right">100,000</td>

                          <td>(제주은행) 123456</td>

                          <td className="text-right">5,000</td>
                          <td className="text-right">-6,520.00</td>

                          <td>2022-03-07 12:51:38</td>
                          <td></td>
                          <td>신청</td>
                          <td>
                            <a
                              className="btn btn-warning ms-2 log-action-btn"
                              href="/transaction/exchange/68/setstatus?status=12"
                            >
                              완료
                            </a>
                            <a
                              className="btn btn-success ms-2 log-action-btn"
                              href="/transaction/exchange/68/setstatus?status=10"
                            >
                              취소
                            </a>
                            <a
                              className="btn btn-danger ms-2 log-action-btn"
                              href="/transaction/exchange/68/setstatus?status=5"
                            >
                              대기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>67</td>
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
                          <td className="text-right">100,000</td>

                          <td>(제주은행) 123456</td>

                          <td className="text-right">5,000</td>
                          <td className="text-right">-6,520.00</td>

                          <td>2022-03-07 12:46:16</td>
                          <td></td>
                          <td>신청</td>
                          <td>
                            <a
                              className="btn btn-warning ms-2 log-action-btn"
                              href="/transaction/exchange/67/setstatus?status=12"
                            >
                              완료
                            </a>
                            <a
                              className="btn btn-success ms-2 log-action-btn"
                              href="/transaction/exchange/67/setstatus?status=10"
                            >
                              취소
                            </a>
                            <a
                              className="btn btn-danger ms-2 log-action-btn"
                              href="/transaction/exchange/67/setstatus?status=5"
                            >
                              대기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>66</td>
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
                          <td className="text-right">100,000</td>

                          <td>(제주은행) 123456</td>

                          <td className="text-right">5,000</td>
                          <td className="text-right">-6,520.00</td>

                          <td>2022-03-07 12:44:51</td>
                          <td></td>
                          <td>신청</td>
                          <td>
                            <a
                              className="btn btn-warning ms-2 log-action-btn"
                              href="/transaction/exchange/66/setstatus?status=12"
                            >
                              완료
                            </a>
                            <a
                              className="btn btn-success ms-2 log-action-btn"
                              href="/transaction/exchange/66/setstatus?status=10"
                            >
                              취소
                            </a>
                            <a
                              className="btn btn-danger ms-2 log-action-btn"
                              href="/transaction/exchange/66/setstatus?status=5"
                            >
                              대기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>65</td>
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
                          <td className="text-right">100,000</td>

                          <td>(KB국민은행) 123456</td>

                          <td className="text-right">300,000</td>
                          <td className="text-right">.00</td>

                          <td>2022-02-23 11:32:27</td>
                          <td>2022-03-07 12:41:40</td>
                          <td>완료</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>64</td>
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
                          <td className="text-right">10,000</td>

                          <td>(KB국민은행) 123456</td>

                          <td className="text-right">300,000</td>
                          <td className="text-right">.00</td>

                          <td>2022-02-23 11:31:55</td>
                          <td>2022-02-23 11:32:07</td>
                          <td>취소</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>63</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="108"
                            >
                              testu2
                            </a>
                          </td>
                          <td className="text-right">10,000</td>

                          <td>(대구은행) 12312124124142</td>

                          <td className="text-right">60,000</td>
                          <td className="text-right">5.50</td>

                          <td>2022-02-19 21:28:29</td>
                          <td>2022-02-23 10:36:19</td>
                          <td>대기</td>
                          <td>
                            <a
                              className="btn btn-warning ms-2 log-action-btn"
                              href="/transaction/exchange/63/setstatus?status=12"
                            >
                              완료
                            </a>
                            <a
                              className="btn btn-success ms-2 log-action-btn"
                              href="/transaction/exchange/63/setstatus?status=10"
                            >
                              취소
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>62</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="108"
                            >
                              testu2
                            </a>
                          </td>
                          <td className="text-right">10,000</td>

                          <td>(대구은행) 12312124124142</td>

                          <td className="text-right">30,000</td>
                          <td className="text-right">.00</td>

                          <td>2022-02-19 21:14:30</td>
                          <td>2022-02-23 10:36:21</td>
                          <td>취소</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>61</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="108"
                            >
                              testu2
                            </a>
                          </td>
                          <td className="text-right">10,000</td>

                          <td>(대구은행) 12312124124142</td>

                          <td className="text-right">50,000</td>
                          <td className="text-right">.00</td>

                          <td>2022-02-19 21:10:08</td>
                          <td>2022-02-23 12:25:22</td>
                          <td>대기</td>
                          <td>
                            <a
                              className="btn btn-warning ms-2 log-action-btn"
                              href="/transaction/exchange/61/setstatus?status=12"
                            >
                              완료
                            </a>
                            <a
                              className="btn btn-success ms-2 log-action-btn"
                              href="/transaction/exchange/61/setstatus?status=10"
                            >
                              취소
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>60</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="108"
                            >
                              testu2
                            </a>
                          </td>
                          <td className="text-right">10,000</td>

                          <td>(대구은행) 12312124124142</td>

                          <td className="text-right">50,000</td>
                          <td className="text-right">.00</td>

                          <td>2022-02-19 21:02:03</td>
                          <td>2022-02-23 12:25:23</td>
                          <td>대기</td>
                          <td>
                            <a
                              className="btn btn-warning ms-2 log-action-btn"
                              href="/transaction/exchange/60/setstatus?status=12"
                            >
                              완료
                            </a>
                            <a
                              className="btn btn-success ms-2 log-action-btn"
                              href="/transaction/exchange/60/setstatus?status=10"
                            >
                              취소
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>59</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="108"
                            >
                              testu2
                            </a>
                          </td>
                          <td className="text-right">10,000</td>

                          <td>(대구은행) 12312124124142</td>

                          <td className="text-right">50,000</td>
                          <td className="text-right">.00</td>

                          <td>2022-02-19 20:59:29</td>
                          <td>2022-02-23 12:25:24</td>
                          <td>대기</td>
                          <td>
                            <a
                              className="btn btn-warning ms-2 log-action-btn"
                              href="/transaction/exchange/59/setstatus?status=12"
                            >
                              완료
                            </a>
                            <a
                              className="btn btn-success ms-2 log-action-btn"
                              href="/transaction/exchange/59/setstatus?status=10"
                            >
                              취소
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>58</td>
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
                          <td className="text-right">50,000</td>

                          <td>(KB국민은행)</td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2022-02-12 20:33:32</td>
                          <td>2022-02-13 16:20:52</td>
                          <td>대기</td>
                          <td>
                            <a
                              className="btn btn-warning ms-2 log-action-btn"
                              href="/transaction/exchange/58/setstatus?status=12"
                            >
                              완료
                            </a>
                            <a
                              className="btn btn-success ms-2 log-action-btn"
                              href="/transaction/exchange/58/setstatus?status=10"
                            >
                              취소
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>57</td>
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
                          <td className="text-right">50,000</td>

                          <td>(KB국민은행)</td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2022-02-12 20:32:33</td>
                          <td>2022-02-12 20:33:23</td>
                          <td>취소</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>56</td>
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
                          <td className="text-right">10,000</td>

                          <td>(KB국민은행)</td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2022-02-12 20:31:05</td>
                          <td>2022-02-12 20:31:35</td>
                          <td>취소</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>55</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="80"
                            >
                              test고고
                            </a>
                          </td>
                          <td className="text-right">20,000</td>

                          <td></td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2022-01-27 12:21:59</td>
                          <td>2022-01-27 12:22:09</td>
                          <td>완료</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>54</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td className="text-right">10,000</td>

                          <td></td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2022-01-25 10:40:53</td>
                          <td>2022-01-25 10:40:59</td>
                          <td>취소</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>53</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td className="text-right">50,000</td>

                          <td></td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2022-01-25 10:39:58</td>
                          <td>2022-01-25 10:40:03</td>
                          <td>취소</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>52</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td className="text-right">50,000</td>

                          <td></td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2022-01-25 10:39:09</td>
                          <td>2022-01-25 10:39:30</td>
                          <td>취소</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>51</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="80"
                            >
                              test고고
                            </a>
                          </td>
                          <td className="text-right">50,000</td>

                          <td></td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2022-01-20 14:57:33</td>
                          <td>2022-01-20 14:57:48</td>
                          <td>취소</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>50</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="80"
                            >
                              test고고
                            </a>
                          </td>
                          <td className="text-right">50,000</td>

                          <td></td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2022-01-20 14:35:08</td>
                          <td>2022-01-20 14:56:54</td>
                          <td>취소</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>49</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="80"
                            >
                              test고고
                            </a>
                          </td>
                          <td className="text-right">100,000</td>

                          <td></td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2022-01-19 14:08:15</td>
                          <td>2022-01-20 14:04:21</td>
                          <td>완료</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>48</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="80"
                            >
                              test고고
                            </a>
                          </td>
                          <td className="text-right">50,000</td>

                          <td></td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2022-01-19 14:07:22</td>
                          <td>2022-01-19 14:08:08</td>
                          <td>완료</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>47</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td className="text-right">10,000</td>

                          <td></td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2021-12-20 11:19:03</td>
                          <td>2021-12-20 11:19:11</td>
                          <td>완료</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>46</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="61"
                            >
                              ttt1
                            </a>
                          </td>
                          <td className="text-right">10,000</td>

                          <td></td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2021-12-17 14:53:37</td>
                          <td>2021-12-20 11:18:46</td>
                          <td>취소</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>45</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="61"
                            >
                              ttt1
                            </a>
                          </td>
                          <td className="text-right">10,000</td>

                          <td></td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2021-12-17 14:51:41</td>
                          <td>2021-12-20 11:19:27</td>
                          <td>취소</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>44</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="75"
                            >
                              본부장테스트
                            </a>
                          </td>
                          <td className="text-right">100,000</td>

                          <td></td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2021-12-17 10:12:23</td>
                          <td>2021-12-17 10:12:40</td>
                          <td>취소</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>43</td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              onClick={handleShow}
                              data-userid="72"
                            >
                              jackylu8
                            </a>
                          </td>
                          <td className="text-right">10,000</td>

                          <td></td>

                          <td className="text-right"></td>
                          <td className="text-right"></td>

                          <td>2021-12-16 17:26:08</td>
                          <td>2021-12-16 17:26:32</td>
                          <td>취소</td>
                          <td></td>
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
                          href="/transaction/exchange?&amp;page=0"
                          disabled="disabled"
                        >
                          <i className="ti ti-chevron-left"></i>
                          이전
                        </a>
                      </li>

                      <li className="page-item active">
                        <a
                          className="page-link"
                          href="/transaction/exchange?&amp;page=1"
                        >
                          1
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/transaction/exchange?&amp;page=2"
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
                          href="/transaction/exchange?&amp;page=2"
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

export default Exchange;

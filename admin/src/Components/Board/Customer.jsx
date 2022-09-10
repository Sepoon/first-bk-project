import React, { useState } from "react";

import Col from "react-bootstrap/esm/Col";
import UserInfo from '../Popup/UserInfo';

const Customer = () => {

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
                <h2 className="page-title">고객센터</h2>
              </div>
              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="/cs/list" method="get" className="d-flex">
                    <select
                      defaultValue={"DEFAULT"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="user">유저</option>
                      <option value="title">제목</option>
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
              총 <span>22</span>건
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
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select All"
                              id="form-check-all"
                            />
                          </th>
                          <th>
                            <a
                              className="sort-item"
                              data-sort="sender.nickName"
                            >
                              닉네임
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="title">
                              제목
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="created">
                              등록일시
                              <i className="ti ti-chevron-up"></i>
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
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="177"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="73"
                              onClick={handleShow}
                            >
                              <span>jackylu9</span>
                            </a>
                          </td>
                          <td>check</td>
                          <td>2022-03-07 12:22:27</td>
                          <td>
                            <span className="badge bg-warning me-1"></span> 답변
                            필요
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="177">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="177"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-177"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>check</h3>
                              <div style={{ marginbottom: "10px" }}>check</div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>aaaa</td>
                                  <td>
                                    <span>jackylu9</span>
                                  </td>
                                  <td>2022-03-07 12:22:27</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/177/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="176"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                              onClick={handleShow}
                            >
                              <span>tuser123</span>
                            </a>
                          </td>
                          <td>test notification</td>
                          <td>2022-03-05 09:33:00</td>
                          <td>
                            <span className="badge bg-warning me-1"></span> 답변
                            필요
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="176">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="176"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-176"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>test notification</h3>
                              <div style={{ marginbottom: "10px" }}>
                                test notification
                              </div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>test notification 2</td>
                                  <td>
                                    <span>tuser123</span>
                                  </td>
                                  <td>2022-03-05 09:33:00</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>test notification 3</td>
                                  <td>
                                    <span>tuser123</span>
                                  </td>
                                  <td>2022-03-05 09:33:00</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>test notification 4</td>
                                  <td>
                                    <span>tuser123</span>
                                  </td>
                                  <td>2022-03-05 09:33:00</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/176/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="175"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                              onClick={handleShow}
                            >
                              <span>본부장테스트</span>
                            </a>
                          </td>
                          <td>0225 테스트1</td>
                          <td>2022-02-25 16:26:49</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="175">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="175"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-175"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>0225 테스트1</h3>
                              <div style={{ marginbottom: "10px" }}>
                                테스트 1
                              </div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>답변</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-02-25 16:26:49</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>답변테스트</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-02-25 16:26:49</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>답변테스트2</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-02-25 16:26:49</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/175/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="174"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="75"
                              onClick={handleShow}
                            >
                              <span>본부장테스트</span>
                            </a>
                          </td>
                          <td>0225 테스트</td>
                          <td>2022-02-25 16:26:29</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="174">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="174"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-174"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>0225 테스트</h3>
                              <div style={{ marginbottom: "10px" }}>
                                테스트 입니다
                              </div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>ㅋㅋㅋ</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-02-25 16:26:29</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/174/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="173"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="106"
                              onClick={handleShow}
                            >
                              <span>test고고고</span>
                            </a>
                          </td>
                          <td>뮨의테스트제목2</td>
                          <td>2022-02-23 14:12:04</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="173">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="173"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-173"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>뮨의테스트제목2</h3>
                              <div style={{ marginbottom: "10px" }}>
                                ㅇㅇㅇㅈ2
                              </div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>ㅅㄷㄱ</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-02-23 14:12:04</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ㄹㄷㄹㄷ</td>
                                  <td>
                                    <span>test고고고</span>
                                  </td>
                                  <td>2022-02-23 14:12:04</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ㅉㅈ</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-02-23 14:12:04</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ㅇㅇㅇ</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-02-23 14:12:04</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ㅇㅇ</td>
                                  <td>
                                    <span>test고고고</span>
                                  </td>
                                  <td>2022-02-23 14:12:04</td>
                                  <td>
                                    {" "}
                                    <a
                                      href="https://update.squareonesoft.com/miniplay/web/contactus/106/1645593190011_다운로드.jpeg"
                                      target="_blank"
                                    >
                                      https://update.squareonesoft.com/miniplay/web/contactus/106/1645593190011_다운로드.jpeg
                                    </a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ㅇㅇ</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-02-23 14:12:04</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/173/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="172"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="106"
                              onClick={handleShow}
                            >
                              <span>test고고고</span>
                            </a>
                          </td>
                          <td>문의 제목쓰</td>
                          <td>2022-02-23 14:11:21</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="172">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="172"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-172"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>문의 제목쓰</h3>
                              <div style={{ marginbottom: "10px" }}>
                                테스트 내용
                              </div>
                              <a
                                href="https://update.squareonesoft.com/miniplay/web/contactus/106/1645593078713_다운로드.jpeg"
                                target="_blank"
                              >
                                https://update.squareonesoft.com/miniplay/web/contactus/106/1645593078713_다운로드.jpeg
                              </a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>ㅋㅌㅋ</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-02-23 14:11:21</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/172/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="171"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="108"
                              onClick={handleShow}
                            >
                              <span>testu2</span>
                            </a>
                          </td>
                          <td>test1</td>
                          <td>2022-02-19 21:35:47</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="171">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="171"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-171"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>test1</h3>
                              <div style={{ marginbottom: "10px" }}>
                                test111
                              </div>
                              <a
                                href="https://update.squareonesoft.com/miniplay/web/contactus/108/1645274142956_1636531105879_946b5fac7fe248809a8f5555fab02094.png"
                                target="_blank"
                              >
                                https://update.squareonesoft.com/miniplay/web/contactus/108/1645274142956_1636531105879_946b5fac7fe248809a8f5555fab02094.png
                              </a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>aaa</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-02-19 21:35:47</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>bbb</td>
                                  <td>
                                    <span>testu2</span>
                                  </td>
                                  <td>2022-02-19 21:35:47</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ccc</td>
                                  <td>
                                    <span>testu2</span>
                                  </td>
                                  <td>2022-02-19 21:35:47</td>
                                  <td>
                                    {" "}
                                    <a
                                      href="https://update.squareonesoft.com/miniplay/web/contactus/108/1645274637368_14_204_19.png"
                                      target="_blank"
                                    >
                                      https://update.squareonesoft.com/miniplay/web/contactus/108/1645274637368_14_204_19.png
                                    </a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>dddd</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-02-19 21:35:47</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/171/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="169"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="80"
                              onClick={handleShow}
                            >
                              <span>test고고</span>
                            </a>
                          </td>
                          <td>ㅗㅗ</td>
                          <td>2022-01-26 14:23:42</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="169">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="169"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-169"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>ㅗㅗ</h3>
                              <div style={{ marginbottom: "10px" }}>ㅎㅎ</div>
                              <a
                                href="https://update.squareonesoft.com/miniplay/web/contactus/80/1643174620662_다운로드.jpeg"
                                target="_blank"
                              >
                                https://update.squareonesoft.com/miniplay/web/contactus/80/1643174620662_다운로드.jpeg
                              </a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>&#39;</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-26 14:23:42</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/169/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="167"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="80"
                              onClick={handleShow}
                            >
                              <span>test고고</span>
                            </a>
                          </td>
                          <td>ㅇㅈㅇㄴㅇㅇㄴ</td>
                          <td>2022-01-21 10:46:31</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="167">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="167"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-167"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>ㅇㅈㅇㄴㅇㅇㄴ</h3>
                              <div style={{ marginbottom: "10px" }}>
                                ㅈㅇㅈㅇㅈㅇ
                              </div>
                              <a
                                href="https://update.squareonesoft.com/miniplay/web/contactus/80/1642729588020_다운로드.jpeg"
                                target="_blank"
                              >
                                https://update.squareonesoft.com/miniplay/web/contactus/80/1642729588020_다운로드.jpeg
                              </a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>ㄴㅂㄴㅂㄴㅃㄴ</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-21 10:46:31</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>뽀찌줨</td>
                                  <td>
                                    <span>test고고</span>
                                  </td>
                                  <td>2022-01-21 10:46:31</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>3233</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-21 10:46:31</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>자자</td>
                                  <td>
                                    <span>test고고</span>
                                  </td>
                                  <td>2022-01-21 10:46:31</td>
                                  <td>
                                    {" "}
                                    <a
                                      href="https://update.squareonesoft.com/miniplay/web/contactus/80/1642730069801_다운로드.jpeg"
                                      target="_blank"
                                    >
                                      https://update.squareonesoft.com/miniplay/web/contactus/80/1642730069801_다운로드.jpeg
                                    </a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>자세요</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-21 10:46:31</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/167/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="166"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="80"
                              onClick={handleShow}
                            >
                              <span>test고고</span>
                            </a>
                          </td>
                          <td>ddddd</td>
                          <td>2022-01-21 10:34:11</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="166">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="166"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-166"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>ddddd</h3>
                              <div style={{ marginbottom: "10px" }}>
                                dddㅇㅇㅇㅇㅇㅇ
                              </div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    로그인이 안되는경우 F5 새로고침후 재접속
                                    부탁드립니다.
                                  </td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-21 10:34:11</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/166/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="164"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="80"
                              onClick={handleShow}
                            >
                              <span>test고고</span>
                            </a>
                          </td>
                          <td>ㅇㅈㅇㅈ</td>
                          <td>2022-01-20 11:15:05</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="164">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="164"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-164"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>ㅇㅈㅇㅈ</h3>
                              <div style={{ marginbottom: "10px" }}>
                                ㅇㅇㅉㅇㅉㅉㅉ
                              </div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    양방 및 편법 부정한 배팅에 대한 제재 안내
                                  </td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-20 11:15:05</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/164/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="163"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="80"
                              onClick={handleShow}
                            >
                              <span>test고고</span>
                            </a>
                          </td>
                          <td>문 의</td>
                          <td>2022-01-20 10:48:50</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="163">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="163"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-163"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>문 의</h3>
                              <div style={{ marginbottom: "10px" }}>나무니</div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>????</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-20 10:48:50</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/163/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="162"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="80"
                              onClick={handleShow}
                            >
                              <span>test고고</span>
                            </a>
                          </td>
                          <td>ㅇㅇㅇㅇ</td>
                          <td>2022-01-20 09:57:22</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="162">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="162"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-162"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>ㅇㅇㅇㅇ</h3>
                              <div style={{ marginbottom: "10px" }}>
                                ㄲㄲㄲㄲㄲㄲㄱ
                              </div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>ㄲㄲㄲㄲㄱ</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-20 09:57:22</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ㅇㅇ이이이이이이이이</td>
                                  <td>
                                    <span>test고고</span>
                                  </td>
                                  <td>2022-01-20 09:57:22</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>11122</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-20 09:57:22</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/162/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="160"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="80"
                              onClick={handleShow}
                            >
                              <span>test고고</span>
                            </a>
                          </td>
                          <td>제목뿐</td>
                          <td>2022-01-19 13:39:06</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="160">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="160"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-160"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>제목뿐</h3>
                              <div style={{ marginbottom: "10px" }}>
                                내용은 안올라가네 문의사항. ' - '
                              </div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    로그인이 안되는경우 F5 새로고침후 재접속
                                    부탁드립니다.
                                  </td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-19 13:39:06</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/160/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="159"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="80"
                              onClick={handleShow}
                            >
                              <span>test고고</span>
                            </a>
                          </td>
                          <td>경기등록 안되나여</td>
                          <td>2022-01-19 13:32:06</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="159">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="159"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-159"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>경기등록 안되나여</h3>
                              <div style={{ marginbottom: "10px" }}>
                                경기가 하나도 안올라오는디? 안올라오는디? 안 올
                                라 오 는 데 ? 시 ㅂ ㅅ{" "}
                              </div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>??한줄밖에 보이지않네</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-19 13:32:06</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    ???여기서만 대화 가능인가 ㅇㅇㅇㅇ 뭐지
                                  </td>
                                  <td>
                                    <span>test고고</span>
                                  </td>
                                  <td>2022-01-19 13:32:06</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    길게 써도 한줄로만 표시. 어떻게 해야하려나
                                    이런 댓글 을 고도화해야하는건가
                                  </td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-19 13:32:06</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/159/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="158"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="80"
                              onClick={handleShow}
                            >
                              <span>test고고</span>
                            </a>
                          </td>
                          <td>111111</td>
                          <td>2022-01-19 10:54:58</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="158">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="158"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-158"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>111111</h3>
                              <div style={{ marginbottom: "10px" }}>
                                rewrewr
                              </div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>ddkdk</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-19 10:54:58</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>eeee</td>
                                  <td>
                                    <span>test고고</span>
                                  </td>
                                  <td>2022-01-19 10:54:58</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>dddddddd</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-19 10:54:58</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>가</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2022-01-19 10:54:58</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/158/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="155"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="73"
                              onClick={handleShow}
                            >
                              <span>jackylu9</span>
                            </a>
                          </td>
                          <td>dd</td>
                          <td>2021-12-16 11:35:23</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="155">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="155"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-155"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>dd</h3>
                              <div style={{ marginbottom: "10px" }}>ddd</div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>d</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-12-16 11:35:23</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ㅇㅇㅇㅇㅇㅇㅇㅈㅇㅈㅇㅈ</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-12-16 11:35:23</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/155/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="153"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                              onClick={handleShow}
                            >
                              <span>tuser123</span>
                            </a>
                          </td>
                          <td>sara test cs</td>
                          <td>2021-11-29 21:50:34</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="153">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="153"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-153"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>sara test cs</h3>
                              <div style={{ marginbottom: "10px" }}>
                                sara test cs
                              </div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>admin test reply</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-11-29 21:50:34</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>user reply</td>
                                  <td>
                                    <span>tuser123</span>
                                  </td>
                                  <td>2021-11-29 21:50:34</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>admin reply 2</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-11-29 21:50:34</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>user reply again - test alarm</td>
                                  <td>
                                    <span>tuser123</span>
                                  </td>
                                  <td>2021-11-29 21:50:34</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ok</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-11-29 21:50:34</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Test ok</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-11-29 21:50:34</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/153/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="152"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="61"
                              onClick={handleShow}
                            >
                              <span>ttt1</span>
                            </a>
                          </td>
                          <td>aaaa</td>
                          <td>2021-11-29 21:11:44</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="152">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="152"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-152"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>aaaa</h3>
                              <div style={{ marginbottom: "10px" }}>bbbbbb</div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>aaaa</td>
                                  <td>
                                    <span>ttt1</span>
                                  </td>
                                  <td>2021-11-29 21:11:44</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ccccccc</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-11-29 21:11:44</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>aaa</td>
                                  <td>
                                    <span>ttt1</span>
                                  </td>
                                  <td>2021-11-29 21:11:44</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    양방 및 편법 부정한 배팅에 대한 제재 안내
                                  </td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-11-29 21:11:44</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>test</td>
                                  <td>
                                    <span>ttt1</span>
                                  </td>
                                  <td>2021-11-29 21:11:44</td>
                                  <td>
                                    {" "}
                                    <a
                                      href="https://update.squareonesoft.com/miniplay/web/contactus/61/1638350454985_1053978_1479264158425.png"
                                      target="_blank"
                                    >
                                      https://update.squareonesoft.com/miniplay/web/contactus/61/1638350454985_1053978_1479264158425.png
                                    </a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ㅂ</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-11-29 21:11:44</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    **************** 안녕하세요 회원님
                                    집에듶어가
                                  </td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-11-29 21:11:44</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/152/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="147"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="3"
                              onClick={handleShow}
                            >
                              <span>tuser123</span>
                            </a>
                          </td>
                          <td>test</td>
                          <td>2021-11-07 17:21:14</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="147">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="147"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-147"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>test</h3>
                              <div style={{ marginbottom: "10px" }}>
                                testtesttest
                              </div>
                              <a
                                href="https://update.squareonesoft.com/miniplay/web/contactus/3/1636273261417_tree-736885__480.jpg"
                                target="_blank"
                              >
                                https://update.squareonesoft.com/miniplay/web/contactus/3/1636273261417_tree-736885__480.jpg
                              </a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>my test reply</td>
                                  <td>
                                    <span>tuser123</span>
                                  </td>
                                  <td>2021-11-07 17:21:14</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>my test reply 2</td>
                                  <td>
                                    <span>tuser123</span>
                                  </td>
                                  <td>2021-11-07 17:21:14</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>tsst</td>
                                  <td>
                                    <span>tuser123</span>
                                  </td>
                                  <td>2021-11-07 17:21:14</td>
                                  <td>
                                    {" "}
                                    <a
                                      href="https://update.squareonesoft.com/miniplay/web/contactus/3/1638023538136_woman.png"
                                      target="_blank"
                                    >
                                      https://update.squareonesoft.com/miniplay/web/contactus/3/1638023538136_woman.png
                                    </a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Test reply</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-11-07 17:21:14</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>게임 이용안내 및 규정</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-11-07 17:21:14</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Test</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-11-07 17:21:14</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/147/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="2"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="4"
                              onClick={handleShow}
                            >
                              <span>tuser2</span>
                            </a>
                          </td>
                          <td>having a problem logging in</td>
                          <td>2021-08-04 21:30:00</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="2">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="2"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-2"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>having a problem logging in</h3>
                              <div style={{ marginbottom: "10px" }}>
                                having a problem logging in
                              </div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    스포츠 사칭 피해 및 주의 안내에 대한 공지
                                  </td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-08-04 21:30:00</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    양방 및 편법 부정한 배팅에 대한 제재 안내
                                  </td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-08-04 21:30:00</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/2/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle list-checkbox"
                              type="checkbox"
                              aria-label="Select"
                              value="4"
                            />
                          </td>
                          <td>
                            <a
                              href="#"
                              className="open-user-info-modal"
                              data-userid="6"
                              onClick={handleShow}
                            >
                              <span>tuser4</span>
                            </a>
                          </td>
                          <td>why are these games not available?</td>
                          <td>2021-08-04 21:30:00</td>
                          <td>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </td>
                          <td className="text-end">
                            <a href="" className="expandButton" data-id="4">
                              열기
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red delete-item-btn ms-3"
                              data-id="4"
                            >
                              삭제
                            </a>
                          </td>
                        </tr>
                        <tr
                          style={{ display: "none" }}
                          id="expand-4"
                          className="expand-item"
                        >
                          <td colSpan="6">
                            <div style={{ padding: "20px" }}>
                              <h3>why are these games not available?</h3>
                              <div style={{ marginbottom: "10px" }}>
                                why are these games not available?
                              </div>
                              <a href="" target="_blank"></a>
                            </div>

                            <table className="table">
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>내용</th>
                                  <th>유저</th>
                                  <th>날짜</th>
                                  <th>파일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>hehe</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-08-04 21:30:00</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Frequently Asked Questions FAQ Guide</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-08-04 21:30:00</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    스포츠 사칭 피해 및 주의 안내에 대한 공지
                                  </td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-08-04 21:30:00</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>aaaaa</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-08-04 21:30:00</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>2222222</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-08-04 21:30:00</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>asdasdfadsf</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-08-04 21:30:00</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>집에가라</td>
                                  <td>
                                    <span>관리자</span>
                                  </td>
                                  <td>2021-08-04 21:30:00</td>
                                  <td>
                                    {" "}
                                    <a href="" target="_blank"></a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <div>
                              <input
                                type="checkbox"
                                className="showReplyCheckbox"
                              />{" "}
                              답변달기
                            </div>
                            <form
                              action="/cs/4/reply"
                              method="post"
                              encType="multipart/form-data"
                              style={{ display: "none" }}
                              className="replyForm"
                              id="replyForm"
                            >
                              <input
                                type="hidden"
                                name="_csrf"
                                value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                              />
                              <div className="card-header">
                                <h4 className="card-title">답변</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="form-group mb-3 row">
                                      <label className="form-label col-3 col-form-label">
                                        답변
                                      </label>
                                      <div className="col">
                                        <textarea
                                          className="form-control reply-text-box"
                                          placeholder="답변"
                                          rows="3"
                                          width="100%"
                                          id="reply"
                                          name="reply"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="card-footer text-end">
                                      <div className="d-flex justify-content-between">
                                        <a
                                          href="#"
                                          className="btn btn-secondary open-frequently-reply-modal"
                                        >
                                          FAQ
                                        </a>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          저장하기
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <div className="btn-list">
                      <span className="d-none d-sm-inline">
                        <a
                          data-url="/cs/bulkdelete"
                          href="#"
                          className="btn btn-outline-secondary"
                          id="bulk-delete-btn"
                        >
                          선택삭제
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal modal-blur fade"
          id="frequently-reply-modal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">FAQ</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row frequently-replies"></div>
              </div>
              <div className="modal-footer">
                <div className="ms-auto">
                  <a
                    href="#"
                    className="btn btn-link link-secondary"
                    data-bs-dismiss="modal"
                  >
                    닫기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UserInfo show={show} handleClose={handleClose}/>
    </>
  );
};

export default Customer;

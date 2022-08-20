import React from "react";

const Shopproduct = () => {
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
                <h2 className="page-title">마켓관리</h2>
              </div>
              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form
                    action="/shopproduct/list"
                    method="get"
                    className="d-flex"
                  >
                    <select
                      defaultValue={"DEFAULT"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="name">상품명</option>
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
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <span className="d-none d-sm-inline">
                    <a href="/shopproduct/create" className="btn btn-primary">
                      아이템 추가
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="total">
              총 <span>5</span>건
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
                          <th>
                            <a className="sort-item" data-sort="id">
                              번호
                            </a>
                          </th>
                          <th></th>
                          <th>
                            <a className="sort-item" data-sort="productName">
                              아이템명
                              <i className="ti ti-chevron-down"></i>
                            </a>
                          </th>
                          <th className="text-end">
                            <a className="sort-item" data-sort="price">
                              가격
                            </a>
                          </th>
                          <th>종류</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>135</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/shopproduct/135/1635335338207_3.jpg"
                              height="36"
                            />
                          </td>
                          <td>[볼교환권] 농구공</td>
                          <td className="text-end">100</td>
                          <td>아이템</td>
                          <td className="text-end">
                            <a
                              href="/shopproduct/edit/135"
                              className="btn btn-white"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/shopproduct/delete"
                              data-confirm="이 항목을 삭제하시겠습니까??"
                              data-id="135"
                            >
                              삭제
                            </a>

                            {/* <!--
                                            <a th:href="@{/shopproduct/edit/{id}(id=${shopproduct.id})}" className="text-btn">수정</a>
                                            <span className="a-divider">|</span>
                                            <a href="#" th:attr="data-id=${shopproduct.id}" className="text-red text-btn delete-link">삭제</a>
                                            --> */}
                          </td>
                        </tr>
                        <tr>
                          <td>137</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/shopproduct/137/1635335395127_4.jpg"
                              height="36"
                            />
                          </td>
                          <td>[볼교환권] 배구공</td>
                          <td className="text-end">100</td>
                          <td>아이템</td>
                          <td className="text-end">
                            <a
                              href="/shopproduct/edit/137"
                              className="btn btn-white"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/shopproduct/delete"
                              data-confirm="이 항목을 삭제하시겠습니까??"
                              data-id="137"
                            >
                              삭제
                            </a>

                            {/* <!--
                                            <a th:href="@{/shopproduct/edit/{id}(id=${shopproduct.id})}" className="text-btn">수정</a>
                                            <span className="a-divider">|</span>
                                            <a href="#" th:attr="data-id=${shopproduct.id}" className="text-red text-btn delete-link">삭제</a>
                                            --> */}
                          </td>
                        </tr>
                        <tr>
                          <td>136</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/shopproduct/136/1635335366975_2.jpg"
                              height="36"
                            />
                          </td>
                          <td>[볼교환권] 야구공</td>
                          <td className="text-end">100</td>
                          <td>아이템</td>
                          <td className="text-end">
                            <a
                              href="/shopproduct/edit/136"
                              className="btn btn-white"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/shopproduct/delete"
                              data-confirm="이 항목을 삭제하시겠습니까??"
                              data-id="136"
                            >
                              삭제
                            </a>

                            {/* <!--
                                            <a th:href="@{/shopproduct/edit/{id}(id=${shopproduct.id})}" className="text-btn">수정</a>
                                            <span className="a-divider">|</span>
                                            <a href="#" th:attr="data-id=${shopproduct.id}" className="text-red text-btn delete-link">삭제</a>
                                            --> */}
                          </td>
                        </tr>
                        <tr>
                          <td>134</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/shopproduct/134/1635335282729_1.jpg"
                              height="36"
                            />
                          </td>
                          <td>[볼교환권] 축구공</td>
                          <td className="text-end">100</td>
                          <td>아이템</td>
                          <td className="text-end">
                            <a
                              href="/shopproduct/edit/134"
                              className="btn btn-white"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/shopproduct/delete"
                              data-confirm="이 항목을 삭제하시겠습니까??"
                              data-id="134"
                            >
                              삭제
                            </a>

                            {/* <!--
                                            <a th:href="@{/shopproduct/edit/{id}(id=${shopproduct.id})}" className="text-btn">수정</a>
                                            <span className="a-divider">|</span>
                                            <a href="#" th:attr="data-id=${shopproduct.id}" className="text-red text-btn delete-link">삭제</a>
                                            --> */}
                          </td>
                        </tr>
                        <tr>
                          <td>142</td>
                          <td>
                            <img
                              src="https://update.squareonesoft.com/miniplay/admin/shopproduct/142/1642743682671_다운로드.jpeg"
                              height="36"
                            />
                          </td>
                          <td>오리</td>
                          <td className="text-end">350,000</td>
                          <td>아이템</td>
                          <td className="text-end">
                            <a
                              href="/shopproduct/edit/142"
                              className="btn btn-white"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-white text-red link-action-btn"
                              data-url="/shopproduct/delete"
                              data-confirm="이 항목을 삭제하시겠습니까??"
                              data-id="142"
                            >
                              삭제
                            </a>

                            {/* <!--
                                            <a th:href="@{/shopproduct/edit/{id}(id=${shopproduct.id})}" className="text-btn">수정</a>
                                            <span className="a-divider">|</span>
                                            <a href="#" th:attr="data-id=${shopproduct.id}" className="text-red text-btn delete-link">삭제</a>
                                            --> */}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shopproduct;

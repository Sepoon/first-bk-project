import React from "react";

const DistManagement = () => {
  return (
    <>
      <section className="page-wrapper">
        
        <div className="container-fluid">
          {/* <!-- Page title --> */}
          <div className="page-header d-print-none">
            <div className="row align-items-center">
              <div className="col">
                {/* <!-- Page pre-title -->
                <!--<div className="page-pretitle">
                    관리자메인 > 회원관리
                </div>--> */}
                <h2 className="page-title">총판회원관리</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  {/* <!-- <form th:action="@{/partner/list}" method="get" className="d-flex"> --> */}
                  <form className="d-flex">
                    <select
                      className="form-select w-auto"
                      name="searchBy"
                      id="partnerlist-searchBy"
                      defaultValue={"DEFAULT"}
                    >
                      <option value="">유저</option>
                      {/* <!--                                    <option th:selected="${searchBy} == 'nickname'? 'selected'" value="nickname">별명</option>--> */}
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
                      {/* <!-- <input type="text" name="search" className="form-control search-input" placeholder="검색…" aria-label="검색" th:value="${search}" id="partnerlist-search"/> --> */}
                      <input
                        type="text"
                        name="search"
                        className="form-control"
                        placeholder="검색…"
                        aria-label="검색"
                        defaultValue=""
                        id="partnerlist-search"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary ms-2">
                      검색
                    </button>
                  </form>
                </div>
              </div>
              {/* <!--                    <div className="col-auto ms-auto d-print-none">-->
<!--                        <div className="btn-list">-->
<!--                        <span className="d-none d-sm-inline">-->
<!--                            <th:block th:if="${partnerLevel == 1}">-->
<!--                                <a href="#" className="btn btn-primary" id="open-addto-modal">-->
<!--                                    총판 생성하기-->
<!--                                </a>-->
<!--                            </th:block>-->

<!--                        </span>-->
<!--                        </div>-->
<!--                    </div>--> */}
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
                          {/* <!--                                        <th className="w-1"><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all users"></th>-->
<!--                                        <th className="w-1">-->
<!--                                            번호 <i className="ti ti-chevron-up"></i>-->
<!--                                        </th>--> */}
                          <th style={{ width: "80px" }}>등급</th>
                          <th>닉네임</th>
                          <th className="text-end">회원수</th>
                          <th className="text-end">수익배당(%)</th>
                          <th className="text-end">스포츠(%)</th>
                          <th className="text-end">미니게임(%)</th>
                          <th className="text-end">카지노(%)</th>
                          <th className="text-end">실시간(%)</th>
                          <th className="text-end">배당금(수익)</th>
                          <th className="text-end">배당금(배팅)</th>
                        </tr>
                      </thead>
                      <tbody id="partner-table">
                        {/* <!-- <tr>
                                    <td className="level1">대본</td>
                                    <td>somename</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                </tr>
                                <tr>
                                    <td className="level2">부본</td>
                                    <td>somename</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                </tr>
                                <tr>
                                    <td className="level3">총판</td>
                                    <td>somename</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                    <td className="text-end">200</td>
                                </tr>
                                <tr>
                                    <td align="center" colspan="10">내용이 없습니다.</td>
                                </tr> --> */}
                        {/* <!--                                    <tr th:each ="partner : ${partners}">-->
<!--                                        <td>-->
<!--                                            <th:block th:if="${partner.partnerType == 1}">-->
<!--                                                <span className="badge bg-red">대본</span>-->
<!--                                            </th:block>-->
<!--                                            <th:block th:if="${partner.partnerType == 2}">-->
<!--                                                <span className="badge bg-orange">부본</span>-->
<!--                                            </th:block>-->
<!--                                            <th:block th:if="${partner.partnerType == 3}">-->
<!--                                                <span className="badge bg-green">총판</span>-->
<!--                                            </th:block>-->
<!--                                        </td>-->
<!--                                        <td>-->
<!--                                            <a th:href="@{/partner/detail/{id}(id=${partner.id})}">-->
<!--                                                <th:block th:if="${partner.partner1 != null}">-->
<!--                                                    <u th:utext="${partner.nickName} + ' (' + ${partner.partner1} + ')'"></u>-->
<!--                                                </th:block>-->
<!--                                                <th:block th:unless="${partner.partner1 != null}">-->
<!--                                                    <u th:utext="${partner.nickName}"></u>-->
<!--                                                </th:block>-->
<!--                                            </a>-->
<!--                                        </td>-->
<!--                                        <td th:utext="${partner.numChildUsers}" className="text-end">...</td>-->
<!--                                        <td th:utext="${partner.partnerDepositPct}" className="text-end">...</td>-->
<!--                                        <td th:utext="${partner.partnerPrematchPct}" className="text-end">...</td>-->
<!--                                        <td th:utext="${partner.partnerMinigamePct}" className="text-end">...</td>-->
<!--                                        <td th:utext="${partner.partnerCasinoPct}" className="text-end">...</td>-->
<!--                                        <td th:utext="${partner.partnerInplayPct}" className="text-end">...</td>-->
<!--                                        <td className="text-end"></td>-->
<!--                                        <td className="text-end"></td>-->
<!--                                    </tr>--> */}
                      </tbody>
                    </table>
                  </div>
                  {/* <!-- <div className="card-footer d-flex align-items-center">
                        <div className="card-footer d-flex align-items-center">
                            <div th:replace="~{fragments/general.html :: pagination(mainPath= ${@urlService.getFullRequestUrlWithoutPage()}, page = ${page}, pageCount = ${(totalItemCount / pageSize) + (totalItemCount % pageSize != 0 ? 1 : 0)})}"> </div>
                        </div>
                    </div> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DistManagement;

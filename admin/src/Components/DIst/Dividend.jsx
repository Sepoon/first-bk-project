import React from "react";

const Dividend = () => {
  return (
    <>
      <section className="page-wrapper">
        
        <div className="container-fluid">
          {/* <!-- Page title --> */}
          <div className="page-header d-print-none">
            <div className="row align-items-center">
              <div className="col">
                <h2 className="page-title">배당관리</h2>
              </div>
              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <form action="/partner/logs" method="get" className="d-flex">
                    <select
                      defaultValue={"default"}
                      className="form-select w-auto"
                      name="searchBy"
                    >
                      <option value="partner">총판ID</option>
                      <option value="user">유저ID</option>
                      {/* <!--                                <option th:selected="${searchBy} == 'partnername'? 'selected'" value="partnername">총판</option>-->
<!--                                <option th:selected="${searchBy} == 'nickname'? 'selected'" value="nickname">유저명</option>--> */}
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
          {/* <!--        <div className="total">-->
<!--            건수 : 0-->
<!--        </div>--> */}

          <div className="total">
            총 <span>827</span>건
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
                            <a className="sort-item" data-sort="partnerName">
                              총판ID
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="userName">
                              회원ID
                            </a>
                          </th>
                          <th>
                            <a className="sort-item" data-sort="created">
                              일시
                              <i className="ti ti-chevron-up"></i>
                            </a>
                          </th>
                          <th className="text-right">
                            <a className="sort-item" data-sort="totalAmount">
                              금액
                            </a>
                          </th>
                          <th className="text-center">
                            <a className="sort-item" data-sort="changeDesc">
                              내용
                            </a>
                          </th>
                          <th className="text-right">
                            <a className="sort-item" data-sort="pctAllocation">
                              %
                            </a>
                          </th>
                          <th className="text-right">
                            <a
                              className="sort-item"
                              data-sort="allocationAmount"
                            >
                              배당
                            </a>
                          </th>
                          <th className="text-right">
                            <a
                              className="sort-item"
                              data-sort="afterDepositValue"
                            >
                              수익배당합
                            </a>
                          </th>
                          <th className="text-right">
                            <a className="sort-item" data-sort="afterBetValue">
                              배팅배당합
                            </a>
                          </th>
                          <th className="text-right">배당합</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>jackylu4</span>
                              (총판)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:54:01</td>
                          <td className="text-right">10,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">.5</td>
                          <td className="text-right">50</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>17,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>33,190</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>50,390</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>jackylu3</span>
                              (부본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:54:01</td>
                          <td className="text-right">10,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">1.9</td>
                          <td className="text-right">140</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>1,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>42,372</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>43,572</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>jackylu1</span>
                              (대본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:54:01</td>
                          <td className="text-right">10,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">2.5</td>
                          <td className="text-right">110</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>30,900</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>40,166</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>71,066</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>jackylu4</span>
                              (총판)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:53:01</td>
                          <td className="text-right">10,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">.5</td>
                          <td className="text-right">50</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>17,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>32,790</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>49,990</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>jackylu3</span>
                              (부본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:53:01</td>
                          <td className="text-right">10,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">1.9</td>
                          <td className="text-right">140</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>1,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>41,252</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>42,452</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>jackylu1</span>
                              (대본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:53:01</td>
                          <td className="text-right">10,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">2.5</td>
                          <td className="text-right">110</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>30,900</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>39,286</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>70,186</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>jackylu4</span>
                              (총판)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:53:01</td>
                          <td className="text-right">20,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">.5</td>
                          <td className="text-right">100</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>17,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>32,890</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>50,090</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>jackylu3</span>
                              (부본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:53:01</td>
                          <td className="text-right">20,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">1.9</td>
                          <td className="text-right">280</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>1,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>41,532</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>42,732</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>jackylu1</span>
                              (대본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:53:01</td>
                          <td className="text-right">20,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">2.5</td>
                          <td className="text-right">220</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>30,900</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>39,506</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>70,406</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>jackylu4</span>
                              (총판)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:53:01</td>
                          <td className="text-right">50,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">.5</td>
                          <td className="text-right">250</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>17,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>33,140</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>50,340</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>jackylu3</span>
                              (부본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:53:01</td>
                          <td className="text-right">50,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">1.9</td>
                          <td className="text-right">700</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>1,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>42,232</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>43,432</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>jackylu1</span>
                              (대본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:53:01</td>
                          <td className="text-right">50,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">2.5</td>
                          <td className="text-right">550</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>30,900</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>40,056</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>70,956</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>jackylu4</span>
                              (총판)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:49:01</td>
                          <td className="text-right">5,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">.5</td>
                          <td className="text-right">25</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>17,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>32,365</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>49,565</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>jackylu3</span>
                              (부본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:49:01</td>
                          <td className="text-right">5,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">1.9</td>
                          <td className="text-right">70</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>1,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>40,062</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>41,262</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>jackylu1</span>
                              (대본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:49:01</td>
                          <td className="text-right">5,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">2.5</td>
                          <td className="text-right">55</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>30,900</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>38,351</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>69,251</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>jackylu4</span>
                              (총판)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:49:01</td>
                          <td className="text-right">10,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">.5</td>
                          <td className="text-right">50</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>17,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>32,415</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>49,615</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>jackylu3</span>
                              (부본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:49:01</td>
                          <td className="text-right">10,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">1.9</td>
                          <td className="text-right">140</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>1,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>40,202</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>41,402</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>jackylu1</span>
                              (대본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:49:01</td>
                          <td className="text-right">10,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">2.5</td>
                          <td className="text-right">110</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>30,900</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>38,461</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>69,361</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>jackylu4</span>
                              (총판)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:49:01</td>
                          <td className="text-right">50,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">.5</td>
                          <td className="text-right">250</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>17,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>32,665</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>49,865</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>jackylu3</span>
                              (부본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:49:01</td>
                          <td className="text-right">50,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">1.9</td>
                          <td className="text-right">700</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>1,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>40,902</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>42,102</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>jackylu1</span>
                              (대본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:49:01</td>
                          <td className="text-right">50,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">2.5</td>
                          <td className="text-right">550</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>30,900</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>39,011</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>69,911</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>jackylu4</span>
                              (총판)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:49:01</td>
                          <td className="text-right">15,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">.5</td>
                          <td className="text-right">75</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>17,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>32,740</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>49,940</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>jackylu3</span>
                              (부본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:49:01</td>
                          <td className="text-right">15,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">1.9</td>
                          <td className="text-right">210</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>1,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>41,112</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>42,312</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>jackylu1</span>
                              (대본)
                            </a>
                          </td>
                          <td>kaka11</td>
                          <td>2022-03-07 13:49:01</td>
                          <td className="text-right">15,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">2.5</td>
                          <td className="text-right">165</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>30,900</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>39,176</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>70,076</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>jackylu4</span>
                              (총판)
                            </a>
                          </td>
                          <td>jackylu9</td>
                          <td>2022-03-07 12:58:31</td>
                          <td className="text-right">300,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">.5</td>
                          <td className="text-right">1,500</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>17,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>32,340</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>49,540</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>jackylu3</span>
                              (부본)
                            </a>
                          </td>
                          <td>jackylu9</td>
                          <td>2022-03-07 12:58:31</td>
                          <td className="text-right">300,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">1.9</td>
                          <td className="text-right">4,200</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>1,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>39,992</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>41,192</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>jackylu1</span>
                              (대본)
                            </a>
                          </td>
                          <td>jackylu9</td>
                          <td>2022-03-07 12:58:31</td>
                          <td className="text-right">300,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">2.5</td>
                          <td className="text-right">3,300</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>30,900</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>38,296</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>69,196</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>jackylu1</span>
                              (대본)
                            </a>
                          </td>
                          <td>kaka13</td>
                          <td>2022-03-07 12:31:01</td>
                          <td className="text-right">5,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">2.5</td>
                          <td className="text-right">125</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>30,900</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>34,996</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu1">
                              <span>65,896</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>jackylu4</span>
                              (총판)
                            </a>
                          </td>
                          <td>jackylu9</td>
                          <td>2022-03-07 12:22:01</td>
                          <td className="text-right">20,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">.5</td>
                          <td className="text-right">100</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>17,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>30,540</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu4">
                              <span>47,740</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                    <td th:utext="${log.id}"></td>-->
<!--                                    <td><a th:href="@{/user/{id}(id=${log.userId})}" th:utext="${log.userName}"></a></td>-->
<!--                                    <td th:utext="${@thUtil.renderTransactionPointLogActionType(log.actionType)}">...</td>--> */}
                          <td>
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>jackylu3</span>
                              (부본)
                            </a>
                          </td>
                          <td>jackylu9</td>
                          <td>2022-03-07 12:22:01</td>
                          <td className="text-right">20,000</td>
                          <td className="text-center"></td>
                          <td className="text-right">1.9</td>
                          <td className="text-right">280</td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>1,200</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>34,952</span>
                            </a>
                          </td>
                          <td className="text-right">
                            <a href="/partner/logs?searchBy=partnername&amp;search=jackylu3">
                              <span>36,152</span>
                            </a>
                          </td>
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
                          href="/partner/logs?&amp;page=0"
                          disabled="disabled"
                        >
                          <i className="ti ti-chevron-left"></i>
                          이전
                        </a>
                      </li>

                      <li className="page-item active">
                        <a
                          className="page-link"
                          href="/partner/logs?&amp;page=1"
                        >
                          1
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/partner/logs?&amp;page=2"
                        >
                          2
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/partner/logs?&amp;page=3"
                        >
                          3
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/partner/logs?&amp;page=4"
                        >
                          4
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/partner/logs?&amp;page=5"
                        >
                          5
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/partner/logs?&amp;page=6"
                        >
                          6
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/partner/logs?&amp;page=7"
                        >
                          7
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/partner/logs?&amp;page=8"
                        >
                          8
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/partner/logs?&amp;page=9"
                        >
                          9
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/partner/logs?&amp;page=10"
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
                          href="/partner/logs?&amp;page=28"
                        >
                          28
                        </a>
                      </li>

                      {/* <!--        <th:block th:each="pageNum: ${#numbers.sequence(1, pageCount)}">-->
<!--            <li className="page-item" th:classappend="${pageNum} == ${page}? 'active'">-->
<!--                <a className="page-link" th:href="${mainPath} + '&page=' + ${pageNum}" th:text="${pageNum}"-->
<!--                   th:disabled="${pageNum} == ${page}? 'disabled'"></a>-->
<!--            </li>-->
<!--        </th:block>--> */}
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/partner/logs?&amp;page=2"
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
                  action="/partner/createlog"
                  method="post"
                  className="card"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                  />
                  <div className="card-header">
                    <h4 className="card-title">배당추가</h4>
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
                          구분
                        </label>
                        <div className="col">
                          <select
                            className="form-select"
                            id="allocationType"
                            name="allocationType"
                          >
                            <option value="1">수익배당</option>
                            <option value="10">배팅배당</option>
                          </select>
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

export default Dividend;

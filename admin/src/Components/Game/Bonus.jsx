import React from 'react'

const Bonus = () => {
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
                <h2 className="page-title">보너스</h2>
              </div>

              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <span className="d-none d-sm-inline">
                    <a
                      href="#"
                      className="btn btn-primary"
                      id="create-bonus-btn"
                    >
                      추가하기
                    </a>
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
                    <table className="table card-table table-vcenter text-nowrap datatable">
                      <thead>
                        <tr>
                          {/* <!--                                        <th className="w-1"><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all users"></th>--> */}
                          <th>이름</th>
                          <th className="text-right">배당</th>
                          <th className="text-right">폴더수</th>
                          <th className="text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {/* <!--                                        <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select"></td>--> */}
                          <td>3폴더 이상</td>
                          <td className="text-right">1.03000</td>
                          <td className="text-right">3</td>
                          <td className="text-center">
                            <a
                              href="#"
                              className="btn btn-white edit-btn"
                              data-id="-1"
                              data-price="1.030"
                              data-name="3폴더 이상"
                              data-baseline="3"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-secondary delete-btn"
                              data-id="-1"
                            >
                              삭제하기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                        <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select"></td>--> */}
                          <td>6폴더 이상</td>
                          <td className="text-right">1.06000</td>
                          <td className="text-right">6</td>
                          <td className="text-center">
                            <a
                              href="#"
                              className="btn btn-white edit-btn"
                              data-id="-2"
                              data-price="1.060"
                              data-name="6폴더 이상"
                              data-baseline="6"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-secondary delete-btn"
                              data-id="-2"
                            >
                              삭제하기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          {/* <!--                                        <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select"></td>--> */}
                          <td>9폴더 이상</td>
                          <td className="text-right">1.09000</td>
                          <td className="text-right">9</td>
                          <td className="text-center">
                            <a
                              href="#"
                              className="btn btn-white edit-btn"
                              data-id="-3"
                              data-price="1.090"
                              data-name="9폴더 이상"
                              data-baseline="9"
                            >
                              수정
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-secondary delete-btn"
                              data-id="-3"
                            >
                              삭제하기
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <!--                            <div className="card-footer d-flex align-items-center">--> */}
                  {/* <!--                                <div className="btn-list">--> */}
                  {/* <!--                                    <span className="d-none d-sm-inline">--> */}
                  {/* <!--                                        <a href="#" className="btn btn-outline-secondary">--> */}
                  {/* <!--                                            삭제하기--> */}
                  {/* <!--                                        </a>--> */}
                  {/* <!--                                    </span>--> */}
                  {/* <!--                                </div>--> */}
                  {/* <!--                                &lt;!&ndash;<div th:replace="~{fragments/general.html :: pagination(mainPath= ${@urlService.getFullRequestUrlWithoutPage()}, page = ${page}, pageCount = ${(totalItemCount / pageSize) + (totalItemCount % pageSize != 0 ? 1 : 0)})}"> </div>&ndash;&gt;--> */}

                  {/* <!--                            </div>--> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal modal-blur fade"
          id="bonus-modal"
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
                <h5 className="modal-title">배당 수정</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-1 row">
                      <label className="form-label col-4 col-form-label">
                        제목
                      </label>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby=""
                          placeholder="아이디"
                          defaultValue=""
                          name="name"
                          id="bonus-name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-1 row">
                      <label className="form-label col-4 col-form-label">
                        폴더수
                      </label>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby=""
                          placeholder="폴더수"
                          defaultValue=""
                          name="baseline"
                          id="bonus-baseline"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-1 row">
                      <label className="form-label col-4 col-form-label">
                        배당
                      </label>
                      <div className="col">
                        <input
                          type="number"
                          className="form-control"
                          aria-describedby=""
                          placeholder="배당"
                          defaultValue=""
                          name="price"
                          id="bonus-price"
                          step=".01"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                {/* <!--<a href="#" className="btn btn-link link-secondary" data-bs-dismiss="modal">
                            닫기
                        </a>--> */}
                <div className="ms-auto">
                  <a
                    href="#"
                    className="btn btn-link link-secondary"
                    data-bs-dismiss="modal"
                  >
                    닫기
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary edit-submit-btn"
                    data-bs-dismiss="modal"
                  >
                    수정하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bonus
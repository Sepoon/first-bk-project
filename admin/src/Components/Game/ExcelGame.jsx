import React from "react";

const ExcelGame = () => {
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
                <h2 className="page-title">엑셀경기등록</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-deck row-cards">
              <div className="col-12">
                <div className="card">
                  <form
                    method="post"
                    action="/fixture/excel/create"
                    className="card"
                    encType="multipart/form-data"
                  >
                    <input
                      type="hidden"
                      name="_csrf"
                      value="e2aead1d-c7cd-428e-9f0e-657ee042ee6e"
                    />
                    <div className="card-header">
                      <h4 className="card-title">엑셀경기등록</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group mb-3 row">
                            <label className="form-label col-3 col-form-label pt-0">
                              경기구분
                            </label>
                            <div className="col">
                              <label className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="fixtureType"
                                  defaultChecked=""
                                />
                                <span className="form-check-label">
                                  승무패/핸디캡/언더오버{" "}
                                </span>
                              </label>
                              {/* <!--                                                    <label className="form-check form-check-inline">-->
<!--                                                        <input className="form-check-input" type="radio" name="fixtureType">-->
<!--                                                        <span className="form-check-label">스페셜</span>-->
<!--                                                    </label>-->
<!--                                                    <label className="form-check form-check-inline">-->
<!--                                                        <input className="form-check-input" type="radio" name="fixtureType">-->
<!--                                                        <span className="form-check-label">라이브</span>-->
<!--                                                    </label>--> */}
                              <label className="form-check form-check-inline">
                                <a
                                  href="/fixture/excel/template"
                                  className="btn btn-outline-secondary"
                                >
                                  일반액셀다운로드
                                </a>
                              </label>
                              {/* <!--                                                    <label className="form-check form-check-inline">-->
<!--                                                        <a href="#" className="btn btn-outline-secondary">스페셜/라이브 액셀다운로드</a>-->
<!--                                                    </label>--> */}
                            </div>
                          </div>
                          <div className="form-group mb-3 row">
                            <label className="form-label col-3 col-form-label pt-0">
                              등록방식
                            </label>
                            <div className="col">
                              <label className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value="1"
                                  id="registerType1"
                                  name="registerType"
                                />
                                <span className="form-check-label">
                                  바로등록{" "}
                                </span>
                              </label>
                              <label className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value="2"
                                  defaultChecked="checked"
                                  id="registerType2"
                                  name="registerType"
                                />
                                <span className="form-check-label">
                                  등록대기{" "}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="form-group mb-3 row">
                            <label className="form-label col-3 col-form-label">
                              파일업로드
                            </label>
                            <div className="col">
                              <input
                                type="file"
                                className="filepond"
                                name="excelUpload"
                                multiple
                                data-allow-reorder="true"
                                data-max-file-size="3MB"
                                data-max-files="1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-end">
                      <div className="d-flex">
                        {/* <!--<a href="#" className="btn btn-link">초기화</a>--> */}
                        <button
                          type="submit"
                          className="btn btn-primary ms-auto"
                        >
                          등록
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExcelGame;

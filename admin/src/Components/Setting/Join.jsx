import React from "react";

const Join = () => {
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
                <h2 className="page-title">회원가입 설정</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-cards mb-3">
              <div className="col-12">
                <form
                  action="/setting/registration"
                  method="post"
                  className="card"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    defaultValue="070255fa-fb29-4261-be5e-bd69f333c5b6"
                  />
                  <div className="card-header">
                    <h4 className="card-title">회원가입 설정</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label pt-0">
                            추천코드창
                          </label>
                          <div className="col">
                            <label className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="showReferrerContainer1"
                                name="showReferrerContainer"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_showReferrerContainer"
                                defaultValue="on"
                              />
                              <span className="form-check-label">보이기</span>
                            </label>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            회원가입시 권한
                          </label>
                          <div className="col">
                            <select
                              className="form-select"
                              id="initialRegisterLevel"
                              name="initialRegisterLevel"
                              defaultValue={"default"}
                            >
                              <option value="0">[0] 가입대기1</option>
                              <option value="1">[1] 1등급</option>
                              <option value="2">[2] 2등급</option>
                              <option value="3">[3] 3등급</option>
                              <option value="4">[4] 4등급</option>
                              <option value="5">[5] 5등급</option>
                            </select>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label pt-0">
                            추천인제도 사용
                          </label>
                          <div className="col">
                            <label className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="userReferrerPolicy1"
                                name="userReferrerPolicy"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_userReferrerPolicy"
                                defaultValue="on"
                              />
                              <span className="form-check-label">사용</span>
                            </label>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            테스트아이디
                          </label>
                          <div className="col">
                            <textarea
                              className="form-control"
                              name="fakeUsernames"
                              rows={3}
                              placeholder="가라아이디.."
                              id="fakeUsernames"
                              defaultValue={"tuser1 tuser2 aras momo"}
                            />

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label pt-0">
                            핸드폰 입력
                          </label>
                          <div className="col">
                            <label className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="showCellPhone1"
                                name="showCellPhone"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_showCellPhone"
                                defaultValue="on"
                              />
                              <span className="form-check-label">보이기</span>
                            </label>
                            <label className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inputCellPhone1"
                                name="inputCellPhone"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_inputCellPhone"
                                defaultValue="on"
                              />
                              <span className="form-check-label">필수입력</span>
                            </label>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            회원가입시 포인트
                          </label>
                          <div className="col">
                            <div className="input-group mb-2">
                              <input
                                type="number"
                                className="form-control"
                                placeholder=""
                                autoComplete="off"
                                id="registrationPoints"
                                name="registrationPoints"
                                defaultValue="20000"
                              />
                              <span className="input-group-text">점</span>
                            </div>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            추천인 포인트
                          </label>
                          <div className="col">
                            <div className="input-group mb-2">
                              <input
                                type="number"
                                className="form-control"
                                placeholder=""
                                autoComplete="off"
                                id="referrerPoints"
                                name="referrerPoints"
                                defaultValue="20000"
                              />
                              <span className="input-group-text">점</span>
                            </div>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            가입환영메세지
                          </label>
                          <div className="col">
                            <textarea
                              className="form-control"
                              name="registrationWelcomeMessage"
                              rows={3}
                              placeholder="가라아이디.."
                              id="registrationWelcomeMessage"
                              defaultValue={"가입을 환영합니다!!!"}
                            />

                            <small className="form-hint">* 쪽지로 날라감</small>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-end">
                    <div className="d-flex">
                      {/* <!--<a href="#" className="btn btn-link">초기화</a>--> */}
                      <button type="submit" className="btn btn-primary ms-auto">
                        저장하기
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

export default Join;

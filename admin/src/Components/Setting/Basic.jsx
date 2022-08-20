import React from 'react'

const Basic = () => {
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
                {/* <!-- Page pre-title -->
                        <!--<div className="page-pretitle">
                            관리자메인 > 회원관리
                        </div>--> */}
                <h2 className="page-title">기본환경 설정</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-cards mb-3">
              <div className="col-12">
                <form
                  action="/setting/general"
                  method="post"
                  className="card"
                  id="basicSettingForm"
                  encType="multipart/form-data"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    defaultValue="070255fa-fb29-4261-be5e-bd69f333c5b6"
                  />

                  <div className="card-header">
                    <h4 className="card-title">기본설정</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            홈페이지 제목
                          </label>
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              aria-describedby
                              placeholder="홈페이지 제목"
                              id="homepageTitle"
                              name="homepageTitle"
                              defaultValue="miniplay 수정 중"
                            />

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            로고
                          </label>
                          <div className="col">
                            <div if="${!setting.homepageLogo.isEmpty}">
                              {/* <!--<img th:src="${setting.homepageLogo}">--> */}
                              <a
                                href=""
                                target="_blank"
                                style={{ fontsize: "11px" }}
                              >
                                <span></span>
                              </a>
                              <br />
                              <br />
                            </div>
                            <input
                              type="file"
                              className="filepond"
                              name="logoImage"
                              multiple
                              data-allow-reorder="true"
                              data-max-file-size="3MB"
                              data-max-files="1"
                            />
                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            색
                          </label>
                          <div className="col">
                            <input
                              type="color"
                              id="homepageColor"
                              className="form-control form-control-color"
                              aria-describedby=""
                              title="Choose your color"
                              name="homepageColor"
                              defaultValue="#8e18cd"
                            />

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>

                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label pt-0">
                            회원가입허용
                          </label>
                          <div className="col">
                            <label className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="allowUserRegister1"
                                name="allowUserRegister"
                                defaultValue="true"
                              />

                              <input
                                type="hidden"
                                name="_allowUserRegister"
                                defaultValue="on"
                              />

                              <span className="form-check-label"></span>
                            </label>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            자동로그아웃시간
                          </label>
                          <div className="col">
                            <div className="input-group mb-2">
                              <input
                                type="number"
                                className="form-control"
                                autoComplete="off"
                                id="automaticLogoutMinutes"
                                name="automaticLogoutMinutes"
                                defaultValue={30}
                              />

                              <span className="input-group-text">분</span>
                            </div>
                            <small className="form-hint">* 최대60분</small>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            현재접속자시간
                          </label>
                          <div className="col">
                            <div className="input-group mb-2">
                              <input
                                type="number"
                                className="form-control"
                                autoComplete="off"
                                id="currentLoginHours"
                                name="currentLoginHours"
                                defaultValue={30}
                              />

                              <span className="input-group-text">분</span>
                            </div>
                            <small className="form-hint">
                              * 설정값 이내의 접속자를 현재 접속자로 인정
                            </small>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label pt-0">
                            해외IP 접속허용
                          </label>
                          <div className="col">
                            <label className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="allowForeignIPs1"
                                name="allowForeignIPs"
                                defaultValue="true"
                              />

                              <input
                                type="hidden"
                                name="_allowForeignIPs"
                                defaultValue="on"
                              />

                              <span className="form-check-label"></span>
                            </label>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            관리자접근허용 IP
                          </label>
                          <div className="col">
                            <textarea
                              className="form-control"
                              name="allowAdminIPs"
                              rows={3}
                              placeholder="관리자접근허용 IP.."
                              id="allowAdminIPs"
                              defaultValue={
                                "                              127.0.0.1\n                            "
                              }
                            />

                            <small className="form-hint">
                              * 입력된 IP의 컴퓨터만 관리자에 접근할 수 있음.
                              <br />* 123.123.+ 도 입력 가능. (엔터로 구분)
                            </small>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            최소적립포인트
                            <br />
                            전환
                          </label>
                          <div className="col">
                            <div className="input-group mb-2">
                              <input
                                type="number"
                                className="form-control"
                                autoComplete="off"
                                id="minPointTransfer"
                                name="minPointTransfer"
                                defaultValue={1000}
                              />

                              <span className="input-group-text">원</span>
                            </div>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            서버점검시작
                          </label>
                          <div className="col">
                            <div className="row g-2">
                              <div className="col">
                                <input
                                  readOnly
                                  type="text"
                                  className="form-control"
                                  placeholder="yyyy-MM-dd hh:mm:ss A"
                                  id="serverMaintenanceStartDate"
                                  name="serverMaintenanceStartDate"
                                  defaultValue="2022-03-07 01:13:56 오후"
                                />
                              </div>
                              <div className="col-auto">
                                <a
                                  href="#"
                                  className="btn btn-white btn-icon"
                                  aria-label="Button"
                                  id="setCurrentTime"
                                >
                                  현재시간으로 설정
                                </a>
                              </div>
                            </div>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            서버점검종료
                          </label>
                          <div className="col">
                            <div className="row g-2">
                              <div className="col">
                                <input
                                  readOnly
                                  type="text"
                                  className="form-control"
                                  placeholder="yyyy-MM-dd hh:mm:ss A"
                                  id="serverMaintenanceEndDate"
                                  name="serverMaintenanceEndDate"
                                  defaultValue="2022-03-07 05:13:56 오후"
                                />
                              </div>
                              <div className="col-auto">
                                <a
                                  href="#"
                                  className="btn btn-white btn-icon text-center"
                                  aria-label="Button"
                                  id="setNext4HoursTime"
                                >
                                  4시간후로 설정
                                </a>
                              </div>
                            </div>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            사이트 종류
                          </label>
                          <div className="col">
                            <select
                              className="form-select"
                              id="siteType"
                              name="siteType"
                              defaultValue={"default"}
                            >
                              <option value="A">타입 A</option>
                              <option value="B">타입 B</option>
                            </select>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>

                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            최고관리자
                          </label>
                          <div className="col">
                            <select
                              className="form-select"
                              id="highestAdmin"
                              name="highestAdmin"
                              defaultValue={"default"}
                            >
                              <option value="tuser1">tuser123</option>

                              <option value="testu2">testu2</option>
                            </select>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        {/* <!-- <div className="form-group mb-3 row">
                                            <label className="form-label col-3 col-form-label">이름(별명) 표시</label>
                                            <div className="col">
                                                <div className="input-group mb-2">
                                                    <input type="number" className="form-control" autoComplete="off" th:field="*{numNicknameCharacters}">
                                                    <span className="input-group-text">자리만 표시</span>
                                                </div>
                                                <small className="form-hint">
                                                    * 영숫자 2글자 = 한글 1글자
                                                </small>
                                                <div className="invalid-feedback d-block" th:if="${#fields.hasErrors('numNicknameCharacters')}" th:errors="*{numNicknameCharacters}"></div>
                                                <div className="msg invalid-feedback d-block"></div>
                                            </div>
                                        </div>--> */}
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label pt-0">
                            중복접속허용
                          </label>
                          <div className="col">
                            <label className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="allowMultipleLoginSessions1"
                                name="allowMultipleLoginSessions"
                                defaultValue="true"
                              />

                              <input
                                type="hidden"
                                name="_allowMultipleLoginSessions"
                                defaultValue="on"
                              />

                              <span className="form-check-label"></span>
                            </label>
                            <div className="clearfix"></div>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            관리자 페이지당
                            <br />
                            라인수
                          </label>
                          <div className="col">
                            <div className="input-group mb-2">
                              <input
                                type="number"
                                className="form-control"
                                autoComplete="off"
                                id="lineNumberForAdminPages"
                                name="lineNumberForAdminPages"
                                defaultValue={30}
                              />

                              <span className="input-group-text">라인</span>
                            </div>
                            <small className="form-hint">
                              * 목록(리스트) 한페이지당 라인수, 100 이하로
                              설정해주세요
                            </small>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        {/* <!--                                        <div className="form-group mb-3 row">
                                            <label className="form-label col-3 col-form-label">카카오톡 계정</label>
                                            <div className="col">
                                                <input type="text" className="form-control" aria-describedby="" placeholder="카카오톡 계정" th:field="*{adminKakaoAccount}">
                                                <div className="invalid-feedback d-block" th:if="${#fields.hasErrors('adminKakaoAccount')}" th:errors="*{adminKakaoAccount}"></div>
                                                <div className="msg invalid-feedback d-block"></div>
                                            </div>
                                        </div>--> */}
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            접근차단 IP
                          </label>
                          <div className="col">
                            <textarea
                              className="form-control"
                              rows={3}
                              placeholder="접근차단 IP.."
                              id="blockedIPs"
                              name="blockedIPs"
                              defaultValue={
                                "                              127.0.0.0 127.0.0.2 156.146.59.47\n                            "
                              }
                            />

                            <small className="form-hint">
                              * 입력된 IP의 컴퓨터는 접근할 수 없음.
                              <br />* 123.123.+ 도 입력 가능. (엔터로 구분)
                            </small>

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            점검문구
                          </label>
                          <div className="col">
                            <textarea
                              className="form-control"
                              rows={3}
                              placeholder="점검문구.."
                              id="maintenanceText"
                              name="maintenanceText"
                              defaultValue={
                                "                              사이트 점검중입니다.\n                            "
                              }
                            />

                            <div className="msg invalid-feedback d-block"></div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="form-label col-3 col-form-label">
                            Bank Info
                          </label>
                          <div className="col">
                            <textarea
                              className="form-control"
                              rows={3}
                              placeholder="Bank info.."
                              id="bankInfo"
                              name="bankInfo"
                              defaultValue={
                                "                              신한은행 123-456-789-123. 예금주: 홍길동\n                            "
                              }
                            />

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
}

export default Basic

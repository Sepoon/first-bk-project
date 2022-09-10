import React, { useState} from "react";
import UserInfo from './Components/Popup/UserInfo';

const Main = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="page-wrapper">
        <div>
          <div className="container-fluid">
            <div className="page-header d-print-none">
              <div className="row align-items-center">
                <div className="col">
                  <h2 className="page-title">관리자 메인</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="page-body">
            <div className="container-fluid admin-dashboard-page">
              <div className="row mb-3">
                <div className="col-sm-2">
                  <div className="card">
                    <div className="card-body p-2 text-center">
                      <div className="h1 mt-3">25,130,307</div>
                      <div className="text-muted mb-3">보유머니</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="card">
                    <div className="card-body p-2 text-center">
                      <div className="h1 mt-3">748,604</div>
                      <div className="text-muted mb-3">보유포인트</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="card">
                    <div className="card-body p-2 text-center">
                      <div className="h1 mt-3">24</div>
                      <div className="text-muted mb-3">배팅참여자</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="card">
                    <div className="card-body p-2 text-center">
                      <div className="h1 mt-3">256</div>
                      <div className="text-muted mb-3">진행중인 배팅</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="card">
                    <div className="card-body p-2 text-center">
                      <div className="h1 mt-3">4,033,364</div>
                      <div className="text-muted mb-3">진행중인 배팅머니</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="card">
                    <div className="card-body p-2 text-center">
                      <div className="h1 mt-3">19,742,032</div>
                      <div className="text-muted mb-3">당첨예상머니</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row-cards mb-3">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">통계</h3>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-vcenter text-nowrap datatable">
                        <thead>
                          <tr>
                            <th className="text-center" colSpan={2}>
                              구분
                            </th>
                            <th className="text-center">배팅</th>
                            <th className="text-center">당첨</th>
                            <th className="text-center">회원가입</th>
                            <th className="text-center">방문자</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center" rowSpan={2}>
                              오늘
                            </td>
                            <td className="text-center">건수</td>
                            <td className="text-center">14</td>
                            <td className="text-center">0</td>
                            <td className="text-center" rowSpan={2}>
                              3
                            </td>
                            <td className="text-center" rowSpan={2}>
                              11
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">금액</td>
                            <td className="text-center">-135,000</td>
                            <td className="text-center">0</td>
                          </tr>
                          <tr>
                            <td className="text-center" rowSpan={2}>
                              어제
                            </td>
                            <td className="text-center">건수</td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                            <td className="text-center" rowSpan={2}>
                              2
                            </td>
                            <td className="text-center" rowSpan={2}>
                              5
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">금액</td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                          </tr>
                          <tr>
                            <td className="text-center" rowSpan={2}>
                              이달
                            </td>
                            <td className="text-center">건수</td>
                            <td className="text-center">36</td>
                            <td className="text-center">1</td>
                            <td className="text-center" rowSpan={2}>
                              17
                            </td>
                            <td className="text-center" rowSpan={2}>
                              25
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">금액</td>
                            <td className="text-center">-250,000</td>
                            <td className="text-center">10,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card cs-card">
                  <div className="card-header">
                    <h3 className="card-title">고객센터</h3>
                  </div>
                  <div className="card-body">
                    <div className="cs-item">
                      <div className="row">
                        <div className="col-auto email-col">
                          <a
                            className="open-user-info-modal"
                            href="#"
                            data-userid="73"
                            onClick={handleShow}
                          >
                            <span>jackylu9</span>
                          </a>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <a href="/cs/edit/177">check</a>
                          </div>
                          <div className="text-muted">
                            2022-03-07 12:22:27.0
                          </div>
                        </div>
                        <div className="col-auto align-self-center">
                          <div>
                            <span className="badge bg-warning me-1"></span> 답변
                            필요
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cs-item">
                      <div className="row">
                        <div className="col-auto email-col">
                          <a
                            className="open-user-info-modal"
                            href="#"
                            data-userid="3"
                            onClick={handleShow}
                          >
                            <span>tuser123</span>
                          </a>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <a href="/cs/edit/176">test notification</a>
                          </div>
                          <div className="text-muted">
                            2022-03-05 09:33:00.0
                          </div>
                        </div>
                        <div className="col-auto align-self-center">
                          <div>
                            <span className="badge bg-warning me-1"></span> 답변
                            필요
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cs-item">
                      <div className="row">
                        <div className="col-auto email-col">
                          <a
                            className="open-user-info-modal"
                            href="#"
                            data-userid="75"
                            onClick={handleShow}
                          >
                            <span>본부장테스트</span>
                          </a>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <a href="/cs/edit/175">0225 테스트1</a>
                          </div>
                          <div className="text-muted">
                            2022-02-25 16:26:49.0
                          </div>
                        </div>
                        <div className="col-auto align-self-center">
                          <div>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cs-item">
                      <div className="row">
                        <div className="col-auto email-col">
                          <a
                            className="open-user-info-modal"
                            href="#"
                            data-userid="75"
                            onClick={handleShow}
                          >
                            <span>본부장테스트</span>
                          </a>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <a href="/cs/edit/174">0225 테스트</a>
                          </div>
                          <div className="text-muted">
                            2022-02-25 16:26:29.0
                          </div>
                        </div>
                        <div className="col-auto align-self-center">
                          <div>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cs-item">
                      <div className="row">
                        <div className="col-auto email-col">
                          <a
                            className="open-user-info-modal"
                            href="#"
                            data-userid="106"
                            onClick={handleShow}
                          >
                            <span>test고고고</span>
                          </a>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <a href="/cs/edit/173">뮨의테스트제목2</a>
                          </div>
                          <div className="text-muted">
                            2022-02-23 14:12:04.0
                          </div>
                        </div>
                        <div className="col-auto align-self-center">
                          <div>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cs-item">
                      <div className="row">
                        <div className="col-auto email-col">
                          <a
                            className="open-user-info-modal"
                            href="#"
                            data-userid="106"
                            onClick={handleShow}
                          >
                            <span>test고고고</span>
                          </a>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <a href="/cs/edit/172">문의 제목쓰</a>
                          </div>
                          <div className="text-muted">
                            2022-02-23 14:11:21.0
                          </div>
                        </div>
                        <div className="col-auto align-self-center">
                          <div>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cs-item">
                      <div className="row">
                        <div className="col-auto email-col">
                          <a
                            className="open-user-info-modal"
                            href="#"
                            data-userid="108"
                            onClick={handleShow}
                          >
                            <span>testu2</span>
                          </a>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <a href="/cs/edit/171">test1</a>
                          </div>
                          <div className="text-muted">
                            2022-02-19 21:35:47.0
                          </div>
                        </div>
                        <div className="col-auto align-self-center">
                          <div>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cs-item">
                      <div className="row">
                        <div className="col-auto email-col">
                          <a
                            className="open-user-info-modal"
                            href="#"
                            data-userid="80"
                            onClick={handleShow}
                          >
                            <span>test고고</span>
                          </a>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <a href="/cs/edit/169">ㅗㅗ</a>
                          </div>
                          <div className="text-muted">
                            2022-01-26 14:23:42.0
                          </div>
                        </div>
                        <div className="col-auto align-self-center">
                          <div>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cs-item">
                      <div className="row">
                        <div className="col-auto email-col">
                          <a
                            className="open-user-info-modal"
                            href="#"
                            data-userid="80"
                            onClick={handleShow}
                          >
                            <span>test고고</span>
                          </a>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <a href="/cs/edit/167">ㅇㅈㅇㄴㅇㅇㄴ</a>
                          </div>
                          <div className="text-muted">
                            2022-01-21 10:46:31.0
                          </div>
                        </div>
                        <div className="col-auto align-self-center">
                          <div>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cs-item">
                      <div className="row">
                        <div className="col-auto email-col">
                          <a
                            className="open-user-info-modal"
                            href="#"
                            data-userid="80"
                            onClick={handleShow}
                          >
                            <span>test고고</span>
                          </a>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <a href="/cs/edit/166">ddddd</a>
                          </div>
                          <div className="text-muted">
                            2022-01-21 10:34:11.0
                          </div>
                        </div>
                        <div className="col-auto align-self-center">
                          <div>
                            <span className="badge bg-success me-1"></span> 답변
                            완료
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div id="fullpage-loader" style={{ display: "none" }}>
          <div className="spinner-border text-blue" role="status"></div>
        </div> */}
      </section>
      <UserInfo show={show} handleClose={handleClose}/>
    </>
  );
};

export default Main;

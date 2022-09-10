import React from "react";

const Alarm = () => {
  return (
    <>
      <section className="page-wrapper">
        
        <div className="container-fluid">
          {/* <!-- Page title --> */}
          <div className="page-header d-print-none">
            <div className="row align-items-center">
              <div className="col">
                <h2 className="page-title">알람 설정</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-cards mb-3">
              <div className="col-12">
                <form
                  action="/setting/notifications"
                  method="post"
                  className="card"
                  id="basicSettingForm"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    defaultValue="070255fa-fb29-4261-be5e-bd69f333c5b6"
                  />
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap datatable">
                      <colgroup>
                        <col width="20%" />
                        <col width="50%" />
                        <col width="20%" />
                        <col width="5%" />
                        <col width="5%" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>내용</th>
                          <th className="text-center">기타설정</th>
                          <th className="text-center">소리</th>
                          <th>팝업</th>
                          <th>효과음</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>회원가입</td>
                          <td></td>
                          <td>
                            <div>
                              <input
                                type="hidden"
                                className="image-url-input"
                                data-id="1"
                                id="userRegisterSoundUrl"
                                name="userRegisterSoundUrl"
                                defaultValue="https://update.squareonesoft.com/miniplay/sound/1646622884209_mixkit-fast-small-sweep-transition-166.wav"
                              />
                              <input
                                type="file"
                                accept="audio/mpeg3"
                                className="filepond image-url-input ms-4"
                                multiple
                                data-allow-reorder="true"
                                data-max-file-size="3MB"
                                data-max-files="1"
                                data-url="https://update.squareonesoft.com/miniplay/sound/1646622884209_mixkit-fast-small-sweep-transition-166.wav"
                                data-id="1"
                              />
                            </div>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="userRegisterPopupEnabled1"
                                name="userRegisterPopupEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_userRegisterPopupEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="userRegisterSoundEnabled1"
                                name="userRegisterSoundEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_userRegisterSoundEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>1:1문의</td>
                          <td></td>
                          <td>
                            <div>
                              <input
                                type="hidden"
                                className="image-url-input"
                                data-id="2"
                                id="oneToOneSoundUrl"
                                name="oneToOneSoundUrl"
                                defaultValue="https://update.squareonesoft.com/miniplay/sound/1646622887737_mixkit-arcade-retro-game-over-213.wav"
                              />
                              <input
                                type="file"
                                accept="audio/mpeg3"
                                className="filepond image-url-input ms-4"
                                multiple
                                data-allow-reorder="true"
                                data-max-file-size="3MB"
                                data-max-files="1"
                                data-url="https://update.squareonesoft.com/miniplay/sound/1646622887737_mixkit-arcade-retro-game-over-213.wav"
                                data-id="2"
                              />
                            </div>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="oneToOnePopupEnabled1"
                                name="oneToOnePopupEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_oneToOnePopupEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="oneToOneSoundEnabled1"
                                name="oneToOneSoundEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_oneToOneSoundEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>스포츠배팅</td>
                          <td></td>
                          <td>
                            <div>
                              <input
                                type="hidden"
                                className="image-url-input"
                                data-id="3"
                                id="sportBettingSoundUrl"
                                name="sportBettingSoundUrl"
                                defaultValue="https://update.squareonesoft.com/miniplay/sound/1646622930812_mixkit-alarm-tone-996.wav"
                              />
                              <input
                                type="file"
                                accept="audio/mpeg3"
                                className="filepond image-url-input ms-4"
                                multiple
                                data-allow-reorder="true"
                                data-max-file-size="3MB"
                                data-max-files="1"
                                data-url="https://update.squareonesoft.com/miniplay/sound/1646622930812_mixkit-alarm-tone-996.wav"
                                data-id="3"
                              />
                            </div>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="sportBettingPopupEnabled1"
                                name="sportBettingPopupEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_sportBettingPopupEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="sportBettingSoundEnabled1"
                                name="sportBettingSoundEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_sportBettingSoundEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>충전신청</td>
                          <td></td>
                          <td>
                            <div>
                              <input
                                type="hidden"
                                className="image-url-input"
                                data-id="4"
                                id="currencyTransactionSoundUrl"
                                name="currencyTransactionSoundUrl"
                                defaultValue="https://update.squareonesoft.com/miniplay/sound/1646622895421_mixkit-dog-barking-twice-1.wav"
                              />
                              <input
                                type="file"
                                accept="audio/mpeg3"
                                className="filepond image-url-input ms-4"
                                multiple
                                data-allow-reorder="true"
                                data-max-file-size="3MB"
                                data-max-files="1"
                                data-url="https://update.squareonesoft.com/miniplay/sound/1646622895421_mixkit-dog-barking-twice-1.wav"
                                data-id="4"
                              />
                            </div>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="currencyTransactionPopupEnabled1"
                                name="currencyTransactionPopupEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_currencyTransactionPopupEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="currencyTransactionSoundEnabled1"
                                name="currencyTransactionSoundEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_currencyTransactionSoundEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>환전신청</td>
                          <td></td>
                          <td>
                            <div>
                              <input
                                type="hidden"
                                className="image-url-input"
                                data-id="5"
                                id="exchangeTransactionSoundUrl"
                                name="exchangeTransactionSoundUrl"
                                defaultValue="https://update.squareonesoft.com/miniplay/sound/1646622906947_mixkit-classic-alarm-995.wav"
                              />
                              <input
                                type="file"
                                accept="audio/mpeg3"
                                className="filepond image-url-input ms-4"
                                multiple
                                data-allow-reorder="true"
                                data-max-file-size="3MB"
                                data-max-files="1"
                                data-url="https://update.squareonesoft.com/miniplay/sound/1646622906947_mixkit-classic-alarm-995.wav"
                                data-id="5"
                              />
                            </div>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="exchangeTransactionPopupEnabled1"
                                name="exchangeTransactionPopupEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_exchangeTransactionPopupEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="exchangeTransactionSoundEnabled1"
                                name="exchangeTransactionSoundEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_exchangeTransactionSoundEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>카지노충전신청</td>
                          <td></td>
                          <td>
                            <div>
                              <input
                                type="hidden"
                                className="image-url-input"
                                data-id="6"
                                id="casinoCurrencyTransactionSoundUrl"
                                name="casinoCurrencyTransactionSoundUrl"
                                defaultValue="https://update.squareonesoft.com/miniplay/sound/1646623003630_mixkit-fast-small-sweep-transition-166.wav"
                              />
                              <input
                                type="file"
                                accept="audio/mpeg3"
                                className="filepond image-url-input ms-4"
                                multiple
                                data-allow-reorder="true"
                                data-max-file-size="3MB"
                                data-max-files="1"
                                data-url="https://update.squareonesoft.com/miniplay/sound/1646623003630_mixkit-fast-small-sweep-transition-166.wav"
                                data-id="6"
                              />
                            </div>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="casinoCurrencyTransactionPopupEnabled1"
                                name="casinoCurrencyTransactionPopupEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_casinoCurrencyTransactionPopupEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="casinoCurrencyTransactionSoundEnabled1"
                                name="casinoCurrencyTransactionSoundEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_casinoCurrencyTransactionSoundEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>카지노환전신청</td>
                          <td></td>
                          <td>
                            <div>
                              <input
                                type="hidden"
                                className="image-url-input"
                                data-id="7"
                                id="casinoExchangeTransactionSoundUrl"
                                name="casinoExchangeTransactionSoundUrl"
                                defaultValue="https://update.squareonesoft.com/miniplay/sound/1646623007243_mixkit-arcade-retro-game-over-213.wav"
                              />
                              <input
                                type="file"
                                accept="audio/mpeg3"
                                className="filepond image-url-input ms-4"
                                multiple
                                data-allow-reorder="true"
                                data-max-file-size="3MB"
                                data-max-files="1"
                                data-url="https://update.squareonesoft.com/miniplay/sound/1646623007243_mixkit-arcade-retro-game-over-213.wav"
                                data-id="7"
                              />
                            </div>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="casinoExchangeTransactionPopupEnabled1"
                                name="casinoExchangeTransactionPopupEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_casinoExchangeTransactionPopupEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="casinoExchangeTransactionSoundEnabled1"
                                name="casinoExchangeTransactionSoundEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_casinoExchangeTransactionSoundEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>고액배팅</td>
                          <td>
                            <div className="form-group row">
                              <label className="form-label col-3 col-form-label">
                                기준금액
                              </label>
                              <div className="col">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="기준금액"
                                  id="largeBettingThreshold"
                                  name="largeBettingThreshold"
                                  defaultValue="10000"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>
                              <input
                                type="hidden"
                                className="image-url-input"
                                data-id="8"
                                id="largeBettingSoundUrl"
                                name="largeBettingSoundUrl"
                                defaultValue="https://update.squareonesoft.com/miniplay/sound/1646623010718_mixkit-dog-barking-twice-1.wav"
                              />
                              <input
                                type="file"
                                accept="audio/mpeg3"
                                className="filepond image-url-input ms-4"
                                multiple
                                data-allow-reorder="true"
                                data-max-file-size="3MB"
                                data-max-files="1"
                                data-url="https://update.squareonesoft.com/miniplay/sound/1646623010718_mixkit-dog-barking-twice-1.wav"
                                data-id="8"
                              />
                            </div>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="largeBettingPopupEnabled1"
                                name="largeBettingPopupEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_largeBettingPopupEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="largeBettingSoundEnabled1"
                                name="largeBettingSoundEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_largeBettingSoundEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>배팅알람대상ID</td>
                          <td>
                            <div className="form-group row">
                              <label className="form-label col-3 col-form-label">
                                아이디
                              </label>
                              <div className="col">
                                <textarea
                                  className="form-control"
                                  name="bettingNotificationUsernames"
                                  rows={10}
                                  placeholder="아이디"
                                  id="bettingNotificationUsernames"
                                  defaultValue={"tuser2 tuser3 tuser5 test1515"}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>
                              <input
                                type="hidden"
                                className="image-url-input"
                                data-id="9"
                                id="bettingNotificationSoundUrl"
                                name="bettingNotificationSoundUrl"
                                defaultValue="https://update.squareonesoft.com/miniplay/sound/1646623014457_mixkit-alarm-tone-996.wav"
                              />
                              <input
                                type="file"
                                accept="audio/mpeg3"
                                className="filepond image-url-input ms-4"
                                multiple
                                data-allow-reorder="true"
                                data-max-file-size="3MB"
                                data-max-files="1"
                                data-url="https://update.squareonesoft.com/miniplay/sound/1646623014457_mixkit-alarm-tone-996.wav"
                                data-id="9"
                              />
                            </div>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="bettingNotificationPopupEnabled1"
                                name="bettingNotificationPopupEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_bettingNotificationPopupEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                          <td>
                            <label className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="checked"
                                id="bettingNotificationSoundEnabled1"
                                name="bettingNotificationSoundEnabled"
                                defaultValue="true"
                              />
                              <input
                                type="hidden"
                                name="_bettingNotificationSoundEnabled"
                                defaultValue="on"
                              />
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
            <div className="row row-cards mb-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Alarm;

import React from 'react'

const BettingRule = () => {
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
                <h2 className="page-title">배팅 설정</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-cards mb-3">
              <form
                action="/setting/bettingrules"
                method="post"
                className="card"
              >
                <input
                  type="hidden"
                  name="_csrf"
                  defaultValue="070255fa-fb29-4261-be5e-bd69f333c5b6"
                />
                <div className="card-header">
                  <h4 className="card-title">배팅 설정</h4>
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="d-flex align-items-end betting-rules-filter">
                      <select className="form-select" id="br_sport">
                        <option defaultValue="">==게임==</option>
                        <option defaultValue="6046">축구</option>
                        <option defaultValue="48242">농구</option>
                        <option defaultValue="154914">야구</option>
                        <option defaultValue="154830">배구</option>
                        <option defaultValue="35232">아이스하키</option>
                        <option defaultValue="131506">미식축구</option>
                      </select>
                      <span className="text-muted">&nbsp;X&nbsp;</span>
                      <select className="form-select" id="br_market1">
                        <option defaultValue="">==Market 1==</option>
                        <option defaultValue="wdl">승무패</option>
                        <option defaultValue="under">언더</option>
                        <option defaultValue="over">오버</option>
                        <option defaultValue="handicapbaselineunder1">
                          핸디기준점1이하
                        </option>
                        <option defaultValue="handicapbaselineover1">
                          핸디기준점1이상
                        </option>
                        <option defaultValue="firstscore">첫득점</option>
                        <option defaultValue="firstthreepointer">첫3점</option>
                      </select>
                      <span className="text-muted">&nbsp;X&nbsp;</span>
                      <select className="form-select" id="br_market2">
                        <option defaultValue="">==Market 1==</option>
                        <option defaultValue="wdl">승무패</option>
                        <option defaultValue="under">언더</option>
                        <option defaultValue="over">오버</option>
                        <option defaultValue="handicapbaselineunder1">
                          핸디기준점1이하
                        </option>
                        <option defaultValue="handicapbaselineover1">
                          핸디기준점1이상
                        </option>
                        <option defaultValue="firstscore">첫득점</option>
                        <option defaultValue="firstthreepointer">첫3점</option>
                      </select>
                      <input
                        type="button"
                        className="btn btn-primary ms-2"
                        defaultValue="추가"
                        id="addrule-btn"
                      />
                      <input
                        type="button"
                        className="btn btn-danger ms-2"
                        defaultValue="삭제"
                        id="deleterule-btn"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 mt-3">
                    <div>
                      <select
                        name=""
                        id="br_existing_select"
                        className="form-control form-select w-100"
                        multiple
                        size="10"
                      ></select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-xl-6">
                      <div className="form-group  row">
                        <label className="form-label col-3 col-form-label pt-0">
                          배팅취소가능여부
                        </label>
                        <div className="col-7">
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked="checked"
                              id="allowBetCancellation1"
                              name="allowBetCancellation"
                              defaultValue="true"
                            />
                            <input
                              type="hidden"
                              name="_allowBetCancellation"
                              defaultValue="on"
                            />
                            <span className="form-check-label"></span>
                          </label>
                        </div>
                      </div>
                      <div className="form-group  row">
                        <label className="form-label col-3 col-form-label">
                          배팅취소(배팅후)
                        </label>
                        <div className="col-7">
                          <div className="input-group mb-2">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="5"
                              autoComplete="off"
                              id="betCancellationAfterBettingMinutes"
                              name="betCancellationAfterBettingMinutes"
                              defaultValue="30"
                            />
                            <span className="input-group-text">분</span>
                          </div>
                          {/* <!-- <small className="form-hint">* 최대60분</small> --> */}
                        </div>
                      </div>
                      <div className="form-group  row">
                        <label className="form-label col-3 col-form-label pt-0">
                          중복배팅금지
                        </label>
                        <div className="col-7">
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="blockDuplicateBetting1"
                              name="blockDuplicateBetting"
                              defaultValue="true"
                            />
                            <input
                              type="hidden"
                              name="_blockDuplicateBetting"
                              defaultValue="on"
                            />
                            <span className="form-check-label"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="form-group  row">
                        <label className="form-label col-5 col-form-label">
                          배팅취소 횟수제한(하루기준)
                        </label>
                        <div className="col">
                          <div className="input-group mb-2">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="5"
                              autoComplete="off"
                              id="numBetCancellationDailyLimit"
                              name="numBetCancellationDailyLimit"
                              defaultValue="500"
                            />
                            <span className="input-group-text">회</span>
                          </div>
                          {/* <!-- <small className="form-hint">* 최대60분</small> --> */}
                        </div>
                      </div>
                      <div className="form-group  row">
                        <label className="form-label col-5 col-form-label">
                          배팅취소(경기시작전)
                        </label>
                        <div className="col">
                          <div className="input-group mb-2">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="5"
                              autoComplete="off"
                              id="betCancellationBeforeMatchStartsMinutes"
                              name="betCancellationBeforeMatchStartsMinutes"
                              defaultValue="30"
                            />
                            <span className="input-group-text">분</span>
                          </div>
                          {/* <!-- <small className="form-hint">* 최대60분</small> --> */}
                        </div>
                      </div>
                      {/* <!--
                                <div className="form-group  row">
                                    <label className="form-label col-5 col-form-label pt-0">거미줄배팅금지 </label>
                                    <div className="col">
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultChecked="">
                                            <span className="form-check-label"></span>
                                        </label>
                                    </div>
                                </div>
                                --> */}
                    </div>
                  </div>
                  {/* <!--
                        <div className="row mb-3">
                            <div className="form-group  row d-flex align-items-center">
                                <label className="form-label col-15 col-form-label">축배팅금지</label>
                                <div className="col">
                                    <div className="form-group  d-flex align-items-baseline">
                                        <div className="d-flex align-items-baseline">
                                            <label className="form-label col-form-label">금액기준사용여부 :</label>
                                            <input className="form-check-input ms-2" type="checkbox" defaultChecked="">
                                        </div>
                                        <div className="d-flex align-items-baseline ms-4">
                                            <label className="form-label col-form-label">배팅금 : </label>
                                            <div className="input-group mb-2 ms-2 w-auto">
                                                <input type="number" className="form-control" placeholder="100000" autoComplete="off">
                                                <span className="input-group-text">분</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline ms-4">
                                            <label className="form-label col-form-label">당첨금 :</label>
                                            <div className="input-group mb-2 ms-2 w-auto">
                                                <input type="number" className="form-control" placeholder="500000" autoComplete="off">
                                                <span className="input-group-text">분</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group  d-flex align-items-baseline">
                                        <div className="d-flex align-items-baseline">
                                            <label className="form-label col-form-label">횟수기준사용여부 : </label>
                                            <input className="form-check-input ms-2" type="checkbox" defaultChecked="">
                                        </div>
                                        <div className="d-flex align-items-baseline ms-4">
                                            <label className="form-label col-form-label">횟수 : </label>
                                            <div className="input-group mb-2 ms-2 w-auto">
                                                <input type="number" className="form-control" placeholder="3" autoComplete="off">
                                                <span className="input-group-text">분</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group  d-flex align-items-baseline">
                                        <div className="d-flex align-items-baseline">
                                            <label className="form-label col-form-label">낙첨된 배팅 제외안함 :  </label>
                                            <input className="form-check-input ms-2" type="checkbox" >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        --> */}
                  <div className="row mb-3">
                    <div className="col-xl-6">
                      <div className="form-group row mb-2">
                        <label className="form-label col-3 col-form-label pt-0">
                          최대배당률
                        </label>
                        <div className="col-7">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="100"
                            autoComplete="off"
                            id="maxOdds"
                            name="maxOdds"
                            defaultValue="100.0"
                          />
                          {/* <!-- <small className="form-hint">* 최대60분</small> --> */}
                        </div>
                      </div>
                      <div className="form-group row mb-2">
                        <label className="form-label col-3 col-form-label">
                          단폴배당하락{" "}
                        </label>
                        <div className="col-7">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="0.02"
                            autoComplete="off"
                            id="singleBetOddDegradation"
                            name="singleBetOddDegradation"
                            defaultValue="1.0"
                          />
                        </div>
                      </div>
                      <div className="form-group row mb-2">
                        <label className="form-label col-3 col-form-label pt-0">
                          보너스배당 조합가능한 최소배당
                        </label>
                        <div className="col-7">
                          <input
                            type="number"
                            className="form-control"
                            placeholder=""
                            autoComplete="off"
                            id="bonusBettingMinOddForCombo"
                            name="bonusBettingMinOddForCombo"
                            defaultValue="1.0"
                          />
                          <small className="form-hint">
                            ( 예: 1.20 배당미만은보너스배당과 조합불가능 )
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      {/* <!--
                                <div className="form-group row mb-2">
                                    <label className="form-label col-5 col-form-label pt-0">미니게임 동일회차 보험배팅금지</label>
                                    <div className="col">
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultChecked="">
                                            <span className="form-check-label"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group row mb-2">
                                    <label className="form-label col-5 col-form-label">투폴배당하락 </label>
                                    <div className="col">
                                        <div className="input-group ">
                                            <input type="number" className="form-control" placeholder="5" autoComplete="off">
                                            <span className="input-group-text">분</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row mb-2">
                                    <label className="form-label col-5 col-form-label pt-0">자동정산 </label>
                                    <div className="col d-flex">
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultChecked="">
                                            <span className="form-check-label">미니게임 </span>
                                        </label>
                                        <label className="form-check ms-4">
                                            <input className="form-check-input" type="checkbox" defaultChecked="">
                                            <span className="form-check-label">스포츠</span>
                                        </label>
                                    </div>
                                </div>
                                --> */}
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="form-group  row d-flex align-items-baseline">
                      <label className="form-label col-15 col-form-label">
                        동일경기 핸디캡 & 언더오버 조합금지
                      </label>
                      <div className="col">
                        <div className="form-group  d-flex align-items-baseline">
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="blockHandicapUnderOverSameFixtureCombo1"
                              name="blockHandicapUnderOverSameFixtureCombo"
                              defaultValue="true"
                            />
                            <input
                              type="hidden"
                              name="_blockHandicapUnderOverSameFixtureCombo"
                              defaultValue="on"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="form-group  row d-flex align-items-baseline">
                      <label className="form-label col-15 col-form-label">
                        농구:핸디+첫2/첫3 조합금지
                      </label>
                      <div className="col">
                        <div className="form-group  d-flex align-items-baseline">
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="basketballBlockHandicapFirst2PtFirst3PtBetCombo1"
                              name="basketballBlockHandicapFirst2PtFirst3PtBetCombo"
                              defaultValue="true"
                            />
                            <input
                              type="hidden"
                              name="_basketballBlockHandicapFirst2PtFirst3PtBetCombo"
                              defaultValue="on"
                            />
                            <span className="form-check-label">
                              ( 예 : KT핸디+KT첫2 배팅불가, KT핸디+KT첫3
                              배팅불가, KT핸디+KT첫3+KT자유투 배팅가능,
                              KT핸디+SK첫3 배팅가능 )
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="form-group  row d-flex align-items-center">
                      <label className="form-label col-15 col-form-label">
                        라이브벳 마감시간 설정 (종료시간 -)
                      </label>
                      <div className="col">
                        <div className="form-group d-flex align-items-baseline mb-2">
                          <label className="form-label col-form-label nowrap">
                            축구
                          </label>
                          <div className="d-flex align-items-baseline ms-4">
                            <label className="form-label col-form-label nowrap">
                              전반
                            </label>
                            <div className="input-group ms-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                autoComplete="off"
                                id="soccer1HMinutesBeforeCloseBet"
                                name="soccer1HMinutesBeforeCloseBet"
                                defaultValue="1"
                              />
                              <span className="input-group-text">
                                분 전 마감
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline ms-2">
                            <label className="form-label col-form-label nowrap">
                              후반
                            </label>
                            <div className="input-group ms-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                autoComplete="off"
                                id="soccer2HMinutesBeforeCloseBet"
                                name="soccer2HMinutesBeforeCloseBet"
                                defaultValue="2"
                              />
                              <span className="input-group-text">
                                분 전 마감
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group d-flex align-items-baseline mb-2">
                          <label className="form-label col-form-label nowrap">
                            농구
                          </label>
                          <div className="d-flex align-items-baseline ms-4">
                            <label className="form-label col-form-label nowrap">
                              1쿼터
                            </label>
                            <div className="input-group ms-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                autoComplete="off"
                                id="basketballQ1MinutesBeforeCloseBet"
                                name="basketballQ1MinutesBeforeCloseBet"
                                defaultValue="1"
                              />
                              <span className="input-group-text">
                                분 전 마감
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline ms-2">
                            <label className="form-label col-form-label nowrap">
                              2쿼터
                            </label>
                            <div className="input-group ms-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                autoComplete="off"
                                id="basketballQ2MinutesBeforeCloseBet"
                                name="basketballQ2MinutesBeforeCloseBet"
                                defaultValue="2"
                              />
                              <span className="input-group-text">
                                분 전 마감
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline ms-2">
                            <label className="form-label col-form-label nowrap">
                              3쿼터
                            </label>
                            <div className="input-group ms-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                autoComplete="off"
                                id="basketballQ3MinutesBeforeCloseBet"
                                name="basketballQ3MinutesBeforeCloseBet"
                                defaultValue="3"
                              />
                              <span className="input-group-text">
                                분 전 마감
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline ms-2">
                            <label className="form-label col-form-label nowrap">
                              4쿼터
                            </label>
                            <div className="input-group ms-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                autoComplete="off"
                                id="basketballQ4MinutesBeforeCloseBet"
                                name="basketballQ4MinutesBeforeCloseBet"
                                defaultValue="4"
                              />
                              <span className="input-group-text">
                                분 전 마감
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group d-flex align-items-baseline mb-2">
                          <label className="form-label col-form-label nowrap">
                            배구
                          </label>
                          <div className="d-flex align-items-baseline ms-4">
                            <label className="form-label col-form-label nowrap px-3"></label>
                            <div className="input-group ms-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                autoComplete="off"
                                id="volleyballPointsBeforeCloseBet"
                                name="volleyballPointsBeforeCloseBet"
                                defaultValue="1"
                              />
                              <span className="input-group-text">
                                {" "}
                                점 전 마감
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group d-flex align-items-baseline mb-2">
                          <label className="form-label col-form-label nowrap">
                            하키
                          </label>
                          <div className="d-flex align-items-baseline ms-4">
                            <label className="form-label col-form-label nowrap">
                              1피리어드
                            </label>
                            <div className="input-group ms-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                autoComplete="off"
                                id="iceHockey1PMinutesBeforeCloseBet"
                                name="iceHockey1PMinutesBeforeCloseBet"
                                defaultValue="1"
                              />
                              <span className="input-group-text">
                                분 전 마감
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline ms-2">
                            <label className="form-label col-form-label nowrap">
                              2피리어드
                            </label>
                            <div className="input-group ms-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                autoComplete="off"
                                id="iceHockey2PMinutesBeforeCloseBet"
                                name="iceHockey2PMinutesBeforeCloseBet"
                                defaultValue="2"
                              />
                              <span className="input-group-text">
                                분 전 마감
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline ms-2">
                            <label className="form-label col-form-label nowrap">
                              3피리어드
                            </label>
                            <div className="input-group ms-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                autoComplete="off"
                                id="iceHockey3PMinutesBeforeCloseBet"
                                name="iceHockey3PMinutesBeforeCloseBet"
                                defaultValue="3"
                              />
                              <span className="input-group-text">
                                분 전 마감
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="form-group  row d-flex align-items-center">
                      <label className="form-label col-15 col-form-label">
                        라이브벳 배당설정
                      </label>
                      <div className="col">
                        <div className="form-group d-flex align-items-baseline">
                          <label className="form-label col-form-label nowrap">
                            배당{" "}
                          </label>
                          <div className="d-flex align-items-baseline ms-2">
                            <div className="input-group ms-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                autoComplete="off"
                                id="inplayBetOddSettingPctDecrease"
                                name="inplayBetOddSettingPctDecrease"
                                defaultValue="1.0"
                              />
                              <span className="input-group-text">% 하락</span>
                            </div>
                          </div>
                        </div>
                        <small className="form-hint">
                          (10 설정 시 2.0 -&gt; 1.8 로 변경)
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="form-group  row d-flex align-items-center">
                      <label className="form-label col-15 col-form-label">
                        라이브벳 배당설정
                      </label>
                      <div className="col">
                        <div className="form-group d-flex align-items-baseline">
                          <div className="d-flex align-items-baseline ms-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked="checked"
                              id="inplayBetOddSettingEnabled1"
                              name="inplayBetOddSettingEnabled"
                              defaultValue="true"
                            />
                            <input
                              type="hidden"
                              name="_inplayBetOddSettingEnabled"
                              defaultValue="on"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-end">
                  <div id="comboRules"></div>
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
      </section>
    </>
  );
}

export default BettingRule

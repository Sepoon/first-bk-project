import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UserInfo = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: 16 }}>유저정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div
            className="modal modal-blur fade"
            id="user-info-modal"
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-lg modal-dialog-scrollable"
              role="document"
            >
              <div className="modal-content"> */}
                <div className="modal-header">
                  <h5 className="modal-title">
                    <span className="modal-title__tab active">유저정보</span>{" "}
                    <span className="modal-title__tab log">활동내역</span>
                  </h5>
                  {/* <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button> */}
                </div>
                <div className="modal-body info">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          아이디
                        </label>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            disabled
                            aria-describedby=""
                            placeholder="아이디"
                            value="some_user_name"
                            name="username"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          닉네임
                        </label>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            disabled
                            aria-describedby=""
                            placeholder="아이디"
                            value="some_nickname"
                            name="nickname"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          회원등급
                        </label>
                        <div className="col">
                          <select className="form-select" name="level" disabled>
                            <option value="0">0등급</option>
                            <option value="1">1등급</option>
                            <option value="2">2등급</option>
                            <option value="3">3등급</option>
                            <option value="4">4등급</option>
                            <option value="5">5등급</option>
                            <option value="6">6등급</option>
                            <option value="7">7등급</option>
                            <option value="8">8등급</option>
                            <option value="9">9등급</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          패스워드
                        </label>
                        <div className="col">
                          <input
                            type="password"
                            className="form-control"
                            disabled
                            placeholder="패스워드"
                            value="some_nickname"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          HP
                        </label>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="HP"
                            value=""
                            disabled
                            id="user-phoneNumber"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-1 row">
                        {/* <!--                                <label className="form-label col-4 col-form-label">회원분류</label>--> */}
                        {/* <!--                                <div className="col">--> */}
                        {/* <!--                                    <select className="form-control" id="user-partnerType">--> */}
                        {/* <!--                                        <option value="0">일반</option>--> */}
                        {/* <!--                                        <option value="1">대본</option>--> */}
                        {/* <!--                                        <option value="2">부본</option>--> */}
                        {/* <!--                                        <option value="3">총판</option>--> */}
                        {/* <!--                                        <option value="100">관리자</option>--> */}
                        {/* <!--                                    </select>--> */}
                        {/* <!--                                </div>--> */}
                      </div>
                    </div>
                  </div>

                  <hr className="hr-margin10" />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          추천인
                        </label>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="추천인"
                            name="referrer"
                            value="some_other_user_name"
                            disabled
                            id="user-referrer"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <table className="table table-bordered table-sm">
                        <tbody>
                          <tr>
                            <td>
                              대본: <b id="user-partner1"></b>
                            </td>
                            <td>
                              부본 <b id="user-partner2"></b>
                            </td>
                            <td>
                              총판: <b id="user-partner3"></b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <hr className="hr-margin10" />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label">
                          가입일
                        </label>
                        <div className="col">
                          <div
                            className="form-control-plaintext"
                            id="user-created"
                          >
                            2021-07-23 17:08:25
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label">
                          최초가입 IP
                        </label>
                        <div className="col">
                          <div
                            className="form-control-plaintext"
                            id="user-createdIp"
                          >
                            000.000.000.000{" "}
                            <span className="flag flag-country-kr"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label">
                          마지막접속
                        </label>
                        <div className="col">
                          <div
                            className="form-control-plaintext"
                            id="user-lastLoginDate"
                          ></div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label">
                          접속 IP
                        </label>
                        <div className="col">
                          <div
                            className="form-control-plaintext"
                            id="user-lastLoginIp"
                          >
                            000.000.000.000{" "}
                            <span className="flag flag-country-kr"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="hr-margin10" />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label pt-0">
                          아이디차단
                        </label>
                        <div className="col">
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked=""
                              id="user-status"
                            />
                            <span className="form-check-label"></span>
                          </label>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label">
                          총로그인횟수
                        </label>
                        <div className="col">
                          <div
                            className="form-control-plaintext"
                            id="user-numLogins"
                          >
                            0
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label pt-0">
                          단폴더배팅
                        </label>
                        <div className="col">
                          <label
                            className="form-check"
                            style={{ display: "inline", paddingLeft: 0 }}
                          >
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked=""
                              id="user-isSingleBetDisabled"
                              style={{ marginLeft: 0, marginRight: 5 }}
                            />
                            <span
                              className="form-check-label"
                              style={{ display: "inline" }}
                            >
                              단폴불가
                            </span>
                          </label>
                          <label
                            className="form-check"
                            style={{ display: "inline", paddingLeft: 0 }}
                          >
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked=""
                              id="user-isDoubleBetDisabled"
                              style={{
                                float: "none",
                                marginLeft: 15,
                                marginRight: 5,
                              }}
                            />
                            <span
                              className="form-check-label"
                              style={{ display: "inline" }}
                            >
                              투폴불가
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label">
                          총배팅횟수
                        </label>
                        <div className="col">
                          <div
                            className="form-control-plaintext"
                            id="user-numBets"
                          >
                            0
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="hr-margin10" />

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          예금주
                        </label>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="예금주"
                            disabled
                            id="user-bankholderName"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label">
                          은행명
                        </label>
                        <div className="col">
                          <select
                            className="form-select"
                            id="user-bankName"
                            disabled
                          >
                            <option value="004" label="KB국민은행"></option>
                            <option value="003" label="IBK기업은행"></option>
                            <option value="039" label="경남은행"></option>
                            <option value="034" label="광주은행"></option>
                            <option value="011" label="NH농협은행"></option>
                            <option value="031" label="대구은행"></option>
                            <option value="032" label="부산은행"></option>
                            <option value="002" label="KDB산업은행"></option>
                            <option value="045" label="새마을금고"></option>
                            <option value="007" label="수협"></option>
                            <option value="088" label="신한은행"></option>
                            <option value="048" label="신협"></option>
                            <option value="027" label="씨티은행"></option>
                            <option value="020" label="우리은행"></option>
                            <option value="071" label="우체국"></option>
                            <option value="037" label="전북은행"></option>
                            <option value="023" label="SC제일은행"></option>
                            <option value="035" label="제주은행"></option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          계좌번호
                        </label>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            disabled
                            placeholder="계좌번호"
                            id="user-bankAccount"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="hr-margin10" />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label">
                          총입금
                        </label>
                        <div className="col">
                          <div
                            className="form-control-plaintext text-red"
                            id="user-totalDeposit"
                          >
                            0
                          </div>
                        </div>
                      </div>
                      {/* <!--                            <div className="form-group row">--> */}
                      {/* <!--                                <label className="form-label col-4 col-form-label">롤링_충전</label>--> */}
                      {/* <!--                                <div className="col">--> */}
                      {/* <!--                                    <div className="form-control-plaintext text-red">0</div>--> */}
                      {/* <!--                                </div>--> */}
                      {/* <!--                            </div>--> */}
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label">
                          첫충전%
                        </label>
                        <div className="col">
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                              autoComplete="off"
                              id="user-depositBonusFirst"
                            />
                            <span className="input-group-text">%</span>
                          </div>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label">
                          보유금액
                        </label>
                        <div className="col">
                          <a href="#" id="user-transactionlog-url">
                            <div
                              className="form-control-plaintext"
                              id="user-balance"
                            >
                              0
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label">
                          총출금
                        </label>
                        <div className="col">
                          <div
                            className="form-control-plaintext text-blue"
                            id="user-totalWithdraw"
                          >
                            0
                          </div>
                        </div>
                      </div>
                      {/* <!--                            <div className="form-group row">--> */}
                      {/* <!--                                <label className="form-label col-4 col-form-label">롤링_배팅</label>--> */}
                      {/* <!--                                <div className="col">--> */}
                      {/* <!--                                    <div className="form-control-plaintext text-blue">0</div>--> */}
                      {/* <!--                                </div>--> */}
                      {/* <!--                            </div>--> */}
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label">
                          매충전%
                        </label>
                        <div className="col">
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                              autoComplete="off"
                              id="user-depositBonusNormal"
                            />
                            <span className="input-group-text">%</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="form-label col-4 col-form-label">
                          보유포인트
                        </label>
                        <div className="col">
                          <a href="#" id="user-pointlog-url">
                            <div
                              className="form-control-plaintext"
                              id="user-point"
                            >
                              0
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="hr-margin10" />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          수익배당
                        </label>
                        <div className="col">
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                              autoComplete="off"
                              id="user-partnerDepositPct"
                            />
                            <span className="input-group-text">%</span>
                          </div>
                        </div>
                      </div>

                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          미니게임배팅배당
                        </label>
                        <div className="col">
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                              autoComplete="off"
                              id="user-partnerMinigamePct"
                            />
                            <span className="input-group-text">%</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          카지노배팅배당
                        </label>
                        <div className="col">
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                              autoComplete="off"
                              id="user-partnerCasinoPct"
                            />
                            <span className="input-group-text">%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          스포츠배팅배당
                        </label>
                        <div className="col">
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                              autoComplete="off"
                              id="user-partnerPrematchPct"
                            />
                            <span className="input-group-text">%</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          실시간배팅배당
                        </label>
                        <div className="col">
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                              autoComplete="off"
                              id="user-partnerInplayPct"
                            />
                            <span className="input-group-text">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="hr-margin10" />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          이메일 수신 동의
                        </label>
                        <div className="col">
                          <div className="input-group">
                            <input
                              type="checkbox"
                              // onclick="return false;"
                              id="user-emailMarketing"
                              style={{ marginTop: 10 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group mb-1 row">
                        <label className="form-label col-4 col-form-label">
                          SMS 수신 동의
                        </label>
                        <div className="col">
                          <div className="input-group">
                            <input
                              type="checkbox"
                              // onclick="return false;"
                              id="user-smsMarketing"
                              style={{ marginTop: 10 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="hr-margin10" />
                  <div className="row">
                    <div className="col-lg-12">
                      <div>
                        <label className="form-label">Note</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          id="user-description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-body log" style={{ display: "none" }}>
                  <div className="page-header d-print-none">
                    <div className="row align-items-center g-2 mb-3">
                      <div className="col">
                        <div className="btn-list">
                          <span className="d-sm-inline">
                            <a
                              href="#"
                              className="btn btn-pill btn-secondary select-view-type"
                              data-target="#prematchBetSlips"
                            >
                              사전배팅내역
                            </a>
                          </span>
                          <span className="d-sm-inline">
                            <a
                              href="#"
                              className="btn btn-pill btn-outline-secondary select-view-type"
                              data-target="#inplayBetSlips"
                            >
                              실시간배팅내역
                            </a>
                          </span>
                          <span className="d-sm-inline">
                            <a
                              href="#"
                              className="btn btn-pill btn-outline-secondary select-view-type"
                              data-target="#transactionLogs"
                            >
                              전체활동내역
                            </a>
                          </span>
                          <span className="d-sm-inline">
                            <a
                              href="#"
                              className="btn btn-pill btn-outline-secondary select-view-type"
                              data-target="#cashLogs"
                            >
                              캐쉬내역
                            </a>
                          </span>
                          <span className="d-sm-inline">
                            <a
                              href="#"
                              className="btn btn-pill btn-outline-secondary select-view-type"
                              data-target="#pointLogs"
                            >
                              포인트내역
                            </a>
                          </span>
                          <span className="d-sm-inline">
                            <a
                              href="#"
                              className="btn btn-pill btn-outline-secondary select-view-type"
                              data-target="#loginLogs"
                            >
                              로그인내역
                            </a>
                          </span>
                          <span className="d-sm-inline">
                            <a
                              href="#"
                              className="btn btn-pill btn-outline-secondary select-view-type"
                              data-target="#minigameLogs"
                            >
                              미니게임
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row row-deck row-cards table-responsive tab-section"
                      id="prematchBetSlips"
                    >
                      <h3>사전배팅내역</h3>
                      <div className="col-12">
                        <div className="card">
                          <table
                            id="prematchBetSlipsTb"
                            className="table card-table table-vcenter text-nowrap datatable table-compact"
                          >
                            <thead>
                              <tr>
                                <th className="w-1">번호</th>
                                <th>배팅시간</th>
                                <th className="text-right">예상 배당률</th>
                                <th className="text-right">배팅금액</th>
                                <th className="text-right">예상적중금</th>
                                <th className="text-right">적중금액</th>
                                <th className="w-1">결과</th>
                                <th className="w-1"></th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className="row row-deck row-cards table-responsive tab-section"
                      id="inplayBetSlips"
                    >
                      <h3>실시간배팅내역</h3>
                      <div className="col-12">
                        <div className="card">
                          <table
                            id="inplayBetSlipsTb"
                            className="table card-table table-vcenter text-nowrap datatable table-compact"
                          >
                            <thead>
                              <tr>
                                <th className="w-1">번호</th>
                                <th>배팅시간</th>
                                <th className="text-right">예상 배당률</th>
                                <th className="text-right">배팅금액</th>
                                <th className="text-right">예상적중금</th>
                                <th className="text-right">적중금액</th>
                                <th className="w-1">결과</th>
                                <th className="w-1"></th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className="row row-deck row-cards table-responsive tab-section"
                      id="transactionLogs"
                    >
                      <h3>전체활동내역</h3>
                      <div className="col-12">
                        <div className="card">
                          <table
                            id="transactionLogsTb"
                            className="table card-table table-vcenter text-nowrap datatable table-compact"
                          >
                            <thead>
                              <tr>
                                <th className="w-1">#</th>
                                {/* <!-- <th>유저명</th> --> */}
                                <th>구분</th>
                                <th className="text-right">변경전 금액</th>
                                <th className="text-right">변경금액</th>
                                <th className="text-right">변경후 금액</th>
                                <th>비고</th>
                                <th>IP</th>
                                <th>생성일</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className="row row-deck row-cards table-responsive tab-section"
                      id="cashLogs"
                    >
                      <h3>캐쉬내역</h3>
                      <div className="col-12">
                        <div className="card">
                          <table
                            id="cashLogsTb"
                            className="table card-table table-vcenter text-nowrap datatable table-compact"
                          >
                            <thead>
                              <tr>
                                <th className="w-1">#</th>
                                {/* <!-- <th>유저명</th> --> */}
                                <th>구분</th>
                                <th className="text-right">변경전 금액</th>
                                <th className="text-right">변경금액</th>
                                <th className="text-right">변경후 금액</th>
                                <th>비고</th>
                                <th>IP</th>
                                <th>생성일</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className="row row-deck row-cards table-responsive tab-section"
                      id="pointLogs"
                    >
                      <h3>포인트내역</h3>
                      <div className="col-12">
                        <div className="card">
                          <table
                            id="pointLogsTb"
                            className="table card-table table-vcenter text-nowrap datatable table-compact"
                          >
                            <thead>
                              <tr>
                                <th className="w-1">#</th>
                                {/* <!-- <th>유저명</th> --> */}
                                <th>구분</th>
                                <th className="text-right">변경전</th>
                                <th className="text-right">변경수량</th>
                                <th className="text-right">변경후</th>
                                <th>비고</th>
                                <th>IP</th>
                                <th>생성일</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className="row row-deck row-cards table-responsive tab-section"
                      id="loginLogs"
                    >
                      <h3>로그인내역</h3>
                      <div className="col-12">
                        <div className="card">
                          <table
                            id="loginLogsTb"
                            className="table card-table table-vcenter text-nowrap datatable table-compact"
                          >
                            <thead>
                              <tr>
                                <th className="w-1">#</th>
                                {/* <!-- <th>유저명</th> --> */}
                                <th>IP</th>
                                <th>사용자 에이전트</th>
                                <th>날짜</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className="row row-deck row-cards table-responsive tab-section"
                      id="minigameLogs"
                    >
                      <h3>미니게임 </h3>
                      <div className="col-12">
                        <div className="card">
                          <table
                            id="minigameLogsTb"
                            className="table card-table table-vcenter text-nowrap datatable table-compact"
                          >
                            <thead>
                              <tr>
                                <th>게임시간/마감시간 </th>
                                <th>게임</th>
                                <th>회차</th>
                                <th>베팅</th>
                                <th align="center" className="w-1">
                                  배당
                                </th>
                                <th align="center" className="w-1">
                                  상태
                                </th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="ms-auto">
                    {/* <a
                      href="#"
                      className="btn btn-link link-secondary"
                      data-bs-dismiss="modal"
                    >
                      닫기
                    </a> */}
                    <a
                      href="#"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      id="edit-user-submit-btn"
                    >
                      수정하기
                    </a>
                  </div>
                </div>
              {/* </div>
            </div>
          </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserInfo;

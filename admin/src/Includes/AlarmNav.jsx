import React from "react";
import { Link } from 'react-router-dom';

const AlarmNav = () => {
  return (
    <>
      <section className="page-wrapper">
        <div className="alarms-section">
          <Link to="/Charge" className="item">
            충전신청(
            <span
              className="text-success font-weight-bold"
              id="a_chargeRequests"
            >
              0
            </span>
            )
          </Link>
          <Link to="/Exchange" className="item">
            환전신청(
            <span
              className="text-success font-weight-bold"
              id="a_exchangeRequests"
            >
              0
            </span>
            )
          </Link>
          <Link to="CasinoCharge" className="item">
            카지노충전신청(
            <span
              className="text-success font-weight-bold"
              id="a_casinoChargeRequests"
            >
              0
            </span>
            )
          </Link>
          <Link to="CasinoExchange" className="item">
            카지노환전신청(
            <span
              className="text-success font-weight-bold"
              id="a_casinoExchangeRequests"
            >
              0
            </span>
            )
          </Link>
          <Link to="/Customer" className="item">
            1:1문의(
            <span
              className="text-success font-weight-bold"
              id="a_oneToOneRequests"
            >
              0
            </span>
            )
          </Link>
        </div>
      </section>
    </>
  );
};

export default AlarmNav;

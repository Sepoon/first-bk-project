import React from 'react'
import { Link } from 'react-router-dom'

const QuickMenu = () => {
  return (
    <>
    <aside className="navbar-vertical navbar-expand-lg navbar-dark quickaction-tray">
    <div className="quickaction-title">Quick MENU</div>
    <Link to="/Customer" className="quickaction-item">
        <i className="ti ti-pin"></i> 1:1문의
    </Link>
    <Link to="/IntergrationGame" className="quickaction-item">
        <i className="ti ti-pin"></i> 통합경기등록
    </Link>
    <Link to="/AutoGame" className="quickaction-item">
        <i className="ti ti-pin"></i> 자동경기등록
    </Link>
    <Link to="/User" className="quickaction-item">
        <i className="ti ti-pin"></i> 회원관리
    </Link>
    <Link to="/Level" className="quickaction-item">
        <i className="ti ti-pin"></i> 레벨권한관리
    </Link>
    <Link to="/ProgressGame" className="quickaction-item">
        <i className="ti ti-pin"></i> 진행중경기
    </Link>
    </aside>


</>
  )
}

export default QuickMenu
import React from 'react'

const Chatting = () => {
  return (
    <>
      <section className="page-wrapper">
        
        <div className="container-fluid">
          {/* <!-- Page title --> */}
          <div className="page-header d-print-none">
            <div className="row align-items-center">
              <div className="col">
                <h2 className="page-title">기본환경 설정</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row row-cards mb-3">
              <div className="col-12">
                <div id="chatsettings-container"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Chatting

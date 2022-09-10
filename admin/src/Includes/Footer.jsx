// import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// const Footer = (props) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => {
//     setShow(false);
//     props.onModalClose();
//   };
//   const handleShow = () => setShow(true);

//   useEffect(() => {
//     setShow(props.showModal);
//   });

//   return (
//     <>

//       <Modal show={show} onHide={handleClose} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title style={{ fontSize: 16 }}>현재접속자</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h6>
//             현재접속자 수 : <span id="currentsessions-count">0</span>명
//           </h6>
//           <table
//             id="currentsessions-list"
//             className="table card-table table-vcenter text-nowrap datatable table-compact"
//           >
//             <thead>
//               <tr>
//                 <th>닉네임</th>
//                 <th>아이피</th>
//                 <th>도메인</th>
//                 <th className="w-1"></th>
//                 <th className="w-1"></th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>aaaa</td>
//                 <td>bbb</td>
//                 <td>cccc</td>
//                 <td>dddd</td>
//                 <td>eeee</td>
//               </tr>
//               <tr>
//                 <td>aaaa</td>
//                 <td>bbb</td>
//                 <td>cccc</td>
//                 <td>dddd</td>
//                 <td>eeee</td>
//               </tr>
//               <tr>
//                 <td>aaaa</td>
//                 <td>bbb</td>
//                 <td>cccc</td>
//                 <td>dddd</td>
//                 <td>eeee</td>
//               </tr>
//               <tr>
//                 <td>aaaa</td>
//                 <td>bbb</td>
//                 <td>cccc</td>
//                 <td>dddd</td>
//                 <td>eeee</td>
//               </tr>
//               <tr>
//                 <td>aaaa</td>
//                 <td>bbb</td>
//                 <td>cccc</td>
//                 <td>dddd</td>
//                 <td>eeee</td>
//               </tr>
//             </tbody>
//           </table>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           {/* <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button> */}
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default Footer;

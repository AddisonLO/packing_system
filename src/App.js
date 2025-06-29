import './css/App.css';
import ItemTable from './components/ItemTable'
import React, { useEffect, useState } from 'react';
import './css/ItemTable.css';
import CreateRecord from './components/CreateRecord';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/CreateRecord.css';
import { Modal, Button } from 'react-bootstrap';


function App() {
  const [message, setMessage] = useState('');
  const [records, setRecords] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);


  useEffect(() => {
    document.title = "Shipping System";
    fetch('/api') // No need to specify the full URL because of the proxy
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleCreate = (newRecord) => {
    setRecords((prev) => [...prev, newRecord]);
  };

  return (
    <div className="App">

      <div className="Introduction">
        <b className="companyName">SHENZHEN PENGQIANLI LOGISTICS CO.,LTD</b>
        {/*<p className="address">Unit 2107C, 21st Floor, Runhong Mansion T2, No.75 Meiyuan Road, Shooting West Community, Shootgang Street, Luohu District, Shenzhen, China</p> */}
        <p className="pageTitle"><b><u>PACKING LIST</u></b></p>
      </div>
      
      {/*
      <div className="header">
        <p><b>To:</b><span className="Receiver">LOK WAH (VIETNAM) MANUFACTURING COMPANY LIMITED</span></p>
        <p>TAX NO. : 0601223667</p>
        <p>LOT H8, DETAILED PLANNING MAP OF</p>
       
        <p>HOA XA INDUSTRIAL, PARK MY XA WARD, NAM DING CITY, NAM DINH PROVINCE, VIETNAM</p>
        
        <p>TEL: 02283909888 Fax: 02283913888</p>
        <p><u>E-MAIL: Ramo@lokwah.com.vn/.linnv@lokwah.com.vn</u></p>
      </div>
      */}
      
      <button className="btn btn-success mb-3" onClick={() => setShowCreateModal(true)}>
             + Create Record
      </button>

      <div className="item-list">
        <div className="meta-info">
          <p>DATE: MAR-29-2025</p>
          <p>CONTAINER: PART OF 2X 40' HQ</p>
          <p>PORT OF DISCHARGE: HAIPHONG, VIETNAM</p>
          <p>INVOICE NO.: SL-LW20250529</p>
          

        </div>
        <div className="skip-line"></div>
        <ItemTable />
      </div>
    

      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Packing record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateRecord
              onCreate={(newRec) => {
              handleCreate(newRec);
              setShowCreateModal(false); // close on submit
              }}
          />
       </Modal.Body>
      </Modal>
    </div>
    
  );
}

export default App;
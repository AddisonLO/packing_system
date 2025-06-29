import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  itemNo: '',
  hkOrder1: '',
  hkOrder2: '',
  commodities: '',
  description: '',
  companyName: '',
  cn: '',
  cartonTotal: '',
  qtyPerCarton: '',
  unit: '',
  totalQty: '',
  gw: '',
  nw: '',
  totalGw: '',
  totalNw: '',
  measurement: '',
};

const CreateRecord = ({ onCreate }) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    setFormData(initialState);
  };

  return (
    <div className="create-record mt-3">
      <h5 className="mb-3 text-end">Add Packing Entry</h5>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          {[
            ['Item No.', 'itemNo'],
            ['HK Order 1', 'hkOrder1'],
            ['HK Order 2', 'hkOrder2'],
            ['Commodities', 'commodities'],
            ['Description', 'description'],
            ['Company Name', 'companyName'],
            ['C/N.', 'cn'],
            ['Carton Total', 'cartonTotal'],
            ['Qty (Per Carton)', 'qtyPerCarton'],
            ['Unit', 'unit'],
            ['Total Qty', 'totalQty'],
            ['G.W (KGS)', 'gw'],
            ['N.W (KGS)', 'nw'],
            ['Total G.W.', 'totalGw'],
            ['Total N.W.', 'totalNw'],
            ['Measurement', 'measurement']
          ].map(([label, name]) => (
            <div className="col-md-6" key={name}>
              <label className="form-label">{label}</label>
              <input
                type="text"
                name={name}
                className="form-control"
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
        </div>
        <div className="text-end mt-3">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecord;

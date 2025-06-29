import React from 'react';

const columns = [
  { key: 'itemNo', label: 'ITEM NO.' },
  { key: 'hkOrderCode', label: 'Code' },
  { key: 'hkOrderModel', label: 'Model' },
  { key: 'commodities', label: 'COMMODITIES' },
  { key: 'description', label: 'DESCRIPTION' },
  { key: 'companyName', label: 'Company Name' },
  { key: 'cn', label: 'C/N.' },
  { key: 'cartonTotal', label: 'CARTON TOTAL' },
  { key: 'qtyPerCarton', label: 'QTY (PER CARTON)' },
  { key: 'unit', label: 'UNIT' },
  { key: 'totalQty', label: 'TOTAL: QTY' },
  { key: 'gw', label: 'G.W (KGS)' },
  { key: 'nw', label: 'N.W (KGS)' },
  { key: 'totalGw', label: 'TOTAL: G.W.' },
  { key: 'totalNw', label: 'TOTAL: N.W.' },
  { key: 'measurement', label: 'MEASUREMENT' }
];

const rows = [
  {
    itemNo: 1,
    hkOrderCode: 'V25',
    hkOrderModel: 'SC-6437',
    commodities: 'PVC Artificial Leather',
    description: 'BZ-1698',
    companyName: 'Dongguan Brose Leather Co., L.t.d',
    cn: '1-202',
    cartonTotal: 202,
    qtyPerCarton: 30,
    unit: 'Y',
    totalQty: 6060,
    gw: 40.9,
    nw: 40.7,
    totalGw: 8261.8,
    totalNw: 8221.4,
    measurement: '138x26'
  },
  // Add more row objects as needed
];

const ItemTable = () => {
  return (
    <div className="item-table">
      <table>
        <thead>
          <tr>
            <th rowSpan="2">ITEM NO.</th>
            <th colSpan="2">HK ORDER</th>
            <th rowSpan="2">COMMODITIES</th>
            <th rowSpan="2">DESCRIPTION</th>
            <th rowSpan="2">Company Name</th>
            <th rowSpan="2">C/N.</th>
            <th rowSpan="2">CARTON TOTAL</th>
            <th rowSpan="2">QTY (PER CARTON)</th>
            <th rowSpan="2">UNIT</th>
            <th rowSpan="2">TOTAL: QTY</th>
            <th rowSpan="2">G.W (KGS)</th>
            <th rowSpan="2">N.W (KGS)</th>
            <th rowSpan="2">TOTAL: G.W.</th>
            <th rowSpan="2">TOTAL: N.W.</th>
            <th rowSpan="2">MEASUREMENT</th>
          </tr>
          <tr>
            <th>Code</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {columns.map((col, ci) => (
                <td key={ci}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;

import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

function DisplayTable({ expenses }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body" id="exp-detail-card">
          <Table striped responsive id="expenses-table">
            <Thead className="bg-dark text-light">
              <Tr>
                <Th scope="col"><input type="checkbox" id="check-all" className="check" /></Th>
                <Th scope="col">Date</Th>
                <Th scope="col">Description</Th>
                <Th scope="col">Image</Th>
                <Th scope="col">Category</Th>
                <Th scope="col">Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                
              }
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default DisplayTable;

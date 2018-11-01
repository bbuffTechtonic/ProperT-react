import React from 'react';

export const Money = function(props){

    return (
      <section className="money">
              <div id="ytd-totals" className="row">
                <div className="col-sm-8 offset-sm-2 col-12">
                  <div className="card">
                    <div className="card-body">
                      <table className="table table-striped table-sm mt-10">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">Revenue (YTD)</th>
                            <th scope="col">Expenses (YTD)</th>
                            <th scope="col">Profit (YTD)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td id="totIncome" className="text-center">{props.totIncome}</td>
                            <td id="totExpenses" className="text-center">{props.totExpenses}</td>
                            <td id="totProfit" className="text-center">{props.totProfit}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
      </section>
    );
}

//export default Money;

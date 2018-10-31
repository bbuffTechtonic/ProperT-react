import React from 'react';

export const Money = function(props){

    return (
      <section className="money">
              <div id="ytd-totals" class="row">
                <div class="col-sm-8 offset-sm-2 col-12">
                  <div class="card">
                    <div class="card-body">
                      <table class="table table-striped table-sm mt-10">
                        <thead class="thead-dark">
                          <tr>
                            <th scope="col">Revenue (YTD)</th>
                            <th scope="col">Expenses (YTD)</th>
                            <th scope="col">Profit (YTD)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td id="totIncome" class="text-center">{props.totIncome}</td>
                            <td id="totExpenses" class="text-center">{props.totExpenses}</td>
                            <td id="totProfit" class="text-center">{props.totProfit}</td>
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

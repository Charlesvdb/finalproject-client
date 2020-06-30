import React from 'react'
import './Pagination.css';

class Pagination extends React.Component {
    render(){
      var {pageUp, pageDown, getAmountNumber} = this.props;

      return (
        <div className="row">
            <div className="pagechange">
                <a href="#" className="pageprev" onClick={(e) => {e.preventDefault(); pageDown();}}>❮Go to previous page</a>
                <a href="#" className="pagenext" onClick={(e) => {e.preventDefault(); pageUp();}}>Go to next page❯</a>
            </div>

            <div className="pagenumbers pagination">
                <a href="#" className="pagnumber active" onClick={(e) => getAmountNumber(e)}>4</a>
                <a href="#" className="pagnumber" onClick={(e) => getAmountNumber(e)}>8</a>
                <a href="#" className="pagnumber" onClick={(e) => getAmountNumber(e)}>12</a>
            </div>
        </div>
      )
    }
}

export default Pagination
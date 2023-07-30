import "./featured.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Sales & Revenue Details</h1>
        <p className="para">Total Revenue: Rs 10000000</p>
        <p className="para">Total Expenses: Rs 800000</p>
        <p className="para">Gross Profit: Rs 78%</p>
        <p className="para">Net Profit: Rs 68%</p>
        <p className="para">Sales Today: Rs 78,000</p>
        <p className="para">Sales This Week: Rs 1,78,000</p>
        <p className="para">Sales This month: Rs 11,68,000</p>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">Rs 78,000</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              < KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">Rs 1,50,000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              < KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">Rs 3,64,000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              < KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">Rs 12.4Lakhs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import { useState } from "react";
import data from "./data.json";

function App() {
  const items = data.map((item) => {
    const [isHover, setIsHover] = useState(false);

    function handleMouseEnter() {
      setIsHover(true);
    }

    function handleMouseLeave() {
      setIsHover(false);
    }

    var today = new Date().getDay();
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const height = 3 * item.amount;

    const stylesHover = {
      height: height,
      backgroundColor:
        isHover && days[today] === item.day
          ? "hsl(186, 34%, 70%)"
          : "hsl(10, 79%, 75%)",
    };

    const stylesNormal = {
      height: height,
      backgroundColor:
        days[today] === item.day ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)",
    };

    return (
      <div className="spending-single-day" key={item.day}>
        <div
          className="spending-bar"
          style={isHover ? stylesHover : stylesNormal}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHover && (
            <div className="single-day-amount">
              <p>${item.amount}</p>
            </div>
          )}
        </div>
        <div className="spending-data-day">{item.day}</div>
      </div>
    );
  });

  return (
    <main>
      <div className="balance">
        <div className="balance-info">
          <p className="balance-title">My balance</p>
          <p className="balance-amount">$921.48</p>
        </div>
        <div className="balance-circles">
          <div className="balance-left-circle"></div>
          <div className="balance-right-circle"></div>
        </div>
      </div>

      <div className="spending">
        <h3 className="spending-title">Spending - Last 7 days</h3>
        <div className="spending-data">{items}</div>
        <hr />
        <div className="spending-info">
          <div className="spending-info-left">
            <p className="spending-info-title">Total this month</p>
            <p className="spending-info-amount">$478.33</p>
          </div>
          <div className="spending-info-right">
            <p className="spending-info-growth">+2.4%</p>
            <p className="spending-info-growth-text">from last month</p>
          </div>
        </div>
      </div>

      <div class="attribution">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Matija Zinic</a>.
        </p>
      </div>
    </main>
  );
}

export default App;

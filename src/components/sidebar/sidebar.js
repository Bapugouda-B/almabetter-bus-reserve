import "../sidebar/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-back">
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="clear-all">
            <div className="filter-clear">
              <a href="/">
                <p className="filter">Filter</p>
              </a>
              <a href="/">
                <p className="clear">Clear All</p>
              </a>
            </div>
          </div>
          <div className="filter-content">
            <div className="filter-item">
              <div className="departure-time">
                <p className="filter-heading">Departure Time</p>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Morning Session</span>
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Afternoon Session</span>
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Evening Session</span>
                </div>
                <hr />
              </div>
              <div className="arrival-time">
                <p className="filter-heading">Arrival Time</p>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Morning Session</span>
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Afternoon Session</span>
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Evening Session</span>
                </div>
                <hr />
              </div>
              <div className="pickup-point">
                <p className="filter-heading">Pickup Point</p>
                <div className="filter-search">
                  <i class="uil uil-search icon"></i>
                  <input type="search" className="input-field" />
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Bengaluru</span>
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Mysore</span>
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Mandya</span>
                </div>
                <hr />
              </div>
              <div className="drop-point">
                <p className="filter-heading">Drop Point</p>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Bengaluru</span>
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Mysore</span>
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Mandya</span>
                </div>
                <hr />
              </div>
              <div className="bus-rating">
                <p className="filter-heading">Bus Rating</p>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>4 star or more</span>
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>3 star or more</span>
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>0-2 star</span>
                </div>
                <hr />
              </div>
              <div className="bus-operator">
                <p className="filter-heading">Bus Operator</p>
                <div className="filter-search">
                  <i class="uil uil-search icon"></i>
                  <input type="search" className="input-field" />
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Bengaluru</span>
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Mysore</span>
                </div>
                <div className="morning-sess">
                  <input type="checkbox" />
                  <span>Mandya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

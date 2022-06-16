import React from "react";

const UserTable = () => {
  return (
    <div className="userTable">
      <div className="container">
        <div className="userDetail">
          <div className="userDetail_list">
            <div className="list_name">
              <button>Profile</button>
              <div className="bgClose" />
              <div className="sidebar">
                <div className="close"></div>
                <div className="sidebar_scroll">
                  <div className="user_profile">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="img" />
                    <h2>Shalini</h2>
                    <p>Designer</p>
                  </div>
                  <form className="form">
                    <div className="form_group">
                      <label for="">sdcdfs</label>
                      <input type="text" id="" className="form_control" placeholder="dsyg" />
                    </div>
                    <div className="form_group">
                      <label for="">sdcdfs</label>
                      <input type="text" id="" className="form_control" placeholder="dsyg" />
                    </div>
                    <div className="form_group">
                      <label for="">sdcdfs</label>
                      <input type="text" id="" className="form_control" placeholder="dsyg" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="list_name">
              <button>Post</button>
              <div className="bgClose" />
              <div className="sidebar">
                <div className="close"></div>
                <div className="sidebar_scroll">
                  <div className="post">
                  <div className="post_card">
                    <div className="post_card_left">
                      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="img" />
                    </div>
                    <div className="post_card_right">
                      <h2>Shalini Rana</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span>dkj 21</span>
                      <h2>dcbhjdcgdsc dcghdajycgbdsc uycgqwb cwqhyqwhb q</h2>
                      <p>fewfw we ewvweewv ew evwe vevwe v ewv wr vrw vwr efwefewfwefwefwefewfwefw   wefew we</p>
                    </li>
                    <li>
                      <span>dkj 21</span>
                      <h2>dcbhjdcgdsc dcghdajycgbdsc uycgqwb cwqhyqwhb q</h2>
                      <p>fewfw we ewvweewv ew evwe vevwe v ewv wr vrw vwr efwefewfwefwefwefewfwefw   wefew we</p>
                    </li>
                    <li>
                      <span>dkj 21</span>
                      <h2>dcbhjdcgdsc dcghdajycgbdsc uycgqwb cwqhyqwhb q</h2>
                      <p>fewfw we ewvweewv ew evwe vevwe v ewv wr vrw vwr efwefewfwefwefwefewfwefw   wefew we</p>
                    </li>
                    <li>
                      <span>dkj 21</span>
                      <h2>dcbhjdcgdsc dcghdajycgbdsc uycgqwb cwqhyqwhb q</h2>
                      <p>fewfw we ewvweewv ew evwe vevwe v ewv wr vrw vwr efwefewfwefwefwefewfwefw   wefew we</p>
                    </li>
                    <li>
                      <span>dkj 21</span>
                      <h2>dcbhjdcgdsc dcghdajycgbdsc uycgqwb cwqhyqwhb q</h2>
                      <p>fewfw we ewvweewv ew evwe vevwe v ewv wr vrw vwr efwefewfwefwefwefewfwefw   wefew we</p>
                    </li>
                    <li>
                      <span>dkj 21</span>
                      <h2>dcbhjdcgdsc dcghdajycgbdsc uycgqwb cwqhyqwhb q</h2>
                      <p>fewfw we ewvweewv ew evwe vevwe v ewv wr vrw vwr efwefewfwefwefwefewfwefw   wefew we</p>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>User Table</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Lois</td>
                <td>Griffin</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>Joe</td>
                <td>Swanson</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;

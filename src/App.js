import './App.css';
import { Component } from 'react';
import StaffList from './components/StaffListComponent';
import { STAFFS } from './shared/staffs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }

  //Using Boostrap Responsive Flex for showing staffs list
  render() {
    return(
      <div className="App">
        <div className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Ứng Dụng Quản Lý Nhân Sự v1.0</a>
          </div>
        </div>
      
        <div className="d-flex justify-content-around flex-wrap"> 
          <StaffList staffs = {this.state.staffs}/>
        </div>

      </div>
    );
  }
}

export default App;
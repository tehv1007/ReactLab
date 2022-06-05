import './App.css';
import { Component } from 'react';
import StaffList from './components/StaffListComponent';
import { STAFFS } from './shared/staffs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS, // Array[objS]
    };
  }

  onChangeSelected(event) {
    this.props.onChangeSelected(event.target.value);
  }

  render() {

    return(
      <div className="App">

        <div className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Ứng Dụng Quản Lý Nhân Sự v1.0</a>
            <select className="colstyle" onChange={this.onChangeSelected} value={this.props.staff}>
                <option> Lựa chọn số cột hiển thị</option>
                <option value="col-md-6" > Số cột hiển thị: 2</option>
                <option value="col-md-4" > Số cột hiển thị: 3</option>
                <option value="col-md-3" > Số cột hiển thị: 4</option>
                <option value="col-md-2" > Số cột hiển thị: 6</option>
            </select>
          </div>
        </div>

        <div className="d-flex justify-content-around flex-wrap">
          <StaffList staffs = {this.state.staffs} />
        </div>

      </div>
    );
  }
}

export default App;
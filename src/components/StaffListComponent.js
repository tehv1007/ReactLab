import { Component } from 'react';
import StaffInfo from './StaffComponent';

class StaffList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            selectedStaff : null,
        };
    }

    onStaffSelect(staff) {
        this.setState({
            selectedStaff: staff
        })
    }

    render() {
        const staffList = this.props.staffs.map(staff => {
            return(
                <div key={staff.id} className="col-md-4 col-sm-6 col-xs-12 text-center">
                    <div className="card" onClick={() => this.onStaffSelect(staff)} style={{cursor:"pointer", margin:"5px"}}>
                        <img className="card-img-top" src={staff.image} style={{width:"100%"}} alt={staff.name} />
                        <div className="card-body">
                            <h5 className="card-title">{staff.name}</h5>
                            
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div className="container">

                <div className="row col" style={{color:'blue',margin:'10px 0'}}>
                    <h5>Bấm vào tên nhân viên để xem thông tin </h5>
                </div>
                
                <StaffInfo staff={this.state.selectedStaff}/>

                <div className="row">
                    {staffList}
                </div>
                
            </div>
        )
    
    }

}

export default StaffList;
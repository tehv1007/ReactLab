import React from 'react';
import {Jumbotron} from 'react-bootstrap';

function Home(props) {
    return(
        <div>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col">
                            <h2>ỨNG DỤNG QUẢN LÝ NHÂN SỰ</h2>
                            <p>Ứng dụng quản lý nhân sự giúp tăng cường khả năng quản lý, giám sát, điều hành doanh nghiệp, mở rộng khả năng truy cập thông tin giúp cho các nhà quản lý thực hiện công việc của mình một cách nhanh chóng, dễ dàng và thuận tiện. Sử dụng tối ưu nguồn lực trong sản xuất kinh doanh, giảm thiểu khối lượng công việc giấy tờ. Phân tích và đánh giá thông tin chính xác, kịp thời thông qua hệ thống các giải pháp lưu trữ thông tin, thực hiện theo một quy trình thống nhất và chuẩn hóa.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <img className='featured-img' src={props.image.img} alt={props.image.name} width="100%"/>
        </div>
    );
}

export default Home;
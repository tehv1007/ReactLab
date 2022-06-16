export const IMAGE = {
    id: 0,
    img: '/assets/images/featured.jpg',
    name: "featured image"
}

export const DEPARTMENTS =
    [
        {
            id: "Dept01",
            name: "Sale",
            numberOfStaff: 3
        },
        {
            id: "Dept02",
            name: "HR",
            numberOfStaff: 2
        },
        {
            id: "Dept03",
            name: "Marketing",
            numberOfStaff: 2
        },
        {
            id: "Dept04",
            name: "IT",
            numberOfStaff: 2
        },
        {
            id: "Dept05",
            name: "Finance",
            numberOfStaff: 7
        }
    ]
export const ROLE = {
    NORMAL_STAFF: "Nhân viên",
    MANAGER_STAFF: "Quản lý"
}
export const STAFFS =
    [
        {
            id: 0,
            name: "Nguyễn Đức Tài",
            doB: "1999-01-01T08:59:00.000Z",
            salaryScale: 1.1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[0],
            annualLeave: 1,
            overTime: 1,
            image: '/assets/images/staff1.jpg',
            role: ROLE.MANAGER_STAFF,
        },
        {
            id: 1,
            name: "Nguyễn Thị Phương Thảo",
            doB: "2000-01-01T08:59:00.000Z",
            salaryScale: 1.2,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[1],
            annualLeave: 2,
            overTime: 3,
            image: '/assets/images/staff2.jpg',
            role: ROLE.MANAGER_STAFF
        },
        {
            id: 2,
            name: "Trần Đình Long",
            doB: "2001-01-01T08:59:00.000Z",
            salaryScale: 1.3,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[3],
            annualLeave: 4,
            overTime: 5,
            image: '/assets/images/staff3.jpg',
            role: ROLE.MANAGER_STAFF
        },
        {
            id: 3,
            name: "Vũ Thị Hiền",
            doB: "2002-01-01T08:59:00.000Z",
            salaryScale: 1.2,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[2],
            annualLeave: 6,
            overTime: 7,
            image: '/assets/images/staff4.jpg',
            role: ROLE.MANAGER_STAFF
        },
        {
            id: 4,
            name: "Phạm Thu Hương",
            doB: "1999-01-01T08:59:00.000Z",
            salaryScale: 1.3,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 8,
            overTime: 1,
            image: '/assets/images/staff5.jpg',
            role: ROLE.MANAGER_STAFF
        },
        {
            id: 5,
            name: "Phạm Thúy Hằng",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[0],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/staff6.jpg',
            role: ROLE.NORMAL_STAFF
        },
        {
            id: 6,
            name: "Nguyễn Thị Thanh Thủy",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[0],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/staff7.jpg',
            role: ROLE.NORMAL_STAFF
        },
        {
            id: 7,
            name: "Đỗ Anh Tuấn",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[2],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/staff8.jpg',
            role: ROLE.NORMAL_STAFF
        },
        {
            id: 8,
            name: "Nguyễn Thị Thanh Tâm",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[3],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/staff9.jpg',
            role: ROLE.NORMAL_STAFF
        },
        {
            id: 9,
            name: "Vũ Thị Quyên",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/staff10.jpg',
            role: ROLE.NORMAL_STAFF
        },
        {
            id: 10,
            name: "Nguyễn Đăng Quang",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/staff11.jpg',
            role: ROLE.NORMAL_STAFF
        },
        {
            id: 11,
            name: "Trương Thị Lệ Khanh",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/staff12.jpg',
            role: ROLE.NORMAL_STAFF
        },
        {
            id: 12,
            name: "Nguyễn Hoàng Yến",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/staff13.jpg',
            role: ROLE.NORMAL_STAFF
        },
        {
            id: 13,
            name: "Hồ Hùng Anh",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/staff14.jpg',
            role: ROLE.NORMAL_STAFF
        },
        {
            id: 14,
            name: "Bùi Thành Nhơn",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/staff15.jpg',
            role: ROLE.NORMAL_STAFF
        },
        {
            id: 15,
            name: "Nguyễn Văn Đạt",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[1],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/staff16.jpg',
            role: ROLE.NORMAL_STAFF
        },

    ]
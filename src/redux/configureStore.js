import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { Staffs } from './staffs';
import { Departments } from './departments';
import { HomeImage } from './featuredImg';
import { DeptImages } from './deptImg';
import { StaffsSalary } from './staffsSalary';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const reducer = combineReducers({
    staffs: Staffs,
    departments: Departments,
    homeImage: HomeImage,
    deptImages: DeptImages,
    staffsSalary: StaffsSalary,
});

export const ConfigureStore = () => {
    const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger)
    });
    return store;
} 
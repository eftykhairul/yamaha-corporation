import React from 'react';
import './Dashbord.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Button from '@restart/ui/esm/Button';
import MyOrder from '../../MyOrder/MyOrder';

import DashbordHome from '../DashbordHome/DashbordHome';
import Pay from '../Pay/Pay';
import AddReview from '../AddReview/AddReview';
import useAuth from '../../../hooks/useAuth';
import MakeAnAdmin from '../MakeAnAdmin/MakeAnAdmin';
import Addservice from '../../AddService/AddService';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';


const Dashbord = () => {
    let { path, url } = useRouteMatch();
    const {admin,logOut} = useAuth();
    return (
        
        <div className='container'>
            <h1 className=''>Dashboard</h1>
            <div className='contain'>
            
            <div>
                
                {!admin && <div>
                <Link to={`${url}/myOrders`}><Button className='btn btn-warning my-2' color='inherit'>My Orders</Button> </Link><br/>
                <Link to={`${url}/reviewData`}><Button className='btn btn-warning my-2' color='inherit'>Review</Button> </Link><br/>
                <Link to={`${url}/pay`}><Button className='btn btn-warning my-2' color='inherit'>Pay</Button> </Link><br/>
                    </div>}
                {admin && <div>
                    <Link to={`${url}/addService`}><Button className='btn btn-warning my-2' color='inherit'>AddService</Button></Link><br/>
                    <Link to={`${url}/manageAllProduct`}><Button className='btn btn-warning my-2' color='inherit'>Manage Products</Button></Link><br/>
                    <Link to={`${url}/manageAllOrders`}><Button className='btn btn-warning my-2' color='inherit'>Manage Orders</Button></Link><br/>
                    <Link to={`${url}/admin`}><Button className='btn btn-warning my-2' color='inherit'>Admin</Button> </Link><br/>

                </div>
                }
                <Button onClick={logOut} className='btn btn-warning' variant='primary'>Log Out</Button>
            </div>
            
                <Switch>
                    <Route exact path={path}>
                        <DashbordHome></DashbordHome>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/reviewData`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/addService`}>
                        <Addservice></Addservice>
                    </Route>
                    <Route path={`${path}/manageAllProduct`}>
                        <ManageAllProduct></ManageAllProduct>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/admin`}>
                        <MakeAnAdmin></MakeAnAdmin>
                    </Route>
                </Switch>
            
        </div>
        
        </div>
    );
};

export default Dashbord;
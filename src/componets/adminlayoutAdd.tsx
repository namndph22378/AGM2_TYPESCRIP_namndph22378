import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './admin/adheader';
// import SideberAdd from './admin/adslideAdd';
type Props = {};
const AdminLayoutADD = (props: Props) => {
    return (
        <div>
            <header className="bg-[#00B0D7]">
                <Header />
            </header>
            <div className="flex flex-row">
                <div className='w-2/12'>
                    {/* <SideberAdd /> */}
                </div>
                <div className='w-10/12'>
                    <Outlet />
                </div>
            </div>
        </div>
    );

};
export default AdminLayoutADD;
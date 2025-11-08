import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className="bg-base-200 min-h-screen max-w-[1550px] mx-auto flex flex-col justify-between">
            <Nav></Nav>
            <main>
        <Outlet></Outlet>
            </main>
            <Footer>
                This is Footer
            </Footer>
        </div>
    );
};

export default Root;
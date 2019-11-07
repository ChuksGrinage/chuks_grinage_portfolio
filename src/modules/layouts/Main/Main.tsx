import React from 'react';

import { NavBar } from 'modules/components';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}

export default MainLayout;
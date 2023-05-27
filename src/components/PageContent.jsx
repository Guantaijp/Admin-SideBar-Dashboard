import React from "react";
import AppRoutes from "./AppRoutes";
import NavHeader from "./NavHeader";

const PageContent = () => {
    return (
        <>
            <NavHeader />
            <div className="PageContent m-12">
                <AppRoutes />
            </div>
        </>
    );
}

export default PageContent;
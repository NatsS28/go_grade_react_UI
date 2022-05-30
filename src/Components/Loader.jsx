import LoadingOverlay from 'react-loading-overlay';
import React from 'react'

function Loader({ isActive }) {
    console.log("loader");
    
    console.log(isActive);
    return (
        <div>
            <div style={{ backgroundColor: "black", height: "100%", width: "100%" }}>
                <LoadingOverlay
                    active={isActive}
                    spinner
                    text='Loading your content...'
                    styles={{ height: "100vh", width: "100vh", color: "black" }}>
                </LoadingOverlay>
            </div>
        </div>

    );
}

export default Loader
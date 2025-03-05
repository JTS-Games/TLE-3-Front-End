import {Link, Outlet} from "react-router";

function LayoutNoNav(){
    return(
        <div className="bg-background text-xl flex flex-col h-screen justify-between">
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default LayoutNoNav;
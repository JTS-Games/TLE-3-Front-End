import {Link, Outlet} from "react-router";

function Layout(){
    return(
        <div>
            <header>
                <nav>
                    <div>
                        <p>Header</p>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <div>
                    <p>Footer</p>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
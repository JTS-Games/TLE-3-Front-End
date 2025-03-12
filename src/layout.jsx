import {Link, Outlet} from "react-router";

function Layout(){
    return(
        <div className="bg-background text-xl flex flex-col h-screen justify-between">
            <header>
                <nav className="flex items-center justify-between px-20 py-5 mb-5 bg-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.10)]">
                    <div>
                        <p>(app naam)</p>
                    </div>
                    <div className="flex items-center justify-end gap-6">
                        <Link to="/">
                            <div className="bg-button drop-shadow-md py-3 px-6 rounded-full">
                                Lessen
                            </div>
                        </Link>

                        <Link to="/signBook">
                            <div className="bg-button drop-shadow-md py-3 px-6 rounded-full">
                                Gebarenboek
                            </div>
                        </Link>

                        <Link to="/">
                            <div className="bg-button drop-shadow-md py-3 px-6 rounded-full">
                                Games
                            </div>
                        </Link>

                    </div>
                    <div className="flex gap-6">
                        <div>
                            <p>Account</p>
                        </div>
                        <div>
                            <img src="./assets/user-icon.png" className="w-10 h-10"></img>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer className="flex items-center justify-between px-20 py-5 bg-white drop-shadow-[0_-10px_10px_rgba(0,0,0,0.10)]">
                <div>
                    <p>(app naam) ©2025</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div>
                        <p>Gemaakt door:</p>
                    </div>
                    <div>
                        <p>Team 2: Uefa, Yaelen, Maaike, Daan en Joey</p>
                    </div>
                    <div>
                        <p>Team 12: Alex, Abel, David, Sil, Irsan en Jonah</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
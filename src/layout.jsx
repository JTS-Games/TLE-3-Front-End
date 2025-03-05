import {Link, Outlet} from "react-router";

function Layout(){
    return(
        <div className="bg-background text-xl flex flex-col h-screen">
            <header>
                <nav className="flex items-center justify-between px-20 py-5 mb-5 bg-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.10)]">
                    <div>
                        <p>(app naam)</p>
                    </div>
                    <div className="flex items-center justify-end gap-6">
                        <div className="bg-button drop-shadow-md py-3 px-6 rounded-full">
                            <button>Lessen</button>
                        </div>
                        <div className="bg-button drop-shadow-md py-3 px-6 rounded-full">
                            <button>Gebarenboek</button>
                        </div>
                        <div className="bg-button drop-shadow-md py-3 px-6 rounded-full">
                            <button>Games</button>
                        </div>
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
            <footer className="flex items-center justify-between px-20 py-5 mt-5 bg-white drop-shadow-[0_-10px_10px_rgba(0,0,0,0.10)]">
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
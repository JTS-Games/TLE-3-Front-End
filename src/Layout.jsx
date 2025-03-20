import {Link, Outlet} from "react-router";

function Layout(){
    return(
        <div className="bg-background text-xl flex flex-col min-h-screen justify-between font-kulim">
            <header>
                <nav className="hidden md:flex items-center justify-between px-20 py-5 mb-5 bg-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.10)]">
                    <div>
                        <p>Handygo</p>
                    </div>
                    <div className="hidden md:flex items-center justify-end gap-6">
                        <Link to="/signBook">
                            <div className="bg-button drop-shadow-md py-3 px-6 rounded-full">
                                Gebarenboek
                            </div>
                        </Link>

                        <Link to="/">
                            <div className="bg-button drop-shadow-md py-3 px-6 rounded-full">
                                Lessen
                            </div>
                        </Link>

                        <Link to="/playlists">
                            <div className="bg-button drop-shadow-md py-3 px-6 rounded-full">
                                Playlist
                            </div>
                        </Link>
                    </div>
                </nav>


                <nav className="fixed bottom-4 rounded-full left-7 right-7 bg-white p-3 drop-shadow-md z-50 flex justify-around items-center md:hidden">
                    {/* Navigatieknoppen */}
                    <Link to="/signBook" className="flex flex-col items-center">
                        <svg width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.6667 30.3333V25.3333H7C4.23858 25.3333 2 27.5719 2 30.3333M10 35.3333H23.3333C25.2002 35.3333 26.1336 35.3333 26.8466 34.97C27.4738 34.6504 27.9838 34.1405 28.3034 33.5133C28.6667 32.8003 28.6667 31.8668 28.6667 30V7.33333C28.6667 5.46649 28.6667 4.53307 28.3034 3.82003C27.9838 3.19282 27.4738 2.68289 26.8466 2.36331C26.1336 2 25.2002 2 23.3333 2H10C7.19974 2 5.79961 2 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2 5.79961 2 7.19974 2 10V27.3333C2 30.1336 2 31.5337 2.54497 32.6033C3.02433 33.5441 3.78924 34.309 4.73005 34.7884C5.79961 35.3333 7.19974 35.3333 10 35.3333Z" stroke="#168FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </Link>

                    <Link to="/" className="flex flex-col items-center">
                        <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 27.0001L30.3331 28.8235C29.4491 29.7903 28.2502 30.3334 27.0002 30.3334C25.7502 30.3334 24.5513 29.7903 23.6673 28.8235C22.782 27.8586 21.5833 27.3168 20.3336 27.3168C19.084 27.3168 17.8852 27.8586 17 28.8235M2 30.3334H4.79091C5.60621 30.3334 6.01386 30.3334 6.39748 30.2413C6.7376 30.1596 7.06275 30.0249 7.36099 29.8422C7.69738 29.636 7.98564 29.3478 8.56214 28.7713L29.5 7.83339C30.8808 6.45267 30.8808 4.2141 29.5 2.83338C28.1193 1.45267 25.8808 1.45267 24.5 2.83338L3.5621 23.7713C2.98559 24.3478 2.69734 24.636 2.4912 24.9724C2.30844 25.2707 2.17376 25.5958 2.0921 25.9359C2 26.3196 2 26.7272 2 27.5425V30.3334Z" stroke="#168FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>

                    <Link to="/playlists" className="flex flex-col items-center">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90525 10.3311 8.03429 10.7326 8.29239L15.4532 11.3271C15.8016 11.551 15.9758 11.663 16.0359 11.8054C16.0885 11.9298 16.0885 12.0702 16.0359 12.1946C15.9758 12.337 15.8016 12.449 15.4532 12.6729L10.7326 15.7076C10.3311 15.9657 10.1304 16.0948 9.96438 16.0829C9.81971 16.0726 9.68666 15.9999 9.59974 15.8838C9.5 15.7506 9.5 15.512 9.5 15.0347V8.96533Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </nav>


            </header>
            <main>
                <Outlet/>
            </main>
            <footer className="hidden md:flex flex flex-col md:flex-row items-center justify-between px-5 md:px-20 py-5 bg-white drop-shadow-[0_-10px_10px_rgba(0,0,0,0.10)]">
                <div className="mb-3 md:mb-0">
                    <p>Handygo ©2025</p>
                </div>

                <div className="flex flex-col gap-3 text-center md:text-left">
                    <p>Gemaakt door:</p>
                    <p>Team 2: Uefa, Yaelen, Maaike, Daan en Joey</p>
                    <p>Team 12: Alex, Abel, David, Sil, Irsan en Jonah</p>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
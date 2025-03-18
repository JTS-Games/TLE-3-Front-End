import {Link, Outlet} from "react-router";

function Layout(){
    return(
        <div className="bg-background text-xl flex flex-col min-h-screen justify-between">
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

                        <Link to="/">
                            <div className="bg-button drop-shadow-md py-3 px-6 rounded-full">
                                Games
                            </div>
                        </Link>
                    </div>

                    {/* Account Info */}
                    <div className="hidden md:flex gap-6 items-center">
                        <div>
                            <p>Account</p>
                        </div>
                        <div>
                            <img src="./assets/user-icon.png" alt="User Icon" className="w-10 h-10" />
                        </div>
                    </div>
                </nav>


                <nav className="fixed bottom-4 rounded-full left-7 right-7 bg-white p-3 drop-shadow-md z-50 flex justify-around items-center md:hidden">
                    {/* Navigatieknoppen */}
                    <Link to="/signBook" className="flex flex-col items-center">
                        <svg width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.6667 30.3333V25.3333H7C4.23858 25.3333 2 27.5719 2 30.3333M10 35.3333H23.3333C25.2002 35.3333 26.1336 35.3333 26.8466 34.97C27.4738 34.6504 27.9838 34.1405 28.3034 33.5133C28.6667 32.8003 28.6667 31.8668 28.6667 30V7.33333C28.6667 5.46649 28.6667 4.53307 28.3034 3.82003C27.9838 3.19282 27.4738 2.68289 26.8466 2.36331C26.1336 2 25.2002 2 23.3333 2H10C7.19974 2 5.79961 2 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2 5.79961 2 7.19974 2 10V27.3333C2 30.1336 2 31.5337 2.54497 32.6033C3.02433 33.5441 3.78924 34.309 4.73005 34.7884C5.79961 35.3333 7.19974 35.3333 10 35.3333Z" stroke="#168FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </Link>

                    <Link to="/" className="flex flex-col items-center">
                        <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 27.0001L30.3331 28.8235C29.4491 29.7903 28.2502 30.3334 27.0002 30.3334C25.7502 30.3334 24.5513 29.7903 23.6673 28.8235C22.782 27.8586 21.5833 27.3168 20.3336 27.3168C19.084 27.3168 17.8852 27.8586 17 28.8235M2 30.3334H4.79091C5.60621 30.3334 6.01386 30.3334 6.39748 30.2413C6.7376 30.1596 7.06275 30.0249 7.36099 29.8422C7.69738 29.636 7.98564 29.3478 8.56214 28.7713L29.5 7.83339C30.8808 6.45267 30.8808 4.2141 29.5 2.83338C28.1193 1.45267 25.8808 1.45267 24.5 2.83338L3.5621 23.7713C2.98559 24.3478 2.69734 24.636 2.4912 24.9724C2.30844 25.2707 2.17376 25.5958 2.0921 25.9359C2 26.3196 2 26.7272 2 27.5425V30.3334Z" stroke="#168FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>

                    <Link to="/games" className="flex flex-col items-center">
                        <svg width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99992 12H15.6666M12.3333 8.66667V15.3333M23.9999 13.6667H24.0166M28.9999 10.3333H29.0166M7.66659 22H30.3333C32.2001 22 33.1335 22 33.8466 21.6367C34.4738 21.3171 34.9837 20.8072 35.3033 20.18C35.6666 19.4669 35.6666 18.5335 35.6666 16.6667V7.33333C35.6666 5.46649 35.6666 4.53307 35.3033 3.82003C34.9837 3.19282 34.4738 2.68289 33.8466 2.36331C33.1335 2 32.2001 2 30.3333 2H7.66659C5.79974 2 4.86632 2 4.15328 2.36331C3.52608 2.68289 3.01614 3.19282 2.69656 3.82003C2.33325 4.53307 2.33325 5.46649 2.33325 7.33333V16.6667C2.33325 18.5335 2.33325 19.4669 2.69656 20.18C3.01614 20.8072 3.52608 21.3171 4.15328 21.6367C4.86632 22 5.79974 22 7.66659 22Z" stroke="#168FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                </nav>


            </header>
            <main>
                <Outlet/>
            </main>
            <footer className="flex flex-col md:flex-row items-center justify-between px-5 md:px-20 py-5 bg-white drop-shadow-[0_-10px_10px_rgba(0,0,0,0.10)]">
                <div className="mb-3 md:mb-0">
                    <p>Handygo ©2025</p>
                </div>

                <div className="flex flex-col gap-3 text-center md:text-left">
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
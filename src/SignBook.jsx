import { useEffect, useState } from "react";
import SignCard from "./SignCard.jsx";

function SignBook(){
    // const [signs, setSigns] = useState([]);
    //
    // async function loadData() {
    //     try {
    //         const response = await fetch("http://145.24.223.78:8001/books", {
    //             headers: {
    //                 Accept: "application/json",
    //             },
    //         });
    //
    //         const data = await response.json();
    //         setSigns(data.items);
    //     } catch (error) {
    //         console.error("Er is een fout opgetreden:", error);
    //     }
    // }

    // useEffect(() => {
    //     loadData();
    // }, []);

    // const DeleteBook = async (id) => {
    //     try {
    //         const response = await fetch(`http://145.24.223.78:8001/books/${id}`, {
    //             method: "DELETE",
    //             headers: {
    //                 Accept: "application/json",
    //             },
    //         });
    //         if (response.ok) {
    //             setBooks(books.filter((book) => book._id !== id));
    //         } else {
    //             console.error("Failed to delete the book");
    //         }
    //     } catch (error) {
    //         console.error("Er is een fout opgetreden bij het verwijderen:", error);
    //     }
    // };

    // return (
    //     <main className="min-h-screen bg-brown-300 p-10">
    //         <h1 className="text-4xl font-serif text-center mb-10 text-brown-700"> Sign Book</h1>
    //
    //         {books.length > 0 ? (
    //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    //                 {books.map((book) => (
    //                     <BookCard key={book._id} book={book} onDelete={DeleteBook} />
    //                 ))}
    //             </div>
    //         ) : (
    //             <div className="text-center text-gray-600 text-lg"> Books are loading...</div>
    //         )}
    //     </main>
    return (
        <div className="bg-brown-300 min-h-screen flex justify-center items-center py-8">
            <div className="max-w-3xl rounded-lg  p-8">
                <h1 className="text-4xl font-bold text-center text-brown-800 mb-6">Welcome to the Book Library</h1>
                <p className="text-lg text-brown-700 text-center leading-relaxed">
                </p>
            </div>
        </div>
    );
}

export default SignBook;
function signBook(){
    return (
        <div className="bg-brown-700 shadow-md rounded-lg overflow-hidden transform">
            <div className="p-5">
                <h2 className="text-3xl font-serif text-yellow-100">{book.title}</h2>
                <p className="text-yellow-100">by {book.author}</p>
                <div className="mt-4 flex justify-between">
                    {/*<Link*/}
                    {/*    to={`/book/${book._id}`}*/}
                    {/*    className="text-orange-500 hover:text-orange-700 font-medium"*/}
                    {/*>*/}
                    {/*    Read More*/}
                    {/*</Link>*/}
                    {/*<button*/}
                    {/*    onClick={() => onDelete(book._id)}*/}
                    {/*    className="text-red-500 hover:text-red-700"*/}
                    {/*>*/}
                    {/*    Delete*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    );
}

export default signBook;
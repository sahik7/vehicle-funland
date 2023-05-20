import React from 'react';

const Blogs = () => {
    return (
        <div className="w-10/12 mx-auto my-20">
            <h1 className="text-center text-5xl font-bold my-28">Blogs</h1>
            {/* First Question */}
            <div className="bg-light-aqua/40 p-8">
                <h2 className="text-3xl">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <br />
                <p >Ans - Access and refresh token both protected that data in the server by ensuring security access while authentication and authorisation processes.

                    Access token has limited time frame for usage. Whereas,  the refresh token has no time limit. client can use it to request a new access token.

                    Access tokens must be kept in a secure place but in server-side browser memory such as session storage, local storage, secure HTTP-Only Cookies, Although it is not recommended.

                    Refresh tokens need to store in the secure http only cookies, secure token storage,  token vault.
                </p>
            </div>
            {/* Second Question */}
            <div className="bg-light-aqua/40 p-8 mt-10">
                <h2 className="text-3xl">2. Compare SQL and NoSQL databases?</h2>
                <br />
                <p >Ans - SQL database is a structured database. It relies on schemas to organize data into tables. This kind of database is used in order to make complex queries and transactions.

                    On the other hand, noSQL databases are very flexible. They do not use any fixed structure. they don't have to change the existing data while handling data formats and making dynamic changes.

                </p>
            </div>
            {/* Third Question */}
            <div className="bg-light-aqua/40 p-8 mt-10">
                <h2 className="text-3xl">3. What is express js? What is Nest JS?</h2>
                <br />
                <p >Ans - Express JS is a Framework for Node JS which allows developers to use Javascript on server side. Express JS is more popular for small scale or simple API.

                    Next JS is a Framework for react applications which are  server rendered. It helps a developer to build a Complex API in a more structured way.
                </p>
            </div>
            {/* Fourth Question */}
            <div className="bg-light-aqua/40 p-8 mt-10">
                <h2 className="text-3xl">4. What is MongoDB aggregate and how does it work?</h2>
                <br />
                <p >Ans - mongo DB’s aggregation is a feature that provides a variety of stages and operations such as filtering, grouping, sorting and transforming to perform advanced data analysis in the database.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
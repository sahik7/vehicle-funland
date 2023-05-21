import React, { useContext, useEffect, useState } from 'react';
import { VerificationContext } from '../../providers/AuthenticationProvider';
import MyToysItem from './MyToysItem';

const MyToys = () => {
    const [myToys, setMyToys] = useState([])
    const { user } = useContext(VerificationContext)

    useEffect(() => {
        const myData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/vehicles?SellerEmail=${user?.email}`);
                const jsonData = await response.json();
                setMyToys(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        myData();
    }, []);


    return (

        <div className="container mx-auto">
            <table className="table-auto w-9/12 mx-auto my-20">
                <thead>
                    <tr>
                        <th className="table-head">Image</th>
                        <th className="table-head">Toy Name</th>
                        <th className="table-head">Seller Name</th>
                        <th className="table-head">Seller Email</th>
                        <th className="table-head">Sub Category</th>
                        <th className="table-head">Price</th>
                        <th className="table-head">Rating</th>
                        <th className="table-head">Available Quantity</th>
                        <th className="table-head">Update</th>
                        <th className="table-head">Delete</th>
                    </tr>
                </thead>
                <tbody className="single-product-container">
                    {
                        myToys.map(singleItem => <MyToysItem key={singleItem._id} singleItem={singleItem} />)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyToys;
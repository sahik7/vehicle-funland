import React, { useContext, useEffect, useState } from 'react';
import { VerificationContext } from '../../providers/AuthenticationProvider';
import MyToysItem from './MyToysItem';
import Swal from 'sweetalert2';

const MyToys = () => {
    const [myToys, setMyToys] = useState([])
    const { user } = useContext(VerificationContext)

    useEffect(() => {
        const myData = async () => {
            try {
                const response = await fetch(`https://localhost:5173/vehicles?SellerEmail=${user?.email}`);
                const jsonData = await response.json();
                setMyToys(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        myData();
    }, []);


    const handleDeleteClick = (id) => {
        Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        fetch(`https://localhost:5173/vehicles/${id}`, {
                            method: 'DELETE'
                        }).then(response => response.json()).then(data => {
                            if(data.deletedCount > 0) {
                                const rest = myToys.filter(toy => toy._id !== id)
                                setMyToys(rest)
                            }
                        })
                      Swal.fire(
                        'Deleted!',
                        'Your Product has been deleted.',
                        'success'
                      )
                    }
                  })
      };


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
                        myToys.map(singleItem => <MyToysItem key={singleItem._id} singleItem={singleItem} handleDeleteClick={handleDeleteClick}/>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyToys;
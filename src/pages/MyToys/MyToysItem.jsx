import React from 'react';
import { FaFileUpload, FaTrash } from 'react-icons/fa';

const MyToysItem = (props) => {

    const { Image, Seller, SellerEmail, ToyName, SubCategory, Price, AvailableQuantity, Rating } = props.singleItem;

    return (
        <tr className="border-4 border-black">
            <td className="border px-4"><img className="w-2/3" src={Image} alt="" /></td>
            <td className="border px-4">{ToyName}</td>
            <td className="border px-4">{Seller}</td>
            <td className="border px-4">{SellerEmail}</td>
            <td className="border px-4">{SubCategory}</td>
            <td className="border px-4">{Price}</td>
            <td className="border px-4">{AvailableQuantity}</td>
            <td className="border px-4">{Rating}</td>
            <td className="border px-4"><div className="flex items-center space-x-1 border-2 py-1 px-2 border-black btn-animation"><FaFileUpload/><button>Update</button></div></td>
            <td className="border px-4"><div className="flex items-center space-x-1 border-2 py-1 px-2 border-black btn-animation"><FaTrash/><button>Delete</button></div></td>
        </tr>
    );
};

export default MyToysItem;
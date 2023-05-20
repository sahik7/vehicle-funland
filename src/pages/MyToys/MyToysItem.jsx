import React from 'react';

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
        </tr>
    );
};

export default MyToysItem;
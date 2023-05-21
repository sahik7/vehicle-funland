import React from 'react';

const OurTeam = () => {
    return (
        <div>
            <div className="flex border rounded">
                <div className=" w-1/2 p-12 text-center">
                    <h2 className='text-3xl font-bold border-b-4 border-secondary pb-6 w-1/2 mx-auto'>Our Team</h2>
                    <img className='mx-auto mt-10' src="https://i.ibb.co/yh5txH7/team.jpg" alt="" />
                </div>
                <div className=" w-1/2 p-12 text-center text-gray-600">
                    <p>At vehicle Funland, we are fueled by a team of passionate and creative individuals who are dedicated to bringing joy and imagination into the lives of children. We believe that toys have the power to inspire, educate, and create unforgettable memories.
                    </p>
                    <br />
                    <p> &quot;Meet the extraordinary members of our playful&quot; team, each bringing their unique talents and expertise to craft an extraordinary toy experience for kids and parents alike.  </p>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
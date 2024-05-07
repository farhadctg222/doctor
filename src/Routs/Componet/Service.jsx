import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [service,setservice] = useState([])
    console.log(service)

    useEffect(()=>{
        fetch('service.json')
        .then(data=>data.json())
        .then(data=>setservice(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl front-bold text-orange-600'>Our Service</h1>
                <h2 className=' text-5xl'>Our Service Area</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil incidunt, voluptates dolorem doloremque reiciendis ex. Fuga, exercitationem vel! Tempora quidem at quae consectetur quasi nesciunt. Deserunt saepe ratione molestiae ipsam aperiam est eos dolorem consectetur iure, sint cumque, quisquam, ipsa optio cupiditate nostrum laborum laudantium libero numquam. Hic, vero cumque.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2  lg:grid-cols-3'>
                {
                    service.map(service=> <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;
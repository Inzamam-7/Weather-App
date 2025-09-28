import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ForcastCard = ({ city }) => {
    const apikey = import.meta.env.VITE_API_KEY
    const [data, setData] = useState({})

    const fetchUser = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`
            )

            console.log(response.data);
            setData(response.data);


        } catch (error) {
            console.log("eError in forcast page", error);

        }
    }

    useEffect(() => {
        fetchUser();
    }, [city])


    
    return (
        <div className='flex justify-center'>
            {data?.list?.slice(0, 5).map((item, index) => {
                return (
                    <div key={index} className='border-none mx-2 rounded-xl shadow-2xl p-2 transtion-transform duration-1000 hover:rotate-y-340'>
                        <p className='text-xl'>{new Date(item.dt_txt).toLocaleString()}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                            alt={item.weather[0].description}
                            className="mx-2 w-35"
                        />
                        <p>{item.main.temp.toFixed(1)}°C</p>
                        <p className="capitalize pb-1">{item.weather[0].description}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default ForcastCard
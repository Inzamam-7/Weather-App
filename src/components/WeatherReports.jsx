import { useEffect, useState } from "react"
import ForcastCard from "./ForcastCard"
const WeatherReports = ({ city }) => {
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const apiKey = import.meta.env.VITE_API_KEY
    //console.log(apiKey);

    useEffect(() => {
        const fetchWeather = async () => {
            if (!city) return;

            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
                )
                if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.message)
                }
                const final = await response.json();
                setData(final)
            } catch (error) {
                setError(error.message);
                //setData(null);
            } finally {
                setLoading(false);
            }
        }

        fetchWeather()
    }, [city])

    if (loading) return <p className="text-center mt-4 text-white">Loading...</p>;
    if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;
    if (!data) return null;


    return (
        <>
            <div className="flex justify-center">
                <div className="flex justify-center flex-col items-center max-w-5xl w-full  p-4 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-start">
                        <div className="p-5 flex ">
                            {data?.weather && (
                                <img
                                    src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@4x.png`}
                                    alt={data?.weather?.[0]?.description || "weather icon"}
                                    className="w-90 h-90 transition-transform duration-300 hover:scale-110"
                                />
                            )
                            }

                        </div>
                        <div className="flex-1">
                            <p className="text-xl p-2">Today</p>
                            <p className="text-2xl font-bold p-2">{data?.name?.toUpperCase()}</p>
                            <p className="p-2 text-xl">Temperature: {(data?.main?.temp - 273.15).toFixed(1)}°C</p>
                            {/* <p className="p-2 text-xl">{data?.weather[0]?.description}</p>  */}
                        </div>
                    </div>
                    <div>
                        <ForcastCard city={city} />
                    </div>


                </div>
            </div>
        </>
    )
}

export default WeatherReports
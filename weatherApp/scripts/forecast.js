const key = "SpYB4zOBi9f4yPeIwGtgB7IUNAXxkGAV";

getCity = async (city) =>{
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query = `?apikey=${key}&q=${city}`;
    const request = await fetch(base+query);
    const data  =  await request.json();
    return data[0];
}

getWeather = async (id) =>{
    const base = "http://dataservice.accuweather.com/currentconditions/v1/"
    const query = `${id}?apikey=${key}`;
    const request = await fetch(base+query);
    const data  =  await request.json();
    return data[0]; 
}




import { observations } from "./stores";
import ObservationData from "./observation_data";

export default async function fetchData(source) {
    fetch(source)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then((data) => {
            console.log("fetched"); 
            observations.set(ObservationData.parseData(data));
            return data;
        })
        .catch((error) => {
            console.log('There was a problem with the fetch operation:', error.message);
        });
}
export const getDistance = (latitude, longitude, schoolLatitude, schoolLongitude) => {

    if (
        typeof latitude !== 'number' || isNaN(latitude) ||
        typeof longitude !== 'number' || isNaN(longitude) ||
        typeof schoolLatitude !== 'number' || isNaN(schoolLatitude) ||
        typeof schoolLongitude !== 'number' || isNaN(schoolLongitude)
    ) {
        return null
    }

    const toRad = (value) => value * Math.PI / 180;

    const radiusOfEarth = 6371; // radius of earth in km
    const latitudeDifference = toRad(schoolLatitude - latitude); // evaluate the difference in latitude
    const longitudeDifference = toRad(schoolLongitude - longitude); // evaluate the difference in longitude

    const intermediateValue = 
        Math.sin(latitudeDifference / 2) * Math.sin(latitudeDifference / 2) + // measure change in latitude difference
        Math.cos(toRad(latitude)) * Math.cos(toRad(schoolLatitude)) *         // sclare the result based on the cosine of the latitude
        Math.sin(longitudeDifference / 2) * Math.sin(longitudeDifference / 2);    // measure change in longitude difference

    const finalDisance = 2 * Math.atan2(Math.sqrt(intermediateValue), Math.sqrt(1 - intermediateValue)); // evaluate the final distance)

    return radiusOfEarth * finalDisance; // return the final distance
}

// calculate distance using haversine formula
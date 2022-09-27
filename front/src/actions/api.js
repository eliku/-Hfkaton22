import axios from "axios";

const baseUrl = 'http://localhost:5000/WeatherForecast'

export default {
    dCandidate(url = baseUrl + 'WeatherForecast') {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord)
        }
    }
}
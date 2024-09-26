import axios from "axios"
import CONFIG from "src/config/config.json"

const UseDetailOtherChallenge = () => {
    const DetailOtherChallenge = async() => {
        const res = await axios.get(`${CONFIG.serverUrl}/room`)

    }
    
    return {

    }
}

export default UseDetailOtherChallenge
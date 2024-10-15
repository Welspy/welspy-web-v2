import { useState } from "react";
import { ProfileProps } from "src/type/profile.type";
import CONFIG from "src/config/config.json";
import Cookies from "js-cookie";
import axios from "axios";

const UseProfile = () => {
    const [profile, setProfile] = useState<ProfileProps>();
    const Token = Cookies.get("accessToken");

    const UserProfile = async () => {
        try {
            const res = await axios.get(`${CONFIG.serverUrl}/user`, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            if (res.status === 200) {
                setProfile(res.data.data);
            }
        } catch (error) {
            console.error(error);
        }
    };
    return {
        profile,
        UserProfile,
    };
};

export default UseProfile;
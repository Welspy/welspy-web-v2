import { useState } from "react";
import axios from "axios";
import CONFIG from "src/config/config.json";
import Cookies from "js-cookie";
import { SearchProps } from "src/type/challenge.types";

const UseSearch = () => {
  const page = 1;
  const size = 10;
  const Token = Cookies.get("accessToken");
  const [title, setTitle] = useState<string>("");
  const [searchData, setSearchData] = useState<SearchProps[]>([]);
  const SearchChallenge = async () => {
    await axios
      .get(`${CONFIG.serverUrl}/room/search?`, {
        params: {
          page: page,
          size: size,
          title: title,
        },

        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        setSearchData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return {
    SearchChallenge,
    setTitle,
    title,
    searchData,
  };
};

export default UseSearch;

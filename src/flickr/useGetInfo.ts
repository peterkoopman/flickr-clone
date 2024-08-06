import { useEffect, useState } from "react";
import { flickr, userId } from "./common";

interface Info {
  description: {
    _content: string;
  };
  ispro: boolean;
  location: {
    _content: string;
  };
  realname: {
    _content: string;
  };
  username: {
    _content: string;
  };
}

const useGetInfo = () => {
  const [info, setInfo] = useState<Info>({
    description: {
      _content: "",
    },
    ispro: false,
    location: {
      _content: "",
    },
    realname: {
      _content: "",
    },
    username: {
      _content: "",
    },
  });

  useEffect(() => {
    flickr("flickr.people.getInfo", {
      user_id: userId,
    }).then((data) => {
      setInfo(data.person);
    });
  }, []);

  return info;
};

export default useGetInfo;

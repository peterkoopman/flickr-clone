import { useEffect, useState } from "react";
import { flickr, userId } from "./common";
interface StringContent {
  _content: string;
}
export interface Info {
  description: StringContent;
  ispro: boolean;
  location: StringContent;
  realname: StringContent;
  username: StringContent;
}

const useGetInfo = () => {
  const [info, setInfo] = useState<Info | null>(null);

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

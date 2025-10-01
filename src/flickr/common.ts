import { createFlickr } from "flickr-sdk";
export const { flickr } = createFlickr(process.env.REACT_APP_FLICKR_API_KEY as string);
export const userId: string | undefined = process.env.REACT_APP_FLICKR_USER_ID;

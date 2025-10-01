import style from "./Photo.module.scss";

interface Props {
  id: string;
  url: string;
  width: number;
  height: number;
  title: string;
  server: string;
  secret: string;
}

const Photo = ({ url, id, width, height, title, server, secret }: Props) => {
  const filteredTitle = title.endsWith(".jpg") ? '' : title;
  // NB we only serve the 400px on the longest edge image ('_w' extension on the url)
  return (
    <div key={id} className={style.photo}>
      <a href={url} title={title} target="_blank" rel="noreferrer">
        <img
          src={`https://live.staticflickr.com/${server}/${id}_${secret}_w.jpg`}
          width={width}
          alt={title}
          style={{ aspectRatio: `${width}/${height}`}}
          loading="lazy"
        />
      </a>
      <div className={style.details}>
        <p>{filteredTitle}</p>
      </div>
    </div>
  );
};

export default Photo;

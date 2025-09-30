import style from "./Photo.module.scss";

interface Props {
  id: string;
  url: string;
  title: string;
  server: string;
  secret: string;
}

const Photo = ({ url, id, title, server, secret }: Props) => {
  const filteredTitle = title.endsWith(".jpg") ? '' : title;
  // NB we only serve the 400px w image ('_w' extension on the url)
  return (
    <div key={id} className={style.photo}>
      <a href={url} title={title} target="_blank" rel="noreferrer">
        <img
          src={`https://live.staticflickr.com/${server}/${id}_${secret}_w.jpg`}
          alt={title}
        />
      </a>
      <div className={style.details}>
        <p>{filteredTitle}</p>
      </div>
    </div>
  );
};

export default Photo;

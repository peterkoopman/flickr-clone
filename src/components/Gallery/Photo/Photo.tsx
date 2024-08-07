import style from "./Photo.module.scss";

interface Props {
  id: string;
  url: string;
  title: string;
  server: string;
  secret: string;
}

const Photo = ({ url, id, title, server, secret }: Props) => {
  const filteredTitle = title.endsWith(".jpg") ? "untitled" : title;
  return (
    <div key={id} className={style.photo}>
      <a href={url} title={title} target="_blank" rel="noreferrer">
        <img
          src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
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

import "./Avatar.scss";

const Avatar = () => {
  const imageUrl =
    "//live.staticflickr.com/3676/buddyicons/11077827@N02_r.jpg?1370415642#11077827@N02";
  const imageStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="avatar">
      <div className="avatar__person" style={imageStyle}></div>
    </div>
  );
};

export default Avatar;

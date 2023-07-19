import React, { FC } from "react";
import classes from "./SmallIcon.module.scss";
interface SmallIconProps {
  imgUrl: string;
  altString: string;
}
const SmallIcon: FC<SmallIconProps> = ({ imgUrl, altString }) => {
  return (
    <div className={classes.smallIcon}>
      <img src={imgUrl} alt={altString} className={classes.smallIconImg} />
    </div>
  );
};

export default SmallIcon;

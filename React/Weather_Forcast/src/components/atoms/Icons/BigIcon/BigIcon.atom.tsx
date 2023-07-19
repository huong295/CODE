import React,{FC} from "react";
import classes from "./BigIcon.module.scss";
import shower from "../../../../image/Shower.png"
interface BigIconProps {
  title: string;
}
// const BigIcon: FC<BigIconProps> = ({ title }) => {
//   return 
//   (
//   <div>BigIcon.atom

//   </div>
//   );
// };
const BigIcon: FC<BigIconProps> = ({ title }) => {
    return (
    <div className = "classes.BigIcon">

      <img src = {shower} width = { 202} height = {234} />
       
    </div>
    );
    
  
};
export default BigIcon;

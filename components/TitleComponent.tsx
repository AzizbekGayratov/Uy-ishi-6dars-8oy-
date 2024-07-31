import React from "react";
interface TitleComponentProps {
  subTitle: string;
  title: string;
}
const TitleComponent = ({ subTitle, title }: TitleComponentProps) => {
  return (
    <div>
      <span className="text-indigo text-[16px] font-bold leading-[19px] mb-[17px]">
        {subTitle}
      </span>
      <h4 className="text-[58px] font-bold leading-[70px] max-w-[700px]">
        {title}
      </h4>
    </div>
  );
};

export default TitleComponent;

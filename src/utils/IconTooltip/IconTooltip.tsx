import { FC } from "react";
import { IconType } from "react-icons";
import { SpanParent } from "./IconTooltip.style";

interface ToolTipProps {
  text: string;
  Icon: IconType;
  size: string;
  color?: string;
}

const IconTooltip: FC<ToolTipProps> = ({ text, Icon, size, color }) => {
  return (
    <div>
      <SpanParent>
        <Icon size={size} color={color} />
        <span>{text}</span>
      </SpanParent>
    </div>
  );
};

export default IconTooltip;

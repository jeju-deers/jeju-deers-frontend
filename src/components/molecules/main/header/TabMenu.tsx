import TabMenuItem from "~/components/atoms/main/header/TabMenuItem";
import { TabMenuBox } from "./TabMenuStyles";

interface TabMenuItemType {
  to: string;
  text: string;
}

interface Props {
  tabMenuItems: TabMenuItemType[];
}

const TabMenu = ({ tabMenuItems }: Props) => {
  return (
    <TabMenuBox>
      {tabMenuItems.map((item, index) => (
        <TabMenuItem key={index} to={item.to} text={item.text} />
      ))}
    </TabMenuBox>
  );
};

export default TabMenu;

import TabMenuItem from "~/components/atom/main/header/TabMenuItem";
import { TabMenuBox } from "./TabMenuStyle";

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

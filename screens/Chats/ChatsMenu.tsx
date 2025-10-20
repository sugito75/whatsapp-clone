import { Icon } from "@/components/ui/icon";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { EllipsisVertical } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Selection } from "react-stately";
import menus from "./menu";

const ChatsMenu = () => {
  const handleSelectionChange = (keys: Selection) => {
    const [key] = keys;
    const menu = menus.find((m) => m.key === key);
    menu?.action();
  };

  return (
    <Menu
      onSelectionChange={handleSelectionChange}
      closeOnSelect
      selectionMode="single"
      style={{ width: 130 }}
      placement="bottom right"
      offset={-20}
      trigger={({ ...triggerProps }) => {
        return (
          <TouchableOpacity style={{ width: 20 }} {...triggerProps}>
            <Icon as={EllipsisVertical} />
          </TouchableOpacity>
        );
      }}
    >
      {menus.map((menu) => (
        <MenuItem key={menu.key} textValue={menu.key}>
          <MenuItemLabel size="sm">{menu.displayName}</MenuItemLabel>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ChatsMenu;

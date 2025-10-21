import { Icon } from "@/components/ui/icon";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { EllipsisVertical } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Selection } from "react-stately";
import useChatsMenu from "./useMenu";

const ChatsMenu = () => {
  const menuItems = useChatsMenu();

  const handleSelectionChange = ([key]: Selection) => {
    menuItems[key]();
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
      {Object.entries(menuItems).map(([key]) => (
        <MenuItem key={key} textValue={key}>
          <MenuItemLabel size="sm">{key}</MenuItemLabel>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ChatsMenu;

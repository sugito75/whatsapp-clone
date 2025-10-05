import { Icon } from "@/components/ui/icon";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { EllipsisVertical } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const ChatsMenu = () => {
  return (
    <Menu
      onSelectionChange={(keys) => console.log(keys)}
      closeOnSelect
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
      <MenuItem key="Add account" textValue="Add account">
        <MenuItemLabel size="sm">New Group</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Plugins" textValue="Plugins">
        <MenuItemLabel size="sm">Plugins</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Logout" textValue="Logout">
        <MenuItemLabel size="sm">Logout</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

export default ChatsMenu;

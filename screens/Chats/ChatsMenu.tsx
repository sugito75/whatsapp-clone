import { Icon } from "@/components/ui/icon";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { EllipsisVertical } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const ChatsMenu = () => {
  return (
    <Menu
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
      <MenuItem key="Settings" textValue="Settings">
        <MenuItemLabel size="sm">Settings</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

export default ChatsMenu;

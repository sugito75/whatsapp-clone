import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetScrollView,
} from "@/components/ui/actionsheet";
import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Trash } from "lucide-react-native";
import React from "react";
import StatusViewer from "./StatusViewer";

const StatusViewers = (props: any) => {
  return (
    <Actionsheet
      isOpen={props.isOpen}
      snapPoints={[40]}
      closeOnOverlayClick
      onClose={props.onClose}
    >
      <ActionsheetBackdrop />
      <ActionsheetContent className="p-3">
        <Box
          className="flex-row"
          style={{
            justifyContent: "space-between",
            width: "100%",
            padding: 10,
          }}
        >
          <Text bold size={"lg"}>
            Viewed by 10
          </Text>
          <Icon as={Trash} />
        </Box>
        <ActionsheetScrollView>
          <StatusViewer />
          <StatusViewer />
          <StatusViewer />
          <StatusViewer />
          <StatusViewer />
        </ActionsheetScrollView>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default StatusViewers;

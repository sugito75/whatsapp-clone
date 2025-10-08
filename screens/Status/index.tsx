import lia from "@/assets/images/Lia.jpeg";
import vergil from "@/assets/images/dmc.jpg";
import reWallpaper from "@/assets/images/img_main.jpg";
import { Box } from "@/components/ui/box";
import { router } from "expo-router";
import React, { useState } from "react";
import { GestureResponderEvent, ImageBackground, View } from "react-native";
import StatusCaption from "./StatusCaption";
import StatusHeader from "./StatusHeader";
import StatusViewers from "./StatusViewers";

const StatusScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewWidth, setViewWidth] = useState(0);
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
  const [statuses, setStatuses] = useState([
    { isViewed: true, caption: "Ini lah my bini", media: lia },
    {
      isViewed: false,
      caption: "RE anniversary illustration art",
      media: reWallpaper,
    },
    {
      isViewed: false,
      caption: "BURRY THE LIGHT DEEP WITHIN!!!",
      media: vergil,
    },
  ]);

  const nextStatus = ({ nativeEvent }: GestureResponderEvent) => {
    const { locationX } = nativeEvent;
    const tappedLeft = locationX < viewWidth / 2;

    let nextStatusIndex = currentStatusIndex;
    if (tappedLeft) {
      nextStatusIndex--;
    } else {
      nextStatusIndex++;
    }

    if (nextStatusIndex === statuses.length)
      return router.replace("/(tabs)/updates");

    setStatuses((prev) => {
      if (nextStatusIndex === statuses.length || nextStatusIndex <= -1) {
        nextStatusIndex = currentStatusIndex;
      }
      setCurrentStatusIndex(nextStatusIndex);

      if (tappedLeft) {
        prev[currentStatusIndex].isViewed = false;
      } else {
        prev[currentStatusIndex].isViewed = true;
      }

      return [...prev];
    });
  };

  return (
    <Box
      className="flex-1"
      style={{ backgroundColor: "#000" }}
      onLayout={({ nativeEvent }) => setViewWidth(nativeEvent.layout.width)}
      onStartShouldSetResponder={() => true}
      onResponderGrant={nextStatus}
    >
      <ImageBackground
        source={statuses[currentStatusIndex].media}
        imageStyle={{ objectFit: "contain" }}
        className="flex-1"
        style={{ backgroundColor: "#000" }}
      >
        <StatusHeader statuses={statuses} />
        <View className="flex-1" />
        <StatusCaption
          onOpenViewer={() => setIsOpen(true)}
          caption={statuses[currentStatusIndex].caption}
        />
        <StatusViewers isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </ImageBackground>

      {/* <StatusReply /> */}
    </Box>
  );
};

export default StatusScreen;

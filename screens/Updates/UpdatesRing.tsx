import React from "react";
import { ImageBackground, ImageSourcePropType, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface UpdatesRingProps {
  radius?: number;
  strokeWidth?: number;
  segments: number; // number of statuses
  color?: string;
  thumbnail?: ImageSourcePropType;
}

const UpdatesRing: React.FC<UpdatesRingProps> = ({
  radius = 25,
  strokeWidth = 2.5,
  segments = 3,
  color = "#25D366", // WhatsApp green
  thumbnail,
}) => {
  const circumference = 2 * Math.PI * radius;

  // Small gap between segments
  const gapLength = 8; // pixels
  const totalGapLength = gapLength * segments;
  const totalStrokeLength = circumference - totalGapLength;
  const dashLength = totalStrokeLength / segments;

  const dashArray = [dashLength, gapLength];

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg
        height={(radius + strokeWidth) * 2}
        width={(radius + strokeWidth) * 2}
        style={{ transform: [{ rotate: "100deg" }] }} // start from top
      >
        <Circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>

      {/* You can place the profile image inside */}
      <ImageBackground
        source={thumbnail}
        style={{
          position: "absolute",
          width: radius * 1.6,
          height: radius * 1.6,
          borderRadius: radius * 0.8,
          backgroundColor: "#ccc",
          overflow: "hidden",
        }}
      />
    </View>
  );
};

export default UpdatesRing;

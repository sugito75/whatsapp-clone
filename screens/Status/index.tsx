import { Box } from "@/components/ui/box";
import React, { useState } from "react";
import StatusCaption from "./StatusCaption";
import StatusHeader from "./StatusHeader";
import StatusViewers from "./StatusViewers";

const StatusScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box className="flex-1" style={{ backgroundColor: "#white" }}>
      <StatusHeader />
      <StatusCaption onOpenViewer={() => setIsOpen(true)} />
      <StatusViewers isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Box>
  );
};

export default StatusScreen;

import React, { createContext, useState, useContext } from "react";

const HoverContext = createContext();

export const HoverProvider = ({ children }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <HoverContext.Provider value={{ hoveredId, setHoveredId }}>
      {children}
    </HoverContext.Provider>
  );
};

export const useFullHoverContext = () => useContext(HoverContext);
export const useHoveredIdOnly = () => {
  const { hoveredId } = useContext(HoverContext);
  return hoveredId;
};

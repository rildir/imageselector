import React, { useState, useEffect } from "react";
import images from "./images";
import { ImageGallery } from "./ImageGallery";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ImageGallery />
    </div>
  );
};

export default App;

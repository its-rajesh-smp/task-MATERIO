// IMPORTS
import React from "react";

// CSS IMPORTS
import "./PageWrapper.scss";

function PageWrapper({ children }) {
  return <section className="PageWrapper_container">{children}</section>;
}

export default PageWrapper;

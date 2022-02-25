import React, {useState} from "react";
import {createPortal} from "react-dom";
import "./builder-layout-iframe.scss";

type IProps = {
  children: React.ReactChild | React.ReactChild[] | null;
}

export const BuilderLayoutIframe = ({children}: IProps) => {
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null);
  const mountNode = iframeRef?.contentWindow?.document?.body;

  return (
    <iframe className="builder-layout-iframe" ref={setIframeRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  )
}

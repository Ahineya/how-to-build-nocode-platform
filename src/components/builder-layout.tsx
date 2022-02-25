import React from "react";
import {BuilderLayoutIframe} from "./builder-layout-iframe";

type BaseNode = {
	uuid: string;
	children?: ElementNode[];
}

type ElementNode = BodyElement | TextElement | ImageElement;

type BodyElement = {type: 'BODY'} & BaseNode;
type TextElement = {type: 'TEXT', textContent: string} & BaseNode;
type ImageElement = {type: 'IMAGE', src: string} & BaseNode;

const elements: BodyElement = {
  uuid: 'body-uuid',
  type: 'BODY',
  children: [
    {
      uuid: 'h1-uuid',
      type: 'TEXT',
      textContent: 'Hello there 👋'
    },
    {
      uuid: 'image-uuid',
      type: 'IMAGE',
      src: 'https://no-code-platform.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2Feb5b1cbb-bd94-4a4e-9615-549b15fb8428%2Fimages%2F836d809c-8e09-4c3e-8915-d60e387cd456.png&w=3840&q=80'
    }
  ]
}

export const BuilderLayout = () => {

  const getElement = (element: ElementNode) => {
    switch (element.type) {
      case 'BODY':
        return <div key={element.uuid}>{element.children?.map(getElement)}</div>;
      case 'TEXT':
        return <h1 key={element.uuid}>{element.textContent}</h1>;
      case 'IMAGE':
        return <img key={element.uuid} src={element.src}/>;
      default:
        return 'UNKNOWN ELEMENT';
    }
  }

  return <BuilderLayoutIframe>{getElement(elements)}</BuilderLayoutIframe>;
}

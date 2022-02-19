declare module "*.svg" {
  const content: any;
  export default content;
}

// declare module "*.png" {
//   const content: any;
//   export default content;
// }

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.bin" {
  const content: any;
  export default content;
}

declare module 'react-svgmt';

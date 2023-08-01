// import { Cloudinary } from "@cloudinary/url-gen";

// const App = () => {
//   const cld = new Cloudinary({ cloud: { cloudName: "dw3unxrex" } });
// };

export function openUploadWidget(options, callback) {
  window.cloudinary.openUploadWidget(options, callback);
}

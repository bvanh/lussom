function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  
  const imgHeader = importAll(
    require.context("../assets/header", false, /\.(png|jpe?g|svg)$/)
  );
//   const imgHome = importAll(
//     require.context("../static/img/home", false, /\.(png|jpe?g|svg)$/)
//   );
//   const imgHomeCarousel = importAll(
//     require.context("../static/img/home/carousel", false, /\.(png|jpe?g|svg)$/)
//   );
//   const imgColection = importAll(
//     require.context(
//       "../static/img/home/img_features",
//       false,
//       /\.(png|jpe?g|svg)$/
//     )
//   );
  export { imgHeader};
  
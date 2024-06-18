export const landingPageContent = (GetThemeStatus, landingImages) => {

  return {
    image: !GetThemeStatus ? landingImages[Object.keys(landingImages)[0]] : landingImages[Object.keys(landingImages)[1]],
    // image: !GetThemeStatus ? a[Object.keys(a)[0]] : a[Object.keys(a)[1]],
    heading: "Get ready to experience the magic of",
    companyName: "STORYTELLING",
    content: "Get ready to embark on a journey like no other with our upcoming Radioroom app, where you can experience captivating tales that will leave you mesmerized and wanting more",
    buttons: [
      {
        button_name: "Events"
      },
      {
        button_name: "Wedding"
      }
    ]
  }
}

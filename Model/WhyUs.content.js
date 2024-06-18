import events from "../Assets/Images/WhyUs/switch-board-why-event.png"
import wedding from "../Assets/Images/WhyUs/switch-board-whyus-wedding.png"

export const whyUsContent = (GetThemeStatus) => {
    return {
        images: !GetThemeStatus ? events : wedding,
        subheading: "Make Things Happen",
        heading: "But Why Us?",
        description: "Radio Room creates magical dramas out of the stories by legendary writers and whole range of excellent writers from the middle period right down to contemporary writers. These stories are specially crafted to introduce this treasury of creativity and imagination to today's GenZ who are often not conversant in their own mother tongue."
    }
}

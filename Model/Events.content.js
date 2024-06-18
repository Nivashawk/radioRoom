import Cultural from "../Assets/Images/Events/wedding/CulturalTradition.png"
import Decorations from "../Assets/Images/Events/wedding/Decorations.png"
import Food from "../Assets/Images/Events/wedding/Food.png"
import event from "../Assets/Images/Events/event/events-1.png"
import language from "../Assets/Images/Events/event/language.png"
import playlist from "../Assets/Images/Events/event/playlist.png"
import genre from "../Assets/Images/Events/event/genre.png"

export const eventsContent = (GetThemeStatus) => {
    return !GetThemeStatus ?
        [
            {
                image: language,
                heading: "Multilingual",
                description: "Offers a unique multilingual feature, allowing users to enjoy their favorite stories in their preferred language"
            },
            {
                image: playlist,
                heading: "Customized Playlists",
                description: "With our customized playlist feature, you can curate your own collection of stories to suit your mood and interests."
            },
            {
                image: genre,
                heading: "Multiple Genres",
                description: "Explore a multitude of genres and discover a world of stories with our multi-genre feature. From classic fairy tales to gripping mysteries, our story-telling app caters to a diverse range of tastes and preferences."
            }
        ] : [
            {
                image: Cultural,
                heading: "Cultural Traditions",
                description: "we specialize in cultural and traditional weddings that helps couples plan and execute weddings that are steeped in cultural and traditional customs and practices. We maintain the expression of the couple's heritage, identity, and beliefs and typically involve unique rituals, customs, dress codes, and food traditions that are specific to the couple's culture and religion."
            },
            {
                image: Decorations,
                heading: "Decorations",
                description: "we offer a wide range of decoration options, including flower arrangements, lighting, backdrops, linens, and table settings, and may also provide additional services such as setup and cleanup. Our team of experienced designers and decorators who work together to create the perfect ambiance for the wedding, and may be equipped to handle weddings of different sizes and styles, including outdoor and indoor weddings."
            },
            {
                image: Food,
                heading: "Food",
                description: "we offer a range of food services for weddings, including catering, bar services, and other related food-related services. we understand their food preferences, dietary restrictions, and cultural and traditional requirements and provide a customized menu that reflects these requirements. we also provide additional services such as setup, service, and cleanup, and have a team of professional chefs and servers who ensure that the food is of high quality and is served in a timely and efficient manner."
            }
        ]
}
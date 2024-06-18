import event from "../Assets/Images/Testimonials/testimonials-event.png"
import wedding from "../Assets/Images/Testimonials/testimonials-wedding.svg"
import quote from "../Assets/Images/Testimonials/bxs_quote-left.svg"
import team1 from '../Assets/Images/Teams/team1.png'
import team2 from '../Assets/Images/Teams/team2.png'
import team3 from '../Assets/Images/Teams/team3.png'
import rightArrow from "../Assets/Images/Testimonials/event-right.svg"
import leftArrow from "../Assets/Images/Testimonials/event-left.svg"

export const testimonialsContent = (GetThemeStatus) => {
    return {
        mainImage : !GetThemeStatus ? event : wedding,
        heading: "What people say?",
        subheading: "by our heartfelt clients",
        quote:quote,
        leftArrow: leftArrow,
        rightArrow: rightArrow,
        testimonials:[
            {
                id: 1,
                author: "Madhan Gangadharan",
                message: "An Excellent Storytelling Application!🌟 The diverse collection of captivating stories keeps me hooked for hours. A must-have for all book lovers! 📚✨ From traditional folktales to contemporary fiction, this app caters to all literary tastes. The storytelling experience is immersive, and I find myself getting lost in the vivid imagery and well-crafted narratives. The talented authors behind these stories deserve special recognition for their creativity and ability to weave captivating tales",
                image: team1
              },
              {
                id: 2,
                author: "Fahim K. Navaz",
                message: "This is a unique app that differs from the preexisting audio apps and it gives a new dimension to listening stories. The quality of the content is really good. It gives you a feel like you are watching a movie just without the visuals. If you close your eyes and listen to the stories, you can imagine it in your mind.",
                image: team2
              },
              {
                id: 3,
                author: "Sivashree B",
                message: "Feels like watching a movie with my eyes closed. Incredible production quality.The sound design and narration bring each story to life in a unique way. Highly recommended!!!",
                image: team3
              }
        ]
    }
  }
  
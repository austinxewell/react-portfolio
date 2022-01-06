import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../Item";

import takeover from "../../assets/about/takeover.jpg"
import stGeorge from "../../assets/about/StGeorge.jpg"
import halfPipe from "../../assets/about/halfPipe.jpg"
import football from "../../assets/about/football.jpg"


const breakPoints = [
    { width: 1200, itemsToShow: 1 },
];


function Personal() {

    return (
        <section className="personalWrapper">
            <h2 className="personalSide">Personal Side:</h2>
            <>
                <Carousel breakPoints={breakPoints}>
                    <Item>
                        <div className="flex-Row">
                            <h3>- Travel/Family -</h3>
                            <img src={stGeorge} className="Img" ></img>
                            <p className=" mx-1">
                            Nothing beats exploring or going on a new adventure with the ones closest to your heart. I am a full time single father to the sweetest little girl. It's safe to say we like to have a good time out in the sun. We don't care where we go, if it's hot, cold, sunny, rainy, or snowy, we just want to go. As much as I enjoy spending a day on my PC writing the stupendous code, I love breaking out of my norm and stretching my muscles. St George has been a place I find myself a lot. As I grow older I seem to enjoy the red rock and the heat more and more.
                            </p>
                        </div>
                    </Item>
                    <Item>
                        <div className="flex-Row">
                            <h3>- Music -</h3>
                            <img src={takeover} className="Img" ></img>
                            <p className=" mx-1">
                            Music has played a major role in my life. I have played in multiple bands and traveled across the western United States playing live shows and being the "Sound-Guy '' or "Merch-Man" for my friends. I can play many instruments but I gravitate to the guitar. Although my love for music is super vast, I am a sucker for raw, fast music. Hardcore and punk is typically what you'll find on my spotify playlist, but don't let that fool you. I know every word to almost every Kesha song, have an all acoustic (no words) playlist, and have a deep respect for 90's dad rock.
                            </p>
                        </div>
                    </Item>
                    <Item>
                    <div className="flex-Row">
                        <h3>- Skateboarding -</h3>
                            <img src={halfPipe} className="Img" ></img>
                            <p className=" mx-1">
                            Skateboarding, my first true love. It's crazy to think I have spent more than half my life riding one of these contraptions. My family thinks it's funny how I relate coding to skateboarding, but it's honestly shocking how similar they are when it comes down to it. When I was younger I would take myself to the skatepark, no one telling me what to do, developing the self discipline to go try something challenging. I'd get to the park and try the same trick over and over, for countless hours, then finally, you land it. Nothing beats the feeling of finally landing the trick you've been working so hard to get. Sometimes you get it first try, sometimes after a few hours, and sometimes after days, weeks, or even years of trying. That's how I feel about coding. Some things come easy, most things do not. But there is nothing sweeter than the feeling of victory after nailing that trick or fixing that codeblock.
                            </p>
                        </div>
                    </Item>
                    <Item>
                    <div className="flex-Row">
                            <h3>- Football -</h3>
                            <img src={football} className="Img" ></img>
                            <p className=" mx-1">
                            I hold football really close to my heart. I started playing when I was 10 years old and played all the way up to my senior year in highschool. I can not tell you how many life lessons and friendships I have learned or created through this sport. I grew up playing little league for the Riverton Silverwolfs. I Played my freshman and sophomore year at Alta Highschool, and then transferred to Herriman High my senior year. Although I will probably never get the chance to pad up and dig my cleats into the fresh grass or turf ever again, the life lessons and friendships will live on forever.
                            </p>
                        </div>
                    </Item>
                </Carousel>
            </>
        </section>
    )
}

export default Personal;
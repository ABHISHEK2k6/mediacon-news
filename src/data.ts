export type Article = {
    id: string
    title: string
    category: string
    source: string
    sourceImage?: string
    author?: string
    time: string
    date?: string
    image: string
    content: string[]
  }
  
  const newsData: Article[] = [
    {
      id: "1",
      title: "Alexander wears modified helmet in road races",
      category: "Sports",
      source: "CNN Indonesia",
      sourceImage: "/images/cnn-indonesia.png",
      time: "6 hours",
      image: "/images/cycling.jpg",
      content: [
        "As a tech department, we're usually pretty good at spotting tech that's out of the ordinary. During time trials we're used to seeing new aero innovation, and while there are certainly aero tricks used in road stages, they are harder to spot.",
        "A case in point, throughout the Volta ao Algarve, Alexander Kristoff has been wearing an old discontinued time trial helmet, complete with visor removed, in the road stages.",
        "The helmet in question appears to be the S-Works McLaren TT helmet, which was released back in 2012 and has since been discontinued. It features a distinctive tail that extends down the rider's back, which is designed to improve aerodynamics in a time trial position.",
        "However, Kristoff has been using it in road stages, where riders typically sit more upright. The Norwegian sprinter has removed the visor, presumably to improve visibility and ventilation, which are more critical in road races than in short time trials.",
      ],
    },
    {
      id: "2",
      title: "What Training Do Volleyball Players Need?",
      category: "Sports",
      source: "Sports Weekly",
      author: "McKindney",
      time: "2 days",
      date: "Feb 27, 2023",
      image: "/images/volleyball.jpg",
      content: [
        "Volleyball players require a comprehensive training regimen that addresses various aspects of physical fitness and technical skills. The sport demands explosive power, agility, quick reflexes, and excellent hand-eye coordination.",
        "Strength training is essential for volleyball players to develop the power needed for jumping, hitting, and blocking. Focus should be placed on exercises that target the legs, core, and shoulders. Plyometric exercises, such as box jumps and medicine ball throws, are particularly effective for developing the explosive power needed for spiking and blocking.",
        "Agility drills help players move quickly and change direction efficiently on the court. Ladder drills, cone drills, and shuttle runs can improve footwork and reaction time. Flexibility training is also important to prevent injuries and improve range of motion, especially for the shoulders and lower back.",
        "Technical training should include serving, passing, setting, hitting, and blocking drills. Players should practice these skills individually and then integrate them into game-like situations. Video analysis can be a valuable tool for identifying areas for improvement in technique.",
      ],
    },
    {
      id: "3",
      title: "Secondary school places: When do parents find out?",
      category: "Education",
      source: "Education Today",
      author: "Rosemary",
      time: "3 days",
      date: "Feb 28, 2023",
      image: "/images/education.jpg",
      content: [
        "Parents across the country are anxiously waiting to find out which secondary school their child will attend in September. The national offer day for secondary school places is March 1st, when local authorities will send out notifications to parents.",
        "Most parents will receive an email or be able to log into their local council's website to check their child's school allocation. Some may still receive the information by post, though this is becoming less common.",
        "If your child has been offered a place at your preferred school, you simply need to accept the offer by the deadline provided by your local authority, which is typically around two weeks after the offer date.",
        "However, if your child hasn't been offered a place at any of your preferred schools, you have several options. You can accept the place offered and join the waiting list for your preferred schools, appeal the decision, or look for alternative schools with available places.",
      ],
    },
    {
      id: "4",
      title: "6 Houses Destroyed In Massive Fire In Assam's K.",
      category: "World",
      source: "World News",
      author: "Aslam K.",
      time: "4 days",
      date: "Feb 27, 2023",
      image: "/images/fire.jpg",
      content: [
        "A devastating fire broke out in a residential area in Assam's Karimganj district, destroying six houses and leaving several families homeless. The incident occurred in the early hours of Monday morning when most residents were asleep.",
        "According to local authorities, the fire started in one house and quickly spread to neighboring properties due to strong winds and the close proximity of the buildings. Fortunately, no casualties have been reported as residents were able to evacuate in time.",
        "Fire services responded promptly to the emergency call, but faced challenges in accessing the area due to narrow lanes. It took several hours to bring the blaze under control.",
        "The cause of the fire is suspected to be an electrical short circuit, though investigations are ongoing. Local officials have visited the site and assured affected families of assistance with temporary accommodation and essential supplies.",
      ],
    },
    {
      id: "5",
      title: "At least 35 people killed in separate road crashes in AS",
      category: "World",
      source: "Global News",
      time: "5 days",
      date: "Feb 26, 2023",
      image: "/images/accident.jpg",
      content: [
        "At least 35 people have lost their lives in a series of devastating road accidents across several states in the past 24 hours. The crashes, which occurred in separate incidents, have raised serious concerns about road safety measures.",
        "The most severe incident took place on an interstate highway where a multi-vehicle pileup involving two commercial trucks and several passenger vehicles resulted in 17 fatalities. Poor visibility due to heavy fog is believed to have been a contributing factor.",
        "In another incident, a bus carrying tourists veered off a mountain road, resulting in 12 deaths and numerous injuries. Initial investigations suggest brake failure may have been the cause of this tragic accident.",
        "The remaining fatalities occurred in various smaller incidents across different states. Transportation safety officials have announced plans for an emergency meeting to address the alarming spike in road fatalities.",
      ],
    },
  ]
  
  export async function getArticles(): Promise<Article[]> {
    // In a real app, this would fetch from an API or database
    return newsData
  }
  
  export async function getArticle(id: string): Promise<Article | undefined> {
    // In a real app, this would fetch from an API or database
    return newsData.find((article) => article.id === id)
  }
  
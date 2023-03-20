<template>

  <Carousel class="relative md:flex-grow" #default="{ currentSlide }">
    <Slide v-for="anime, index in tA" :key="index">
      <AnimeSlide
        v-show="currentSlide === index"
        class="absolute inset-0 w-full h-full max-h-[100%]"
        :rank="anime.rank" :id="anime.id"
        :name="anime.name" :poster="anime.poster"
        :description="anime.description"
        :category="'Spotlight'"
      />
    </Slide>
  </Carousel>

  <section class="xl:flex md:gap-10 flex-grow pt-12 max-w-full w-full">
    <div class="w-full flex-[70%] 2xl:flex-[75%]">
      <AnimeDeck
        class="flex-auto"
        :animes="latestEpisodeAnimes"
        :name="'Top Upcoming'"
        :href="'top-upcoming'"
      />
      
      <AnimeDeck
        class="flex-auto mt-12"
        :animes="upcomingAnimes"
        :name="'Latest Episode'"
        :href="'recently-updated'"
      />
    </div>

    <div class="flex-[35%] 2xl:flex-[25%] mb-auto mx-auto mt-3">
      <TrendingAnimeDeck
        class="mt-12 xl:mt-0"
        :animes="trendingAnimes"
      />

      <FeatAnimeDeck
        class="mt-8 w-full"
        :name="'Top Airing Animes'"
        :href="'top-airing'"
        :animes="topAiringAnimes"
      />

      <GenreDeck
        :genres="genres"
        :length="genres.length"
        class="mt-8"
      />

      <MostViewedDeck
        class="mt-8"
        :all-animes="mostViewed"
      />

    </div>

  </section>



</template>

<script setup>
import Carousel from '@/components/home/Carousel.vue';
import Slide from '@/components/home/Slide.vue';
import AnimeSlide from '@/components/home/AnimeSlide.vue';
import TrendingAnimeDeck from '@/components/home/TrendingAnimeDeck.vue';
import AnimeDeck from '@/components/AnimeDeck.vue';
import FeatAnimeDeck from '@/components/home/FeatAnimeDeck.vue';
import GenreDeck from '@/components/home/GenreDeck.vue';
import MostViewedDeck from '@/components/home/MostViewedDeck.vue';

import { ref } from 'vue';
const results = ref([]);

// (async () => {
//   const resp = await fetch('http://localhost:5000/api/v1/top-airing');
//   const data = await resp.json();
//   results.value = data.animes;
// })()


const tA = [
  {
    "rank": 1,
    "id": "the-reincarnation-of-the-strongest-exorcist-in-another-world-18290",
    "name": "The Reincarnation of the Strongest Exorcist in Another World",
    "description": "After the betrayal of his companions, Haruyoshi, the strongest diviner, was on the verge of dying. Hoping to be happy in the next life, he attempted the secret reincarnation technique and was sent to a different world!  Born into a family of magicians, the magic he didn't inherit paled in comparison to his previous abilities as an onmyouji. \"Who needs magic? I'll survive in this world with my old techniques!\"",
    "poster": "https://img.zorores.com/_r/1366x768/100/9d/72/9d728e112dc3732b0b6d56ca9fa69cc8/9d728e112dc3732b0b6d56ca9fa69cc8.jpg",
    "jname": "Saikyou Onmyouji no Isekai Tenseiki",
    "otherInfo": [
      "TV",
      "24m",
      "?",
      "HD",
      "SUB",
      "DUB"
    ]
  },
  {
    "rank": 2,
    "id": "dont-toy-with-me-miss-nagatoro-2nd-season-18035",
    "name": "Don't Toy with Me, Miss Nagatoro 2nd Season",
    "description": "\"A girl in a lower grade just made me cry!\"\n\nOne day, Senpai visits the library after school and becomes the target of a super sadistic junior! The name of the girl who teases, torments, and tantalizes Senpai is \"Nagatoro!\" She's annoying yet adorable. It's painful, but you still want to be by her side. This is a story about an extremely sadistic and temperamental girl and you'll feel something awaken inside of you.",
    "poster": "https://img.zorores.com/_r/1366x768/100/12/9e/129e4056ee04b193b3cac105fa65a52e/129e4056ee04b193b3cac105fa65a52e.jpg",
    "jname": "Ijiranaide, Nagatoro-san 2nd Season",
    "otherInfo": [
      "TV",
      "23m",
      "Jan 8, 2023",
      "HD",
      "SUB",
      "DUB"
    ]
  },
  {
    "rank": 3,
    "id": "tokyo-revengers-christmas-showdown-18244",
    "name": "Tokyo Revengers: Christmas Showdown",
    "description": "Watching the news, Takemichi Hanagaki learns that his girlfriend from way back in middle school, Hinata Tachibana, has died. The only girlfriend he ever had was just killed by a villainous group known as the Tokyo Manji Gang. He lives in a crappy apartment with thin walls, and his six-years-younger boss treats him like an idiot. At the height of his rock-bottom life, he suddenly time-leaps twelve years back to his middle school days. To save Hinata and change the life he spent running away, hopeless part-timer Takemichi must aim for the top of Kanto's most sinister delinquent gang.",
    "poster": "https://img.zorores.com/_r/1366x768/100/0b/4a/0b4a020950f9929b73a37d72c67eb001/0b4a020950f9929b73a37d72c67eb001.jpg",
    "jname": "Tokyo Revengers: Seiya Kessen-hen",
    "otherInfo": [
      "TV",
      "23m",
      "Jan 8, 2023",
      "HD",
      "SUB",
      "DUB"
    ]
  },
  {
    "rank": 4,
    "id": "buddy-daddies-18288",
    "name": "Buddy Daddies",
    "description": "Assassins Kazuki Kurusu and Rei Suwa meet Miri, a girl looking for her father on Christmas Day. Kazuki, Rei, and Miri unexpectedly end up living together.  Follows Kazuki Kurusu, a criminal contractor/coordinator who lives with his best friend, Rei Suwa, a professional assassin who has been raised from childhood to be a contract killer. Kazuki is outgoing and loves gambling and women, while Rei is a man of few words who spends his off time playing video games. One day, the two buddies end up caring for Miri Unasaka, a four year old girl whose father is a mafia boss, after Miri accidentally wanders into a firefight in a hotel while looking for her father.",
    "poster": "https://img.zorores.com/_r/1366x768/100/a1/2b/a12b53c5fb76bad339bfb2808b607ffd/a12b53c5fb76bad339bfb2808b607ffd.jpg",
    "jname": "Buddy Daddies",
    "otherInfo": [
      "TV",
      "23m",
      "Jan 7, 2023",
      "HD",
      "SUB",
      "DUB"
    ]
  },
  {
    "rank": 5,
    "id": "urusei-yatsura-18160",
    "name": "Urusei Yatsura",
    "description": "Not much is notable about the lecherous Ataru Moroboshi, but his extraordinary bad luck sticks out like the horns in an alien's head. When Earth is threatened by a fleet of alien invaders known as the Oni, Ataru is selected to represent humanity in a duel against one of them. It's a stroke of rare luck for Ataru that the duel is in fact a game of tag, and that his opponent is Lum, daughter of the Oni's leader, who places her personal dignity above victory—as Ataru finds out by seizing Lum's bikini top and with it, victory.  However, misfortune kicks in again when Lum mistakes Ataru's promise to marry his girlfriend, Shinobu Miyake, as the desire to wed Lum herself, and decides she rather likes the idea. Wielding her influence as an alien princess, she moves in with him. Forced to deal with the consequences of his womanizing ways, Ataru must balance his crumbling relationship with Shinobu while keeping Lum happy, all the while flirting with every woman he meets.",
    "poster": "https://img.zorores.com/_r/1366x768/100/24/56/2456e7d1d676eb2bc3ea6da6dd793f3f/2456e7d1d676eb2bc3ea6da6dd793f3f.jpg",
    "jname": "Urusei Yatsura (2022)",
    "otherInfo": [
      "TV",
      "22m",
      "Oct 14, 2022",
      "HD",
      "SUB",
      "DUB"
    ]
  },
  {
    "rank": 6,
    "id": "the-eminence-in-shadow-17473",
    "name": "The Eminence in Shadow",
    "description": "For as long as he can remember, Minoru Kagenou has been fixated on becoming as strong as possible, which has led him to undertake all kinds of rigorous training. This wish, however, does not stem from a desire to be recognized by others; rather, Minoru does everything he can to blend in with the crowd. So, while pretending to be a completely average student during the day, he arms himself with a crowbar and ruthlessly thrashes local biker gangs at night. Yet when Minoru finds himself in a truck accident, his ambitions seemingly come to a sudden end. In his final moments, he laments his powerlessness—no matter how much he trained, there was nothing he could do to overcome his human limitations.\n\nBut instead of dying, Minoru reawakens as Cid, the second child of the noble Kagenou family, in another world—one where magic is commonplace. With the power he so desired finally within his grasp, he dons the moniker \"Shadow\" and establishes Shadow Garden: a group whose sole purpose is to combat the enigmatic Cult of Diablos, an organization born from Cid's imagination. However, as Shadow Garden grows in both membership and influence, it becomes increasingly apparent that the Cult of Diablos is not as fictional as Cid had intended.",
    "poster": "https://img.zorores.com/_r/1366x768/100/33/d9/33d9bbf870518a5e551653245218ba62/33d9bbf870518a5e551653245218ba62.jpg",
    "jname": "Kage no Jitsuryokusha ni Naritakute!",
    "otherInfo": [
      "TV",
      "23m",
      "Oct 5, 2022",
      "HD",
      "SUB",
      "DUB"
    ]
  },
  {
    "rank": 7,
    "id": "ayakashi-triangle-18292",
    "name": "Ayakashi Triangle",
    "description": "Matsuri Kazamaki and Suzu Kanade are childhood friends, bonded by their shared ability to see ayakashi—youkai in search of a life force to devour. However, in high school, their relationship deteriorates. As Suzu's one-sided feelings are growing, so is the difference in their ayakashi views: Matsuri considers all ayakashi a threat to his friend, while Suzu is an ayakashi medium—someone who exudes a significant amount of life force compared to the average human—and loves them all despite the risk.  When the two stumble upon a talking white cat named Shirogane, they are unaware that it is a four-hundred-year-old ayakashi known as the \"King of Ayakashi.\" He is hell-bent on gaining even more power by devouring Suzu, but as Matsuri swoops in to try and save her by sealing Shirogane's powers, the ayakashi uses a jutsu to turn him into a girl instead!  Matsuri vows to protect Suzu from further harm as her best friend, but he must learn how to act like a girl until his grandfather—a famous wind jutsu exorcist ninja—can undo the jutsu. Meanwhile, Suzu must work out her romantic feelings for Matsuri now that he is no longer a boy. But when Matsuri takes the king as his pet, the future of the two friends seems uncertain.",
    "poster": "https://img.zorores.com/_r/1366x768/100/a8/f1/a8f13cd393e9f17c64d90c9fa6e79cdd/a8f13cd393e9f17c64d90c9fa6e79cdd.jpg",
    "jname": "Ayakashi Triangle",
    "otherInfo": [
      "TV",
      "24m",
      "Jan 10, 2023",
      "HD",
      "SUB"
    ]
  },
  {
    "rank": 8,
    "id": "chainsaw-man-17406",
    "name": "Chainsaw Man",
    "description": "Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets. All Denji can do is dream of a good, simple life: one with delicious food and a beautiful girlfriend by his side. But an act of greedy betrayal by the yakuza leads to Denji's brutal, untimely death, crushing all hope of him ever achieving happiness.\n\nRemarkably, an old contract allows Pochita to merge with the deceased Denji and bestow devil powers on him, changing him into a hybrid able to transform his body parts into chainsaws. Because Denji's new abilities pose a significant risk to society, the Public Safety Bureau's elite devil hunter Makima takes him in, letting him live as long as he obeys her command. Guided by the promise of a content life alongside an attractive woman, Denji devotes everything and fights with all his might to make his naive dreams a reality.",
    "poster": "https://img.zorores.com/_r/1366x768/100/63/fd/63fd43c52feed34e8aa90e4d0ce5cb2f/63fd43c52feed34e8aa90e4d0ce5cb2f.jpg",
    "jname": "Chainsaw Man",
    "otherInfo": [
      "TV",
      "24m",
      "Oct 12, 2022",
      "HD",
      "SUB",
      "DUB"
    ]
  },
  {
    "rank": 9,
    "id": "mob-psycho-100-iii-18153",
    "name": "Mob Psycho 100 III",
    "description": "After foiling a world-threatening plot, Shigeo \"Mob\" Kageyama returns to tackle the more exhausting aspects of his mundane life—starting with filling out his school's nerve-racking career form. Meanwhile, he continues to assist his mentor Arataka Reigen and the office's new recruit, Katsuya Serizawa, in solving paranormal cases of their clients. While continuing his duties, Mob also works on gaining more independence in his esper and human lives, as well as trying to integrate better with the people around him.\n\nHowever, new supernatural and ordinary challenges test Mob’s emotional stability and force him to confront the realities around him. As he strives to continue forward on the path to maturity, Mob must resolve his emotional crises and reassess the naivety he has held on for so long.",
    "poster": "https://img.zorores.com/_r/1366x768/100/8e/18/8e18cd08d3109c8293b6bce1f15abdbb/8e18cd08d3109c8293b6bce1f15abdbb.jpg",
    "jname": "Mob Psycho 100 III",
    "otherInfo": [
      "TV",
      "23m",
      "Oct 6, 2022",
      "HD",
      "SUB",
      "DUB"
    ]
  },
  {
    "rank": 10,
    "id": "bleach-806",
    "name": "Bleach",
    "description": "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result.\n\nHowever, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends—classmates Orihime Inoue, Yasutora Sado, and Uryuu Ishida—who each have their own unique abilities. As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world.",
    "poster": "https://img.zorores.com/_r/1366x768/100/58/d0/58d0b99666b285d2c484fec5dfaa23f0/58d0b99666b285d2c484fec5dfaa23f0.jpg",
    "jname": "Bleach",
    "otherInfo": [
      "TV",
      "24m",
      "Oct 5, 2004",
      "HD",
      "SUB",
      "DUB"
    ]
  }
]


const trendingAnimes = [
  {
    "rank": 1,
    "name": "One Piece",
    "id": "one-piece-100",
    "poster": "https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg"
  },
  {
    "rank": 2,
    "name": "Tokyo Revengers: Christmas Showdown",
    "id": "tokyo-revengers-christmas-showdown-18244",
    "poster": "https://img.zorores.com/_r/300x400/100/fb/66/fb663be9a427cc4c9556a5a124b060e8/fb663be9a427cc4c9556a5a124b060e8.jpg"
  },
  {
    "rank": 3,
    "name": "Vinland Saga: 2nd Season",
    "id": "vinland-saga-2nd-season-18239",
    "poster": "https://img.zorores.com/_r/300x400/100/17/3e/173e4c5db060f057506138057261b259/173e4c5db060f057506138057261b259.jpg"
  },
  {
    "rank": 4,
    "name": "Ningen Fushin: Adventurers Who Don't Believe in Humanity Will Save the World",
    "id": "ningen-fushin-adventurers-who-dont-believe-in-humanity-will-save-the-world-18280",
    "poster": "https://img.zorores.com/_r/300x400/100/6e/64/6e64124e0caeb41efed91e30cf29a2b9/6e64124e0caeb41efed91e30cf29a2b9.png"
  },
  {
    "rank": 5,
    "name": "My Life as Inukai-san's Dog.",
    "id": "my-life-as-inukaisans-dog-18282",
    "poster": "https://img.zorores.com/_r/300x400/100/aa/f5/aaf51926d9fd57611f031b3358081988/aaf51926d9fd57611f031b3358081988.jpg"
  },
  {
    "rank": 6,
    "name": "The Misfit of Demon King Academy II",
    "id": "the-misfit-of-demon-king-academy-ii-17676",
    "poster": "https://img.zorores.com/_r/300x400/100/14/fc/14fcdd693f769d60d1c8f676c061a2bf/14fcdd693f769d60d1c8f676c061a2bf.png"
  },
  {
    "rank": 7,
    "name": "My Hero Academia Season 6",
    "id": "my-hero-academia-season-6-18154",
    "poster": "https://img.zorores.com/_r/300x400/100/20/b7/20b7580c1abdf45a6eaf4826fc9fdf33/20b7580c1abdf45a6eaf4826fc9fdf33.jpg"
  },
  {
    "rank": 8,
    "name": "Chainsaw Man",
    "id": "chainsaw-man-17406",
    "poster": "https://img.zorores.com/_r/300x400/100/b3/da/b3da1326e07269ddd8d73475c5dabf2c/b3da1326e07269ddd8d73475c5dabf2c.jpg"
  },
  {
    "rank": 9,
    "name": "Blue Lock",
    "id": "blue-lock-17889",
    "poster": "https://img.zorores.com/_r/300x400/100/fc/ed/fced51e392ffd80041b3a1581ba7de2f/fced51e392ffd80041b3a1581ba7de2f.jpg"
  },
  {
    "rank": 10,
    "name": "The Eminence in Shadow",
    "id": "the-eminence-in-shadow-17473",
    "poster": "https://img.zorores.com/_r/300x400/100/bc/a4/bca4a71e271a30fb1b44d33d56db8f8f/bca4a71e271a30fb1b44d33d56db8f8f.jpg"
  }
]

const upcomingAnimes = [
  {
    "id": "demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc-18056",
    "name": "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
    "poster": "https://img.zorores.com/_r/300x400/100/61/d7/61d7277cdab6023d8ebe2aa9c3d3f9fc/61d7277cdab6023d8ebe2aa9c3d3f9fc.jpg",
    "duration": "?",
    "type": "TV (? eps)",
    "rating": "18+",
    "episodes": null
  },
  {
    "id": "hells-paradise-18332",
    "name": "Hell's Paradise",
    "poster": "https://img.zorores.com/_r/300x400/100/ce/85/ce85de682c0f048126c3a5140006bbf4/ce85de682c0f048126c3a5140006bbf4.jpg",
    "duration": "Apr 1, 2023",
    "type": "TV (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "edens-zero-2nd-season-18331",
    "name": "Edens Zero 2nd Season",
    "poster": "https://img.zorores.com/_r/300x400/100/7f/df/7fdf6665f533bc7cd366522825d31553/7fdf6665f533bc7cd366522825d31553.jpg",
    "duration": "Mar 11, 2023",
    "type": "TV (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "my-star-18330",
    "name": "My Star",
    "poster": "https://img.zorores.com/_r/300x400/100/b7/14/b71495016a8c6cb16de370b54b2c1932/b71495016a8c6cb16de370b54b2c1932.jpg",
    "duration": "Mar 17, 2023",
    "type": "TV (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "flaglia-natsuyasumi-no-monogatari-18309",
    "name": "Flaglia: Natsuyasumi no Monogatari",
    "poster": "https://img.zorores.com/_r/300x400/100/62/b4/62b4f92f91a59301a382e344f38348e0/62b4f92f91a59301a382e344f38348e0.jpg",
    "duration": "Jan 17, 2023",
    "type": "TV (6 eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "scissor-seven-season-4-18275",
    "name": "Scissor Seven Season 4",
    "poster": "https://img.zorores.com/_r/300x400/100/14/fc/14fcfcc851e81c559c0ce5e83602d623/14fcfcc851e81c559c0ce5e83602d623.png",
    "duration": "Jan 18, 2023",
    "type": "ONA (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "aiyous-secret-room-18272",
    "name": "Aiyou's Secret Room",
    "poster": "https://img.zorores.com/_r/300x400/100/41/c3/41c336c49439dd7d9754d3a158abc559/41c336c49439dd7d9754d3a158abc559.png",
    "duration": "Jan 31, 2023",
    "type": "ONA (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "painting-rivers-and-lakes-6-18266",
    "name": "Painting Rivers and Lakes 6",
    "poster": "https://img.zorores.com/_r/300x400/100/aa/c8/aac8106ff0d4a84f7b44e8f78582aa38/aac8106ff0d4a84f7b44e8f78582aa38.png",
    "duration": "Mar 2, 2023",
    "type": "ONA (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "stand-my-heroes-warmth-of-memories-18264",
    "name": "Stand My Heroes: Warmth of Memories",
    "poster": "https://img.zorores.com/_r/300x400/100/3d/48/3d48e963f85c0dfc4e3712097030cc8c/3d48e963f85c0dfc4e3712097030cc8c.png",
    "duration": "Jan 28, 2023",
    "type": "OVA (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "black-clover-sword-of-the-wizard-king-17752",
    "name": "Black Clover: Sword of the Wizard King",
    "poster": "https://img.zorores.com/_r/300x400/100/4f/47/4f477adf9766f5f68f21fa0a97720fd1/4f477adf9766f5f68f21fa0a97720fd1.jpg",
    "duration": "Mar 31, 2023",
    "type": "Movie (1 eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "sasaki-and-miyano-graduation-arc-18263",
    "name": "Sasaki and Miyano: Graduation Arc",
    "poster": "https://img.zorores.com/_r/300x400/100/50/f4/50f498b4f6061b766b051b0d347af278/50f498b4f6061b766b051b0d347af278.jpg",
    "duration": "Feb 17, 2023",
    "type": "Movie (1 eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "hirano-to-kagiura-18262",
    "name": "Hirano to Kagiura",
    "poster": "https://img.zorores.com/_r/300x400/100/38/42/3842e125de076855c6ff1d6bcbd71dcf/3842e125de076855c6ff1d6bcbd71dcf.jpg",
    "duration": "Feb 17, 2023",
    "type": "Movie (1 eps)",
    "rating": null,
    "episodes": null
  }
]

const topAiringAnimes = [
  {
    "id": "attack-on-titan-the-final-season-part-3-18329",
    "name": "Attack on Titan: The Final Season Part 3",
    "jname": "Shingeki no Kyojin: The Final Season - Kanketsu-hen",
    "poster": "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
    "otherInfo": [
      "TV",
      "Ep 1",
      "61m"
    ]
  },
  {
    "id": "vinland-saga-2nd-season-18239",
    "name": "Vinland Saga: 2nd Season",
    "jname": "Vinland Saga Season 2",
    "poster": "https://img.zorores.com/_r/300x400/100/17/3e/173e4c5db060f057506138057261b259/173e4c5db060f057506138057261b259.jpg",
    "otherInfo": [
      "TV",
      "Ep 9",
      "23m"
    ]
  },
  {
    "id": "one-piece-100",
    "name": "One Piece",
    "jname": "One Piece",
    "poster": "https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg",
    "otherInfo": [
      "TV",
      "Ep 1053",
      "24m"
    ]
  },
  {
    "id": "bungo-stray-dogs-4-18240",
    "name": "Bungo Stray Dogs 4",
    "jname": "Bungou Stray Dogs 4th Season",
    "poster": "https://img.zorores.com/_r/300x400/100/3b/ba/3bbab679c7d4036d15bd0e13a8a94c0e/3bbab679c7d4036d15bd0e13a8a94c0e.jpg",
    "otherInfo": [
      "TV",
      "Ep 10",
      "23m"
    ]
  },
  {
    "id": "my-hero-academia-season-6-18154",
    "name": "My Hero Academia Season 6",
    "jname": "Boku no Hero Academia 6th Season",
    "poster": "https://img.zorores.com/_r/300x400/100/20/b7/20b7580c1abdf45a6eaf4826fc9fdf33/20b7580c1abdf45a6eaf4826fc9fdf33.jpg",
    "otherInfo": [
      "TV",
      "Ep 22 / 25",
      "24m"
    ]
  },
  {
    "id": "attack-on-titan-112",
    "name": "Attack on Titan",
    "jname": "Shingeki no Kyojin",
    "poster": "https://img.zorores.com/_r/300x400/100/de/bf/debf027d032c6d40b91fab16b2ff9bd4/debf027d032c6d40b91fab16b2ff9bd4.jpg",
    "otherInfo": [
      "TV",
      "Ep 25 / 25",
      "24m"
    ]
  },
  {
    "id": "death-note-60",
    "name": "Death Note",
    "jname": "Death Note",
    "poster": "https://img.zorores.com/_r/300x400/100/5e/61/5e61f3e7c0045e46b670d31a5bb39c68/5e61f3e7c0045e46b670d31a5bb39c68.jpg",
    "otherInfo": [
      "TV",
      "Ep 37 / 37",
      "23m"
    ]
  },
  {
    "id": "fullmetal-alchemist-brotherhood-1",
    "name": "Fullmetal Alchemist: Brotherhood",
    "jname": "Fullmetal Alchemist: Brotherhood",
    "poster": "https://img.zorores.com/_r/300x400/100/0d/2d/0d2d0a1d4276e7e2595702dc4cebbda9/0d2d0a1d4276e7e2595702dc4cebbda9.jpeg",
    "otherInfo": [
      "TV",
      "Ep 64 / 64",
      "24m"
    ]
  },
  {
    "id": "one-punch-man-63",
    "name": "One Punch Man",
    "jname": "One Punch Man",
    "poster": "https://img.zorores.com/_r/300x400/100/f5/d1/f5d173f8317f592c6c70d594829b89e4/f5d173f8317f592c6c70d594829b89e4.jpg",
    "otherInfo": [
      "TV",
      "Ep 12 / 12",
      "24m"
    ]
  },
  {
    "id": "sword-art-online-2274",
    "name": "Sword Art Online",
    "jname": "Sword Art Online",
    "poster": "https://img.zorores.com/_r/300x400/100/90/dc/90dca175561e61180622bc79218104cb/90dca175561e61180622bc79218104cb.jpg",
    "otherInfo": [
      "TV",
      "Ep 25 / 25",
      "23m"
    ]
  },
  {
    "id": "fullmetal-alchemist-brotherhood-1",
    "name": "Fullmetal Alchemist: Brotherhood",
    "jname": "Fullmetal Alchemist: Brotherhood",
    "poster": "https://img.zorores.com/_r/300x400/100/0d/2d/0d2d0a1d4276e7e2595702dc4cebbda9/0d2d0a1d4276e7e2595702dc4cebbda9.jpeg",
    "otherInfo": [
      "TV",
      "Ep 64 / 64",
      "24m"
    ]
  },
  {
    "id": "hunter-x-hunter-2",
    "name": "Hunter x Hunter",
    "jname": "Hunter x Hunter (2011)",
    "poster": "https://img.zorores.com/_r/300x400/100/99/3c/993c0361975cce4c7fbb11f8558f9664/993c0361975cce4c7fbb11f8558f9664.jpg",
    "otherInfo": [
      "TV",
      "Ep 148 / 148",
      "23m"
    ]
  },
  {
    "id": "one-piece-100",
    "name": "One Piece",
    "jname": "One Piece",
    "poster": "https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg",
    "otherInfo": [
      "TV",
      "Ep 1053",
      "24m"
    ]
  },
  {
    "id": "steinsgate-3",
    "name": "Steins;Gate",
    "jname": "Steins;Gate",
    "poster": "https://img.zorores.com/_r/300x400/100/68/35/6835ff30fa46da5612e3adc81f51724e/6835ff30fa46da5612e3adc81f51724e.jpg",
    "otherInfo": [
      "TV",
      "Ep 24 / 24",
      "24m"
    ]
  },
  {
    "id": "death-note-60",
    "name": "Death Note",
    "jname": "Death Note",
    "poster": "https://img.zorores.com/_r/300x400/100/5e/61/5e61f3e7c0045e46b670d31a5bb39c68/5e61f3e7c0045e46b670d31a5bb39c68.jpg",
    "otherInfo": [
      "TV",
      "Ep 37 / 37",
      "23m"
    ]
  },
  {
    "id": "yugioh-2685",
    "name": "Yu☆Gi☆Oh!",
    "jname": "Yu☆Gi☆Oh!",
    "poster": "https://img.zorores.com/_r/300x400/100/53/4d/534dfad7eee822bd8109bfcf1adc185d/534dfad7eee822bd8109bfcf1adc185d.jpg",
    "otherInfo": [
      "TV",
      "Ep 27 / 27",
      "24m"
    ]
  },
  {
    "id": "peter-grill-and-the-philosophers-time-super-extra-18165",
    "name": "Peter Grill and the Philosopher's Time: Super Extra",
    "jname": "Peter Grill to Kenja no Jikan: Super Extra",
    "poster": "https://img.zorores.com/_r/300x400/100/be/b8/beb8d3d34708ab455d3b97f979f55011/beb8d3d34708ab455d3b97f979f55011.jpg",
    "otherInfo": [
      "TV",
      "Ep 12 / 12",
      "13m"
    ]
  },
  {
    "id": "dragon-ball-super-super-hero-18232",
    "name": "Dragon Ball Super: Super Hero",
    "jname": "Dragon Ball Super: Super Hero",
    "poster": "https://img.zorores.com/_r/300x400/100/e3/a0/e3a0c29bf713cc99e35de227eb9c93d8/e3a0c29bf713cc99e35de227eb9c93d8.jpg",
    "otherInfo": [
      "Movie",
      "Ep Full",
      "99m"
    ]
  },
  {
    "id": "gun-samurai-8614",
    "name": "Gun Samurai",
    "jname": "Gun-dou Musashi",
    "poster": "https://img.zorores.com/_r/300x400/100/8b/b3/8bb3dd842692241899af3d2622a5bf39/8bb3dd842692241899af3d2622a5bf39.jpg",
    "otherInfo": [
      "TV",
      "Ep 9 / 26",
      "24m"
    ]
  },
  {
    "id": "the-haunted-house-the-secret-of-the-ghost-ball-11673",
    "name": "The Haunted House: The Secret of the Ghost Ball",
    "jname": "Sinbi Apateu: Ghost Ball Bimil",
    "poster": "https://img.zorores.com/_r/300x400/100/db/83/db83b66c5adb250473fb3350288da13c/db83b66c5adb250473fb3350288da13c.jpg",
    "otherInfo": [
      "TV",
      "Ep 24 / 24",
      "24m"
    ]
  }
]

const latestEpisodeAnimes = [
  {
    "id": "my-life-as-inukaisans-dog-18282",
    "name": "My Life as Inukai-san's Dog.",
    "poster": "https://img.zorores.com/_r/300x400/100/aa/f5/aaf51926d9fd57611f031b3358081988/aaf51926d9fd57611f031b3358081988.jpg",
    "duration": "12m",
    "type": "TV",
    "rating": "18+",
    "episodes": "10"
  },
  {
    "id": "onimai-im-now-your-sister-18246",
    "name": "Onimai: I'm Now Your Sister!",
    "poster": "https://img.zorores.com/_r/300x400/100/5d/93/5d9356c9cbf38c8d9e49bd22894ffc30/5d9356c9cbf38c8d9e49bd22894ffc30.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "10"
  },
  {
    "id": "revenger-18299",
    "name": "Revenger",
    "poster": "https://img.zorores.com/_r/300x400/100/81/a5/81a57d47730006ab915c06a253d17506/81a57d47730006ab915c06a253d17506.png",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "10"
  },
  {
    "id": "spy-classroom-18250",
    "name": "Spy Classroom",
    "poster": "https://img.zorores.com/_r/300x400/100/e5/8c/e58ccb788a8d716221458f031459d170/e58ccb788a8d716221458f031459d170.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": "18+",
    "episodes": "9/12"
  },
  {
    "id": "is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-iv-part-2-18241",
    "name": "Is It Wrong to Try to Pick Up Girls in a Dungeon? IV Part 2",
    "poster": "https://img.zorores.com/_r/300x400/100/a9/bc/a9bc177543da2240a5e0be952ea21cf1/a9bc177543da2240a5e0be952ea21cf1.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "10/11"
  },
  {
    "id": "the-three-body-problem-18237",
    "name": "The Three-Body Problem",
    "poster": "https://img.zorores.com/_r/300x400/100/c3/55/c355a0b8f4152347f68aede7497987b2/c355a0b8f4152347f68aede7497987b2.jpg",
    "duration": "36m",
    "type": "ONA",
    "rating": null,
    "episodes": "11"
  },
  {
    "id": "the-soul-of-soldier-master-part-2-18317",
    "name": "The Soul of Soldier Master Part 2",
    "poster": "https://img.zorores.com/_r/300x400/100/72/2c/722c8db16dd62159449624b5d2d70117/722c8db16dd62159449624b5d2d70117.jpg",
    "duration": "16m",
    "type": "ONA",
    "rating": null,
    "episodes": "8"
  },
  {
    "id": "kaina-of-the-great-snow-sea-18295",
    "name": "Kaina of the Great Snow Sea",
    "poster": "https://img.zorores.com/_r/300x400/100/87/24/87241ca8a1c6ae70f762e4d1f1659f1f/87241ca8a1c6ae70f762e4d1f1659f1f.jpg",
    "duration": "22m",
    "type": "TV",
    "rating": null,
    "episodes": "9/11"
  },
  {
    "id": "tomochan-is-a-girl-18248",
    "name": "Tomo-chan Is a Girl!",
    "poster": "https://img.zorores.com/_r/300x400/100/72/b9/72b9514fba1c1f336fb744c08db0af4d/72b9514fba1c1f336fb744c08db0af4d.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "10/13"
  },
  {
    "id": "technoroid-overmind-18306",
    "name": "Technoroid: Overmind",
    "poster": "https://img.zorores.com/_r/300x400/100/e2/b7/e2b7b6756162532805e4f3e92390c04d/e2b7b6756162532805e4f3e92390c04d.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "9"
  },
  {
    "id": "wu-geng-ji-4th-season-18069",
    "name": "The Legend and the Hero 4th Season",
    "poster": "https://img.zorores.com/_r/300x400/100/27/42/2742daec78cc933587231277382fea36/2742daec78cc933587231277382fea36.jpg",
    "duration": "17m",
    "type": "ONA",
    "rating": null,
    "episodes": "35/42"
  },
  {
    "id": "tsurune-the-linking-shot-18296",
    "name": "Tsurune - The Linking Shot -",
    "poster": "https://img.zorores.com/_r/300x400/100/f6/d6/f6d6b6a77dd16cf8f82e218142526c81/f6d6b6a77dd16cf8f82e218142526c81.png",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "10"
  }
]

const genres = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Dementia",
  "Demons",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Game",
  "Harem",
  "Historical",
  "Horror",
  "Isekai",
  "Josei",
  "Kids",
  "Magic",
  "Martial Arts",
  "Mecha",
  "Military",
  "Music",
  "Mystery",
  "Parody",
  "Police",
  "Psychological",
  "Romance",
  "Samurai",
  "School",
  "Sci-Fi",
  "Seinen",
  "Shoujo",
  "Shoujo Ai",
  "Shounen",
  "Shounen Ai",
  "Slice of Life",
  "Space",
  "Sports",
  "Super Power",
  "Supernatural",
  "Thriller",
  "Vampire"
]

const mostViewed = {
  "today": [
    {
      "id": "one-piece-100",
      "rank": '01',
      "name": "One Piece",
      "poster": "https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg",
      "views": "289,738",
      "hearts": "318,874"
    },
    {
      "id": "naruto-shippuden-355",
      "rank": '02',
      "name": "Naruto: Shippuden",
      "poster": "https://img.zorores.com/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg",
      "views": "98,699",
      "hearts": "150,049"
    },
    {
      "id": "my-hero-academia-season-6-18154",
      "rank": '03',
      "name": "My Hero Academia Season 6",
      "poster": "https://img.zorores.com/_r/300x400/100/20/b7/20b7580c1abdf45a6eaf4826fc9fdf33/20b7580c1abdf45a6eaf4826fc9fdf33.jpg",
      "views": "63,628",
      "hearts": "130,996"
    },
    {
      "id": "attack-on-titan-the-final-season-part-3-18329",
      "rank": '04',
      "name": "Attack on Titan: The Final Season Part 3",
      "poster": "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      "views": "54,476",
      "hearts": "44,799"
    },
    {
      "id": "tomochan-is-a-girl-18248",
      "rank": '05',
      "name": "Tomo-chan Is a Girl!",
      "poster": "https://img.zorores.com/_r/300x400/100/72/b9/72b9514fba1c1f336fb744c08db0af4d/72b9514fba1c1f336fb744c08db0af4d.jpg",
      "views": "54,339",
      "hearts": "66,306"
    },
    {
      "id": "blue-lock-17889",
      "rank": '06',
      "name": "Blue Lock",
      "poster": "https://img.zorores.com/_r/300x400/100/fc/ed/fced51e392ffd80041b3a1581ba7de2f/fced51e392ffd80041b3a1581ba7de2f.jpg",
      "views": "47,768",
      "hearts": "179,465"
    },
    {
      "id": "naruto-677",
      "rank": '07',
      "name": "Naruto",
      "poster": "https://img.zorores.com/_r/300x400/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg",
      "views": "46,622",
      "hearts": "168,512"
    },
    {
      "id": "the-eminence-in-shadow-17473",
      "rank": '08',
      "name": "The Eminence in Shadow",
      "poster": "https://img.zorores.com/_r/300x400/100/bc/a4/bca4a71e271a30fb1b44d33d56db8f8f/bca4a71e271a30fb1b44d33d56db8f8f.jpg",
      "views": "39,496",
      "hearts": "184,530"
    },
    {
      "id": "black-clover-2404",
      "rank": '09',
      "name": "Black Clover",
      "poster": "https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",
      "views": "39,142",
      "hearts": "157,695"
    },
    {
      "id": "attack-on-titan-112",
      "rank": '10',
      "name": "Attack on Titan",
      "poster": "https://img.zorores.com/_r/300x400/100/de/bf/debf027d032c6d40b91fab16b2ff9bd4/debf027d032c6d40b91fab16b2ff9bd4.jpg",
      "views": "34,893",
      "hearts": "195,770"
    }
  ],
  "week": [
    {
      "id": "one-piece-100",
      "rank": '01',
      "name": "One Piece",
      "poster": "https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg",
      "views": "3,666,732",
      "hearts": "318,874"
    },
    {
      "id": "attack-on-titan-the-final-season-part-3-18329",
      "rank": '02',
      "name": "Attack on Titan: The Final Season Part 3",
      "poster": "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      "views": "1,643,689",
      "hearts": "44,799"
    },
    {
      "id": "my-hero-academia-season-6-18154",
      "rank": '03',
      "name": "My Hero Academia Season 6",
      "poster": "https://img.zorores.com/_r/300x400/100/20/b7/20b7580c1abdf45a6eaf4826fc9fdf33/20b7580c1abdf45a6eaf4826fc9fdf33.jpg",
      "views": "1,160,638",
      "hearts": "130,996"
    },
    {
      "id": "naruto-shippuden-355",
      "rank": '04',
      "name": "Naruto: Shippuden",
      "poster": "https://img.zorores.com/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg",
      "views": "1,102,417",
      "hearts": "150,049"
    },
    {
      "id": "blue-lock-17889",
      "rank": '05',
      "name": "Blue Lock",
      "poster": "https://img.zorores.com/_r/300x400/100/fc/ed/fced51e392ffd80041b3a1581ba7de2f/fced51e392ffd80041b3a1581ba7de2f.jpg",
      "views": "1,021,979",
      "hearts": "179,465"
    },
    {
      "id": "tokyo-revengers-christmas-showdown-18244",
      "rank": '06',
      "name": "Tokyo Revengers: Christmas Showdown",
      "poster": "https://img.zorores.com/_r/300x400/100/fb/66/fb663be9a427cc4c9556a5a124b060e8/fb663be9a427cc4c9556a5a124b060e8.jpg",
      "views": "542,897",
      "hearts": "81,962"
    },
    {
      "id": "naruto-677",
      "rank": '07',
      "name": "Naruto",
      "poster": "https://img.zorores.com/_r/300x400/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg",
      "views": "518,021",
      "hearts": "168,512"
    },
    {
      "id": "the-eminence-in-shadow-17473",
      "rank": '08',
      "name": "The Eminence in Shadow",
      "poster": "https://img.zorores.com/_r/300x400/100/bc/a4/bca4a71e271a30fb1b44d33d56db8f8f/bca4a71e271a30fb1b44d33d56db8f8f.jpg",
      "views": "501,190",
      "hearts": "184,530"
    },
    {
      "id": "black-clover-2404",
      "rank": '09',
      "name": "Black Clover",
      "poster": "https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",
      "views": "469,247",
      "hearts": "157,695"
    },
    {
      "id": "boruto-naruto-next-generations-8143",
      "rank": '10',
      "name": "Boruto: Naruto Next Generations",
      "poster": "https://img.zorores.com/_r/300x400/100/05/4f/054ff70eabaeadc4ad9978054e274080/054ff70eabaeadc4ad9978054e274080.jpg",
      "views": "463,032",
      "hearts": "85,752"
    }
  ],
  "month": [
    {
      "id": "one-piece-100",
      "rank": '01',
      "name": "One Piece",
      "poster": "https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg",
      "views": "14,378,230",
      "hearts": "318,874"
    },
    {
      "id": "my-hero-academia-season-6-18154",
      "rank": '02',
      "name": "My Hero Academia Season 6",
      "poster": "https://img.zorores.com/_r/300x400/100/20/b7/20b7580c1abdf45a6eaf4826fc9fdf33/20b7580c1abdf45a6eaf4826fc9fdf33.jpg",
      "views": "4,103,418",
      "hearts": "130,996"
    },
    {
      "id": "blue-lock-17889",
      "rank": '03',
      "name": "Blue Lock",
      "poster": "https://img.zorores.com/_r/300x400/100/fc/ed/fced51e392ffd80041b3a1581ba7de2f/fced51e392ffd80041b3a1581ba7de2f.jpg",
      "views": "4,063,982",
      "hearts": "179,465"
    },
    {
      "id": "naruto-shippuden-355",
      "rank": '04',
      "name": "Naruto: Shippuden",
      "poster": "https://img.zorores.com/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg",
      "views": "3,990,025",
      "hearts": "150,049"
    },
    {
      "id": "the-eminence-in-shadow-17473",
      "rank": '05',
      "name": "The Eminence in Shadow",
      "poster": "https://img.zorores.com/_r/300x400/100/bc/a4/bca4a71e271a30fb1b44d33d56db8f8f/bca4a71e271a30fb1b44d33d56db8f8f.jpg",
      "views": "2,788,204",
      "hearts": "184,530"
    },
    {
      "id": "naruto-677",
      "rank": '06',
      "name": "Naruto",
      "poster": "https://img.zorores.com/_r/300x400/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg",
      "views": "1,869,489",
      "hearts": "168,512"
    },
    {
      "id": "boruto-naruto-next-generations-8143",
      "rank": '07',
      "name": "Boruto: Naruto Next Generations",
      "poster": "https://img.zorores.com/_r/300x400/100/05/4f/054ff70eabaeadc4ad9978054e274080/054ff70eabaeadc4ad9978054e274080.jpg",
      "views": "1,775,565",
      "hearts": "85,752"
    },
    {
      "id": "black-clover-2404",
      "rank": '08',
      "name": "Black Clover",
      "poster": "https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",
      "views": "1,739,671",
      "hearts": "157,695"
    },
    {
      "id": "tokyo-revengers-christmas-showdown-18244",
      "rank": '09',
      "name": "Tokyo Revengers: Christmas Showdown",
      "poster": "https://img.zorores.com/_r/300x400/100/fb/66/fb663be9a427cc4c9556a5a124b060e8/fb663be9a427cc4c9556a5a124b060e8.jpg",
      "views": "1,677,673",
      "hearts": "81,962"
    },
    {
      "id": "attack-on-titan-the-final-season-part-3-18329",
      "rank": '10',
      "name": "Attack on Titan: The Final Season Part 3",
      "poster": "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
      "views": "1,643,689",
      "hearts": "44,799"
    }
  ]
}

</script>

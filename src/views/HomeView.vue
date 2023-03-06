<template>

  <Carousel class="relative" #default="{ currentSlide }">

    <Slide v-for="slide, index in tA" :key="index">
      <AnimeSlide
        v-show="currentSlide === index"
        class="absolute inset-0 w-full h-full max-h-[100%]"
        :rank="slide.rank" :id="slide.id"
        :name="slide.name" :poster="slide.poster"
        :description="slide.description"
      />
    </Slide>

  </Carousel>



  <!-- <Suspense>

    <template #default>
      <AnimeDeck :animes="results" />
    </template>

    <template #fallback>
      <p>
        Loading data, hang on....
      </p>
    </template>

  </Suspense> -->
</template>

<script setup>
import Carousel from '@/components/home/Carousel.vue';
import Slide from '@/components/home/Slide.vue';
import AnimeSlide from '@/components/home/AnimeSlide.vue';

import AnimeDeck from '@/components/AnimeDeck.vue';
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



</script>

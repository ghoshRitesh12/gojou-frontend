<template>
  
  <Suspense>

    <template #default>
      <div class="xl:flex gap-8 mt-4">

        <AnimeDeck
          :animes="ReqAnimes || reqAnimes"
          :name="categoryName()"
          class="flex-[70%] 2xl:flex-[75%]"
        >

          <template #footer>
            <Pagination
              :current-page="page"
              :has-next-page="HasNextPage"
              :total-pages="TotalPages"
              :param="`anime/${route.params.animeCategory}?`"
            />
          </template>

        </AnimeDeck>


        <div class="flex-[35%] 2xl:flex-[25%] pt-4">

          <MostViewedDeck
            :all-animes="mostViewed || mostViewed"
          />

          <GenreDeck
            :genres="genres || genres"
            :length="genres.length"
            class="mt-8"
          />

        </div>

      </div>
    </template>

    <template #fallback>
      <p>Loading...</p>
    </template>

  </Suspense>

</template>


<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import AnimeDeck from '@/components/AnimeDeck.vue';
import MostViewedDeck from '@/components/home/MostViewedDeck.vue';
import GenreDeck from '@/components/home/GenreDeck.vue';
import Pagination from '@/components/Pagination.vue';

const route = useRoute();
const page = parseInt(route.query.page) || 1;


const ReqAnimes = ref([]);
const Genres = ref([]);
const MostViewed = ref({});

const HasNextPage = ref(false);
const TotalPages = ref(0);

const getData = async () => {
  try {
    const resp = await fetch(`http://localhost:5000/api/v1/${route.params.animeCategory}?page=${page}`)
    const data = await resp.json();

    ReqAnimes.value = data.animes;
    Genres.value = data.genres;
    MostViewed.value = data.mostViewedAnime;

    HasNextPage.value = data.hasNextPage;
    TotalPages.value = data.totalPages;


  } catch (err) {
    console.log(err);
  }
}

getData();

const categoryName = () => {
  const name = route.params.animeCategory
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (name === 'Tv') ? `${name.toUpperCase()} Series Anime` : `${name}`; 
}


const hasNextPage = true;
const currentPage = 1;
const totalPages = 50;

const reqAnimes = [
  {
    "id": "fullmetal-alchemist-brotherhood-1",
    "name": "Fullmetal Alchemist: Brotherhood",
    "poster": "https://img.zorores.com/_r/300x400/100/0d/2d/0d2d0a1d4276e7e2595702dc4cebbda9/0d2d0a1d4276e7e2595702dc4cebbda9.jpeg",
    "duration": "24m",
    "type": "TV",
    "rating": "18+",
    "episodes": "64/64"
  },
  {
    "id": "hunter-x-hunter-2",
    "name": "Hunter x Hunter",
    "poster": "https://img.zorores.com/_r/300x400/100/99/3c/993c0361975cce4c7fbb11f8558f9664/993c0361975cce4c7fbb11f8558f9664.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "148/148"
  },
  {
    "id": "one-piece-100",
    "name": "One Piece",
    "poster": "https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "1053"
  },
  {
    "id": "steinsgate-3",
    "name": "Steins;Gate",
    "poster": "https://img.zorores.com/_r/300x400/100/68/35/6835ff30fa46da5612e3adc81f51724e/6835ff30fa46da5612e3adc81f51724e.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "24/24"
  },
  {
    "id": "death-note-60",
    "name": "Death Note",
    "poster": "https://img.zorores.com/_r/300x400/100/5e/61/5e61f3e7c0045e46b670d31a5bb39c68/5e61f3e7c0045e46b670d31a5bb39c68.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": "18+",
    "episodes": "37/37"
  },
  {
    "id": "attack-on-titan-112",
    "name": "Attack on Titan",
    "poster": "https://img.zorores.com/_r/300x400/100/de/bf/debf027d032c6d40b91fab16b2ff9bd4/debf027d032c6d40b91fab16b2ff9bd4.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": "18+",
    "episodes": "25/25"
  },
  {
    "id": "naruto-shippuden-355",
    "name": "Naruto: Shippuden",
    "poster": "https://img.zorores.com/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "500/500"
  },
  {
    "id": "code-geass-lelouch-of-the-rebellion-41",
    "name": "Code Geass: Lelouch of the Rebellion",
    "poster": "https://img.zorores.com/_r/300x400/100/b7/b1/b7b180ff8404f0475e60a4f3a0f5bd20/b7b180ff8404f0475e60a4f3a0f5bd20.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": "18+",
    "episodes": "25/25"
  },
  {
    "id": "neon-genesis-evangelion-209",
    "name": "Neon Genesis Evangelion",
    "poster": "https://img.zorores.com/_r/300x400/100/60/af/60af693753215485f1a8cfea83934e79/60af693753215485f1a8cfea83934e79.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "26/26"
  },
  {
    "id": "demon-slayer-kimetsu-no-yaiba-47",
    "name": "Demon Slayer: Kimetsu no Yaiba",
    "poster": "https://img.zorores.com/_r/300x400/100/30/df/30df93feaa422101659e14d0a2a2f582/30df93feaa422101659e14d0a2a2f582.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": "18+",
    "episodes": "26/26"
  },
  {
    "id": "your-name-10",
    "name": "Your Name",
    "poster": "https://img.zorores.com/_r/300x400/100/16/ee/16eec56baf8f3fcc6430607f58ce3d12/16eec56baf8f3fcc6430607f58ce3d12.jpg",
    "duration": "106m",
    "type": "Movie",
    "rating": null,
    "episodes": "Full"
  },
  {
    "id": "your-lie-in-april-31",
    "name": "Your Lie in April",
    "poster": "https://img.zorores.com/_r/300x400/100/17/13/1713f98ec94d824b3a34ef0f4ace633f/1713f98ec94d824b3a34ef0f4ace633f.jpg",
    "duration": "22m",
    "type": "TV",
    "rating": null,
    "episodes": "22/22"
  },
  {
    "id": "a-silent-voice-11",
    "name": "A Silent Voice",
    "poster": "https://img.zorores.com/_r/300x400/100/7f/c6/7fc61d82b89949dff4319bd73ff2d456/7fc61d82b89949dff4319bd73ff2d456.jpg",
    "duration": "130m",
    "type": "Movie",
    "rating": null,
    "episodes": "Full"
  },
  {
    "id": "jujutsu-kaisen-tv-534",
    "name": "Jujutsu Kaisen (TV)",
    "poster": "https://img.zorores.com/_r/300x400/100/82/40/82402f796b7d84d7071ab1e03ff7747a/82402f796b7d84d7071ab1e03ff7747a.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "24/24"
  },
  {
    "id": "cowboy-bebop-27",
    "name": "Cowboy Bebop",
    "poster": "https://img.zorores.com/_r/300x400/100/ce/5e/ce5e539af63e42431621fc66a47fbec1/ce5e539af63e42431621fc66a47fbec1.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": "18+",
    "episodes": "26/26"
  },
  {
    "id": "gurren-lagann-45",
    "name": "Gurren Lagann",
    "poster": "https://img.zorores.com/_r/300x400/100/eb/6f/eb6f749e861eaa3abec23f6f82636552/eb6f749e861eaa3abec23f6f82636552.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "27/27"
  },
  {
    "id": "naruto-677",
    "name": "Naruto",
    "poster": "https://img.zorores.com/_r/300x400/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "220/220"
  },
  {
    "id": "code-geass-lelouch-of-the-rebellion-r2-17",
    "name": "Code Geass: Lelouch of the Rebellion R2",
    "poster": "https://img.zorores.com/_r/300x400/100/39/82/3982e0e11afc5261c6c0daf71c408342/3982e0e11afc5261c6c0daf71c408342.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": "18+",
    "episodes": "25/25"
  },
  {
    "id": "haikyu-76",
    "name": "Haikyu!!",
    "poster": "https://img.zorores.com/_r/300x400/100/12/67/126756b57f51180a156a6895b0166643/126756b57f51180a156a6895b0166643.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "25/25"
  },
  {
    "id": "clannad-after-story-15",
    "name": "Clannad ~After Story~",
    "poster": "https://img.zorores.com/_r/300x400/100/04/e6/04e65044c0d9637367efe0cddf7dd205/04e65044c0d9637367efe0cddf7dd205.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "24/24"
  },
  {
    "id": "bleach-806",
    "name": "Bleach",
    "poster": "https://img.zorores.com/_r/300x400/100/bd/5a/bd5ae1d387a59c5abcf5e1a6a616728c/bd5ae1d387a59c5abcf5e1a6a616728c.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "366/366"
  },
  {
    "id": "sword-art-online-2274",
    "name": "Sword Art Online",
    "poster": "https://img.zorores.com/_r/300x400/100/90/dc/90dca175561e61180622bc79218104cb/90dca175561e61180622bc79218104cb.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "25/25"
  },
  {
    "id": "rezero-starting-life-in-another-world-212",
    "name": "Re:ZERO -Starting Life in Another World-",
    "poster": "https://img.zorores.com/_r/300x400/100/82/50/825040c17445dd322656870e36cd92a7/825040c17445dd322656870e36cd92a7.jpg",
    "duration": "25m",
    "type": "TV",
    "rating": "18+",
    "episodes": "25/25"
  },
  {
    "id": "one-punch-man-63",
    "name": "One Punch Man",
    "poster": "https://img.zorores.com/_r/300x400/100/f5/d1/f5d173f8317f592c6c70d594829b89e4/f5d173f8317f592c6c70d594829b89e4.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": "18+",
    "episodes": "12/12"
  },
  {
    "id": "gintama-13",
    "name": "Gintama",
    "poster": "https://img.zorores.com/_r/300x400/100/55/7c/557c4c18257fd706c7ab480ce75fdd6f/557c4c18257fd706c7ab480ce75fdd6f.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "201/201"
  },
  {
    "id": "violet-evergarden-59",
    "name": "Violet Evergarden",
    "poster": "https://img.zorores.com/_r/300x400/100/22/3f/223fc01a72fcc2ac45ff4fce4072087d/223fc01a72fcc2ac45ff4fce4072087d.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "13/13"
  },
  {
    "id": "toradora-232",
    "name": "Toradora!",
    "poster": "https://img.zorores.com/_r/300x400/100/29/a2/29a2eb93554ed3b8ab5d1507ac8f5d77/29a2eb93554ed3b8ab5d1507ac8f5d77.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "25/25"
  },
  {
    "id": "my-hero-academia-322",
    "name": "My Hero Academia",
    "poster": "https://img.zorores.com/_r/300x400/100/d1/ae/d1ae1f3d3324e24dfdfa64e4c2e687f8/d1ae1f3d3324e24dfdfa64e4c2e687f8.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "13/13"
  },
  {
    "id": "puella-magi-madoka-magica-155",
    "name": "Puella Magi Madoka Magica",
    "poster": "https://img.zorores.com/_r/300x400/100/3b/9c/3b9cbf5d0461f96c7cb1bf011cfac352/3b9cbf5d0461f96c7cb1bf011cfac352.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "12/12"
  },
  {
    "id": "attack-on-titan-final-season-part-1-15548",
    "name": "Attack on Titan: Final Season, Part 1",
    "poster": "https://img.zorores.com/_r/300x400/100/83/da/83da53919d7a20332be01686141f18f6/83da53919d7a20332be01686141f18f6.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "16/16"
  },
  {
    "id": "tokyo-ghoul-790",
    "name": "Tokyo Ghoul",
    "poster": "https://img.zorores.com/_r/300x400/100/a6/ff/a6ffd8294e7a5d540d7c462e94400189/a6ffd8294e7a5d540d7c462e94400189.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": "18+",
    "episodes": "12/12"
  },
  {
    "id": "bakemonogatari-the-monogatari-series-174",
    "name": "Bakemonogatari (The Monogatari Series)",
    "poster": "https://img.zorores.com/_r/300x400/100/1a/0a/1a0ae1b29d8d492637a254480a6b9e69/1a0ae1b29d8d492637a254480a6b9e69.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": "18+",
    "episodes": "15/15"
  },
  {
    "id": "angel-beats-321",
    "name": "Angel Beats!",
    "poster": "https://img.zorores.com/_r/300x400/100/d9/43/d9432a1c947b1fe6da1d7c9a3c324527/d9432a1c947b1fe6da1d7c9a3c324527.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "13/13"
  },
  {
    "id": "no-game-no-life-261",
    "name": "No Game, No Life",
    "poster": "https://img.zorores.com/_r/300x400/100/44/7b/447bf7fd0d5e4ad52fb25e9f9f231ce1/447bf7fd0d5e4ad52fb25e9f9f231ce1.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "12/12"
  },
  {
    "id": "erased-151",
    "name": "ERASED",
    "poster": "https://img.zorores.com/_r/300x400/100/3b/fb/3bfbeac90c228063d45869dbf9d5d028/3bfbeac90c228063d45869dbf9d5d028.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": "18+",
    "episodes": "12/12"
  },
  {
    "id": "fairy-tail-930",
    "name": "Fairy Tail",
    "poster": "https://img.zorores.com/_r/300x400/100/cc/bc/ccbc20fd8ddf9b2000bf23894a787436/ccbc20fd8ddf9b2000bf23894a787436.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "175/175"
  },
  {
    "id": "monster-37",
    "name": "Monster",
    "poster": "https://img.zorores.com/_r/300x400/100/ec/d3/ecd3e711e8b8d78306bdcbb0a595baf1/ecd3e711e8b8d78306bdcbb0a595baf1.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": "18+",
    "episodes": "74/74"
  },
  {
    "id": "mob-psycho-100-101",
    "name": "Mob Psycho 100",
    "poster": "https://img.zorores.com/_r/300x400/100/3f/20/3f20ed9108a583429fd687f986a617e0/3f20ed9108a583429fd687f986a617e0.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "12/12"
  },
  {
    "id": "rascal-does-not-dream-of-bunny-girl-senpai-149",
    "name": "Rascal Does Not Dream of Bunny Girl Senpai",
    "poster": "https://img.zorores.com/_r/300x400/100/11/ce/11ce0781db5a024b36461797ac4d4db7/11ce0781db5a024b36461797ac4d4db7.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "13/13"
  },
  {
    "id": "konosuba-gods-blessing-on-this-wonderful-world-342",
    "name": "KonoSuba: God's Blessing on This Wonderful World!",
    "poster": "https://img.zorores.com/_r/300x400/100/60/96/60960f6aac211735eff36b6f5950513f/60960f6aac211735eff36b6f5950513f.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "10/10"
  },
  {
    "id": "black-clover-2404",
    "name": "Black Clover",
    "poster": "https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": null,
    "episodes": "170/170"
  },
  {
    "id": "made-in-abyss-32",
    "name": "Made in Abyss",
    "poster": "https://img.zorores.com/_r/300x400/100/dd/3c/dd3c2fdc4c6ac5fbeb0110e9bfd465d4/dd3c2fdc4c6ac5fbeb0110e9bfd465d4.jpg",
    "duration": "25m",
    "type": "TV",
    "rating": "18+",
    "episodes": "13/13"
  },
  {
    "id": "vinland-saga-40",
    "name": "Vinland Saga",
    "poster": "https://img.zorores.com/_r/300x400/100/9c/c8/9cc864ccccce7f38f7a100627ef21516/9cc864ccccce7f38f7a100627ef21516.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": "18+",
    "episodes": "24/24"
  },
  {
    "id": "chainsaw-man-17406",
    "name": "Chainsaw Man",
    "poster": "https://img.zorores.com/_r/300x400/100/b3/da/b3da1326e07269ddd8d73475c5dabf2c/b3da1326e07269ddd8d73475c5dabf2c.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": "18+",
    "episodes": "12/12"
  },
  {
    "id": "psycho-pass-158",
    "name": "Psycho-Pass",
    "poster": "https://img.zorores.com/_r/300x400/100/be/b3/beb3713889a579eb4d3f088ee704c565/beb3713889a579eb4d3f088ee704c565.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": "18+",
    "episodes": "22/22"
  },
  {
    "id": "jojos-bizarre-adventure-part-4-diamond-is-unbreakable-uncensored-89",
    "name": "JoJo's Bizarre Adventure Part 4: Diamond is Unbreakable (Uncensored)",
    "poster": "https://img.zorores.com/_r/300x400/100/67/4b/674b068e98b6d409a0999a60b8b15122/674b068e98b6d409a0999a60b8b15122.jpg",
    "duration": "23m",
    "type": "TV",
    "rating": "18+",
    "episodes": "39/39"
  },
  {
    "id": "spy-x-family-17977",
    "name": "Spy x Family",
    "poster": "https://img.zorores.com/_r/300x400/100/88/bd/88bd17534dc4884f23027035d23d74e5/88bd17534dc4884f23027035d23d74e5.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "12/12"
  },
  {
    "id": "kaguya-sama-love-is-war-123",
    "name": "Kaguya-sama: Love is War",
    "poster": "https://img.zorores.com/_r/300x400/100/f4/f7/f4f7470c7b0fedc1df5ec703c2d7fbc0/f4f7470c7b0fedc1df5ec703c2d7fbc0.jpg",
    "duration": "25m",
    "type": "TV",
    "rating": null,
    "episodes": "12/12"
  },
  {
    "id": "kill-la-kill-393",
    "name": "KILL la KILL",
    "poster": "https://img.zorores.com/_r/300x400/100/d5/39/d53922598579799ef65ac975e51f0922/d53922598579799ef65ac975e51f0922.jpg",
    "duration": "24m",
    "type": "TV",
    "rating": null,
    "episodes": "24/24"
  }
];

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


<style></style>

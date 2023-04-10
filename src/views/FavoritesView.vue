<template>

  <Suspense>

    <template #default>

      <div class="p-4 lg:px-6">

        <AnimeDeck
          :name="'Your favorite animes'"
          :animes="favoriteAnimes"
          class="mt-6"
        />

      </div>

    </template>

    <template #fallback>
      <p>...loading favorite page</p>
    </template>

  </Suspense>
  
</template>


<script setup>
import AnimeDeck from '@/components/AnimeDeck.vue';
import UserAPI from '@/services/userAPI.js';






const favoriteAnimes = [
  {
    "id": "mobile-suit-gundam-the-witch-from-mercury-season-2-18353",
    "name": "Mobile Suit Gundam: The Witch from Mercury Season 2",
    "poster": "https://img.zorores.com/_r/300x400/100/29/02/2902c9f658d71953c9f48836b97de08c/2902c9f658d71953c9f48836b97de08c.jpg",
    "duration": "Apr 9, 2023",
    "type": "TV (12 eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc-18056",
    "name": "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
    "poster": "https://img.zorores.com/_r/300x400/100/d6/aa/d6aa1102fe0a28e82aa7a347a6b5a5e1/d6aa1102fe0a28e82aa7a347a6b5a5e1.jpg",
    "duration": "Apr 9, 2023",
    "type": "TV (? eps)",
    "rating": "18+",
    "episodes": null
  },
  {
    "id": "my-star-18330",
    "name": "My Star",
    "poster": "https://img.zorores.com/_r/300x400/100/5d/2d/5d2df7d58122e4794372b87a18851b05/5d2df7d58122e4794372b87a18851b05.jpg",
    "duration": "Mar 17, 2023",
    "type": "TV (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "tenchi-muyou-gxp-paradise-shidou-hen-18391",
    "name": "Tenchi Muyou! GXP: Paradise Shidou-hen",
    "poster": "https://img.zorores.com/_r/300x400/100/5b/51/5b51f3f0521f3db9f5925038c573b597/5b51f3f0521f3db9f5925038c573b597.jpg",
    "duration": "May 26, 2023",
    "type": "OVA (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "azur-lane-queens-orders-18390",
    "name": "Azur Lane: Queen's Orders",
    "poster": "https://img.zorores.com/_r/300x400/100/8a/34/8a345d71c1b387ffab503b09795956e7/8a345d71c1b387ffab503b09795956e7.jpg",
    "duration": "May 10, 2023",
    "type": "OVA (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "my-teen-romantic-comedy-snafu-climax-ova-17423",
    "name": "My Teen Romantic Comedy SNAFU Climax! OVA",
    "poster": "https://img.zorores.com/_r/300x400/100/d9/1f/d91f1e40166ccaf5a163843c1ac7ee5f/d91f1e40166ccaf5a163843c1ac7ee5f.jpg",
    "duration": "Apr 27, 2023",
    "type": "OVA (1 eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "my-heroic-husband-18389",
    "name": "My Heroic Husband",
    "poster": "https://img.zorores.com/_r/300x400/100/5f/e1/5fe10342571e0a343a5902c50d1f26c4/5fe10342571e0a343a5902c50d1f26c4.png",
    "duration": "Apr 23, 2023",
    "type": "ONA (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "oh-my-goddess-18388",
    "name": "Oh! My goddess!",
    "poster": "https://img.zorores.com/_r/300x400/100/fc/84/fc84f68f22a3fb62fce90ef85238b4b7/fc84f68f22a3fb62fce90ef85238b4b7.jpg",
    "duration": "Apr 24, 2023",
    "type": "ONA (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "a-sheep-in-wolfs-clothing-18387",
    "name": "A Sheep In Wolf's Clothing",
    "poster": "https://img.zorores.com/_r/300x400/100/61/5f/615f6fa4b50f0f8245e3601e3038d961/615f6fa4b50f0f8245e3601e3038d961.jpg",
    "duration": "Apr 18, 2023",
    "type": "ONA (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "wulin-buer-zhoukan-18386",
    "name": "Wulin Buer Zhoukan",
    "poster": "https://img.zorores.com/_r/300x400/100/31/96/3196f91cec5369cc8251a49ccdbd5015/3196f91cec5369cc8251a49ccdbd5015.png",
    "duration": "Apr 10, 2023",
    "type": "ONA (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "yakitori-soldiers-of-misfortune-18385",
    "name": "Yakitori: Soldiers of Misfortune",
    "poster": "https://img.zorores.com/_r/300x400/100/17/bb/17bb64d7f52d3e9027800b452ab8d902/17bb64d7f52d3e9027800b452ab8d902.jpg",
    "duration": "?",
    "type": "ONA (? eps)",
    "rating": null,
    "episodes": null
  },
  {
    "id": "monster-but-wild-18384",
    "name": "Monster But Wild",
    "poster": "https://img.zorores.com/_r/300x400/100/47/ea/47eaf66af732918688fb77e192289d5c/47eaf66af732918688fb77e192289d5c.jpg",
    "duration": "Apr 16, 2023",
    "type": "ONA (? eps)",
    "rating": null,
    "episodes": null
  }
]


</script>


<style>

</style>

import { useRouter } from "vue-router";

const goToRoute = () => {
  const router = useRouter();

  const goToAnime = name => router.push(`/anime/info/${name}`)

  const goToCategory = category => router.push(`/anime/${category}`)
  
  const goToGenre = name => router.push(`/genre/${name}`)


  return {
    goToAnime,
    goToCategory,
    goToGenre
  };
}

export default goToRoute;

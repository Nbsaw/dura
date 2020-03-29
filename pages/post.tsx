import { useRouter } from "next/router";
import FullScreenContainer from "../components/full-screen-container";

export default function Post() {
  const router = useRouter();

  return (
    <FullScreenContainer>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </FullScreenContainer>
  );
}

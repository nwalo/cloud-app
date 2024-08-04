import Container from "@/components/container";
import Wrapper from "@/components/wrapper";
import Hero from "./(home)/hero";
import WhyCloud from "./(home)/whyCloud";
import PlatformStatistics from "./(home)/platformStatistics";
import LearnCloud from "./(home)/learnCloud";
import JoinCommunity from "./(home)/joinCommunity";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Container>
        <Wrapper>
          <Hero />
          <WhyCloud />
          <PlatformStatistics />
        </Wrapper>
      </Container>
      <div className="bg-purple-500">
        <Container>
          <Wrapper>
            <LearnCloud />
          </Wrapper>
        </Container>
      </div>
      <Container>
        <Wrapper>
          <JoinCommunity />
        </Wrapper>
      </Container>
    </main>
  );
}

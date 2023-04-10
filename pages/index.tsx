import { Inter } from "next/font/google";
import Seo from "@/components/Seo";
import Header from "@/components/organisms/Header";
import Billboard from "@/components/organisms/Billboard";
import MusicEvent from "@/lib/EventsData";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Seo
        metaTitle="PK Entertainment"
        metaDesc="PK Entertainment"
        metaKey="Event Organizer Promotor"
      />
      <Header />

      <Billboard data={MusicEvent} />

      <section>
        <div>
          <h1>section baru</h1>
        </div>
      </section>
    </>
  );
}

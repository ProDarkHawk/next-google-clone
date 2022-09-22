import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import SidebarLayout from "../components/layouts/sidebar/SidebarLayout";
import { NextPageWithLayout } from "./page";
const Home: NextPageWithLayout = () => {
  return (
    <>
      ABOUT Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a,
      corporis, ratione odit consequuntur voluptatem est assumenda voluptatibus
      quibusdam laboriosam architecto autem, consectetur vitae nostrum neque
      exercitationem similique dolor odio.
    </>
  );
};

export default Home;

Home.getLayout = (page) => (
  <PrimaryLayout>
    <SidebarLayout />
    {page}
  </PrimaryLayout>
);

import { Layout } from "../components/layout";
import Counter from "../components/counter";
import SCounter from "../components/staticCounter";
export function Home() {
  return (
    <Layout>
      <>
        <Counter />
        <h1 style={{ textAlign: "center", color: "limegreen" }}>
          Static Counter
        </h1>
        <SCounter />
      </>
    </Layout>
  );
}

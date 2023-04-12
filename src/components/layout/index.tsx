import { Layout as AntLayout } from "antd";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import "./index.scss";
interface IProps {
  children: JSX.Element;
}
export function Layout(props: IProps) {
  const { Content } = AntLayout;
  return (
    <AntLayout>
      <Navbar />
      <Content className="main-container">{props.children}</Content>
      <Footer />
    </AntLayout>
  );
}

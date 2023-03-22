import { Layout as AntLayout } from "antd";
import { Navbar } from "./navbar";
import { Footer as FooterContent } from "./footer";
interface IProps {
  children: any;
}
export function Layout(props: IProps) {
  const { Header, Content, Footer } = AntLayout;
  return (
    <AntLayout>
      <Navbar />
      <Content>{props.children}</Content>
      <FooterContent />
    </AntLayout>
  );
}

import Image from "next/image";
import Header from "./components/Header";
import Galerie from "./components/Galerie";
import VillaInfos from "./components/VillaInfos";
import Reservations from "./components/Reservations";
 import Footer from "./components/footer"
export default function Home() {
  return <div>
    <Header href="reservations"/>
    <Galerie/>
    <VillaInfos 
    surface={120}
    bedrooms={6}
    bathrooms={6}
    hasPool={true}
    hasKitchen={true}
    />
    <Reservations id="reservations"/>
    <Footer/>
  </div>
}

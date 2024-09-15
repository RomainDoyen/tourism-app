import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"
import { links } from "../routes/routes"

export default function Home() {
  return (
    <>
      <Header links={links} />
      <Footer 
        nameSite="Tourism App" 
        copyright="Tous droits réservés" 
      />
    </>
  )
}

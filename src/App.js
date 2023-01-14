import react from "react";
import reactDOM from "react-dom/client";

import Header from './components/Header'
import Body from './components/Body';
import Footer from './components/Footer';


// ******* config driven UI ************

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};


/* 
     * Header
     *    -Logo
     *    -NavInfo (right side)
     *    -cart
     * Body
     *   -search bar
     *   -restaurantlist
     *      -restaurant card (many cards)
     *         -Image
     *         -Name
     *         -Rating
     *         -Cuisines
     * Footer
     *   -links
     *   -copyright 
     
     */




const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



// const logo= react.createElement("img",{src:logoImg, alt:"logo"});

// const header=react.createElement("h1",null,"namaste react");

// const navBar= react.createElement("div",{className:"navBar"},logo,header);

// const root = reactDOM.createRoot(document.getElementById("root"));
// root.render(navBar);

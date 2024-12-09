import About from "./components/about";

import CheckoutPage from "./components/checkout";
import Homepage from "./components/homepage";

export default function Home() {
  return (
    <div>
      <Homepage />
      <About />
      <CheckoutPage />
    </div>
  );
}

import Accounts from "~/components/molecules/main/header/Accounts";
import Menus from "~/components/molecules/main/header/Menus";
import { useState, useEffect } from "react";
import { HeaderBox } from "./HeaderStyles";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headercolor, setHeaderColor] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolled == true) {
      setHeaderColor("#0C2F23");
    } else {
      setHeaderColor("transparent");
    }
  }, [isScrolled]);

  return (
    <HeaderBox headercolor={headercolor}>
      <Menus />
      <Accounts />
    </HeaderBox>
  );
};

export default Header;

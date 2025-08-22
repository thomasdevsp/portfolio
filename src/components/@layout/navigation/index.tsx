import { useBreakpoint } from "@/hooks/useBreakpoints";
import { Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { FaBook } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: (props) => <GoHome size={22} color={props.color} />,
  },
  {
    label: "Blog",
    href: "/blog",
    icon: (props) => <FaBook size={22} color={props.color} />,
  },
  {
    label: "Sobre mim",
    href: "/sobre-mim",
    icon: (props) => <RxPerson size={22} color={props.color} />,
  },
];

export default function Navigation() {
  const [tabIndex, setTabIndex] = useState(0);
  const isMobile = useBreakpoint("md");
  const pathname = usePathname();


  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };



  useEffect(() => {
    const index = NAV_ITEMS.findIndex((item) => item.href === pathname);
    setTabIndex(index);
  }, [pathname]);

  return (
    <Stack
      sx={{
        padding: "2rem",
        position: "absolute",
        top: 0,
        zIndex: 2,
        width: "100%",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",

        background: "transparent",
      }}
    >
      {NAV_ITEMS.map((item, index) => {
        const selected = pathname === item.href

        return (
          <Typography
            key={index}
            component={"a"}
            href={item.href}
            sx={{
              color: selected ? "#CBACF9" : "#e7e7e7",
              fontSize: selected ? "1.025rem" : "1rem",
              fontWeight: selected ? 600 : 300,
              opacity: selected ? 1 : 0.9,
              textDecoration: "none",
              transition: "all 0.2s ease",

              ":hover": {
                color: "#CBACF9",
                opacity: 1,
                transition: "all 0.2s ease",
              },
            }}
          >
            {item.label}
          </Typography>
        )
      })}
    </Stack>
  );
};


import { useBreakpoint } from "@/hooks/useBreakpoints";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { FaBook } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { ContainerHeader, ContainerNavigation } from "./styles";

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

const Navigation = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const pathname = usePathname();
  const isMobile = useBreakpoint("md");

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };



  useEffect(() => {
    const index = NAV_ITEMS.findIndex((item) => item.href === pathname);
    setTabIndex(index);
  }, [pathname]);

  return (
    <Box>
      <ContainerHeader>
        <ContainerNavigation>

          <Tabs
            value={tabIndex}
            onChange={handleChange}
            centered
            sx={{
              minHeight: "5.5rem", // Redução da altura das abas
              gap: "2rem",
              background: "#000319",

              "& .MuiTabs-indicator": {
                backgroundColor: "unset",
              },
              "& .MuiTab-root": {
                padding: "0.2rem 1rem",
                minHeight: "5.5rem", // Garantindo que as abas não fiquem muito altas

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",

                color: "white",
                fontSize: "0.9rem",
                fontWeight: "normal",
                textTransform: "none",
              },
              width: "100%",
              "& .MuiTab-root.Mui-selected": {
                color: "#CBACF9",
                fontWeight: "bold",
              },
            }}
          >
            {NAV_ITEMS.map((item, index) => (

              <Tab
                key={index}
                label={item.label}
                component={Link}
                href={item.href}
              // icon={pathname === item.href && <item.icon color="currentColor" />}
              />
            ))}
          </Tabs>

        </ContainerNavigation>
      </ContainerHeader>
    </Box>
  );
};

export default Navigation;

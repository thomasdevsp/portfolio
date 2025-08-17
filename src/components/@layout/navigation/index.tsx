import { useBreakpoint } from "@/hooks/useBreakpoints";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Logo from "../logo";
import Flower from "./icons/flower";
import Info from "./icons/info";
import Ticket from "./icons/ticket";
import { ContainerHeader, ContainerNavigation } from "./styles";

const NAV_ITEMS = [
  {
    label: "Atrações",
    href: "/",
    icon: (props) => <Flower color={props.color} />,
  },
  {
    label: "Ingressos",
    href: "/ingressos",
    icon: (props) => <Ticket color={props.color} />,
  },
  {
    label: "Informações",
    href: "/informacoes",
    icon: (props) => <Info color={props.color} />,
  },
];

const Navigation = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const pathname = usePathname();
  const isMobile = useBreakpoint("sm");

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  React.useEffect(() => {
    const index = NAV_ITEMS.findIndex((item) => item.href === pathname);
    setTabIndex(index);
  }, [pathname]);

  return (
    <Box>
      <ContainerHeader>
        <ContainerNavigation>
          <Link href="/" style={{ width: "100%", maxWidth: "320px" }}>
            <Logo height={isMobile ? 50 : 80} white={!isMobile} />
          </Link>

          {!isMobile && (
            <Tabs
              value={tabIndex}
              onChange={handleChange}
              centered
              sx={{
                background: "#7E1612",
                gap: "2rem",
                minHeight: "5.5rem", // Redução da altura das abas
                "& .MuiTabs-indicator": {
                  backgroundColor: "white",
                },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: "normal",
                  color: "white",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.2rem 1rem",
                  fontSize: "0.9rem",
                  minHeight: "5.5rem", // Garantindo que as abas não fiquem muito altas
                },
                width: "100%",
                "& .MuiTab-root.Mui-selected": {
                  color: "#E7C36C",
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
                  icon={<item.icon color="currentColor" />}
                  iconPosition="start"
                />
              ))}
            </Tabs>
          )}

          <Stack
            gap={0.5}
            alignItems="flex-end"
            color={isMobile ? "primary.dark" : "white"}
            sx={{ width: "100%", maxWidth: "320px" }}
          >
            <Typography variant={isMobile ? "h5" : "h4"} textAlign="end">
              28/11 a 26/12/2025
            </Typography>
            <Typography
              textAlign="end"
              variant="body2"
              fontSize={isMobile ? ".7rem" : ".8rem"}
            >
              de terças a domingos {isMobile && <br />} das 17h às 23h
            </Typography>
          </Stack>
        </ContainerNavigation>
        {isMobile && (
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            centered
            sx={{
              background: "#7E1612",
              minHeight: "3.35rem", // Redução da altura das abas
              "& .MuiTabs-indicator": {
                backgroundColor: "white",
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: "normal",
                color: "#white",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.2rem 0.8rem",
                fontSize: "0.8rem",
                minHeight: "3.35rem", // Garantindo que as abas não fiquem muito altas
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#E7C36C",
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
                icon={<item.icon color="currentColor" />}
                iconPosition="start"
              />
            ))}
          </Tabs>
        )}
      </ContainerHeader>
    </Box>
  );
};

export default Navigation;

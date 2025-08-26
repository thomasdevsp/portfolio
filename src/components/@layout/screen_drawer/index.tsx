import React, { useEffect, useState } from "react";
import { Drawer, Typography, Box, IconButton } from "@mui/material";
import { Close } from "@material-ui/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { data_drawer } from "@/components/@data/drawer";
import { sendGTMEvent } from "@next/third-parties/google";
import { useBreakpoint } from "@/hooks/useBreakpoints";


const ScreenDrawer = () => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const router = useRouter();
  const isMobile = useBreakpoint("sm")

  useEffect(() => {
    if (modal && data_drawer[modal]) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [modal]);

  useEffect(() => {
    if (open) {
      // Aplicar múltiplas técnicas para prevenir rolagem
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      // Restaurar o scroll e os estilos normais
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);


  const handleClose = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("modal");
    router.replace(`?${params.toString()}`, {
      scroll: false,
    });
    setOpen(false);
  };

  useEffect(() => {
    if (open && data_drawer[modal]) {
      sendGTMEvent({
        event: "modal_open",
        modal_name: data_drawer[modal]?.title,
        modal_id: modal,
      });
    }
  }, [open]);

  return (
    <Drawer
      anchor="right"
      transitionDuration={500}
      open={open}
      onClose={handleClose}
      sx={{
        position: "relative",
        "& .MuiDrawer-paper": {
          height: "100%",
          width: "100%",
        },
      }}
    >
      {data_drawer[modal] && data_drawer[modal]({ handleClose, isMobile })}
    </Drawer>
  );
};

export default ScreenDrawer;

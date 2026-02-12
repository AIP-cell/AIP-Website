"use client";

// React Imports
import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import Cookies from "js-cookie";

// Next Imports
import { useRouter } from "next-nprogress-bar";

// MUI Imports
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

// Hook Imports
import { useSettings } from "@core/hooks/useSettings";
import { Box, Link } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

// Styled component for badge content
const BadgeContentSpan = styled("span")({
  width: 8,
  height: 8,
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: "var(--mui-palette-success-main)",
  boxShadow: "0 0 0 2px var(--mui-palette-background-paper)",
});

const UserDropdown = (email: any) => {
  // States
  const [open, setOpen] = useState(false);

  // Refs
  const anchorRef = useRef<HTMLDivElement>(null);

  // Hooks
  const router = useRouter();

  const { settings } = useSettings();

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  const handleDropdownClose = (
    event?: MouseEvent<HTMLLIElement> | (MouseEvent | TouchEvent),
    url?: string
  ) => {
    if (url) {
      router.push(url);
    }

    if (
      anchorRef.current &&
      anchorRef.current.contains(event?.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleUserLogout = async () => {
    // Remove userData and accessToken from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("userData");
      localStorage.removeItem("accessToken");
    }

    Cookies.remove("userData");
    Cookies.remove("accessToken");

    // Redirect to login page
    router.push("/login");
  };
  const styles = {
    px: 4,
    py: 1.75,
    width: "100%",
    display: "flex",
    alignItems: "center",
    color: "text.primary",
    textDecoration: "none",
    "& svg": {
      mr: 2.5,
      fontSize: "1.5rem",
      color: "text.secondary",
    },
  };
  return (
    <>
      <Badge
        ref={anchorRef}
        overlap="circular"
        badgeContent={<BadgeContentSpan onClick={handleDropdownOpen} />}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        className="mis-2"
      >
        <Avatar
          ref={anchorRef}
          alt="John Doe"
          src="/images/avatars/1.png"
          onClick={handleDropdownOpen}
          className="cursor-pointer bs-[38px] is-[38px]"
        />
      </Badge>
      <Popper
        open={open}
        transition
        disablePortal
        placement="bottom-end"
        anchorEl={anchorRef.current}
        className="min-is-[240px] !mbs-3 z-[1]"
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-end" ? "right top" : "left top",
            }}
          >
            <Paper
              className={
                settings.skin === "bordered"
                  ? "border shadow-none"
                  : "shadow-lg"
              }
            >
              <ClickAwayListener
                onClickAway={(e) =>
                  handleDropdownClose(e as MouseEvent | TouchEvent)
                }
              >
                <MenuList>
                  <div
                    className="flex items-center plb-2 pli-4 gap-2"
                    tabIndex={-1}
                  >
                    <Avatar alt="John Doe" src="/images/avatars/1.png" />

                    <div className="flex items-start flex-col">
                      <Typography className="font-medium" color="text.primary">
                        AIP
                      </Typography>
                      <Typography variant="caption">{email.email}</Typography>
                    </div>
                  </div>
                  <Divider className="mlb-1" />
                  <Link
                    style={{ textDecoration: "none" }}
                    href={`/admin/profile`}
                  >
                    <Box sx={{ ...styles }}>
                      <Icon icon="healthicons:ui-user-profile-outline" />
                      Profile
                    </Box>
                  </Link>
                  <Divider className="mlb-1" />
                  <div className="flex items-center plb-2 pli-3">
                    <Button
                      fullWidth
                      variant="contained"
                      color="error"
                      size="small"
                      endIcon={<i className="tabler-logout" />}
                      onClick={handleUserLogout}
                      sx={{
                        "& .MuiButton-endIcon": { marginInlineStart: 1.5 },
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default UserDropdown;

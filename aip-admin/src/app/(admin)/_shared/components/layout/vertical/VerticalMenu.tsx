// MUI Imports
import { useTheme } from "@mui/material/styles";

// Third-party Imports
import PerfectScrollbar from "react-perfect-scrollbar";

// Type Imports
import type { VerticalMenuContextProps } from "@menu/components/vertical-menu/Menu";

// Component Imports
import { Menu, MenuItem, SubMenu } from "@menu/vertical-menu";
import Cookies from "js-cookie";

// Hook Imports
import useVerticalNav from "@menu/hooks/useVerticalNav";

// Styled Component Imports
import StyledVerticalNavExpandIcon from "@menu/styles/vertical/StyledVerticalNavExpandIcon";

// Style Imports
import menuItemStyles from "@core/styles/vertical/menuItemStyles";
import menuSectionStyles from "@core/styles/vertical/menuSectionStyles";

type RenderExpandIconProps = {
  open?: boolean;
  transitionDuration?: VerticalMenuContextProps["transitionDuration"];
};

type Props = {
  scrollMenu: (container: any, isPerfectScrollbar: boolean) => void;
};

const RenderExpandIcon = ({
  open,
  transitionDuration,
}: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon
    open={open}
    transitionDuration={transitionDuration}
  >
    <i className="tabler-chevron-right" />
  </StyledVerticalNavExpandIcon>
);

const VerticalMenu = ({ scrollMenu }: Props) => {
  // Hooks
  const theme = useTheme();
  const verticalNavOptions = useVerticalNav();
  const { isBreakpointReached } = useVerticalNav();

  const data = window.localStorage.getItem("userData") || null;

  const role = data ? JSON.parse(data).role : null;

  // Vars
  const { transitionDuration } = verticalNavOptions;

  const ScrollWrapper = isBreakpointReached ? "div" : PerfectScrollbar;

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: "bs-full overflow-y-auto overflow-x-hidden",
            onScroll: (container) => scrollMenu(container, false),
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: (container) => scrollMenu(container, true),
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => (
          <RenderExpandIcon
            open={open}
            transitionDuration={transitionDuration}
          />
        )}
        renderExpandedMenuItemIcon={{
          icon: <i className="tabler-circle text-xs" />,
        }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <MenuItem
          href="/admin/home/count/add"
          icon={<i className="tabler-home" />}
        >
          Home
        </MenuItem>
        <MenuItem
          href="/admin/aip-journey/our-values"
          icon={<i className="tabler-ad-2" />}
        >
          AIP Journey
        </MenuItem>
        <SubMenu
          label={"AIP Impact"}
          icon={<i className="tabler-adjustments-alt" />}
        >
          <MenuItem href="/admin/aip-impact/casestudies">Case studies</MenuItem>
          <MenuItem href="/admin/aip-impact/people-we-work-with">
            People we work with
          </MenuItem>
          <MenuItem href="/admin/aip-impact/foundation-facts/add">
            Foundation facts
          </MenuItem>
          <MenuItem href="/admin/aip-impact/testimonial">
            Philanthropist speak
          </MenuItem>
        </SubMenu>

        <MenuItem
          href="/admin/giving-roadmap"
          icon={<i className="tabler-columns-3" />}
        >
          Giving Roadmaps
        </MenuItem>
        <MenuItem
          href="/admin/financial-report/report"
          icon={<i className="tabler-adjustments-horizontal" />}
        >
          Financial Report
        </MenuItem>

        <SubMenu
          label={"AIP Founder Network"}
          icon={<i className="tabler-category" />}
        >
          <MenuItem href="/admin/aip-founders-network/description/add">
            Description
          </MenuItem>

          {/* <MenuItem href="/admin/aip-founders-network/methods-of-joining">
            Methods of joining
          </MenuItem> */}
          {/* <MenuItem href="/admin/aip-founders-network/testimonial">
            Philanthropist speak
          </MenuItem> */}
        </SubMenu>

        {/* <SubMenu
          label={"Philanthropist Network"}
          icon={<i className="tabler-align-box-left-stretch" />}
        >
          <MenuItem href="/admin/philanthropist-network/casestudies">
            Case studies
          </MenuItem>
          <MenuItem href="/admin/philanthropist-network/people">
            People we work with
          </MenuItem>
        </SubMenu> */}

        <MenuItem
          href="/admin/team-aip/people"
          icon={<i className="tabler-users" />}
        >
          People of AIP
        </MenuItem>
        {/* <SubMenu label={"NPO"} icon={<i className="tabler-ad-2" />}>
          <MenuItem href="/admin/npo/casestudies">NPO spotlight</MenuItem>
          <MenuItem href="/admin/npo/people-we-partner-with">
            NPOs we partner with
          </MenuItem>
        </SubMenu> */}

        <MenuItem
          href="/admin/projects-programs"
          icon={<i className="tabler-analyze" />}
        >
          Project & Programs
        </MenuItem>
        <MenuItem
          href="/admin/collaborations"
          icon={<i className="tabler-files" />}
        >
          Collborations
        </MenuItem>

        <MenuItem
          href="/admin/galleries"
          icon={<i className="tabler-library-photo" />}
        >
          Gallery
        </MenuItem>
        <MenuItem
          href="/admin/aip-resources"
          icon={<i className="tabler-layers-subtract" />}
        >
          AIP resource
        </MenuItem>
        {/* <MenuItem
          href="/admin/curated-resources"
          icon={<i className="tabler-columns-3" />}
        >
          Curated resource
        </MenuItem> */}
        <MenuItem
          href="/admin/blogs"
          icon={<i className="tabler-blockquote" />}
        >
          Blogs
        </MenuItem>
        <MenuItem href="/admin/books" icon={<i className="tabler-books" />}>
          Books
        </MenuItem>
        <MenuItem href="/admin/marque" icon={<i className="tabler-ad" />}>
          Marque
        </MenuItem>
        <MenuItem href="/admin/modal" icon={<i className="tabler-window" />}>
          Modal
        </MenuItem>
        {/* <MenuItem href="/admin/faq" icon={<i className="tabler-message" />}>
          FAQ
        </MenuItem> */}

        <MenuItem href="/admin/partners" icon={<i className="tabler-user" />}>
          Partners
        </MenuItem>

        <MenuItem
          href="/admin/careers/testimonials"
          icon={<i className="tabler-users" />}
        >
          Career Testimonials
        </MenuItem>
        <MenuItem
          href="/admin/contact-form"
          icon={<i className="tabler-adjustments-horizontal" />}
        >
          Contact Form
        </MenuItem>
        <MenuItem
          href="/admin/general-information"
          icon={<i className="tabler-address-book" />}
        >
          Get in touch
        </MenuItem>

        {role === "1" && (
          <MenuItem href="/admin/users" icon={<i className="tabler-user" />}>
            Users
          </MenuItem>
        )}
        <div style={{ paddingBottom: "20px" }}></div>
      </Menu>
    </ScrollWrapper>
  );
};

export default VerticalMenu;

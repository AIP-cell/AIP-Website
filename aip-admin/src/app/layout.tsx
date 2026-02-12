// Third-party Imports
import "react-perfect-scrollbar/dist/css/styles.css";
import { Toaster } from "react-hot-toast";

// Type Imports
import type { ChildrenType } from "@core/types";

// Style Imports
import "@/app/globals.css";

// Generated Icon CSS Imports
import "@assets/iconify-icons/generated-icons.css";
import QueryProviderClient from "./providers/queryProvider";
import { AuthProvider } from "@/context/AuthContext";
import ProgressProvider from "./progress-bar/ProgressProvider";

export const metadata = {
  title: "AIP",
  description:
    "Vuexy - MUI Next.js Admin Dashboard Template - is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.",
};

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = "ltr";

  return (
    <html id="__next" lang="en" dir={direction}>
      <body className="flex is-full min-bs-full flex-auto flex-col">
        {" "}
        <AuthProvider>
          <ProgressProvider>
            <QueryProviderClient>
              <Toaster
                position="top-right"
                toastOptions={{ className: "react-hot-toast" }}
              />
              {children}
            </QueryProviderClient>
          </ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;

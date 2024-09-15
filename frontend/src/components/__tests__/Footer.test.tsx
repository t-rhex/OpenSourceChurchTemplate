import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Footer from "../Footer";

// Mock the FooterConfig
jest.mock("@configs/FooterConfig", () => ({
  footerConfig: {
    sections: [
      {
        title: "Section 1",
        enabled: true,
        links: [{ label: "Link 1", href: "#" }],
      },
      { title: "Section 2", enabled: false, links: [] },
    ],
    contactInfo: { address: "Test Address", phone: "123-456-7890" },
    socialMedia: [{ label: "Facebook", href: "#", icon: () => <div>FB</div> }],
    legalInfo: {
      copyright: "© 2023 Test Company",
      links: [{ label: "Privacy Policy", href: "#" }],
      additionalText: "All rights reserved",
    },
  },
}));

describe("Footer", () => {
  it("renders the footer skeleton while loading", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getAllByTestId("skeleton-item")).toHaveLength(6);
  });

  it("renders the footer content after loading", async () => {
    render(<Footer />);
    await waitFor(() => {
      expect(screen.getByText("Section 1")).toBeInTheDocument();
      expect(screen.queryByText("Section 2")).not.toBeInTheDocument();
    });
  });

  it("toggles section visibility when clicked", async () => {
    render(<Footer />);
    await waitFor(() => {
      const sectionButton = screen.getByText("Section 1");
      fireEvent.click(sectionButton);
      expect(screen.getByText("Link 1")).toBeInTheDocument();
      fireEvent.click(sectionButton);
      expect(screen.queryByText("Link 1")).not.toBeInTheDocument();
    });
  });

  it("displays contact information", async () => {
    render(<Footer />);
    await waitFor(() => {
      expect(screen.getByText(/Test Address/)).toBeInTheDocument();
      expect(screen.getByText(/123-456-7890/)).toBeInTheDocument();
    });
  });

  it("renders social media links", async () => {
    render(<Footer />);
    await waitFor(() => {
      expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    });
  });

  it("displays legal information", async () => {
    render(<Footer />);
    await waitFor(() => {
      expect(screen.getByText("© 2023 Test Company")).toBeInTheDocument();
      expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
      expect(screen.getByText("All rights reserved")).toBeInTheDocument();
    });
  });

  it("uses the correct color scheme", async () => {
    render(<Footer />);
    await waitFor(() => {
      const footer = screen.getByRole("contentinfo");
      expect(footer).toHaveClass("bg-pakistanGreen");
      expect(footer).toHaveClass("text-cornsilk");

      const sectionButton = screen.getByText("Section 1");
      expect(sectionButton).toHaveClass("text-earthYellow");

      const socialLink = screen.getByLabelText("Facebook");
      expect(socialLink).toHaveClass("text-earthYellow");
      expect(socialLink).toHaveClass("hover:text-tigersEye");
    });
  });

  it("has consistent padding and margin", async () => {
    render(<Footer />);
    await waitFor(() => {
      const footer = screen.getByRole("contentinfo");
      expect(footer).toHaveClass("py-16");

      const container = footer.firstChild;
      expect(container).toHaveClass("container");
      expect(container).toHaveClass("mx-auto");
      expect(container).toHaveClass("px-4");
      expect(container).toHaveClass("space-y-16");
    });
  });
});

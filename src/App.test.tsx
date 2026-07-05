import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

afterEach(() => {
  vi.useRealTimers();
});

describe("portfolio language", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = "zh-CN";
  });

  it("switches the public page to English and remembers the preference", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Switch to English" }));

    expect(await screen.findByRole("heading", { name: /Hello, I’m Tianyu Chen/ })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("en");
    expect(localStorage.getItem("preferred-language")).toBe("en");
    expect(document.title).toBe("Tianyu Chen | Research & Open Source");
  });

  it("keeps controls busy while the language wipe is running", () => {
    vi.useFakeTimers();
    render(<App />);

    const button = screen.getByRole("button", { name: "Switch to English" });
    fireEvent.click(button);

    expect(document.body).toHaveAttribute("aria-busy", "true");
    expect(button).toBeDisabled();

    act(() => vi.advanceTimersByTime(260));
    expect(document.documentElement.lang).toBe("en");

    act(() => vi.advanceTimersByTime(300));
    expect(document.body).not.toHaveAttribute("aria-busy");
    expect(button).toBeEnabled();
  });
});

describe("portfolio links", () => {
  it("exposes the verified research and identity destinations", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /DOI/ })).toHaveAttribute(
      "href",
      "https://doi.org/10.1109/TSG.2025.3635148",
    );
    expect(screen.getByRole("link", { name: /ORCID/ })).toHaveAttribute(
      "href",
      "https://orcid.org/0009-0006-4264-4068",
    );
    expect(screen.getByRole("link", { name: /github.com\/TianyuUniverse/ })).toHaveAttribute(
      "href",
      "https://github.com/TianyuUniverse",
    );
    expect(screen.getByRole("link", { name: /2693196915@qq.com/ })).toHaveAttribute(
      "href",
      "mailto:2693196915@qq.com",
    );
  });

  it("returns to the real document top", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /返回顶部|Back to top/ }));

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(vi.mocked(window.scrollTo)).toHaveBeenCalledTimes(1);
  });
});

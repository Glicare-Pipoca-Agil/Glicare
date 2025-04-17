import IconAppleStoreDarkDesktop from "@/public/svg/icon-apple-store-dark-desktop";
import IconAppleStoreDarkMobile from "@/public/svg/icon-apple-store-dark-mobile";
import IconPlayStoreDarkDesktop from "@/public/svg/icon-play-store-dark-desktop";
import IconPlayStoreDarkMobile from "@/public/svg/icon-play-store-dark-mobile";

export default function StoreButtonsDark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        target="_blank"
        className="lg:hidden"
        href="https://play.google.com/store"
        aria-label="Baixar na Play Store"
        rel="noopener noreferrer"
      >
        <IconPlayStoreDarkMobile />
      </a>
      <a
        target="_blank"
        className="lg:hidden"
        href="https://apps.apple.com"
        aria-label="Baixar na Apple Store"
        rel="noopener noreferrer"
      >
        <IconAppleStoreDarkMobile />
      </a>

      <a
        target="_blank"
        className="hidden lg:block"
        href="https://play.google.com/store"
        aria-label="Baixar na Play Store"
        rel="noopener noreferrer"
      >
        <IconPlayStoreDarkDesktop />
      </a>
      <a
        target="_blank"
        className="hidden lg:block"
        href="https://apps.apple.com"
        aria-label="Baixar na Apple Store"
        rel="noopener noreferrer"
      >
        <IconAppleStoreDarkDesktop />
      </a>
    </div>
  );
}
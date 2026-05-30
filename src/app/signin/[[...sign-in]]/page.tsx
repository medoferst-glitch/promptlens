import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex-1 bg-[#f6f5f4] flex items-center justify-center py-16 px-4">
      <SignIn
        appearance={{
          variables: {
            colorBackground: "#ffffff",
            colorInputBackground: "#ffffff",
            colorText: "#1a1a1a",
            colorTextSecondary: "#787671",
            colorPrimary: "#5645d4",
            colorInputText: "#1a1a1a",
            borderRadius: "8px",
          },
          elements: {
            card: "shadow-none border border-[#e5e3df]",
            headerTitle: "text-[#1a1a1a]",
            headerSubtitle: "text-[#787671]",
            socialButtonsBlockButton: "border-[#c8c4be] text-[#37352f] hover:bg-[#f6f5f4]",
            formFieldLabel: "text-[#37352f]",
            footerActionLink: "text-[#5645d4] hover:text-[#4534b3]",
          },
        }}
      />
    </main>
  );
}

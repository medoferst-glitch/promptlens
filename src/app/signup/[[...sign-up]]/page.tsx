import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex-1 bg-neutral-950 flex items-center justify-center py-16 px-4">
      <SignUp
        appearance={{
          variables: {
            colorBackground: "#171717",
            colorInputBackground: "#0a0a0a",
            colorText: "#ededed",
            colorTextSecondary: "#a3a3a3",
            colorPrimary: "#4f46e5",
            colorInputText: "#ededed",
            borderRadius: "0.75rem",
          },
          elements: {
            card: "shadow-none border border-neutral-800",
            headerTitle: "text-white",
            headerSubtitle: "text-neutral-400",
            socialButtonsBlockButton: "border-neutral-700 text-neutral-300 hover:bg-neutral-800",
            formFieldLabel: "text-neutral-300",
            footerActionLink: "text-indigo-400 hover:text-indigo-300",
          },
        }}
      />
    </main>
  );
}

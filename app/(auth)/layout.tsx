import SocialAuthForm from "@/components/ui/forms/SocialAuthForm";
import Image from "next/image";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-auth-light dark:bg-auth-dark flex min-h-screen items-center justify-center bg-cover bg-no-repeat px-4 py-10">
      <section className="background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md light-border sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-[2.5px]">
            <h1 className="text-dark100_light900 h2-bold">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">To get your question answered</p>
          </div>
          <Image src="images/site-logo.svg" width={50} height={50} alt="DevFlow logo"></Image>
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;

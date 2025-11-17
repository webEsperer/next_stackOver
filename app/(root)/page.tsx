import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

const Home = async () => {
 
  return (
    <>
      <div>Let us start</div>
      <form action={async () => {
        'use server'
        await signOut({redirectTo: ROUTES.SIGN_IN})
      }}><Button type="submit">Log Out</Button></form>
    </>
  );
}

export default Home

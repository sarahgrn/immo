import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return <SignIn className="flex justify-center items-center min-h-screen" routing="hash" />;
}

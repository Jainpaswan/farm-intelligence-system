import {
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/clerk-react";

import { Lock } from "lucide-react";

interface AuthGuardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  onBack?: () => void;
}

export default function AuthGuard({
  children,
  title = "Authentication Required",
  description = "Please sign in to access this feature",
  onBack,
}: AuthGuardProps) {
  return (
    <>
      {/* NOT LOGGED IN */}
      <SignedOut>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">

          <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-green-100">

            <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
              <Lock className="text-green-700" size={38} />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {title}
            </h1>

            <p className="text-gray-600 mb-8">
              {description}
            </p>

            <SignInButton mode="modal">
              <button className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition">
                Sign In
              </button>
            </SignInButton>

            {onBack && (
              <button
                onClick={onBack}
                className="mt-5 text-green-700 hover:underline"
              >
                Back to Home
              </button>
            )}

          </div>
        </div>
      </SignedOut>

      {/* LOGGED IN */}
      <SignedIn>
        {children}
      </SignedIn>
    </>
  );
}
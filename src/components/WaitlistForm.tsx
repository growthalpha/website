import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const { toast } = useToast();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    // Client-side validation
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError("");

    const res = await fetch("https://formspree.io/f/xqaqjqnq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSubmitted(true);
      setError(false);
      event.target.reset();
      toast({
        title: "Thank you!",
        description: "We'll be in touch soon.",
      });
    } else {
      setError(true);
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <form
      onSubmit={handleEmailSubmit}
      className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
    >
      <div className="w-full">
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className={`bg-navy border-neon-blue/50 h-12 text-white ${emailError ? "border-red-500" : ""}`}
          onChange={() => emailError && setEmailError("")}
        />
        {emailError && (
          <p className="text-red-500 text-sm mt-1 text-left">{emailError}</p>
        )}
      </div>
      <Button
        type="submit"
        className="bg-neon-blue hover:bg-neon-blue/90 hover:shadow-[0_0_15px_rgba(91,129,253,0.5)] transition-all text-white font-normal px-8 py-6 text-lg group"
      >
        Get Early Access
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
}

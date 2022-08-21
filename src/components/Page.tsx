import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

interface PageProps {
  color: string;
  changePage: boolean;
  setChangePage: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Page = ({ children, color, changePage, setChangePage }: PageProps) => {
  const [trigger, setTrigger] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null!);

  const handleWheel = useCallback((e: any) => {
    const delta = Math.sign(e.deltaY);
    if (!trigger) {
      setTrigger(true);
      if (delta > 0 && trigger) {
        setTrigger(true);
      } else {
        setTrigger(false);
      }
    }
    setTrigger(false);
  }, []);
  useEffect(() => {
    const element = ref.current;
    setChangePage(trigger);
    element?.addEventListener("wheel", handleWheel);
    return () => {
      element?.removeEventListener("wheel", handleWheel);
    };
  }, [trigger]);

  return (
    <motion.div
      ref={ref}
      initial={}
      animate={}
      variants={}
      style={{
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        position: "absolute",
        inset: "0"
      }}
    >
      {children}
    </motion.div>
  );
};

export default Page;

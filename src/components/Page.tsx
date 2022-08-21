import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { variants_type, direction } from "../helpers";

interface PageProps {
  color?: string;
  changePage?: boolean;
  setChangePage?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  initial?: string;
  animate?: string | boolean;
  variants?: direction;
}

const Page = ({
  children,
  color,
  changePage,
  setChangePage,
  initial,
  animate,
  variants
}: PageProps) => {
  const [trigger, setTrigger] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null!);
  console.log(trigger);
  const handleWheel = useCallback(
    (e: any) => {
      const delta = Math.sign(e.deltaY);
      if (delta < 0) {
        setChangePage?.(true);
      } else {
        setChangePage?.(false);
      }
    },
    [changePage]
  );
  useEffect(() => {
    const element = ref.current;
    // setChangePage?.(trigger);
    element?.addEventListener("wheel", handleWheel);
    return () => {
      element?.removeEventListener("wheel", handleWheel);
    };
  }, [changePage]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      variants={variants}
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

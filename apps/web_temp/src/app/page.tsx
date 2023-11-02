import Image from "next/image";
// import { Card } from "ui";
import ComingSoon from "~/components/organisms/ComingSoon";
import styles from "./page.module.css";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}


export default function Page(): JSX.Element {
  return (
    <main className={`${styles.main}
      w-full
      h-screen
      bg-gradient-to-r 
      from-[#B5DEDB]
      via-[#D5FDF5]
      to-[#FFF]
      background-animate
    `}>
      <div className="shadow-lg border rounded-lg w-2/3 max-w-[500px] bg-white">
            <div className="z-20">
              <ComingSoon />
            </div>

            {/* REPLACE WITH PULSING TRADE TRACKER LOGO */}
            {/* <div className={styles.logo}>
              <Image
                alt=""
                height={120}
                priority
                src="turborepo.svg"
                width={120}
              />
            </div> */}

        
        </div>
    </main>
  );
}

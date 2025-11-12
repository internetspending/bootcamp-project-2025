import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1 className={style.logo}>
        <Link href="/">Jeron Perey</Link>
      </h1>
      <nav className={style.navList}>
        <Link href="/" className={style.navLink}>Home</Link>
        <Link href="/blog" className={style.navLink}>Blog</Link>
        <Link href="/portfolio" className={style.navLink}>Portfolio</Link>
        <Link href="/resume" className={style.navLink}>Resume</Link>
        <Link href="/contact" className={style.navLink}>Contact</Link>
      </nav>
    </header>
  );
}

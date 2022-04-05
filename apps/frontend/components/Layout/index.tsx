import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import IsomorphicBackground from "../IsomorphicBackground";

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <IsomorphicBackground/>
      <Header/>
      <main className="container">
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout

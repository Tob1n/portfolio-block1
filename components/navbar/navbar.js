import Link from "next/link"
import React from "react"
import css from "styled-jsx/css"
import { FaGithub } from "react-icons/fa"

function navbar() {
  return (
    <>
      <style jsx>{styles}</style>
      <nav>
        <div className="logo"></div>

        <div className="links">
          <Link href="/">
            <a>Projects</a>
          </Link>

          <Link href="/about">
            <a>About</a>
          </Link>
        </div>

        <div className="social">
          <a href="https://github.com">
            <FaGithub />
          </a>
        </div>
      </nav>
    </>
  )
}

const styles = css`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 20px;
  }
  .logo {
    margin-right: auto;
  }
  .links {
    display: flex;
    margin-right: 40px;
  }
  a {
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    margin-right: 10px;
    transition: all 0.2s;
    vertical-align: middle;
    color: rgba(255, 255, 255, 0.8);
  }
  a:hover {
    color: rgba(255, 255, 255, 1);
    transform: scale(1.04);
  }
  .social a {
    font-size: 28px;
  }
`

export default navbar

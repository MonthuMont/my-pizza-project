import React from "react"
import ContentLoader from "react-content-loader"
import styles from "./../PizzaComp.module.css";

const SkeletonPizza = (props) => (
    <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="191" cy="118" r="111" /> 
    <rect x="85" y="233" rx="49" ry="49" width="213" height="27" /> 
    <rect x="94" y="268" rx="0" ry="0" width="203" height="76" /> 
    <rect x="96" y="351" rx="6" ry="6" width="84" height="32" /> 
    <rect x="216" y="352" rx="6" ry="6" width="78" height="29" />
  </ContentLoader>
)

export default SkeletonPizza;
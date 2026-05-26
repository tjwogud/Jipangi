"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import styles from "./page.module.css";
import logo from "./assets/images/jipangi.png"
import digital_bg from "./assets/images/digital_bg.png"

function Item({id, data}) {
  return (
    <a className={styles.item}
      href={`./apps/${id}/instruction.pdf`}
      target="_blank"
      rel="noopener noreferrer">
      <img
        alt={data.title}
        src={`./apps/${id}/icon.png`}/>
      <p>{data.title}</p>
    </a>
  )
}

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./apps/apps.txt")
      .then(res => res.text())
      .then(txt =>
        Promise.all(
          txt.split('\n')
          .map(v => v.trim())
          .filter(Boolean)
          .map(id => fetch(`./apps/${id}/data.json`)
            .then(res => res.json())
            .then(data => ({id, data})))))
      .then(setData);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <Image
          alt="지팡이 로고"
          src={logo}
          className={styles.icon}/>
        &#32;지팡이<br/>
        <p className={styles.subtitle}>: 모두를 위한 앱 설명서</p></h1>
      <Image
        alt="디지털 배경"
        src={digital_bg}
        className={styles.digital_bg}
        priority/>
      <p className={styles.overlay_1}>
        앱 사용이 어려운 당신을 위한,<br/>
        어떤 앱이 필요한지 모르는 당신을 위한,
      </p>
      <p className={styles.overlay_2}>앱 설명서, 지팡이</p>
      <p className={styles.overlay_3}>by 반박E와 I들</p>
      <p className={styles.scroll_down}>↓↓↓ 아래로 내려가 시작하세요</p>
      <div className={styles.grid_container}>
        {data.map(v => {
          <Item
            key={v.id}
            id={v.id}
            data={v.data}
          />
        })}
      </div>
    </div>
  );
}

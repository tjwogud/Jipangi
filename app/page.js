import Image from "next/image";
import styles from "./page.module.css";
import logo from "./assets/images/jipangi.png"
import digital_bg from "./assets/images/digital_bg.png"

export default function Home() {
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
        className={styles.digital_bg}/>
      <p className={styles.overlay_1}>
        앱 사용이 어려운 당신을 위한,<br/>
        어떤 앱이 필요한지 모르는 당신을 위한,
      </p>
      <p className={styles.overlay_2}>앱 설명서, 지팡이</p>
      <p className={styles.overlay_3}>by 반박E와 I들</p>
      <p className={styles.scroll_down}>↓↓↓ 아래로 내려가 시작하세요</p>
      <div className={styles.grid_container}>
        <div className={styles.item}>
          <img 
            alt="네이버 지도"
            src="./apps/naver_map/icon.png"/>
          <p>네이버 지도</p>
        </div>
        <div className={styles.item}>
          <img 
            alt="앱 이름"
            src="./apps/kakao_taxi/icon.png"/>
          <p>카카오 택시</p>
        </div>
      </div>
    </div>
  );
}

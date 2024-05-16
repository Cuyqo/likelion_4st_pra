import './Header.css';

export function Header() {
  return (
    <header>
      <nav>
        <img src="/images/당근.png" alt="당근" className="carimg" />
        <ul className="list">
          <li className="item">중고거래</li>
          <li className="item">동네업체</li>
          <li className="item orange">알바</li>
          <li className="item">부동산</li>
          <li className="item">중고차 직거래</li>
        </ul>
        <div className="service">
          <button className="btn search">
            <img src="/images/돋보기.png" alt="돋보기" className="search_img" />
          </button>
          <button className="btn chat">채팅하기</button>
        </div>
      </nav>
      <div className="banner">
        <div className="banner-txt">
          <h2>
            우리 동네에서 찾는
            <br />
            당근알바
          </h2>
          <span className="min10">
            걸어서 10분 거리의
            <br />
            동네 알바들 여기 다 있어요.
          </span>
          <button className="upload">공고 올리기</button>
        </div>
        <img src="/images/header-image.png" alt="배너" className="banner-img" />
      </div>
    </header>
  );
}

import './Footer.css';
import icon from './images/banner-icon.png';

export function Footer() {
  return (
    <div className="last">
      <img className="lastImg" src={icon} alt="banner" />
      <span className="lastText">
        대규모 채용이 필요하다면
        <br />
        당근알바 기업용 서비스에 대해 알아보세요!
      </span>
      <button className="btn7">7일 무료 체험</button>
      <button className="btnQna">1:1 문의</button>
    </div>
  );
}

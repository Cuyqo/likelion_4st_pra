import './Main.css';
const data = {
  item: [
    {
      id: 1,
      title: '문흥 무인아이스크림 매장관리',
      intro: '단짠아이스크림',
      price: '월급 150,000',
      image: '/images/1.jpeg',
    },
    {
      id: 2,
      title: '오늘 6시부터 생산알바 오실분',
      intro: '크로플덕오리아가씨',
      price: '시급 9860',
      image: '/images/2.jpeg',
    },
    {
      id: 3,
      title: '주방 근무자하실 분.',
      intro: '꽁당보리밥',
      price: '일급 140,000',
      image: '/images/3.jpeg',
    },
    {
      id: 4,
      title: '콜센터 상담원 (스케줄 접수) 모집합니다',
      intro: '한국중소기업센터(주)',
      price: '시급 15,000',
      image: '/images/4.jpeg',
    },
    {
      id: 5,
      title: '청소하실분 구해요~(경력무관)',
      intro: '충청남도 천안시 서북구',
      price: '건당 15,000',
      image: '/images/5.jpeg',
    },
    {
      id: 6,
      title: '마당에 잔돌 제거 및 청소',
      intro: '제주특별자치도 서귀포시',
      price: '일급 100,000',
      image: '/images/6.jpeg',
    },
    {
      id: 7,
      title: '퍼레이드 팀을 모집하고 있습니다',
      intro: '라우더 유아 체육',
      price: '건당 50,000',
      image: '/images/7.jpeg',
    },
    {
      id: 8,
      title: '뷰티 메이크업 모델',
      intro: '부산광역시 동래구 온천동',
      price: '월급 150,000',
      image: '/images/8.jpeg',
    },
    {
      id: 9,
      title: '해외쇼핑몰 상품등록 알바 구합니다',
      intro: '피엠씨코퍼레이션',
      price: '시급 10,000',
      image: '/images/9.jpeg',
    },
    {
      id: 10,
      title: '학원데스크 직원 구합니다',
      intro: '이아이 시매스학원',
      price: '시급 10,000',
      image: '/images/10.jpeg',
    },
  ],
};

const Part = () => {
  return (
    <main className="part">
      <h3 className="popular">인기 당근알바</h3>ç
      <ul className="part-list">
        {data.item.map((goods) => (
          <Card key={goods.id} {...goods} />
        ))}
      </ul>
    </main>
  );
};

const Card = (props) => {
  const { title, intro, price, image } = props;
  return (
    <li className="part-item">
      <div className="part-img">
        <img src={image} alt="" />
      </div>
      <div className="part-txt">
        <h5 className="part-title">{title}</h5>
        <p className="part-intro">{intro}</p>
        <strong className="part-price">{price}</strong>
      </div>
    </li>
  );
};

export function Main() {
  return <Part />;
}

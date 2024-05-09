const Card = ({
  name,
  image,
  currentPrice,
  ath,
  athChangePercentage,
  marketCapRank,
}) => {
  return (
    <li className="bg-purple-100 w-44 h-72">
      <div className="bg-orange-100 flex justify-center py-8">
        <img className="w-20 h-20" src={image} alt={name} />
      </div>
      <div>{name}</div>
      <div>현재가: {currentPrice}원</div>
      <div>
        최고가: {ath}원({athChangePercentage})
      </div>
      <div>시가총액순위: {marketCapRank}</div>
    </li>
  );
};

export default Card;

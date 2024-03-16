import styled from "styled-components";
const SliderCard = ({ title, thumbnail, price }) => {
  return (
    <Card>
      <div className="p-3">
        <Image src={thumbnail} alt={title} />
        <div className="time-tag mt-1 mb-2">
          <TimeTextContainer>
            <TimeImageContainer>
              <TimeImage
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
                alt="time"
              />
            </TimeImageContainer>
            <span>15 MINS</span>
          </TimeTextContainer>
        </div>
        <Title className="mb-2">{title}</Title>
        <div className="flex items-center w-full h-6 mb-2">
          <p className="truncate text-xs ">40g</p>
        </div>

        <div className="flex justify-between">
          <Price className="text-xs">₹{price}</Price>
          <button>Add</button>
        </div>
      </div>
    </Card>
  );
};

export default SliderCard;
const Card = styled.div`
  border: 0.5px solid var(--gray400);
  box-shadow: rgba(var(--base-dark-rgb), 0.04) 2px 2px 8px;
  border-radius: 8px;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 140px;
`;
const Title = styled.h3`
  overflow: hidden;
  color: var(--base-dark);
  font-weight: 600;
  font-size: 0.813rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.125rem;
  width: 100%;
  height: 36px;
  margin-bottom: 0.375rem;
`;
const TimeTextContainer = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 9px;
  color: rgba(var(--base-dark-200-rgb), 1);
  gap: 0.125rem;
  align-items: center;
  display: inline-flex;
  border-radius: 4px;
  border-width: 0px;
  padding: 0px 4px;
  background-color: rgba(var(--white-100-rgb), 1);
  justify-content: center;
  height: 100%;
`;
const TimeImageContainer = styled.span`
  width: 11px;
  display: inline-block;
`;
const TimeImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;
const Price = styled.p`
  color: rgba(var(--grey-200-rgb), 1);
  font-weight: 600;
`;

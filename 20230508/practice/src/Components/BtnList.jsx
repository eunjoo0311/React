const items = [
  { name: "기분이 좋아요" },
  { name: "기분이 정말 좋아요" },
  { name: "기분이 최고예요" },
  { name: "기분이 미쳤어요" },
];

function BtnList() {
  return items.map((item) => {
    return (
      <>
        <button>{item.name}</button>
      </>
    );
  });
}

export default BtnList;

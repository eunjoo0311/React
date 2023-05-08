function Resume(props) {
  return (
    // <div style={{ border: "1px solid", width: "500px" }}>
    //   <h1>{props.name} 자기소개서</h1>
    //   <h1>{props.hello}</h1>
    //   <h2>취미 : {props.hobby}</h2>
    //   <h2>좋아하는 음식 : {props.food}</h2>
    //   <h2>
    //     좋아하는 색 : <span style={{ color: props.color }}>{props.color}</span>
    //   </h2>
    // </div>

    <div>
      <h2>{props.name} 자기소개서</h2>
      <strong>{props.hello}</strong>
      <dl>
        <dt>취미 : </dt>
        <dd>{props.hobby}</dd>
        <dt>좋아하는 음식 : </dt>
        <dd>{props.food}</dd>
        <dt>좋아하는 색 : </dt>
        <dd>{props.color}</dd>
      </dl>
    </div>
  );
}

export default Resume;

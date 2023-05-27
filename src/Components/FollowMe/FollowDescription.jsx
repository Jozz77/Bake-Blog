const FollowDescription = (props) => {
  return (
    <div
      className={`description absolute top-0 left-0 bottom-0 right-0 px-[5%]  ${
        props.show
          ? "show"
          : "hidden"
      }`}
      onMouseOut={props.onClose}
    >
      <div className="description-content bg-[#B5C7A5] absolute top-0 left-0 bottom-0 right-0">
        <h1>Fine bread</h1>
        <p className="text-[#A62B00] font-normal text-[1rem] leading-[140%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          sunt architecto animi magnam odio expedita distinctio natus veniam
          laudantium,
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};
export default FollowDescription;

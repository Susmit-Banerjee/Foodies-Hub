
const Shimmer = () => {
  return (
    <div className="shimmer-restaurants">
      {[...Array(10).keys()].map((index)=>{
        return(
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img" /> 
            <div className="shimmer-info1" />
            <div className="shimmer-info2" />
          </div>
        );
      } )}
    </div>
  )
}

export default Shimmer;
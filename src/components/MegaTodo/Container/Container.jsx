// import React from "react";
// import ShowData from "../ShowData/ShowData";
// const Container = (props) => {
//   const { handleDataRemove } = props;

//   return (
//     <div className="container">
//       {props?.data?.map((item) => (
//         <ShowData
//           key={item.id}
//           item={item}
//           liftingFunction={handleDataRemove}
//         />
//       ))}
//     </div>
//   );
// };

// export default Container;

import React from "react";
import ShowData from "../ShowData/ShowData";

const Container = (props) => {
  return (
    <>
      {props.users.length === 0 ? (
        ""
      ) : (
        <div className="container">
          <h1>HEy Your Story here</h1> <br />
          {props.users.map((user) => (
            <ShowData
              user={user}
              key={user.id}
              handleRemoveData={props.handleRemoveData}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Container;

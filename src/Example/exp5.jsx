// function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <img className="Avatar"
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//           />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   };

function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <Avatar />
          <Name />
          <Text />
          <Data />
        </div>  
      </div>
    );
  };

  function Avatar(props) {
      return (
        <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
        />
      )
  };

  function Name(props) {
      return (
        <div className="UserInfo-name">
            {props.author.name}
        </div>
      )
  }

  function Text(props) {
    <div className="Comment-text">
        {props.text}
    </div>
  }

  function Data(props) {
    <div className="Comment-date">
        {formatDate(props.date)}
    </div>
  }
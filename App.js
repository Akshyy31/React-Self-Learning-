import React from "react";
import ReactDOM from "react-dom/client";

// let heading = React.createElement("h1", { id: "heading" }, "Namasthe React ");
// let root = ReactDOM.createRoot(document.getElementById("main"));
// root.render(heading);

// jsx

// let head = <h1 id="head" className="head"> jsx react element  </h1>
// let root1 = ReactDOM.createRoot(document.getElementById("main2"));
// root1.render(head);

// functional component
// const Title = () => <h2>Title component</h2>;

// function HeadingComponent() {
//   return (
//     <div>
//       {/* <Title/>
//       {Title()} */}
//       <h1>Namaste React Functional component</h1>
//     </div>
//   );
// }
// let ele = (
//   <>
//     <HeadingComponent />
//     <h2>Hello </h2>
//   </>
// );

// let root = ReactDOM.createRoot(document.getElementById("main"));
// root.render(ele);

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          alt="logo-image"
          src="https://marketplace.canva.com/EAFMme8qKdk/1/0/1600w/canva-modern-restaurant-bar-and-grill-food-logo-qG0JgcwrqHQ.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="appLayout">
      <Header />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("appLayout"));
root.render(<Applayout />);

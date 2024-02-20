import React from "react";  
// import { createElement as ce } from "react"; 
import ReactDOM from "react-dom/client"; 
// default import
import Header from "./component/Header.js";
// name import
// import { Title } from "./component/Header.js";
import Body from "./component/Body.js"; 
import Footer from "./component/Footer.js"
import Aboutclass from "./component/About.js";
import Contact from "./component/contact.js";
import Error from "./component/Error.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import Profile from "./component/Profile.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

// React.createElement => object =>html (render to DOM)
// const Heading = ()=>React.createElement(
//     "h1",
//     {
//         id:"title",
//         key:"h1",
//     },
//     "Food villa"
// );


// jsx
// const heading2 = (                               // react element
//     <h1 id="title" key="h2"> helloooo </h1>
//     );



// make our web site dynamic 
//this type of UI know as 
//config driven UI Mimp

// const config = [
// {
//     type : "carousel",
//     card :[
//         {
//             offerName : "50% off"
//         },
//         {
//             offerName : "no deliverycharge"
//         },
//     ]
// },
// {
//     type : "resturent",
//     card :[
//         {
//             name :"Burger King",
//             image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//             cusines : ["Burger","American"],
//             rating : "4.2",
//             },
//             {
//                 name :"KFC",
//                 image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//                 cusines : ["Burger","American"],
//                 rating : "4.2",
//                 },
//     ]
// },
// ]





// jsx only one parent that why get error <Title/><Body/><Footer/> 
// use React.Fragment <React.Fragment></React.Fragment> = <></>

const AppLayout = ()=>{
    return(
        <> 
        <Header/>
        <Outlet/>
        {/* <Body/>
        <About/>
        <Contact/> */}
        <Footer/>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<Aboutclass/>,
                children:[{
                    path:"profile", // not write /Profile
                    element:<Profile/>,
                }]
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"restaurant/:resId",
                element:<RestaurantMenu/>,
            },
        ],
    },
    // {
    //     path:"/about",
    //     element:<About/>,
    // }
]);



// const obj = {
//    backgroundColor:"red",
//    border :"1px solid black",

// }
// const jsx=(
//     <div 
//     className="jsx"
//     style={obj}/*{{backgroundColor:"red"}}*/ >
//     <h1>hiiii</h1>
//     </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);

// root.render(jsx);
// root.render(heading);
// root.render(heading2);



    // const heading = React.createElement("h1",
    //                             {
    //                                 id:"title",
    //                                 key:"h1",
    //                                    // prop
    //                              hello:"world"} ,  // prop
    //                             "hello1 from parcel"); //id:"title", this = id="title"   id class style
    // const heading2 = React.createElement("h1",{id:"title", key:"h2",},"hello2"); 

    // const container = React.createElement("div",{id:"container"},[heading,heading2]);

    // const root = ReactDOM.createRoot(document.getElementById("root"));
    //  root.render(heading); 
    // root.render(container);
        
        
    //    const heading =  document.createElement("h1");
    //    heading.innerHTML = "hello";
    //    const root = document.getElementById("root");
    //    root.appendChild(heading);

    
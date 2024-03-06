import { useState } from "react";

const Section = ({title,description,isvisible,setIsVisible})=>{
    // const [isvisible , setIsVisible] = useState(false);
    return(
        <div className="border border-black m-2 p-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {
                isvisible ? (<button onClick={()=>setIsVisible(false)} className="cursor-pointer underline">Hide</button>)
                :
                (<button onClick={()=>setIsVisible(true)} className="cursor-pointer underline">Show</button>)
            }

            {isvisible && <p>{description}</p>}
        </div>
    );
};

const Instamart = ()=>{
    const [visiblesection , setVisibleSection]= useState("about"
        // {
        // showAbout:false,
        // showTeam:false,
        // showCareers:false,
        // }
    )
    return (
    <div>
    <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
    <Section
         title={"About Instamart"}
        description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
        // isvisible={sectionconfig.showAbout}
        isvisible={visiblesection === "about"}
        setIsVisible={()=>setVisibleSection("about")}
    //     setIsVisible={()=>setSectionConfig({
    //     showAbout:true,
    //     showTeam:false,
    //     showCareers:false,
    // })}
    />

    <Section
         title={"Team Instamart"}
        description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
    
        // isvisible={sectionconfig.showTeam}
        isvisible={visiblesection === "team"}
        setIsVisible={()=>setVisibleSection("team")}
    />

     <Section
         title={"Careers"}
        description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
    
        // isvisible={sectionconfig.showCareers}
        isvisible={visiblesection === "careers"}
        setIsVisible={()=>setVisibleSection("careers")}
    />
    </div>
    )
}

export default Instamart;

// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

// const Section = ({ title, description, isVisible, setIsvisible }) => {
//   //   const [isVisible, setIsvisible] = useState(false);
//   return (
//     <div className="border-2  my-2 border-gray-900 rounded-sm  duration-200">
//       <button
//         onClick={() => setIsvisible(!isVisible)}
//         className="w-full text-left text-2xl p-2 "
//       >
//         {title}{" "}
//         <span className="text-lg">
//           {isVisible ? (
//             <FontAwesomeIcon icon={faArrowUp} />
//           ) : (
//             <FontAwesomeIcon icon={faArrowDown} />
//           )}
//         </span>
//       </button>

//       {isVisible && <p className="p-2 ">{description}</p>}
//     </div>
//   );
// };

// const InstaMart = () => {
//   const [visibleSection, setIsVisibleSection] = useState("about");
//   return (
//     <div className="m-auto w-4/5 my-5 py-2">
//       <h1 className="text-3xl font-bold">Instamart</h1>{" "}
//       <hr className="my-2 border-gray-500" />
//       <Section
//         title={"About Instamart"}
//         description={
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//         }
//         isVisible={visibleSection === "about"}
//         setIsvisible={() =>
//           setIsVisibleSection(visibleSection === "about" ? "" : "about")
//         }
//       />
//       <Section
//         title={"Team Instamart"}
//         description={
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//         }
//         isVisible={visibleSection === "team"}
//         setIsvisible={() =>
//           setIsVisibleSection(visibleSection === "team" ? "" : "team")
//         }
//       />
//       <Section
//         title={"Careers at Instamart"}
//         description={
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//         }
//         isVisible={visibleSection === "career"}
//         setIsvisible={() =>
//           setIsVisibleSection(visibleSection === "career" ? "" : "career")
//         }
//       />
//     </div>
//   );
// };

// export default InstaMart;
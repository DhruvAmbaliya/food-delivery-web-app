import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"; // dont use createBrowserRouter - not use browser for testing

test("logo should load on rendering header",()=>{
    // load header(render the header component)
    const header = render(
        <StaticRouter>
    <Provider store={store}>
    <Header/>
    </Provider>
    </StaticRouter>
    ); 
        // console.log(header);

    //ckeck if logo is loaded
    //always use TestId
    const logo  =  header.getAllByTestId("logo");
    // console.log(logo[0]);
    expect(logo[0].src).toBe("http://localhost/dummy.png");  

})

test("online status should be green on rendering header",()=>{
    // load header(render the header component)
    const header = render(
        <StaticRouter>
    <Provider store={store}>
    <Header/>
    </Provider>
    </StaticRouter>
    ); 
        // console.log(header);

    //ckeck if logo is loaded
    //always use TestId
    const onlineStatus  =  header.getByTestId("online-status"); // not use getAllByTestId

    expect(onlineStatus.innerHTML).toBe("✅");  // not use .src

})

test("cart should have zero item on rendering header",()=>{
    // load header(render the header component)
    const header = render(
        <StaticRouter>
    <Provider store={store}>
    <Header/>
    </Provider>
    </StaticRouter>
    ); 
        // console.log(header);

    //ckeck if logo is loaded
    //always use TestId
    const cart  =  header.getByTestId("cart"); // not use getAllByTestId

    expect(cart.innerHTML).toBe("Cart- 0 item");  // not use .src 

})

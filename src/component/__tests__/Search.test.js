import "@testing-library/jest-dom";
import { render, waitFor,fireEvent } from "@testing-library/react"
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"; // dont use createBrowserRouter - not use browser for testing
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(RESTAURANT_DATA);
        },
    });
});

test("shimmer should load on HomePage",()=>{
    const body = render(
        <StaticRouter>
    <Provider store={store}>
    <Body/>
    </Provider>
    </StaticRouter>
    );  

    const shimmer = body.getByTestId("shimmer");

    expect(shimmer.children.length).toBe(1); //.innerHTML

});

test("restaurants should load on HomePage",async()=>{
    const body = render(
        <StaticRouter>
    <Provider store={store}>
    <Body/>
    </Provider>
    </StaticRouter>
    );  

    await waitFor(()=> expect(body.getByTestId("search-btn")))

    const reslist = body.getByTestId("res-list");

    expect(reslist.children.length).toBe(20); 

});

test("search for string(food) on HomePage",async()=>{
    const body = render(
        <StaticRouter>
    <Provider store={store}>
    <Body/>
    </Provider>
    </StaticRouter>
    );  

    await waitFor(()=> expect(body.getByTestId("search-btn")))

    const input = body.getByTestId("search-input");

    fireEvent.change(input,{
        target:{
        value:"food",
        },
    });

    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);

    // const reslist = body.getByTestId("res-list");
    // expect(reslist.children.length).toBe(2); 

});


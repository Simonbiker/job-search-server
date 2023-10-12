import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <>
            {/* <nav>NavBar</nav> */}
            <Outlet />
        </>
    )
};

export default HomeLayout
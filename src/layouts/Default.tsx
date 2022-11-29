import {Suspense, useEffect} from "react";
import {Outlet} from "react-router-dom";
import {useRedux} from "hooks";


const loading = () => <div className=""></div>;

type DefaultLayoutProps = {};

const DefaultLayout = (props: DefaultLayoutProps) => {
    const {appSelector} = useRedux();

    return (
        <Suspense fallback={loading()}>
            <Outlet/>
        </Suspense>
    )
}
export default DefaultLayout;

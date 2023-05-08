import {lazy, Suspense}  from 'react';
// import Inner from "./Inner";

const Inner = lazy(() => import("./Inner"));

export default function Outter({num, setNum}) {
    return (
        <div>
            <Suspense fallback={<div>...Loading</div>}>
                <Inner num={num} setNum={setNum} />
            </Suspense>
        </div>
    );
}
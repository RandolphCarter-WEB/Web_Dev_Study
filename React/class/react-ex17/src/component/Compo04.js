import { useState } from "react";
import Compo05 from "./Compo05";
import Compo06 from "./Compo06";

export default function Compo04() {
    const [pageNum, setPageNum] = useState(true);

    return (
        <div>
            {pageNum ? <Compo05 setPageNum={setPageNum}></Compo05>
            : <Compo06 setPageNum={setPageNum}></Compo06>}
        </div>
    );
}
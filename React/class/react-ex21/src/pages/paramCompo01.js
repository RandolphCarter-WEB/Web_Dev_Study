import { useParams } from "react-router-dom";
import Compo01 from "../component/Compo01";
import Compo02 from "../component/Compo02";
import Compo03 from "../component/Compo03";

export default function ParamCompo01() {
    const {id} = useParams();

    const pageObj = {
        page1 : (<Compo01 />),
        page2 : (<Compo02 />),
        page3 : (<Compo03 />)
    };

    return (
        <div>
            <p>Current Param : {id}</p>
            {pageObj["page"+id]}
        </div>
    );
}
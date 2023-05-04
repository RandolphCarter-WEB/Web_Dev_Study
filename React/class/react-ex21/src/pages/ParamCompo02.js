import { useSearchParams } from "react-router-dom";
export default function ParamCompo02() {
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    const name = searchParams.get("name");

    return (
        <div>
            <h1>ParamCompo02</h1>
            <p>id : {id}</p>
            <p>name : {name}</p>
        </div>
    );
}
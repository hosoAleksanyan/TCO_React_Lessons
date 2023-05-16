import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <div className="loading_container">
            <ReactLoading type={"spokes"} color={"black"} height={65} width={65} />
            <p>Loading...</p>
            <span>Please wait.</span>
        </div>
    );
}
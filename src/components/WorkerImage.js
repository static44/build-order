import gather from "../images/Gather.jpg";
import TimeDisplay from "./TimeDisplay";

const WorkerImage = (props) => {
    let workerImage = gather;

    const {WorkerCount, Time} = props;

    return (
        <div id="WorkerImage">
            <img src={workerImage}/>
            <h3 className="WorkerWords">{WorkerCount}</h3>

        </div>
    );
};

export default WorkerImage;

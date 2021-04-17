import gather from "../images/Gather.jpg";

const WorkerImage = (props) => {
    let workerImage = gather;

    const {WorkerCount} = props;

    return (
        <div id="WorkerImage">
            <img src={workerImage}/>
            <h3 className="WorkerWords">{WorkerCount}</h3>

        </div>
    );
};

export default WorkerImage;

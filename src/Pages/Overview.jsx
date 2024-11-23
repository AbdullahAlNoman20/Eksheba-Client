import UseAuth from "../Hooks/UseAuth";

const Overview = () => {
    const {user} = UseAuth();
    return (
        <div>
            Overview For:
        </div>
    );
};

export default Overview;
import UseAuth from "../Hooks/UseAuth";

const Overview = () => {
    const {user} = UseAuth();
    return (
        <div>
            Overview For: {user.email}
        </div>
    );
};

export default Overview;
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/card.css";

function JobsGrid() {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const [subState, setSubState] = useState("");

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { authSub: subState },
    pollInterval: 1000,
  });

  useEffect(() => {
    if (user) {
      let sub: any = user.sub;
      setSubState(sub);
    }
  }, [user]);

  if (loading || isLoading) {
    return <div className="loadingScreen">Loading...</div>;
  }

  if (isAuthenticated && data && data.getUser && data.getUser.jobs) {
    console.log(data);
    return (
      <div className="jobGrid">
        {data.getUser.jobs.map((job: any, index: number) => (
          <div className="card" key={index}>
            <div className="cardLeft">
              <div>{job.company}</div>
              <div>{job.title}</div>
            </div>
            <div className="cardMiddle">
              <div>{job.applyDate}</div>
              <div>{job.applyMethod}</div>
            </div>
            <div className="cardRight">
              <div>{job.status}</div>
              <div className="cardEdit">EDIT</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
export default JobsGrid;

import React, {Fragment} from "react";

export const Repos = ({repos}) => (
    <>
        {repos.map( repo => (
            <div key={repo.id} className="card mb-3">
                <div className="card-body">
                    <h5>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {repo.name}
                        </a>
                    </h5>
                </div>
            </div>
        ))}
    </>
)
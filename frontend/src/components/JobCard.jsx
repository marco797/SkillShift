//EACH JOB HAS A NAME, A DESCRIPTION OF THE JOB AND A LIST OF SKILLS

function JobCard({ job }) {
    return (
        <div className="job-card">
            <h1>{job.name}</h1>
            <h3>{job.description}</h3>
            <h3>{job.skills.join(', ')}</h3>
        </div>
    );
}

export default JobCard
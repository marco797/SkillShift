function JobCard({job}) {
    return (
        <div className="job-card">
            <h3>{job.name}</h3>
            <h2>{job.description}</h2>
            <h2>{job.skills}</h2>
        </div>
    )
}

export default JobCard
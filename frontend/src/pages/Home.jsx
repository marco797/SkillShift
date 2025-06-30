import React, { useState, useMemo } from 'react';
import JobCard from '../components/JobCard.jsx'

// PLACEHOLDER OF THE DATABASE
const jobs = [
    { id: 1, name: "Vfx artist", skills: ["NUKE", "HOUDINI"] },
    { id: 2, name: "developer", skills: ["C++", "Python"] },
    { id: 3, name: "cuoco", skills: ["team work", "cucinare"] },
];



function Home() {
    // ALL STATES FOR THE SELECTED SKILLS, FOR THE CURRENT SKILL AND TO SUBMIT THE LIST OF SELECTED SKILLS
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [currentSkill, setCurrentSkill] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // HERE I HAVE FLATTENED ALL THE SKILLS THAT I HAVE IN THE DB, TO MAP IT IN THE SUGGESTED SKILLS
    const availableSkills = useMemo(() => {
        const allSkills = jobs.flatMap(job => job.skills);
        return [...new Set(allSkills.map(skill => skill.trim()))].sort();
    }, []);

    function handleAddSkill() {
        const skill = currentSkill.trim();
        if (skill && !selectedSkills.includes(skill)) {
            setSelectedSkills([...selectedSkills, skill]);
        }
        setCurrentSkill('');
    }
    function handleRemoveSkill(skillToRemove) {
        setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
    }


    function handleSubmit(e) {
        //PREVENT THE DEFAULT IN ORDER TO NOT RELOAD THE PAGE
        e.preventDefault();
        setSubmitted(true);
    }


    return (
        <>
            {/*SKILLS LIST ALREADY IN THE DATABASE*/}
            <datalist id="skills-list">
                {availableSkills.map((skill) => (
                    <option key={skill} value={skill} />
                ))}
            </datalist>

            <form onSubmit = {handleSubmit}>
                <h1>Welcome to Skill Shift</h1>
                <h2>Add your skills!</h2>
                <input type={"text"}
                       placeholder="e.g. Python"
                       className="skill-input"
                       value={currentSkill}
                       list="skills-list"
                       onChange={(e) => setCurrentSkill(e.target.value)}></input>
                <button
                    type="button"
                    onClick={handleAddSkill}
                    className="add-skill-button"
                    >
                        Add Skill
                </button>


                {/*RENDER ONLY IF THERE IS AT LEAST ONE SKILL SELECTED*/}
                {selectedSkills.length > 0 && (
                    <>
                    <div>
                        {selectedSkills.map(skill => (
                            /*THE INDEX OF THE SKILL IS THE SKILL ITSELF, BECAUSE I WILL NOT HAVE DUPLICATES*/
                            <span key={skill}>
                                {skill}
                                <button
                                    type="button"
                                    onClick={() =>handleRemoveSkill(skill)}>
                                    &times;
                                </button>
                            </span>
                        ))}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="submit-button"
                        onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                    </>

                )}

                {submitted && (
                    <p>Thank you! Your skills have been submitted.</p>
                )}


            </form>

        </>


    );
}

export default Home
interface GetEllByRoleProps {
  skills: string[];
}

const GetAllByRole = ({ skills }: GetEllByRoleProps) => {
  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default GetAllByRole;

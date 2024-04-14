export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>this is The Profile Page of {name}</div>;
};

export default Profile;

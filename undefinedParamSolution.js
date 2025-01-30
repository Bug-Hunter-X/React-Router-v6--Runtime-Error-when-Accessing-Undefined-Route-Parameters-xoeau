import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();

  // Check for undefined userId before accessing it
  const userIdValue = userId ? userId : 'Guest';

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userIdValue}</p> {/* Using the safe userIdValue */}
    </div>
  );
}

export default UserProfile;
import ProfileCard from "./card.jsx";
import { users } from "../data/users.js";

export default function Profiles() {
  return (
    <div className="card-grid">
      {users.map((user) => (
        <ProfileCard
          key={user.id}
          {...user}
          onFollow={() => console.log(user.name + " Followed")}
          onMessage={() => console.log("Message → " + user.name)}
          onNotify={() => console.log("Notify → " + user.name)}
        />
      ))}
    </div>
  );
}
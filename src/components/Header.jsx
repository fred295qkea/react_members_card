import SignupForm from "./SignupForm";
import Button from "./Button";
export default function Header() {
  return (
    <>
      <img src="team.svg" alt="team" />
      <h2>Add team members</h2>
      <p>You haven't added any team members to your project yet. As the owner of this project, you can manage team member permissions</p>
      <div>
        <SignupForm />
        <Button variant="primary" text="Add member" />
      </div>
    </>
  );
}

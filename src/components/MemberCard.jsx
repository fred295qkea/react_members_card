import Button from "./Button";
import Avatar from "./Avatar";
export default function MemberCard(props) {
  return (
    <>
      <Avatar image={props.avatarImage} altText="Person" />
      <p>{props.name}</p>
      <p>{props.title}</p>
      <Button variant="secondary" text="Invite" />
    </>
  );
}

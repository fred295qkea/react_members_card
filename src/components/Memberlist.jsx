import MemberCard from "./MemberCard";
export default function Memberslist() {
  return (
    <>
      <p>Team members previously added to projects</p>
      <MemberCard avatarImage="person.svg" name="John Stones" title="Central defender" />
      <MemberCard avatarImage="person.svg" name="Maguire" title="Central defender" />
      <MemberCard avatarImage="person.svg" name="Simon Kjær" title="Central defender" />
    </>
  );
}

import UsersList from "@/components/UsersList";

export default function UserPage() {
  
  return (
    <div className="align-center flex h-full flex-col items-center justify-between ">
      <h1>User Page</h1>

      <UsersList />     
    </div>
  );
}

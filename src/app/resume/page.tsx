import { roles } from "@/constants/roles";
import Role from "./_components/role";
import Technologies from "./_components/technologies";
export default function Resume() {
  return (
    <main className="flex flex-col w-4/5 lg:w-[800px]">
      <div className="resume flex flex-col">
        <div className="flex-col">
          {roles.map((role, index) => (
            <Role
              key={role.title + index}
              title={role.title}
              company={role.company}
              website={role.website}
              startDate={role.startDate}
              endDate={role.endDate}
              bulletPoints={role.bulletPoints}
            />
          ))}
        </div>
      </div>
      <Technologies />
    </main>
  );
}

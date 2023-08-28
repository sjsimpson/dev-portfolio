import { roles } from "@/constants/roles";
import { technologies } from "@/constants/technologies";
import Role from "./_components/role";
import Technology from "./_components/technology";
import Technologies from "./_components/technologies";
export default function Resume() {
  return (
    <>
      <div className="flex flex-col w-1/3">
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
      </div>
    </>
  );
}

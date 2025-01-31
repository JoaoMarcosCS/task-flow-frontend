import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { takeInitialLetter } from "@/utils/take-initial-letter";
import { MemberBoardInterface } from "../interfaces/member-board.interface";

export const MemberGeneric = ({ member }: { member: MemberBoardInterface }) => {
  return (
    <div className="shadow rounded-3xl px-3 p-4 bg-slate-100">
      <div className="flex flex-wrap flex-row justify-start gap-4 items-center">
        <Avatar>
          <AvatarFallback className="rounded-full bg-yellow-200">
            {takeInitialLetter(member?.name ?? "")}
          </AvatarFallback>
        </Avatar>

        <h1 className="text-lg">{member.name}</h1>
      </div>
      <div>
        <p className="text-muted-foreground text-base">
          Nível: {member.role.description}
        </p>
      </div>
    </div>
  );
};

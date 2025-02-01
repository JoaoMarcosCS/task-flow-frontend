import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { takeInitialLetter } from "@/utils/take-initial-letter";
import { MemberBoardInterface } from "../interfaces/member-board.interface";
import { DeleteMemberCard } from "./cards/DeleteMemberCard";

export const MemberGeneric = ({
  member,
  boardId,
}: {
  member: MemberBoardInterface;
  boardId: number;
}) => {
  return (
    <div className="shadow rounded-3xl px-3 p-4 bg-slate-100">
      <div className="flex flex-wrap flex-row justify-start gap-4 items-center">
        <Avatar>
          <AvatarFallback className="rounded-full bg-yellow-200">
            {takeInitialLetter(member?.name ?? "")}
          </AvatarFallback>
        </Avatar>

        <h1 className="text-lg">{member.name}</h1>
        <h1 className="w-full">{member.email}</h1>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground text-base">
          Nível: {member.role.description}
        </p>
        <DeleteMemberCard userId={member.id} boardId={boardId} />
      </div>
    </div>
  );
};
